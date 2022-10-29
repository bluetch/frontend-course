import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState, useRef } from 'react';
import styles from '/styles/employee.module.scss';

// https://sheet.best/admin
// const APIURL = "https://sheet.best/api/sheets/58e09de4-a8b4-4bce-bdf8-7384083359c9";
const APIURL = "https://script.google.com/macros/s/AKfycby14-_yDoPPNNc_QX3swZBHoIkuxIX_PICZ8kUR_KuC4c-cfo1Hh3EqRBDhQKixwWqPPQ/exec";

interface User {
  id: String,
  name: String,
  team: String,
  role: String
}

export default function EmployeeList() {
  const router = useRouter();
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const teamRef = useRef<HTMLInputElement>(null);
  const roleRef = useRef<HTMLInputElement>(null);

  const fetchData = async () => {
    setIsLoading(true);
    await fetch(APIURL)
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setUsers(data);
        setIsLoading(false);
      })
  }

  const postData = () => {
    fetch(APIURL, {
      method: "POST",
      // mode: "cors",
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
      body: JSON.stringify({
        name: nameRef.current?.value,
        team: teamRef.current?.value,
        role: roleRef.current?.value
      }),
    })
      .then(res => res.json())
      .then(data => {
        // console.log(JSON.parse(data.postData.contents));
        let content = JSON.parse(data.postData.contents);
        setUsers([...users, { 
          id: users.length + 1 + "", 
          name: content.name, 
          team: content.team, 
          role: content.role 
        }])
        // setUsers([...users, { id: data.length + 1, name: data.name, team: data.team, role: data.role }])
      })
      .catch(error => console.log("error:", error))
  }

  const handleRowClick = (id: String) => {
    router.push(`/employee/${id}`);
  }

  useEffect(() => {
    fetchData();
  }, [])
  return (
    <div className="container">
      <h1>Employee List</h1>
      <div className={styles.actions}>
        <label htmlFor="name">
          <span>name:</span>
          <input type="text" id="name" ref={nameRef} />
        </label>
        <label htmlFor="role">
          <span>team:</span>
          <input type="text" id="team" ref={teamRef} />
        </label>
        <label htmlFor="role">
          <span>role:</span>
          <input type="text" id="role" ref={roleRef} />
        </label>
        <button onClick={postData}>Add</button>
      </div>
      {isLoading ? (
        <div className={styles.loading}>Loading...</div>
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Team</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item, index) => {
              return (
                <tr key={index} onClick={() => handleRowClick(item.id)}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.team}</td>
                  <td>{item.role}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      )
      }

    </div >
  )
}

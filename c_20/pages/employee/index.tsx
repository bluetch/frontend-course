import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState, useRef } from 'react';
import styles from '/styles/main.module.scss';

const APIURL = "https://script.google.com/macros/s/AKfycby14-_yDoPPNNc_QX3swZBHoIkuxIX_PICZ8kUR_KuC4c-cfo1Hh3EqRBDhQKixwWqPPQ/exec";

interface User {
  id: String,
  name: String,
  team: String,
  role: String
};

export default function EmployeeList() {
  const router = useRouter();
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const idRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const teamRef = useRef<HTMLInputElement>(null);
  const roleRef = useRef<HTMLInputElement>(null);

  const fetchData = async () => {
    setIsLoading(true);
    await fetch(`${APIURL}?0`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
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
        id: idRef.current?.value,
        name: nameRef.current?.value,
        team: teamRef.current?.value,
        role: roleRef.current?.value
      }),
    })
      .then(res => res.json())
      .then(data => {
        let content = JSON.parse(data.postData.contents);
        setUsers([...users, {
          id: content.id,
          name: content.name,
          team: content.team,
          role: content.role
        }])
        // @ts-ignore: Object is possibly 'null'.
        nameRef.current.value = null;
        // @ts-ignore: Object is possibly 'null'.
        teamRef.current.value = null;
        // @ts-ignore: Object is possibly 'null'.
        roleRef.current.value = null;
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
      <Head>
        <title>Employee List | EMS</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <div className={styles.card}>
        <h1>Employee List</h1>
        <div className={styles.actions}>
          <label htmlFor="name">
            <span>ID:</span>
            <input type="text" id="name" ref={idRef} />
          </label>
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
          <button onClick={postData} className={styles.btn}>Add</button>
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
                    <td>
                      <Link href={`/employee/${item.id}`}>{item.name}</Link>
                    </td>
                    <td>{item.team}</td>
                    <td>{item.role}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        )}
      </div>
    </div >
  )
}



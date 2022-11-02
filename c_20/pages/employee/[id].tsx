import Link from "next/link";
import { GetStaticProps } from "next";
import styles from '/styles/employee.module.scss';

const APIURL = "https://script.google.com/macros/s/AKfycby14-_yDoPPNNc_QX3swZBHoIkuxIX_PICZ8kUR_KuC4c-cfo1Hh3EqRBDhQKixwWqPPQ/exec";

interface User {
  id: number,
  name: string,
  team: string,
  role: string,
};

export default function EmployeeDetail(data: User) {
  const user = data[0];
  // console.log("user", user)
  return (
    <div className="container">
      <Link href="/employee" className={styles.btn}>Back</Link>
      <h1>profile</h1>
      {/* <h1>{id}detail</h1> */}
      <p>employee ID: {user.id}</p>
      <p>name: {user.name}</p>
      <p>team: {user.team}</p>
      <p>role: {user.role}</p>

    </div>
  )
}

export const getStaticPaths = async () => {
  const res = await fetch(APIURL);
  const data = await res.json();
  // console.log("dataPath", data)
  const paths = data.map((item: User) => {
    return {
      params: {
        id: `${item.id}`
      }
    }
  })
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const params  = context.params;
  const res = await fetch(`${APIURL}?${params?.id}`);
  // const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const data = await res.json();
  return {
    props: {
      ...data,
    }
  }
};
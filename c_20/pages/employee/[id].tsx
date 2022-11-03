import Image from "next/image";
import { useRouter } from "next/router";
import { GetStaticPropsResult, GetStaticProps } from "next";
import styles from '/styles/main.module.scss';

const APIURL = "https://script.google.com/macros/s/AKfycby14-_yDoPPNNc_QX3swZBHoIkuxIX_PICZ8kUR_KuC4c-cfo1Hh3EqRBDhQKixwWqPPQ/exec";

interface User {
  id: number,
  name: string,
  team: string,
  role: string,
};

interface HomeProps {
  host: string,
}

export default function EmployeeDetail(data: any) {
  const router = useRouter();
  console.log(router)
  if(router.isFallback){
    return <div>Loading...</div>
  }
  const user = data[0];
  console.log("user", user)
  return (
    <div className="container">
      <div className={styles.card}>
        <h1>客戶資料</h1>
        <div className={styles.profile}>
          <div className={styles.content}>
            <p>編號: {user.id}</p>
            <p>姓名: {user.name}</p>
            <p>部門: {user.team}</p>
            <p>職稱: {user.role}</p>
          </div>
          <div className={styles.photo}>
            <Image 
            src={require("public/images/user-placeholder.webp")} 
            alt={user.name} 
            width={240} 
            height={240}
            placeholder="blur"
            />
          </div>
        </div>
        <hr />
      </div>
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
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async (context): Promise<GetStaticPropsResult<HomeProps>> => {
  const params = context.params;
  const res = await fetch(`${APIURL}?${params?.id}`);
  const data = await res.json();
  console.log("data", data)
  return {
    props: {
      ...data,
    }
  }
};

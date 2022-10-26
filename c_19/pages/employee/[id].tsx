import { useRouter } from "next/router"

export default function EmployeeDetail(){
  const router = useRouter();
  console.log(router.query)
  return(
    <div className="container">
      <h1>detail</h1>
    </div>
  )
}
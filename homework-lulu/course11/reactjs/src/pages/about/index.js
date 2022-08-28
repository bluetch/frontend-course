import { Layout } from '../../components/Layout';

export const About = () => {
  const handleClick = (x) => {
    console.log(`clicked ${x}`);
  }

  // function handleClickB(x){

  // }
  return (
    <Layout>
      <h1>about page</h1>
      <button onClick={() => handleClick("3")}>Click me</button>
    </Layout>
  )
}
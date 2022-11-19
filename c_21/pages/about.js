import homeHero from "public/images/homeHero.png";
import { Button, Layout } from "components";

export const About = () =>{
  return(
    <Layout>
      <img src={homeHero.src} alt="lulu" className="w-full" />
      <div className="container">
        <h1>About</h1>
        <p>Hello, I am Lulu Chen. At present, he has been engaged in graphic design for more than two years. I love design. Time and space seem to be suspended when designing. The world is only me and design. I design him or he designs me.</p>
        <p>For me, design is not only about conveying aesthetics, but how to convey information clearly and clearly at a glance to achieve the ultimate goal of design.</p>
        <Button href="https://www.linkedin.com/in/jihan-chen-b64850257/" target="_blank">LinkedIn</Button>
      </div>
    </Layout>
  )
}

export default About;
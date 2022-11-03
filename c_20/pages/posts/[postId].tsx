import Link from 'next/link';
import { useRouter } from 'next/router';
import { GetStaticPropsResult, GetStaticProps } from "next";
import styles from '/styles/main.module.scss';

interface Post {
  [x: string]: any;
  post: {
    id: string,
    title: string,
    body: string
  }
}

interface HomeProps {
  host: string,
}

const Post = (post: Post) => {
  const router = useRouter()
  console.log(post)

  return (
    <div className="container">
      <div className={styles.card}>
        <h1>
          {post.id} {post.title}
        </h1>
        {/* <Link href="/posts" className={styles.btn}>Back</Link> */}
        <p>{post.body}</p>
      </div>
    </div>
  )
}

export default Post;

export const getStaticPaths = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json()
  const paths = data.map((post: Post) => {
    return {
      params: { postId: `${post.id}` }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (context): Promise<GetStaticPropsResult<HomeProps>> => {
  const params = context.params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params?.postId}`
  )
  const data = await response.json()

  return {
    props: {
      ...data,
    }
  }
}
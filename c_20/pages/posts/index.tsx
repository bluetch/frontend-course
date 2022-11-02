import Link from 'next/link';
import styles from '/styles/employee.module.scss';

interface Posts {
  posts: {
    map: any
    id: string,
    title: string,
    body: string
  }
}

const PostList = ({ posts }: Posts) => {
  return (
    <div className="container">
      <Link href="/" className={styles.btn}>Back</Link>
      <h1>List of Posts</h1>
      {posts.map((post: any) => {
        return (
          <div key={post.id}>
            <Link href={`posts/${post.id}`}>
              <h2>
                {post.id} {post.title}
              </h2>
            </Link>
            <hr />
          </div>
        )
      })}
    </div>
  )
}

export default PostList;

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json()

  return {
    props: {
      posts: data
    }
  }
}
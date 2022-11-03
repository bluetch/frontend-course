import Link from 'next/link';
import styles from '/styles/main.module.scss';

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
      <div className={styles.card}>
        <h1>List of Posts</h1>
        {posts.map((post: any) => {
          return (
            <div key={post.id}>
              <Link href={`posts/${post.id}`}>
                <p>
                  {post.id}. {post.title}
                </p>
              </Link>
              <hr />
            </div>
          )
        })}
      </div>
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
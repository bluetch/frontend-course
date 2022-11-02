import Link from 'next/link'

interface Post {
  post: {
    id: string,
    title: string,
    body: string
  }
}

const PostList = ({ posts }: Post) => {
  return (
    <div className="container">
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
      posts: data.slice(0, 3)
    }
  }
}
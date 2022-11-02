import { useRouter } from 'next/router'

interface Post {
  post: {
    id: string,
    title: string,
    body: string
  }
}

const Post = ({ post }: Post) => {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <div className="container">
      <h2>
        {post.id} {post.title}
      </h2>
      <p>{post.body}</p>
    </div>
  )
}

export default Post;

export const getStaticProps = async (context) => {
  const { params } = context
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  )
  const data = await response.json()

  if (!data.id) {
    return {
      notFound: true
    }
  }

  console.log(`Generating page for /posts/${params.postId}`)
  return {
    props: {
      post: data
    }
  }
}

export const getStaticPaths = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json()
  const paths = data.map(post => {
    return {
      params: { postId: `${post.id}` }
    }
  })

  return {
    paths,
    fallback: true
  }
}
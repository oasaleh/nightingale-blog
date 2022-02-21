import Store from '../posts_store.js'

const Posts = async () => {
  const posts = new Store()
  const body = await posts.all()
  const headers = {
    // Allow: 'GET',
    'Access-Control-Allow-Origin': '*',
    // 'Content-type': 'application/json',
  }
  return new Response(body, { headers: headers })
}

export default Posts

import Store from '../posts_store.js'

const Post = async request => {
  const posts = new Store()
  const postId = request.params.id

  const body = JSON.stringify(await posts.find(postId))
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/json',
  }
  if (body) {
    return new Response(body, { headers })
  } else {
    return new Response('Not found', { status: 404, headers })
  }
}

export default Post

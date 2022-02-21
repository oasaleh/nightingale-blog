const setCache = (key, data) => nightingale_data.put(key, data)
const getCache = key => nightingale_data.get(key)

async function Create(request) {
  const cachedPosts = await getCache('posts')
  const posts = JSON.parse(cachedPosts)
  const post = await request.json()
  const body = JSON.stringify(posts.concat(post))
  const dataKey = `posts`
  const headers = {
    'Access-Control-Allow-Origin': '*',
    // 'Content-type': 'application/json',
  }
  try {
    await setCache(dataKey, body)
    return new Response(body, { status: 200, headers: headers })
  } catch (err) {
    return new Response(err, { status: 500, headers: headers })
  }
}

export default Create

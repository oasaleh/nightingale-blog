import { nanoid } from 'nanoid'
const _posts = [
  {
    id: 'MP3JxIOU0FzU',
    title: 'Why You Should Learn Coding',
    content:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed accumsan ex ac ante venenatis malesuada. Fusce in porta diam. Donec luctus placerat tellus. Vestibulum ultricies ipsum nec odio feugiat placerat. Sed sit amet ultrices elit, eu malesuada tellus. Sed feugiat, urna quis ultrices iaculis, sapien dui tincidunt sem, iaculis rutrum velit purus at eros. Mauris eu diam eget mi gravida hendrerit in sit amet risus. In lobortis volutpat mauris eget sagittis. Mauris felis turpis, tempor vitae lectus a, tempus suscipit libero. Cras accumsan ullamcorper dui, et vehicula nulla pharetra eget. Aliquam neque lacus, fermentum ut nisi vitae, suscipit fringilla urna.',
    date: new Date('2021-11-10'),
    author: 'Charles',
  },
  {
    id: 'bF3hPPCelCCG',
    title: 'My First Blog Post',
    content:
      'Suspendisse vulputate leo id leo maximus interdum. Sed finibus volutpat orci. Integer molestie vel diam nec venenatis. Praesent volutpat iaculis convallis. Pellentesque vulputate arcu dolor, quis scelerisque lacus interdum vel. Ut dui purus, faucibus at risus a, lacinia blandit metus. Quisque finibus finibus odio, at aliquet eros venenatis et.',
    date: new Date('2021-10-26'),
    author: 'Richard',
  },
]
const defaultData = { posts: _posts }

const setCache = (key, data) => nightingale_data.put(key, data)
const getCache = key => nightingale_data.get(key)

async function getPosts() {
  const posts = await getCache('posts')
  if (posts) {
    return posts
  }
  await setCache('posts', JSON.stringify(defaultData.posts))
  return defaultData.posts
}

export default class PostsStore {
  async all() {
    // const cachedPostsKey = `posts`
    // let posts
    // const cachedPosts = await getCache(cachedPostsKey)
    // if (!cachedPosts) {
    //   await setCache(cachedPostsKey, JSON.stringify(defaultData.posts))
    //   posts = defaultData.posts
    // } else {
    //   posts = JSON.parse(cachedPosts)
    // }
    const posts = await getPosts()
    return posts
  }

  async find(id) {
    const posts = await this.all()
    return posts.find(post => post.id.toString() === id.toString())
  }
}

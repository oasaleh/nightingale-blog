import { Request, Router } from 'itty-router'

import Posts from './handlers/posts'
import Post from './handlers/post'
import Create from './handlers/create'

const router = Router()

router
  .get('/api/posts', Posts)
  .get('/api/post/:id', Post)
  .post('/api/posts', Create)
  .all('*', () => new Response('Not found', { status: 404 }))

export const handleRequest = (request) => router.handle(request)

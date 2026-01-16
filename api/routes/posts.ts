import { Router, Request, Response } from 'express';
import prisma from '../lib/prisma';

const router = Router();

// GET all posts
router.get('/', async (req: Request, res: Response) => {
  try {
    const posts = await prisma.post.findMany({
      orderBy: { createdAt: 'desc' },
    });
    res.json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

// POST new post (Simple, no auth for MVP but good to have)
router.post('/', async (req: Request, res: Response) => {
  const { title, body } = req.body;

  if (!title || !body) {
    return res.status(400).json({ error: 'Missing title or body' });
  }

  try {
    const newPost = await prisma.post.create({
      data: { title, body },
    });
    res.status(201).json(newPost);
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({ error: 'Failed to create post' });
  }
});

export default router;

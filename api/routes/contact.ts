import { Router, Request, Response } from 'express';
import nodemailer from 'nodemailer';
import prisma from '../lib/prisma';

const router = Router();

// Configure Nodemailer Transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

router.post('/', async (req: Request, res: Response) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    // 1. Save to Database
    const savedMessage = await prisma.message.create({
      data: { name, email, message },
    });

    // 2. Send Email
    // Only attempt to send email if credentials are present to avoid dev crashes
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER, // Send to yourself
        subject: `New Portfolio Message from ${name}`,
        text: `You have received a new message:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br>${message}</p>`
      };

      await transporter.sendMail(mailOptions);
    } else {
        console.log('Skipping email send: Missing credentials');
    }

    res.status(201).json({ success: true, data: savedMessage });
  } catch (error) {
    console.error('Error in contact endpoint:', error);
    res.status(500).json({ error: 'Failed to process request' });
  }
});

export default router;

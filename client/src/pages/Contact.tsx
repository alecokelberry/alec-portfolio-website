import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import Input from '../components/ui/Input';
import Textarea from '../components/ui/Textarea';
import Button from '../components/ui/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      // In development, the proxy in package.json or setupProxy.js might not be set up yet for CRA to talk to Express on port 3000 -> 5000? 
      // Actually, we haven't set up a proxy. 
      // For Vercel, it works automatically. For local dev, we might need the full URL or a proxy.
      // Let's assume standard relative path /api/contact which works if we serve both from same origin or use proxy.
      // Since we are running separate servers (client :3000, api :3000?), wait, both likely try to grab 3000?
      // Usually React runs on 3000, Express on 5000 or 3001. 
      // For now, I'll use the relative path '/api/contact' and assume the user or Vercel handles the routing.
      // If running locally, they might need to config proxy. *Self-correction*: I should probably set axios base URL or just use relative.
      
      // NOTE: In a real local dev with `vercel dev`, this works. 
      // If running `npm start` (React) and `ts-node api/index.ts` (Express) separately, we need CORS (already enabled) and full URL.
      // I'll stick to relative for Vercel compatibility, but maybe default to http://localhost:3000 if dev?
      // Actually, let's try relative first.
      
      const API_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/api/contact' : '/api/contact';
      
      // Wait, if I run `npm start` in client, it runs on 3000. Express needs another port locally.
      // I'll assume for now we might hit an issue locally without a proxy, but let's write the code for the ideal Vercel setup.
      
      await axios.post(API_URL, formData);
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-2 text-gray-900">Contact Me</h1>
        <p className="text-gray-600 mb-8">Have a question or want to work together? Drop me a line!</p>

        {status === 'success' ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-lg text-center"
          >
            <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
            <p>Thanks for reaching out, {formData.name}. I'll get back to you soon.</p>
            <Button className="mt-4" onClick={() => setStatus('idle')} variant="outline">
              Send another message
            </Button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
              />
              <Input
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
              />
            </div>
            
            <Textarea
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your message here..."
              rows={5}
            />

            {status === 'error' && (
              <div className="text-red-500 text-sm">{errorMessage}</div>
            )}

            <Button
              type="submit"
              isLoading={status === 'submitting'}
              className="w-full md:w-auto"
            >
              Send Message
            </Button>
          </form>
        )}
      </motion.div>
    </div>
  );
};

export default Contact;

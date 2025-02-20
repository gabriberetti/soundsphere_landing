'use client';

import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { motion } from 'framer-motion';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      await addDoc(collection(db, 'signups'), {
        name,
        email,
        timestamp: new Date(),
      });
      
      setStatus('success');
      setName('');
      setEmail('');
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
      console.error('Error adding document: ', error);
    }
  };

  return (
    <main className="min-h-screen antialiased bg-primary-900">
      <section className="section-padding min-h-screen flex items-center justify-center">
        <div className="container-width px-6 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md mx-auto bg-primary-800/95 backdrop-blur-lg p-8 sm:p-10 rounded-2xl shadow-xl border border-primary-700/20"
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center tracking-tight">Sign Up</h1>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-base font-medium text-primary-100 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full min-h-[44px] px-4 py-3 bg-primary-900/40 border border-primary-700/30 rounded-lg 
                    focus:outline-none focus:ring-2 focus:ring-accent-pink text-white text-base
                    placeholder:text-primary-400"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label 
                  htmlFor="email" 
                  className="block text-base font-medium text-primary-100 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full min-h-[44px] px-4 py-3 bg-primary-900/40 border border-primary-700/30 rounded-lg 
                    focus:outline-none focus:ring-2 focus:ring-accent-pink text-white text-base
                    placeholder:text-primary-400"
                  placeholder="Enter your email"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className={`btn-primary w-full min-h-[44px] text-base mt-4
                  ${status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {status === 'loading' ? 'Signing up...' : 'Sign Up'}
              </button>
            </form>

            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-6 p-4 bg-green-500/30 border border-green-500/40 rounded-lg text-green-100 text-base text-center"
              >
                Thank you for signing up! We'll be in touch soon.
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-6 p-4 bg-red-500/30 border border-red-500/40 rounded-lg text-red-100 text-base text-center"
              >
                {errorMessage}
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
    </main>
  );
} 
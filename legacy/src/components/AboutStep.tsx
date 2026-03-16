import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Youtube, User } from 'lucide-react';

interface Props {
  onBack: () => void;
}

export default function AboutStep({ onBack }: Props) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', padding: '2rem 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        <button 
          onClick={onBack}
          style={{
            padding: '0.75rem',
            borderRadius: '1rem',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: 'white',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <ArrowLeft size={20} />
        </button>
        <div style={{ textAlign: 'left' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 900, color: 'white', letterSpacing: '-0.04em' }}>About Me</h2>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1.1rem', fontWeight: 600, marginTop: '0.25rem' }}>By Red Person</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', gap: '2rem', textAlign: 'left' }}>
        <section style={{ 
          padding: '3rem', 
          borderRadius: '2.5rem', 
          backgroundColor: 'rgba(255, 255, 255, 0.01)', 
          border: '1px solid rgba(255, 255, 255, 0.05)', 
          backdropFilter: 'blur(20px)', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '1.5rem',
          boxShadow: '0 20px 50px rgba(0,0,0,0.3)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
            <div style={{ padding: '0.75rem', borderRadius: '1rem', backgroundColor: 'rgba(0, 102, 204, 0.1)', border: '1px solid rgba(0, 102, 204, 0.2)' }}>
              <User size={24} color="#0066cc" />
            </div>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'white', fontStyle: 'italic' }}>waddup gang</h3>
          </div>
          
          <p style={{ fontSize: '1.4rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.6, fontWeight: 500 }}>
            "I'm a system trainee working in IT. I don't claim to be a senior architect or a tech mogul. I'm just someone who found themselves fascinated by the bridge between hardware and software."
          </p>

          <p style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.5)', lineHeight: 1.7 }}>
            This project started as a personal challenge to automate what was once a grueling manual process. It grew into a community tool designed to empower users with the same curiosity—to help them understand their hardware and deploy macOS with confidence, not just one click.
          </p>

          <div style={{ display: 'flex', gap: '1rem', paddingTop: '1.5rem' }}>
            <a 
              href="https://www.youtube.com/@redpersonn" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.75rem', 
                padding: '1rem 2rem', 
                borderRadius: '1rem', 
                backgroundColor: 'rgba(220, 38, 38, 0.1)', 
                border: '1px solid rgba(220, 38, 38, 0.2)', 
                color: '#f87171', 
                fontWeight: 800, 
                textDecoration: 'none',
                transition: 'all 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(220,38,38,0.2)'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(220,38,38,0.1)'}
            >
              <Youtube size={20} /> My Channel
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}

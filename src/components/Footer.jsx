import React from 'react';
import { ShieldCheck, Heart, Sparkles, ExternalLink } from 'lucide-react';

export default function Footer({ onSelectTab }) {
  return (
    <footer style={{
      backgroundColor: 'var(--black)',
      color: '#FFFFFF',
      borderTop: 'var(--border-thick)',
      marginTop: '60px',
      padding: '40px 20px 24px 20px',
      fontFamily: 'var(--font-heading)'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '24px',
        marginBottom: '28px'
      }}>
        {/* Brand info */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <span style={{ fontSize: '1.5rem', fontWeight: '900', color: 'var(--yellow)' }}>Web3NG 🇳🇬</span>
            <span className="badge-pop badge-pop-green" style={{ fontSize: '0.7rem' }}>VERIFIED DROP INTELLIGENCE</span>
          </div>
          <p style={{ fontSize: '0.9rem', color: '#9CA3AF', maxWidth: '450px' }}>
            Built for Nigerian Web3 builders, drop hunters, and crypto enthusiasts. Never waste gas on blocked drops again.
          </p>
        </div>

        {/* Quick Nav Links */}
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <button className="btn-pop btn-pop-outline" onClick={() => onSelectTab('radar')}>Drop Radar</button>
          <button className="btn-pop btn-pop-outline" onClick={() => onSelectTab('inspector')}>URL Inspector</button>
          <button className="btn-pop btn-pop-outline" onClick={() => onSelectTab('offramp')}>Naira Calc</button>
          <button className="btn-pop btn-pop-outline" onClick={() => onSelectTab('scam')}>Scam Shield</button>
        </div>
      </div>

      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        borderTop: '1px solid #374151',
        paddingTop: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '12px',
        fontSize: '0.82rem',
        color: '#9CA3AF'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span>Crafted with</span>
          <Heart size={14} style={{ color: 'var(--coral)', fill: 'var(--coral)' }} />
          <span>for the Nigerian Web3 Ecosystem</span>
        </div>

        <div>
          <span>© 2026 Web3NG • Educational & Diagnostic Tool</span>
        </div>
      </div>
    </footer>
  );
}

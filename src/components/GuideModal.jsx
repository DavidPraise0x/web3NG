import React, { useState } from 'react';
import { X, ExternalLink, CheckCircle2, AlertTriangle, ShieldCheck, Copy, Check, ArrowRight } from 'lucide-react';

export default function GuideModal({ drop, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!drop) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(drop.verifiedLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'var(--coral)',
            color: '#FFF',
            border: 'var(--border-thin)',
            borderRadius: '50%',
            width: '32px',
            height: '32px',
            cursor: 'pointer',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '2px 2px 0px var(--black)'
          }}
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <span className="badge-pop badge-pop-yellow">{drop.sponsor}</span>
            <span className="badge-pop badge-pop-purple">{drop.category}</span>
          </div>
          <h2 style={{ fontSize: '1.6rem', color: 'var(--black)' }}>{drop.title}</h2>
        </div>

        {/* Status Banner */}
        <div style={{
          backgroundColor: drop.ngStatus === 'NG_FRIENDLY' ? 'var(--green-light)' : drop.ngStatus === 'WORKAROUND_NEEDED' ? 'var(--yellow-light)' : 'var(--coral-light)',
          border: 'var(--border-thin)',
          borderRadius: 'var(--radius-md)',
          padding: '14px 18px',
          marginBottom: '20px',
          boxShadow: 'var(--shadow-sm)',
          display: 'flex',
          gap: '12px',
          alignItems: 'flex-start'
        }}>
          {drop.ngStatus === 'NG_FRIENDLY' ? (
            <CheckCircle2 size={24} style={{ color: 'var(--green)', flexShrink: 0, marginTop: '2px' }} />
          ) : (
            <AlertTriangle size={24} style={{ color: drop.ngStatus === 'WORKAROUND_NEEDED' ? '#D97706' : 'var(--coral)', flexShrink: 0, marginTop: '2px' }} />
          )}
          <div>
            <h4 style={{ fontSize: '1.05rem', color: 'var(--black)', marginBottom: '4px' }}>
              {drop.statusLabel}
            </h4>
            <p style={{ fontSize: '0.88rem', color: '#4B5563' }}>
              {drop.whyNgBlocked}
            </p>
          </div>
        </div>

        {/* Drop Quick Details Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: '12px',
          marginBottom: '24px'
        }}>
          <div style={{ border: 'var(--border-thin)', borderRadius: 'var(--radius-sm)', padding: '10px', backgroundColor: 'var(--bg-main)' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: '700', color: '#6B7280' }}>ESTIMATED REWARD</div>
            <div style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--purple)' }}>{drop.estimatedReward}</div>
          </div>
          <div style={{ border: 'var(--border-thin)', borderRadius: 'var(--radius-sm)', padding: '10px', backgroundColor: 'var(--bg-main)' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: '700', color: '#6B7280' }}>ESTIMATED GAS</div>
            <div style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--green)' }}>{drop.estimatedGas}</div>
          </div>
          <div style={{ border: 'var(--border-thin)', borderRadius: 'var(--radius-sm)', padding: '10px', backgroundColor: 'var(--bg-main)' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: '700', color: '#6B7280' }}>KYC LEVEL</div>
            <div style={{ fontSize: '0.9rem', fontWeight: '800', color: 'var(--black)' }}>{drop.kycRequirement}</div>
          </div>
        </div>

        {/* Step-by-Step Nigeria Execution Guide */}
        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>🇳🇬 Nigeria Execution Guide</span>
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {drop.workaroundSteps.map((step, idx) => (
              <div key={idx} style={{
                display: 'flex',
                gap: '12px',
                alignItems: 'flex-start',
                backgroundColor: 'var(--bg-main)',
                border: '1px solid var(--black)',
                padding: '10px 14px',
                borderRadius: 'var(--radius-sm)'
              }}>
                <span style={{
                  backgroundColor: 'var(--yellow)',
                  border: '1px solid var(--black)',
                  borderRadius: '50%',
                  width: '24px',
                  height: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '800',
                  fontSize: '0.8rem',
                  flexShrink: 0
                }}>
                  {idx + 1}
                </span>
                <span style={{ fontSize: '0.92rem', color: 'var(--black)' }}>{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Offramp Route */}
        <div style={{
          border: 'var(--border-thin)',
          borderRadius: 'var(--radius-md)',
          padding: '14px',
          backgroundColor: 'var(--cyan-light)',
          marginBottom: '24px'
        }}>
          <h4 style={{ fontSize: '0.95rem', fontWeight: '800', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>💰 Recommended Naira (NGN) Off-ramp</span>
          </h4>
          <p style={{ fontSize: '0.88rem', fontWeight: '600' }}>{drop.offrampPath}</p>
        </div>

        {/* Anti-Phishing Action Footer */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
          <button className="btn-pop btn-pop-outline" onClick={handleCopyLink}>
            {copied ? <Check size={16} style={{ color: 'var(--green)' }} /> : <Copy size={16} />}
            <span>{copied ? 'Link Copied!' : 'Copy Verified Link'}</span>
          </button>

          <a
            href={drop.verifiedLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pop btn-pop-green"
          >
            <span>Proceed to Official Site</span>
            <ExternalLink size={16} />
          </a>
        </div>

        <div style={{
          marginTop: '16px',
          textAlign: 'center',
          fontSize: '0.78rem',
          color: '#6B7280',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '4px'
        }}>
          <ShieldCheck size={14} style={{ color: 'var(--green)' }} />
          <span>Web3NG Verified Domain: {drop.verifiedLink}</span>
        </div>
      </div>
    </div>
  );
}

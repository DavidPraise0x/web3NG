import React from 'react';
import { ExternalLink, CheckCircle2, AlertTriangle, XCircle, ArrowRight, ShieldCheck, Flame, Users } from 'lucide-react';

export default function DropCard({ drop, onOpenGuide }) {
  const getBadgeStyle = (status) => {
    switch (status) {
      case 'NG_FRIENDLY':
        return { className: 'badge-pop badge-pop-green', text: '🟢 100% NG FRIENDLY' };
      case 'WORKAROUND_NEEDED':
        return { className: 'badge-pop badge-pop-yellow', text: '🟡 WORKAROUND READY' };
      case 'NG_BLOCKED':
        return { className: 'badge-pop badge-pop-coral', text: '🔴 NG BLOCKED' };
      default:
        return { className: 'badge-pop', text: 'VERIFIED' };
    }
  };

  const badge = getBadgeStyle(drop.ngStatus);

  return (
    <div className="card-pop" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative' }}>
      {/* Top Card Header */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', marginBottom: '12px', flexWrap: 'wrap' }}>
          <span className={badge.className}>{badge.text}</span>
          <span style={{ fontSize: '0.8rem', fontWeight: '700', color: '#6B7280', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Users size={13} /> {drop.claimsCount}
          </span>
        </div>

        <h3 style={{ fontSize: '1.25rem', marginBottom: '6px', color: 'var(--black)' }}>
          {drop.title}
        </h3>

        <p style={{ fontSize: '0.88rem', color: '#4B5563', marginBottom: '16px', minHeight: '40px' }}>
          {drop.summary}
        </p>
      </div>

      {/* Card Info Box */}
      <div>
        <div style={{
          backgroundColor: 'var(--bg-main)',
          border: 'var(--border-thin)',
          borderRadius: 'var(--radius-sm)',
          padding: '12px',
          marginBottom: '16px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '10px'
        }}>
          <div>
            <div style={{ fontSize: '0.72rem', fontWeight: '800', color: '#6B7280', textTransform: 'uppercase' }}>Est. Reward</div>
            <div style={{ fontSize: '0.95rem', fontWeight: '800', color: 'var(--purple)' }}>{drop.estimatedReward}</div>
          </div>
          <div>
            <div style={{ fontSize: '0.72rem', fontWeight: '800', color: '#6B7280', textTransform: 'uppercase' }}>Gas Cost</div>
            <div style={{ fontSize: '0.95rem', fontWeight: '800', color: 'var(--green)' }}>{drop.estimatedGas}</div>
          </div>
        </div>

        {/* Action Button */}
        <button
          className={`btn-pop ${drop.ngStatus === 'NG_BLOCKED' ? 'btn-pop-coral' : 'btn-pop-green'}`}
          style={{ width: '100%', padding: '12px' }}
          onClick={() => onOpenGuide(drop)}
        >
          <span>{drop.ngStatus === 'NG_BLOCKED' ? 'View Why It Is Blocked' : 'View NG Execution Guide'}</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}

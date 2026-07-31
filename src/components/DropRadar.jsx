import React, { useState } from 'react';
import { Search, Filter, Sparkles, CheckCircle2, AlertTriangle, ShieldCheck, Flame, ExternalLink } from 'lucide-react';
import { VERIFIED_DROPS } from '../data/dropsData';
import DropCard from './DropCard';
import GuideModal from './GuideModal';

export default function DropRadar({ onSelectTab }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalDrop, setActiveModalDrop] = useState(null);

  const categories = ['All', 'USDC/Cash', 'AI Web3 Tools', 'Testnets', 'Learn & Earn', 'DeFi'];
  const statuses = [
    { label: 'All Statuses', value: 'All' },
    { label: '🟢 100% NG Friendly', value: 'NG_FRIENDLY' },
    { label: '🟡 Workaround Ready', value: 'WORKAROUND_NEEDED' },
    { label: '🔴 NG Blocked', value: 'NG_BLOCKED' }
  ];

  const filteredDrops = VERIFIED_DROPS.filter(drop => {
    const matchesCategory = selectedCategory === 'All' || drop.category === selectedCategory;
    const matchesStatus = selectedStatus === 'All' || drop.ngStatus === selectedStatus;
    const matchesSearch = drop.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          drop.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          drop.sponsor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesStatus && matchesSearch;
  });

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '24px 20px' }}>
      {/* Playful Hero Banner */}
      <div style={{
        backgroundColor: 'var(--yellow)',
        border: 'var(--border-thick)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-lg)',
        padding: '32px 28px',
        marginBottom: '32px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ maxWidth: '750px', position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <span className="badge-pop badge-pop-purple">COMMUNITY RADAR ⚡</span>
            <span style={{ fontWeight: '800', fontSize: '0.85rem' }}>Updated 2 mins ago</span>
          </div>

          <h1 style={{ fontSize: '2.4rem', lineHeight: '1.15', marginBottom: '14px', color: 'var(--black)' }}>
            Never Waste Gas on Blocked Web3 Drops Again. 🇳🇬
          </h1>

          <p style={{ fontSize: '1.1rem', fontWeight: '600', color: '#1F2937', marginBottom: '24px' }}>
            We test global crypto drops, USDC faucets (like MoonPay PayBox), and testnets from Nigeria. We bring you verified links, NIN-friendly KYC guides, and instant Naira off-ramps.
          </p>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button className="btn-pop btn-pop-green" onClick={() => onSelectTab('inspector')}>
              <Search size={18} />
              <span>Check Any Drop URL</span>
            </button>
            <button className="btn-pop btn-pop-outline" onClick={() => onSelectTab('offramp')}>
              <span>Calculate NGN Off-ramp</span>
            </button>
          </div>
        </div>
      </div>

      {/* Filter & Search Toolbar */}
      <div style={{
        backgroundColor: 'var(--bg-card)',
        border: 'var(--border-thick)',
        borderRadius: 'var(--radius-md)',
        boxShadow: 'var(--shadow-md)',
        padding: '20px',
        marginBottom: '28px'
      }}>
        <div style={{
          display: 'flex',
          gap: '16px',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '16px'
        }}>
          {/* Search Box */}
          <div style={{ position: 'relative', minWidth: '280px', flex: 1 }}>
            <Search size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#6B7280' }} />
            <input
              type="text"
              placeholder="Search Web3 drops (e.g. PayBox, Grass, Berachain)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 14px 12px 42px',
                fontFamily: 'var(--font-body)',
                fontSize: '0.95rem',
                border: 'var(--border-thick)',
                borderRadius: 'var(--radius-md)',
                outline: 'none',
                boxShadow: 'var(--shadow-sm)'
              }}
            />
          </div>

          {/* Status Filter Dropdown */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Filter size={16} />
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              style={{
                padding: '10px 14px',
                fontFamily: 'var(--font-heading)',
                fontWeight: '700',
                fontSize: '0.9rem',
                border: 'var(--border-thick)',
                borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--shadow-sm)',
                backgroundColor: 'var(--bg-card)',
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              {statuses.map(s => (
                <option key={s.value} value={s.value}>{s.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button
              key={cat}
              className={`badge-pop ${selectedCategory === cat ? 'badge-pop-purple' : ''}`}
              style={{ cursor: 'pointer', fontSize: '0.85rem', padding: '6px 14px' }}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Verified Drops */}
      {filteredDrops.length > 0 ? (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '24px'
        }}>
          {filteredDrops.map(drop => (
            <DropCard
              key={drop.id}
              drop={drop}
              onOpenGuide={(d) => setActiveModalDrop(d)}
            />
          ))}
        </div>
      ) : (
        <div style={{
          backgroundColor: 'var(--bg-card)',
          border: 'var(--border-thick)',
          borderRadius: 'var(--radius-md)',
          padding: '40px',
          textAlign: 'center',
          boxShadow: 'var(--shadow-md)'
        }}>
          <AlertTriangle size={48} style={{ color: 'var(--coral)', marginBottom: '12px' }} />
          <h3 style={{ fontSize: '1.4rem', marginBottom: '8px' }}>No drops found matching your filters!</h3>
          <p style={{ color: '#6B7280', marginBottom: '16px' }}>Try clearing your search query or selecting "All Statuses".</p>
          <button className="btn-pop btn-pop-yellow" onClick={() => { setSelectedCategory('All'); setSelectedStatus('All'); setSearchQuery(''); }}>
            Reset Filters
          </button>
        </div>
      )}

      {/* Guide Modal */}
      {activeModalDrop && (
        <GuideModal
          drop={activeModalDrop}
          onClose={() => setActiveModalDrop(null)}
        />
      )}
    </div>
  );
}

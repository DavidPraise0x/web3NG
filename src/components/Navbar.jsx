import React from 'react';
import { ShieldCheck, Flame, ArrowUpRight, Search, Sparkles, AlertTriangle, Coins } from 'lucide-react';
import { LIVE_TICKER_DATA } from '../data/dropsData';

export default function Navbar({ activeTab, setActiveTab }) {
  return (
    <header style={{ borderBottom: 'var(--border-thick)', backgroundColor: 'var(--bg-card)' }}>
      {/* Top Ticker Bar */}
      <div style={{
        backgroundColor: 'var(--black)',
        color: '#FFFFFF',
        padding: '6px 16px',
        fontSize: '0.82rem',
        fontFamily: 'var(--font-heading)',
        fontWeight: '600',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        overflowX: 'auto',
        whiteSpace: 'nowrap',
        gap: '20px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{ color: 'var(--yellow)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Coins size={14} /> 1 USDC = ₦{LIVE_TICKER_DATA.usdcNgnRate.toLocaleString()} NGN
          </span>
          <span>•</span>
          <span style={{ color: 'var(--green)', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Flame size={14} /> Base Gas: {LIVE_TICKER_DATA.gasPrices.base}
          </span>
          <span>•</span>
          <span style={{ color: 'var(--cyan)' }}>
            Active NG Verified Drops: {LIVE_TICKER_DATA.activeVerifiedDrops}
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ backgroundColor: 'var(--green)', color: 'var(--black)', padding: '2px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: '800' }}>
            TOTAL GAS SAVED: {LIVE_TICKER_DATA.totalSavedGasNgn}
          </span>
        </div>
      </div>

      {/* Main Header Container */}
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '16px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        {/* Brand Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            backgroundColor: 'var(--green)',
            border: 'var(--border-thick)',
            boxShadow: 'var(--shadow-sm)',
            borderRadius: 'var(--radius-md)',
            padding: '8px 12px',
            fontFamily: 'var(--font-heading)',
            fontWeight: '900',
            fontSize: '1.4rem',
            letterSpacing: '-0.03em',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            cursor: 'pointer'
          }} onClick={() => setActiveTab('radar')}>
            <span>Web3NG</span>
            <span style={{ fontSize: '1.2rem' }}>🇳🇬</span>
          </div>
          <span className="badge-pop badge-pop-yellow" style={{ fontSize: '0.75rem' }}>
            NO GAS WASTED ⚡
          </span>
        </div>

        {/* Navigation Tabs */}
        <nav style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <button
            className={`btn-pop ${activeTab === 'radar' ? 'btn-pop-green' : 'btn-pop-outline'}`}
            onClick={() => setActiveTab('radar')}
          >
            <Sparkles size={16} />
            <span>Drop Radar</span>
          </button>

          <button
            className={`btn-pop ${activeTab === 'inspector' ? 'btn-pop-purple' : 'btn-pop-outline'}`}
            onClick={() => setActiveTab('inspector')}
          >
            <Search size={16} />
            <span>Am I Eligible?</span>
          </button>

          <button
            className={`btn-pop ${activeTab === 'offramp' ? 'btn-pop-yellow' : 'btn-pop-outline'}`}
            onClick={() => setActiveTab('offramp')}
          >
            <Coins size={16} />
            <span>Naira Calc</span>
          </button>

          <button
            className={`btn-pop ${activeTab === 'scam' ? 'btn-pop-coral' : 'btn-pop-outline'}`}
            onClick={() => setActiveTab('scam')}
          >
            <ShieldCheck size={16} />
            <span>Scam Shield</span>
          </button>
        </nav>
      </div>
    </header>
  );
}

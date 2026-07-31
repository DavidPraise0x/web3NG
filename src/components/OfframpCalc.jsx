import React, { useState } from 'react';
import { Coins, ArrowRightLeft, Building2, ShieldCheck, Zap, ArrowRight, ExternalLink } from 'lucide-react';
import { NGN_OFFRAMP_PROVIDERS, LIVE_TICKER_DATA } from '../data/dropsData';

export default function OfframpCalc() {
  const [usdAmount, setUsdAmount] = useState(10);
  const [selectedChain, setSelectedChain] = useState('Base');

  const chainGasDeductions = {
    Base: 0.02,
    Solana: 0.01,
    Arbitrum: 0.05,
    Polygon: 0.03,
    Ethereum: 3.50
  };

  const currentGasUSD = chainGasDeductions[selectedChain] || 0.02;
  const netUSD = Math.max(0, usdAmount - currentGasUSD);
  const netNGN = netUSD * LIVE_TICKER_DATA.usdcNgnRate;

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '24px 20px' }}>
      {/* Header Banner */}
      <div style={{
        backgroundColor: 'var(--cyan)',
        border: 'var(--border-thick)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-lg)',
        padding: '28px',
        marginBottom: '28px'
      }}>
        <span className="badge-pop badge-pop-yellow" style={{ marginBottom: '12px' }}>
          NAIRA (NGN) MICRO-OFFRAMP CALCULATOR 💰
        </span>
        <h2 style={{ fontSize: '2.1rem', marginBottom: '8px', color: 'var(--black)' }}>
          Turn Micro USDC Drops into Instant Naira Alerts
        </h2>
        <p style={{ fontSize: '1.05rem', fontWeight: '600', color: '#121212' }}>
          Claimed a $5 or $10 crypto drop? Calculate your net Naira bank deposit after network gas fees and compare the fastest Nigerian off-ramp rails.
        </p>
      </div>

      {/* Interactive Calculator Form */}
      <div style={{
        backgroundColor: 'var(--bg-card)',
        border: 'var(--border-thick)',
        borderRadius: 'var(--radius-md)',
        boxShadow: 'var(--shadow-md)',
        padding: '28px',
        marginBottom: '32px'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          alignItems: 'center'
        }}>
          {/* USD Amount Input */}
          <div>
            <label style={{ display: 'block', fontWeight: '800', fontSize: '0.95rem', marginBottom: '8px' }}>
              Claimed Reward ($ USD Value):
            </label>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '1.4rem', fontWeight: '900' }}>$</span>
              <input
                type="number"
                value={usdAmount}
                onChange={(e) => setUsdAmount(Number(e.target.value))}
                min="1"
                max="5000"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.4rem',
                  fontWeight: '800',
                  border: 'var(--border-thick)',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: 'var(--shadow-sm)',
                  outline: 'none'
                }}
              />
            </div>
          </div>

          {/* Network Selection */}
          <div>
            <label style={{ display: 'block', fontWeight: '800', fontSize: '0.95rem', marginBottom: '8px' }}>
              Blockchain Network:
            </label>
            <select
              value={selectedChain}
              onChange={(e) => setSelectedChain(e.target.value)}
              style={{
                width: '100%',
                padding: '14px 16px',
                fontFamily: 'var(--font-heading)',
                fontSize: '1.05rem',
                fontWeight: '700',
                border: 'var(--border-thick)',
                borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--shadow-sm)',
                backgroundColor: 'var(--bg-card)',
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              <option value="Base">Base Network (Low Gas ~$0.02)</option>
              <option value="Solana">Solana (Low Gas ~$0.01)</option>
              <option value="Arbitrum">Arbitrum (Gas ~$0.05)</option>
              <option value="Polygon">Polygon (Gas ~$0.03)</option>
              <option value="Ethereum">Ethereum L1 (High Gas ~$3.50)</option>
            </select>
          </div>
        </div>

        {/* Calculation Result Summary Box */}
        <div style={{
          marginTop: '28px',
          backgroundColor: 'var(--yellow-light)',
          border: 'var(--border-thick)',
          borderRadius: 'var(--radius-md)',
          padding: '20px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px',
          alignItems: 'center'
        }}>
          <div>
            <div style={{ fontSize: '0.8rem', fontWeight: '800', color: '#6B7280', textTransform: 'uppercase' }}>Est. NGN Bank Deposit</div>
            <div style={{ fontSize: '2rem', fontWeight: '900', color: 'var(--green)' }}>
              ₦{netNGN.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            <div style={{ fontSize: '0.82rem', fontWeight: '700', color: '#4B5563' }}>
              Rate: 1 USDC = ₦{LIVE_TICKER_DATA.usdcNgnRate}
            </div>
          </div>

          <div>
            <div style={{ fontSize: '0.8rem', fontWeight: '800', color: '#6B7280', textTransform: 'uppercase' }}>Gas Deduction ({selectedChain})</div>
            <div style={{ fontSize: '1.2rem', fontWeight: '800', color: selectedChain === 'Ethereum' ? 'var(--coral)' : 'var(--purple)' }}>
              -${currentGasUSD.toFixed(2)} USD
            </div>
            <div style={{ fontSize: '0.82rem', fontWeight: '700', color: '#4B5563' }}>
              Net Claim Value: ${netUSD.toFixed(2)} USD
            </div>
          </div>
        </div>
      </div>

      {/* Directory of Verified Nigerian Off-Ramps */}
      <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Building2 size={22} />
        <span>Supported Nigerian Bank Off-Ramp Rails</span>
      </h3>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        {NGN_OFFRAMP_PROVIDERS.map((provider, idx) => (
          <div key={idx} className="card-pop" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <h4 style={{ fontSize: '1.2rem', color: 'var(--black)' }}>{provider.name}</h4>
                <span className="badge-pop badge-pop-green" style={{ fontSize: '0.72rem' }}>{provider.rating}</span>
              </div>
              <p style={{ fontSize: '0.85rem', color: '#4B5563', marginBottom: '14px' }}>
                {provider.type} • Fee: {provider.fee}
              </p>

              <div style={{ backgroundColor: 'var(--bg-main)', border: '1px solid var(--black)', borderRadius: 'var(--radius-sm)', padding: '10px', marginBottom: '14px' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#6B7280' }}>PAYOUT METHOD:</div>
                <div style={{ fontSize: '0.88rem', fontWeight: '700' }}>{provider.ngnMethod}</div>
              </div>
            </div>

            <div style={{ fontSize: '0.82rem', fontWeight: '700', color: 'var(--purple)' }}>
              ⚡ Speed: {provider.speed}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

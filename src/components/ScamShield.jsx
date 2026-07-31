import React, { useState } from 'react';
import { ShieldCheck, AlertTriangle, XCircle, Search, Send, CheckCircle2 } from 'lucide-react';
import { KNOWN_SCAM_DOMAINS } from '../data/dropsData';

export default function ScamShield() {
  const [reportUrl, setReportUrl] = useState('');
  const [reportNotes, setReportNotes] = useState('');
  const [reported, setReported] = useState(false);
  const [searchFilter, setSearchFilter] = useState('');

  const handleReportSubmit = (e) => {
    e.preventDefault();
    if (!reportUrl.trim()) return;
    setReported(true);
    setTimeout(() => {
      setReportUrl('');
      setReportNotes('');
      setReported(false);
    }, 3000);
  };

  const filteredScams = KNOWN_SCAM_DOMAINS.filter(s =>
    s.domain.toLowerCase().includes(searchFilter.toLowerCase()) ||
    s.reason.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '24px 20px' }}>
      {/* Header */}
      <div style={{
        backgroundColor: 'var(--coral)',
        color: '#FFFFFF',
        border: 'var(--border-thick)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-lg)',
        padding: '28px',
        marginBottom: '28px'
      }}>
        <span className="badge-pop badge-pop-yellow" style={{ marginBottom: '12px' }}>
          COMMUNITY PHISHING SHIELD & VERIFIER 🛡️
        </span>
        <h2 style={{ fontSize: '2.1rem', marginBottom: '8px' }}>
          Protect Your Wallet & Private Keys
        </h2>
        <p style={{ fontSize: '1.05rem', color: '#FFEBEE' }}>
          Scammers create fake claim sites and impersonate official Web3 drops (like MoonPay PayBox, Galxe, or Grass). Check our blacklisted domain index before approving any transactions.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
        {/* Known Scam Domain Database */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', flexWrap: 'wrap', gap: '10px' }}>
            <h3 style={{ fontSize: '1.3rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <AlertTriangle size={20} style={{ color: 'var(--coral)' }} />
              <span>Flagged Fake Claim Sites</span>
            </h3>

            <input
              type="text"
              placeholder="Search scams..."
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              style={{
                padding: '6px 12px',
                border: 'var(--border-thick)',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.85rem',
                fontFamily: 'var(--font-body)',
                outline: 'none'
              }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {filteredScams.map((scam, idx) => (
              <div key={idx} className="card-pop" style={{ padding: '16px', borderLeft: '6px solid var(--coral)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                  <div style={{ fontWeight: '800', fontSize: '1.05rem', color: 'var(--coral)' }}>
                    {scam.domain}
                  </div>
                  <span className="badge-pop badge-pop-coral" style={{ fontSize: '0.7rem' }}>
                    {scam.riskLevel}
                  </span>
                </div>
                <p style={{ fontSize: '0.88rem', color: '#374151' }}>
                  {scam.reason}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Community Report Form */}
        <div>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Send size={20} style={{ color: 'var(--purple)' }} />
            <span>Report a Fake Drop or Scam Site</span>
          </h3>

          <div className="card-pop" style={{ backgroundColor: 'var(--bg-card)' }}>
            {reported ? (
              <div style={{ padding: '20px', textAlign: 'center', backgroundColor: 'var(--green-light)', border: 'var(--border-thin)', borderRadius: 'var(--radius-md)' }}>
                <CheckCircle2 size={36} style={{ color: 'var(--green)', marginBottom: '8px' }} />
                <h4 style={{ fontSize: '1.2rem', marginBottom: '4px' }}>Report Received!</h4>
                <p style={{ fontSize: '0.9rem', color: '#4B5563' }}>Thank you for helping keep the Nigerian Web3 community safe.</p>
              </div>
            ) : (
              <form onSubmit={handleReportSubmit}>
                <div style={{ marginBottom: '14px' }}>
                  <label style={{ display: 'block', fontWeight: '800', fontSize: '0.88rem', marginBottom: '6px' }}>
                    Suspicious URL / Phishing Domain:
                  </label>
                  <input
                    type="url"
                    placeholder="https://fake-paybox-claim.com"
                    value={reportUrl}
                    onChange={(e) => setReportUrl(e.target.value)}
                    required
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.92rem',
                      border: 'var(--border-thick)',
                      borderRadius: 'var(--radius-md)',
                      outline: 'none'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '18px' }}>
                  <label style={{ display: 'block', fontWeight: '800', fontSize: '0.88rem', marginBottom: '6px' }}>
                    Details / How you found it:
                  </label>
                  <textarea
                    rows="3"
                    placeholder="e.g. Fake Twitter bot replied to MoonPay PayBox announcement with this link..."
                    value={reportNotes}
                    onChange={(e) => setReportNotes(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9rem',
                      border: 'var(--border-thick)',
                      borderRadius: 'var(--radius-md)',
                      outline: 'none',
                      resize: 'none'
                    }}
                  ></textarea>
                </div>

                <button type="submit" className="btn-pop btn-pop-coral" style={{ width: '100%' }}>
                  <Send size={16} />
                  <span>Submit Scam Report</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

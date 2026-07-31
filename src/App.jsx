import React, { useState } from 'react';
import Navbar from './components/Navbar';
import DropRadar from './components/DropRadar';
import UrlInspector from './components/UrlInspector';
import OfframpCalc from './components/OfframpCalc';
import ScamShield from './components/ScamShield';
import Footer from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState('radar'); // 'radar' | 'inspector' | 'offramp' | 'scam'

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main style={{ flex: 1 }}>
        {activeTab === 'radar' && <DropRadar onSelectTab={(tab) => setActiveTab(tab)} />}
        {activeTab === 'inspector' && <UrlInspector />}
        {activeTab === 'offramp' && <OfframpCalc />}
        {activeTab === 'scam' && <ScamShield />}
      </main>

      <Footer onSelectTab={(tab) => setActiveTab(tab)} />
    </div>
  );
}

export const TELCO_PROVIDERS_DATA = [
  {
    id: "airtel",
    name: "Airtel Nigeria 🔴",
    web3Rating: "9.5 / 10 (Best for Faucets)",
    captchaStatus: "🟢 Bypasses Cloudflare & PayBox captchas seamlessly",
    dnsRecommendation: "Default DNS works well, 1.1.1.1 optional",
    bestFor: "MoonPay PayBox, Coinbase Wallet Quests, Galxe ID"
  },
  {
    id: "mtn",
    name: "MTN Nigeria 🟡",
    web3Rating: "8.8 / 10 (Fast for Nodes)",
    captchaStatus: "🟡 Captchas may loop on MTN Fiber/Wi-Fi during peak hours",
    dnsRecommendation: "Use 1.1.1.1 (Cloudflare DNS) or 8.8.8.8",
    bestFor: "Nodepay AI, Grass Network, DAWN Bandwidth"
  },
  {
    id: "glo",
    name: "Glo Mobile 🟢",
    web3Rating: "7.5 / 10 (Good Data Value)",
    captchaStatus: "🟠 High latency on some global RPC nodes",
    dnsRecommendation: "Mandatory: Set 1.1.1.1 DNS on mobile settings",
    bestFor: "Yellow Card Learn & Earn, Berachain Testnet"
  },
  {
    id: "nineMobile",
    name: "9mobile 🔵",
    web3Rating: "8.0 / 10 (Stable Routing)",
    captchaStatus: "🟢 Clean IP reputation for DEX swaps",
    dnsRecommendation: "Default DNS works",
    bestFor: "Movement Labs, Morph Testnet"
  }
];

export const LIVE_TICKER_DATA = {
  usdcNgnRate: 1540.50,
  usdcChange24h: "+1.2%",
  activeVerifiedDrops: 15,
  totalSavedGasNgn: "₦12.8M+",
  gasPrices: {
    base: "0.001 Gwei ($0.01)",
    solana: "< 0.0001 SOL ($0.002)",
    arbitrum: "0.1 Gwei ($0.03)",
    polygon: "30 Gwei ($0.02)",
    ethereum: "18 Gwei ($3.40)"
  }
};

export const VERIFIED_DROPS = [
  {
    id: "nodepay-depin",
    title: "Nodepay AI Bandwidth Network",
    sponsor: "Nodepay.ai",
    category: "AI Web3 Tools",
    chain: "Solana",
    estimatedReward: "$50.00 - $250.00 Token Pool",
    estimatedGas: "FREE (Web Node)",
    ngStatus: "NG_FRIENDLY",
    statusLabel: "🟢 100% NG Friendly & Trending on X",
    kycRequirement: "No KYC Required",
    verifiedLink: "https://nodepay.ai",
    isOfficial: true,
    rating: 4.9,
    claimsCount: "48.9k Nigerians",
    summary: "Monetize unused internet bandwidth for AI model training via lightweight Chrome node extension.",
    whyNgBlocked: "Directly accessible from Nigeria! Works smoothly on MTN, Airtel, Glo, & fiber broadband.",
    workaroundSteps: [
      "Create account on official nodepay.ai portal with email.",
      "Install lightweight Nodepay Chrome extension.",
      "Connect Phantom/Solflare wallet to lock in daily bandwidth points.",
      "Complete social X/Twitter tasks in dashboard for 2,000 bonus node points."
    ],
    offrampPath: "Solana Wallet -> Swap $NODEPAY -> Convert to NGN via Yellow Card / Quidax"
  },
  {
    id: "oasis-ai",
    title: "Oasis AI Compute Node (Solana)",
    sponsor: "Oasis AI Labs",
    category: "AI Web3 Tools",
    chain: "Solana",
    estimatedReward: "$45.00 - $220.00 $OAI Token Pool",
    estimatedGas: "FREE (Web Node)",
    ngStatus: "NG_FRIENDLY",
    statusLabel: "🟢 100% NG Friendly & Active",
    kycRequirement: "No KYC Required",
    verifiedLink: "https://oasis.ai",
    isOfficial: true,
    rating: 4.8,
    claimsCount: "36.2k Nigerians",
    summary: "Share idle GPU/CPU and bandwidth for $OAI token points. Popular on X.com for zero-gas passive earnings.",
    whyNgBlocked: "Zero geo-restrictions for Nigeria! Runs seamlessly in background.",
    workaroundSteps: [
      "Register email on oasis.ai dashboard.",
      "Install Oasis AI Provider Chrome Extension.",
      "Keep extension active while browsing to stack daily OAI compute points."
    ],
    offrampPath: "Solana Wallet -> Jupiter DEX -> NGN Bank Payout via Yellow Card"
  },
  {
    id: "paybox-usdc",
    title: "MoonPay PayBox USDC Drop",
    sponsor: "MoonPay",
    category: "USDC/Cash",
    chain: "Base / Solana",
    estimatedReward: "$5.00 - $25.00 USDC",
    estimatedGas: "$0.02 (Base)",
    ngStatus: "WORKAROUND_NEEDED",
    statusLabel: "🟡 Faucet Drain Alert / Workaround Ready",
    kycRequirement: "No KYC Required (AI Wallet Link)",
    verifiedLink: "https://paybox.sh",
    isOfficial: true,
    rating: 4.8,
    claimsCount: "14.2k Nigerians",
    summary: "Claim free USDC rewards by linking your AI Agent (ChatGPT/Claude) with PayBox wallet.",
    whyNgBlocked: "The global faucet drains fast and Cloudflare challenges high-traffic Nigerian IPs.",
    workaroundSteps: [
      "Use custom RPC endpoint (Cloudflare/Alchemy) on Metamask or Phantom.",
      "Switch Telco DNS: On MTN/Glo, set 1.1.1.1 DNS to bypass Cloudflare captcha loops.",
      "Ensure your X (Twitter) account is over 30 days old with valid email bound.",
      "Claim on Base network for ultra-low gas under $0.02."
    ],
    offrampPath: "Claim USDC on Base -> Bridge to YellowCard/Quidax -> Direct NGN Bank Transfer"
  },
  {
    id: "grass-depin",
    title: "Grass AI Network Epoch 7 Airdrop",
    sponsor: "GetGrass.io",
    category: "AI Web3 Tools",
    chain: "Solana",
    estimatedReward: "$40.00 - $180.00 GRASS",
    estimatedGas: "$0.005 (Solana)",
    ngStatus: "NG_FRIENDLY",
    statusLabel: "🟢 100% NG Friendly & Active",
    kycRequirement: "No KYC (Email + Solana Wallet)",
    verifiedLink: "https://app.getgrass.io",
    isOfficial: true,
    rating: 4.9,
    claimsCount: "32.5k Nigerians",
    summary: "Earn passive Web3 tokens by sharing unused internet bandwidth via lightweight node.",
    whyNgBlocked: "Directly accessible from Nigeria without restrictions! Works on MTN/Airtel/Glo.",
    workaroundSteps: [
      "Sign up with email and install web extension or mobile node.",
      "Connect any Solana wallet (Phantom / Solflare).",
      "Keep node running during daily browsing to stack tier points."
    ],
    offrampPath: "Solana Wallet -> Sell GRASS on Bybit/Raydium -> Convert to NGN via Quidax/P2P"
  },
  {
    id: "dawn-internet",
    title: "DAWN Decentralized Bandwidth (Solana)",
    sponsor: "DAWN Internet",
    category: "AI Web3 Tools",
    chain: "Solana",
    estimatedReward: "$30.00 - $150.00 Token Pool",
    estimatedGas: "FREE (Extension)",
    ngStatus: "NG_FRIENDLY",
    statusLabel: "🟢 100% NG Friendly & Active",
    kycRequirement: "No KYC Required",
    verifiedLink: "https://dawninternet.com",
    isOfficial: true,
    rating: 4.8,
    claimsCount: "27.4k Nigerians",
    summary: "Act as a decentralized wireless node by proving bandwidth availability on Solana.",
    whyNgBlocked: "No IP restrictions for Nigeria! High uptime on mobile data & broadband.",
    workaroundSteps: [
      "Download DAWN Validator Chrome Extension.",
      "Register email and verify your connection speed score.",
      "Keep extension running in background to farm daily proof-of-availability points."
    ],
    offrampPath: "Solana Wallet -> Jupiter DEX -> NGN Bank Deposit via Yellow Card"
  },
  {
    id: "gradient-network",
    title: "Gradient Network AI Sentry Node",
    sponsor: "Gradient Labs",
    category: "AI Web3 Tools",
    chain: "Solana",
    estimatedReward: "$40.00 - $200.00 EXP Pool",
    estimatedGas: "FREE",
    ngStatus: "NG_FRIENDLY",
    statusLabel: "🟢 100% NG Friendly & Active",
    kycRequirement: "No KYC Required",
    verifiedLink: "https://gradient.network",
    isOfficial: true,
    rating: 4.7,
    claimsCount: "22.1k Nigerians",
    summary: "Open Intelligence Stack on Solana rewarding Sentry Nodes for AI compute sharing.",
    whyNgBlocked: "Zero geo-blocking! Works smoothly for all Nigerian network providers.",
    workaroundSteps: [
      "Sign up on gradient.network with email & link Solana wallet.",
      "Run Sentry Node extension during regular internet usage.",
      "Claim daily streak EXP bonuses in dashboard."
    ],
    offrampPath: "Solana Wallet -> Offramp via Yellow Card / Binance P2P"
  },
  {
    id: "perceptron-blockmesh",
    title: "Perceptron (BlockMesh AI Node)",
    sponsor: "Perceptron Network",
    category: "AI Web3 Tools",
    chain: "Solana",
    estimatedReward: "$35.00 - $160.00 Token Allocation",
    estimatedGas: "FREE",
    ngStatus: "NG_FRIENDLY",
    statusLabel: "🟢 100% NG Friendly & Pre-TGE",
    kycRequirement: "No KYC Required",
    verifiedLink: "https://perceptron.network",
    isOfficial: true,
    rating: 4.6,
    claimsCount: "19.5k Nigerians",
    summary: "Incentivized AI data contribution network (formerly BlockMesh). Farm node points for pre-TGE token allocation.",
    whyNgBlocked: "Fully open to Nigerian participants without VPN requirement.",
    workaroundSteps: [
      "Sign up on official perceptron.network dashboard.",
      "Connect Solana wallet and install browser extension.",
      "Accumulate network activity points ahead of mainnet token generation event."
    ],
    offrampPath: "Solana DEX -> Convert to NGN via Quidax / Yellow Card"
  },
  {
    id: "movement-labs",
    title: "Movement Labs (The Parthenon Testnet)",
    sponsor: "Movement Labs",
    category: "Testnets",
    chain: "Movement Move-EVM",
    estimatedReward: "$60.00 - $300.00 Token Allocation",
    estimatedGas: "FREE (Testnet MOVE)",
    ngStatus: "NG_FRIENDLY",
    statusLabel: "🟢 100% NG Friendly & Active on X",
    kycRequirement: "No KYC Needed (Galxe ID)",
    verifiedLink: "https://movementlabs.xyz",
    isOfficial: true,
    rating: 4.8,
    claimsCount: "19.8k Nigerians",
    summary: "Modular Move-EVM execution layer. Complete testnet quests, bridge MOVE, and deploy dApps.",
    whyNgBlocked: "No geo-blocking for Nigerian participants!",
    workaroundSteps: [
      "Connect Nightly or Razor wallet to Movement Testnet.",
      "Request testnet MOVE tokens from discord or Web faucet.",
      "Complete Galxe quests & Parthenon guild roles for verified badges."
    ],
    offrampPath: "Mainnet Token -> Swap on DEX -> Convert to NGN via Bitmama / Quidax"
  },
  {
    id: "berachain-bArtio",
    title: "Berachain bArtio Testnet Rewards",
    sponsor: "Berachain Foundation",
    category: "Testnets",
    chain: "Berachain Testnet",
    estimatedReward: "$50.00+ Potential Retroactive",
    estimatedGas: "FREE (Testnet BERA)",
    ngStatus: "NG_FRIENDLY",
    statusLabel: "🟢 100% Free EVM Testnet",
    kycRequirement: "No KYC Needed",
    verifiedLink: "https://artio.faucet.berachain.com",
    isOfficial: true,
    rating: 4.7,
    claimsCount: "21.0k Nigerians",
    summary: "Participate in Proof-of-Liquidity testnet swaps, dApp mints, and daily faucet claims.",
    whyNgBlocked: "Fully supported! The faucet accepts all EVM wallet addresses.",
    workaroundSteps: [
      "Add Berachain bArtio RPC to Metamask.",
      "Drip 0.1 $BERA daily from testnet faucet.",
      "Perform weekly swaps on BEX and liquidity mints on Bend."
    ],
    offrampPath: "Mainnet Airdrop Token -> Swap on Uniswap -> Offramp via Yellow Card / Binance P2P"
  },
  {
    id: "morph-l2",
    title: "Morph L2 Genesis Jungle Testnet",
    sponsor: "Morph Layer 2",
    category: "Testnets",
    chain: "Morph Sepolia L2",
    estimatedReward: "$30.00 - $120.00 Points/Token Pool",
    estimatedGas: "FREE (Sepolia ETH)",
    ngStatus: "WORKAROUND_NEEDED",
    statusLabel: "🟡 NIN Persona Guide Ready",
    kycRequirement: "NIN (National ID) Accepted for Galxe Passport",
    verifiedLink: "https://morphl2.io",
    isOfficial: true,
    rating: 4.6,
    claimsCount: "16.2k Nigerians",
    summary: "Consumer-focused EVM Layer 2. Earn Genesis points by testing bridges & minting NFTs.",
    whyNgBlocked: "Galxe quests require clear NIN identity verification for high-reward tiers.",
    workaroundSteps: [
      "Bridge Sepolia ETH to Morph L2 testnet.",
      "Use clear PDF scan of NIN slip for Persona identity check.",
      "Complete weekly eco-system dApp tasks on Morph testnet."
    ],
    offrampPath: "Mainnet Airdrop -> Swap on Uniswap -> P2P NGN Bank Transfer"
  },
  {
    id: "yellowcard-learn-earn",
    title: "Yellow Card Academy Micro Learn & Earn",
    sponsor: "Yellow Card Financial",
    category: "Learn & Earn",
    chain: "Base / USDT / NGN",
    estimatedReward: "₦1,000 - ₦5,000 NGN Direct Payout",
    estimatedGas: "FREE",
    ngStatus: "NG_FRIENDLY",
    statusLabel: "🟢 100% NG Native & Instant Bank Deposit",
    kycRequirement: "NIN / BVN Verification",
    verifiedLink: "https://yellowcard.io",
    isOfficial: true,
    rating: 4.9,
    claimsCount: "62.0k Nigerians",
    summary: "Complete short crypto safety quizzes on Yellow Card Academy to get direct Naira bank payouts.",
    whyNgBlocked: "Built specifically for Nigeria & Africa! Instant local bank payout.",
    workaroundSteps: [
      "Register on Yellow Card app with NIN or BVN.",
      "Go to Academy section and complete 5-minute crypto education quizzes.",
      "Withdraw earned rewards directly to your Nigerian bank account."
    ],
    offrampPath: "Direct Instant Nigerian Bank Deposit (GTB, Zenith, Moniepoint, OPay)"
  },
  {
    id: "binance-megadrop",
    title: "Binance Megadrop & Web3 Quests",
    sponsor: "Binance Web3",
    category: "Learn & Earn",
    chain: "BNB Chain / EVM",
    estimatedReward: "$15.00 - $80.00 Token Allocation",
    estimatedGas: "< $0.05 BNB",
    ngStatus: "WORKAROUND_NEEDED",
    statusLabel: "🟡 Binance Web3 Wallet Setup Ready",
    kycRequirement: "Binance Verified KYC (NIN/BVN)",
    verifiedLink: "https://binance.com",
    isOfficial: true,
    rating: 4.8,
    claimsCount: "75.4k Nigerians",
    summary: "Token launch platform combining Binance Simple Earn with Web3 Wallet dApp tasks.",
    whyNgBlocked: "Requires using Binance Self-Custody Web3 Wallet tab inside Binance mobile app.",
    workaroundSteps: [
      "Open Binance App -> Switch to 'Web3 Wallet' tab.",
      "Complete featured Web3 Megadrop dApp quests (swaps/staking).",
      "Claim newly listed token rewards directly into your exchange wallet."
    ],
    offrampPath: "Sell on Binance Spot -> Convert to NGN via P2P Bank Transfer"
  },
  {
    id: "bybit-airdrop-arcade",
    title: "Bybit Web3 Airdrop Arcade",
    sponsor: "Bybit Web3",
    category: "Learn & Earn",
    chain: "Multi-chain (Solana, Base, Arbitrum)",
    estimatedReward: "$10.00 - $60.00 Token Pool",
    estimatedGas: "< $0.02",
    ngStatus: "NG_FRIENDLY",
    statusLabel: "🟢 100% NG Friendly & Active",
    kycRequirement: "Bybit Level 1 KYC (NIN Supported)",
    verifiedLink: "https://bybit.com",
    isOfficial: true,
    rating: 4.7,
    claimsCount: "41.8k Nigerians",
    summary: "Interactive Web3 quest hub on Bybit. Complete social tasks and DEX swaps for token drops.",
    whyNgBlocked: "Fully supports Nigerian identity documents and local P2P!",
    workaroundSteps: [
      "Access 'Airdrop Arcade' inside Bybit Web3 Wallet section.",
      "Interact with daily featured dApp quests.",
      "Claim tokens directly to Bybit wallet."
    ],
    offrampPath: "Bybit P2P -> Instant NGN Deposit to GTB/Moniepoint/OPay"
  },
  {
    id: "coinbase-wallet-quests",
    title: "Coinbase Wallet Onchain Quests",
    sponsor: "Coinbase",
    category: "Learn & Earn",
    chain: "Base L2",
    estimatedReward: "$12.00 - $30.00 USDC",
    estimatedGas: "$0.05",
    ngStatus: "WORKAROUND_NEEDED",
    statusLabel: "🟡 Self-Custody Wallet Workaround Ready",
    kycRequirement: "No KYC for Self-Custody Wallet",
    verifiedLink: "https://coinbase.com/wallet",
    isOfficial: true,
    rating: 4.5,
    claimsCount: "9.8k Nigerians",
    summary: "Complete micro on-chain swaps, NFT mints, and staking tasks inside Coinbase Self-Custody Wallet.",
    whyNgBlocked: "The main exchange app restricts some features for Nigeria, but Self-Custody Coinbase Wallet works!",
    workaroundSteps: [
      "Do NOT use main exchange app. Install Coinbase Self-Custody Wallet App.",
      "Import your EVM seed phrase or create new self-custody wallet.",
      "Navigate to 'Quests' tab in browser section and complete Base micro-tasks."
    ],
    offrampPath: "Send earned USDC directly to your NGN bank via Yellow Card / Bitmama API"
  },
  {
    id: "galxe-passport-quests",
    title: "Galxe Web3 Passport & Quests",
    sponsor: "Galxe",
    category: "DeFi",
    chain: "Polygon / Optimism",
    estimatedReward: "$15.00 - $75.00 Token Pool",
    estimatedGas: "$0.03",
    ngStatus: "WORKAROUND_NEEDED",
    statusLabel: "🟡 NIN Verification Guide Available",
    kycRequirement: "NIN (National ID) Supported via Persona",
    verifiedLink: "https://galxe.com",
    isOfficial: true,
    rating: 4.6,
    claimsCount: "18.4k Nigerians",
    summary: "Verify Web3 identity via Galxe Passport to unlock exclusive drop campaigns and token mints.",
    whyNgBlocked: "Some Nigerian NIN cards without clear photo scans get auto-rejected by Persona.",
    workaroundSteps: [
      "Use clear PDF scan of NIN slip or plastic NIN card.",
      "Ensure full legal name matches your Twitter/X account profile.",
      "Mint Galxe Web3 ID on Polygon (low gas ~$0.02)."
    ],
    offrampPath: "Claim quest reward tokens -> Swap on QuickSwap/Uniswap -> P2P NGN Bank Transfer"
  }
];

export const KNOWN_SCAM_DOMAINS = [
  { domain: "paybox-claim-usdc.xyz", riskLevel: "CRITICAL PHISHING", reason: "Fake MoonPay PayBox clone drainer requesting private keys!" },
  { domain: "nodepay-airdrop-claim.site", riskLevel: "CRITICAL DRAINER", reason: "Fake Nodepay token claim site harvesting seed phrases." },
  { domain: "paybox360-bonus.online", riskLevel: "HIGH RISK", reason: "Impersonating Nigerian business Paybox360 to harvest wallet signatures." },
  { domain: "getgrass-airdrop-claim.live", riskLevel: "SCAM DRAINER", reason: "Fake Grass network token claim portal." }
];

export const NGN_OFFRAMP_PROVIDERS = [
  {
    name: "Yellow Card",
    type: "Compliant Exchange / Direct Bank",
    fee: "~0.5%",
    speed: "Instant (1 - 3 mins)",
    supportedChains: ["Base (USDC)", "Solana (USDC)", "Polygon (USDT)", "Ethereum"],
    ngnMethod: "Direct Nigerian Bank Deposit (GTB, Access, Kuda, Moniepoint, OPay)",
    rating: "⭐⭐⭐⭐⭐ Best for Micro-Drops"
  },
  {
    name: "Quidax",
    type: "SEC-Licensed Local Exchange",
    fee: "~0.8%",
    speed: "Instant (2 - 5 mins)",
    supportedChains: ["BSC", "Tron", "Solana", "Bitcoin"],
    ngnMethod: "Instant NGN Bank Payout & QDirect",
    rating: "⭐⭐⭐⭐⭐ Top Local App"
  },
  {
    name: "Bitmama / Changera",
    type: "Virtual Card & Bank Rail",
    fee: "~1.0%",
    speed: "Instant",
    supportedChains: ["Base", "Arbitrum", "Solana"],
    ngnMethod: "NGN Bank Transfer & Virtual Dollar Cards",
    rating: "⭐⭐⭐⭐ Great for Virtual Cards"
  },
  {
    name: "Binance P2P / Bybit P2P",
    type: "Peer-to-Peer Marketplace",
    fee: "0%",
    speed: "3 - 10 mins",
    supportedChains: ["All Chains"],
    ngnMethod: "Verified Nigerian P2P Merchants",
    rating: "⭐⭐⭐⭐ High Liquidity"
  }
];

import React, { useState } from 'react';
import {
  Pickaxe,
  Mountain,
  Globe,
  Coins,
  Scale,
  Building2,
  ShieldCheck,
  ShieldAlert,
  AlertTriangle,
  ExternalLink,
  Maximize2,
  Copy,
  Check,
  ArrowRight,
  FileText,
  BarChart3,
  Users,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  Layers,
  Compass,
  Truck,
  Info
} from 'lucide-react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import peruCopperImg from '../assets/images/peru_copper_sovereignty_1792215632753.jpg';

interface PeruIndigenousCopperMiningSovereigntyProps {
  onNavigateTab?: (tab: string) => void;
  siteTheme?: 'light' | 'dark' | 'glass';
}

export const PeruIndigenousCopperMiningSovereignty: React.FC<PeruIndigenousCopperMiningSovereigntyProps> = ({
  onNavigateTab,
  siteTheme = 'light'
}) => {
  const isLight = siteTheme === 'light';

  // Subtab navigation
  const [activeSubTab, setActiveSubTab] = useState<
    'overview' | 'colonial_duality' | 'supply_chain' | 'reinfo_formalization' | 'global_indigenous_convergence' | 'infographic_studio'
  >('overview');

  // Vault hash copy state
  const [copiedHash, setCopiedHash] = useState(false);
  const vaultHash = '0xPERU_INDIGENOUS_COPPER_SOVEREIGNTY_LAS_BAMBAS_PAMPUTA_PLATE_85_2026';

  // Lightbox modal state
  const [isModalOpen, setIsModalOpen] = useState(false);

  const copyVaultHash = () => {
    navigator.clipboard.writeText(vaultHash);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 3000);
  };

  // Recharts data: Global Copper Share & Las Bambas Scale
  const copperScaleData = [
    { name: 'Las Bambas Project', value: 2, fill: '#f59e0b', description: '~2% of Total Global Mined Copper' },
    { name: 'Rest of Peru Output', value: 8, fill: '#0d9488', description: 'Peru World #3 Copper Producer (~10% Global)' },
    { name: 'Global Copper Production', value: 90, fill: '#64748b', description: 'Rest of World Copper Mining' }
  ];

  // Supply Chain & Economic Capture Comparison Data
  const valueCaptureData = [
    {
      stage: 'Ore Extraction (Apu Chunta)',
      wildcatCapture: 28,
      sovereignCoopCapture: 78,
      unit: '% Benchmark Value'
    },
    {
      stage: '400-Mile Transport & Logistics',
      wildcatCapture: 15,
      sovereignCoopCapture: 85,
      unit: '% Efficiency Realized'
    },
    {
      stage: 'Concentrate Smelting (Direct MMG)',
      wildcatCapture: 22,
      sovereignCoopCapture: 94,
      unit: '% Fair Price Realization'
    },
    {
      stage: 'Trader Margins (Glencore/Trafigura)',
      wildcatCapture: 35,
      sovereignCoopCapture: 92,
      unit: '% Retained Wealth'
    }
  ];

  // Global Indigenous Mining & Sovereign IT Convergence Matrix
  const globalConvergenceCases = [
    {
      region: 'Andean Peru (Pamputa & Las Bambas)',
      resource: 'Copper (Clean Tech Catalyst)',
      sovereignModel: 'Concession Buyout & Formal Supplier Integration',
      impact: 'Turning thousands of informal artisanal miners into equity owners, uniting surface pasture ownership with direct corporate mineral supply to MMG Ltd.'
    },
    {
      region: 'Taos Pueblo Ecological Sanctuary',
      resource: 'Headwaters & Alpine Watershed Protection',
      sovereignModel: 'Zero-Knowledge Sovereign Sensor Network',
      impact: 'Pioneering clean-energy tribal IT, protecting sacred watersheds from heavy metal contamination and establishing ancestral ecological sovereignty.'
    },
    {
      region: 'Jicarilla Apache Nation',
      resource: 'Subsurface Energy & Data Centers',
      sovereignModel: 'Tribal Compute Infrastructure & Sovereign Cloud',
      impact: 'Transforming legacy extractive energy fields into zero-emissions sovereign data center compute, bypassing colonial utility monopolies.'
    },
    {
      region: 'Democratic Republic of Congo (Kolwezi)',
      resource: 'Cobalt & Copper Artisanal Deposits',
      sovereignModel: 'Artisanal Cooperative Traceability & Fair Trade',
      impact: 'Eliminating predatory middleman extortion and toxic mercury/lead exposures via sovereign blockchain mineral audit ledgers.'
    }
  ];

  return (
    <div className={`w-full min-h-screen ${isLight ? 'bg-stone-50 text-stone-900' : 'bg-stone-950 text-stone-100'} p-4 sm:p-6 lg:p-8 font-sans`}>
      {/* 1. TOP EDITORIAL BANNER */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-950 via-stone-950 to-emerald-950 text-white border border-amber-500/40 p-6 sm:p-8 md:p-10 shadow-2xl mb-8">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="px-3 py-1 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-black rounded-lg uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                <Pickaxe size={14} />
                <span>Indigenous Sovereignty & Mining Precedent</span>
              </span>
              <span className="px-3 py-1 bg-stone-900 text-amber-300 rounded-lg border border-amber-500/40 font-bold">
                Mining.com / Bloomberg • Oct 16, 2026
              </span>
              <span className="px-2.5 py-1 bg-emerald-500/20 text-emerald-300 rounded-lg border border-emerald-500/30 font-mono text-[11px]">
                Plate #85: Las Bambas Sovereign Concession Buyout
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={copyVaultHash}
                className="px-3 py-1.5 rounded-xl bg-stone-900/80 hover:bg-stone-800 text-amber-300 text-xs font-mono border border-amber-500/30 flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
                title="Copy Cryptographic Vault Hash"
              >
                {copiedHash ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                <span>{copiedHash ? 'Hash Copied!' : 'Vault Hash'}</span>
              </button>

              <button
                onClick={() => setIsModalOpen(true)}
                className="px-3 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs font-mono flex items-center gap-1.5 transition-all cursor-pointer shadow-lg"
              >
                <Maximize2 size={13} />
                <span>Expand Infographic</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-300 font-bold uppercase tracking-widest">
                <span>Indigenous Communities Earth</span>
                <span>•</span>
                <span>Latin American Resource Sovereignty</span>
                <span>•</span>
                <span>Plate #85</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tight text-white leading-tight">
                Peru Indigenous Group Bids for Concession at Las Bambas Copper Mine
              </h1>

              <p className="text-sm sm:text-base text-stone-200 font-serif leading-relaxed max-w-3xl">
                In a historic breakthrough for Indigenous economic self-determination, the <strong className="text-amber-400">Pamputa Indigenous community</strong> in Peru is proposing to buy part of the copper concession from Chinese state-owned <strong className="text-emerald-300">MMG Ltd. (China Minmetals Corp.)</strong>. By purchasing the concession where thousands of local artisanal miners have extracted <strong className="text-white">90,000 metric tons of copper</strong>, the community aims to dismantle centuries of colonial exploitation, uniting ancestral surface land ownership with legitimate mineral rights and transforming informal wildcatters into formalized, sovereign corporate partners.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="https://www.mining.com/web/peru-indigenous-group-bids-for-part-of-china-owned-copper-mine/#google_vignette"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-stone-950 font-bold text-xs rounded-xl shadow-lg transition-all flex items-center gap-2 cursor-pointer hover:scale-105"
                >
                  <ExternalLink size={15} />
                  <span>Read Mining.com Investigation</span>
                </a>

                {onNavigateTab && (
                  <button
                    onClick={() => onNavigateTab('indigenous_america_lead_exposenomics')}
                    className="px-4 py-2.5 bg-stone-900/90 hover:bg-stone-800 text-amber-300 font-bold text-xs rounded-xl border border-amber-500/40 transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <Scale size={14} className="text-amber-400" />
                    <span>Indigenous Lead: PAHO Week (Plate #72)</span>
                    <ArrowRight size={13} />
                  </button>
                )}

                {onNavigateTab && (
                  <button
                    onClick={() => onNavigateTab('artisanal_mining')}
                    className="px-4 py-2.5 bg-stone-900/90 hover:bg-stone-800 text-emerald-300 font-bold text-xs rounded-xl border border-emerald-500/40 transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <Pickaxe size={14} className="text-emerald-400" />
                    <span>Artisanal Mining &amp; Exposenomics</span>
                    <ArrowRight size={13} />
                  </button>
                )}
              </div>
            </div>

            {/* Visual Thumbnail Card */}
            <div className="lg:col-span-4">
              <div
                onClick={() => setIsModalOpen(true)}
                className="relative rounded-2xl overflow-hidden border-2 border-amber-500/40 group cursor-pointer shadow-2xl bg-stone-900"
              >
                <img
                  src={peruCopperImg}
                  alt="Peru Indigenous Copper Sovereignty Infographic (Plate #85)"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-3.5 py-2 bg-amber-600 text-stone-950 font-mono font-black text-xs rounded-xl shadow-lg flex items-center gap-1.5">
                    <Maximize2 size={14} />
                    <span>Expand Plate #85 Master Infographic</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. CORE METRICS BAR */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-8">
        <div className={`p-4 rounded-2xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-1 shadow-sm`}>
          <span className="text-[10px] font-mono font-bold text-stone-400 uppercase tracking-wider block">Global Copper Share</span>
          <div className="text-2xl sm:text-3xl font-serif font-black text-amber-600">~2.0%</div>
          <p className="text-[11px] text-stone-500 dark:text-stone-400 leading-tight">Las Bambas produces almost 2% of total global mined copper</p>
        </div>

        <div className={`p-4 rounded-2xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-1 shadow-sm`}>
          <span className="text-[10px] font-mono font-bold text-stone-400 uppercase tracking-wider block">Artisanal Extraction</span>
          <div className="text-2xl sm:text-3xl font-serif font-black text-emerald-600 dark:text-emerald-400">90,000 MT</div>
          <p className="text-[11px] text-stone-500 dark:text-stone-400 leading-tight">Contained copper extracted by local miners from Apu Chunta quarry</p>
        </div>

        <div className={`p-4 rounded-2xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-1 shadow-sm`}>
          <span className="text-[10px] font-mono font-bold text-stone-400 uppercase tracking-wider block">Trucking Transit</span>
          <div className="text-2xl sm:text-3xl font-serif font-black text-orange-600 dark:text-orange-400">400+ Mi</div>
          <p className="text-[11px] text-stone-500 dark:text-stone-400 leading-tight">Ore hauled across high Andean passes to coastal processing hubs</p>
        </div>

        <div className={`p-4 rounded-2xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-1 shadow-sm`}>
          <span className="text-[10px] font-mono font-bold text-stone-400 uppercase tracking-wider block">Largest Peru Capex</span>
          <div className="text-2xl sm:text-3xl font-serif font-black text-teal-600 dark:text-teal-400">$10 Billion</div>
          <p className="text-[11px] text-stone-500 dark:text-stone-400 leading-tight">Largest single infrastructure investment in Peruvian history</p>
        </div>

        <div className={`p-4 rounded-2xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-1 shadow-sm`}>
          <span className="text-[10px] font-mono font-bold text-stone-400 uppercase tracking-wider block">Global Commodities</span>
          <div className="text-xl sm:text-2xl font-serif font-black text-purple-600 dark:text-purple-400">Glencore/Trafigura</div>
          <p className="text-[11px] text-stone-500 dark:text-stone-400 leading-tight">Multinational traders purchase concentrate from informal ore</p>
        </div>

        <div className={`p-4 rounded-2xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-1 shadow-sm`}>
          <span className="text-[10px] font-mono font-bold text-stone-400 uppercase tracking-wider block">Reinfo Mechanism</span>
          <div className="text-xl sm:text-2xl font-serif font-black text-rose-600">10-Year Loop</div>
          <p className="text-[11px] text-stone-500 dark:text-stone-400 leading-tight">Controversial registry repeatedly extended without true formalization</p>
        </div>
      </div>

      {/* 3. NAVIGATION SUB-TABS */}
      <div className="flex items-center gap-2 border-b border-stone-200 dark:border-stone-800 pb-3 mb-8 overflow-x-auto scrollbar-none text-xs font-mono">
        <button
          onClick={() => setActiveSubTab('overview')}
          className={`px-4 py-2 rounded-xl font-bold cursor-pointer transition-all flex items-center gap-2 whitespace-nowrap ${
            activeSubTab === 'overview'
              ? 'bg-amber-600 text-stone-950 shadow-md font-extrabold'
              : 'text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-200/50 dark:hover:bg-stone-800/50'
          }`}
        >
          <Info size={14} />
          <span>Case Overview: The Pamputa Concession Bid</span>
        </button>

        <button
          onClick={() => setActiveSubTab('colonial_duality')}
          className={`px-4 py-2 rounded-xl font-bold cursor-pointer transition-all flex items-center gap-2 whitespace-nowrap ${
            activeSubTab === 'colonial_duality'
              ? 'bg-amber-600 text-stone-950 shadow-md font-extrabold'
              : 'text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-200/50 dark:hover:bg-stone-800/50'
          }`}
        >
          <Scale size={14} />
          <span>Colonial Extraction: Surface vs. Subsurface Law</span>
        </button>

        <button
          onClick={() => setActiveSubTab('supply_chain')}
          className={`px-4 py-2 rounded-xl font-bold cursor-pointer transition-all flex items-center gap-2 whitespace-nowrap ${
            activeSubTab === 'supply_chain'
              ? 'bg-amber-600 text-stone-950 shadow-md font-extrabold'
              : 'text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-200/50 dark:hover:bg-stone-800/50'
          }`}
        >
          <Truck size={14} />
          <span>Apu Chunta 400-Mile Supply Chain &amp; Global Traders</span>
        </button>

        <button
          onClick={() => setActiveSubTab('reinfo_formalization')}
          className={`px-4 py-2 rounded-xl font-bold cursor-pointer transition-all flex items-center gap-2 whitespace-nowrap ${
            activeSubTab === 'reinfo_formalization'
              ? 'bg-amber-600 text-stone-950 shadow-md font-extrabold'
              : 'text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-200/50 dark:hover:bg-stone-800/50'
          }`}
        >
          <ShieldCheck size={14} />
          <span>Reinfo Registry vs. Sovereign IT Formalization</span>
        </button>

        <button
          onClick={() => setActiveSubTab('global_indigenous_convergence')}
          className={`px-4 py-2 rounded-xl font-bold cursor-pointer transition-all flex items-center gap-2 whitespace-nowrap ${
            activeSubTab === 'global_indigenous_convergence'
              ? 'bg-amber-600 text-stone-950 shadow-md font-extrabold'
              : 'text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-200/50 dark:hover:bg-stone-800/50'
          }`}
        >
          <Globe size={14} />
          <span>Global Movement: Sovereign IT &amp; Mineral Rights</span>
        </button>

        <button
          onClick={() => setActiveSubTab('infographic_studio')}
          className={`px-4 py-2 rounded-xl font-bold cursor-pointer transition-all flex items-center gap-2 whitespace-nowrap ${
            activeSubTab === 'infographic_studio'
              ? 'bg-amber-600 text-stone-950 shadow-md font-extrabold'
              : 'text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-200/50 dark:hover:bg-stone-800/50'
          }`}
        >
          <Maximize2 size={14} />
          <span>Plate #85 Lightbox Studio &amp; Provenance</span>
        </button>
      </div>

      {/* 4. MAIN SUB-TAB PANELS */}
      {activeSubTab === 'overview' && (
        <div className="space-y-8">
          {/* Executive Synthesis */}
          <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-6 shadow-sm`}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 dark:border-stone-800 pb-4">
              <div>
                <span className="text-xs font-mono font-bold uppercase text-amber-600 dark:text-amber-400 tracking-wider">Historical Case Analysis</span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold mt-1">From Exploited Informal Diggers to Sovereign Mineral Owners</h2>
              </div>
              <span className="px-3 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-lg text-xs font-mono font-bold border border-amber-500/20">
                Las Bambas Megasite
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-stone-600 dark:text-stone-300 font-serif leading-relaxed">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-stone-900 dark:text-white font-sans flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                  The Pamputa Community Proposal
                </h3>
                <p>
                  In Peru, the world’s third-largest copper producer, ownership of surface land is legally severed from the rights to mine the minerals beneath it. At the massive <strong>$10 billion Las Bambas complex</strong> in the Apurímac highlands, the Indigenous community of <strong>Pamputa</strong> holds ancestral title to the surface land, where families have pastured alpaca and farmed potato terraces for generations.
                </p>
                <p>
                  Meanwhile, <strong>MMG Ltd.</strong>, a Hong Kong-listed subsidiary of state-owned <strong>China Minmetals Corp.</strong> (which acquired Las Bambas from Glencore in 2014), holds the state-awarded subsurface concession. Rather than continuing endless cycles of road blockades and police repression, Pamputa residents formulated an unprecedented commercial bid: <em>to buy part of the copper concession directly from MMG</em> and organize thousands of local artisanal miners into a formal corporate supply cooperative.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-bold text-stone-900 dark:text-white font-sans flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  Resolving the 90,000-Ton Artisanal Reality
                </h3>
                <p>
                  Artisanal miners operating in the community's territory at the quarry known as <strong>Apu Chunta</strong> have already extracted an estimated <strong>90,000 metric tons of contained copper</strong>. Today, that raw ore is trucked more than 400 miles over hazardous mountain roads to coastal processing plants, with concentrates sold to multinational commodities houses like <strong>Trafigura Group, IXM SA, and Glencore</strong>.
                </p>
                <p>
                  By purchasing the concession, Pamputa eliminates the predatory middlemen, brings the miners into formal occupational safety and environmental standards, and sells direct concentrate to MMG at market parity. This aligns surface and subsurface rights under Indigenous sovereign ownership.
                </p>
              </div>
            </div>

            {/* Strategic Callout Banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white border border-amber-500/40 space-y-3">
              <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">
                <Sparkles size={15} />
                <span>ICEarth Sovereign Doctrine Alignment</span>
              </div>
              <p className="text-base sm:text-lg font-serif italic text-stone-100 leading-snug">
                “This is the exact thesis of Indigenous Communities Earth: addressing colonial extraction and artisanal exploitation by arming Indigenous nations with sovereign information technology, legitimate legal equity, and cryptographic supply chain provenance. Real sovereignty transforms communities from victimized subjects into verified global mineral partners.”
              </p>
            </div>
          </div>

          {/* Copper Concession Breakdown Graphic */}
          <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-6 shadow-sm`}>
            <div>
              <span className="text-xs font-mono font-bold uppercase text-amber-600 dark:text-amber-400 tracking-wider">Global Strategic Context</span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold mt-1">Las Bambas Copper Deposit &amp; Global Energy Transition Scale</h3>
              <p className="text-xs text-stone-500 font-sans mt-0.5">Copper is the fundamental electrical conductor for the global AI compute and clean-grid revolution.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={copperScaleData}
                      cx="50%"
                      cy="50%"
                      innerRadius={55}
                      outerRadius={85}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {copperScaleData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ backgroundColor: isLight ? '#fff' : '#1c1917', borderRadius: '12px' }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="md:col-span-7 space-y-4">
                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-amber-600 dark:text-amber-400">
                    <span>LAS BAMBAS GLOBAL RELEVANCE</span>
                    <span>2% OF GLOBAL COPPER</span>
                  </div>
                  <p className="text-xs text-stone-600 dark:text-stone-300 font-sans leading-relaxed">
                    Las Bambas alone generates nearly 2% of the world's copper. Because copper is essential for wind turbines, electric vehicles, and high-density AI data centers, disruptions at Las Bambas trigger immediate price volatility on the London Metal Exchange (LME).
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-teal-500/10 border border-teal-500/30 space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-teal-600 dark:text-teal-400">
                    <span>PAMPUTA SOVEREIGN CONCESSION STRATEGY</span>
                    <span>WIN-WIN FORMALIZATION</span>
                  </div>
                  <p className="text-xs text-stone-600 dark:text-stone-300 font-sans leading-relaxed">
                    Rather than costly military security and repeated transportation halts, selling or sub-leasing the disputed pit gives MMG a stable supply stream, eliminates regulatory friction, and delivers authentic economic prosperity to the ancestral caretakers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeSubTab === 'colonial_duality' && (
        <div className="space-y-8">
          <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-6 shadow-sm`}>
            <div>
              <span className="text-xs font-mono font-bold uppercase text-amber-600 dark:text-amber-400 tracking-wider">Root Legal Dilemma</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold mt-1">The Colonial Legal Separation: Surface vs. Subsurface Ownership</h2>
              <p className="text-xs text-stone-500 font-sans mt-1">
                Inherited from 16th-century Spanish colonial mining codes (the <em>Regalía Minera</em>), Latin American states claim exclusive ownership of all mineral deposits below ground, granting concessions over Indigenous ancestral lands without communal consent.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-4">
                <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-mono text-xs font-bold uppercase">
                  <ShieldAlert size={16} />
                  <span>The Extractive Colonial Framework</span>
                </div>
                <h3 className="text-lg font-serif font-bold">State Concession to Foreign Capital</h3>
                <ul className="text-xs space-y-2.5 text-stone-600 dark:text-stone-300 font-sans list-disc pl-4">
                  <li><strong>Subsurface Ownership:</strong> The Peruvian national government retains 100% of mineral wealth underground.</li>
                  <li><strong>Concession Auction:</strong> The state auctions exploitation licenses to global conglomerates ($10B MMG project) without deeded surface rights.</li>
                  <li><strong>Surface Disconnect:</strong> Foreign operators must subsequently negotiate easements or land purchases with Indigenous pastoralists.</li>
                  <li><strong>Perpetual Conflict:</strong> Local communities bear environmental burdens (heavy metal dust, sulfuric runoff, depleted aquifers) while revenues flow to Lima and Beijing.</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 space-y-4">
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-bold uppercase">
                  <ShieldCheck size={16} />
                  <span>The ICEarth Sovereign Solution</span>
                </div>
                <h3 className="text-lg font-serif font-bold">Unified Sovereign Mineral Integration</h3>
                <ul className="text-xs space-y-2.5 text-stone-600 dark:text-stone-300 font-sans list-disc pl-4">
                  <li><strong>Concession Buyout:</strong> Pamputa community directly acquires the mineral concession from MMG, reuniting surface and subsurface title.</li>
                  <li><strong>Artisanal Formalization:</strong> Thousands of small-scale miners organized into a registered, safety-compliant Indigenous cooperative.</li>
                  <li><strong>Zero Environmental Impunity:</strong> High-precision environmental sensors monitor soil, water, and tailings to prevent toxic acid drainage.</li>
                  <li><strong>Direct Supplier Contracts:</strong> The community co-op sells copper concentrate directly to the MMG processing mill, retaining fair-market profits locally.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeSubTab === 'supply_chain' && (
        <div className="space-y-8">
          <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-6 shadow-sm`}>
            <div>
              <span className="text-xs font-mono font-bold uppercase text-amber-600 dark:text-amber-400 tracking-wider">Supply Chain Forensics</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold mt-1">The Apu Chunta 400-Mile Haul &amp; Global Commodity Trading Giants</h2>
              <p className="text-xs text-stone-500 font-sans mt-1">
                How informal Indigenous extraction feeds into the world's most sophisticated commodity trading houses: Trafigura, IXM SA, and Glencore.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-2">
                <div className="text-amber-600 dark:text-amber-400 font-mono text-xs font-bold">STAGE 1: APU CHUNTA PIT</div>
                <div className="text-lg font-serif font-bold">Artisanal Extraction</div>
                <p className="text-xs text-stone-600 dark:text-stone-300 font-sans leading-relaxed">
                  Miners blast and hand-sort high-grade copper skarn ore from community land at the Apu Chunta quarry, yielding 90,000 MT of contained copper.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-orange-500/10 border border-orange-500/30 space-y-2">
                <div className="text-orange-600 dark:text-orange-400 font-mono text-xs font-bold">STAGE 2: ANDEAN HAUL</div>
                <div className="text-lg font-serif font-bold">400-Mile Trucking</div>
                <p className="text-xs text-stone-600 dark:text-stone-300 font-sans leading-relaxed">
                  Convoys of heavy haulers navigate 400+ miles of unpaved, winding Andean dirt roads, generating dust exposures and wear across regional corridors.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-teal-500/10 border border-teal-500/30 space-y-2">
                <div className="text-teal-600 dark:text-teal-400 font-mono text-xs font-bold">STAGE 3: TOLL MILLING</div>
                <div className="text-lg font-serif font-bold">Coastal Processing</div>
                <p className="text-xs text-stone-600 dark:text-stone-300 font-sans leading-relaxed">
                  Private toll processing mills in coastal Arequipa and Nazca crush the ore and run flotation cells to produce commercial copper concentrate.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-purple-500/10 border border-purple-500/30 space-y-2">
                <div className="text-purple-600 dark:text-purple-400 font-mono text-xs font-bold">STAGE 4: TRADER EXPORT</div>
                <div className="text-lg font-serif font-bold">Global Trading Desks</div>
                <p className="text-xs text-stone-600 dark:text-stone-300 font-sans leading-relaxed">
                  Commodity giants like Trafigura, IXM SA, and Glencore buy the concentrate, shipping it from Port of Matarani to Chinese and European smelters.
                </p>
              </div>
            </div>

            {/* Economic Value Retention Bar Chart */}
            <div className="pt-6 border-t border-stone-100 dark:border-stone-800">
              <h4 className="text-base font-bold font-sans mb-1">Value Capture: Informal Exploitation vs. Sovereign Co-Op Model</h4>
              <p className="text-xs text-stone-500 font-sans mb-4">Comparing price realization when Indigenous miners are informal vs. formal equity partners</p>

              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={valueCaptureData} margin={{ top: 10, right: 30, left: 10, bottom: 10 }}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                    <XAxis dataKey="stage" tick={{ fontSize: 11 }} />
                    <YAxis unit="%" tick={{ fontSize: 11 }} />
                    <Tooltip contentStyle={{ backgroundColor: isLight ? '#fff' : '#1c1917', borderRadius: '12px' }} />
                    <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                    <Bar dataKey="wildcatCapture" name="Informal Wildcatting (%)" fill="#ef4444" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="sovereignCoopCapture" name="Sovereign Co-Op Model (%)" fill="#10b981" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeSubTab === 'reinfo_formalization' && (
        <div className="space-y-8">
          <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-6 shadow-sm`}>
            <div>
              <span className="text-xs font-mono font-bold uppercase text-amber-600 dark:text-amber-400 tracking-wider">Regulatory Breakdown</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold mt-1">The Reinfo Trap vs. Genuine Sovereign Formalization</h2>
              <p className="text-xs text-stone-500 font-sans mt-1">
                Peru’s <em>Registro Integral de Formalización Minera</em> (Reinfo) was conceived a decade ago as a temporary bridge to help artisanal miners enter the formal economy. Instead, it became an endlessly extended limbo.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-rose-500/10 border border-rose-500/30 space-y-3">
                <h3 className="text-base font-bold font-sans text-rose-600 dark:text-rose-400 flex items-center gap-2">
                  <AlertTriangle size={18} />
                  <span>The Failure of the Temporary Reinfo System</span>
                </h3>
                <p className="text-xs text-stone-600 dark:text-stone-300 font-sans leading-relaxed">
                  Industry leaders and environmental regulators argue Reinfo is often used as a legal shield for uncontrolled wildcatting without environmental permits or worker safety protocols. Because it has been repeatedly extended by Peru's Congress without finishing formalization, miners remain vulnerable to sudden criminalization and predatory middlemen who buy ore below fair market rates.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 space-y-3">
                <h3 className="text-base font-bold font-sans text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
                  <ShieldCheck size={18} />
                  <span>The Pamputa Sovereign Solution</span>
                </h3>
                <p className="text-xs text-stone-600 dark:text-stone-300 font-sans leading-relaxed">
                  By buying the concession and establishing a direct supplier agreement with MMG, Pamputa bypasses the bureaucratic Reinfo trap entirely. The miners become recognized commercial contractors under standard Peruvian corporate and mining law, operating with proper ventilation, certified explosives, geological planning, and environmental reclamation escrow accounts.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeSubTab === 'global_indigenous_convergence' && (
        <div className="space-y-8">
          <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-6 shadow-sm`}>
            <div>
              <span className="text-xs font-mono font-bold uppercase text-amber-600 dark:text-amber-400 tracking-wider">A Global Movement</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold mt-1">The Global Indigenous Sovereign Rights &amp; IT Convergence</h2>
              <p className="text-xs text-stone-500 font-sans mt-1">
                Pamputa is not an isolated event; it represents the vanguard of a unified global Indigenous movement reclaiming mineral wealth, sovereign computing, and clean tech stewardship across the Americas and Africa.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {globalConvergenceCases.map((c, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl border space-y-3 ${
                    isLight ? 'bg-stone-50 border-stone-200 hover:border-amber-400' : 'bg-stone-900/80 border-stone-800 hover:border-amber-500/40'
                  } transition-all`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wide">
                      {c.region}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-stone-200 dark:bg-stone-800 font-bold">
                      {c.resource}
                    </span>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-stone-900 dark:text-white">
                    {c.sovereignModel}
                  </h3>
                  <p className="text-xs text-stone-600 dark:text-stone-300 font-sans leading-relaxed">
                    {c.impact}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-3">
              <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-bold text-sm font-sans">
                <Compass size={16} />
                <span>The Core ICEarth Mandate</span>
              </div>
              <p className="text-xs text-stone-700 dark:text-stone-300 font-sans leading-relaxed">
                As the world scrambles for copper, lithium, cobalt, and rare earths to build out artificial intelligence server clusters and electric grids, extractive corporations must not be permitted to repeat the lead and gold genocide of past centuries. Indigenous Communities Earth establishes the technological, legal, and financial architecture so that tribal nations retain primary ownership and sovereign control over their minerals and digital futures.
              </p>
            </div>
          </div>
        </div>
      )}

      {activeSubTab === 'infographic_studio' && (
        <div className="space-y-6">
          <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-6`}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono font-bold uppercase text-amber-600 dark:text-amber-400 tracking-wider">Cryptographic Visual Provenance</span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold mt-1">Plate #85: Peru Indigenous Copper Sovereignty Infographic</h2>
                <p className="text-xs text-stone-500 font-sans mt-0.5">SHA-256 Vault Hash: {vaultHash}</p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={copyVaultHash}
                  className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 font-mono text-xs rounded-xl flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  {copiedHash ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  <span>{copiedHash ? 'Hash Copied' : 'Copy Vault Hash'}</span>
                </button>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-4 py-2 bg-amber-600 hover:bg-amber-500 text-stone-950 font-mono font-bold text-xs rounded-xl flex items-center gap-1.5 transition-all cursor-pointer shadow-md"
                >
                  <Maximize2 size={14} />
                  <span>Full Screen Lightbox</span>
                </button>
              </div>
            </div>

            <div
              onClick={() => setIsModalOpen(true)}
              className="rounded-2xl overflow-hidden border border-stone-800 bg-black cursor-pointer group shadow-2xl relative"
            >
              <img
                src={peruCopperImg}
                alt="Plate #85 Full Resolution"
                className="w-full h-auto object-contain max-h-[600px] group-hover:scale-101 transition-transform"
              />
              <div className="absolute inset-0 bg-stone-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="px-4 py-2 bg-amber-600 text-stone-950 font-mono font-bold text-xs rounded-xl shadow-lg flex items-center gap-2">
                  <Maximize2 size={14} />
                  <span>Click to Expand Lightbox</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. LIGHTBOX MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-stone-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="relative max-w-6xl w-full bg-stone-900 border border-amber-500/40 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-stone-800 pb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
                  <Pickaxe size={14} />
                  <span>Las Bambas Concession Buyout • Plate #85</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                  Peru Indigenous Group Bids for Concession at Las Bambas Copper Mine
                </h3>
              </div>

              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="rounded-2xl overflow-hidden border border-stone-800 bg-black flex items-center justify-center">
              <img
                src={peruCopperImg}
                alt="High Resolution Plate #85 Infographic"
                className="w-full max-h-[72vh] object-contain"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-stone-400 pt-2 border-t border-stone-800">
              <div className="flex items-center gap-2">
                <span>Vault Hash:</span>
                <span className="text-amber-400 font-bold">{vaultHash}</span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="https://www.mining.com/web/peru-indigenous-group-bids-for-part-of-china-owned-copper-mine/#google_vignette"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold rounded-xl flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <ExternalLink size={13} />
                  <span>Mining.com Article</span>
                </a>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-xl cursor-pointer"
                >
                  Close Lightbox
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

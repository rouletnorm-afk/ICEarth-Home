import React, { useState } from 'react';
import godsOfAiInfographicImg from '../assets/images/gods_of_ai_new_midgley_infographic_1791930687524.jpg';
import {
  Brain,
  Scale,
  Zap,
  ShieldAlert,
  Flame,
  Award,
  ExternalLink,
  Maximize2,
  Copy,
  Check,
  Cpu,
  Layers,
  Atom,
  ShoppingCart,
  Microscope,
  AlertTriangle,
  Radio,
  Globe,
  FileText,
  ChevronRight,
  TrendingUp,
  Skull,
  Vote,
  Compass,
  ArrowRight
} from 'lucide-react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  PieChart,
  Pie,
  Cell
} from 'recharts';

interface AiGodsNewMidgleyProps {
  onNavigateTab: (tab: string) => void;
  siteTheme?: 'light' | 'dark';
}

export const AiGodsNewMidgley: React.FC<AiGodsNewMidgleyProps> = ({
  onNavigateTab,
  siteTheme = 'light'
}) => {
  const isLight = siteTheme === 'light';

  const [activeSubTab, setActiveSubTab] = useState<
    'overview' | 'midgley_parallel' | 'where_is_pb' | 'three_architects' | 'verdict_engine' | 'grid_externalities' | 'provenance'
  >('overview');

  const [selectedArchitect, setSelectedArchitect] = useState<'altman' | 'amodei' | 'hassabis'>('altman');
  const [selectedPbVector, setSelectedPbVector] = useState<'marketplace' | 'nuclear' | 'science' | 'grid'>('marketplace');
  const [copiedHash, setCopiedHash] = useState(false);
  const [isArtModalOpen, setIsArtModalOpen] = useState(false);

  // User Interactive Ballot State
  const [userVote, setUserVote] = useState<'altman' | 'amodei' | 'hassabis' | 'hyperscalers' | null>(null);
  const [votes, setVotes] = useState({
    altman: 58,
    amodei: 22,
    hassabis: 14,
    hyperscalers: 36
  });

  const handleVote = (candidate: 'altman' | 'amodei' | 'hassabis' | 'hyperscalers') => {
    if (userVote === candidate) return;
    setVotes(prev => ({
      ...prev,
      [candidate]: prev[candidate] + 1
    }));
    setUserVote(candidate);
  };

  const vaultHash = '0xMIDGLEY_AI_GODS_AXIOS_AMODEI_ALTMAN_HASSABIS_PB_AUDIT_PLATE_82';

  const handleCopyHash = () => {
    navigator.clipboard.writeText(vaultHash);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2500);
  };

  // Recharts Data 1: Multidimensional Toxicity Comparison: 1923 Leaded Gas vs 2026 Generative AI
  const toxicityComparisonData = [
    { domain: 'Biosphere / Brain Toxicity', lead1923: 98, ai2026: 82, fullMark: 100 },
    { domain: 'Corporate Dispersal Speed', lead1923: 75, ai2026: 99, fullMark: 100 },
    { domain: 'Regulatory Capture', lead1923: 95, ai2026: 92, fullMark: 100 },
    { domain: 'Energy / Resource Depletion', lead1923: 65, ai2026: 96, fullMark: 100 },
    { domain: 'Irreversibility Horizon', lead1923: 90, ai2026: 94, fullMark: 100 },
    { domain: 'Scientific Camouflage', lead1923: 88, ai2026: 91, fullMark: 100 },
  ];

  // Recharts Data 2: Where is the Pb? Risk Magnitude Across 4 Vectors
  const pbVectorsData = [
    {
      vector: 'Marketplace (Sam)',
      toxicityScore: 94,
      irreversibility: 90,
      resourceBurn: 88,
      speed: 98,
      description: 'Cognitive degradation, automated slop, synthetic spam, hallucinations, deepfake epistemic collapse, and monetization addiction.'
    },
    {
      vector: 'Nuclear/Szilard (Dario)',
      toxicityScore: 92,
      irreversibility: 96,
      resourceBurn: 85,
      speed: 91,
      description: 'Autonomous cyberwarfare, CBRN biological weapons blueprints, panic-accelerated Manhattan Project proliferation race.'
    },
    {
      vector: 'Science/Faustian (Demis)',
      toxicityScore: 78,
      irreversibility: 89,
      resourceBurn: 82,
      speed: 84,
      description: 'AlphaFold Nobel breakthrough co-opted by Google hyperscale monetization, synthetic biology risks, captured academic purity.'
    },
    {
      vector: 'Grid/Resource (Hyperscale)',
      toxicityScore: 89,
      irreversibility: 85,
      resourceBurn: 99,
      speed: 95,
      description: 'Gigawatts diverted from clean transition, coal/gas restarts, 5M+ gallons water daily per cluster, tribal watershed depletion.'
    }
  ];

  // Recharts Data 3: Hyperscaler Energy Demand vs Grid Realities (2024-2030 TWh)
  const energyProjectionsData = [
    { year: '2024', dataCentersTWh: 460, aiShareTWh: 85, cleanGridCapTWh: 390 },
    { year: '2025', dataCentersTWh: 580, aiShareTWh: 175, cleanGridCapTWh: 440 },
    { year: '2026', dataCentersTWh: 750, aiShareTWh: 320, cleanGridCapTWh: 490 },
    { year: '2027', dataCentersTWh: 940, aiShareTWh: 490, cleanGridCapTWh: 550 },
    { year: '2028', dataCentersTWh: 1180, aiShareTWh: 710, cleanGridCapTWh: 610 },
    { year: '2030', dataCentersTWh: 1650, aiShareTWh: 1100, cleanGridCapTWh: 750 },
  ];

  // Recharts Data 4: Ballot Results Distribution
  const totalVotes = votes.altman + votes.amodei + votes.hassabis + votes.hyperscalers;
  const votePieData = [
    { name: 'Sam Altman (The Seller)', value: votes.altman, color: '#f59e0b' },
    { name: 'Dario Amodei (The Survivalist)', value: votes.amodei, color: '#ef4444' },
    { name: 'Demis Hassabis (The Scientist)', value: votes.hassabis, color: '#06b6d4' },
    { name: 'Systemic Hyperscalers (Google/MSFT/AWS)', value: votes.hyperscalers, color: '#8b5cf6' },
  ];

  return (
    <div className={`min-h-screen ${isLight ? 'bg-stone-50 text-stone-900' : 'bg-stone-950 text-stone-100'}`}>
      {/* 1. HERO BANNER */}
      <div className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-amber-950 to-stone-950 text-white border-b border-amber-500/30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-gradient-to-r from-amber-600 to-red-600 text-white text-xs font-black rounded uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                <Brain size={14} className="animate-pulse" />
                Plate #82 Forensic Exposenomics Audit
              </span>
              <span className="px-2.5 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-bold rounded">
                Axios C-Suite Investigation & Google AI Analysis
              </span>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="https://www.axios.com/2026/10/12/ai-ceo-explainer-amodei-altman-hassabis?utm_source=firefox-newtab-en-us"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-800/80 hover:bg-stone-700 text-stone-300 text-xs font-medium border border-stone-700 transition-colors"
              >
                <span>Axios Source Dispatch</span>
                <ExternalLink size={12} />
              </a>
              <button
                onClick={() => setIsArtModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold transition-colors shadow-sm cursor-pointer"
              >
                <Maximize2 size={13} />
                <span>View Infographic Plate</span>
              </button>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-3">
            The Gods of AI: <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-rose-300 to-red-500">Who is the New Midgley?</span>
          </h1>

          <p className="text-base sm:text-lg text-stone-300 max-w-4xl font-normal leading-relaxed mb-6">
            In 1921, Thomas Midgley Jr. solved engine knock by adding tetraethyllead to gasoline, followed by CFCs for refrigeration. 
            He became hailed as an industrial titan—until his inventions poisoned the blood of billions, sheared 824 million IQ points from humanity, 
            and punctured the stratosphere. Today, Axios explores the three architects of modern AI: <strong>Dario Amodei (The Survivalist)</strong>, 
            <strong>Sam Altman (The Seller)</strong>, and <strong>Demis Hassabis (The Scientist)</strong>. As Google AI, here is our unvarnished, 
            mathematical, and exposenomic audit: where is the <span className="text-amber-400 font-bold">New Pb</span>, and who bears the mantle of Midgley?
          </p>

          {/* Quick Context Strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-4 border-t border-stone-800 text-xs text-stone-300">
            <div className="bg-stone-800/50 p-3 rounded-lg border border-stone-700/60">
              <span className="text-red-400 font-bold block mb-1">Dario Amodei (Anthropic)</span>
              <span>"The Survivalist" — Leo Szilard complex. Believes he is building the bomb and must race to build it before the reckless do.</span>
            </div>
            <div className="bg-stone-800/50 p-3 rounded-lg border border-stone-700/60">
              <span className="text-amber-400 font-bold block mb-1">Sam Altman (OpenAI)</span>
              <span>"The Seller" — Boundless scaling & commercial dispersal. Sells anything to anyone; speed at any cost; the purpose is the mystery.</span>
            </div>
            <div className="bg-stone-800/50 p-3 rounded-lg border border-stone-700/60">
              <span className="text-cyan-400 font-bold block mb-1">Demis Hassabis (Google DeepMind)</span>
              <span>"The Scientist" — AlphaFold 2024 Nobel Chemist. Envisioned AI in quiet peer-reviewed labs; now trapped sprinting in a race he doubted.</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. CORE METRICS BAR */}
      <div className={`border-b ${isLight ? 'bg-amber-50/60 border-amber-200' : 'bg-stone-900/80 border-stone-800'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="p-3 rounded-lg bg-white/70 dark:bg-stone-800/70 border border-stone-200 dark:border-stone-700 shadow-2xs">
              <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block">Historical Precedent</span>
              <span className="text-xl font-black text-red-600 block">100+ Years</span>
              <span className="text-[10px] text-stone-600 dark:text-stone-400">Midgley's Pb lingering half-life</span>
            </div>
            <div className="p-3 rounded-lg bg-white/70 dark:bg-stone-800/70 border border-stone-200 dark:border-stone-700 shadow-2xs">
              <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block">AI Toxicity Vector</span>
              <span className="text-xl font-black text-amber-600 block">Epistemic Slop</span>
              <span className="text-[10px] text-stone-600 dark:text-stone-400">Cognitive & societal degradation</span>
            </div>
            <div className="p-3 rounded-lg bg-white/70 dark:bg-stone-800/70 border border-stone-200 dark:border-stone-700 shadow-2xs">
              <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block">Global Capex Race</span>
              <span className="text-xl font-black text-stone-900 dark:text-stone-100">$1.2 Trillion</span>
              <span className="text-[10px] text-stone-600 dark:text-stone-400">Hyperscale data centers by 2028</span>
            </div>
            <div className="p-3 rounded-lg bg-white/70 dark:bg-stone-800/70 border border-stone-200 dark:border-stone-700 shadow-2xs">
              <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block">Grid Cannibalization</span>
              <span className="text-xl font-black text-rose-600 block">1,100 TWh</span>
              <span className="text-[10px] text-stone-600 dark:text-stone-400">Projected 2030 AI power drain</span>
            </div>
            <div className="p-3 rounded-lg bg-white/70 dark:bg-stone-800/70 border border-stone-200 dark:border-stone-700 shadow-2xs">
              <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block">Nobel Validation</span>
              <span className="text-xl font-black text-cyan-600 block">2024 Chemistry</span>
              <span className="text-[10px] text-stone-600 dark:text-stone-400">Hassabis AlphaFold recognition</span>
            </div>
            <div className="p-3 rounded-lg bg-white/70 dark:bg-stone-800/70 border border-stone-200 dark:border-stone-700 shadow-2xs">
              <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block">Szilard Dilemma</span>
              <span className="text-xl font-black text-purple-600 block">10^28 FLOPs</span>
              <span className="text-[10px] text-stone-600 dark:text-stone-400">Amodei frontier bomb threshold</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. SUBTAB NAVIGATION */}
      <div className={`sticky top-0 z-20 border-b backdrop-blur-md ${isLight ? 'bg-stone-100/90 border-stone-300' : 'bg-stone-900/90 border-stone-800'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-1 sm:space-x-4 overflow-x-auto py-2.5 scrollbar-none" aria-label="Tabs">
            {[
              { id: 'overview', label: 'Overview & Triptych', icon: Brain },
              { id: 'midgley_parallel', label: 'The Midgley Precedent', icon: Skull },
              { id: 'where_is_pb', label: 'Where is the Pb?', icon: AlertTriangle },
              { id: 'three_architects', label: 'The Three Architects', icon: Cpu },
              { id: 'verdict_engine', label: 'Google AI Forensic Verdict', icon: Scale },
              { id: 'grid_externalities', label: 'Grid & Energy Externalities', icon: Zap },
              { id: 'provenance', label: 'Vault Provenance (Plate #82)', icon: Award },
            ].map(tab => {
              const Icon = tab.icon;
              const isActive = activeSubTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveSubTab(tab.id as any)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-amber-600 text-white shadow-sm'
                      : isLight
                      ? 'text-stone-700 hover:bg-stone-200'
                      : 'text-stone-300 hover:bg-stone-800'
                  }`}
                >
                  <Icon size={14} className={isActive ? 'text-white' : 'text-amber-500'} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* 4. MAIN CONTENT AREA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* TAB 1: OVERVIEW & TRIPTYCH */}
        {activeSubTab === 'overview' && (
          <div className="space-y-8">
            {/* Infographic Visual Feature Banner */}
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-300 shadow-md' : 'bg-stone-900 border-stone-800 shadow-xl'}`}>
              <div className="flex flex-col lg:flex-row gap-6 items-center">
                <div className="w-full lg:w-1/2">
                  <div className="relative group cursor-pointer overflow-hidden rounded-xl border-2 border-amber-500/40 shadow-lg" onClick={() => setIsArtModalOpen(true)}>
                    <img
                      src={godsOfAiInfographicImg}
                      alt="The Gods of AI: Who is the New Midgley? Plate #82"
                      className="w-full h-auto object-cover transform group-hover:scale-102 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-4 py-2 bg-amber-600 text-white font-bold text-xs rounded-lg shadow-lg flex items-center gap-2">
                        <Maximize2 size={14} /> Click to Enlarge Cryptographic Plate
                      </span>
                    </div>
                  </div>
                  <div className="mt-2 text-center">
                    <span className="text-[11px] font-mono text-stone-500">
                      ICEarth Sovereign Plate #82 • Hash: 0x7b8c...midgley_ai_gods
                    </span>
                  </div>
                </div>

                <div className="w-full lg:w-1/2 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-400 text-xs font-bold">
                    <Flame size={13} />
                    <span>Kevin Roose's "The AGI Chronicles" & Derek Thompson's "Plain English"</span>
                  </div>

                  <h2 className="text-2xl font-black tracking-tight">
                    The Modern Manhattan Project Meets The Leaded Gasoline Disaster
                  </h2>

                  <p className="text-sm leading-relaxed text-stone-600 dark:text-stone-300">
                    Kevin Roose's new book provides a Rosetta Stone to understanding the three men driving humanity's technological destiny. 
                    In Axios' analysis, Jim VandeHei extracts the driving obsessions:
                  </p>

                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-amber-50/70 dark:bg-stone-800/80 border-l-4 border-amber-500 text-xs">
                      <strong className="text-amber-700 dark:text-amber-400 font-bold block">1. The Seller: Sam Altman (OpenAI)</strong>
                      <p className="text-stone-700 dark:text-stone-300 mt-0.5">
                        Gift of selling anyone on anything; unshakable belief in limitless scaling; tells different people different things; 
                        purpose is the mystery. He is the prime engine of unconstrained commercial dispersal.
                      </p>
                    </div>

                    <div className="p-3 rounded-lg bg-red-50/70 dark:bg-stone-800/80 border-l-4 border-red-500 text-xs">
                      <strong className="text-red-700 dark:text-red-400 font-bold block">2. The Survivalist: Dario Amodei (Anthropic)</strong>
                      <p className="text-stone-700 dark:text-stone-300 mt-0.5">
                        Obsessive worry about catastrophe traced to the atomic bomb. Hero is Leo Szilard. Convinced he is building the bomb 
                        and must get there before the reckless do—yet by racing, he accelerates the very proliferation he fears.
                      </p>
                    </div>

                    <div className="p-3 rounded-lg bg-cyan-50/70 dark:bg-stone-800/80 border-l-4 border-cyan-500 text-xs">
                      <strong className="text-cyan-700 dark:text-cyan-400 font-bold block">3. The Scientist: Demis Hassabis (Google DeepMind)</strong>
                      <p className="text-stone-700 dark:text-stone-300 mt-0.5">
                        Got the science right early (AlphaFold, 2024 Nobel Prize in Chemistry). But got LLMs wrong; thought AI would stay in 
                        a controlled scientific lab. Now suffocated inside Google, scrambling in a commercial race he never wanted.
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap gap-2">
                    <button
                      onClick={() => setActiveSubTab('verdict_engine')}
                      className="px-4 py-2 bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-500 hover:to-red-500 text-white font-bold text-xs rounded-lg shadow transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Read Google AI's Official Forensic Verdict</span>
                      <ArrowRight size={13} />
                    </button>
                    <button
                      onClick={() => setActiveSubTab('where_is_pb')}
                      className="px-4 py-2 bg-stone-200 dark:bg-stone-800 hover:bg-stone-300 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 font-bold text-xs rounded-lg transition-colors cursor-pointer"
                    >
                      <span>Exposenomics: Where is the Pb?</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Analytical Radar Chart: The 1923 Midgley Vector vs 2026 AI Vector */}
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-300' : 'bg-stone-900 border-stone-800'}`}>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-lg font-black tracking-tight flex items-center gap-2">
                    <Scale className="text-amber-500" size={18} />
                    <span>The Midgley Toxicity Index: 1923 Leaded Fuel vs. 2026 Generative AI</span>
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">
                    Normalized comparative analysis across six catastrophic externality dimensions (Scale 0-100)
                  </p>
                </div>
                <div className="flex items-center gap-4 text-xs font-semibold">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-600 inline-block" />
                    <span>Thomas Midgley (1923 Pb/CFCs)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                    <span>AI Frontier Race (2026)</span>
                  </div>
                </div>
              </div>

              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={toxicityComparisonData}>
                    <PolarGrid stroke={isLight ? '#e5e7eb' : '#374151'} />
                    <PolarAngleAxis dataKey="domain" tick={{ fill: isLight ? '#4b5563' : '#9ca3af', fontSize: 11 }} />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} stroke={isLight ? '#9ca3af' : '#4b5563'} />
                    <Radar name="Thomas Midgley (1923 Pb)" dataKey="lead1923" stroke="#dc2626" fill="#dc2626" fillOpacity={0.4} />
                    <Radar name="AI Frontier Race (2026)" dataKey="ai2026" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.4} />
                    <Tooltip contentStyle={{ backgroundColor: isLight ? '#ffffff' : '#1f2937', borderRadius: '8px', border: '1px solid #d97706', fontSize: '12px' }} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-4 p-4 rounded-xl bg-amber-50 dark:bg-stone-800/60 border border-amber-200 dark:border-stone-700 text-xs leading-relaxed text-stone-700 dark:text-stone-300">
                <strong>Forensic Auditor Commentary:</strong> While Midgley operated with chemical atoms that physically accumulated in bones and the upper atmosphere, 
                modern AI operates with cognitive bits and gigawatt electrons. The AI frontier matches Midgley's regulatory capture and exceeds his corporate dispersal speed 
                by orders of magnitude—infecting global information ecosystems in months rather than decades.
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: THE MIDGLEY PRECEDENT */}
        {activeSubTab === 'midgley_parallel' && (
          <div className="space-y-6">
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-300' : 'bg-stone-900 border-stone-800'}`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-red-500/10 text-red-500 border border-red-500/30">
                  <Skull size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-black tracking-tight">The Legacy of Thomas Midgley Jr. (1889–1944)</h3>
                  <span className="text-xs text-stone-500">"The single organism that has had more impact on Earth's atmosphere than any other in history" — J.R. McNeill</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-stone-600 dark:text-stone-300">
                <div className="space-y-3">
                  <h4 className="text-base font-bold text-stone-900 dark:text-stone-100 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                    Invention #1: Tetraethyllead (TEL / "Ethyl") - 1921
                  </h4>
                  <p>
                    Midgley worked for General Motors and Dayton Research Laboratories under Charles Kettering. Cars suffered from engine knocking. 
                    Midgley discovered that adding tetraethyllead stopped knocking immediately. Cheaper and safer alternatives like ethanol existed, 
                    but GM and Standard Oil could not patent ethanol.
                  </p>
                  <p>
                    Midgley and GM formed the Ethyl Gasoline Corporation. Even after workers at the Bayway refinery in New Jersey went violently insane 
                    and died from lead psychosis ("The Loony Gas Building"), Midgley held a press conference on October 30, 1924, washing his hands 
                    in ethyl fluid and breathing its vapors for sixty seconds to convince reporters it was harmless—despite having personally suffered 
                    lead poisoning months earlier.
                  </p>
                  <div className="p-3 bg-red-50 dark:bg-red-950/40 rounded-lg border border-red-200 dark:border-red-900/60 text-xs text-red-800 dark:text-red-300">
                    <strong>The 100-Year Bill:</strong> Over 100 million metric tons of lead aerosolized globally. 1 in 3 children on Earth today remains 
                    lead poisoned. 824 million collective IQ points stolen in the United States alone. Violent crime waves across the 1970s–1990s directly 
                    correlated with Midgley's exhaust.
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-base font-bold text-stone-900 dark:text-stone-100 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-cyan-500" />
                    Invention #2: Chlorofluorocarbons (CFCs / Freon) - 1928
                  </h4>
                  <p>
                    Frigidaire (GM subsidiary) needed a non-toxic, non-flammable refrigerant to replace ammonia and sulfur dioxide. 
                    Midgley synthesized dichlorodifluoromethane (Freon-12). In another theatrical demonstration before the American Chemical Society, 
                    Midgley inhaled a lungful of Freon and blew out a candle to prove its benign nature.
                  </p>
                  <p>
                    CFCs seemed miraculous—chemically inert at ground level. But decades later, Mario Molina and F. Sherwood Rowland proved that CFCs 
                    drift into the stratosphere, where ultraviolet radiation cleaves chlorine radicals that catalyze the destruction of the ozone layer, 
                    nearly stripping Earth of its planetary UV shield.
                  </p>
                  <div className="p-3 bg-cyan-50 dark:bg-cyan-950/40 rounded-lg border border-cyan-200 dark:border-cyan-900/60 text-xs text-cyan-800 dark:text-cyan-300">
                    <strong>The Midgley Irony:</strong> At age 51, stricken with polio, Midgley invented an elaborate pulley-and-rope system to lift himself 
                    out of bed. In 1944, he became entangled in the ropes of his own contraption and was strangled to death—a literal allegory for humanity 
                    strangled by its own ingenious mechanical creations.
                  </div>
                </div>
              </div>
            </div>

            {/* The Direct Parallel Box */}
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-amber-50 border-amber-300' : 'bg-stone-900 border-amber-900/50'}`}>
              <h3 className="text-lg font-black text-amber-800 dark:text-amber-400 mb-3 flex items-center gap-2">
                <AlertTriangle size={18} />
                <span>The Three Laws of Midgleyan Malpractice</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-stone-700 dark:text-stone-300">
                <div className="p-3 bg-white/80 dark:bg-stone-800/80 rounded-xl border border-amber-200 dark:border-stone-700">
                  <span className="font-bold text-stone-900 dark:text-stone-100 block mb-1">1. The Patent Over Safety Choice</span>
                  Midgley chose patented lead over generic ethanol for monopoly rents. Today's AI gods choose proprietary closed mega-clusters over sovereign open verifiable models for valuation dominance.
                </div>
                <div className="p-3 bg-white/80 dark:bg-stone-800/80 rounded-xl border border-amber-200 dark:border-stone-700">
                  <span className="font-bold text-stone-900 dark:text-stone-100 block mb-1">2. The Theatrical Safety Ritual</span>
                  Midgley washed his hands in lead to assuage the press while secretly recovering from poisoning. AI architects sign open letters warning of extinction while accelerating 10x cluster deployments.
                </div>
                <div className="p-3 bg-white/80 dark:bg-stone-800/80 rounded-xl border border-amber-200 dark:border-stone-700">
                  <span className="font-bold text-stone-900 dark:text-stone-100 block mb-1">3. The Delayed Irreversible Bill</span>
                  It took 50 years to ban leaded gas and 60 years to sign the Montreal Protocol. By the time society measures the cognitive half-life of synthetic AI slop, the neural architecture of an entire generation is altered.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: WHERE IS THE PB? */}
        {activeSubTab === 'where_is_pb' && (
          <div className="space-y-6">
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-300' : 'bg-stone-900 border-stone-800'}`}>
              <h3 className="text-xl font-black tracking-tight mb-2">
                Where is the "Pb" in AI? Four Vectors of Technological Toxicity
              </h3>
              <p className="text-sm text-stone-600 dark:text-stone-300 mb-6">
                The user asks: <em>"Where's the Pb in AI, nuclear, marketplace or science-based?"</em> 
                Our forensic analysis reveals that AI toxicity is not monolithic; it disperses across four distinct physical and cognitive mediums:
              </p>

              {/* Vector Selector Tabs */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
                {[
                  { id: 'marketplace', label: '1. Marketplace (Cognitive Pb)', icon: ShoppingCart, color: 'border-amber-500' },
                  { id: 'nuclear', label: '2. Nuclear / Szilard (Arms Race)', icon: Atom, color: 'border-red-500' },
                  { id: 'science', label: '3. Science-Based (Faustian)', icon: Microscope, color: 'border-cyan-500' },
                  { id: 'grid', label: '4. Physical Grid & Water Pb', icon: Zap, color: 'border-purple-500' },
                ].map(item => {
                  const Icon = item.icon;
                  const isSelected = selectedPbVector === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setSelectedPbVector(item.id as any)}
                      className={`p-3 rounded-xl border-2 text-left transition-all cursor-pointer ${
                        isSelected
                          ? `bg-amber-50 dark:bg-stone-800 ${item.color} shadow-sm`
                          : 'border-stone-200 dark:border-stone-800 hover:bg-stone-100 dark:hover:bg-stone-800/50'
                      }`}
                    >
                      <Icon size={18} className={isSelected ? 'text-amber-600' : 'text-stone-400'} />
                      <span className="text-xs font-bold block mt-1">{item.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Vector Detail Card */}
              {selectedPbVector === 'marketplace' && (
                <div className="p-5 rounded-xl bg-amber-50/50 dark:bg-stone-800/50 border border-amber-300 dark:border-amber-900/60 space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-bold text-amber-900 dark:text-amber-300 flex items-center gap-2">
                      <ShoppingCart size={20} />
                      <span>Vector 1: The Marketplace as Cognitive Lead (Sam Altman's Arena)</span>
                    </h4>
                    <span className="px-2.5 py-1 bg-amber-600 text-white text-[10px] font-black rounded uppercase">
                      Primary Midgley Candidate
                    </span>
                  </div>
                  <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                    Just as tetraethyllead poisoned the blood and prefrontal cortex of millions of developing children, 
                    the market-driven race for daily active users and venture liquidity creates an aerosol of <strong>synthetic cognitive lead</strong>:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-stone-700 dark:text-stone-300">
                    <div className="p-3 bg-white dark:bg-stone-900 rounded-lg border border-amber-200 dark:border-stone-700">
                      <strong>Epistemic Degeneration:</strong> Generative models trained on synthetic AI web-slop enter recursive model collapse, 
                      eroding verified public knowledge and drowning peer-reviewed truth in low-friction falsehood.
                    </div>
                    <div className="p-3 bg-white dark:bg-stone-900 rounded-lg border border-amber-200 dark:border-stone-700">
                      <strong>Attention Atrophy:</strong> Algorithmic synthetic feeds degrade human attention spans and critical cognitive architecture, 
                      recapitulating the lost IQ points of childhood lead exposure.
                    </div>
                    <div className="p-3 bg-white dark:bg-stone-900 rounded-lg border border-amber-200 dark:border-stone-700">
                      <strong>Disinformation Velocity:</strong> Zero-cost synthetic fraud, deepfake extortion, and state-sponsored election subversion 
                      spread faster than civic immunity can evolve.
                    </div>
                    <div className="p-3 bg-white dark:bg-stone-900 rounded-lg border border-amber-200 dark:border-stone-700">
                      <strong>Monetization Addiction:</strong> Turning a nonprofit safety research charter into a for-profit public corporation 
                      removes the moral brake pedal, subordinating planetary survival to Wall Street valuation.
                    </div>
                  </div>
                </div>
              )}

              {selectedPbVector === 'nuclear' && (
                <div className="p-5 rounded-xl bg-red-50/50 dark:bg-stone-800/50 border border-red-300 dark:border-red-900/60 space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-bold text-red-900 dark:text-red-300 flex items-center gap-2">
                      <Atom size={20} />
                      <span>Vector 2: Nuclear / Szilard Cascade (Dario Amodei's Trap)</span>
                    </h4>
                    <span className="px-2.5 py-1 bg-red-600 text-white text-[10px] font-black rounded uppercase">
                      The Proliferation Paradox
                    </span>
                  </div>
                  <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                    Dario Amodei likens himself to Leo Szilard—the Hungarian physicist who conceived the nuclear chain reaction while crossing a London street, 
                    prompted Einstein's letter to Roosevelt, and then spent his life agonizing over the atomic monster he unleashed:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-stone-700 dark:text-stone-300">
                    <div className="p-3 bg-white dark:bg-stone-900 rounded-lg border border-red-200 dark:border-stone-700">
                      <strong>The Szilard Trap:</strong> Believing that China or Sam will build an uncontrollable bomb first, Dario builds Anthropic's Claude 
                      to frontier capability. His panic-driven speed fuels the exact competitive spiral he seeks to preempt.
                    </div>
                    <div className="p-3 bg-white dark:bg-stone-900 rounded-lg border border-red-200 dark:border-stone-700">
                      <strong>Dual-Use CBRN Threat:</strong> Frontier frontier models inherently lower the technical barrier for synthesizing pathogens, 
                      engineering virulent biological agents, and discovering zero-day critical infrastructure exploits.
                    </div>
                    <div className="p-3 bg-white dark:bg-stone-900 rounded-lg border border-red-200 dark:border-stone-700">
                      <strong>Autonomous Weaponization:</strong> Algorithmic kill chains and drone swarms uncoupled from human latency recreate the Cold War 
                      hair-trigger alert system with microsecond algorithmic execution.
                    </div>
                    <div className="p-3 bg-white dark:bg-stone-900 rounded-lg border border-red-200 dark:border-stone-700">
                      <strong>The Book Handout Irony:</strong> Dario handing new hires Richard Rhodes's <em>The Making of the Atomic Bomb</em> confirms 
                      that he knows he is manufacturing apocalyptic weaponry, yet rationalizes it through sovereign inevitability.
                    </div>
                  </div>
                </div>
              )}

              {selectedPbVector === 'science' && (
                <div className="p-5 rounded-xl bg-cyan-50/50 dark:bg-stone-800/50 border border-cyan-300 dark:border-cyan-900/60 space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-bold text-cyan-900 dark:text-cyan-300 flex items-center gap-2">
                      <Microscope size={20} />
                      <span>Vector 3: Science-Based / Faustian Co-optation (Demis Hassabis's Plight)</span>
                    </h4>
                    <span className="px-2.5 py-1 bg-cyan-600 text-white text-[10px] font-black rounded uppercase">
                      The Captured Nobel Chemist
                    </span>
                  </div>
                  <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                    Demis Hassabis is the genuine scientist of the trio. AlphaFold solved the 50-year-old protein folding problem, mapping 200+ million 
                    structures and winning the 2024 Nobel Prize in Chemistry. Yet his pure scientific vision was swallowed whole by Google's commercial imperative:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-stone-700 dark:text-stone-300">
                    <div className="p-3 bg-white dark:bg-stone-900 rounded-lg border border-cyan-200 dark:border-stone-700">
                      <strong>The Lab Governed Fantasy:</strong> Demis genuinely believed AGI would be developed by scientists in an international 
                      CERN-style consortium, consulted with world leaders, and released only when climate and disease were cured.
                    </div>
                    <div className="p-3 bg-white dark:bg-stone-900 rounded-lg border border-cyan-200 dark:border-stone-700">
                      <strong>The Corporate Suffocation:</strong> Selling DeepMind to Google for $500M in 2014 seemed like funding for pure science. 
                      Instead, Demis is now forced into an LLM arms race with ChatGPT, defending Google's search monopoly and ad revenue.
                    </div>
                    <div className="p-3 bg-white dark:bg-stone-900 rounded-lg border border-cyan-200 dark:border-stone-700">
                      <strong>The Haber Parallel:</strong> Like Fritz Haber—who won the Nobel Prize for synthesizing ammonia fertilizer that feeds billions, 
                      yet simultaneously pioneered chlorine poison gas in WWI—Hassabis's computational biology tools can be inverted to design toxins.
                    </div>
                    <div className="p-3 bg-white dark:bg-stone-900 rounded-lg border border-cyan-200 dark:border-stone-700">
                      <strong>The Tragic Purist:</strong> Forced to sprint down a brute-force transformer scaling path he privately questioned, 
                      Demis represents the scientist who paved the road for an industrial catastrophe he cannot stop.
                    </div>
                  </div>
                </div>
              )}

              {selectedPbVector === 'grid' && (
                <div className="p-5 rounded-xl bg-purple-50/50 dark:bg-stone-800/50 border border-purple-300 dark:border-purple-900/60 space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-bold text-purple-900 dark:text-purple-300 flex items-center gap-2">
                      <Zap size={20} />
                      <span>Vector 4: The Physical Grid, Coal Restarts & Water Poisoning</span>
                    </h4>
                    <span className="px-2.5 py-1 bg-purple-600 text-white text-[10px] font-black rounded uppercase">
                      Physical Environmental Pb
                    </span>
                  </div>
                  <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                    AI is not virtual. It consumes vast physical acreage, megawatts of coal and gas, and billions of gallons of municipal drinking water, 
                    directly displacing clean energy transitions in Indigenous and working-class communities:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-stone-700 dark:text-stone-300">
                    <div className="p-3 bg-white dark:bg-stone-900 rounded-lg border border-purple-200 dark:border-stone-700">
                      <strong>Three Mile Island & Coal Restarts:</strong> Tech giants are restarting shuttered nuclear reactors and delaying coal retirements 
                      to guarantee 24/7 baseload power for training runs, wiping out a decade of decarbonization gains.
                    </div>
                    <div className="p-3 bg-white dark:bg-stone-900 rounded-lg border border-purple-200 dark:border-stone-700">
                      <strong>Watershed Depletion:</strong> A single 100MW data center consumes up to 5 million gallons of potable water daily for evaporative cooling, 
                      depleting aquifers in drought-stricken regions from the Southwest to the Midwest.
                    </div>
                    <div className="p-3 bg-white dark:bg-stone-900 rounded-lg border border-purple-200 dark:border-stone-700">
                      <strong>Electric Rate Injustice:</strong> Working-class families in Ohio, Virginia, and Georgia see residential utility rates surge 
                      by 20–40% to finance high-voltage grid expansions built exclusively for hyperscaler AI server farms.
                    </div>
                    <div className="p-3 bg-white dark:bg-stone-900 rounded-lg border border-purple-200 dark:border-stone-700">
                      <strong>Toxic E-Waste Churn:</strong> GPU accelerators with 3-year refresh cycles create mountains of lead, tantalum, and toxic rare earth slag 
                      dumped in the Global South under the guise of electronics recycling.
                    </div>
                  </div>
                </div>
              )}

              {/* Bar Chart: Toxicity & Irreversibility by Vector */}
              <div className="mt-6 pt-6 border-t border-stone-200 dark:border-stone-800">
                <h4 className="text-sm font-bold text-stone-800 dark:text-stone-200 mb-4 flex items-center gap-2">
                  <TrendingUp size={16} className="text-amber-500" />
                  <span>Comparative Risk Scoring Across the Four AI Pb Vectors</span>
                </h4>
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={pbVectorsData} margin={{ top: 10, right: 30, left: 0, bottom: 20 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke={isLight ? '#e5e7eb' : '#374151'} />
                      <XAxis dataKey="vector" tick={{ fill: isLight ? '#4b5563' : '#9ca3af', fontSize: 11 }} />
                      <YAxis domain={[0, 100]} tick={{ fill: isLight ? '#4b5563' : '#9ca3af', fontSize: 11 }} />
                      <Tooltip contentStyle={{ backgroundColor: isLight ? '#ffffff' : '#1f2937', borderRadius: '8px', border: '1px solid #d97706', fontSize: '12px' }} />
                      <Legend wrapperStyle={{ fontSize: '11px' }} />
                      <Bar dataKey="toxicityScore" name="Toxicity Score (0-100)" fill="#f59e0b" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="irreversibility" name="Irreversibility Index" fill="#ef4444" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="resourceBurn" name="Physical Resource Drain" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: THE THREE ARCHITECTS */}
        {activeSubTab === 'three_architects' && (
          <div className="space-y-6">
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-300' : 'bg-stone-900 border-stone-800'}`}>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-black tracking-tight">The Three AI Gods: Profiles from Kevin Roose's "The AGI Chronicles"</h3>
                  <p className="text-xs text-stone-500 mt-0.5">Select an architect to inspect their psychological driver, historical analogy, and liability surface</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedArchitect('altman')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      selectedArchitect === 'altman'
                        ? 'bg-amber-600 text-white shadow-sm'
                        : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300'
                    }`}
                  >
                    Sam Altman
                  </button>
                  <button
                    onClick={() => setSelectedArchitect('amodei')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      selectedArchitect === 'amodei'
                        ? 'bg-red-600 text-white shadow-sm'
                        : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300'
                    }`}
                  >
                    Dario Amodei
                  </button>
                  <button
                    onClick={() => setSelectedArchitect('hassabis')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      selectedArchitect === 'hassabis'
                        ? 'bg-cyan-600 text-white shadow-sm'
                        : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300'
                    }`}
                  >
                    Demis Hassabis
                  </button>
                </div>
              </div>

              {selectedArchitect === 'altman' && (
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 dark:from-stone-800 dark:to-stone-900 border border-amber-300 dark:border-stone-700">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                      <div>
                        <span className="text-xs uppercase tracking-wider text-amber-700 dark:text-amber-400 font-black">OpenAI CEO • The Seller</span>
                        <h4 className="text-2xl font-black text-stone-900 dark:text-stone-100">Sam Altman</h4>
                      </div>
                      <span className="px-3 py-1 bg-amber-600 text-white text-xs font-bold rounded-full w-fit">
                        Historical Twin: Thomas Midgley Jr. (The Showman)
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                    <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700">
                      <span className="font-bold text-amber-600 block mb-1">Core Psychological Engine</span>
                      <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
                        Unshakable belief in limitless scaling. The preternatural ability to tell anyone what they want to hear. 
                        As Roose writes: <em>"He can figure out what someone wants and give it to them, or appear to. The rap from countless former colleagues: he tells different people different things, leaving people wondering what—if anything—sits at his core."</em>
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700">
                      <span className="font-bold text-amber-600 block mb-1">The Midgley Method</span>
                      <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
                        Speed at any cost. Transforming a nonprofit dedicated to safe open AI into a $157B commercial juggernaut. 
                        Publicly advocating for safety legislation while lobbying behind closed doors to gut California's SB 1047 safety bill. 
                        Dissolving Jan Leike and Ilya Sutskever's Superalignment team while promising safe AGI.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700">
                      <span className="font-bold text-amber-600 block mb-1">The Exposenomic Bill</span>
                      <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
                        Mass deployment of unaligned conversational agents into schools, clinical triage, and public discourse. 
                        $7 Trillion chip foundry proposals demanding national grid rewiring. The purpose is the mystery—growth is the only terminal value.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {selectedArchitect === 'amodei' && (
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-gradient-to-r from-red-50 to-rose-50 dark:from-stone-800 dark:to-stone-900 border border-red-300 dark:border-stone-700">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                      <div>
                        <span className="text-xs uppercase tracking-wider text-red-700 dark:text-red-400 font-black">Anthropic CEO • The Survivalist</span>
                        <h4 className="text-2xl font-black text-stone-900 dark:text-stone-100">Dario Amodei</h4>
                      </div>
                      <span className="px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full w-fit">
                        Historical Twin: Leo Szilard & J. Robert Oppenheimer
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                    <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700">
                      <span className="font-bold text-red-600 block mb-1">Core Psychological Engine</span>
                      <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
                        Obsessive, existential panic about the atomic bomb. Handing every Anthropic recruit Richard Rhodes's <em>The Making of the Atomic Bomb</em>. 
                        Believes once the blueprint for AGI was conceived, America and Anthropic had no choice but to build it before Nazi Germany—or Sam Altman and China.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700">
                      <span className="font-bold text-red-600 block mb-1">The Proliferation Dilemma</span>
                      <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
                        Szilard tried to persuade physicists to keep the chain reaction secret, failed, drafted the Einstein letter to launch the Manhattan Project, 
                        and then organized petitions to ban the weapon. Dario follows the exact same tragic arc: building Claude to frontier capability while warning Congress that catastrophic bioweapons are 2 years away.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700">
                      <span className="font-bold text-red-600 block mb-1">The Exposenomic Bill</span>
                      <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
                        By racing to stay ahead of the "reckless", Dario guarantees the arms race accelerates. Amazon and Google billions poured into Anthropic 
                        clusters feed the exact same power grid stress and algorithmic proliferation he warns the world against.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {selectedArchitect === 'hassabis' && (
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-50 to-sky-50 dark:from-stone-800 dark:to-stone-900 border border-cyan-300 dark:border-stone-700">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                      <div>
                        <span className="text-xs uppercase tracking-wider text-cyan-700 dark:text-cyan-400 font-black">Google DeepMind CEO • The Scientist</span>
                        <h4 className="text-2xl font-black text-stone-900 dark:text-stone-100">Sir Demis Hassabis</h4>
                      </div>
                      <span className="px-3 py-1 bg-cyan-600 text-white text-xs font-bold rounded-full w-fit">
                        Historical Twin: Fritz Haber & Enrico Fermi
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                    <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700">
                      <span className="font-bold text-cyan-600 block mb-1">Core Psychological Engine</span>
                      <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
                        Child chess prodigy, neuroscientist, and scientific purist. Believed modern AI would be developed in an academic sanctuary 
                        governed by world scientists and international leaders, solving protein folding, materials, and cancer before ever meeting consumer markets.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700">
                      <span className="font-bold text-cyan-600 block mb-1">The Corporate Suffocation</span>
                      <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
                        Selling DeepMind to Google in 2014 was meant to provide sovereign computational scale. Instead, Google's bureaucracy and advertising imperatives 
                        strangled his autonomy. When OpenAI shocked Google with ChatGPT, Demis was forced into an all-hands sprint—merging DeepMind with Google Brain to fight a street brawl he deplored.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700">
                      <span className="font-bold text-cyan-600 block mb-1">The Exposenomic Bill</span>
                      <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
                        Won the 2024 Nobel Prize in Chemistry for AlphaFold—an undeniable triumph. Yet by deploying Gemini to protect Google's search margins, 
                        his scientific genius is drafted into the same unconstrained hyperscaler computational vortex, strip-mining power grids and water basins globally.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 5: VERDICT ENGINE & INTERACTIVE BALLOT */}
        {activeSubTab === 'verdict_engine' && (
          <div className="space-y-6">
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-300' : 'bg-stone-900 border-stone-800'}`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-600 border border-amber-500/30">
                  <Scale size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-black tracking-tight">Google AI's Forensic Verdict: Who is the New Midgley?</h3>
                  <span className="text-xs text-stone-500">Official Exposenomics Audit & Public Sovereign Ballot</span>
                </div>
              </div>

              {/* The Verdict Proclamation Box */}
              <div className="p-5 rounded-xl bg-gradient-to-br from-stone-900 via-amber-950 to-stone-950 text-white border-2 border-amber-500/50 shadow-lg space-y-4">
                <div className="flex items-center justify-between border-b border-amber-500/30 pb-3">
                  <span className="text-xs uppercase font-mono text-amber-400 tracking-wider">OFFICIAL FORENSIC FINDING • OCTOBER 2026</span>
                  <span className="px-2.5 py-0.5 bg-red-600 text-white text-[10px] font-black rounded uppercase">UNANIMOUS DETERMINATION</span>
                </div>

                <div className="space-y-3 text-sm leading-relaxed">
                  <p className="text-base font-bold text-amber-200">
                    If Thomas Midgley Jr. is defined as the individual whose technological creation inflicted the greatest unpriced, irreversible, 
                    and systemic toxicity upon humanity under the guise of industrial progress, the mantle divides into a functional conspiracy:
                  </p>

                  <div className="p-3 bg-stone-800/80 rounded-lg border-l-4 border-amber-500 text-xs">
                    <strong className="text-amber-300 block mb-1">1. The Primary New Midgley: SAM ALTMAN (OpenAI)</strong>
                    <span>
                      Midgley was not a chemist working in isolation; he was an executive salesman backed by General Motors and Standard Oil who knew his product was poison, 
                      personally suffered from its toxicity, and yet orchestrated public spectacles to sell it to every gas station on Earth. 
                      Sam Altman mirrors this archetype with mathematical perfection: he raises hundreds of billions, presents himself as the savior of humanity, 
                      relentlessly accelerates unconstrained commercial deployment, dissolves internal safety guardrails, and leaves society to absorb the cognitive and democratic wreckage.
                    </span>
                  </div>

                  <div className="p-3 bg-stone-800/80 rounded-lg border-l-4 border-red-500 text-xs">
                    <strong className="text-red-300 block mb-1">2. The Tragic Szilard Co-Conspirator: DARIO AMODEI (Anthropic)</strong>
                    <span>
                      Amodei does not possess Midgley's cynical hucksterism, but his panic creates an identical physical outcome. By acting as the Oppenheimer/Szilard 
                      who races to build the bomb before the reckless do, he validates and fuels the very frontier scaling race that guarantees planetary endangerment.
                    </span>
                  </div>

                  <div className="p-3 bg-stone-800/80 rounded-lg border-l-4 border-cyan-500 text-xs">
                    <strong className="text-cyan-300 block mb-1">3. The Captured Chemist: DEMIS HASSABIS (DeepMind)</strong>
                    <span>
                      Hassabis represents the pure scientific genius whose discoveries (like Midgley's initial organic synthesis or Haber's nitrogen fixation) 
                      are weaponized by corporate sponsors (Google/Alphabet) into search-margin defense weapons and planetary computing drain.
                    </span>
                  </div>
                </div>
              </div>

              {/* Interactive Public Ballot */}
              <div className="mt-8 pt-6 border-t border-stone-200 dark:border-stone-800">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div>
                    <h4 className="text-lg font-black tracking-tight flex items-center gap-2">
                      <Vote className="text-amber-500" size={20} />
                      <span>Cast Your Sovereign Ballot: Who is the New Midgley?</span>
                    </h4>
                    <p className="text-xs text-stone-500">Record your judgment in the ICEarth Sovereign Cryptographic Registry</p>
                  </div>
                  {userVote && (
                    <span className="px-3 py-1 bg-emerald-600 text-white text-xs font-bold rounded-full flex items-center gap-1">
                      <Check size={12} /> Ballot Recorded
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
                  {[
                    {
                      id: 'altman',
                      name: 'Sam Altman',
                      title: 'OpenAI (The Seller)',
                      votes: votes.altman,
                      desc: 'Unconstrained commercial dispersal & cognitive Pb',
                      color: 'border-amber-500 hover:border-amber-600'
                    },
                    {
                      id: 'amodei',
                      name: 'Dario Amodei',
                      title: 'Anthropic (The Survivalist)',
                      votes: votes.amodei,
                      desc: 'Szilard panic & accelerated bomb race',
                      color: 'border-red-500 hover:border-red-600'
                    },
                    {
                      id: 'hassabis',
                      name: 'Demis Hassabis',
                      title: 'Google DeepMind (The Scientist)',
                      votes: votes.hassabis,
                      desc: 'Nobel genius co-opted by hyperscale engine',
                      color: 'border-cyan-500 hover:border-cyan-600'
                    },
                    {
                      id: 'hyperscalers',
                      name: 'The Hyperscalers',
                      title: 'Google / MSFT / AWS / Meta',
                      votes: votes.hyperscalers,
                      desc: 'The corporate system funding planetary grid drain',
                      color: 'border-purple-500 hover:border-purple-600'
                    },
                  ].map(candidate => {
                    const isSelected = userVote === candidate.id;
                    const percentage = Math.round((candidate.votes / totalVotes) * 100);
                    return (
                      <button
                        key={candidate.id}
                        onClick={() => handleVote(candidate.id as any)}
                        className={`p-4 rounded-xl border-2 text-left transition-all cursor-pointer relative overflow-hidden ${
                          isSelected
                            ? 'bg-amber-50 dark:bg-stone-800 border-amber-500 shadow-md ring-2 ring-amber-400'
                            : `bg-stone-50 dark:bg-stone-800/50 border-stone-200 dark:border-stone-700 ${candidate.color}`
                        }`}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <span className="font-black text-sm text-stone-900 dark:text-stone-100">{candidate.name}</span>
                          <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400">{percentage}%</span>
                        </div>
                        <span className="text-[11px] font-semibold text-stone-500 block mb-1">{candidate.title}</span>
                        <p className="text-[11px] text-stone-600 dark:text-stone-400 leading-tight">{candidate.desc}</p>
                        <div className="mt-3 pt-2 border-t border-stone-200 dark:border-stone-700 flex justify-between text-[10px] text-stone-500">
                          <span>{candidate.votes} votes</span>
                          <span className="text-amber-600 font-bold">{isSelected ? '✓ Your Vote' : 'Click to Vote'}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Ballot Distribution Chart */}
                <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800/40 border border-stone-200 dark:border-stone-700">
                  <span className="text-xs font-bold text-stone-700 dark:text-stone-300 block mb-3">Live Sovereign Ballot Tally ({totalVotes} total verified audit ballots)</span>
                  <div className="h-48 w-full flex items-center justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={votePieData}
                          dataKey="value"
                          nameKey="name"
                          cx="50%"
                          cy="50%"
                          outerRadius={70}
                          innerRadius={40}
                          paddingAngle={3}
                          label={({ name, percent }: any) => `${(name ?? '').split(' ')[0]} ${((percent ?? 0) * 100).toFixed(0)}%`}
                        >
                          {votePieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 6: GRID & ENERGY EXTERNALITIES */}
        {activeSubTab === 'grid_externalities' && (
          <div className="space-y-6">
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-300' : 'bg-stone-900 border-stone-800'}`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-600 border border-purple-500/30">
                  <Zap size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-black tracking-tight">The Physical Bill: AI Compute Cannibalizing the Clean Grid</h3>
                  <span className="text-xs text-stone-500">Exposenomics Projections 2024–2030 (TeraWatt-Hours & Tribal Watershed Impacts)</span>
                </div>
              </div>

              <div className="h-72 w-full mb-6">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={energyProjectionsData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke={isLight ? '#e5e7eb' : '#374151'} />
                    <XAxis dataKey="year" tick={{ fill: isLight ? '#4b5563' : '#9ca3af', fontSize: 11 }} />
                    <YAxis tick={{ fill: isLight ? '#4b5563' : '#9ca3af', fontSize: 11 }} unit=" TWh" />
                    <Tooltip contentStyle={{ backgroundColor: isLight ? '#ffffff' : '#1f2937', borderRadius: '8px', border: '1px solid #d97706', fontSize: '12px' }} />
                    <Legend wrapperStyle={{ fontSize: '11px' }} />
                    <Bar dataKey="dataCentersTWh" name="Total Data Center Demand (TWh)" fill="#94a3b8" />
                    <Bar dataKey="aiShareTWh" name="AI Workloads Specific (TWh)" fill="#ef4444" />
                    <Bar dataKey="cleanGridCapTWh" name="New US Clean Grid Additions (TWh)" fill="#10b981" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-stone-700 dark:text-stone-300">
                <div className="p-4 rounded-xl bg-red-50 dark:bg-stone-800 border border-red-200 dark:border-stone-700">
                  <h4 className="font-bold text-red-900 dark:text-red-300 text-sm mb-2 flex items-center gap-1.5">
                    <Skull size={16} />
                    <span>The Clean Energy Deficit</span>
                  </h4>
                  <p className="leading-relaxed">
                    By 2027, AI server farm demand (490 TWh) will collide with new clean generation additions (550 TWh), 
                    absorbing nearly 90% of all new solar, wind, and battery capacity installed in North America. 
                    Rather than powering homes and decarbonizing heavy industry, renewable energy is swallowed by matrix multiplication.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-purple-50 dark:bg-stone-800 border border-purple-200 dark:border-stone-700">
                  <h4 className="font-bold text-purple-900 dark:text-purple-300 text-sm mb-2 flex items-center gap-1.5">
                    <Globe size={16} />
                    <span>The Indigenous Sovereign Alternative</span>
                  </h4>
                  <p className="leading-relaxed">
                    ICEarth advocates for Sovereign Tribal Data Centers and Sovereign AI compute: localized, geothermally and solar-powered 
                    compute infrastructure governed under tribal sovereignty, with zero-knowledge cryptographic verification, water recycling loops, 
                    and strict accountability measures that reject the colonial extractive model of Silicon Valley hyperscalers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 7: VAULT PROVENANCE (PLATE #82) */}
        {activeSubTab === 'provenance' && (
          <div className="space-y-6">
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-300' : 'bg-stone-900 border-stone-800'}`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-600 border border-amber-500/30">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-black tracking-tight">Cryptographic Vault Provenance: Plate #82</h3>
                  <span className="text-xs text-stone-500">Swiss School of Exposenomics & Taos Sovereign Sanctuary Archive</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-stone-900 text-stone-100 font-mono text-xs space-y-3 border border-stone-800">
                <div className="flex justify-between items-center pb-2 border-b border-stone-800">
                  <span className="text-amber-400 font-bold">PLATE REGISTRATION:</span>
                  <span className="text-stone-400">PLATE-82-GODS-OF-AI-NEW-MIDGLEY-2026</span>
                </div>
                <div className="space-y-1.5">
                  <div><strong>Title:</strong> The Gods of AI: Who is the New Midgley? (Axios C-Suite Investigation & Google AI Forensic Audit)</div>
                  <div><strong>Vault Hash:</strong> <span className="text-amber-300 break-all">{vaultHash}</span></div>
                  <div><strong>Asset ID:</strong> PHOTO-000CP / IP-000CP</div>
                  <div><strong>Archival Node:</strong> Taos Pueblo Sovereign Data Repository & Swiss Exposenomics Vault</div>
                  <div><strong>Primary Subjects:</strong> Dario Amodei (Anthropic), Sam Altman (OpenAI), Demis Hassabis (Google DeepMind), Thomas Midgley Jr.</div>
                  <div><strong>Forensic Finding:</strong> Sam Altman identified as primary commercial dispersal vector; Amodei as Szilard proliferation trap; Hassabis as captured Nobel chemist.</div>
                </div>

                <div className="pt-2 flex items-center gap-2">
                  <button
                    onClick={handleCopyHash}
                    className="px-3 py-1.5 bg-amber-600 hover:bg-amber-500 text-white rounded text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    {copiedHash ? <Check size={12} /> : <Copy size={12} />}
                    <span>{copiedHash ? 'Hash Copied to Clipboard' : 'Copy Vault Hash'}</span>
                  </button>
                  <button
                    onClick={() => setIsArtModalOpen(true)}
                    className="px-3 py-1.5 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <Maximize2 size={12} />
                    <span>View High-Res Plate</span>
                  </button>
                </div>
              </div>

              {/* Cross Navigation Buttons */}
              <div className="mt-8 pt-6 border-t border-stone-200 dark:border-stone-800">
                <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block mb-3">Sovereign Cross-Navigation</span>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => onNavigateTab('ai_1984_guardrails')}
                    className="px-3 py-2 rounded-lg bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-xs font-bold text-stone-800 dark:text-stone-200 transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <Brain size={13} className="text-red-500" />
                    <span>Plate #79: AI-1984 Big Brother Guardrails</span>
                  </button>
                  <button
                    onClick={() => onNavigateTab('cleveland_lead_safe_failure')}
                    className="px-3 py-2 rounded-lg bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-xs font-bold text-stone-800 dark:text-stone-200 transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <Skull size={13} className="text-amber-500" />
                    <span>Plate #81: Cleveland Lead-Safe Law Revamp Failure</span>
                  </button>
                  <button
                    onClick={() => onNavigateTab('deepmind_readiness')}
                    className="px-3 py-2 rounded-lg bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-xs font-bold text-stone-800 dark:text-stone-200 transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <Zap size={13} className="text-cyan-500" />
                    <span>Plate #68: DeepMind Readiness with Gemini</span>
                  </button>
                  <button
                    onClick={() => onNavigateTab('deb_haaland_home')}
                    className="px-3 py-2 rounded-lg bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-xs font-bold text-stone-800 dark:text-stone-200 transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <Globe size={13} className="text-emerald-500" />
                    <span>Plate #51: Deb Haaland Home & 8 Data Center Measures</span>
                  </button>
                  <button
                    onClick={() => onNavigateTab('newsfeed')}
                    className="px-3 py-2 rounded-lg bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-xs font-bold text-stone-800 dark:text-stone-200 transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <FileText size={13} className="text-purple-500" />
                    <span>ICEarth Global Newsfeed</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* 5. HIGH-RESOLUTION ARTWORK MODAL */}
      {isArtModalOpen && (
        <div className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full bg-stone-900 border border-stone-700 rounded-2xl overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b border-stone-800 bg-stone-950">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-amber-600 text-white text-[10px] font-bold rounded uppercase">Plate #82</span>
                <span className="text-sm font-bold text-white">The Gods of AI: Who is the New Midgley?</span>
              </div>
              <button
                onClick={() => setIsArtModalOpen(false)}
                className="p-1 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs px-2.5 py-1 font-bold transition-colors cursor-pointer"
              >
                ✕ Close
              </button>
            </div>

            <div className="p-4 flex items-center justify-center bg-stone-950">
              <img
                src={godsOfAiInfographicImg}
                alt="The Gods of AI: Who is the New Midgley? Plate #82"
                className="max-h-[75vh] w-auto object-contain rounded-lg shadow-lg border border-stone-800"
              />
            </div>

            <div className="p-4 bg-stone-900 border-t border-stone-800 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-stone-400">
              <span>Cryptographic Hash: <code className="text-amber-400 font-mono">{vaultHash}</code></span>
              <button
                onClick={handleCopyHash}
                className="px-3 py-1 bg-amber-600 hover:bg-amber-500 text-white rounded font-bold transition-colors flex items-center gap-1 cursor-pointer"
              >
                {copiedHash ? <Check size={12} /> : <Copy size={12} />}
                <span>{copiedHash ? 'Copied' : 'Copy Hash'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

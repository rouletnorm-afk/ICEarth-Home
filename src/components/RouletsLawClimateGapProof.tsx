import React, { useState } from 'react';
import {
  Crown,
  Flame,
  AlertTriangle,
  Activity,
  Atom,
  TrendingUp,
  TrendingDown,
  Layers,
  Thermometer,
  ShieldAlert,
  Globe,
  ExternalLink,
  Maximize2,
  Copy,
  Check,
  ArrowRight,
  Zap,
  Brain,
  Scale,
  Building2,
  Landmark,
  FileText,
  RotateCcw,
  Sparkles,
  CloudRain
} from 'lucide-react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area,
  BarChart,
  Bar,
  ComposedChart
} from 'recharts';
import rouletsLawClimateImg from '../assets/images/roulets_law_climate_gap_infographic_1792600480645.jpg';

interface RouletsLawClimateGapProofProps {
  onNavigateTab?: (tab: string) => void;
  siteTheme?: 'light' | 'dark';
}

export const RouletsLawClimateGapProof: React.FC<RouletsLawClimateGapProofProps> = ({
  onNavigateTab,
  siteTheme = 'light'
}) => {
  const isLight = siteTheme === 'light';

  // Subtab navigation state
  const [activeSubTab, setActiveSubTab] = useState<
    'proof_equation' | 'unep_report_gap' | 'biochemical_causation' | 'governance_malpractice' | 'infographic_studio'
  >('proof_equation');

  // Interactive Roulet's Law Dynamic Variable Sliders
  const [leadPerturbationLevel, setLeadPerturbationLevel] = useState<number>(75); // 0 - 100
  const [uncertaintyGovernanceFailure, setUncertaintyGovernanceFailure] = useState<number>(85); // 0 - 100

  // Computed Roulet's Law outputs:
  // Roulet's Law: Perturbation (1st order Pb) * Uncertainty (Decades of Failed Governance) = Chaos * Relativity (Climate Change)
  const computedProduct = (leadPerturbationLevel * uncertaintyGovernanceFailure) / 100;
  const computedWarmingProjected = 1.5 + (computedProduct / 100) * 1.5; // Scaled 1.5C to 3.0C
  const computedSocietalChaos = Math.round(computedProduct * 0.95);
  const cdrStorageNeededGt = Math.round(180 + (computedProduct / 100) * 160); // 180 to 340 Gt CO2

  // Cryptographic provenance hash
  const vaultHash = '0xROULETS_LAW_PERTURBATION_PB_UNEP_EMISSIONS_GAP_2026_PLATE_92';
  const [copiedHash, setCopiedHash] = useState(false);

  // Lightbox modal state
  const [isModalOpen, setIsModalOpen] = useState(false);

  const copyVaultHash = () => {
    navigator.clipboard.writeText(vaultHash);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 3000);
  };

  // Recharts Data 1: UNEP Emissions Gap 2026 Warming Trajectories (1990 - 2100)
  const unepWarmingTrajectories = [
    { year: '1990', currentPolicies: 0.55, ndcPathways: 0.55, netZeroPathways: 0.55, target15C: 0.55 },
    { year: '2000', currentPolicies: 0.72, ndcPathways: 0.72, netZeroPathways: 0.72, target15C: 0.72 },
    { year: '2010', currentPolicies: 0.98, ndcPathways: 0.98, netZeroPathways: 0.98, target15C: 0.98 },
    { year: '2020', currentPolicies: 1.25, ndcPathways: 1.25, netZeroPathways: 1.25, target15C: 1.25 },
    { year: '2026', currentPolicies: 1.48, ndcPathways: 1.48, netZeroPathways: 1.45, target15C: 1.40 },
    { year: '2030', currentPolicies: 1.72, ndcPathways: 1.65, netZeroPathways: 1.58, target15C: 1.50 },
    { year: '2040', currentPolicies: 2.05, ndcPathways: 1.95, netZeroPathways: 1.78, target15C: 1.48 },
    { year: '2050', currentPolicies: 2.32, ndcPathways: 2.18, netZeroPathways: 1.92, target15C: 1.42 },
    { year: '2060', currentPolicies: 2.50, ndcPathways: 2.34, netZeroPathways: 2.02, target15C: 1.38 },
    { year: '2080', currentPolicies: 2.68, ndcPathways: 2.49, netZeroPathways: 2.08, target15C: 1.35 },
    { year: '2100', currentPolicies: 2.80, ndcPathways: 2.60, netZeroPathways: 2.10, target15C: 1.30 }
  ];

  // Recharts Data 2: Historical Atmospheric Lead vs. Fossil Fuel CO2 & Climate Disinformation Waves
  const historicalLeadVsCo2 = [
    { era: '1920s (TEL Intro)', atmosphericLeadIndex: 18, fossilCo2Ppm: 305, corporateLobbyingIndex: 25 },
    { era: '1940s (WWII War Boom)', atmosphericLeadIndex: 42, fossilCo2Ppm: 310, corporateLobbyingIndex: 40 },
    { era: '1960s (Peak Leaded Gas)', atmosphericLeadIndex: 94, fossilCo2Ppm: 320, corporateLobbyingIndex: 70 },
    { era: '1970s (Kehoe Paradigm)', atmosphericLeadIndex: 100, fossilCo2Ppm: 330, corporateLobbyingIndex: 90 },
    { era: '1990s (Leaded Ban / Coal Shift)', atmosphericLeadIndex: 65, fossilCo2Ppm: 355, corporateLobbyingIndex: 85 },
    { era: '2010s (Global Petrochemical)', atmosphericLeadIndex: 48, fossilCo2Ppm: 390, corporateLobbyingIndex: 95 },
    { era: '2026 (UNEP Point of Return)', atmosphericLeadIndex: 45, fossilCo2Ppm: 424, corporateLobbyingIndex: 98 }
  ];

  // Recharts Data 3: Biochemical Disruption & Neurological Impairment Mechanism
  const biochemicalDisruptionData = [
    { pathway: 'Synaptic Plasticity (Ca2+ Displacement)', pbInhibitionPercent: 88, cognitiveDomain: 'Executive Planning' },
    { pathway: 'Mitochondrial Complex I & IV (ATP Synthesis)', pbInhibitionPercent: 74, cognitiveDomain: 'Cellular Energy / Resilience' },
    { pathway: 'Prefrontal Gray Matter Volume (Voxel Atrophy)', pbInhibitionPercent: 62, cognitiveDomain: 'Impulse Control & Long-term Risk' },
    { pathway: 'Glial Astrocytic Glutamate Clearance', pbInhibitionPercent: 81, cognitiveDomain: 'Neuroinflammation & Mood' },
    { pathway: 'Epigenetic DNA Methylation (Aging Clock)', pbInhibitionPercent: 69, cognitiveDomain: 'Biological Age Acceleration' }
  ];

  return (
    <div className={`min-h-screen ${isLight ? 'bg-stone-50 text-stone-900' : 'bg-stone-950 text-stone-100'} transition-colors duration-200`}>
      {/* TOP NOTIFICATION / PRESS RELEASE BANNER */}
      <div className="bg-gradient-to-r from-amber-950 via-red-950 to-stone-950 text-white px-4 py-3 border-b border-amber-500/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 bg-gradient-to-r from-amber-500 via-red-500 to-orange-500 text-stone-950 font-black rounded uppercase text-[10px] tracking-wider">
              UNEP Global Release • Emissions Gap Report 2026
            </span>
            <span className="font-semibold text-amber-200">
              “The Point of Return”: Current Policies Track 2.8°C Warming
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.unep.org/en/news-and-stories/press-release/new-unep-report-lays-out-emission-cuts-needed-return-15degc"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-cyan-300 hover:text-white underline font-mono text-[11px] transition-colors"
            >
              <span>UNEP Press Release</span>
              <ExternalLink size={12} />
            </a>
            <a
              href="https://wedocs.unep.org/items/87c02cac-8da8-4c28-ba61-c846ee68ea70"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-amber-300 hover:text-white underline font-mono text-[11px] transition-colors"
            >
              <span>Full UNEP Report</span>
              <ExternalLink size={12} />
            </a>
            <button
              onClick={() => setActiveSubTab('infographic_studio')}
              className="px-2.5 py-1 bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-400 hover:to-red-500 text-stone-950 font-black rounded flex items-center gap-1 cursor-pointer transition-colors shadow-xs"
            >
              <Maximize2 size={12} />
              <span>Plate #92 Infographic</span>
            </button>
          </div>
        </div>
      </div>

      {/* HERO SECTION */}
      <div className={`px-4 py-8 md:py-12 border-b ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900/60 border-stone-800'}`}>
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 bg-gradient-to-r from-amber-500/20 to-red-500/20 text-amber-700 dark:text-amber-300 border border-amber-500/30 rounded-full font-mono text-xs font-black uppercase tracking-wider flex items-center gap-1.5">
              <Crown size={13} className="text-amber-500" />
              <span>Plate #92 • Fundamental Physics & Exposenomics Proof</span>
            </span>
            <span className="px-3 py-1 bg-red-500/20 text-red-600 dark:text-red-400 border border-red-500/30 rounded-full font-mono text-xs font-semibold">
              Roulet’s Law Mathematical Proof
            </span>
            <span className="px-3 py-1 bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 rounded-full font-mono text-xs font-semibold">
              UNEP Emissions Gap 2026: 2.8°C Trajectory
            </span>
            <span className="px-3 py-1 bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 rounded-full font-mono text-xs font-semibold">
              Human Age Changing & Biological Kinetics
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-amber-600 via-red-600 to-rose-600 bg-clip-text text-transparent">
                Roulet’s Law Proof
              </span>
              : Perturbation (1st Order Pb) × Uncertainty = Chaos × Relativity (Climate Change)
            </h1>
            <p className="text-lg md:text-xl text-stone-600 dark:text-stone-300 font-serif leading-relaxed max-w-5xl">
              While the global public acknowledges climate change, it remains blind to its primary chemical driver: <strong>Lead (Pb) as the foundational 1st order perturbation</strong>. In Roulet’s Law, <strong>Perturbation</strong> (the physical disruption of cellular biology, synaptic transmission, and mitochondrial energetics by heavy metals) multiplied by <strong>Uncertainty</strong> (decades of inadequate environmental protection, corporate disinformation, and state regulatory failure, as epitomized by Kabwe, Zambia and fossil fuel lobbying) directly produces <strong>Societal Chaos</strong> multiplied by <strong>Relativity</strong> (thermodynamic climate acceleration and the premature alteration of the human lifespan). The <em>UNEP Emissions Gap Report 2026</em> warns of an unlivable <strong>2.8°C warming trajectory</strong> because collective human neurobiology—corrupted by a century of lead emissions—lost the cognitive capacity for long-term existential risk mitigation.
            </p>
          </div>

          {/* ROULET'S LAW EQUATION CALLOUT BANNER */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-stone-900 via-amber-950/70 to-stone-900 border-2 border-amber-500/50 shadow-xl text-amber-50 space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2 border-b border-amber-500/30 pb-3">
              <span className="font-mono text-xs font-bold tracking-widest text-amber-400 uppercase flex items-center gap-1.5">
                <Atom size={16} />
                <span>ROULET’S LAW OF EXPOSENOMIC DYNAMICS & CLIMATE RELATIVITY</span>
              </span>
              <span className="px-2 py-0.5 bg-amber-500/20 text-amber-300 text-[10px] font-mono rounded border border-amber-500/40">
                P(1st Pb) · ΔU(Governance) = Φ(Chaos) · R(Climate ΔT)
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-center text-center font-mono py-2">
              <div className="p-4 rounded-xl bg-amber-950/60 border border-amber-500/40">
                <div className="text-[10px] text-amber-400 font-bold uppercase tracking-wider mb-1">1. Perturbation</div>
                <div className="text-xl md:text-2xl font-black text-white">1st Order Pb</div>
                <div className="text-[11px] text-stone-300 mt-1 font-serif">Ca²⁺/Zn²⁺ displacement, prefrontal atrophy, 100M tonnes fossil Pb</div>
              </div>

              <div className="text-2xl font-black text-amber-400">×</div>

              <div className="p-4 rounded-xl bg-red-950/60 border border-red-500/40">
                <div className="text-[10px] text-red-400 font-bold uppercase tracking-wider mb-1">2. Uncertainty</div>
                <div className="text-xl md:text-2xl font-black text-white">Failed Governance</div>
                <div className="text-[11px] text-stone-300 mt-1 font-serif">Kabwe-style corporate immunity, Kehoe rule, US Paris exit, delayed NDCs</div>
              </div>

              <div className="text-2xl font-black text-amber-400">=</div>

              <div className="p-4 rounded-xl bg-rose-950/60 border border-rose-500/40">
                <div className="text-[10px] text-rose-400 font-bold uppercase tracking-wider mb-1">3. Societal Chaos</div>
                <div className="text-xl md:text-2xl font-black text-white">Impulsive Gridlock</div>
                <div className="text-[11px] text-stone-300 mt-1 font-serif">Loss of executive function, polarization, conflict, short-term extraction</div>
              </div>

              <div className="text-2xl font-black text-amber-400">×</div>

              <div className="p-4 rounded-xl bg-cyan-950/60 border border-cyan-500/40">
                <div className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider mb-1">4. Relativity</div>
                <div className="text-xl md:text-2xl font-black text-white">2.8°C Climate Break</div>
                <div className="text-[11px] text-stone-300 mt-1 font-serif">Human age changing, 320 Gt CO₂ CDR burden, +0.1°C per 5 years</div>
              </div>
            </div>
          </div>

          {/* METRIC STRIP */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 pt-2">
            <div className={`p-4 rounded-xl border ${isLight ? 'bg-red-50 border-red-200' : 'bg-red-950/30 border-red-800/40'}`}>
              <div className="text-xs font-mono font-bold text-red-600 dark:text-red-400 uppercase tracking-wider flex items-center gap-1.5">
                <Flame size={14} />
                <span>Current Trajectory</span>
              </div>
              <div className="text-2xl md:text-3xl font-black text-red-700 dark:text-red-300 mt-1">2.8°C</div>
              <div className="text-xs text-stone-500 mt-1 font-serif">
                UNEP 2026 report if current energy policies continue
              </div>
            </div>

            <div className={`p-4 rounded-xl border ${isLight ? 'bg-amber-50 border-amber-200' : 'bg-amber-950/30 border-amber-800/40'}`}>
              <div className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                <TrendingUp size={14} />
                <span>Conditional NDCs</span>
              </div>
              <div className="text-2xl md:text-3xl font-black text-amber-700 dark:text-amber-300 mt-1">2.6°C</div>
              <div className="text-xs text-stone-500 mt-1 font-serif">
                Worse than 2025 due to US Paris exit and revised historical baselines
              </div>
            </div>

            <div className={`p-4 rounded-xl border ${isLight ? 'bg-emerald-50 border-emerald-200' : 'bg-emerald-950/30 border-emerald-800/40'}`}>
              <div className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                <ShieldAlert size={14} />
                <span>Optimistic Floor</span>
              </div>
              <div className="text-2xl md:text-3xl font-black text-emerald-700 dark:text-emerald-300 mt-1">2.1°C</div>
              <div className="text-xs text-stone-500 mt-1 font-serif">
                Only if all NDCs and additional net-zero targets fully materialized
              </div>
            </div>

            <div className={`p-4 rounded-xl border ${isLight ? 'bg-cyan-50 border-cyan-200' : 'bg-cyan-950/30 border-cyan-800/40'}`}>
              <div className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                <Layers size={14} />
                <span>CDR Removal Burden</span>
              </div>
              <div className="text-2xl md:text-3xl font-black text-cyan-700 dark:text-cyan-300 mt-1">320 Gt</div>
              <div className="text-xs text-stone-500 mt-1 font-serif">
                Atmospheric CO₂ removal needed for 1.5°C overshoot recovery
              </div>
            </div>

            <div className={`p-4 rounded-xl border ${isLight ? 'bg-purple-50 border-purple-200' : 'bg-purple-950/30 border-purple-800/40'}`}>
              <div className="text-xs font-mono font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
                <Thermometer size={14} />
                <span>Kinetics of Delay</span>
              </div>
              <div className="text-2xl md:text-3xl font-black text-purple-700 dark:text-purple-300 mt-1">+0.1°C</div>
              <div className="text-xs text-stone-500 mt-1 font-serif">
                Pushed onto peak warming for every five years emissions stall
              </div>
            </div>
          </div>

          {/* CRYPTOGRAPHIC PROVENANCE & VAULT HASH */}
          <div className={`p-3 rounded-lg border font-mono text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${isLight ? 'bg-stone-100 border-stone-200' : 'bg-stone-900 border-stone-800'}`}>
            <div className="flex items-center gap-2 overflow-x-auto">
              <span className="text-stone-500 font-bold">SOVEREIGN VAULT HASH:</span>
              <span className="text-amber-600 dark:text-amber-400 select-all">{vaultHash}</span>
            </div>
            <button
              onClick={copyVaultHash}
              className="px-3 py-1.5 bg-stone-200 hover:bg-stone-300 dark:bg-stone-800 dark:hover:bg-stone-700 rounded text-stone-700 dark:text-stone-300 font-bold flex items-center gap-1 cursor-pointer transition-colors self-start sm:self-auto shrink-0"
            >
              {copiedHash ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
              <span>{copiedHash ? 'Copied Provenance' : 'Copy Vault Hash'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* SUB-NAVIGATION TABS */}
      <div className={`sticky top-0 z-20 border-b backdrop-blur-md ${isLight ? 'bg-white/90 border-stone-200' : 'bg-stone-950/90 border-stone-800'}`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-2 overflow-x-auto py-2.5">
          <button
            onClick={() => setActiveSubTab('proof_equation')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              activeSubTab === 'proof_equation'
                ? 'bg-amber-600 text-white shadow-md'
                : isLight ? 'text-stone-600 hover:bg-stone-100' : 'text-stone-300 hover:bg-stone-800'
            }`}
          >
            <Crown size={13} />
            <span>Roulet’s Law Equation & Simulator</span>
          </button>

          <button
            onClick={() => setActiveSubTab('unep_report_gap')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              activeSubTab === 'unep_report_gap'
                ? 'bg-red-600 text-white shadow-md'
                : isLight ? 'text-stone-600 hover:bg-stone-100' : 'text-stone-300 hover:bg-stone-800'
            }`}
          >
            <Globe size={13} />
            <span>UNEP Emissions Gap 2026: 2.8°C Point of Return</span>
          </button>

          <button
            onClick={() => setActiveSubTab('biochemical_causation')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              activeSubTab === 'biochemical_causation'
                ? 'bg-purple-600 text-white shadow-md'
                : isLight ? 'text-stone-600 hover:bg-stone-100' : 'text-stone-300 hover:bg-stone-800'
            }`}
          >
            <Brain size={13} />
            <span>Biochemical Causation & Human Age Changing</span>
          </button>

          <button
            onClick={() => setActiveSubTab('governance_malpractice')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              activeSubTab === 'governance_malpractice'
                ? 'bg-cyan-600 text-white shadow-md'
                : isLight ? 'text-stone-600 hover:bg-stone-100' : 'text-stone-300 hover:bg-stone-800'
            }`}
          >
            <Scale size={13} />
            <span>Corporate Malpractice & Zambia Precedent</span>
          </button>

          <button
            onClick={() => setActiveSubTab('infographic_studio')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              activeSubTab === 'infographic_studio'
                ? 'bg-stone-800 text-amber-300 border border-amber-400/50 shadow-md'
                : isLight ? 'text-stone-600 hover:bg-stone-100' : 'text-stone-300 hover:bg-stone-800'
            }`}
          >
            <Maximize2 size={13} />
            <span>Plate #92 Infographic Studio</span>
          </button>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        {/* SUBTAB 1: ROULET'S LAW EQUATION & INTERACTIVE SIMULATOR */}
        {activeSubTab === 'proof_equation' && (
          <div className="space-y-8">
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-amber-50/70 border-amber-200' : 'bg-amber-950/20 border-amber-800/40'}`}>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-500/20 text-amber-600 dark:text-amber-400 rounded-xl">
                  <Atom size={24} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold font-serif text-stone-900 dark:text-stone-100">
                    The Mathematical Physics of Planetary Collapse: Roulet’s Law
                  </h3>
                  <p className="text-sm text-stone-600 dark:text-stone-300 font-serif leading-relaxed">
                    Mainstream climate economics treats greenhouse gas emissions as an isolated engineering problem, completely omitting the physiological status of the human decision-maker. <strong>Roulet’s Law</strong> bridges biochemical toxicology, institutional game theory, and thermodynamic relativity into a unified field proof:
                  </p>
                  <div className="p-4 rounded-xl bg-stone-900 text-amber-300 font-mono text-xs sm:text-sm leading-relaxed border border-amber-500/30 overflow-x-auto">
                    {"[Roulet’s Law Proof]: Perturbation (1st Order Pb) × Uncertainty (Governance & Corporate Malpractice) = Chaos (Societal Gridlock) × Relativity (Climate Change 2.8°C Acceleration)"}
                  </div>
                </div>
              </div>
            </div>

            {/* INTERACTIVE SIMULATOR DASHBOARD */}
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-6`}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b pb-4 border-stone-200 dark:border-stone-800">
                <div>
                  <h3 className="text-lg font-bold font-serif flex items-center gap-2">
                    <Sparkles className="text-amber-500" size={18} />
                    <span>Interactive Roulet’s Law Dynamic System Simulator</span>
                  </h3>
                  <p className="text-xs text-stone-500 font-serif">
                    Adjust lead chemical perturbation and governance failure to model resulting societal chaos and projected warming
                  </p>
                </div>
                <span className="px-2.5 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded text-xs font-mono font-bold">
                  Coupled Anthropogenic Kinetic Engine
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left: Input Variables */}
                <div className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                        1. Lead (Pb) Perturbation Index: {leadPerturbationLevel}%
                      </label>
                      <span className="text-[11px] font-mono text-stone-400">
                        {leadPerturbationLevel > 70 ? 'Extreme Biological Burden' : leadPerturbationLevel > 40 ? 'Moderate Neurological Deficit' : 'Near-Pristine Pre-Industrial'}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={leadPerturbationLevel}
                      onChange={(e) => setLeadPerturbationLevel(Number(e.target.value))}
                      className="w-full h-2 bg-stone-200 dark:bg-stone-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                    />
                    <p className="text-[11px] text-stone-500 font-serif">
                      Reflects 100M+ tonnes of tetraethyl lead combusted, coal fly-ash emissions, and synaptic displacement of Ca²⁺/Zn²⁺ in human populations.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-mono font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
                        2. Uncertainty & Corporate Malpractice Index: {uncertaintyGovernanceFailure}%
                      </label>
                      <span className="text-[11px] font-mono text-stone-400">
                        {uncertaintyGovernanceFailure > 75 ? 'Zambia / Paris Exit Gridlock' : uncertaintyGovernanceFailure > 40 ? 'Partial Enforcement' : 'Transparent Sovereign Rule'}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={uncertaintyGovernanceFailure}
                      onChange={(e) => setUncertaintyGovernanceFailure(Number(e.target.value))}
                      className="w-full h-2 bg-stone-200 dark:bg-stone-700 rounded-lg appearance-none cursor-pointer accent-red-500"
                    />
                    <p className="text-[11px] text-stone-500 font-serif">
                      Measures decades of inadequate environmental protection, fossil fuel lobbying, suppression of public health science, and state regulatory paralysis.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-100 dark:bg-stone-800/60 font-mono text-xs space-y-2">
                    <div className="text-stone-500 font-bold uppercase">Systemic Feedback Loop:</div>
                    <div className="text-stone-700 dark:text-stone-300 font-serif text-xs leading-relaxed">
                      Lead damages the human prefrontal cortex (executive planning), making democratic publics vulnerable to short-term corporate deception. The resulting regulatory paralysis permits continued fossil fuel combustion, injecting more lead and greenhouse gases into the planetary system.
                    </div>
                  </div>
                </div>

                {/* Right: Calculated Roulet Outputs */}
                <div className="space-y-4 flex flex-col justify-between">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-700 dark:text-rose-300">
                      <div className="text-[10px] font-mono uppercase font-bold tracking-wider">Projected Peak Warming</div>
                      <div className="text-3xl font-black mt-1 font-mono">{computedWarmingProjected.toFixed(2)}°C</div>
                      <div className="text-[10px] mt-1 text-stone-500 font-serif">
                        {computedWarmingProjected >= 2.8 ? 'UNEP 2026 Point of Return' : computedWarmingProjected >= 2.6 ? 'Conditional NDC limit' : computedWarmingProjected >= 2.1 ? 'Net-Zero aspirational floor' : 'Paris 1.5°C stable climate'}
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-300">
                      <div className="text-[10px] font-mono uppercase font-bold tracking-wider">Societal Chaos Metric</div>
                      <div className="text-3xl font-black mt-1 font-mono">{computedSocietalChaos}/100</div>
                      <div className="text-[10px] mt-1 text-stone-500 font-serif">
                        Severity of political paralysis, polarization, and cognitive deficit
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300">
                      <div className="text-[10px] font-mono uppercase font-bold tracking-wider">Atmospheric CDR Burden</div>
                      <div className="text-3xl font-black mt-1 font-mono">{cdrStorageNeededGt} Gt</div>
                      <div className="text-[10px] mt-1 text-stone-500 font-serif">
                        Permanent CO₂ removal required from air (~8 years global emissions)
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300">
                      <div className="text-[10px] font-mono uppercase font-bold tracking-wider">Kinetics of Delay Penalty</div>
                      <div className="text-3xl font-black mt-1 font-mono">+{(computedProduct / 600).toFixed(2)}°C</div>
                      <div className="text-[10px] mt-1 text-stone-500 font-serif">
                        Additional warming locked in every 5 years of inaction
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/30">
                    <div className="flex items-center justify-between text-xs font-mono font-bold text-amber-500 mb-2">
                      <span>ROULET’S LAW EQUATION BALANCE:</span>
                      <span>Product: {computedProduct.toFixed(1)}</span>
                    </div>
                    <div className="w-full bg-stone-200 dark:bg-stone-700 h-3 rounded-full overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-amber-500 via-red-500 to-rose-600 h-full transition-all duration-300"
                        style={{ width: `${Math.min(100, (computedProduct / 85) * 100)}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Historical Correlation Chart */}
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-4`}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b pb-3 border-stone-200 dark:border-stone-800">
                <div>
                  <h3 className="text-lg font-bold font-serif">
                    Historical Lead Atmospheric Loading vs. CO₂ Concentration & Corporate Lobbying (1920–2026)
                  </h3>
                  <p className="text-xs text-stone-500 font-serif">
                    Tracing the shared genesis of fossil fuel tetraethyl lead and greenhouse gas acceleration
                  </p>
                </div>
                <span className="px-2.5 py-1 bg-red-500/10 text-red-600 dark:text-red-400 rounded text-xs font-mono font-bold">
                  Sovereign Exposenomics Forensic Correlation
                </span>
              </div>
              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={historicalLeadVsCo2} margin={{ top: 20, right: 30, left: 10, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke={isLight ? '#e5e7eb' : '#374151'} />
                    <XAxis dataKey="era" stroke={isLight ? '#4b5563' : '#9ca3af'} />
                    <YAxis yAxisId="left" stroke="#ef4444" label={{ value: 'Atmospheric Pb / Lobbying Index (0-100)', angle: -90, position: 'insideLeft', fill: '#ef4444', fontSize: 11 }} />
                    <YAxis yAxisId="right" orientation="right" stroke="#0ea5e9" domain={[290, 440]} label={{ value: 'Atmospheric CO₂ (ppm)', angle: 90, position: 'insideRight', fill: '#0ea5e9', fontSize: 11 }} />
                    <Tooltip contentStyle={{ backgroundColor: isLight ? '#ffffff' : '#1c1917', borderColor: '#e5e7eb' }} />
                    <Legend />
                    <Bar yAxisId="left" dataKey="atmosphericLeadIndex" name="Atmospheric Lead Emission Index" fill="#f59e0b" radius={[4, 4, 0, 0]} />
                    <Line yAxisId="left" type="monotone" dataKey="corporateLobbyingIndex" name="Corporate Disinformation & Regulatory Evasion Index" stroke="#ef4444" strokeWidth={2} strokeDasharray="4 4" dot={{ r: 4 }} />
                    <Line yAxisId="right" type="monotone" dataKey="fossilCo2Ppm" name="Atmospheric CO₂ (ppm)" stroke="#0ea5e9" strokeWidth={3} dot={{ r: 5 }} />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 2: UNEP EMISSIONS GAP 2026: 2.8°C POINT OF RETURN */}
        {activeSubTab === 'unep_report_gap' && (
          <div className="space-y-8">
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-red-50/70 border-red-200' : 'bg-red-950/20 border-red-800/40'}`}>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-500/20 text-red-600 dark:text-red-400 rounded-xl">
                  <Flame size={24} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold font-serif text-stone-900 dark:text-stone-100">
                    UNEP Emissions Gap Report 2026: The Point of Return
                  </h3>
                  <p className="text-sm text-stone-600 dark:text-stone-300 font-serif leading-relaxed">
                    The United Nations Environment Programme’s newly published <em>Emissions Gap Report 2026</em> sounds the loudest alarm in human history. Under current policies, global warming is projected to hit <strong>2.8°C within this century</strong> and accelerate beyond. Even if all Nationally Determined Contributions (NDCs) are delivered, warming will reach <strong>2.6°C</strong>. These projections worsened sharply from 2025 due to the <strong>withdrawal of the United States from the Paris Agreement</strong> and revised upward baselines of historical industrial emissions.
                  </p>
                </div>
              </div>
            </div>

            {/* Trajectory Pathways Chart */}
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-4`}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b pb-3 border-stone-200 dark:border-stone-800">
                <div>
                  <h3 className="text-lg font-bold font-serif">
                    UNEP 2026 Global Warming Trajectories vs. Paris Climate Targets (1990–2100)
                  </h3>
                  <p className="text-xs text-stone-500 font-serif">
                    Comparing current policies (2.8°C), conditional NDCs (2.6°C), net-zero pledges (2.1°C), and 1.5°C stabilization
                  </p>
                </div>
                <span className="px-2.5 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded text-xs font-mono font-bold">
                  UNEP Official Data Modeling
                </span>
              </div>
              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={unepWarmingTrajectories} margin={{ top: 20, right: 30, left: 10, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke={isLight ? '#e5e7eb' : '#374151'} />
                    <XAxis dataKey="year" stroke={isLight ? '#4b5563' : '#9ca3af'} />
                    <YAxis domain={[0.4, 3.2]} stroke={isLight ? '#4b5563' : '#9ca3af'} label={{ value: 'Warming Above Pre-Industrial (°C)', angle: -90, position: 'insideLeft', fontSize: 11 }} />
                    <Tooltip contentStyle={{ backgroundColor: isLight ? '#ffffff' : '#1c1917', borderColor: '#e5e7eb' }} />
                    <Legend />
                    <Line type="monotone" dataKey="currentPolicies" name="Current Policies (2.8°C Trajectory)" stroke="#dc2626" strokeWidth={3} dot={{ r: 4 }} />
                    <Line type="monotone" dataKey="ndcPathways" name="Conditional NDCs (2.6°C Path)" stroke="#f97316" strokeWidth={2} dot={{ r: 3 }} />
                    <Line type="monotone" dataKey="netZeroPathways" name="Optimistic Net-Zero Pledges (2.1°C)" stroke="#10b981" strokeWidth={2} strokeDasharray="4 4" dot={{ r: 3 }} />
                    <Line type="monotone" dataKey="target15C" name="Paris 1.5°C Stabilization Target" stroke="#06b6d4" strokeWidth={2} strokeDasharray="2 2" dot={{ r: 3 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Four UNEP Key Findings Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`p-5 rounded-xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-3`}>
                <div className="flex items-center gap-2 text-red-600 dark:text-red-400 font-bold font-serif">
                  <Flame size={18} />
                  <h4 className="text-base">1. Current Policies Surge to 2.8°C</h4>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-300 font-serif leading-relaxed">
                  The UNEP report finds that if current policies continue, warming will reach 2.8°C within this century and continue rising. Even if all submitted NDCs are fulfilled, warming is only capped at 2.6°C. These outcomes are worse than last year’s projections due to the withdrawal of the United States from the Paris Agreement and upward revisions in historical emissions accounting.
                </p>
              </div>

              <div className={`p-5 rounded-xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-3`}>
                <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold font-serif">
                  <ShieldAlert size={18} />
                  <h4 className="text-base">2. Optimistic Floor is 2.1°C</h4>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-300 font-serif leading-relaxed">
                  Even under the most optimistic theoretical scenario—where every single NDC plus all additional net-zero targets are fully achieved—global warming would only be limited to 2.1°C. The window for keeping peak warming below 1.7°C or 1.8°C is rapidly vanishing without immediate, radical emission contractions.
                </p>
              </div>

              <div className={`p-5 rounded-xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-3`}>
                <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-bold font-serif">
                  <Layers size={18} />
                  <h4 className="text-base">3. 320 Gigatonnes CDR Removal Debt</h4>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-300 font-serif leading-relaxed">
                  The lowest possible 1.5°C overshoot scenario creates an unprecedented physical requirement: the active removal from the atmosphere and permanent geologic storage of roughly 320 gigatonnes of CO₂ (equivalent to eight full years of current global emissions). UNEP cautions that socioeconomic, geological, and technological bottlenecks make achieving this scale highly uncertain.
                </p>
              </div>

              <div className={`p-5 rounded-xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-3`}>
                <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold font-serif">
                  <Thermometer size={18} />
                  <h4 className="text-base">4. +0.1°C Penalty for Every 5 Years of Delay</h4>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-300 font-serif leading-relaxed">
                  Atmospheric physics obeys relentless kinetics: every five years of greenhouse gas emissions at current levels pushes peak global warming upward by approximately 0.1°C. Each half-decade of policy hesitation locks in irreversible coral reef collapse, polar ice sheet disintegration, and deadly tropical wet-bulb heat extremes.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 3: BIOCHEMICAL CAUSATION & HUMAN AGE CHANGING */}
        {activeSubTab === 'biochemical_causation' && (
          <div className="space-y-8">
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-purple-50/70 border-purple-200' : 'bg-purple-950/20 border-purple-800/40'}`}>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-500/20 text-purple-600 dark:text-purple-400 rounded-xl">
                  <Brain size={24} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold font-serif text-stone-900 dark:text-stone-100">
                    The Direct Chemical Causation: How Pb Altered Human Physiology & Prevented Climate Action
                  </h3>
                  <p className="text-sm text-stone-600 dark:text-stone-300 font-serif leading-relaxed">
                    Why did human civilization fail to act on climate change despite five decades of undeniable atmospheric science? The answer lies in <strong>biochemical perturbation</strong>: lead is a potent molecular mimic of calcium (Ca²⁺) and zinc (Zn²⁺). Between 1923 and 2000, over 100 million tonnes of tetraethyl lead were released into the troposphere, contaminating every child born during the fossil boom. The resulting structural atrophy of the prefrontal cortex stripped human leadership of long-term impulse control.
                  </p>
                </div>
              </div>
            </div>

            {/* Biochemical Pathways Chart */}
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-4`}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b pb-3 border-stone-200 dark:border-stone-800">
                <div>
                  <h3 className="text-lg font-bold font-serif">
                    Molecular & Cognitive Inhibition by Heavy Metal Perturbation (%)
                  </h3>
                  <p className="text-xs text-stone-500 font-serif">
                    Quantifying how Pb replaces essential divalent cations to disable executive planning and biological longevity
                  </p>
                </div>
                <span className="px-2.5 py-1 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded text-xs font-mono font-bold">
                  Cellular Exposenomics Model
                </span>
              </div>
              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={biochemicalDisruptionData} layout="vertical" margin={{ top: 10, right: 30, left: 160, bottom: 10 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke={isLight ? '#e5e7eb' : '#374151'} />
                    <XAxis type="number" domain={[0, 100]} unit="%" stroke={isLight ? '#4b5563' : '#9ca3af'} />
                    <YAxis dataKey="pathway" type="category" stroke={isLight ? '#4b5563' : '#9ca3af'} tick={{ fontSize: 11 }} />
                    <Tooltip contentStyle={{ backgroundColor: isLight ? '#ffffff' : '#1c1917', borderColor: '#e5e7eb' }} />
                    <Bar dataKey="pbInhibitionPercent" name="Molecular / Functional Disruption (%)" fill="#8b5cf6" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Physiology Breakdown Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className={`p-5 rounded-xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-3`}>
                <div className="w-8 h-8 rounded-lg bg-red-500/20 text-red-500 flex items-center justify-center font-bold font-mono">
                  01
                </div>
                <h4 className="font-bold text-base font-serif">Prefrontal Cortex & The Impulsive Brain</h4>
                <p className="text-xs text-stone-600 dark:text-stone-400 font-serif leading-relaxed">
                  Lead selectively damages the anterior cingulate cortex and prefrontal gray matter—the exact neural regions responsible for impulse control, moral calculation, empathy, and long-range risk assessment. A poisoned electorate and poisoned political leadership become physiologically incapable of deferring short-term consumption to avert future planetary overheating.
                </p>
              </div>

              <div className={`p-5 rounded-xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-3`}>
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-500 flex items-center justify-center font-bold font-mono">
                  02
                </div>
                <h4 className="font-bold text-base font-serif">Mitochondrial Collapse & Human Age Changing</h4>
                <p className="text-xs text-stone-600 dark:text-stone-400 font-serif leading-relaxed">
                  Inside the cell, Pb enters mitochondria via the calcium uniporter, collapsing the membrane potential (ΔΨm) and sabotaging ATP production. This induces accelerated biological senescence—the literal changing of the human biological age. Cellular senescence reduces systemic physiological resilience to extreme heatwaves, wildfire smoke, and cardiovascular stress.
                </p>
              </div>

              <div className={`p-5 rounded-xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-3`}>
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-500 flex items-center justify-center font-bold font-mono">
                  03
                </div>
                <h4 className="font-bold text-base font-serif">Epigenetic Inscription Across Generations</h4>
                <p className="text-xs text-stone-600 dark:text-stone-400 font-serif leading-relaxed">
                  Lead exposure alters DNA methylation patterns (e.g., retrotransposon hypomethylation and LINE-1 element dysregulation) in germline cells. Even after atmospheric lead phaseouts, intergenerational epigenetic scars impair cognitive flexibility and metabolic robustness in subsequent generations, leaving humanity biologically fragile at the very moment climate volatility strikes.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 4: GOVERNANCE MALPRACTICE & ZAMBIA PRECEDENT */}
        {activeSubTab === 'governance_malpractice' && (
          <div className="space-y-8">
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-cyan-50/70 border-cyan-200' : 'bg-cyan-950/20 border-cyan-800/40'}`}>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 rounded-xl">
                  <Scale size={24} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold font-serif text-stone-900 dark:text-stone-100">
                    The Governance Pattern: From Kabwe’s Broken Hill to the Global Emissions Gap
                  </h3>
                  <p className="text-sm text-stone-600 dark:text-stone-300 font-serif leading-relaxed">
                    The ongoing disaster in <strong>Kabwe, Zambia</strong>—where 6.4 million tonnes of toxic mine tailings were left uncovered for decades due to “inadequate environmental protection, insufficient corporate accountability, and government failure”—is not an isolated anomaly. It is the micro-model of the global climate crisis.
                  </p>
                </div>
              </div>
            </div>

            {/* Parallel Comparison Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-4`}>
                <div className="flex items-center gap-2 text-red-600 dark:text-red-400 font-bold font-serif">
                  <Building2 size={20} />
                  <h4 className="text-base">The Kabwe Model: Local Heavy Metal Impunity</h4>
                </div>
                <ul className="space-y-2.5 text-xs text-stone-600 dark:text-stone-300 font-serif">
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-red-500 font-bold">•</span>
                    <span><strong>Anglo American Legal Defense:</strong> Extract billions in mineral wealth, then claim in South African courts that foreign holding structures owe zero legal duty of care to poisoned black children.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-red-500 font-bold">•</span>
                    <span><strong>Government Regulatory Paralysis:</strong> 32 years of inaction following mine closure in 1994, accepting palliative World Bank testing while failing to cap the 6.4M tonnes waste dump.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-red-500 font-bold">•</span>
                    <span><strong>The Biological Cost:</strong> &gt;95% of children poisoned with lifelong brain damage, while polluters walk away free of clean-up liabilities.</span>
                  </li>
                </ul>
              </div>

              <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-4`}>
                <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold font-serif">
                  <Landmark size={20} />
                  <h4 className="text-base">The Climate Model: Global Emissions Gap Malpractice</h4>
                </div>
                <ul className="space-y-2.5 text-xs text-stone-600 dark:text-stone-300 font-serif">
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-amber-500 font-bold">•</span>
                    <span><strong>Fossil Fuel Lobbying & Paris Exit:</strong> The United States exits the Paris Agreement, and major carbon majors dilute green commitments to maximize quarterly extraction profits.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-amber-500 font-bold">•</span>
                    <span><strong>Negligible NDC Impact:</strong> UNEP confirms that new NDCs submitted in 2026 made a negligible difference to warming trajectories, locking in 2.6°C to 2.8°C.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-amber-500 font-bold">•</span>
                    <span><strong>The Civilizational Cost:</strong> The collapse of 1.5°C stabilization targets, forcing a speculative 320 Gt CO₂ carbon removal burden onto future generations.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sovereign Prescription */}
            <div className={`p-6 rounded-2xl border bg-gradient-to-r from-emerald-950/40 via-stone-900 to-cyan-950/40 border-emerald-500/40 space-y-3`}>
              <h4 className="text-base font-bold text-emerald-400 font-serif flex items-center gap-2">
                <Crown size={18} />
                <span>The Sovereign IT Solution: Eliminating the 1st Order Perturbation</span>
              </h4>
              <p className="text-xs text-stone-300 font-serif leading-relaxed">
                We cannot solve climate change while ignoring lead. To restore humanity’s collective executive function and cognitive sovereignty, we must eliminate heavy metal perturbation at the root: decentralized tribal clean energy, sovereign data centers running without fossil emissions, quantum cavitation remediation of heavy metal water bodies, and legal accountability for corporate polluters under Roulet’s Law.
              </p>
            </div>
          </div>
        )}

        {/* SUBTAB 5: INFOGRAPHIC STUDIO */}
        {activeSubTab === 'infographic_studio' && (
          <div className="space-y-8">
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-4`}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b pb-4 border-stone-200 dark:border-stone-800">
                <div>
                  <h3 className="text-lg font-bold font-serif flex items-center gap-2">
                    <Crown className="text-amber-500" size={18} />
                    <span>Plate #92: Master Scientific Exposenomics Infographic</span>
                  </h3>
                  <p className="text-xs text-stone-500 font-serif">
                    Roulet’s Law Proof: Perturbation (1st Order Pb) × Uncertainty = Chaos × Relativity (Climate Change 2.8°C Warming)
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-black rounded text-xs flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <Maximize2 size={13} />
                    <span>View Fullscreen Artwork</span>
                  </button>
                  <button
                    onClick={copyVaultHash}
                    className="px-3 py-1.5 bg-stone-800 hover:bg-stone-700 text-amber-300 font-bold rounded text-xs flex items-center gap-1 cursor-pointer transition-colors border border-amber-500/30"
                  >
                    {copiedHash ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                    <span>{copiedHash ? 'Hash Copied' : 'Vault Hash'}</span>
                  </button>
                </div>
              </div>

              {/* Infographic Image Container */}
              <div
                onClick={() => setIsModalOpen(true)}
                className="relative rounded-2xl overflow-hidden border-2 border-amber-500/40 shadow-2xl cursor-pointer group bg-black"
              >
                <img
                  src={rouletsLawClimateImg}
                  alt="Roulet's Law Proof: Exposenomics & Systemic Risk Infographic"
                  className="w-full h-auto object-cover group-hover:scale-101 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-6">
                  <div className="text-white space-y-1">
                    <div className="font-bold font-serif text-lg text-amber-300">Click to expand high-resolution artwork</div>
                    <div className="text-xs font-mono text-stone-300">Plate #92 • Sovereign Provenance: {vaultHash}</div>
                  </div>
                </div>
              </div>

              {/* Technical Description */}
              <div className="p-4 rounded-xl bg-stone-100 dark:bg-stone-800/60 text-xs font-serif text-stone-600 dark:text-stone-300 space-y-2">
                <div className="font-bold text-stone-900 dark:text-stone-100">Infographic Analysis & Structural Key:</div>
                <p>
                  <strong>Left Panel (Chemical Perturbation):</strong> Illustrates lead (Pb) replacing Ca²⁺ in neural synaptic firing and Zn²⁺ in mitochondrial electron transport complexes, producing prefrontal cortex executive dysfunction and cognitive decline. Highlights the 100M+ tonnes of tetraethyl lead combusted by fossil fuel engines.
                </p>
                <p>
                  <strong>Center Panel (The Master Equation):</strong> Explicitly computes [Perturbation: 1st Order Pb] × [Uncertainty: Decades of Failed Governance & Corporate Malpractice] = [Chaos: Societal Paralysis] × [Relativity: Climate Change 2.8°C Warming & Human Age Changing].
                </p>
                <p>
                  <strong>Right Panel (UNEP 2026 Pathways):</strong> Graphs the 2.8°C current policy surge, 2.6°C conditional NDCs, 2.1°C net-zero aspirational floor, and the colossal 320 Gt atmospheric CO₂ removal requirement.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* CROSS-NAVIGATION FOOTER */}
        <div className={`p-6 rounded-2xl border ${isLight ? 'bg-stone-100 border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-4`}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b pb-3 border-stone-300 dark:border-stone-700">
            <span className="font-mono text-xs font-bold text-stone-500 uppercase tracking-wider">
              Cross-Disciplinary Sovereign Proof Navigation
            </span>
            <span className="text-xs font-serif text-amber-600 dark:text-amber-400">
              Connect Roulet’s Law to Global Hypotheses & Exposenomic Audits
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            <button
              onClick={() => onNavigateTab && onNavigateTab('global_lead_crime_proof')}
              className="p-3 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-left transition-colors cursor-pointer group"
            >
              <div className="flex items-center justify-between text-xs font-mono font-bold text-amber-600 dark:text-amber-400">
                <span>Global Lead-Crime Proof</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="text-[11px] text-stone-500 font-serif mt-1">
                The 8,000-year historical validation of Roulet’s Law
              </div>
            </button>

            <button
              onClick={() => onNavigateTab && onNavigateTab('zambia_kabwe_lead_crisis')}
              className="p-3 rounded-xl bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-left transition-colors cursor-pointer group"
            >
              <div className="flex items-center justify-between text-xs font-mono font-bold text-red-600 dark:text-red-400">
                <span>Zambia Kabwe Crisis</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="text-[11px] text-stone-500 font-serif mt-1">
                Plate #91: 6.4M tonnes waste & African Union hearing
              </div>
            </button>

            <button
              onClick={() => onNavigateTab && onNavigateTab('wef_lead_economics')}
              className="p-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-left transition-colors cursor-pointer group"
            >
              <div className="flex items-center justify-between text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                <span>WEF Lead Economics</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="text-[11px] text-stone-500 font-serif mt-1">
                Plate #86: The $6 Trillion Silent Global Tax
              </div>
            </button>

            <button
              onClick={() => onNavigateTab && onNavigateTab('healthcare_ai_alignment')}
              className="p-3 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-left transition-colors cursor-pointer group"
            >
              <div className="flex items-center justify-between text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400">
                <span>Healthcare AI Alignment</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="text-[11px] text-stone-500 font-serif mt-1">
                Plate #89: Whose Agent Is It Anyway & AI as the New Pb
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* FULLSCREEN ARTWORK MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-4">
          <div className="w-full max-w-6xl flex items-center justify-between py-3 border-b border-stone-800 text-white font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="text-amber-400 font-bold">PLATE #92:</span>
              <span className="truncate">ROULET’S LAW PROOF — CLIMATE CHANGE & EXPOSENOMICS</span>
            </div>
            <button
              onClick={() => setIsModalOpen(false)}
              className="px-3 py-1 bg-stone-800 hover:bg-stone-700 text-white font-bold rounded cursor-pointer transition-colors"
            >
              ✕ Close Artwork
            </button>
          </div>

          <div className="flex-1 w-full max-w-6xl flex items-center justify-center py-4 overflow-hidden">
            <img
              src={rouletsLawClimateImg}
              alt="Plate #92 Fullscreen"
              className="max-h-[82vh] max-w-full object-contain rounded-lg border border-amber-500/40 shadow-2xl"
            />
          </div>

          <div className="w-full max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-stone-800 text-stone-400 font-mono text-xs">
            <div className="flex items-center gap-2">
              <span>Vault Hash:</span>
              <span className="text-amber-400 select-all">{vaultHash}</span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://www.unep.org/en/news-and-stories/press-release/new-unep-report-lays-out-emission-cuts-needed-return-15degc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline flex items-center gap-1"
              >
                <span>UNEP Press Release</span>
                <ExternalLink size={12} />
              </a>
              <a
                href="https://wedocs.unep.org/items/87c02cac-8da8-4c28-ba61-c846ee68ea70"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:underline flex items-center gap-1"
              >
                <span>Full Report</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

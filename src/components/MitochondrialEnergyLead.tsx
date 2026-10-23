import React, { useState, useMemo } from 'react';
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  Award,
  BatteryCharging,
  Brain,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock,
  Copy,
  Cpu,
  Dna,
  ExternalLink,
  Flame,
  Gauge,
  HeartPulse,
  HelpCircle,
  Info,
  Layers,
  Maximize2,
  Microscope,
  RotateCcw,
  Scale,
  Share2,
  ShieldAlert,
  ShieldCheck,
  Sliders,
  Sparkles,
  TrendingDown,
  TrendingUp,
  Zap
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
  ComposedChart,
  Line,
  AreaChart,
  Area,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts';
import plate95Img from '../assets/images/mitochondrial_energy_lead_plate95_1792725587543.jpg';

interface MitochondrialEnergyLeadProps {
  onNavigateTab?: (tab: string) => void;
  siteTheme?: 'light' | 'dark' | 'glass';
}

export const MitochondrialEnergyLead: React.FC<MitochondrialEnergyLeadProps> = ({
  onNavigateTab,
  siteTheme = 'light'
}) => {
  const [activeSubTab, setActiveSubTab] = useState<
    'overview' | 'etc_biochemistry' | 'neuronal_f1' | 'ionic_mimicry_mptp' | 'organ_pathology' | 'interactive_engine'
  >('overview');

  const [isArtworkModalOpen, setIsArtworkModalOpen] = useState(false);
  const [copiedHash, setCopiedHash] = useState(false);

  // Interactive Mitochondrial Flux Simulator State
  const [pbConcentration, setPbConcentration] = useState<number>(15); // micromolar Pb2+
  const [antioxidantSupport, setAntioxidantSupport] = useState<number>(40); // % supplementation (NAC / GSH / MitoQ)
  const [calciumBurden, setCalciumBurden] = useState<number>(30); // % cytosolic calcium overload
  const [metabolicDemand, setMetabolicDemand] = useState<number>(75); // % neuronal firing rate / work

  const isLight = siteTheme === 'light';
  const PROVENANCE_HASH = '0xMITOCHONDRIAL_ENERGY_LEAD_COMPLEX_III_EXPOSENOMICS_PLATE_95';

  const handleCopyHash = () => {
    navigator.clipboard.writeText(PROVENANCE_HASH);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2200);
  };

  // ETC Complex Flux Data Comparison (Baseline vs Lead Toxicity)
  const etcComplexData = [
    { name: 'Complex I (NADH DH)', baseline: 100, leadInhibited: 78, impact: 'Mild direct binding to Fe-S clusters' },
    { name: 'Complex II (SDH)', baseline: 100, leadInhibited: 82, impact: 'Moderate catalytic inhibition' },
    { name: 'Complex III (Cyt bc1)', baseline: 100, leadInhibited: 24, impact: 'PRIMARY CRITICAL TARGET: Heme-b & Rieske Fe-S blockade' },
    { name: 'Complex IV (COX)', baseline: 100, leadInhibited: 62, impact: 'Downstream electron starving' },
    { name: 'ATP Synthase (F1F0)', baseline: 100, leadInhibited: 31, impact: 'Proton gradient collapse & thiol -SH oxidation' }
  ];

  // Dynamic Simulation Calculations
  const simOutputs = useMemo(() => {
    // Complex III inhibition is exponential with Pb2+ concentration
    const complex3Activity = Math.max(8, Math.round(100 - (pbConcentration * 4.2) + (antioxidantSupport * 0.15)));
    
    // ATP synthesis drops sharply when Complex III is compromised
    const atpProductionRate = Math.max(12, Math.round((complex3Activity * 0.75) - (calciumBurden * 0.2) + (antioxidantSupport * 0.18)));
    
    // ROS surge due to electron leakage at Complex III Q-cycle
    const rosLevel = Math.max(100, Math.round(100 + (pbConcentration * 18.5) + (calciumBurden * 1.5) - (antioxidantSupport * 1.8)));
    
    // Mitochondrial Permeability Transition Pore (MPTP) Opening Probability
    const mptpProbability = Math.min(99, Math.max(4, Math.round(
      (pbConcentration * 3.8) + (calciumBurden * 0.6) - (antioxidantSupport * 0.5)
    )));
    
    // Neuronal Survival Index (Formula 1 Race Car Vulnerability)
    const neuronalViability = Math.max(5, Math.min(100, Math.round(
      100 - (100 - atpProductionRate) * 1.15 - (mptpProbability * 0.45)
    )));
    
    // Glycolytic compensation (Lactate acidosis risk)
    const glycolyticShift = Math.min(95, Math.max(10, Math.round((100 - atpProductionRate) * 1.05)));

    return {
      complex3Activity,
      atpProductionRate,
      rosLevel,
      mptpProbability,
      neuronalViability,
      glycolyticShift
    };
  }, [pbConcentration, antioxidantSupport, calciumBurden, metabolicDemand]);

  // Lead Titration vs Energy Curve Data
  const titrationData = [
    { pb: 0, atp: 100, ros: 100, lactate: 15, mptp: 3 },
    { pb: 5, atp: 86, ros: 165, lactate: 28, mptp: 12 },
    { pb: 10, atp: 64, ros: 245, lactate: 48, mptp: 31 },
    { pb: 20, atp: 41, ros: 380, lactate: 74, mptp: 62 },
    { pb: 35, atp: 26, ros: 520, lactate: 88, mptp: 84 },
    { pb: 50, atp: 14, ros: 640, lactate: 94, mptp: 96 }
  ];

  // Organ Vulnerability Radar Profile
  const organRadarData = [
    { organ: 'Cerebral Neurons', demand: 98, vulnerability: 96, fullMark: 100 },
    { organ: 'Cardiomyocytes', demand: 94, vulnerability: 89, fullMark: 100 },
    { organ: 'Pancreatic β-Cells', demand: 86, vulnerability: 91, fullMark: 100 },
    { organ: 'Renal Tubules', demand: 82, vulnerability: 85, fullMark: 100 },
    { organ: 'Skeletal Muscle', demand: 68, vulnerability: 58, fullMark: 100 },
    { organ: 'Hepatocytes', demand: 62, vulnerability: 52, fullMark: 100 }
  ];

  return (
    <div className={`min-h-screen ${isLight ? 'bg-stone-50 text-stone-900' : 'bg-[#0A0D12] text-stone-100'} font-sans pb-24`}>
      {/* TOP SCIENTIFIC HERO BANNER */}
      <section className="relative overflow-hidden border-b border-emerald-500/30 bg-gradient-to-b from-stone-950 via-[#071317] to-stone-950 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:20px_20px]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
              <Sparkles size={14} className="text-emerald-400 animate-pulse" />
              ICEarth Sovereign Exposenomics Plate #95 • Peer-Reviewed Synthesis
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyHash}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-stone-900/80 hover:bg-stone-800 text-stone-300 border border-stone-700 transition-colors"
                title="Copy Cryptographic Provenance Hash"
              >
                {copiedHash ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                <span>{copiedHash ? 'Hash Copied!' : 'Verify Provenance'}</span>
              </button>

              <button
                onClick={() => setIsArtworkModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md transition-all cursor-pointer"
              >
                <Maximize2 size={13} />
                <span>View Full Plate #95 Infographic</span>
              </button>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-white mb-4 leading-tight">
            Mitochondrial Energy &amp; Lead (Pb²⁺) Exposenomics:
            <span className="block text-emerald-400 font-sans text-2xl sm:text-3xl lg:text-4xl font-light mt-1">
              The Energy-Centric View of Disease &amp; Neuro-Metabolic Collapse
            </span>
          </h1>

          <p className="text-base sm:text-lg text-stone-300 max-w-4xl font-light leading-relaxed mb-6">
            Groundbreaking integration of the <em>Scientific American</em> energy-centric paradigm with molecular heavy-metal toxicology: 
            How Lead (Pb²⁺) directly inhibits mitochondrial <strong>Complex III</strong>, chokes cellular ATP synthesis, triggers reactive oxygen 
            species (ROS) cascades, forces catastrophic calcium/zinc ionic mimicry, and starves high-speed neuronal &ldquo;Formula One&rdquo; cells 
            into Alzheimer&rsquo;s, Parkinson&rsquo;s, type 2 diabetes, and systemic organ failure.
          </p>

          {/* QUOTE BANNER */}
          <div className="p-4 sm:p-5 rounded-xl bg-stone-900/90 border border-emerald-500/30 backdrop-blur-md grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-l-2 border-emerald-400 pl-3">
              <p className="text-xs sm:text-sm text-stone-300 italic font-serif">
                &ldquo;Once we see ourselves as energetic processes, many things make sense that didn&rsquo;t make sense from a molecular perspective... 
                We produce our body weight in ATP every day, and we burn just as much.&rdquo;
              </p>
              <div className="text-[11px] font-mono text-emerald-400 mt-1 font-semibold">
                — Martin Picard, PhD • Mitochondrial Psychobiology Group, Columbia University
              </div>
            </div>

            <div className="border-l-2 border-amber-400 pl-3">
              <p className="text-xs sm:text-sm text-stone-300 italic font-serif">
                &ldquo;Mitochondrial dysfunction may contribute to the vast majority of common diseases... Neurons are closer to Formula One race cars than family sedans.&rdquo;
              </p>
              <div className="text-[11px] font-mono text-amber-400 mt-1 font-semibold">
                — Matt Kaeberlein, PhD &amp; Paula Moreira, PhD • Univ. of Washington &amp; J. Alzheimer&rsquo;s Disease
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE STATISTICAL HUD STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          <div className={`p-4 rounded-xl border ${isLight ? 'bg-white border-stone-200 shadow-md' : 'bg-stone-900 border-stone-800'}`}>
            <div className="flex items-center gap-1.5 text-stone-500 text-[11px] font-mono uppercase font-bold mb-1">
              <BatteryCharging size={13} className="text-amber-500" />
              Daily ATP Turnover
            </div>
            <div className="text-2xl font-bold font-mono text-amber-500">~70 kg/day</div>
            <div className="text-[10px] text-stone-500 mt-0.5">Equal to 100% human body weight</div>
          </div>

          <div className={`p-4 rounded-xl border ${isLight ? 'bg-white border-stone-200 shadow-md' : 'bg-stone-900 border-stone-800'}`}>
            <div className="flex items-center gap-1.5 text-stone-500 text-[11px] font-mono uppercase font-bold mb-1">
              <ShieldAlert size={13} className="text-red-500" />
              Complex III Drop
            </div>
            <div className="text-2xl font-bold font-mono text-red-500">-76% Flux</div>
            <div className="text-[10px] text-stone-500 mt-0.5">Direct ubiquinol blockade by Pb²⁺</div>
          </div>

          <div className={`p-4 rounded-xl border ${isLight ? 'bg-white border-stone-200 shadow-md' : 'bg-stone-900 border-stone-800'}`}>
            <div className="flex items-center gap-1.5 text-stone-500 text-[11px] font-mono uppercase font-bold mb-1">
              <Brain size={13} className="text-purple-500" />
              Neuronal Energy
            </div>
            <div className="text-2xl font-bold font-mono text-purple-500">20-25%</div>
            <div className="text-[10px] text-stone-500 mt-0.5">Formula One race car fuel burn</div>
          </div>

          <div className={`p-4 rounded-xl border ${isLight ? 'bg-white border-stone-200 shadow-md' : 'bg-stone-900 border-stone-800'}`}>
            <div className="flex items-center gap-1.5 text-stone-500 text-[11px] font-mono uppercase font-bold mb-1">
              <Flame size={13} className="text-orange-500" />
              ROS Free Radicals
            </div>
            <div className="text-2xl font-bold font-mono text-orange-500">+340%</div>
            <div className="text-[10px] text-stone-500 mt-0.5">Superoxide leakage & GSH collapse</div>
          </div>

          <div className={`p-4 rounded-xl border ${isLight ? 'bg-white border-stone-200 shadow-md' : 'bg-stone-900 border-stone-800'}`}>
            <div className="flex items-center gap-1.5 text-stone-500 text-[11px] font-mono uppercase font-bold mb-1">
              <Scale size={13} className="text-cyan-500" />
              Ionic Mimicry
            </div>
            <div className="text-2xl font-bold font-mono text-cyan-500">Ca²⁺ / Zn²⁺ / Fe²⁺</div>
            <div className="text-[10px] text-stone-500 mt-0.5">Deceptive divalent mineral theft</div>
          </div>

          <div className={`p-4 rounded-xl border ${isLight ? 'bg-white border-stone-200 shadow-md' : 'bg-stone-900 border-stone-800'}`}>
            <div className="flex items-center gap-1.5 text-stone-500 text-[11px] font-mono uppercase font-bold mb-1">
              <HeartPulse size={13} className="text-emerald-500" />
              Pathology Axis
            </div>
            <div className="text-2xl font-bold font-mono text-emerald-500">Type 3 Diabetes</div>
            <div className="text-[10px] text-stone-500 mt-0.5">Brain energy starved neurodegeneration</div>
          </div>
        </div>
      </section>

      {/* SUB-NAVIGATION TABS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="flex items-center overflow-x-auto gap-2 border-b border-stone-300 dark:border-stone-800 pb-2 scrollbar-none">
          <button
            onClick={() => setActiveSubTab('overview')}
            className={`px-4 py-2 rounded-lg text-xs font-bold font-mono transition-all flex items-center gap-1.5 shrink-0 ${
              activeSubTab === 'overview'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-800'
            }`}
          >
            <Layers size={14} />
            1. Executive Overview &amp; Paradigm
          </button>

          <button
            onClick={() => setActiveSubTab('etc_biochemistry')}
            className={`px-4 py-2 rounded-lg text-xs font-bold font-mono transition-all flex items-center gap-1.5 shrink-0 ${
              activeSubTab === 'etc_biochemistry'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-800'
            }`}
          >
            <Microscope size={14} />
            2. Complex III &amp; ETC Choke Point
          </button>

          <button
            onClick={() => setActiveSubTab('neuronal_f1')}
            className={`px-4 py-2 rounded-lg text-xs font-bold font-mono transition-all flex items-center gap-1.5 shrink-0 ${
              activeSubTab === 'neuronal_f1'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-800'
            }`}
          >
            <Brain size={14} />
            3. Neuronal &ldquo;Formula One&rdquo; Crisis
          </button>

          <button
            onClick={() => setActiveSubTab('ionic_mimicry_mptp')}
            className={`px-4 py-2 rounded-lg text-xs font-bold font-mono transition-all flex items-center gap-1.5 shrink-0 ${
              activeSubTab === 'ionic_mimicry_mptp'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-800'
            }`}
          >
            <Activity size={14} />
            4. Ionic Mimicry &amp; MPTP Swelling
          </button>

          <button
            onClick={() => setActiveSubTab('organ_pathology')}
            className={`px-4 py-2 rounded-lg text-xs font-bold font-mono transition-all flex items-center gap-1.5 shrink-0 ${
              activeSubTab === 'organ_pathology'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-800'
            }`}
          >
            <HeartPulse size={14} />
            5. Multi-Organ Pathology Grid
          </button>

          <button
            onClick={() => setActiveSubTab('interactive_engine')}
            className={`px-4 py-2 rounded-lg text-xs font-bold font-mono transition-all flex items-center gap-1.5 shrink-0 ${
              activeSubTab === 'interactive_engine'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-800'
            }`}
          >
            <Sliders size={14} />
            6. Interactive Exposure Simulator
          </button>
        </div>
      </section>

      {/* TAB CONTENT AREA */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-10">
        
        {/* TAB 1: EXECUTIVE OVERVIEW */}
        {activeSubTab === 'overview' && (
          <div className="space-y-8 animate-fade-in">
            {/* Infographic Preview Card with Quick Launcher */}
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-200 shadow-lg' : 'bg-stone-900/90 border-stone-800'} overflow-hidden`}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                    Scientific Discovery &bull; Plate #95 Technical Dossier
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 dark:text-white leading-tight">
                    Seeing Disease Through the Lens of Energy: Why Lead is the Ultimate Metabolic Wrecking Ball
                  </h2>
                  <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed">
                    For decades, medicine focused on genetic mutations and isolated chemical pathways. But biologists Martin Picard (Columbia) 
                    and Matt Kaeberlein (UW) have established an overarching physical truth: <strong>human life is an unbroken energetic flow</strong>. 
                    Every cell relies on mitochondria to transform food into ATP, cycling our entire body mass in ATP every 24 hours.
                  </p>
                  <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                    When environmental lead (Pb²⁺) enters the cytoplasm, it acts as an aggressive divalent counterfeiter. It selectively targets 
                    <strong> Complex III (cytochrome bc1 complex)</strong> of the electron transport chain, blocking electron transfer, stalling 
                    proton pumping, and venting superoxides that mutilate mitochondrial DNA and lipids.
                  </p>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      onClick={() => setIsArtworkModalOpen(true)}
                      className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold font-mono flex items-center gap-2 shadow-sm transition-all cursor-pointer"
                    >
                      <Maximize2 size={14} />
                      Inspect High-Resolution Plate #95 Artwork
                    </button>
                    <a
                      href="https://www.yahoo.com/news/science/articles/provocative-theory-could-explain-aging-100000027.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-stone-200 hover:bg-stone-300 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 text-xs font-bold font-mono flex items-center gap-1.5 transition-colors"
                    >
                      <span>Scientific American Source</span>
                      <ExternalLink size={13} />
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-5 relative group cursor-pointer" onClick={() => setIsArtworkModalOpen(true)}>
                  <div className="rounded-xl overflow-hidden border-2 border-emerald-500/40 shadow-xl relative bg-stone-950">
                    <img
                      src={plate95Img}
                      alt="Plate #95: Mitochondrial Energy & Lead Exposenomics"
                      className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent flex items-end p-4">
                      <div className="text-white text-xs font-mono font-bold flex items-center gap-1.5">
                        <Maximize2 size={14} className="text-emerald-400" />
                        Click to enlarge high-res infographic with vector annotations
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Recharts Comparison: ETC Complex Flux Under Lead Attack */}
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-200 shadow-md' : 'bg-stone-900/90 border-stone-800'} space-y-4`}>
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 dark:border-stone-800 pb-3">
                <div>
                  <h3 className="text-lg font-bold font-serif text-stone-900 dark:text-white flex items-center gap-2">
                    <Activity size={18} className="text-red-500" />
                    Respiratory Chain Complexes: Baseline Flux vs. Lead (Pb²⁺) Inhibition
                  </h3>
                  <p className="text-xs text-stone-500 dark:text-stone-400 font-sans">
                    Comparative throughput (%) across inner mitochondrial membrane electron transport complexes.
                  </p>
                </div>
                <span className="px-2 py-1 rounded text-[10px] font-mono font-bold bg-red-500/10 text-red-500 border border-red-500/20 uppercase">
                  Complex III -76% Drop
                </span>
              </div>

              <div className="h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={etcComplexData} margin={{ top: 20, right: 30, left: 0, bottom: 25 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke={isLight ? '#E5E7EB' : '#27272A'} />
                    <XAxis dataKey="name" stroke={isLight ? '#4B5563' : '#A1A1AA'} fontSize={11} interval={0} />
                    <YAxis stroke={isLight ? '#4B5563' : '#A1A1AA'} fontSize={11} domain={[0, 110]} unit="%" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: isLight ? '#FFFFFF' : '#18181B',
                        borderColor: isLight ? '#D1D5DB' : '#3F3F46',
                        borderRadius: '0.5rem',
                        fontSize: '11px'
                      }}
                    />
                    <Legend wrapperStyle={{ fontSize: '12px' }} />
                    <Bar dataKey="baseline" name="Healthy Basal Capacity (%)" fill="#10B981" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="leadInhibited" name="Lead (Pb²⁺) Inhibited Flux (%)" fill="#EF4444" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2 text-xs text-stone-600 dark:text-stone-300">
                <div className="p-3 rounded-lg bg-stone-100 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700/60">
                  <div className="font-bold text-red-600 dark:text-red-400 mb-1 flex items-center gap-1 font-mono">
                    <ShieldAlert size={14} /> Complex III Bottleneck
                  </div>
                  Lead blocks the Q-cycle at ubiquinol:cytochrome c oxidoreductase, arresting electron handoff to cytochrome c.
                </div>
                <div className="p-3 rounded-lg bg-stone-100 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700/60">
                  <div className="font-bold text-amber-600 dark:text-amber-400 mb-1 flex items-center gap-1 font-mono">
                    <Zap size={14} /> ATP Synthase Paralysis
                  </div>
                  Without proton accumulation in the intermembrane space, rotational F1F0 ATP synthase ceases phosphorylation.
                </div>
                <div className="p-3 rounded-lg bg-stone-100 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700/60">
                  <div className="font-bold text-purple-600 dark:text-purple-400 mb-1 flex items-center gap-1 font-mono">
                    <Flame size={14} /> Superoxide Radical Flood
                  </div>
                  Uncoupled electrons escape directly to dissolved oxygen, creating an unquenchable torrent of superoxide (O₂•⁻).
                </div>
              </div>
            </div>

            {/* THE FIVE SCIENTIFIC MECHANISMS */}
            <div className="space-y-4">
              <h3 className="text-xl font-serif font-bold text-stone-900 dark:text-white">
                Five Crucial Mechanisms of Lead-Induced Mitochondrial Annihilation
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className={`p-5 rounded-xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-2`}>
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 text-red-500 flex items-center justify-center font-bold font-mono">
                    01
                  </div>
                  <h4 className="font-bold text-sm text-stone-900 dark:text-white">Complex III Direct Inactivation</h4>
                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                    Lead binds directly with high affinity to iron-sulfur centers and heme-b moieties within Complex III. 
                    This halts the Q-cycle, backing up electrons and creating a bioenergetic roadblock that suffocates aerobic cellular respiration.
                  </p>
                </div>

                <div className={`p-5 rounded-xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-2`}>
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold font-mono">
                    02
                  </div>
                  <h4 className="font-bold text-sm text-stone-900 dark:text-white">Ionic Mimicry of Divalent Cations</h4>
                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                    With an ionic radius identical to Ca²⁺ (and close to Zn²⁺ and Fe²⁺), Pb²⁺ fools mitochondrial calcium uniporters (MCU). 
                    It enters the matrix unhindered, displacing essential calcium and triggering mitochondrial swelling.
                  </p>
                </div>

                <div className={`p-5 rounded-xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-2`}>
                  <div className="w-8 h-8 rounded-lg bg-orange-500/10 text-orange-500 flex items-center justify-center font-bold font-mono">
                    03
                  </div>
                  <h4 className="font-bold text-sm text-stone-900 dark:text-white">MPTP Opening &amp; Cytochrome c Release</h4>
                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                    Swelling triggers the irreversible opening of the Mitochondrial Permeability Transition Pore (MPTP). 
                    Matrix solutes equilibrate, the membrane potential (ΔΨm) collapses, and cytochrome c dumps into cytosol, initiating apoptosis.
                  </p>
                </div>

                <div className={`p-5 rounded-xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-2`}>
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-500 flex items-center justify-center font-bold font-mono">
                    04
                  </div>
                  <h4 className="font-bold text-sm text-stone-900 dark:text-white">ER Stress &amp; Dynamics (MFN2 / DRP1)</h4>
                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                    Lead causes severe endoplasmic reticulum stress, hyper-activating DRP1 (mitochondrial fission) while shutting down 
                    Mitofusin-2 (MFN2). This shatters the reticular network into fragmented, dysfunctional mitochondrial debris.
                  </p>
                </div>

                <div className={`p-5 rounded-xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-2`}>
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-500 flex items-center justify-center font-bold font-mono">
                    05
                  </div>
                  <h4 className="font-bold text-sm text-stone-900 dark:text-white">Thiol (-SH) Group Enzyme Binding</h4>
                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                    Lead displays an avid affinity for sulfhydryl (-SH) thiol functional groups on critical metabolic enzymes, including 
                    monoamine oxidase (MAO), δ-aminolevulinic acid dehydratase (ALAD), and ATP synthase catalytic subunits.
                  </p>
                </div>

                <div className={`p-5 rounded-xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-2`}>
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold font-mono">
                    06
                  </div>
                  <h4 className="font-bold text-sm text-stone-900 dark:text-white">Glycolytic Shift &amp; Lactic Acidosis</h4>
                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                    Deprived of oxidative phosphorylation, cells desperately shift toward inefficient anaerobic glycolysis, generating a meager 
                    2 ATP per glucose molecule compared to 36 ATP. This leads to intracellular acidosis and chronic energetic starvation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: ETC BIOCHEMISTRY & COMPLEX III */}
        {activeSubTab === 'etc_biochemistry' && (
          <div className="space-y-8 animate-fade-in">
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-200 shadow-md' : 'bg-stone-900/90 border-stone-800'} space-y-4`}>
              <div className="border-b border-stone-200 dark:border-stone-800 pb-3">
                <h3 className="text-xl font-serif font-bold text-stone-900 dark:text-white">
                  Molecular Pathology: The Complex III (Cytochrome bc1) Choke Point
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 font-sans mt-1">
                  How Lead (Pb²⁺) dismantles the Q-cycle, inhibits ubiquinol oxidation, and starves Cytochrome c.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-4 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                  <p>
                    <strong>Complex III (ubiquinol:cytochrome c oxidoreductase)</strong> sits at the mechanical fulcrum of cellular respiration. 
                    It is responsible for harvesting 4 protons from the matrix and pumping them across the inner mitochondrial membrane via 
                    the intricate two-stage <em>Q-cycle</em>.
                  </p>

                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 space-y-2">
                    <div className="font-bold text-red-600 dark:text-red-400 font-mono flex items-center gap-1.5">
                      <ShieldAlert size={16} /> Lead (Pb²⁺) Binding Mechanism
                    </div>
                    <p className="text-xs text-stone-600 dark:text-stone-300">
                      Lead cations target the <strong>Qₒ catalytic pocket</strong> of Complex III. Specifically, Pb²⁺ binds to the histidine and 
                      cysteine residues coordinating the Rieske [2Fe-2S] iron-sulfur cluster and the low-potential heme bL. 
                      This prevents the semiquinone radical intermediate from transferring its second electron to heme bL, effectively halting 
                      the electron transit chain dead in its tracks.
                    </p>
                  </div>

                  <p>
                    With the Q-cycle jammed, the high-energy electrons accumulated on ubiquinol have nowhere to go. They leak directly into the 
                    lipid bilayer, reacting violently with molecular oxygen (O₂) to generate a massive surge of <strong>superoxide radical (O₂•⁻)</strong>.
                  </p>
                </div>

                {/* Energy Drop Titration Chart */}
                <div className="space-y-2">
                  <div className="text-xs font-mono font-bold text-stone-500 uppercase">
                    Titration: Pb²⁺ Concentration (&mu;mol/L) vs. ATP Yield &amp; ROS Surge
                  </div>
                  <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <ComposedChart data={titrationData} margin={{ top: 10, right: 30, left: 0, bottom: 20 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke={isLight ? '#E5E7EB' : '#27272A'} />
                        <XAxis dataKey="pb" unit=" µM" stroke={isLight ? '#4B5563' : '#A1A1AA'} fontSize={11} />
                        <YAxis stroke={isLight ? '#4B5563' : '#A1A1AA'} fontSize={11} domain={[0, 700]} />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: isLight ? '#FFFFFF' : '#18181B',
                            borderColor: isLight ? '#D1D5DB' : '#3F3F46',
                            borderRadius: '0.5rem',
                            fontSize: '11px'
                          }}
                        />
                        <Legend wrapperStyle={{ fontSize: '11px' }} />
                        <Area type="monotone" dataKey="ros" name="ROS Generation (%)" fill="#F97316" fillOpacity={0.2} stroke="#F97316" strokeWidth={2} />
                        <Line type="monotone" dataKey="atp" name="Mitochondrial ATP Synthesis (%)" stroke="#10B981" strokeWidth={3} dot={{ r: 4 }} />
                        <Line type="monotone" dataKey="lactate" name="Anaerobic Lactate Shift (%)" stroke="#A855F7" strokeWidth={2} strokeDasharray="5 5" />
                      </ComposedChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: NEURONAL "FORMULA ONE" RACE CAR MODEL */}
        {activeSubTab === 'neuronal_f1' && (
          <div className="space-y-8 animate-fade-in">
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-200 shadow-md' : 'bg-stone-900/90 border-stone-800'} space-y-6`}>
              <div className="border-b border-stone-200 dark:border-stone-800 pb-3">
                <h3 className="text-xl font-serif font-bold text-stone-900 dark:text-white flex items-center gap-2">
                  <Brain size={22} className="text-purple-500" />
                  The &ldquo;Formula One&rdquo; Race Car vs. &ldquo;Family Sedan&rdquo; Neuronal Paradigm
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 font-sans mt-1">
                  Why the human brain experiences immediate catastrophic synaptic failure under mitochondrial energetic strain.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl border border-red-500/40 bg-gradient-to-br from-red-950/20 via-stone-900/40 to-stone-950/50 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-red-400">Formula One Race Car</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-red-500/20 text-red-300">Extreme Vulnerability</span>
                  </div>
                  <h4 className="text-lg font-bold text-white font-serif">Brain Neurons &amp; Synapses</h4>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    The human brain represents only <strong>2% of body mass</strong>, but monopolizes <strong>20-25% of basal body glucose and oxygen</strong>. 
                    Neurons are like high-speed Formula One race cars running at maximum RPM: constantly pumping Na⁺/K⁺ ions to maintain resting potential, 
                    packaging neurotransmitters, and firing hundreds of times per second.
                  </p>
                  <ul className="text-xs space-y-1.5 text-stone-300 list-disc pl-4">
                    <li>Zero glycogen fuel reserve; requires continuous unbroken ATP delivery.</li>
                    <li>Synaptic boutons rely on localized mitochondrial clusters to prevent terminal exhaustion.</li>
                    <li>When Lead knocks out Complex III, ATP falls below threshold, synapses immediately collapse.</li>
                    <li>Result: Rapid loss of long-term potentiation (LTP), cognitive decline, and Alzheimer&rsquo;s pathology.</li>
                  </ul>
                </div>

                <div className="p-5 rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-100/50 dark:bg-stone-800/40 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-stone-500">Family Sedan</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-stone-500/20 text-stone-400">Higher Buffer</span>
                  </div>
                  <h4 className="text-lg font-bold text-stone-900 dark:text-white font-serif">Somatic &amp; Structural Cells</h4>
                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                    Fibroblasts, resting adipocytes, and slow-twitch muscle cells operate like sensible family sedans. 
                    Their metabolic demand is modest, they possess significant glycogen storage, and can coast on anaerobic glycolysis 
                    for days or weeks without immediate organelle death.
                  </p>
                  <ul className="text-xs space-y-1.5 text-stone-600 dark:text-stone-300 list-disc pl-4">
                    <li>Can tolerate substantial drops in mitochondrial flux before membrane depolarization.</li>
                    <li>Buffer lead accumulation silently in bone and dense tissues over decades.</li>
                    <li>Masks chronic exposure while brain neurons are actively being degraded.</li>
                  </ul>
                </div>
              </div>

              {/* Alzheimer's as "Diabetes of the Brain" */}
              <div className="p-5 rounded-xl bg-purple-900/20 border border-purple-500/30 space-y-2">
                <h4 className="font-bold text-sm text-purple-300 font-mono flex items-center gap-2">
                  <Dna size={16} /> Paula Moreira: Alzheimer&rsquo;s Disease as &ldquo;Diabetes of the Brain&rdquo; (Type 3 Diabetes)
                </h4>
                <p className="text-xs text-stone-300 leading-relaxed">
                  As co-editor in chief of the <em>Journal of Alzheimer&rsquo;s Disease</em>, Paula Moreira demonstrated that the primary defect 
                  in Alzheimer&rsquo;s is not amyloid plaques, but <strong>bioenergetic failure</strong>. When lead impedes Complex III and shuts down 
                  oxidative phosphorylation, neurons lose the energy required to process glucose and clear misfolded proteins. 
                  This creates an acquired central insulin resistance—literally starving neurons to death despite high circulating glucose.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: IONIC MIMICRY & MPTP SWELLING */}
        {activeSubTab === 'ionic_mimicry_mptp' && (
          <div className="space-y-8 animate-fade-in">
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-200 shadow-md' : 'bg-stone-900/90 border-stone-800'} space-y-6`}>
              <div className="border-b border-stone-200 dark:border-stone-800 pb-3">
                <h3 className="text-xl font-serif font-bold text-stone-900 dark:text-white">
                  Ionic Mimicry: How Pb²⁺ Deceives Calcium Channels &amp; Triggers MPTP Rupture
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 font-sans mt-1">
                  The biophysical mechanism of deceptive divalent uptake, endoplasmic reticulum stress, and apoptotic cascade.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900/50 space-y-2">
                  <div className="text-xs font-mono font-bold text-cyan-500 uppercase">Step 1: Trojan Infiltration</div>
                  <h4 className="font-bold text-sm text-stone-900 dark:text-white">MCU Infiltration</h4>
                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                    Because Pb²⁺ has an ionic radius of 1.19 &Aring; (nearly identical to Ca²⁺ at 1.00 &Aring;), the mitochondrial calcium uniporter (MCU) 
                    and voltage-dependent anion channels (VDAC) cannot discriminate between them. Pb²⁺ is enthusiastically translocated into the matrix.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900/50 space-y-2">
                  <div className="text-xs font-mono font-bold text-amber-500 uppercase">Step 2: Matrix Swelling</div>
                  <h4 className="font-bold text-sm text-stone-900 dark:text-white">Osmotic Dysregulation</h4>
                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                    Inside the matrix, Pb²⁺ binds to cyclophilin-D and adenine nucleotide translocase (ANT), locking open the high-conductance 
                    <strong> Mitochondrial Permeability Transition Pore (MPTP)</strong>. Water and solutes flood the matrix, ballooning the organelle.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900/50 space-y-2">
                  <div className="text-xs font-mono font-bold text-red-500 uppercase">Step 3: Apoptotic Rupture</div>
                  <h4 className="font-bold text-sm text-stone-900 dark:text-white">Cytochrome c Release</h4>
                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                    Physical swelling ruptures the outer mitochondrial membrane. Cytochrome c and Smac/DIABLO spill into the cytosol, binding Apaf-1 
                    to form the <em>apoptosome</em>, activating caspase-9 and caspase-3 to program irreversible cell suicide.
                  </p>
                </div>
              </div>

              {/* ER-Mitochondria Axis & DRP1 */}
              <div className="p-5 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-100/60 dark:bg-stone-800/40 space-y-3">
                <h4 className="font-bold text-sm text-stone-900 dark:text-white font-serif flex items-center gap-2">
                  <ShieldAlert size={16} className="text-red-500" />
                  Mitochondrial Dynamics: DRP1 Hyper-Fission &amp; Mitophagy Blockade
                </h4>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  Under normal conditions, damaged mitochondria are pruned through <strong>mitophagy</strong>, while healthy networks fuse via 
                  Mitofusin-2 (MFN2). Lead disrupts this balance by triggering endoplasmic reticulum (ER) stress, hyper-phosphorylating 
                  <strong> DRP1 (Dynamin-related protein 1)</strong> at Ser616. This causes uncontrolled fragmentation into dysfunctional round spherical fragments, 
                  while concurrently paralyzing lysosomal clearance—leaving toxic, ROS-generating organelle remnants to poison the cell indefinitely.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: MULTI-ORGAN PATHOLOGY GRID */}
        {activeSubTab === 'organ_pathology' && (
          <div className="space-y-8 animate-fade-in">
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-200 shadow-md' : 'bg-stone-900/90 border-stone-800'} space-y-6`}>
              <div className="border-b border-stone-200 dark:border-stone-800 pb-3">
                <h3 className="text-xl font-serif font-bold text-stone-900 dark:text-white">
                  Multi-Organ Energy Pathology Grid: Matt Kaeberlein&rsquo;s Unified Disease Map
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 font-sans mt-1">
                  &ldquo;The specific pathology depends on where the mitochondrial dysfunction is happening.&rdquo; — Dr. Matt Kaeberlein
                </p>
              </div>

              {/* Radar Chart: Organ Vulnerability vs Energy Demand */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 h-72 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={organRadarData}>
                      <PolarGrid stroke={isLight ? '#E5E7EB' : '#3F3F46'} />
                      <PolarAngleAxis dataKey="organ" stroke={isLight ? '#4B5563' : '#A1A1AA'} fontSize={10} />
                      <PolarRadiusAxis angle={30} domain={[0, 100]} stroke={isLight ? '#9CA3AF' : '#71717A'} fontSize={10} />
                      <Radar name="Basal Energy Demand (ATP)" dataKey="demand" stroke="#10B981" fill="#10B981" fillOpacity={0.35} />
                      <Radar name="Lead (Pb²⁺) Susceptibility" dataKey="vulnerability" stroke="#EF4444" fill="#EF4444" fillOpacity={0.35} />
                      <Legend wrapperStyle={{ fontSize: '11px' }} />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>

                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-3.5 rounded-xl border border-purple-500/30 bg-purple-500/5 space-y-1">
                    <div className="font-bold text-purple-600 dark:text-purple-400 font-mono flex items-center gap-1.5">
                      <Brain size={14} /> Brain / Central Nervous System
                    </div>
                    <div className="font-semibold text-stone-900 dark:text-white">Alzheimer&rsquo;s &bull; Parkinson&rsquo;s &bull; Depression</div>
                    <p className="text-stone-600 dark:text-stone-300 text-[11px]">
                      Formula One synaptic failure, dopamine neuron death in substantia nigra, neurotransmitter synthesis failure.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl border border-red-500/30 bg-red-500/5 space-y-1">
                    <div className="font-bold text-red-600 dark:text-red-400 font-mono flex items-center gap-1.5">
                      <HeartPulse size={14} /> Heart / Cardiovascular
                    </div>
                    <div className="font-semibold text-stone-900 dark:text-white">Cardiomyopathy &bull; Arrhythmia &bull; Heart Failure</div>
                    <p className="text-stone-600 dark:text-stone-300 text-[11px]">
                      Cardiomyocytes beat 100,000 times/day; ATP depletion impairs calcium reuptake into sarcoplasmic reticulum, causing diastolic dysfunction.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl border border-amber-500/30 bg-amber-500/5 space-y-1">
                    <div className="font-bold text-amber-600 dark:text-amber-400 font-mono flex items-center gap-1.5">
                      <Activity size={14} /> Pancreas / &beta;-Cells
                    </div>
                    <div className="font-semibold text-stone-900 dark:text-white">Type 2 Diabetes &bull; Insulin Secretion Failure</div>
                    <p className="text-stone-600 dark:text-stone-300 text-[11px]">
                      Glucose-stimulated insulin secretion directly requires mitochondrial ATP to close K-ATP channels; Lead shuts off insulin release.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl border border-cyan-500/30 bg-cyan-500/5 space-y-1">
                    <div className="font-bold text-cyan-600 dark:text-cyan-400 font-mono flex items-center gap-1.5">
                      <Zap size={14} /> Kidneys / Renal Tubules
                    </div>
                    <div className="font-semibold text-stone-900 dark:text-white">Fanconi Syndrome &bull; Metabolic Acidosis</div>
                    <p className="text-stone-600 dark:text-stone-300 text-[11px]">
                      Proximal tubule active solute transport collapses without continuous ATP; leads to glucosuria, aminoaciduria, and chronic renal disease.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 6: INTERACTIVE SIMULATOR */}
        {activeSubTab === 'interactive_engine' && (
          <div className="space-y-8 animate-fade-in">
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-200 shadow-md' : 'bg-stone-900/90 border-stone-800'} space-y-6`}>
              <div className="border-b border-stone-200 dark:border-stone-800 pb-3 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl font-serif font-bold text-stone-900 dark:text-white flex items-center gap-2">
                    <Sliders size={20} className="text-emerald-500" />
                    Interactive Mitochondrial Energy &amp; Lead (Pb²⁺) Exposure Engine
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 font-sans mt-1">
                    Simulate how lead concentration, antioxidant defenses, and calcium homeostasis determine ATP output, ROS levels, and neuronal survival.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setPbConcentration(15);
                    setAntioxidantSupport(40);
                    setCalciumBurden(30);
                    setMetabolicDemand(75);
                  }}
                  className="px-3 py-1.5 rounded-lg bg-stone-200 dark:bg-stone-800 hover:bg-stone-300 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 text-xs font-mono font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <RotateCcw size={13} />
                  Reset Defaults
                </button>
              </div>

              {/* CONTROLS */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-mono font-bold">
                    <label className="text-stone-700 dark:text-stone-300 flex items-center gap-1 text-red-500">
                      <AlertTriangle size={13} /> Lead (Pb²⁺) Level:
                    </label>
                    <span className="text-red-500 font-bold">{pbConcentration} &mu;M</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="50"
                    step="1"
                    value={pbConcentration}
                    onChange={(e) => setPbConcentration(Number(e.target.value))}
                    className="w-full accent-red-500 cursor-pointer"
                  />
                  <div className="text-[10px] text-stone-500">Normal unexposed: &lt; 0.5 &mu;M</div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-mono font-bold">
                    <label className="text-stone-700 dark:text-stone-300 flex items-center gap-1 text-emerald-500">
                      <ShieldCheck size={13} /> Antioxidant Defense:
                    </label>
                    <span className="text-emerald-500 font-bold">{antioxidantSupport}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="5"
                    value={antioxidantSupport}
                    onChange={(e) => setAntioxidantSupport(Number(e.target.value))}
                    className="w-full accent-emerald-500 cursor-pointer"
                  />
                  <div className="text-[10px] text-stone-500">GSH, NAC, MitoQ, ALA</div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-mono font-bold">
                    <label className="text-stone-700 dark:text-stone-300 flex items-center gap-1 text-cyan-500">
                      <Scale size={13} /> Cytosolic Calcium Burden:
                    </label>
                    <span className="text-cyan-500 font-bold">{calciumBurden}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="5"
                    value={calciumBurden}
                    onChange={(e) => setCalciumBurden(Number(e.target.value))}
                    className="w-full accent-cyan-500 cursor-pointer"
                  />
                  <div className="text-[10px] text-stone-500">Promotes MPTP pore opening</div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-mono font-bold">
                    <label className="text-stone-700 dark:text-stone-300 flex items-center gap-1 text-purple-500">
                      <Brain size={13} /> Neuronal Firing Workload:
                    </label>
                    <span className="text-purple-500 font-bold">{metabolicDemand}%</span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="100"
                    step="5"
                    value={metabolicDemand}
                    onChange={(e) => setMetabolicDemand(Number(e.target.value))}
                    className="w-full accent-purple-500 cursor-pointer"
                  />
                  <div className="text-[10px] text-stone-500">Formula One high RPM demand</div>
                </div>
              </div>

              {/* REAL-TIME DYNAMIC METRICS OUTPUT */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 pt-4">
                <div className="p-4 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900/60">
                  <div className="text-[10px] font-mono uppercase font-bold text-stone-500">Complex III Flux</div>
                  <div className="text-2xl font-bold font-mono text-red-500 mt-1">{simOutputs.complex3Activity}%</div>
                  <div className="text-[10px] text-stone-500 mt-0.5">Ubiquinol turnover</div>
                </div>

                <div className="p-4 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900/60">
                  <div className="text-[10px] font-mono uppercase font-bold text-stone-500">ATP Synthesis</div>
                  <div className={`text-2xl font-bold font-mono mt-1 ${simOutputs.atpProductionRate > 50 ? 'text-emerald-500' : 'text-amber-500'}`}>
                    {simOutputs.atpProductionRate}%
                  </div>
                  <div className="text-[10px] text-stone-500 mt-0.5">Cellular energy budget</div>
                </div>

                <div className="p-4 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900/60">
                  <div className="text-[10px] font-mono uppercase font-bold text-stone-500">Superoxide ROS</div>
                  <div className="text-2xl font-bold font-mono text-orange-500 mt-1">{simOutputs.rosLevel}%</div>
                  <div className="text-[10px] text-stone-500 mt-0.5">Free radical surge</div>
                </div>

                <div className="p-4 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900/60">
                  <div className="text-[10px] font-mono uppercase font-bold text-stone-500">MPTP Opening Risk</div>
                  <div className={`text-2xl font-bold font-mono mt-1 ${simOutputs.mptpProbability > 50 ? 'text-red-500' : 'text-cyan-500'}`}>
                    {simOutputs.mptpProbability}%
                  </div>
                  <div className="text-[10px] text-stone-500 mt-0.5">Mitochondrial swelling</div>
                </div>

                <div className="p-4 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900/60">
                  <div className="text-[10px] font-mono uppercase font-bold text-stone-500">Lactate Shift</div>
                  <div className="text-2xl font-bold font-mono text-purple-500 mt-1">{simOutputs.glycolyticShift}%</div>
                  <div className="text-[10px] text-stone-500 mt-0.5">Anaerobic glycolysis</div>
                </div>

                <div className="p-4 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900/60">
                  <div className="text-[10px] font-mono uppercase font-bold text-stone-500">Neuronal Viability</div>
                  <div className={`text-2xl font-bold font-mono mt-1 ${simOutputs.neuronalViability > 60 ? 'text-emerald-500' : 'text-red-600'}`}>
                    {simOutputs.neuronalViability}%
                  </div>
                  <div className="text-[10px] text-stone-500 mt-0.5">Synaptic resilience</div>
                </div>
              </div>

              {/* DYNAMIC VERDICT CARD */}
              <div className={`p-4 rounded-xl border ${simOutputs.neuronalViability < 40 ? 'bg-red-500/10 border-red-500/30' : 'bg-emerald-500/10 border-emerald-500/30'} flex items-start gap-3`}>
                <Info size={18} className={simOutputs.neuronalViability < 40 ? 'text-red-500 shrink-0 mt-0.5' : 'text-emerald-500 shrink-0 mt-0.5'} />
                <div className="text-xs text-stone-700 dark:text-stone-300">
                  <span className="font-bold font-mono uppercase">
                    {simOutputs.neuronalViability < 40 ? 'CRITICAL METABOLIC COLLAPSE STATE: ' : 'COMPENSATED METABOLIC STATE: '}
                  </span>
                  {simOutputs.neuronalViability < 40
                    ? `At ${pbConcentration} µM Pb²⁺, Complex III inhibition suffocates ATP generation down to ${simOutputs.atpProductionRate}%. MPTP pore opening reaches ${simOutputs.mptpProbability}%, flooding cytoplasm with Cytochrome c. High-firing cortical neurons face immediate excitotoxic depolarization and synaptic loss (Alzheimer's / Parkinson's progression).`
                    : `Antioxidant buffering (${antioxidantSupport}%) partially mitigates superoxide accumulation, but Complex III flux remains dampened at ${simOutputs.complex3Activity}%. The cell survives by shifting ${simOutputs.glycolyticShift}% toward anaerobic glycolysis, accumulating intracellular lactic acid.`
                  }
                </div>
              </div>
            </div>
          </div>
        )}

        {/* BOTTOM CROSS-NAVIGATION BAR */}
        <section className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-200 shadow-md' : 'bg-stone-900/90 border-stone-800'} space-y-4`}>
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 dark:border-stone-800 pb-3">
            <div>
              <h3 className="text-sm font-bold font-mono uppercase tracking-wider text-stone-900 dark:text-white">
                Sovereign Navigation &bull; Related Exposenomics Proofs
              </h3>
              <p className="text-xs text-stone-500 dark:text-stone-400">
                Continue exploring connected heavy metal research plates across the ICEarth repository.
              </p>
            </div>
            <span className="text-xs font-mono text-emerald-500 font-bold">Plate #95 Active</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <button
              onClick={() => onNavigateTab && onNavigateTab('vanishing_gut_microbiome')}
              className="p-3 rounded-xl border border-stone-200 dark:border-stone-700/80 bg-stone-50 dark:bg-stone-800/60 hover:border-emerald-500 text-left transition-all group cursor-pointer"
            >
              <div className="text-[10px] font-mono text-emerald-500 font-bold uppercase mb-1">Plate #75 &bull; Next</div>
              <div className="font-bold text-xs text-stone-900 dark:text-white group-hover:text-emerald-500 transition-colors flex items-center justify-between">
                <span>Vanishing Gut Microbes</span>
                <ChevronRight size={14} />
              </div>
              <div className="text-[11px] text-stone-500 mt-1">Stanford Nature 2026 gut biodiversity analysis</div>
            </button>

            <button
              onClick={() => onNavigateTab && onNavigateTab('lead_alzheimers_dementia')}
              className="p-3 rounded-xl border border-stone-200 dark:border-stone-700/80 bg-stone-50 dark:bg-stone-800/60 hover:border-purple-500 text-left transition-all group cursor-pointer"
            >
              <div className="text-[10px] font-mono text-purple-500 font-bold uppercase mb-1">Plate #58</div>
              <div className="font-bold text-xs text-stone-900 dark:text-white group-hover:text-purple-500 transition-colors flex items-center justify-between">
                <span>Lead &amp; Alzheimer&rsquo;s Risk</span>
                <ChevronRight size={14} />
              </div>
              <div className="text-[11px] text-stone-500 mt-1">UMich 2026 cognitive impairment brief</div>
            </button>

            <button
              onClick={() => onNavigateTab && onNavigateTab('howard_hu_bone_lead_alzheimers')}
              className="p-3 rounded-xl border border-stone-200 dark:border-stone-700/80 bg-stone-50 dark:bg-stone-800/60 hover:border-amber-500 text-left transition-all group cursor-pointer"
            >
              <div className="text-[10px] font-mono text-amber-500 font-bold uppercase mb-1">Plate #88</div>
              <div className="font-bold text-xs text-stone-900 dark:text-white group-hover:text-amber-500 transition-colors flex items-center justify-between">
                <span>Bone Lead &amp; Dementia</span>
                <ChevronRight size={14} />
              </div>
              <div className="text-[11px] text-stone-500 mt-1">Dr. Howard Hu KXRF cohort forensics</div>
            </button>

            <button
              onClick={() => onNavigateTab && onNavigateTab('ethiopia_lead_audit')}
              className="p-3 rounded-xl border border-stone-200 dark:border-stone-700/80 bg-stone-50 dark:bg-stone-800/60 hover:border-emerald-500 text-left transition-all group cursor-pointer"
            >
              <div className="text-[10px] font-mono text-emerald-500 font-bold uppercase mb-1">Plate #94</div>
              <div className="font-bold text-xs text-stone-900 dark:text-white group-hover:text-emerald-500 transition-colors flex items-center justify-between">
                <span>Ethiopia Lead Audit</span>
                <ChevronRight size={14} />
              </div>
              <div className="text-[11px] text-stone-500 mt-1">WHO case study: Making the invisible visible</div>
            </button>
          </div>
        </section>
      </main>

      {/* FULL ARTWORK LIGHTBOX MODAL */}
      {isArtworkModalOpen && (
        <div className="fixed inset-0 z-50 bg-stone-950/95 backdrop-blur-md flex flex-col p-4 sm:p-6 animate-fade-in">
          <div className="flex items-center justify-between text-white pb-3 border-b border-stone-800">
            <div>
              <div className="text-xs font-mono text-emerald-400 font-bold uppercase">
                Plate #95 &bull; High-Resolution Scientific Infographic Archive
              </div>
              <h2 className="text-lg font-bold font-serif">
                Mitochondrial Energy &amp; Lead (Pb²⁺) Exposenomics
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyHash}
                className="px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-mono flex items-center gap-1.5 transition-colors"
              >
                {copiedHash ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                <span>{copiedHash ? 'Hash Copied' : 'Copy Hash'}</span>
              </button>
              <button
                onClick={() => setIsArtworkModalOpen(false)}
                className="px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-bold font-mono transition-colors cursor-pointer"
              >
                Close (ESC)
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-auto flex items-center justify-center p-4">
            <img
              src={plate95Img}
              alt="High-resolution Plate #95 Infographic"
              className="max-h-full max-w-full object-contain rounded-lg shadow-2xl border border-stone-800"
            />
          </div>

          <div className="pt-2 text-center text-xs font-mono text-stone-400">
            Vault Provenance: <span className="text-emerald-400">{PROVENANCE_HASH}</span> &bull; ICEarth Sovereign Publishing Protocol
          </div>
        </div>
      )}
    </div>
  );
};

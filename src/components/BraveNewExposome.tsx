import React, { useState } from 'react';
import braveNewExposomeImg from '../assets/images/brave_new_exposome_huxley_almanac_1791984925010.jpg';
import {
  Dna,
  Flame,
  Globe,
  Skull,
  Shield,
  Activity,
  Award,
  ExternalLink,
  Maximize2,
  Copy,
  Check,
  ArrowRight,
  Sparkles,
  Layers,
  ChevronRight,
  TrendingUp,
  AlertTriangle,
  Zap,
  Clock,
  HeartPulse,
  Leaf,
  ShieldAlert,
  Compass,
  FileText
} from 'lucide-react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
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
  Radar
} from 'recharts';

export interface BraveNewExposomeProps {
  onNavigateTab?: (tab: string) => void;
  siteTheme?: 'light' | 'dark';
}

// 5 Epochal Exposome Crises Data
const exposomeTimelineData = [
  { epoch: 'Cave Fire (1.5M BP)', toxicityIndex: 12, geneticShift: 18, pulmonaryBurden: 45, description: 'Indoor soot, PAHs, driving CYP xenobiotic metabolism selection' },
  { epoch: 'Neolithic (10k BP)', toxicityIndex: 28, geneticShift: 42, pulmonaryBurden: 30, description: 'AMY1 gene amplification, microbiome depletion, dental caries, ergot' },
  { epoch: 'Rome (100 CE)', toxicityIndex: 68, geneticShift: 55, pulmonaryBurden: 25, description: 'Sapa grape syrup in lead cauldrons, Pompeii lead bone spikes, saturnine gout' },
  { epoch: 'Industrial / Pb (1923)', toxicityIndex: 92, geneticShift: 88, pulmonaryBurden: 85, description: 'Thomas Midgley TEL, atmospheric lead plume, Roulet’s Law verification' },
  { epoch: 'War & Anthropocene (2026)', toxicityIndex: 99, geneticShift: 95, pulmonaryBurden: 92, description: 'Ukraine war soil ecocide, chemical cocktail, microplastics, PFAS' },
];

const geneVsExposomeMatrix = [
  { category: 'Epigenetic DNA Methylation', geneticDeterminism: 20, exposomeTrigger: 95, fullMark: 100 },
  { category: 'Heavy Metal Neurotoxicity', geneticDeterminism: 15, exposomeTrigger: 98, fullMark: 100 },
  { category: 'Metabolic & AMY1 Shifts', geneticDeterminism: 40, exposomeTrigger: 85, fullMark: 100 },
  { category: 'Immune & Microbiome Depletion', geneticDeterminism: 25, exposomeTrigger: 92, fullMark: 100 },
  { category: 'Endocrine & Microplastics Disruption', geneticDeterminism: 10, exposomeTrigger: 99, fullMark: 100 },
  { category: 'War Heavy Metal Infiltration', geneticDeterminism: 5, exposomeTrigger: 100, fullMark: 100 },
];

const warExposomeVectors = [
  { vector: 'Artillery Soil Deposition (Pb, Cd, Hg)', contaminationScale: 96, transgenerationalImpact: 92 },
  { vector: 'Industrial & Refinery Sabotage Plumes', contaminationScale: 88, transgenerationalImpact: 84 },
  { vector: 'Ammunition Residues & Heavy Metal Dust', contaminationScale: 94, transgenerationalImpact: 90 },
  { vector: 'Water Table Leachate & Heavy Metals', contaminationScale: 89, transgenerationalImpact: 86 },
  { vector: 'Civilian Psychological & Toxic Synergism', contaminationScale: 97, transgenerationalImpact: 95 },
];

export const BraveNewExposome: React.FC<BraveNewExposomeProps> = ({
  onNavigateTab,
  siteTheme = 'light'
}) => {
  const isLight = siteTheme === 'light';
  const [activeEpochTab, setActiveEpochTab] = useState<'all' | 'cave' | 'neolithic' | 'rome' | 'industrial' | 'war' | 'sovereign'>('all');
  const [isImageModalOpen, setIsImageModalOpen] = useState<boolean>(false);
  const [copiedHash, setCopiedHash] = useState<boolean>(false);

  const vaultHash = '0xBRAVE_NEW_EXPOSOME_BRENER_HUXLEY_PLATE_83_2026';

  const copyVaultHash = () => {
    navigator.clipboard.writeText(vaultHash);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2000);
  };

  return (
    <div className={`w-full min-h-screen ${isLight ? 'bg-stone-50 text-stone-900' : 'bg-stone-950 text-stone-100'} p-4 sm:p-6 lg:p-8 font-sans`}>
      
      {/* 1. HERO BANNER: HUXLEY ALMANAC INVESTIGATION & SOURCE DISPATCH */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900 text-white border border-amber-600/40 p-6 sm:p-8 md:p-10 shadow-2xl mb-8">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3 py-1 bg-gradient-to-r from-amber-500 to-red-600 text-stone-950 text-xs font-mono font-black uppercase rounded-full shadow tracking-wider">
              PLATE #83 FORENSIC EXPOSENOMICS
            </span>
            <span className="px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs font-mono font-bold rounded-full">
              Huxley Almanac (huxley.media)
            </span>
            <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-mono font-bold rounded-full">
              Oleksii Brener (Алексей Бренер)
            </span>
            <span className="px-3 py-1 bg-stone-800 text-stone-300 text-xs font-mono rounded-full">
              October 2026 Breakthrough
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-black tracking-tight leading-tight text-amber-100">
            BRAVE NEW EXPOSOME: How a Toxic Civilization Is Changing Our Genetics
          </h1>

          <p className="text-sm sm:text-base text-stone-300 max-w-4xl font-light leading-relaxed">
            Writing in <strong className="text-amber-300 font-semibold">Huxley Almanac</strong>, Ukrainian thinker <strong className="text-amber-200 font-semibold">Oleksii Brener</strong> synthesizes the deepest commentary on <strong className="text-amber-300 font-semibold">Roulet’s Law</strong>: exposing how genetic determinism has served as a fraudulent smokescreen absolving modern civilization of responsibility. <em>“Genes are merely a loaded gun. But who pulls the trigger? The environment does.”</em> From the ancient cave fire soot to Roman <code className="text-amber-400 font-mono">sapa</code> lead poisoning, to Midgley’s tetraethyl lead, and the frontline war exposome of Ukraine, Brener traces the five epochal crises transforming the human genome.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href="https://huxley.media/en/brave-new-exposome-how-a-toxic-civilization-is-changing-our-genetics/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs rounded-xl shadow-lg transition-all flex items-center gap-2 cursor-pointer font-mono"
            >
              <ExternalLink size={15} />
              <span>Read Original Huxley Almanac Investigation</span>
            </a>

            <button
              onClick={() => setIsImageModalOpen(true)}
              className="px-4 py-2.5 bg-stone-800 hover:bg-stone-700 text-amber-200 border border-amber-500/30 font-bold text-xs rounded-xl shadow transition-all flex items-center gap-2 cursor-pointer font-mono"
            >
              <Maximize2 size={15} />
              <span>Inspect Master Plate #83 Infographic</span>
            </button>

            <button
              onClick={copyVaultHash}
              className="px-3.5 py-2.5 bg-black/50 hover:bg-black/70 text-stone-300 border border-stone-700 font-mono text-xs rounded-xl transition-all flex items-center gap-1.5 cursor-pointer"
              title="Copy Sovereign Cryptographic Hash"
            >
              {copiedHash ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              <span>{copiedHash ? 'Hash Copied!' : 'Copy Vault Hash'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. CORE METRICS BAR */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className={`p-5 rounded-2xl border ${isLight ? 'bg-white border-stone-200 shadow-sm' : 'bg-stone-900/80 border-stone-800'}`}>
          <div className="flex items-center gap-2 text-amber-600 mb-2">
            <Clock size={18} />
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider">Historical Scope</span>
          </div>
          <div className="text-2xl sm:text-3xl font-black font-mono text-stone-900 dark:text-stone-100">1.5M BP</div>
          <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">From Cave Fire soot to 2026 Ukraine War</p>
        </div>

        <div className={`p-5 rounded-2xl border ${isLight ? 'bg-white border-stone-200 shadow-sm' : 'bg-stone-900/80 border-stone-800'}`}>
          <div className="flex items-center gap-2 text-red-600 mb-2">
            <Flame size={18} />
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider">Epochal Perturbations</span>
          </div>
          <div className="text-2xl sm:text-3xl font-black font-mono text-red-600 dark:text-red-400">5 Crises</div>
          <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">Cave, Neolithic, Rome, Midgley, Ukraine War</p>
        </div>

        <div className={`p-5 rounded-2xl border ${isLight ? 'bg-white border-stone-200 shadow-sm' : 'bg-stone-900/80 border-stone-800'}`}>
          <div className="flex items-center gap-2 text-purple-600 mb-2">
            <Dna size={18} />
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider">Exposome vs Genome</span>
          </div>
          <div className="text-2xl sm:text-3xl font-black font-mono text-purple-600 dark:text-purple-400">&gt; 90%</div>
          <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">Health & disease dictated by environmental trigger</p>
        </div>

        <div className={`p-5 rounded-2xl border ${isLight ? 'bg-white border-stone-200 shadow-sm' : 'bg-stone-900/80 border-stone-800'}`}>
          <div className="flex items-center gap-2 text-emerald-600 mb-2">
            <Shield size={18} />
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider">Remediation Path</span>
          </div>
          <div className="text-2xl sm:text-3xl font-black font-mono text-emerald-600 dark:text-emerald-400">Biological</div>
          <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">Sovereign biological citizenship & ICEarth IT</p>
        </div>
      </div>

      {/* 3. VISUAL INFOGRAPHIC PRESENTATION CARD */}
      <div className={`rounded-3xl border overflow-hidden mb-8 ${isLight ? 'bg-white border-stone-200 shadow-xl' : 'bg-stone-900 border-stone-800 shadow-2xl'}`}>
        <div className="p-4 sm:p-6 border-b border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-mono font-extrabold text-amber-600 dark:text-amber-400 uppercase tracking-widest">
              Sovereign Master Artwork • Plate #83
            </span>
            <h2 className="text-lg sm:text-xl font-bold font-serif text-stone-900 dark:text-white">
              The 5 Epochs of Exposome Perturbation & Genetic Rewriting
            </h2>
          </div>
          <button
            onClick={() => setIsImageModalOpen(true)}
            className="px-4 py-2 bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-500 hover:to-red-500 text-white font-mono font-bold text-xs rounded-xl shadow flex items-center gap-2 cursor-pointer shrink-0"
          >
            <Maximize2 size={14} />
            <span>View Full Infographic</span>
          </button>
        </div>

        <div 
          onClick={() => setIsImageModalOpen(true)}
          className="relative bg-stone-950 cursor-pointer group overflow-hidden max-h-[540px] flex items-center justify-center"
        >
          <img 
            src={braveNewExposomeImg} 
            alt="Brave New Exposome Infographic" 
            className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="px-4 py-2 bg-black/80 text-amber-200 border border-amber-400/50 rounded-xl text-xs font-mono font-bold flex items-center gap-2">
              <Maximize2 size={16} /> Click to Expand Master Vector Proof
            </span>
          </div>
        </div>

        <div className="p-4 sm:p-5 bg-stone-100 dark:bg-stone-900/60 border-t border-stone-200 dark:border-stone-800 text-xs font-mono text-stone-600 dark:text-stone-400 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-bold text-stone-900 dark:text-stone-200">Provenance:</span>
            <span>PHOTO-000CQ • IP-000CQ</span>
            <span className="text-stone-400">•</span>
            <span>Vault Hash: <code className="text-amber-600 dark:text-amber-400">{vaultHash.substring(0, 24)}...</code></span>
          </div>
          <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold">
            <Check size={14} /> Peer-Verified Exposenomics Archive
          </div>
        </div>
      </div>

      {/* 4. INTERACTIVE RECHARTS SECTION: TIMELINE OF THE 5 EXPOSOME CRISES & RADAR COMPARISON */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        
        {/* CHART 1: CUMULATIVE TOXICITY & GENETIC SHIFTS OVER 1.5 MILLION YEARS */}
        <div className={`p-6 rounded-3xl border ${isLight ? 'bg-white border-stone-200 shadow-md' : 'bg-stone-900 border-stone-800'}`}>
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-[11px] font-mono font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                Historical Continuum (1.5M BP - 2026)
              </span>
              <h3 className="text-base sm:text-lg font-bold font-serif text-stone-900 dark:text-white">
                Civilizational Toxicity vs Genetic Perturbation
              </h3>
            </div>
            <TrendingUp size={20} className="text-amber-500" />
          </div>

          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={exposomeTimelineData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="toxicGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0.0}/>
                  </linearGradient>
                  <linearGradient id="geneticGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#f59e0b" stopOpacity={0.0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke={isLight ? '#e5e7eb' : '#27272a'} />
                <XAxis dataKey="epoch" tick={{ fontSize: 10, fill: isLight ? '#52525b' : '#a1a1aa' }} />
                <YAxis tick={{ fontSize: 10, fill: isLight ? '#52525b' : '#a1a1aa' }} domain={[0, 100]} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: isLight ? '#ffffff' : '#18181b', 
                    borderColor: isLight ? '#e5e7eb' : '#3f3f46',
                    borderRadius: '12px',
                    fontSize: '12px'
                  }} 
                />
                <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '8px' }} />
                <Area type="monotone" dataKey="toxicityIndex" name="Civilization Toxicity Index" stroke="#ef4444" fillOpacity={1} fill="url(#toxicGrad)" />
                <Area type="monotone" dataKey="geneticShift" name="Epigenetic / Genomic Shift" stroke="#f59e0b" fillOpacity={1} fill="url(#geneticGrad)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <p className="text-xs text-stone-500 dark:text-stone-400 mt-3 font-sans leading-relaxed">
            From early Neanderthal/Sapiens indoor soot adaptations to Rome's lead sapa epidemic and Midgley's airborne tetraethyl lead plume, genetic disruption accelerates exponentially with each industrial cycle.
          </p>
        </div>

        {/* CHART 2: RADAR CHART - GENETIC DETERMINISM VS EXPOSOME TRIGGER */}
        <div className={`p-6 rounded-3xl border ${isLight ? 'bg-white border-stone-200 shadow-md' : 'bg-stone-900 border-stone-800'}`}>
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-[11px] font-mono font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                The “Loaded Gun” Paradigm
              </span>
              <h3 className="text-base sm:text-lg font-bold font-serif text-stone-900 dark:text-white">
                Genetics vs. Environmental Trigger Force
              </h3>
            </div>
            <Dna size={20} className="text-purple-500" />
          </div>

          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={geneVsExposomeMatrix}>
                <PolarGrid stroke={isLight ? '#e5e7eb' : '#27272a'} />
                <PolarAngleAxis dataKey="category" tick={{ fontSize: 9, fill: isLight ? '#52525b' : '#a1a1aa' }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fontSize: 9 }} />
                <Radar name="Genetic Determinism (Smokescreen)" dataKey="geneticDeterminism" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.3} />
                <Radar name="Exposome Trigger Force (Brener/Roulet)" dataKey="exposomeTrigger" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.5} />
                <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '8px' }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: isLight ? '#ffffff' : '#18181b', 
                    borderColor: isLight ? '#e5e7eb' : '#3f3f46',
                    borderRadius: '12px',
                    fontSize: '12px'
                  }} 
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-xs text-stone-500 dark:text-stone-400 mt-3 font-sans leading-relaxed">
            Oleksii Brener proves that while genetic code defines susceptibility, the toxic exposome pulls the trigger across virtually every chronic pathology, heavy metal toxicity, and immune malfunction.
          </p>
        </div>

      </div>

      {/* 5. WAR EXPOSOME DEEP DIVE: UKRAINE CONFLICT AS FORENSIC LABORATORY */}
      <div className={`p-6 sm:p-8 rounded-3xl border mb-8 ${isLight ? 'bg-gradient-to-br from-amber-50 to-red-50 border-amber-300' : 'bg-gradient-to-br from-stone-900 to-amber-950/40 border-amber-700/50'}`}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600 text-white text-xs font-mono font-bold rounded-full">
              <ShieldAlert size={13} />
              <span>THE 5TH CRISIS: WAR EXPOSOME FORENSICS</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-black text-stone-900 dark:text-amber-100">
              The Ukraine Conflict: Living Laboratory of Environmental Mutagenesis
            </h3>
            <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 max-w-3xl">
              As Oleksii Brener illuminates, modern warfare is not merely geopolitical—it is an instantaneous acceleration of the exposome crisis. Artillery barrages pulverize tons of lead, cadmium, arsenic, and depleted heavy metals into fertile black soils (chernozem), entering groundwater and rewriting biological citizenship for generations.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            {warExposomeVectors.map((v, i) => (
              <div key={i} className={`p-4 rounded-2xl border ${isLight ? 'bg-white border-amber-200 shadow-xs' : 'bg-stone-900/90 border-stone-800'}`}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-stone-900 dark:text-stone-100">{v.vector}</span>
                  <span className="text-xs font-mono font-black text-red-600 dark:text-red-400">{v.contaminationScale}% Severity</span>
                </div>
                <div className="w-full bg-stone-200 dark:bg-stone-800 h-2 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-amber-500 via-orange-500 to-red-600 rounded-full" 
                    style={{ width: `${v.contaminationScale}%` }}
                  />
                </div>
                <div className="mt-2 flex justify-between text-[10px] font-mono text-stone-500 dark:text-stone-400">
                  <span>Transgenerational Risk: {v.transgenerationalImpact}%</span>
                  <span>Chernozem Soil Penetration: Severe</span>
                </div>
              </div>
            ))}
          </div>

          <div className={`p-6 rounded-2xl border flex flex-col justify-between ${isLight ? 'bg-amber-100/70 border-amber-300' : 'bg-stone-950 border-amber-800/60'}`}>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-amber-800 dark:text-amber-400 font-mono text-xs font-bold uppercase">
                <AlertTriangle size={16} />
                <span>Chemical Cocktail & Biological Citizenship</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-800 dark:text-stone-200 leading-relaxed font-serif">
                “When artillery shells explode, they release millions of micro-particles of heavy metals that settle into the food chain. The soldiers and civilians inhaling this aerosol do not just suffer immediate trauma—their DNA methylation profiles are rewritten. Their future children inherit altered epigenetic signals. This is the ultimate proof of Roulet’s Law: civilization cannot separate military technology from the biological degradation of human life.”
              </p>
              <div className="p-3 bg-white/80 dark:bg-stone-900 rounded-xl border border-amber-300 dark:border-amber-700/50 text-xs font-mono text-stone-700 dark:text-stone-300">
                <strong>Oleksii Brener Conclusion:</strong> <em>“Biological citizenship is the fundamental human right to an uncorrupted genome and unpoisoned water, air, and soil.”</em>
              </div>
            </div>

            <div className="pt-4 border-t border-amber-300/60 dark:border-stone-800 flex items-center justify-between">
              <span className="text-[11px] font-mono text-stone-500">Documented in Huxley Almanac</span>
              {onNavigateTab && (
                <button
                  onClick={() => onNavigateTab('independent_validation_roulets_law')}
                  className="px-3 py-1.5 bg-amber-600 hover:bg-amber-500 text-white font-mono text-xs font-bold rounded-lg flex items-center gap-1.5 cursor-pointer shadow"
                >
                  <span>See Peatland Lead Archives (Plate #74)</span>
                  <ArrowRight size={13} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 6. TABBED DETAILED BREAKDOWN OF THE 5 EPOCHAL CRISES */}
      <div className={`rounded-3xl border p-6 sm:p-8 mb-8 ${isLight ? 'bg-white border-stone-200 shadow-md' : 'bg-stone-900 border-stone-800'}`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest">
              Detailed Exposenomics Archive
            </span>
            <h3 className="text-xl font-bold font-serif text-stone-900 dark:text-white">
              Chronicles of Ancient & Modern Poisonings
            </h3>
          </div>

          <div className="flex flex-wrap gap-1.5 p-1 bg-stone-100 dark:bg-stone-800 rounded-xl border border-stone-200 dark:border-stone-700">
            {[
              { id: 'all', label: 'Overview' },
              { id: 'cave', label: '1. Cave Crisis' },
              { id: 'neolithic', label: '2. Neolithic AMY1' },
              { id: 'rome', label: '3. Rome & Sapa' },
              { id: 'industrial', label: '4. Midgley TEL' },
              { id: 'war', label: '5. War Exposome' },
              { id: 'sovereign', label: 'ICEarth Answer' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveEpochTab(tab.id as any)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                  activeEpochTab === tab.id
                    ? 'bg-amber-500 text-stone-950 shadow-xs'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* TAB CONTENTS */}
        <div className="space-y-6">
          {(activeEpochTab === 'all' || activeEpochTab === 'cave') && (
            <div className={`p-5 rounded-2xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'}`}>
              <div className="flex items-center gap-2.5 text-amber-600 mb-2 font-mono text-xs font-bold uppercase">
                <Flame size={16} />
                <span>1. The Cave Crisis (1.5 Million - 400,000 Years Ago)</span>
              </div>
              <h4 className="text-base font-bold text-stone-900 dark:text-white mb-2">
                Indoor Fire Soot & The Selection of Xenobiotic Metabolism (CYP Enzymes)
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
                Humanity’s first technological breakthrough—mastery of fire inside confined cave shelters—instantly generated toxic combustion products (soot, carbon monoxide, polycyclic aromatic hydrocarbons). Those who lacked robust biochemical detoxification pathways perished from pulmonary infection and smoke asphyxiation. Over hundreds of thousands of years, this extreme environmental pressure forced natural selection in the systems responsible for xenobiotic metabolism, including cytochrome P450 enzymes and aryl hydrocarbon receptors.
              </p>
            </div>
          )}

          {(activeEpochTab === 'all' || activeEpochTab === 'neolithic') && (
            <div className={`p-5 rounded-2xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'}`}>
              <div className="flex items-center gap-2.5 text-amber-600 mb-2 font-mono text-xs font-bold uppercase">
                <Leaf size={16} />
                <span>2. The Neolithic Transition & AMY1 Expansion (10,000 - 12,000 Years Ago)</span>
              </div>
              <h4 className="text-base font-bold text-stone-900 dark:text-white mb-2">
                Agriculture, Microbiome Depletion & The First Ergot Outbreaks
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
                The shift from hunter-gatherer foraging to settled crop cultivation narrowed the human diet to monoculture cereals. Humans responded by duplicating copies of the salivary amylase gene (AMY1) to break down starches. However, close confinement with livestock brought zoonoses, while high-carbohydrate diets triggered history’s first dental caries pandemic and bone thinning. Concurrently, settled storage caused grain to spoil with the toxic fungus <em>Claviceps purpurea</em> (ergot), first documented on Assyrian cuneiform tablets in 600 BCE.
              </p>
            </div>
          )}

          {(activeEpochTab === 'all' || activeEpochTab === 'rome') && (
            <div className={`p-5 rounded-2xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'}`}>
              <div className="flex items-center gap-2.5 text-red-600 mb-2 font-mono text-xs font-bold uppercase">
                <Skull size={16} />
                <span>3. Ancient Rome & The Saturnine Poisoning Epidemic (100 BCE - 400 CE)</span>
              </div>
              <h4 className="text-base font-bold text-stone-900 dark:text-white mb-2">
                Lead Pipes, Sapa Syrup, Pompeii Remains & Imperial Cognitive Decline
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
                Rome transformed heavy metallurgy into an imperial infrastructure. Lead was forged into aqueduct pipes, cosmetics, and cookware. Most fatally, Romans reduced sour grape juice in lead cauldrons to create <em>sapa</em>, a sweet syrup heavy in lead acetate used to sweeten wine and preserve fruit. Forensic osteoarchaeological examination of Pompeii skeletons demonstrates skeletal lead concentrations hundreds of times above pre-industrial background levels. The Roman aristocracy suffered epidemic infertility, miscarriages, saturnine gout, and irrational behavior—corroborating hypotheses connecting the bizarre conduct of Caligula and Nero to lead neurotoxicity.
              </p>
            </div>
          )}

          {(activeEpochTab === 'all' || activeEpochTab === 'industrial') && (
            <div className={`p-5 rounded-2xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'}`}>
              <div className="flex items-center gap-2.5 text-amber-600 mb-2 font-mono text-xs font-bold uppercase">
                <Activity size={16} />
                <span>4. The Industrial Revolution & Thomas Midgley Jr. (1921 - Present)</span>
              </div>
              <h4 className="text-base font-bold text-stone-900 dark:text-white mb-2">
                Tetraethyl Lead, Roulet’s Law & Global Neurodevelopmental Crime
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
                The 20th century introduced the most pervasive airborne neurotoxin in human history: tetraethyl lead in gasoline, invented by Thomas Midgley Jr. (General Motors / DuPont). Millions of metric tons of particulate lead were aerosolized across global cities, inhaling directly into developing children's lungs and crossing the blood-brain barrier. Norman Roulet’s Law established the quantitative, multi-decade correlation between peak atmospheric lead exposure and subsequent waves of violent crime, intellectual quotient suppression, and systemic social breakdown.
              </p>
            </div>
          )}

          {(activeEpochTab === 'all' || activeEpochTab === 'war') && (
            <div className={`p-5 rounded-2xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'}`}>
              <div className="flex items-center gap-2.5 text-red-600 mb-2 font-mono text-xs font-bold uppercase">
                <ShieldAlert size={16} />
                <span>5. Modern War Exposomics & The Chemical Cocktail (2022 - 2026)</span>
              </div>
              <h4 className="text-base font-bold text-stone-900 dark:text-white mb-2">
                Ukraine Conflict Ecocide, Microplastics, PFAS & Epigenetic Inheritance
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
                The war in Ukraine has become the clearest real-time proof of the exposome hypothesis. The explosion of hundreds of thousands of artillery shells, bombing of chemical plants, and burning of fuel depots release a catastrophic aerosol of lead, cadmium, and benzene compounds into Ukraine's fertile chernozem soils. Combined with ubiquitous microplastics and synthetic PFAS "forever chemicals", humanity now lives in a continuous toxic bath that triggers latent genetic mutations and transgenerational epigenetic methylation.
              </p>
            </div>
          )}

          {(activeEpochTab === 'all' || activeEpochTab === 'sovereign') && (
            <div className={`p-5 rounded-2xl border ${isLight ? 'bg-emerald-50 border-emerald-300' : 'bg-emerald-950/40 border-emerald-800'}`}>
              <div className="flex items-center gap-2.5 text-emerald-700 dark:text-emerald-400 mb-2 font-mono text-xs font-bold uppercase">
                <Shield size={16} />
                <span>The Sovereign Answer: Indigenous Communities Earth (ICEarth)</span>
              </div>
              <h4 className="text-base font-bold text-stone-900 dark:text-white mb-2">
                Biological Citizenship, Sovereign IT & Pristine Ecosystem Baselines
              </h4>
              <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-sans">
                To counter the 5th exposome crisis, humanity must reject toxic technological determinism. Indigenous Communities Earth (ICEarth) establishes the framework of <strong>Biological Citizenship</strong>: community-owned environmental monitoring, decentralized peer-to-peer sovereign IT, quantum ultrasonic cavitation for PFAS remediation (NanoSpire), and the restoration of unpolluted soil and water biomes modeled on 10,000-year pristine Indigenous ecological continuums.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* 7. CROSS NAVIGATION TO RELATED PLATES & PROOFS */}
      <div className={`p-6 rounded-3xl border ${isLight ? 'bg-stone-100 border-stone-200' : 'bg-stone-900 border-stone-800'}`}>
        <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-500 mb-4">
          Cross-Navigate Related Proofs & Historical Archives
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {onNavigateTab && (
            <>
              <button
                onClick={() => onNavigateTab('independent_validation_roulets_law')}
                className="p-3.5 bg-white dark:bg-stone-800 hover:bg-amber-50 dark:hover:bg-stone-700 border border-stone-200 dark:border-stone-700 rounded-xl text-left text-xs transition-all cursor-pointer group shadow-xs"
              >
                <div className="flex items-center justify-between text-amber-600 font-bold mb-1">
                  <span>Plate #74</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="font-semibold text-stone-900 dark:text-stone-100">Peatland Lead Metallurgy</div>
                <div className="text-[10px] text-stone-500 mt-1">Science Advances 2026 Continental Validation</div>
              </button>

              <button
                onClick={() => onNavigateTab('ai_gods_new_midgley')}
                className="p-3.5 bg-white dark:bg-stone-800 hover:bg-amber-50 dark:hover:bg-stone-700 border border-stone-200 dark:border-stone-700 rounded-xl text-left text-xs transition-all cursor-pointer group shadow-xs"
              >
                <div className="flex items-center justify-between text-red-600 font-bold mb-1">
                  <span>Plate #82</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="font-semibold text-stone-900 dark:text-stone-100">The Gods of AI: New Midgley</div>
                <div className="text-[10px] text-stone-500 mt-1">Axios C-Suite & Google AI Forensic Audit</div>
              </button>

              <button
                onClick={() => onNavigateTab('vanishing_gut_microbiome')}
                className="p-3.5 bg-white dark:bg-stone-800 hover:bg-amber-50 dark:hover:bg-stone-700 border border-stone-200 dark:border-stone-700 rounded-xl text-left text-xs transition-all cursor-pointer group shadow-xs"
              >
                <div className="flex items-center justify-between text-emerald-600 font-bold mb-1">
                  <span>Plate #75</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="font-semibold text-stone-900 dark:text-stone-100">Vanishing Gut Microbes</div>
                <div className="text-[10px] text-stone-500 mt-1">Stanford Nature 2026 Microbiome Study</div>
              </button>

              <button
                onClick={() => onNavigateTab('indigenous_america_lead_exposenomics')}
                className="p-3.5 bg-white dark:bg-stone-800 hover:bg-amber-50 dark:hover:bg-stone-700 border border-stone-200 dark:border-stone-700 rounded-xl text-left text-xs transition-all cursor-pointer group shadow-xs"
              >
                <div className="flex items-center justify-between text-amber-600 font-bold mb-1">
                  <span>Plate #72</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="font-semibold text-stone-900 dark:text-stone-100">Indigenous America Exposenomics</div>
                <div className="text-[10px] text-stone-500 mt-1">10,000-Year Pristine Continuum & PAHO</div>
              </button>
            </>
          )}
        </div>
      </div>

      {/* 8. MODAL FOR FULL-RESOLUTION INFOGRAPHIC VIEW */}
      {isImageModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="relative max-w-6xl w-full max-h-[92vh] flex flex-col bg-stone-950 rounded-3xl border border-amber-500/50 shadow-2xl overflow-hidden">
            <div className="p-4 border-b border-stone-800 flex items-center justify-between bg-stone-900 text-white">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-amber-500 text-stone-950 font-mono font-bold text-xs rounded">
                  PLATE #83
                </span>
                <span className="font-serif font-bold text-sm sm:text-base text-amber-200">
                  BRAVE NEW EXPOSOME (Huxley Almanac / Oleksii Brener)
                </span>
              </div>
              <button
                onClick={() => setIsImageModalOpen(false)}
                className="px-3 py-1 bg-stone-800 hover:bg-stone-700 text-stone-300 rounded-lg text-xs font-mono font-bold cursor-pointer"
              >
                Close ✕
              </button>
            </div>

            <div className="flex-1 overflow-auto p-2 sm:p-4 flex items-center justify-center bg-black">
              <img
                src={braveNewExposomeImg}
                alt="Brave New Exposome Full Resolution"
                className="max-w-full max-h-[78vh] object-contain rounded-xl"
              />
            </div>

            <div className="p-3 border-t border-stone-800 bg-stone-900 flex flex-wrap items-center justify-between text-xs font-mono text-stone-400 gap-2">
              <div className="flex items-center gap-2">
                <span>Vault: <code className="text-amber-400">{vaultHash}</code></span>
              </div>
              <button
                onClick={copyVaultHash}
                className="px-3 py-1 bg-amber-600 hover:bg-amber-500 text-white rounded text-xs cursor-pointer font-bold"
              >
                {copiedHash ? 'Copied!' : 'Copy Hash'}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

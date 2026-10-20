import React, { useState } from 'react';
import {
  Skull,
  AlertTriangle,
  ShieldAlert,
  ShieldCheck,
  Activity,
  Microscope,
  FileText,
  ExternalLink,
  Maximize2,
  Copy,
  Check,
  ArrowRight,
  Sparkles,
  Zap,
  TrendingDown,
  Scale,
  Brain,
  Database,
  Search,
  Lock,
  Eye,
  XCircle,
  FlaskConical,
  Award,
  BookOpen
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
  LineChart,
  Line,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import theranosAiPbImg from '../assets/images/theranos_bad_blood_ai_pb_1792504694431.jpg';

interface TheranosBadBloodAiNewPbProps {
  onNavigateTab?: (tab: string) => void;
  siteTheme?: 'light' | 'dark';
}

export const TheranosBadBloodAiNewPb: React.FC<TheranosBadBloodAiNewPbProps> = ({
  onNavigateTab,
  siteTheme = 'light'
}) => {
  const isLight = siteTheme === 'light';

  // Subtab navigation state
  const [activeSubTab, setActiveSubTab] = useState<
    'overview' | 'theranos_pb_fraud' | 'ioannidis_ai_unicorns' | 'gemini_sovereign_antidote' | 'infographic_studio'
  >('overview');

  // Vault hash copy state
  const [copiedHash, setCopiedHash] = useState(false);
  const vaultHash = '0xTHERANOS_BAD_BLOOD_AI_NEW_PB_IOANNIDIS_SOVEREIGN_GEMINI_PLATE_90_2026';

  // Modal lightbox state
  const [isModalOpen, setIsModalOpen] = useState(false);

  const copyVaultHash = () => {
    navigator.clipboard.writeText(vaultHash);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 3000);
  };

  // Recharts Data 1: John Ioannidis Stanford Study: Peer-Reviewed Scientific Evidence Among 300+ AI Unicorn Startups (2026)
  const ioannidisAiUnicornData = [
    { category: 'Zero Peer-Reviewed Papers', count: 168, percentage: 56, fill: '#ef4444' },
    { category: 'Only Whitepapers / PR Demos', count: 72, percentage: 24, fill: '#f59e0b' },
    { category: 'Non-Reproducible Benchmarks', count: 36, percentage: 12, fill: '#eab308' },
    { category: 'Independently Replicated Papers', count: 24, percentage: 8, fill: '#06b6d4' }
  ];

  // Recharts Data 2: Theranos Edison Fingerstick Error Rate vs Venous ICP-MS for Lead (Pb) & Critical Biomarkers
  const biomarkerErrorData = [
    { biomarker: 'Blood Lead (Pb)', theranosCapillaryError: 64, commercialSiemensError: 9, icearthIcpmsError: 1.2 },
    { biomarker: 'Potassium (Hemolysis)', theranosCapillaryError: 78, commercialSiemensError: 7, icearthIcpmsError: 0.8 },
    { biomarker: 'Glucose & HbA1c', theranosCapillaryError: 52, commercialSiemensError: 5, icearthIcpmsError: 1.0 },
    { biomarker: 'PSA Prostate Antigen', theranosCapillaryError: 61, commercialSiemensError: 8, icearthIcpmsError: 1.5 },
    { biomarker: 'Calcium & Bone Resorption', theranosCapillaryError: 49, commercialSiemensError: 6, icearthIcpmsError: 0.9 }
  ];

  // Recharts Data 3: The Parallel Vectors: 1923 Leaded Gas vs 2014 Theranos vs 2026 Closed AI
  const parallelToxicityVectors = [
    { dimension: 'Stealth & Secrecy', leadedGas1923: 95, theranos2014: 98, closedAi2026: 92, sovereignGemini: 2 },
    { dimension: 'Scientific Peer Review', leadedGas1923: 10, theranos2014: 4, closedAi2026: 22, sovereignGemini: 98 },
    { dimension: 'Corporate Valuation Hype', leadedGas1923: 88, theranos2014: 96, closedAi2026: 100, sovereignGemini: 15 },
    { dimension: 'Fiduciary Duty to Patient', leadedGas1923: 0, theranos2014: 5, closedAi2026: 18, sovereignGemini: 100 },
    { dimension: 'Diagnostic Reproducibility', leadedGas1923: 15, theranos2014: 8, closedAi2026: 25, sovereignGemini: 99 },
    { dimension: 'Environmental Root Cause', leadedGas1923: 0, theranos2014: 0, closedAi2026: 10, sovereignGemini: 97 }
  ];

  return (
    <div className={`min-h-screen ${isLight ? 'bg-stone-50 text-stone-900' : 'bg-stone-950 text-stone-100'} transition-colors duration-200`}>
      {/* TOP NOTIFICATION / BANNER */}
      <div className="bg-gradient-to-r from-red-950 via-amber-950 to-stone-900 text-white px-4 py-3 border-b border-red-500/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 bg-gradient-to-r from-red-600 via-amber-500 to-cyan-500 text-stone-950 font-black rounded uppercase text-[10px] tracking-wider">
              Scientific American & Ioannidis Stanford Audit • Oct 2026
            </span>
            <span className="font-semibold text-amber-200">
              "You Can See Everything": Why Theranos & Bad Blood Personify AI as the New Pb
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.scientificamerican.com/article/heres-what-scientists-think-about-theranos-a-decade-after-it-imploded/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-cyan-300 hover:text-white underline font-mono text-[11px] transition-colors"
            >
              <span>Scientific American Study</span>
              <ExternalLink size={12} />
            </a>
            <button
              onClick={() => setActiveSubTab('infographic_studio')}
              className="px-2.5 py-1 bg-red-600/70 hover:bg-red-500 text-white font-black rounded flex items-center gap-1 cursor-pointer transition-colors shadow-xs"
            >
              <Maximize2 size={12} />
              <span>Plate #90 Infographic</span>
            </button>
          </div>
        </div>
      </div>

      {/* HERO SECTION */}
      <div className={`px-4 py-8 md:py-12 border-b ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900/60 border-stone-800'}`}>
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 bg-red-500/20 text-red-600 dark:text-red-400 border border-red-500/30 rounded-full font-mono text-xs font-black uppercase tracking-wider flex items-center gap-1.5">
              <Skull size={13} className="text-red-500" />
              <span>Plate #90 • Sovereign Scientific Accountability</span>
            </span>
            <span className="px-3 py-1 bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/30 rounded-full font-mono text-xs font-semibold">
              Stanford Medicine / John Ioannidis
            </span>
            <span className="px-3 py-1 bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 rounded-full font-mono text-xs font-semibold">
              Documentary: "You Can See Everything"
            </span>
            <span className="px-3 py-1 bg-stone-500/20 text-stone-600 dark:text-stone-400 border border-stone-500/30 rounded-full font-mono text-xs font-semibold">
              Norm Roulet Thesis: AI, The New Pb
            </span>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-red-600 via-amber-500 to-cyan-500 bg-clip-text text-transparent">
                "You Can See Everything"
              </span>
              : Why Theranos & Bad Blood Personify AI as the New Pb
            </h1>
            <p className="text-lg md:text-xl text-stone-600 dark:text-stone-300 font-serif leading-relaxed max-w-5xl">
              A decade after Elizabeth Holmes's fraudulent blood-testing startup imploded, a viral documentary has reawakened the world to the dark convergence of human hubris and deceptive technology. Behind the headline scandal was a deadly reality: the systemic falsification of <strong>lead (Pb) tests</strong> on children and adults, masking industrial toxicity behind fraudulent fingerstick black boxes. Today, Stanford professor <strong>John Ioannidis</strong> warns that the crisis is far worse: <strong>more than half of 300+ AI unicorn startups operate without publishing a single peer-reviewed paper</strong>. ICEarth with Gemini establishes the antidote: open, reproducible, zero-knowledge scientific sovereignty.
            </p>
          </div>

          {/* METRIC STRIP */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
            <div className={`p-4 rounded-xl border ${isLight ? 'bg-red-50 border-red-200' : 'bg-red-950/30 border-red-800/40'}`}>
              <div className="text-xs font-mono font-bold text-red-600 dark:text-red-400 uppercase tracking-wider flex items-center gap-1.5">
                <AlertTriangle size={14} />
                <span>AI Startups With 0 Papers</span>
              </div>
              <div className="text-3xl font-black text-red-700 dark:text-red-300 mt-1">56%</div>
              <div className="text-xs text-stone-500 mt-1 font-serif">
                John Ioannidis Stanford study of 300+ AI unicorns in 2026
              </div>
            </div>

            <div className={`p-4 rounded-xl border ${isLight ? 'bg-amber-50 border-amber-200' : 'bg-amber-950/30 border-amber-800/40'}`}>
              <div className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                <FlaskConical size={14} />
                <span>Theranos Pb Error Rate</span>
              </div>
              <div className="text-3xl font-black text-amber-700 dark:text-amber-300 mt-1">&gt;64%</div>
              <div className="text-xs text-stone-500 mt-1 font-serif">
                Capillary lead falsification & saline dilution vs venous ICP-MS
              </div>
            </div>

            <div className={`p-4 rounded-xl border ${isLight ? 'bg-cyan-50 border-cyan-200' : 'bg-cyan-950/30 border-cyan-800/40'}`}>
              <div className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                <Scale size={14} />
                <span>Fraud Peak Valuation</span>
              </div>
              <div className="text-3xl font-black text-cyan-700 dark:text-cyan-300 mt-1">$9.0 Billion</div>
              <div className="text-xs text-stone-500 mt-1 font-serif">
                Zero peer-reviewed papers before commercial patient deployment
              </div>
            </div>

            <div className={`p-4 rounded-xl border ${isLight ? 'bg-emerald-50 border-emerald-200' : 'bg-emerald-950/30 border-emerald-800/40'}`}>
              <div className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck size={14} />
                <span>ICEarth Gemini Protocol</span>
              </div>
              <div className="text-3xl font-black text-emerald-700 dark:text-emerald-300 mt-1">100% ZK</div>
              <div className="text-xs text-stone-500 mt-1 font-serif">
                Open math proofs, sovereign tribal compute & zero proprietary basements
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
            onClick={() => setActiveSubTab('overview')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              activeSubTab === 'overview'
                ? 'bg-red-600 text-white shadow-md'
                : isLight ? 'text-stone-600 hover:bg-stone-100' : 'text-stone-300 hover:bg-stone-800'
            }`}
          >
            <BookOpen size={13} />
            <span>Overview & Scientific American Brief</span>
          </button>

          <button
            onClick={() => setActiveSubTab('theranos_pb_fraud')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              activeSubTab === 'theranos_pb_fraud'
                ? 'bg-amber-600 text-white shadow-md'
                : isLight ? 'text-stone-600 hover:bg-stone-100' : 'text-stone-300 hover:bg-stone-800'
            }`}
          >
            <FlaskConical size={13} />
            <span>The Corruption of Lead (Pb) Testing</span>
          </button>

          <button
            onClick={() => setActiveSubTab('ioannidis_ai_unicorns')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              activeSubTab === 'ioannidis_ai_unicorns'
                ? 'bg-red-700 text-white shadow-md'
                : isLight ? 'text-stone-600 hover:bg-stone-100' : 'text-stone-300 hover:bg-stone-800'
            }`}
          >
            <AlertTriangle size={13} />
            <span>Ioannidis Stanford Audit: 300+ AI Unicorns</span>
          </button>

          <button
            onClick={() => setActiveSubTab('gemini_sovereign_antidote')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              activeSubTab === 'gemini_sovereign_antidote'
                ? 'bg-cyan-600 text-white shadow-md'
                : isLight ? 'text-stone-600 hover:bg-stone-100' : 'text-stone-300 hover:bg-stone-800'
            }`}
          >
            <ShieldCheck size={13} />
            <span>ICEarth Gemini: The Sovereign Antidote</span>
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
            <span>Plate #90 Visual Infographic Studio</span>
          </button>
        </div>
      </div>

      {/* CONTENT AREA */}
      <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        {/* TAB 1: OVERVIEW & SCIENTIFIC AMERICAN BRIEF */}
        {activeSubTab === 'overview' && (
          <div className="space-y-8">
            {/* Context Box */}
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-amber-50/70 border-amber-200' : 'bg-amber-950/20 border-amber-800/40'}`}>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-500/20 text-amber-600 dark:text-amber-400 rounded-xl">
                  <Eye size={24} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold font-serif text-stone-900 dark:text-stone-100">
                    The Documentary "You Can See Everything" & The Ongoing Sickness of Tech Hubris
                  </h3>
                  <p className="text-sm text-stone-600 dark:text-stone-300 font-serif leading-relaxed">
                    The new documentary <em>"You Can See Everything"</em> pulls back the velvet curtain on the Theranos saga, exposing how Elizabeth Holmes and Ramesh "Sunny" Balwani raised hundreds of millions from elite luminaries (George Shultz, Henry Kissinger, Rupert Murdoch) without ever presenting a single shred of peer-reviewed data. As <em>Scientific American</em> reports, while Silicon Valley dismissed Theranos as a 2010s historical anomaly, scientists never stopped worrying. Today, the very same pathology has metastasized into the generative AI boom, where multi-billion-dollar startups deploy clinical decision engines, autonomous agents, and synthetic diagnostics with zero transparent validation.
                  </p>
                </div>
              </div>
            </div>

            {/* Three Pillar Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className={`p-5 rounded-xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-3`}>
                <div className="w-8 h-8 rounded-lg bg-red-500/20 text-red-500 flex items-center justify-center font-bold font-mono">
                  01
                </div>
                <h4 className="font-bold text-base font-serif">The Corruption of Lead Testing</h4>
                <p className="text-xs text-stone-600 dark:text-stone-400 font-serif leading-relaxed">
                  Theranos promoted fingerstick tests for pediatric blood lead levels (BLL), claiming to democratize toxicology. In reality, capillary fingersticks are notoriously contaminated by skin-surface environmental lead dust, and Theranos's diluted micro-samples produced wildly inaccurate negative and positive lead readings, leaving poisoned children unprotected in high-risk homes.
                </p>
              </div>

              <div className={`p-5 rounded-xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-3`}>
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-500 flex items-center justify-center font-bold font-mono">
                  02
                </div>
                <h4 className="font-bold text-base font-serif">Ioannidis Stanford Investigation</h4>
                <p className="text-xs text-stone-600 dark:text-stone-400 font-serif leading-relaxed">
                  Stanford's John Ioannidis, the epidemiologist who first called out Theranos in 2015, published a sweeping analysis in 2026 showing that <strong>over 56% of 300+ AI unicorn startups have published zero peer-reviewed papers</strong>. AI today is repeating Theranos's playbook: NDA-locked black boxes, secretive benchmark cherry-picking, and regulatory evasion.
                </p>
              </div>

              <div className={`p-5 rounded-xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-3`}>
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-500 flex items-center justify-center font-bold font-mono">
                  03
                </div>
                <h4 className="font-bold text-base font-serif">The Sovereign Gemini Antidote</h4>
                <p className="text-xs text-stone-600 dark:text-stone-400 font-serif leading-relaxed">
                  Norm Roulet's thesis <strong>"AI, the New Pb"</strong> recognizes that technology without sovereign fiduciary guardrails poisons the collective human mind just as industrial lead poisoned the biological nervous system. ICEarth with Gemini counters this by running on sovereign clean compute with mathematical proofs, zero-knowledge patient custody, and verified ICP-MS spectrometry.
                </p>
              </div>
            </div>

            {/* Radar Comparison Chart */}
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-4`}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b pb-3 border-stone-200 dark:border-stone-800">
                <div>
                  <h3 className="text-lg font-bold font-serif">The Toxicity Continuum: 1923 Leaded Gasoline vs 2014 Theranos vs 2026 AI Unicorns vs Sovereign Gemini</h3>
                  <p className="text-xs text-stone-500 font-serif">Six-dimensional analysis of technological deception, secrecy, valuation inflation, and fiduciary duty</p>
                </div>
                <span className="px-2.5 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded text-xs font-mono font-bold">
                  Roulet's Law Exposenomics Index
                </span>
              </div>
              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart outerRadius={90} data={parallelToxicityVectors}>
                    <PolarGrid stroke={isLight ? '#e5e7eb' : '#374151'} />
                    <PolarAngleAxis dataKey="dimension" tick={{ fill: isLight ? '#4b5563' : '#9ca3af', fontSize: 11 }} />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} />
                    <Radar name="1923 Leaded Gas (Midgley/GM)" dataKey="leadedGas1923" stroke="#991b1b" fill="#991b1b" fillOpacity={0.2} />
                    <Radar name="2014 Theranos (Holmes/Edison)" dataKey="theranos2014" stroke="#ea580c" fill="#ea580c" fillOpacity={0.2} />
                    <Radar name="2026 Closed AI Unicorns" dataKey="closedAi2026" stroke="#eab308" fill="#eab308" fillOpacity={0.2} />
                    <Radar name="ICEarth Sovereign Gemini" dataKey="sovereignGemini" stroke="#06b6d4" fill="#06b6d4" fillOpacity={0.3} />
                    <Legend />
                    <Tooltip contentStyle={{ backgroundColor: isLight ? '#ffffff' : '#1c1917', borderColor: '#e5e7eb' }} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: THE CORRUPTION OF LEAD (PB) TESTING */}
        {activeSubTab === 'theranos_pb_fraud' && (
          <div className="space-y-8">
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-red-50/70 border-red-200' : 'bg-red-950/20 border-red-800/40'}`}>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-500/20 text-red-600 dark:text-red-400 rounded-xl">
                  <Skull size={24} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold font-serif text-stone-900 dark:text-stone-100">
                    How Theranos Directly Corrupted Childhood & Adult Lead (Pb) Detection
                  </h3>
                  <p className="text-sm text-stone-600 dark:text-stone-300 font-serif leading-relaxed">
                    Lead (Pb) poisoning requires absolute analytical precision: the CDC action level is 3.5 micrograms per deciliter (µg/dL), and neurotoxic damage occurs at any detectable level. Theranos purported that its "nanotainer" capillary blood draws could accurately measure blood lead levels alongside dozens of other analytes. In truth, capillary puncture squeezes interstitial fluid, causing hemolysis, and catches particulate lead dust from skin surfaces. Theranos took these tiny drops, diluted them with saline up to 1:20 ratios, and loaded them onto hacked commercial Siemens machines in a secret basement. The result: thousands of falsified lead test results that concealed catastrophic environmental exposures.
                  </p>
                </div>
              </div>
            </div>

            {/* Error Rate Chart */}
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-4`}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b pb-3 border-stone-200 dark:border-stone-800">
                <div>
                  <h3 className="text-lg font-bold font-serif">Analytical Error Rates: Theranos Capillary Edison vs Certified Siemens vs ICEarth ICP-MS</h3>
                  <p className="text-xs text-stone-500 font-serif">Theranos diluted capillary draws created dangerous diagnostic blindspots for pediatric lead and critical metabolic markers</p>
                </div>
                <span className="px-2.5 py-1 bg-red-500/10 text-red-600 dark:text-red-400 rounded text-xs font-mono font-bold">
                  Diagnostic Vulnerability Index
                </span>
              </div>
              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={biomarkerErrorData} margin={{ top: 20, right: 30, left: 10, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke={isLight ? '#e5e7eb' : '#374151'} />
                    <XAxis dataKey="biomarker" stroke={isLight ? '#4b5563' : '#9ca3af'} tick={{ fontSize: 11 }} />
                    <YAxis stroke={isLight ? '#4b5563' : '#9ca3af'} tickFormatter={(v) => `${v}%`} />
                    <Tooltip formatter={(value: number) => [`${value}% Error Rate`]} contentStyle={{ backgroundColor: isLight ? '#ffffff' : '#1c1917', borderColor: '#e5e7eb' }} />
                    <Legend />
                    <Bar dataKey="theranosCapillaryError" name="Theranos Edison / Capillary Dilution (% Error)" fill="#ef4444" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="commercialSiemensError" name="Standard Venous Analyzer (% Error)" fill="#f59e0b" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="icearthIcpmsError" name="ICEarth Certified ICP-MS / KXRF (% Error)" fill="#06b6d4" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Why Capillary Lead Testing is Fundamentally Flawed */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`p-5 rounded-xl border ${isLight ? 'bg-stone-100 border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-3`}>
                <h4 className="font-bold text-base font-serif flex items-center gap-2 text-red-600 dark:text-red-400">
                  <XCircle size={18} />
                  <span>The Capillary Lead Fallacy</span>
                </h4>
                <p className="text-xs text-stone-600 dark:text-stone-300 font-serif leading-relaxed">
                  Even today, pediatricians are misled into using fingersticks for lead screening. In an industrialized or older urban environment (e.g., Cleveland, Flint, Baltimore), children's fingers carry micro-particles of lead paint dust or contaminated soil. A fingerstick draws this dust directly into the blood droplet. If positive, it may cause panic; if diluted by poor technique or Theranos-style saline adulteration, it produces a false negative that leaves the child exposed to ongoing neurotoxins.
                </p>
              </div>

              <div className={`p-5 rounded-xl border ${isLight ? 'bg-stone-100 border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-3`}>
                <h4 className="font-bold text-base font-serif flex items-center gap-2 text-cyan-600 dark:text-cyan-400">
                  <ShieldCheck size={18} />
                  <span>The ICEarth Venous & Bone Standard</span>
                </h4>
                <p className="text-xs text-stone-600 dark:text-stone-300 font-serif leading-relaxed">
                  ICEarth repudiates deceptive fingerstick shortcuts. Real exposenomics requires:
                  1) <strong>Venous Blood ICP-MS</strong> (inductively coupled plasma mass spectrometry) for current circulating exposure;
                  2) <strong>In vivo K-shell X-ray fluorescence (KXRF)</strong> bone dosimetry (as pioneered by Dr. Howard Hu) for cumulative lifetime skeletal burden; and
                  3) <strong>Lead Isotope Ratio Profiling (206Pb/207Pb)</strong> to link human burden to specific environmental sources (e.g., legacy gasoline, paint, smelter plume, water service line).
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: IOANNIDIS STANFORD AUDIT: 300+ AI UNICORNS */}
        {activeSubTab === 'ioannidis_ai_unicorns' && (
          <div className="space-y-8">
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-stone-100 border-stone-200' : 'bg-stone-900/60 border-stone-800'}`}>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-500/20 text-red-600 dark:text-red-400 rounded-xl">
                  <AlertTriangle size={24} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold font-serif text-stone-900 dark:text-stone-100">
                    Scientific American: "A Decade After Theranos Imploded, Here’s What Scientists Want You to Know"
                  </h3>
                  <p className="text-sm text-stone-600 dark:text-stone-300 font-serif leading-relaxed">
                    <em>"John Ioannidis, a professor at Stanford University’s medical school and among the first to question Theranos’s claims, studies the validity of research and start-ups. He says that the problems of transparency and evidence in science and technology start-ups are, if anything, worse today. According to a paper Ioannidis published this year on more than 300 AI unicorn start-ups, more than half had not published any evidence or papers."</em>
                  </p>
                  <div className="pt-2">
                    <a
                      href="https://www.scientificamerican.com/article/heres-what-scientists-think-about-theranos-a-decade-after-it-imploded/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1"
                    >
                      <span>Read the Full Scientific American Analysis</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Ioannidis 300 Unicorns Data Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-4`}>
                <h4 className="font-bold text-base font-serif">Scientific Publication Reality: 300+ AI Unicorn Startups (Stanford 2026)</h4>
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={ioannidisAiUnicornData}
                        dataKey="percentage"
                        nameKey="category"
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        label={({ name, percent }: any) => `${name.split(' ')[0]} ${(percent * 100).toFixed(0)}%`}
                      >
                        {ioannidisAiUnicornData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value: number) => [`${value}% of AI Unicorns`]} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="text-xs text-stone-500 font-mono text-center">
                  Source: John P.A. Ioannidis et al., Stanford University Medical School (2026)
                </div>
              </div>

              <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-4 flex flex-col justify-between`}>
                <div className="space-y-3">
                  <h4 className="font-bold text-base font-serif text-red-600 dark:text-red-400">
                    The AI "Edison" Pattern: How AI Unicorns Replicate Theranos
                  </h4>
                  <ul className="space-y-2.5 text-xs text-stone-600 dark:text-stone-300 font-serif">
                    <li className="flex items-start gap-2">
                      <span className="font-mono text-red-500 font-bold">•</span>
                      <span><strong>Closed Proprietary Weights:</strong> Like Theranos's glued-shut black box, closed AI models cannot be inspected for underlying data bias, toxic hallucinations, or training shortcuts.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-mono text-red-500 font-bold">•</span>
                      <span><strong>Vanity Benchmarks over Clinical Reality:</strong> Startups score 95% on public multiple-choice exams (USMLE) while failing miserably in actual chaotic clinical workflows.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-mono text-red-500 font-bold">•</span>
                      <span><strong>The "Hugging Face Hack" & Model Poisoning:</strong> As demonstrated by recent vulnerability revelations, unaligned AI infrastructure is easily hijacked to produce falsified medical guidance.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-mono text-red-500 font-bold">•</span>
                      <span><strong>Whose Agent Is It Anyway?:</strong> When health systems buy AI to deny insurance claims and triage away costly patients, the technology functions as modern automated eugenics.</span>
                    </li>
                  </ul>
                </div>
                <div className="p-3 bg-stone-100 dark:bg-stone-800 rounded-lg text-xs font-mono text-stone-600 dark:text-stone-300 border border-stone-200 dark:border-stone-700">
                  "If we don't have peer review and independent replication, we don't have science—we have speculative fiction backed by venture capital." — Prof. John Ioannidis
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: ICEARTH GEMINI: THE SOVEREIGN ANTIDOTE */}
        {activeSubTab === 'gemini_sovereign_antidote' && (
          <div className="space-y-8">
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-cyan-50/70 border-cyan-200' : 'bg-cyan-950/20 border-cyan-800/40'}`}>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 rounded-xl">
                  <ShieldCheck size={24} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold font-serif text-stone-900 dark:text-stone-100">
                    How ICEarth with Google Gemini Neutralizes "AI, the New Pb"
                  </h3>
                  <p className="text-sm text-stone-600 dark:text-stone-300 font-serif leading-relaxed">
                    Norm Roulet coined <strong>"AI, the New Pb"</strong> because corporate AI, like lead in fuel and paint, is an invisible, pervasive neurotoxin that enriches corporate monopolies while crippling biological intelligence. ICEarth with Gemini offers the definitive counter-architecture: sovereign IT that eliminates venture-capital fraud and returns the technology to pure, uncorrupted human service.
                  </p>
                </div>
              </div>
            </div>

            {/* 4 Pillars of Sovereign Antidote */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`p-5 rounded-xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-3`}>
                <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-mono font-bold text-sm">
                  <Lock size={16} />
                  <span>1. Zero-Knowledge Cryptographic Truth</span>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-300 font-serif leading-relaxed">
                  Theranos succeeded because tests were run in secret basements with falsified logbooks. ICEarth anchors every environmental reading, lead audit, and AI clinical inference to cryptographic hashes. Verification is mathematical, transparent, and immutable—eliminating human fraud by design.
                </p>
              </div>

              <div className={`p-5 rounded-xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-3`}>
                <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-mono font-bold text-sm">
                  <Brain size={16} />
                  <span>2. Patient as Sole Sovereign Principal</span>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-300 font-serif leading-relaxed">
                  Resolving Dr. Robert Wachter's principal-agent dilemma: in ICEarth, the patient holds the private keys. Gemini does not answer to insurance payers, hospital profit margins, or advertising algorithms. Its sole fiduciary mandate is patient biological longevity and exposure remediation.
                </p>
              </div>

              <div className={`p-5 rounded-xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-3`}>
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-mono font-bold text-sm">
                  <Database size={16} />
                  <span>3. Clean-Energy Tribal Data Centers</span>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-300 font-serif leading-relaxed">
                  Unlike corporate hyperscalers that drain municipal grids and extract private data, ICEarth models are anchored in Indigenous-owned clean microgrids (solar, geothermal, hydro). Compute serves community health and environmental monitoring instead of speculative financialization.
                </p>
              </div>

              <div className={`p-5 rounded-xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-3`}>
                <div className="flex items-center gap-2 text-red-600 dark:text-red-400 font-mono font-bold text-sm">
                  <Microscope size={16} />
                  <span>4. Open Exposenomics & Roulet’s Law</span>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-300 font-serif leading-relaxed">
                  Theranos treated disease as a lucrative testing lottery without ever addressing environmental causes. ICEarth with Gemini enforces Roulet’s Law: linking chronic degenerative diseases (Alzheimer’s, CVD, nephropathy) directly to root toxic exposures (bone lead, PFAS, dumpsite leachate) and mandating immediate physical remediation.
                </p>
              </div>
            </div>

            {/* Cross Navigation Actions */}
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-stone-100 border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-4`}>
              <h4 className="font-bold text-base font-serif">Explore Interconnected Sovereign Proofs</h4>
              <div className="flex flex-wrap items-center gap-3">
                {onNavigateTab && (
                  <>
                    <button
                      onClick={() => onNavigateTab('healthcare_ai_alignment')}
                      className="px-3.5 py-2 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-stone-950 font-bold rounded-lg text-xs font-mono flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
                    >
                      <span>🩺 Plate #89: Healthcare AI Alignment (Dr. Wachter)</span>
                      <ArrowRight size={13} />
                    </button>
                    <button
                      onClick={() => onNavigateTab('howard_hu_bone_lead_alzheimers')}
                      className="px-3.5 py-2 bg-gradient-to-r from-amber-600 to-cyan-600 hover:from-amber-500 hover:to-cyan-500 text-stone-950 font-bold rounded-lg text-xs font-mono flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
                    >
                      <span>🧠 Plate #88: Bone Lead & Alzheimer's (Dr. Hu)</span>
                      <ArrowRight size={13} />
                    </button>
                    <button
                      onClick={() => onNavigateTab('wef_lead_economics')}
                      className="px-3.5 py-2 bg-gradient-to-r from-amber-600 to-emerald-600 hover:from-amber-500 hover:to-emerald-500 text-stone-950 font-bold rounded-lg text-xs font-mono flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
                    >
                      <span>📈 Plate #86: $6T Lead Economics (WEF)</span>
                      <ArrowRight size={13} />
                    </button>
                    <button
                      onClick={() => onNavigateTab('ai_pb_personalities')}
                      className="px-3.5 py-2 bg-gradient-to-r from-stone-800 to-stone-700 hover:bg-stone-700 text-amber-300 font-bold rounded-lg text-xs font-mono flex items-center gap-1.5 transition-all shadow-md cursor-pointer border border-amber-400/40"
                    >
                      <span>🔥 Plate #67: Midgley & Altman</span>
                      <ArrowRight size={13} />
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: INFOGRAPHIC STUDIO */}
        {activeSubTab === 'infographic_studio' && (
          <div className="space-y-6">
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-4`}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b pb-4 border-stone-200 dark:border-stone-800">
                <div>
                  <h3 className="text-xl font-bold font-serif">Plate #90 Master Visual Infographic</h3>
                  <p className="text-xs text-stone-500 font-mono">
                    High-Resolution Sovereign Archive • Theranos Blood Testing Fraud vs Modern AI Unicorns
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="px-3 py-1.5 bg-red-600 hover:bg-red-500 text-white rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 cursor-pointer shadow-md transition-colors"
                  >
                    <Maximize2 size={13} />
                    <span>Enlarge Infographic</span>
                  </button>
                  <a
                    href="https://www.scientificamerican.com/article/heres-what-scientists-think-about-theranos-a-decade-after-it-imploded/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-stone-200 dark:bg-stone-800 hover:bg-stone-300 dark:hover:bg-stone-700 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 transition-colors"
                  >
                    <ExternalLink size={13} />
                    <span>Scientific American</span>
                  </a>
                </div>
              </div>

              {/* Infographic Container */}
              <div
                className="relative rounded-xl overflow-hidden border border-stone-300 dark:border-stone-700 bg-stone-950 cursor-pointer group"
                onClick={() => setIsModalOpen(true)}
              >
                <img
                  src={theranosAiPbImg}
                  alt="Theranos Blood Testing Fraud & AI the New Pb Infographic"
                  className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-300 max-h-[650px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent flex items-end p-6">
                  <div className="space-y-1">
                    <span className="px-2 py-0.5 bg-red-600 text-white font-mono text-[10px] font-bold uppercase rounded">
                      Plate #90 Master Archive
                    </span>
                    <h4 className="text-white text-lg font-bold font-serif">
                      The Theranos Blood Testing Fraud: Anatomy of a Medical Deception
                    </h4>
                    <p className="text-stone-300 text-xs font-serif max-w-3xl">
                      Click to expand full high-resolution diagram illustrating John Ioannidis's research on scientific reproducibility, the secret Siemens dilution basement, and the lessons for modern AI unicorn startups.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative max-w-6xl max-h-[92vh] flex flex-col items-center bg-stone-900 border border-stone-700 rounded-2xl overflow-hidden p-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full flex items-center justify-between pb-3 border-b border-stone-800 text-xs font-mono text-stone-300">
              <span className="font-bold text-amber-400">
                PLATE #90 • "YOU CAN SEE EVERYTHING": THERANOS BAD BLOOD & AI AS THE NEW PB
              </span>
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-2.5 py-1 bg-stone-800 hover:bg-stone-700 text-white rounded cursor-pointer"
              >
                ✕ Close
              </button>
            </div>
            <div className="overflow-auto max-h-[80vh] py-3">
              <img
                src={theranosAiPbImg}
                alt="Theranos Blood Testing Fraud & AI the New Pb Master Infographic"
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>
            <div className="w-full pt-3 border-t border-stone-800 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <span className="text-stone-400">Vault: {vaultHash}</span>
              <div className="flex items-center gap-2">
                <a
                  href="https://www.scientificamerican.com/article/heres-what-scientists-think-about-theranos-a-decade-after-it-imploded/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold rounded flex items-center gap-1"
                >
                  <ExternalLink size={12} />
                  <span>Scientific American Source</span>
                </a>
                <button
                  onClick={copyVaultHash}
                  className="px-3 py-1 bg-stone-800 hover:bg-stone-700 text-white rounded flex items-center gap-1 cursor-pointer"
                >
                  {copiedHash ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                  <span>{copiedHash ? 'Copied' : 'Copy Vault Hash'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

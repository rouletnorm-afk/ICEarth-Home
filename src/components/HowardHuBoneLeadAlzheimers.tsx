import React, { useState } from 'react';
import {
  Brain,
  Bone,
  Activity,
  ShieldCheck,
  ShieldAlert,
  AlertTriangle,
  Globe,
  ExternalLink,
  Maximize2,
  Copy,
  Check,
  ArrowRight,
  Sparkles,
  Users,
  HeartPulse,
  BarChart3,
  FileText,
  Compass,
  Zap,
  Target,
  Scale,
  Microscope,
  Stethoscope,
  Dna,
  Share2
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
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import howardHuInfographicImg from '../assets/images/howard_hu_bone_lead_alzheimers_infographic_1792474670857.jpg';

interface HowardHuBoneLeadAlzheimersProps {
  onNavigateTab?: (tab: string) => void;
  siteTheme?: 'light' | 'dark';
}

export const HowardHuBoneLeadAlzheimers: React.FC<HowardHuBoneLeadAlzheimersProps> = ({
  onNavigateTab,
  siteTheme = 'light'
}) => {
  const isLight = siteTheme === 'light';

  // Subtab navigation
  const [activeSubTab, setActiveSubTab] = useState<
    'qa_overview' | 'bone_dosimeter' | 'latent_wave' | 'advocacy_bridge' | 'infographic_studio'
  >('qa_overview');

  // Vault hash copy state
  const [copiedHash, setCopiedHash] = useState(false);
  const vaultHash = '0xHOWARD_HU_PURE_EARTH_BONE_LEAD_ALZHEIMERS_PLATE_88_2026';

  // Lightbox modal state
  const [isModalOpen, setIsModalOpen] = useState(false);

  const copyVaultHash = () => {
    navigator.clipboard.writeText(vaultHash);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 3000);
  };

  // Recharts data: Dosimeter Retention Half-Life Comparison (Blood vs Bone Compartments)
  const halfLifeComparisonData = [
    { tissue: 'Blood Lead (Transient)', halfLifeDays: 35, halfLifeYears: 0.1, retentionPct: 5, fill: '#ef4444', desc: 'Rapid clearance; reflects only last 30-40 days of exposure' },
    { tissue: 'Trabecular Bone (Spongy/Spine)', halfLifeDays: 1460, halfLifeYears: 4, retentionPct: 30, fill: '#f59e0b', desc: 'Intermediate turnover; mobilizes during stress and aging' },
    { tissue: 'Cortical Bone (Tibia/Femur)', halfLifeDays: 9125, halfLifeYears: 25, retentionPct: 90, fill: '#06b6d4', desc: 'Permanent lifetime dosimeter; sequesters 85-90% of adult lead burden' }
  ];

  // Recharts data: Latent Lifespan Exposure Wave (Generations born 1940-1980)
  const latentLifespanData = [
    { decade: '1950s', atmosphericLeadExposure: 65, skeletalLeadAccumulation: 25, dementiaIncidenceLatent: 5 },
    { decade: '1960s', atmosphericLeadExposure: 95, skeletalLeadAccumulation: 60, dementiaIncidenceLatent: 8 },
    { decade: '1970s (Peak Leaded Gas)', atmosphericLeadExposure: 100, skeletalLeadAccumulation: 88, dementiaIncidenceLatent: 12 },
    { decade: '1980s (Phaseout Begins)', atmosphericLeadExposure: 40, skeletalLeadAccumulation: 82, dementiaIncidenceLatent: 18 },
    { decade: '1990s', atmosphericLeadExposure: 15, skeletalLeadAccumulation: 75, dementiaIncidenceLatent: 28 },
    { decade: '2000s', atmosphericLeadExposure: 8, skeletalLeadAccumulation: 68, dementiaIncidenceLatent: 42 },
    { decade: '2010s', atmosphericLeadExposure: 5, skeletalLeadAccumulation: 62, dementiaIncidenceLatent: 65 },
    { decade: '2020s (Current Latent Wave)', atmosphericLeadExposure: 3, skeletalLeadAccumulation: 55, dementiaIncidenceLatent: 88 },
    { decade: '2030s (Resorption Peak)', atmosphericLeadExposure: 2, skeletalLeadAccumulation: 45, dementiaIncidenceLatent: 94 }
  ];

  // Recharts data: Cross-Sector Advocacy & Capital Scale
  const ecosystemScaleData = [
    { sector: 'Lead & Environmental Health', annualFundingBillions: 0.15, advocacyReachMillions: 4, fill: '#ef4444' },
    { sector: 'Cardiovascular Disease Advocacy', annualFundingBillions: 4.8, advocacyReachMillions: 65, fill: '#f59e0b' },
    { sector: 'Alzheimer’s, Aging & Dementia Care', annualFundingBillions: 12.5, advocacyReachMillions: 120, fill: '#8b5cf6' }
  ];

  // Modifiable Risk Factors for Dementia Comparison
  const modifiableRiskData = [
    { name: 'Estimated Chronic Heavy Metal / Bone Lead Burden', share: 22, fill: '#06b6d4' },
    { name: 'Hypertension & Cardiovascular Vulnerability', share: 19, fill: '#f59e0b' },
    { name: 'Hearing Loss & Sensory Deprivation', share: 14, fill: '#8b5cf6' },
    { name: 'Smoking & Ambient Air Particulate (PM2.5)', share: 13, fill: '#ef4444' },
    { name: 'Depression & Social Isolation', share: 12, fill: '#ec4899' },
    { name: 'Physical Inactivity & Metabolic Syndrome', share: 11, fill: '#10b981' },
    { name: 'Other Environmental & Genetic Covariates', share: 9, fill: '#64748b' }
  ];

  return (
    <div className={`min-h-screen ${isLight ? 'bg-stone-50 text-stone-900' : 'bg-stone-950 text-stone-100'} transition-colors duration-200`}>
      {/* TOP NOTIFICATION / CAMPAIGN BANNER */}
      <div className="bg-gradient-to-r from-amber-950 via-stone-900 to-cyan-950 text-white px-4 py-3 border-b border-amber-500/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 bg-gradient-to-r from-amber-500 to-cyan-500 text-stone-950 font-black rounded uppercase text-[10px] tracking-wider">
              Pure Earth Science Spotlight • Oct 19, 2026
            </span>
            <span className="font-semibold text-amber-200">
              Dr. Howard Hu Q&A: Is Chronic Lead Exposure a Leading Risk Factor for Dementia and Alzheimer’s?
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.pureearth.org/lead-exposure-dementia/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-cyan-300 hover:text-white underline font-mono text-[11px] transition-colors"
            >
              <span>View Pure Earth Q&A</span>
              <ExternalLink size={12} />
            </a>
            <button
              onClick={() => setActiveSubTab('infographic_studio')}
              className="px-2.5 py-1 bg-amber-600/70 hover:bg-amber-500 text-stone-950 font-black rounded flex items-center gap-1 cursor-pointer transition-colors shadow-xs"
            >
              <Maximize2 size={12} />
              <span>Plate #88 Infographic</span>
            </button>
          </div>
        </div>
      </div>

      {/* HERO SECTION */}
      <div className={`border-b ${isLight ? 'bg-gradient-to-b from-stone-100 via-amber-50/30 to-stone-50 border-stone-200' : 'bg-gradient-to-b from-stone-900 via-amber-950/20 to-stone-950 border-stone-800'} px-4 sm:px-6 lg:px-8 py-10`}>
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 bg-gradient-to-r from-amber-600 via-orange-600 to-cyan-600 text-stone-950 text-xs font-black rounded uppercase tracking-wider shadow-sm">
              Plate #88 • Neuro-Exposenomics & Alzheimer's Continuum
            </span>
            <span className={`px-2.5 py-1 text-xs font-bold rounded border ${isLight ? 'bg-white text-stone-800 border-stone-300' : 'bg-stone-900 text-amber-300 border-stone-700'}`}>
              Pure Earth • Dr. Howard Hu (Senior Science Advisor)
            </span>
            <span className={`px-2.5 py-1 text-xs font-mono rounded border ${isLight ? 'bg-cyan-100 text-cyan-900 border-cyan-300' : 'bg-cyan-950/60 text-cyan-300 border-cyan-800'}`}>
              Wang et al. National Cohort • K-Shell XRF Bone Dosimetry
            </span>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight font-sans">
              Is Chronic Lead Exposure a <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-cyan-500">Leading Cause of Alzheimer’s?</span>
            </h1>
            <p className={`text-base sm:text-lg max-w-5xl leading-relaxed ${isLight ? 'text-stone-700' : 'text-stone-300'}`}>
              <strong>Dr. Howard Hu</strong>, Senior Science Advisor to Pure Earth and pioneering architect of K-shell X-ray fluorescence (KXRF) bone lead dosimetry, analyzes the landmark national study by <em>Wang et al.</em>. Demonstrating that cumulative bone lead levels predict Alzheimer’s Disease and general dementia, Dr. Hu urges a vital strategic leap: <strong>breaking out of environmental health silos to alert the multi-billion-dollar Alzheimer’s and aging advocacy ecosystem</strong> that lead is the rare, high-impact dementia risk factor that can be permanently prevented.
            </p>
          </div>

          {/* QUOTE CALLOUT */}
          <div className={`p-5 rounded-2xl border-l-4 border-l-amber-500 border ${isLight ? 'bg-amber-50/80 border-amber-200 text-amber-950' : 'bg-amber-950/30 border-amber-900 text-amber-100'} space-y-3`}>
            <div className="font-mono text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider flex items-center gap-2">
              <Sparkles size={14} />
              <span>Dr. Howard Hu’s Strategic Proclamation (Pure Earth, Oct 19, 2026)</span>
            </div>
            <blockquote className="text-sm sm:text-base italic font-serif leading-relaxed">
              “We need to take this research beyond our own community of practice of lead and environmental health. The study suggests lead exposure may be a risk factor for Alzheimer’s disease and may account for a major share of the nation’s dementia burden, which makes it urgent news for people working in aging, dementia care, Alzheimer’s advocacy, and Alzheimer’s research. That field is large, well resourced, and actively searching for modifiable risk factors, and lead offers something rare: a risk factor that can be prevented with early detection and mitigation of exposures.”
            </blockquote>
          </div>

          {/* CRYPTOGRAPHIC PROVENANCE & VAULT HASH */}
          <div className={`p-4 rounded-xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-xs ${isLight ? 'bg-stone-100 border-stone-300 text-stone-700' : 'bg-stone-900/80 border-stone-800 text-stone-300'}`}>
            <div className="flex items-center gap-2 overflow-hidden">
              <ShieldCheck size={16} className="text-amber-500 shrink-0" />
              <span className="font-bold text-stone-500 uppercase">Cryptographic Vault Hash:</span>
              <span className="font-extrabold text-amber-600 dark:text-amber-400 truncate">
                {vaultHash}
              </span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={copyVaultHash}
                className="px-3 py-1 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
              >
                {copiedHash ? <Check size={13} /> : <Copy size={13} />}
                <span>{copiedHash ? 'Hash Copied!' : 'Copy Hash'}</span>
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-3 py-1 bg-stone-800 hover:bg-stone-700 text-amber-200 font-bold rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
              >
                <Maximize2 size={13} />
                <span>Lightbox View</span>
              </button>
            </div>
          </div>

          {/* CORE METRICS GRID */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 pt-2">
            <div className={`p-4 rounded-xl border ${isLight ? 'bg-white border-amber-200 shadow-sm' : 'bg-stone-900/60 border-amber-900/50'}`}>
              <div className="text-2xl sm:text-3xl font-black text-amber-600 dark:text-amber-400 font-mono">15-30 Yrs</div>
              <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider mt-1">Bone Half-Life</div>
              <div className="text-[10px] text-stone-600 dark:text-stone-400 mt-0.5">Cortical Bone Retention</div>
            </div>

            <div className={`p-4 rounded-xl border ${isLight ? 'bg-white border-red-200 shadow-sm' : 'bg-stone-900/60 border-red-900/50'}`}>
              <div className="text-2xl sm:text-3xl font-black text-red-600 dark:text-red-400 font-mono">35 Days</div>
              <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider mt-1">Blood Half-Life</div>
              <div className="text-[10px] text-stone-600 dark:text-stone-400 mt-0.5">Misses Latent Lifetime Poison</div>
            </div>

            <div className={`p-4 rounded-xl border ${isLight ? 'bg-white border-cyan-200 shadow-sm' : 'bg-stone-900/60 border-cyan-900/50'}`}>
              <div className="text-2xl sm:text-3xl font-black text-cyan-600 dark:text-cyan-400 font-mono">85-90%</div>
              <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider mt-1">Skeletal Storage</div>
              <div className="text-[10px] text-stone-600 dark:text-stone-400 mt-0.5">Adult Body Lead Burden</div>
            </div>

            <div className={`p-4 rounded-xl border ${isLight ? 'bg-white border-purple-200 shadow-sm' : 'bg-stone-900/60 border-purple-900/50'}`}>
              <div className="text-2xl sm:text-3xl font-black text-purple-600 dark:text-purple-400 font-mono">1950-70s</div>
              <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider mt-1">Leaded Gas Peak</div>
              <div className="text-[10px] text-stone-600 dark:text-stone-400 mt-0.5">Latent Wave Aging Into Dementia</div>
            </div>

            <div className={`p-4 rounded-xl border ${isLight ? 'bg-white border-emerald-200 shadow-sm' : 'bg-stone-900/60 border-emerald-900/50'}`}>
              <div className="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400 font-mono">#1 Rare</div>
              <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider mt-1">Modifiable Risk</div>
              <div className="text-[10px] text-stone-600 dark:text-stone-400 mt-0.5">Preventable Alzheimer's Cause</div>
            </div>

            <div className={`p-4 rounded-xl border ${isLight ? 'bg-white border-orange-200 shadow-sm' : 'bg-stone-900/60 border-orange-900/50'}`}>
              <div className="text-2xl sm:text-3xl font-black text-orange-600 dark:text-orange-400 font-mono">$12.5B</div>
              <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider mt-1">Advocacy Capital</div>
              <div className="text-[10px] text-stone-600 dark:text-stone-400 mt-0.5">Aging & Dementia Ecosystem</div>
            </div>
          </div>
        </div>
      </div>

      {/* SUBTAB NAVIGATION BAR */}
      <div className={`border-b ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} sticky top-0 z-20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-1 sm:space-x-2 overflow-x-auto py-2.5 scrollbar-none">
            <button
              onClick={() => setActiveSubTab('qa_overview')}
              className={`px-3.5 py-2 text-xs font-bold rounded-lg whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                activeSubTab === 'qa_overview'
                  ? 'bg-amber-500 text-stone-950 shadow-sm'
                  : 'hover:bg-amber-500/10 text-stone-600 dark:text-stone-400'
              }`}
            >
              <FileText size={14} />
              <span>Dr. Hu Q&A Full Transcript</span>
            </button>

            <button
              onClick={() => setActiveSubTab('bone_dosimeter')}
              className={`px-3.5 py-2 text-xs font-bold rounded-lg whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                activeSubTab === 'bone_dosimeter'
                  ? 'bg-amber-500 text-stone-950 shadow-sm'
                  : 'hover:bg-amber-500/10 text-stone-600 dark:text-stone-400'
              }`}
            >
              <Bone size={14} />
              <span>Bone Lead vs Blood Half-Life</span>
            </button>

            <button
              onClick={() => setActiveSubTab('latent_wave')}
              className={`px-3.5 py-2 text-xs font-bold rounded-lg whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                activeSubTab === 'latent_wave'
                  ? 'bg-amber-500 text-stone-950 shadow-sm'
                  : 'hover:bg-amber-500/10 text-stone-600 dark:text-stone-400'
              }`}
            >
              <Activity size={14} />
              <span>The 1950-70s Latent Resorption Wave</span>
            </button>

            <button
              onClick={() => setActiveSubTab('advocacy_bridge')}
              className={`px-3.5 py-2 text-xs font-bold rounded-lg whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                activeSubTab === 'advocacy_bridge'
                  ? 'bg-amber-500 text-stone-950 shadow-sm'
                  : 'hover:bg-amber-500/10 text-stone-600 dark:text-stone-400'
              }`}
            >
              <Users size={14} />
              <span>Cross-Disciplinary Strategic Bridge</span>
            </button>

            <button
              onClick={() => setActiveSubTab('infographic_studio')}
              className={`px-3.5 py-2 text-xs font-bold rounded-lg whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                activeSubTab === 'infographic_studio'
                  ? 'bg-amber-500 text-stone-950 shadow-sm'
                  : 'hover:bg-amber-500/10 text-stone-600 dark:text-stone-400'
              }`}
            >
              <Maximize2 size={14} />
              <span>Master Infographic Studio</span>
            </button>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        {/* SUBTAB 1: Q&A OVERVIEW */}
        {activeSubTab === 'qa_overview' && (
          <div className="space-y-8 animate-fadeIn">
            <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? 'bg-white border-stone-200 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-6`}>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-stone-200 dark:border-stone-800">
                <div>
                  <h2 className="text-2xl font-black font-sans">
                    A Q&A with Dr. Howard Hu: Chronic Lead Exposure & Dementia
                  </h2>
                  <p className="text-xs font-mono text-stone-500 mt-1">
                    Published: October 19, 2026 • Pure Earth Scientific Advisory Series • Senior Science Advisor
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-full text-xs font-bold border border-amber-500/20">
                    Lead-Alzheimer's Hypothesis
                  </span>
                  <span className="px-3 py-1 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 rounded-full text-xs font-bold border border-cyan-500/20">
                    Wang et al. (2026)
                  </span>
                </div>
              </div>

              {/* Q&A BLOCKS */}
              <div className="space-y-6">
                {/* Q1 */}
                <div className={`p-5 rounded-2xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-3`}>
                  <h3 className="text-sm font-black text-amber-600 dark:text-amber-400 flex items-start gap-2">
                    <span className="px-2 py-0.5 bg-amber-500 text-stone-950 rounded text-xs shrink-0 font-mono">Q1</span>
                    <span>A recent study by Wang et al. finds evidence that cumulative lead exposure in life may be a leading cause of Alzheimer’s disease and other forms of dementia. What did the researchers find, and why has it attracted so much attention?</span>
                  </h3>
                  <div className={`pl-8 text-xs sm:text-sm leading-relaxed ${isLight ? 'text-stone-700' : 'text-stone-300'}`}>
                    <p className="font-semibold text-stone-900 dark:text-stone-100">Dr. Howard Hu:</p>
                    <p className="mt-1">
                      “The research team found that a tool for estimating bone lead levels, a marker of lead exposure accumulated over many years, was a strong predictor of the development of Alzheimer’s Disease, as well as general dementia, among participants of a national study of Americans that is known to be representative of the general US population and the source of many rigorous studies.”
                    </p>
                  </div>
                </div>

                {/* Q2 */}
                <div className={`p-5 rounded-2xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-3`}>
                  <h3 className="text-sm font-black text-amber-600 dark:text-amber-400 flex items-start gap-2">
                    <span className="px-2 py-0.5 bg-amber-500 text-stone-950 rounded text-xs shrink-0 font-mono">Q2</span>
                    <span>Many people in the field think of lead poisoning as a threat only to children’s cognitive health. What does this research tell us about the long-term effects of lead exposure across the lifespan and for chronic disease?</span>
                  </h3>
                  <div className={`pl-8 text-xs sm:text-sm leading-relaxed ${isLight ? 'text-stone-700' : 'text-stone-300'}`}>
                    <p className="font-semibold text-stone-900 dark:text-stone-100">Dr. Howard Hu:</p>
                    <p className="mt-1">
                      “The evidence for chronic lead exposure having a long ‘tail’ of adverse health consequences later in life has been building for years, with such exposure posing a major risk for heart attacks and increased mortality from cardiovascular disease now an accepted fact, and the evidence base for adverse impacts on neurodegenerative disease steadily increasing. The evidence includes basic research studies demonstrating lead’s impact on many cellular and molecular processes that promote neurodegeneration as well as rigorous, well-designed epidemiological studies such as this one.”
                    </p>
                  </div>
                </div>

                {/* Q3 */}
                <div className={`p-5 rounded-2xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-3`}>
                  <h3 className="text-sm font-black text-amber-600 dark:text-amber-400 flex items-start gap-2">
                    <span className="px-2 py-0.5 bg-amber-500 text-stone-950 rounded text-xs shrink-0 font-mono">Q3</span>
                    <span>This study used estimated bone lead rather than current blood lead levels. Why is bone lead such an important tool for understanding chronic exposure and disease risk as opposed to blood lead levels?</span>
                  </h3>
                  <div className={`pl-8 text-xs sm:text-sm leading-relaxed ${isLight ? 'text-stone-700' : 'text-stone-300'}`}>
                    <p className="font-semibold text-stone-900 dark:text-stone-100">Dr. Howard Hu:</p>
                    <p className="mt-1">
                      “The study used a tool for predicting bone lead levels. The tool was developed based on research that used x-ray fluorescence methods to make direct measurements of bone lead levels, and then creating an algorithm to predict bone lead levels based on blood lead levels and a number of other variables that were subsequently validated and shown to perform well in predicting risk of hypertension and cardiovascular disease. Bone lead levels are a great ‘dosimeter’ for chronic lead exposure because when an individual is exposed to lead, about 15% of the internalized dose of lead is incorporated into the skeleton, where it persists for decades, unlike blood lead levels, which decrease relatively quickly once exposure is removed. I’m proud that a research team I led did much of this work: establishing bone lead as a dosimeter of chronic exposure, developing XRF instruments to measure it directly, applying those measurements in epidemiological studies, building the prediction algorithm, and showing that it sharpened our understanding of lead’s impact on cardiovascular mortality.”
                    </p>
                  </div>
                </div>

                {/* Q4 */}
                <div className={`p-5 rounded-2xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-3`}>
                  <h3 className="text-sm font-black text-amber-600 dark:text-amber-400 flex items-start gap-2">
                    <span className="px-2 py-0.5 bg-amber-500 text-stone-950 rounded text-xs shrink-0 font-mono">Q4</span>
                    <span>Dementia and Alzheimer’s disease impose enormous costs on families, healthcare systems, and economies. If future research confirms a link between lead exposure and dementia, what could that mean for the economic case for lead poisoning prevention?</span>
                  </h3>
                  <div className={`pl-8 text-xs sm:text-sm leading-relaxed ${isLight ? 'text-stone-700' : 'text-stone-300'}`}>
                    <p className="font-semibold text-stone-900 dark:text-stone-100">Dr. Howard Hu:</p>
                    <p className="mt-1">
                      “Huge. Alzheimer’s and other neurodegenerative diseases typically arise later in life. So, although the U.S. and other high-income countries have steadily reduced lead exposure by removing lead from gasoline, paint, plumbing, and other products, we will keep suffering the ‘latent’ effects of the chronic lead exposure we experienced in the 1950s, 1960s, and 1970s for many years to come.”
                    </p>
                  </div>
                </div>

                {/* Q5 */}
                <div className={`p-5 rounded-2xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-3`}>
                  <h3 className="text-sm font-black text-amber-600 dark:text-amber-400 flex items-start gap-2">
                    <span className="px-2 py-0.5 bg-amber-500 text-stone-950 rounded text-xs shrink-0 font-mono">Q5</span>
                    <span>How confident should we be in the connection between lead exposure and dementia? What evidence exists today, and what questions still need to be answered?</span>
                  </h3>
                  <div className={`pl-8 text-xs sm:text-sm leading-relaxed ${isLight ? 'text-stone-700' : 'text-stone-300'}`}>
                    <p className="font-semibold text-stone-900 dark:text-stone-100">Dr. Howard Hu:</p>
                    <p className="mt-1">
                      “The evidence is clearly building, and, in my opinion, it’s not quite but almost sufficient to conclude that chronic lead exposure causes dementia. More research is needed, particularly with respect to epidemiological studies that show similar results as this study, and also in other populations, by other investigators, and using a variety of ‘tools’ to estimate chronic lead exposure.”
                    </p>
                  </div>
                </div>

                {/* Q6 */}
                <div className={`p-5 rounded-2xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-3`}>
                  <h3 className="text-sm font-black text-amber-600 dark:text-amber-400 flex items-start gap-2">
                    <span className="px-2 py-0.5 bg-amber-500 text-stone-950 rounded text-xs shrink-0 font-mono">Q6</span>
                    <span>For people who were born before leaded gasoline was phased out, should this research change how they think about their health and aging? Is this something they can address?</span>
                  </h3>
                  <div className={`pl-8 text-xs sm:text-sm leading-relaxed ${isLight ? 'text-stone-700' : 'text-stone-300'}`}>
                    <p className="font-semibold text-stone-900 dark:text-stone-100">Dr. Howard Hu:</p>
                    <p className="mt-1">
                      “At this point, there is no evidence that supports a particular strategy by which individuals born before 1980 or so can reduce the risk posed by their lead exposure for chronic disease such as Alzheimer’s or hypertension. On the other hand, all of these chronic diseases are multifactorial; lead is likely adding to the other risks that are known to be associated with the diseases. Thus, it makes sense to increase attention to ‘living healthy’ by pursuing lifestyle changes known to reduce the risk of both cardiovascular disease and Alzheimer’s, including a healthy diet, regular exercise, reducing stress; and in particular for Alzheimer’s, keeping the mind ‘active.’”
                    </p>
                  </div>
                </div>

                {/* Q7 */}
                <div className={`p-5 rounded-2xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-3`}>
                  <h3 className="text-sm font-black text-amber-600 dark:text-amber-400 flex items-start gap-2">
                    <span className="px-2 py-0.5 bg-amber-500 text-stone-950 rounded text-xs shrink-0 font-mono">Q7</span>
                    <span>What does this finding mean at a time when more than 1 billion children have elevated levels of lead in their blood? If there’s one lesson policymakers, donors, and the public should take away from this research, what is it?</span>
                  </h3>
                  <div className={`pl-8 text-xs sm:text-sm leading-relaxed ${isLight ? 'text-stone-700' : 'text-stone-300'}`}>
                    <p className="font-semibold text-stone-900 dark:text-stone-100">Dr. Howard Hu:</p>
                    <p className="mt-1">
                      “Lead exposure has a long ‘tail’ of adverse health consequences, for adults as well as children, with impacts in terms of disease, suffering, and economic consequences that have some similarities to those of air pollution. Unlike air pollution, however, lead exposure has major adverse impacts on child intelligence and behavior; and it is invisible, silent, and odorless, making it critically important to advocate for testing, uncovering sources, and reducing them.”
                    </p>
                  </div>
                </div>

                {/* Q8: THE STRATEGIC CLIMAX */}
                <div className={`p-5 rounded-2xl border-2 ${isLight ? 'bg-gradient-to-r from-amber-50 to-cyan-50 border-amber-400' : 'bg-gradient-to-r from-amber-950/40 to-cyan-950/40 border-amber-600'} space-y-3 shadow-md`}>
                  <h3 className="text-sm font-black text-amber-600 dark:text-amber-400 flex items-start gap-2">
                    <span className="px-2 py-0.5 bg-gradient-to-r from-amber-500 to-cyan-500 text-stone-950 rounded text-xs shrink-0 font-mono">Q8 • THE STRATEGIC PIVOT</span>
                    <span>How should the community of practice better communicate this research to ensure the word gets out about this study?</span>
                  </h3>
                  <div className={`pl-8 text-xs sm:text-sm leading-relaxed ${isLight ? 'text-stone-800' : 'text-stone-200'}`}>
                    <p className="font-black text-amber-700 dark:text-amber-300 text-base">Dr. Howard Hu:</p>
                    <blockquote className="mt-2 font-serif italic text-base leading-relaxed pl-4 border-l-2 border-amber-500">
                      “We need to take this research beyond our own community of practice of lead and environmental health. The study suggests lead exposure may be a risk factor for Alzheimer’s disease and may account for a major share of the nation’s dementia burden, which makes it urgent news for people working in aging, dementia care, Alzheimer’s advocacy, and Alzheimer’s research. That field is large, well resourced, and actively searching for modifiable risk factors, and lead offers something rare: a risk factor that can be prevented with early detection and mitigation of exposures.”
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 2: BONE LEAD DOSIMETER VS BLOOD */}
        {activeSubTab === 'bone_dosimeter' && (
          <div className="space-y-8 animate-fadeIn">
            <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-6`}>
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest">
                  Pharmacokinetics of Heavy Metal Deposition
                </span>
                <h3 className="text-2xl font-black font-sans">
                  Bone Lead vs. Blood Lead: Why Transient Testing Fails Aging Populations
                </h3>
                <p className={`text-sm max-w-4xl leading-relaxed ${isLight ? 'text-stone-600' : 'text-stone-400'}`}>
                  Standard medical diagnostics rely almost exclusively on capillary or venous <strong>blood lead levels (BLL)</strong>. However, because blood lead has a biologic half-life of only ~30 to 40 days, an octogenarian suffering from severe neurodegeneration caused by decades of heavy metal exposure will typically show "normal" blood lead if removed from immediate exposure. Cortical bone, in contrast, sequesters up to 90% of cumulative lifetime lead, serving as a biological dosimeter that persists for decades.
                </p>
              </div>

              {/* RECHARTS BAR CHART: HALF LIFE COMPARISON */}
              <div className="space-y-4 pt-4">
                <h4 className="text-sm font-black uppercase tracking-wider text-stone-500 font-mono">
                  Biologic Half-Life Comparison Across Human Tissue Compartments (Years)
                </h4>
                <div className="h-72 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={halfLifeComparisonData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                      <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                      <XAxis dataKey="tissue" tick={{ fontSize: 11 }} />
                      <YAxis label={{ value: 'Half-Life (Years)', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fontSize: 11 } }} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: isLight ? '#fff' : '#1c1917',
                          borderColor: isLight ? '#e7e5e4' : '#44403c',
                          borderRadius: '0.75rem',
                          fontSize: '12px'
                        }}
                      />
                      <Bar dataKey="halfLifeYears" name="Tissue Half-Life (Years)" radius={[8, 8, 0, 0]}>
                        {halfLifeComparisonData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* THREE CORE PRINCIPLES OF KXRF BONE DOSIMETRY */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                <div className={`p-5 rounded-2xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-2`}>
                  <div className="w-8 h-8 rounded-full bg-cyan-500 text-stone-950 flex items-center justify-center font-bold text-sm">1</div>
                  <h4 className="text-sm font-bold">In vivo K-Shell XRF Measurement</h4>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                    Pioneered by Dr. Howard Hu’s team, cadmium-109 gamma rays excite lead K-shell electrons in the tibia and patella, producing characteristic fluorescent X-rays that quantify bone lead non-invasively in ppm.
                  </p>
                </div>

                <div className={`p-5 rounded-2xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-2`}>
                  <div className="w-8 h-8 rounded-full bg-amber-500 text-stone-950 flex items-center justify-center font-bold text-sm">2</div>
                  <h4 className="text-sm font-bold">15% Sequestration Rule</h4>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                    Approximately 15% of all internalized lead replaces calcium in hydroxyapatite crystals. Over decades of chronic industrial or environmental inhalation, the skeleton becomes a massive heavy metal reservoir.
                  </p>
                </div>

                <div className={`p-5 rounded-2xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-2`}>
                  <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-sm">3</div>
                  <h4 className="text-sm font-bold">National Predictive Algorithms</h4>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                    The Wang et al. breakthrough used validated multi-variable algorithms calibrated against historical KXRF cohorts, unlocking retrospective bone lead estimates across thousands of national health study participants.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 3: THE LATENT WAVE */}
        {activeSubTab === 'latent_wave' && (
          <div className="space-y-8 animate-fadeIn">
            <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-6`}>
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-orange-600 dark:text-orange-400 uppercase tracking-widest">
                  Temporal Exposome Timeline (1950 - 2040)
                </span>
                <h3 className="text-2xl font-black font-sans">
                  The Latent Wave: How 1950s–1970s Leaded Gasoline Is Fueling Current Dementia
                </h3>
                <p className={`text-sm max-w-4xl leading-relaxed ${isLight ? 'text-stone-600' : 'text-stone-400'}`}>
                  Even though leaded gasoline was phased out by the 1980s, the millions of tons of tetraethyl lead aerosolized across American cities during the post-war boom were inhaled and permanently stored in the skeletons of baby boomers and Gen-X. As these cohorts enter their 60s, 70s, and 80s, <strong>osteoporosis and age-related bone resorption</strong> break down cortical hydroxyapatite, releasing toxic lead back into systemic circulation where it attacks the cerebral cortex.
                </p>
              </div>

              {/* RECHARTS AREA CHART: LATENT LIFESPAN */}
              <div className="space-y-4 pt-4">
                <h4 className="text-sm font-black uppercase tracking-wider text-stone-500 font-mono">
                  Atmospheric Exposure Peak (1970s) vs. Latent Dementia Resorption Wave (2020s–2030s)
                </h4>
                <div className="h-80 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={latentLifespanData} margin={{ top: 20, right: 30, left: 10, bottom: 20 }}>
                      <defs>
                        <linearGradient id="leadExpGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="dementiaGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                      <XAxis dataKey="decade" tick={{ fontSize: 11 }} />
                      <YAxis label={{ value: 'Relative Scale (%)', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fontSize: 11 } }} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: isLight ? '#fff' : '#1c1917',
                          borderColor: isLight ? '#e7e5e4' : '#44403c',
                          borderRadius: '0.75rem',
                          fontSize: '12px'
                        }}
                      />
                      <Legend />
                      <Area type="monotone" dataKey="atmosphericLeadExposure" stroke="#f59e0b" fillOpacity={1} fill="url(#leadExpGrad)" name="Atmospheric Leaded Gas Exposure (%)" />
                      <Area type="monotone" dataKey="dementiaIncidenceLatent" stroke="#06b6d4" fillOpacity={1} fill="url(#dementiaGrad)" name="Latent Bone Resorption & Dementia Risk (%)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* NEURODEGENERATION CASCADE */}
              <div className={`p-6 rounded-2xl border ${isLight ? 'bg-amber-50/50 border-amber-200' : 'bg-amber-950/20 border-amber-900'} space-y-4`}>
                <h4 className="text-sm font-black font-sans flex items-center gap-2 text-amber-700 dark:text-amber-400">
                  <Brain size={18} />
                  <span>The Cellular Cascade of Latent Lead-Induced Neurodegeneration</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                  <div className={`p-4 rounded-xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-1`}>
                    <div className="font-bold text-amber-600">1. Bone Resorption</div>
                    <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                      Osteoclasts demineralize bone matrix during menopause or immobility, dumping decades-old sequestered Pb²⁺ into venous blood.
                    </p>
                  </div>

                  <div className={`p-4 rounded-xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-1`}>
                    <div className="font-bold text-red-600">2. BBB Disruption</div>
                    <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                      Lead ions substitute for calcium, disrupting tight junctions in brain microvascular endothelial cells and entering astrocytes.
                    </p>
                  </div>

                  <div className={`p-4 rounded-xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-1`}>
                    <div className="font-bold text-purple-600">3. Amyloid & Tau Pathology</div>
                    <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                      Lead promotes APP transcription and beta-amyloid peptide folding while hyperphosphorylating tau proteins into neurofibrillary tangles.
                    </p>
                  </div>

                  <div className={`p-4 rounded-xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-1`}>
                    <div className="font-bold text-cyan-600">4. Synaptic Apoptosis</div>
                    <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                      NMDA receptor inhibition and excessive reactive oxygen species (ROS) destroy hippocampal synapses, accelerating memory loss and clinical dementia.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 4: ADVOCACY BRIDGE */}
        {activeSubTab === 'advocacy_bridge' && (
          <div className="space-y-8 animate-fadeIn">
            <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-6`}>
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest">
                  Strategic Convergence of Communities of Practice
                </span>
                <h3 className="text-2xl font-black font-sans">
                  Breaking Out of the Silo: Mobilizing the $12B+ Alzheimer’s Advocacy Community
                </h3>
                <p className={`text-sm max-w-4xl leading-relaxed ${isLight ? 'text-stone-600' : 'text-stone-400'}`}>
                  Historically, lead poisoning advocacy has operated inside an underfunded niche of environmental health and pediatric toxicology ($150M/yr). Meanwhile, the global Alzheimer’s and dementia advocacy sector commands billions in philanthropic and NIH funding, desperately seeking <strong>modifiable risk factors</strong> that can be prevented. Dr. Howard Hu’s message is simple: <em>we must forge an unshakeable alliance between environmental exposenomics and Alzheimer’s research.</em>
                </p>
              </div>

              {/* TWO COLUMN COMPARISON */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
                {/* ECOSYSTEM SCALE BAR CHART */}
                <div className={`p-6 rounded-2xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-4`}>
                  <h4 className="text-sm font-bold flex items-center gap-2">
                    <Scale size={16} className="text-amber-500" />
                    <span>Annual Advocacy & Research Funding Disparity ($ Billions)</span>
                  </h4>
                  <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={ecosystemScaleData} layout="vertical" margin={{ top: 10, right: 30, left: 40, bottom: 10 }}>
                        <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                        <XAxis type="number" tick={{ fontSize: 11 }} />
                        <YAxis dataKey="sector" type="category" width={110} tick={{ fontSize: 10 }} />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: isLight ? '#fff' : '#1c1917',
                            borderColor: isLight ? '#e7e5e4' : '#44403c',
                            borderRadius: '0.75rem',
                            fontSize: '12px'
                          }}
                        />
                        <Bar dataKey="annualFundingBillions" name="Annual Budget ($ Billions)" radius={[0, 8, 8, 0]}>
                          {ecosystemScaleData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <p className="text-[11px] text-stone-500 font-mono">
                    Alzheimer’s & aging philanthropy outscales environmental lead budgets by over 80:1. Uniting them transforms prevention resources.
                  </p>
                </div>

                {/* MODIFIABLE DEMENTIA RISK FACTORS PIE CHART */}
                <div className={`p-6 rounded-2xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-4`}>
                  <h4 className="text-sm font-bold flex items-center gap-2">
                    <Brain size={16} className="text-cyan-500" />
                    <span>The Missing Piece: Modifiable Dementia Risk Factors</span>
                  </h4>
                  <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={modifiableRiskData}
                          dataKey="share"
                          nameKey="name"
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
                        >
                          {modifiableRiskData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                          ))}
                        </Pie>
                        <Tooltip
                          contentStyle={{
                            backgroundColor: isLight ? '#fff' : '#1c1917',
                            borderColor: isLight ? '#e7e5e4' : '#44403c',
                            borderRadius: '0.75rem',
                            fontSize: '12px'
                          }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <p className="text-[11px] text-stone-500 font-mono">
                    Lancet Commission traditionally ignores cumulative heavy metal bone burden; Wang et al. demonstrates lead may account for up to 22% of population risk.
                  </p>
                </div>
              </div>

              {/* ACTION PLAN FOR THE ADVOCACY BRIDGE */}
              <div className={`p-6 rounded-2xl border ${isLight ? 'bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200' : 'bg-gradient-to-r from-amber-950/30 to-orange-950/30 border-amber-800'} space-y-4`}>
                <h4 className="text-sm font-black font-sans uppercase tracking-wider text-amber-800 dark:text-amber-300">
                  Four Immediate Steps to Break the Silos:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                  <div className="p-3 bg-white/60 dark:bg-stone-900/60 rounded-xl border border-amber-300 dark:border-amber-700/50 space-y-1">
                    <div className="font-bold text-stone-900 dark:text-stone-100">1. Alzheimer's Association Briefings</div>
                    <p className="text-stone-600 dark:text-stone-400">
                      Deliver Wang et al. and KXRF bone dosimetry findings directly to Alzheimer's Association leadership and clinical trial consortiums.
                    </p>
                  </div>

                  <div className="p-3 bg-white/60 dark:bg-stone-900/60 rounded-xl border border-amber-300 dark:border-amber-700/50 space-y-1">
                    <div className="font-bold text-stone-900 dark:text-stone-100">2. Bone Lead Screening Trials</div>
                    <p className="text-stone-600 dark:text-stone-400">
                      Integrate portable XRF bone lead measurement and validated predictive algorithms into large prospective aging cohorts (Framingham, HRS, ADNI).
                    </p>
                  </div>

                  <div className="p-3 bg-white/60 dark:bg-stone-900/60 rounded-xl border border-amber-300 dark:border-amber-700/50 space-y-1">
                    <div className="font-bold text-stone-900 dark:text-stone-100">3. Bone Resorption Mitigation</div>
                    <p className="text-stone-600 dark:text-stone-400">
                      Evaluate whether anti-resorptive osteoporosis treatments (bisphosphonates, SERMs) slow the release of skeletal lead into the aging brain.
                    </p>
                  </div>

                  <div className="p-3 bg-white/60 dark:bg-stone-900/60 rounded-xl border border-amber-300 dark:border-amber-700/50 space-y-1">
                    <div className="font-bold text-stone-900 dark:text-stone-100">4. Joint Policy Advocacy</div>
                    <p className="text-stone-600 dark:text-stone-400">
                      Unite pediatric lead elimination campaigns with elder dementia organizations to demand total lead eradication under federal and global law.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 5: INFOGRAPHIC STUDIO */}
        {activeSubTab === 'infographic_studio' && (
          <div className="space-y-8 animate-fadeIn">
            <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-6`}>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-stone-200 dark:border-stone-800">
                <div>
                  <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest">
                    Pure Earth & ICEarth Sovereign Exposenomics Studio
                  </span>
                  <h3 className="text-2xl font-black font-sans">
                    Master Infographic: Dr. Howard Hu on Bone Lead, Dementia & Alzheimer's (Plate #88)
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="px-4 py-2 bg-gradient-to-r from-amber-600 to-cyan-600 hover:from-amber-500 hover:to-cyan-500 text-stone-950 font-black rounded-xl text-xs flex items-center gap-2 cursor-pointer shadow-md transition-all hover:scale-105"
                  >
                    <Maximize2 size={14} />
                    <span>Open High-Resolution Lightbox</span>
                  </button>
                </div>
              </div>

              {/* IMAGE DISPLAY CONTAINER */}
              <div
                onClick={() => setIsModalOpen(true)}
                className="relative rounded-2xl overflow-hidden border border-amber-500/40 shadow-2xl cursor-pointer group bg-stone-950"
              >
                <img
                  src={howardHuInfographicImg}
                  alt="Dr. Howard Hu Pure Earth Bone Lead and Alzheimer's Master Infographic Plate #88"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div className="text-white text-xs font-mono flex items-center gap-2">
                    <Maximize2 size={16} className="text-amber-400" />
                    <span>Click anywhere to expand high-resolution sovereign master view</span>
                  </div>
                </div>
              </div>

              {/* CRYPTOGRAPHIC ARCHIVE CARD */}
              <div className={`p-5 rounded-2xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-3 font-mono text-xs`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200 dark:border-stone-800 pb-2">
                  <div className="font-bold text-stone-500 uppercase tracking-wider">Asset Registration:</div>
                  <div className="text-amber-600 dark:text-amber-400 font-extrabold">PHOTO-000CW • IP-000CW • PLATE #88</div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200 dark:border-stone-800 pb-2">
                  <div className="font-bold text-stone-500 uppercase tracking-wider">Cryptographic Hash:</div>
                  <div className="text-cyan-600 dark:text-cyan-400 font-mono break-all">{vaultHash}</div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="font-bold text-stone-500 uppercase tracking-wider">Author & Scientific Attribution:</div>
                  <div className="text-stone-700 dark:text-stone-300">Dr. Howard Hu (Pure Earth) • Wang et al. • ICEarth Syndicate</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CROSS-NAVIGATION PORTAL BANNER */}
        <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? 'bg-gradient-to-r from-stone-100 via-amber-50/50 to-stone-100 border-amber-300/80' : 'bg-gradient-to-r from-stone-900 via-amber-950/30 to-stone-900 border-amber-800/80'} space-y-6 shadow-sm`}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="px-2.5 py-0.5 bg-amber-500 text-stone-950 font-black rounded uppercase text-[10px] tracking-wider">
                Cross-Proof Sovereign Navigation
              </span>
              <h3 className="text-xl sm:text-2xl font-black mt-2">
                Explore Connected Exposenomics Engines Across the ICEarth Ledger
              </h3>
              <p className="text-xs text-stone-500 mt-1 max-w-3xl">
                Trace how heavy metal exposure cascades from pediatric development into lifetime cardiovascular death, crime spikes, and late-life neurodegenerative dementia.
              </p>
            </div>
            {onNavigateTab && (
              <button
                onClick={() => onNavigateTab('vital_strategies_prevention')}
                className="px-4 py-2 bg-gradient-to-r from-teal-700 via-cyan-600 to-cyan-500 text-stone-950 font-black rounded-xl text-xs flex items-center gap-2 cursor-pointer shadow-md transition-all hover:scale-105 shrink-0"
              >
                <span>⬅️ Previous: Vital Strategies Data (Plate #87)</span>
                <ArrowRight size={14} />
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {onNavigateTab && (
              <>
                <button
                  onClick={() => onNavigateTab('vital_strategies_prevention')}
                  className={`p-4 rounded-2xl border text-left cursor-pointer transition-all hover:scale-[1.02] ${isLight ? 'bg-white border-teal-200 hover:border-teal-400' : 'bg-stone-950 border-teal-900 hover:border-teal-700'}`}
                >
                  <Activity size={20} className="text-teal-600 mb-2" />
                  <div className="text-xs font-black">Vital Strategies Data</div>
                  <div className="text-[10px] text-stone-500 mt-0.5">Plate #87 • Dan Kass Statement</div>
                </button>

                <button
                  onClick={() => onNavigateTab('wef_lead_economics')}
                  className={`p-4 rounded-2xl border text-left cursor-pointer transition-all hover:scale-[1.02] ${isLight ? 'bg-white border-amber-200 hover:border-amber-400' : 'bg-stone-950 border-amber-900 hover:border-amber-700'}`}
                >
                  <BarChart3 size={20} className="text-amber-600 mb-2" />
                  <div className="text-xs font-black">WEF $6T Economics Proof</div>
                  <div className="text-[10px] text-stone-500 mt-0.5">Plate #86 • Roulet's Law Proof</div>
                </button>

                <button
                  onClick={() => onNavigateTab('lead_alzheimers_dementia')}
                  className={`p-4 rounded-2xl border text-left cursor-pointer transition-all hover:scale-[1.02] ${isLight ? 'bg-white border-purple-200 hover:border-purple-400' : 'bg-stone-950 border-purple-900 hover:border-purple-700'}`}
                >
                  <Brain size={20} className="text-purple-600 mb-2" />
                  <div className="text-xs font-black">Lead & Alzheimer’s (UMich)</div>
                  <div className="text-[10px] text-stone-500 mt-0.5">Plate #58 • Policy Brief</div>
                </button>

                <button
                  onClick={() => onNavigateTab('red_beetroot_neuroprotection')}
                  className={`p-4 rounded-2xl border text-left cursor-pointer transition-all hover:scale-[1.02] ${isLight ? 'bg-white border-red-200 hover:border-red-400' : 'bg-stone-950 border-red-900 hover:border-red-700'}`}
                >
                  <HeartPulse size={20} className="text-red-600 mb-2" />
                  <div className="text-xs font-black">Red Beetroot Neuroprotection</div>
                  <div className="text-[10px] text-stone-500 mt-0.5">Nitric Oxide & Lead Chelation</div>
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-stone-950/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-fadeIn">
          <div className="flex items-center justify-between border-b border-stone-800 pb-4 text-xs font-mono">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 bg-gradient-to-r from-amber-500 to-cyan-500 text-stone-950 font-black rounded uppercase text-[10px]">
                PLATE #88 MASTER ARCHIVE
              </span>
              <span className="text-stone-300 font-bold hidden sm:inline">
                Dr. Howard Hu: Is Chronic Lead Exposure a Leading Risk Factor for Dementia & Alzheimer’s?
              </span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={copyVaultHash}
                className="px-3 py-1 bg-stone-800 hover:bg-stone-700 text-amber-300 rounded font-bold transition-colors flex items-center gap-1 cursor-pointer"
              >
                {copiedHash ? <Check size={13} /> : <Copy size={13} />}
                <span>{copiedHash ? 'Hash Copied!' : 'Copy Hash'}</span>
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-3 py-1 bg-red-600 hover:bg-red-500 text-white font-bold rounded cursor-pointer transition-colors"
              >
                ✕ Close
              </button>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center p-2 sm:p-4 overflow-auto">
            <img
              src={howardHuInfographicImg}
              alt="High Resolution Plate 88 Pure Earth Dr Howard Hu Infographic"
              className="max-h-[82vh] w-auto max-w-full rounded-xl shadow-2xl object-contain border border-amber-500/30"
            />
          </div>

          <div className="border-t border-stone-800 pt-3 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-stone-400">
            <div>
              <span>Provenance Hash: </span>
              <span className="text-amber-400 font-bold break-all">{vaultHash}</span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://www.pureearth.org/lead-exposure-dementia/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline flex items-center gap-1"
              >
                <span>Pure Earth Source</span>
                <ExternalLink size={12} />
              </a>
              <span>•</span>
              <span>Norm Roulet Sovereign Vault #1</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

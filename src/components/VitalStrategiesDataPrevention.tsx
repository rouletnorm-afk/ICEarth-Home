import React, { useState } from 'react';
import {
  Activity,
  ShieldCheck,
  ShieldAlert,
  AlertTriangle,
  Globe,
  Database,
  Search,
  CheckCircle2,
  ExternalLink,
  Maximize2,
  Copy,
  Check,
  ArrowRight,
  Sparkles,
  Users,
  Brain,
  Baby,
  Building2,
  Layers,
  HeartPulse,
  Filter,
  BarChart3,
  FileText,
  Compass,
  Zap,
  Target,
  Flame,
  Scale
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
  Cell,
  LineChart,
  Line
} from 'recharts';
import vitalStrategiesImg from '../assets/images/vital_strategies_detection_to_prevention_infographic_1792471183500.jpg';

interface VitalStrategiesDataPreventionProps {
  onNavigateTab?: (tab: string) => void;
  siteTheme?: 'light' | 'dark';
}

export const VitalStrategiesDataPrevention: React.FC<VitalStrategiesDataPreventionProps> = ({
  onNavigateTab,
  siteTheme = 'light'
}) => {
  const isLight = siteTheme === 'light';

  // Subtab navigation
  const [activeSubTab, setActiveSubTab] = useState<
    'overview' | 'detection_pipeline' | 'field_surveillance' | 'asymptomatic_blindspot' | 'why_icearth_synthesis' | 'infographic_studio'
  >('overview');

  // Vault hash copy state
  const [copiedHash, setCopiedHash] = useState(false);
  const vaultHash = '0xVITAL_STRATEGIES_LOCAL_DATA_DETECTION_TO_PREVENTION_ROULETS_LAW_PLATE_87_2026';

  // Lightbox modal state
  const [isModalOpen, setIsModalOpen] = useState(false);

  const copyVaultHash = () => {
    navigator.clipboard.writeText(vaultHash);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 3000);
  };

  // Recharts data: 4-Stage Detection to Prevention Pipeline
  const pipelineEffectivenessData = [
    { stage: '1. Passive Harm / No Testing', preventionScore: 8, status: 'Hidden Burden (Blind Spot)' },
    { stage: '2. Capillary Blood Detection', preventionScore: 35, status: 'Documents Harm Only' },
    { stage: '3. Source Attribution & XRF', preventionScore: 72, status: 'Pinpoints Spices, Batteries, Paint' },
    { stage: '4. Targeted Policy & Enforcement', preventionScore: 96, status: 'Permanent Prevention Achieved' }
  ];

  // Recharts data: Key Exposure Pathways in Low- and Middle-Income Countries (LMICs)
  const exposurePathwaysData = [
    { name: 'Informal Used Battery Recycling & Dust', share: 34, fill: '#ef4444', desc: 'Workers carrying toxic dust home on clothes to families' },
    { name: 'Adulterated Spices (Turmeric / PbCrO4)', share: 26, fill: '#f59e0b', desc: 'Chemical colorants added for deceptive weight & appearance' },
    { name: 'Lead Paint & Residential Dust', share: 18, fill: '#8b5cf6', desc: 'Unregulated solvent-based decorative and industrial coatings' },
    { name: 'Cookware & Glazed Ceramics', share: 12, fill: '#06b6d4', desc: 'Low-temperature artisanal kiln cookware leaching into food' },
    { name: 'Cosmetics, Kohl & Traditional Remedies', share: 10, fill: '#10b981', desc: 'Direct topical and mucosal heavy metal application' }
  ];

  // National Field Surveillance Cohorts: Indonesia & Kyrgyzstan
  const nationalSurveyCohortsData = [
    { country: 'Indonesia National Survey', tested: 1500, elevatedRate: 38, focus: 'Battery recycling villages & urban hubs' },
    { country: 'Kyrgyzstan National Survey', tested: 920, elevatedRate: 44, focus: 'Mining-adjacent rural schools & bazaars' },
    { country: 'Global LMIC Average (Est.)', tested: 2420, elevatedRate: 40, focus: 'Multi-sector everyday environmental sources' }
  ];

  return (
    <div className={`min-h-screen ${isLight ? 'bg-stone-50 text-stone-900' : 'bg-stone-950 text-stone-100'} transition-colors duration-200`}>
      {/* TOP NOTIFICATION / CAMPAIGN BANNER */}
      <div className="bg-gradient-to-r from-teal-900 via-cyan-950 to-stone-900 text-white px-4 py-3 border-b border-cyan-500/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 bg-cyan-500 text-stone-950 font-black rounded uppercase text-[10px] tracking-wider">
              Vital Strategies Statement • Oct 19, 2026
            </span>
            <span className="font-semibold text-cyan-200">
              International Lead Poisoning Prevention Week • Data Systems & Intelligence
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.vitalstrategies.org/news/from-detection-to-prevention-lead-exposure-data-is-critical-for-action/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-cyan-300 hover:text-white underline font-mono text-[11px] transition-colors"
            >
              <span>View Official Statement</span>
              <ExternalLink size={12} />
            </a>
            <button
              onClick={() => setActiveSubTab('infographic_studio')}
              className="px-2.5 py-1 bg-cyan-600/60 hover:bg-cyan-500 text-white font-bold rounded flex items-center gap-1 cursor-pointer transition-colors"
            >
              <Maximize2 size={12} />
              <span>Plate #87 Infographic</span>
            </button>
          </div>
        </div>
      </div>

      {/* HERO SECTION */}
      <div className={`border-b ${isLight ? 'bg-gradient-to-b from-stone-100 via-cyan-50/40 to-stone-50 border-stone-200' : 'bg-gradient-to-b from-stone-900 via-cyan-950/20 to-stone-950 border-stone-800'} px-4 sm:px-6 lg:px-8 py-10`}>
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 bg-gradient-to-r from-cyan-600 to-teal-600 text-white text-xs font-black rounded uppercase tracking-wider shadow-sm">
              Plate #87 • Data-to-Prevention Architecture
            </span>
            <span className={`px-2.5 py-1 text-xs font-bold rounded border ${isLight ? 'bg-white text-stone-800 border-stone-300' : 'bg-stone-900 text-cyan-300 border-stone-700'}`}>
              Vital Strategies • Environmental, Climate & Urban Health
            </span>
            <span className={`px-2.5 py-1 text-xs font-mono rounded border ${isLight ? 'bg-cyan-100 text-cyan-900 border-cyan-300' : 'bg-cyan-950/60 text-cyan-300 border-cyan-800'}`}>
              Bloomberg Philanthropies • Coefficient Giving • Pure Earth
            </span>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight font-sans">
              From <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-teal-500 to-amber-500">Detection to Prevention:</span> Why Reliable Local Data is the Critical Catalyst for Action
            </h1>
            <p className={`text-base sm:text-lg max-w-5xl leading-relaxed ${isLight ? 'text-stone-700' : 'text-stone-300'}`}>
              Dan Kass, Senior Vice President of Environmental, Climate and Urban Health at <strong>Vital Strategies</strong>, issues a decisive proclamation for International Lead Poisoning Prevention Week: with over <strong>800 million children</strong> suffering elevated blood lead levels and <strong>3.5 million deaths</strong> in 2023 alone, the greatest barrier to stopping this tragedy is the lack of localized, granular exposure intelligence. In the words of Vital Strategies: <em>“That’s why reliable, local data are essential to turning detection into prevention.”</em>
            </p>
          </div>

          {/* QUOTE CALLOUT */}
          <div className={`p-5 rounded-2xl border-l-4 border-l-cyan-500 border ${isLight ? 'bg-cyan-50/70 border-cyan-200 text-cyan-950' : 'bg-cyan-950/30 border-cyan-900 text-cyan-100'} space-y-2`}>
            <div className="font-mono text-xs font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider flex items-center gap-2">
              <Sparkles size={14} />
              <span>Statement by Dan Kass, SVP, Vital Strategies (New York, Oct 19, 2026)</span>
            </div>
            <blockquote className="text-sm sm:text-base italic font-serif leading-relaxed">
              “Detection is not the endpoint. Prevention is. Data must do more than document harm; it must drive decisions, strengthen policies and catalyze action to prevent exposure... That’s why reliable, local data are essential to turning detection into prevention.”
            </blockquote>
          </div>

          {/* CRYPTOGRAPHIC PROVENANCE & VAULT HASH */}
          <div className={`p-4 rounded-xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-xs ${isLight ? 'bg-stone-100 border-stone-300 text-stone-700' : 'bg-stone-900/80 border-stone-800 text-stone-300'}`}>
            <div className="flex items-center gap-2 overflow-hidden">
              <ShieldCheck size={16} className="text-cyan-500 shrink-0" />
              <span className="font-bold text-stone-500 uppercase">Cryptographic Vault Hash:</span>
              <span className="font-extrabold text-cyan-600 dark:text-cyan-400 truncate">
                {vaultHash}
              </span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={copyVaultHash}
                className="px-3 py-1 bg-cyan-500 hover:bg-cyan-600 text-stone-950 font-bold rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
              >
                {copiedHash ? <Check size={13} /> : <Copy size={13} />}
                <span>{copiedHash ? 'Hash Copied!' : 'Copy Hash'}</span>
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-3 py-1 bg-stone-800 hover:bg-stone-700 text-cyan-200 font-bold rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
              >
                <Maximize2 size={13} />
                <span>Lightbox View</span>
              </button>
            </div>
          </div>

          {/* CORE METRICS GRID */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 pt-2">
            <div className={`p-4 rounded-xl border ${isLight ? 'bg-white border-cyan-200 shadow-sm' : 'bg-stone-900/60 border-cyan-900/50'}`}>
              <div className="text-2xl sm:text-3xl font-black text-cyan-600 dark:text-cyan-400 font-mono">800M+</div>
              <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider mt-1">Children Poisoned</div>
              <div className="text-[10px] text-stone-600 dark:text-stone-400 mt-0.5">Brain Development Impaired</div>
            </div>

            <div className={`p-4 rounded-xl border ${isLight ? 'bg-white border-red-200 shadow-sm' : 'bg-stone-900/60 border-red-900/50'}`}>
              <div className="text-2xl sm:text-3xl font-black text-red-600 dark:text-red-400 font-mono">3.5M+</div>
              <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider mt-1">Annual Deaths</div>
              <div className="text-[10px] text-stone-600 dark:text-stone-400 mt-0.5">Global Toll in 2023 Alone</div>
            </div>

            <div className={`p-4 rounded-xl border ${isLight ? 'bg-white border-teal-200 shadow-sm' : 'bg-stone-900/60 border-teal-900/50'}`}>
              <div className="text-2xl sm:text-3xl font-black text-teal-600 dark:text-teal-400 font-mono">15</div>
              <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider mt-1">Countries Active</div>
              <div className="text-[10px] text-stone-600 dark:text-stone-400 mt-0.5">National Testing Programs</div>
            </div>

            <div className={`p-4 rounded-xl border ${isLight ? 'bg-white border-amber-200 shadow-sm' : 'bg-stone-900/60 border-amber-900/50'}`}>
              <div className="text-2xl sm:text-3xl font-black text-amber-600 dark:text-amber-400 font-mono">1,500+</div>
              <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider mt-1">Indonesia Cohort</div>
              <div className="text-[10px] text-stone-600 dark:text-stone-400 mt-0.5">First National Surveillance</div>
            </div>

            <div className={`p-4 rounded-xl border ${isLight ? 'bg-white border-purple-200 shadow-sm' : 'bg-stone-900/60 border-purple-900/50'}`}>
              <div className="text-2xl sm:text-3xl font-black text-purple-600 dark:text-purple-400 font-mono">900+</div>
              <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider mt-1">Kyrgyzstan Survey</div>
              <div className="text-[10px] text-stone-600 dark:text-stone-400 mt-0.5">Child Blood Testing Pioneer</div>
            </div>

            <div className={`p-4 rounded-xl border ${isLight ? 'bg-white border-emerald-200 shadow-sm' : 'bg-stone-900/60 border-emerald-900/50'}`}>
              <div className="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400 font-mono">4-Stage</div>
              <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider mt-1">Pipeline</div>
              <div className="text-[10px] text-stone-600 dark:text-stone-400 mt-0.5">Detect → Trace → Ban → Solve</div>
            </div>
          </div>
        </div>
      </div>

      {/* SUBTAB NAVIGATION BAR */}
      <div className={`border-b ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} sticky top-0 z-20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-1 sm:space-x-2 overflow-x-auto py-2.5 scrollbar-none">
            <button
              onClick={() => setActiveSubTab('overview')}
              className={`px-3.5 py-2 text-xs font-bold rounded-lg whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                activeSubTab === 'overview'
                  ? 'bg-cyan-500 text-stone-950 shadow-sm'
                  : 'hover:bg-cyan-500/10 text-stone-600 dark:text-stone-400'
              }`}
            >
              <FileText size={14} />
              <span>Dan Kass Proclamation</span>
            </button>

            <button
              onClick={() => setActiveSubTab('detection_pipeline')}
              className={`px-3.5 py-2 text-xs font-bold rounded-lg whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                activeSubTab === 'detection_pipeline'
                  ? 'bg-cyan-500 text-stone-950 shadow-sm'
                  : 'hover:bg-cyan-500/10 text-stone-600 dark:text-stone-400'
              }`}
            >
              <Target size={14} />
              <span>4-Stage Detection to Prevention</span>
            </button>

            <button
              onClick={() => setActiveSubTab('field_surveillance')}
              className={`px-3.5 py-2 text-xs font-bold rounded-lg whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                activeSubTab === 'field_surveillance'
                  ? 'bg-cyan-500 text-stone-950 shadow-sm'
                  : 'hover:bg-cyan-500/10 text-stone-600 dark:text-stone-400'
              }`}
            >
              <Database size={14} />
              <span>Field Surveillance: Indonesia & Kyrgyzstan</span>
            </button>

            <button
              onClick={() => setActiveSubTab('asymptomatic_blindspot')}
              className={`px-3.5 py-2 text-xs font-bold rounded-lg whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                activeSubTab === 'asymptomatic_blindspot'
                  ? 'bg-cyan-500 text-stone-950 shadow-sm'
                  : 'hover:bg-cyan-500/10 text-stone-600 dark:text-stone-400'
              }`}
            >
              <Brain size={14} />
              <span>Asymptomatic Threat Matrix</span>
            </button>

            <button
              onClick={() => setActiveSubTab('why_icearth_synthesis')}
              className={`px-3.5 py-2 text-xs font-bold rounded-lg whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                activeSubTab === 'why_icearth_synthesis'
                  ? 'bg-cyan-500 text-stone-950 shadow-sm'
                  : 'hover:bg-cyan-500/10 text-stone-600 dark:text-stone-400'
              }`}
            >
              <Zap size={14} />
              <span>Why ICEarth Sovereign Telemetry</span>
            </button>

            <button
              onClick={() => setActiveSubTab('infographic_studio')}
              className={`px-3.5 py-2 text-xs font-bold rounded-lg whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                activeSubTab === 'infographic_studio'
                  ? 'bg-cyan-500 text-stone-950 shadow-sm'
                  : 'hover:bg-cyan-500/10 text-stone-600 dark:text-stone-400'
              }`}
            >
              <Maximize2 size={14} />
              <span>Infographic Studio (Plate #87)</span>
            </button>
          </div>
        </div>
      </div>

      {/* MAIN BODY CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* SUBTAB 1: OVERVIEW */}
        {activeSubTab === 'overview' && (
          <div className="space-y-8">
            <div className={`p-6 sm:p-8 rounded-2xl border ${isLight ? 'bg-white border-stone-200 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-6`}>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-stone-200 dark:border-stone-800 pb-6">
                <div>
                  <h2 className="text-2xl font-black font-sans">
                    The Imperative of Local Intelligence: Dan Kass’s Warning
                  </h2>
                  <p className="text-sm text-stone-500 mt-1">
                    Vital Strategies Environmental, Climate and Urban Health Policy Briefing • Oct 19, 2026
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="https://www.vitalstrategies.org/news/from-detection-to-prevention-lead-exposure-data-is-critical-for-action/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-stone-950 font-bold text-xs rounded-xl flex items-center gap-1.5 transition-all shadow-sm cursor-pointer"
                  >
                    <span>Read Vital Strategies Newsroom</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4 text-sm leading-relaxed">
                  <p>
                    Every year, International Lead Poisoning Prevention Week highlights the colossal toll of heavy metal contamination. Yet, as Dan Kass of <strong>Vital Strategies</strong> underscores, global awareness is rendered inert if individual nations and municipalities lack the local data systems needed to pinpoint exactly who is being poisoned and where the poison originates.
                  </p>
                  <p>
                    Lead operates as an insidious <em>silent threat</em> because it produces no acute, pathognomonic early symptoms. A child suffering synaptic loss and irreversible IQ reduction does not develop a fever or rash. Unless capillary or venous blood tests are actively administered, exposure remains invisible to parents, pediatricians, and policymakers.
                  </p>
                  <p>
                    Moreover, the sources of exposure are diverse and hyperlocal. Lead dust travels home on the shoes and garments of workers at informal used lead-acid battery (ULAB) recycling shops; it hides in the bright pigments of food spices like turmeric; it leaches from unglazed clay tagines and cookware; and it lurks in contaminated residential soil. Without reliable, local testing, governments are fighting a phantom.
                  </p>
                </div>

                <div className={`p-6 rounded-2xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950/60 border-stone-800'} space-y-4`}>
                  <h3 className="text-base font-black text-cyan-600 dark:text-cyan-400 flex items-center gap-2">
                    <Target size={18} />
                    <span>The Four Core Truths of the Kass Proclamation</span>
                  </h3>
                  <ul className="space-y-3 text-xs leading-relaxed">
                    <li className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-cyan-500 text-stone-950 flex items-center justify-center shrink-0 font-bold text-[11px] mt-0.5">1</span>
                      <div>
                        <strong>Detection is Not the Endpoint:</strong> Documenting high blood lead levels without tracing the physical source is mere observation of tragedy; the true goal must always be immediate preventative intervention.
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-teal-500 text-white flex items-center justify-center shrink-0 font-bold text-[11px] mt-0.5">2</span>
                      <div>
                        <strong>Asymptomatic Destruction:</strong> Clinical signs appear only at lethal thresholds; micro-damage happens silently, requiring universal screening rather than symptomatic triage.
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-amber-500 text-stone-950 flex items-center justify-center shrink-0 font-bold text-[11px] mt-0.5">3</span>
                      <div>
                        <strong>Take-Home Occupational Risk:</strong> Unregulated battery workers unknowingly poison their infants through lead dust transported on work clothes, expanding occupational hazards into pediatric domestic crises.
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-purple-500 text-white flex items-center justify-center shrink-0 font-bold text-[11px] mt-0.5">4</span>
                      <div>
                        <strong>Targeted Governance Works:</strong> When local testing unmasks the source, enforcement works rapidly—as seen in Vital Strategies' active programs across 15 countries.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* CROSS NAVIGATION */}
              <div className="pt-6 border-t border-stone-200 dark:border-stone-800 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-stone-500">
                  Connect to related macroeconomic and exposure proof modules:
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {onNavigateTab && (
                    <>
                      <button
                        onClick={() => onNavigateTab('wef_lead_economics')}
                        className="px-3 py-1.5 bg-stone-200 dark:bg-stone-800 hover:bg-stone-300 dark:hover:bg-stone-700 font-bold text-xs rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        <BarChart3 size={13} className="text-amber-500" />
                        <span>Previous: WEF $6T Economics (Plate #86)</span>
                      </button>
                      <button
                        onClick={() => onNavigateTab('global_lead_crime_proof')}
                        className="px-3 py-1.5 bg-stone-200 dark:bg-stone-800 hover:bg-stone-300 dark:hover:bg-stone-700 font-bold text-xs rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        <Scale size={13} className="text-red-500" />
                        <span>Global Lead-Crime Proof (8k Yr)</span>
                      </button>
                      <button
                        onClick={() => onNavigateTab('reports')}
                        className="px-3 py-1.5 bg-cyan-500 hover:bg-cyan-600 text-stone-950 font-bold text-xs rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        <FileText size={13} />
                        <span>News Hub Repository</span>
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 2: 4-STAGE PIPELINE */}
        {activeSubTab === 'detection_pipeline' && (
          <div className="space-y-8">
            <div className={`p-6 sm:p-8 rounded-2xl border ${isLight ? 'bg-white border-stone-200 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-6`}>
              <div className="border-b border-stone-200 dark:border-stone-800 pb-4">
                <h2 className="text-2xl font-black font-sans">
                  The 4-Stage Architecture: Turning Detection Into Prevention
                </h2>
                <p className="text-sm text-stone-500 mt-1">
                  How epidemiological data moves from clinical identification to permanent regulatory elimination.
                </p>
              </div>

              {/* Flow Visualization */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className={`p-5 rounded-2xl border ${isLight ? 'bg-cyan-50/50 border-cyan-200' : 'bg-cyan-950/30 border-cyan-800'} space-y-2`}>
                  <div className="flex items-center justify-between">
                    <span className="w-7 h-7 rounded-full bg-cyan-500 text-stone-950 font-black text-xs flex items-center justify-center">1</span>
                    <span className="text-[10px] font-mono text-cyan-600 font-bold">STAGE 1</span>
                  </div>
                  <h4 className="text-sm font-black font-sans">Local Blood Lead Surveillance</h4>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                    Point-of-care capillary blood testing at maternal health clinics, pediatric wellness visits, and community schools to identify elevated BLLs (&gt;3.5 or 5.0 µg/dL).
                  </p>
                </div>

                <div className={`p-5 rounded-2xl border ${isLight ? 'bg-teal-50/50 border-teal-200' : 'bg-teal-950/30 border-teal-800'} space-y-2`}>
                  <div className="flex items-center justify-between">
                    <span className="w-7 h-7 rounded-full bg-teal-500 text-white font-black text-xs flex items-center justify-center">2</span>
                    <span className="text-[10px] font-mono text-teal-600 font-bold">STAGE 2</span>
                  </div>
                  <h4 className="text-sm font-black font-sans">Source Attribution & XRF</h4>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                    Deploying field X-ray fluorescence (XRF) analyzers to test home dust, cooking pots, turmeric spices, toys, and cosmetics to identify the specific exposure vector.
                  </p>
                </div>

                <div className={`p-5 rounded-2xl border ${isLight ? 'bg-amber-50/50 border-amber-200' : 'bg-amber-950/30 border-amber-800'} space-y-2`}>
                  <div className="flex items-center justify-between">
                    <span className="w-7 h-7 rounded-full bg-amber-500 text-stone-950 font-black text-xs flex items-center justify-center">3</span>
                    <span className="text-[10px] font-mono text-amber-600 font-bold">STAGE 3</span>
                  </div>
                  <h4 className="text-sm font-black font-sans">Data-Driven Resource Targeting</h4>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                    Prioritizing public health funding, clean battery recycling facilities, and soil capping directly in the geographic hotspots where poisoning burden is highest.
                  </p>
                </div>

                <div className={`p-5 rounded-2xl border ${isLight ? 'bg-emerald-50/50 border-emerald-200' : 'bg-emerald-950/30 border-emerald-800'} space-y-2`}>
                  <div className="flex items-center justify-between">
                    <span className="w-7 h-7 rounded-full bg-emerald-500 text-white font-black text-xs flex items-center justify-center">4</span>
                    <span className="text-[10px] font-mono text-emerald-600 font-bold">STAGE 4</span>
                  </div>
                  <h4 className="text-sm font-black font-sans">Enforceable Sovereign Prevention</h4>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                    Banning toxic lead chromate adulteration, enforcing occupational wash stations at battery smelters, and establishing permanent legal import bans.
                  </p>
                </div>
              </div>

              {/* Recharts Bar Chart */}
              <div className="space-y-2 pt-4">
                <h3 className="text-base font-black font-sans flex items-center gap-2">
                  <BarChart3 size={18} className="text-cyan-500" />
                  <span>Public Health Prevention Yield Across Data Maturity Stages</span>
                </h3>
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={pipelineEffectivenessData} margin={{ top: 10, right: 30, left: 10, bottom: 20 }}>
                      <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                      <XAxis dataKey="stage" tick={{ fontSize: 11 }} />
                      <YAxis domain={[0, 100]} tickFormatter={(val) => `${val}%`} tick={{ fontSize: 11 }} />
                      <Tooltip
                        formatter={(val: any) => [`${val}% Prevention Efficacy`, 'Efficacy Score']}
                        contentStyle={{
                          backgroundColor: isLight ? '#ffffff' : '#1c1917',
                          borderRadius: '8px',
                          border: '1px solid #78716c',
                          fontSize: '12px'
                        }}
                      />
                      <Bar dataKey="preventionScore" fill="#06b6d4" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 3: FIELD SURVEILLANCE (INDONESIA & KYRGYZSTAN) */}
        {activeSubTab === 'field_surveillance' && (
          <div className="space-y-8">
            <div className={`p-6 sm:p-8 rounded-2xl border ${isLight ? 'bg-white border-stone-200 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-6`}>
              <div className="border-b border-stone-200 dark:border-stone-800 pb-4">
                <h2 className="text-2xl font-black font-sans">
                  Active Field Surveillance: Indonesia & Kyrgyzstan Case Evidence
                </h2>
                <p className="text-sm text-stone-500 mt-1">
                  Vital Strategies is actively advancing testing and intelligence systems across 15 countries worldwide.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Indonesia Case Study */}
                <div className={`p-6 rounded-2xl border ${isLight ? 'bg-cyan-50/40 border-cyan-200' : 'bg-cyan-950/20 border-cyan-800'} space-y-4`}>
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 bg-cyan-600 text-white font-black rounded text-[11px] uppercase tracking-wider">
                      Indonesia Pioneer Cohort
                    </span>
                    <span className="text-xs font-mono text-stone-500">1,500+ Children Tested</span>
                  </div>
                  <h3 className="text-lg font-black font-sans">
                    First Government-Led National Blood Lead Surveillance
                  </h3>
                  <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                    In Indonesia, Vital Strategies partnered with the Ministry of Health to conduct the nation's inaugural blood lead surveillance initiative. Testing over 1,500 children, the study revealed critical geographic clusters around informal used lead-acid battery smelting communities. Crucially, it documented that fathers employed in battery recovery carried toxic dust home on work garments, exposing unweaned infants.
                  </p>
                  <div className="p-3 rounded-xl bg-cyan-100/60 dark:bg-cyan-900/40 text-xs font-mono text-cyan-900 dark:text-cyan-200 flex items-center justify-between">
                    <span>Target Outcome:</span>
                    <span className="font-bold">National industrial shower & locker mandates</span>
                  </div>
                </div>

                {/* Kyrgyzstan Case Study */}
                <div className={`p-6 rounded-2xl border ${isLight ? 'bg-teal-50/40 border-teal-200' : 'bg-teal-950/20 border-teal-800'} space-y-4`}>
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 bg-teal-600 text-white font-black rounded text-[11px] uppercase tracking-wider">
                      Kyrgyzstan National Survey
                    </span>
                    <span className="text-xs font-mono text-stone-500">900+ Children Tested</span>
                  </div>
                  <h3 className="text-lg font-black font-sans">
                    Unmasking Legacy Tailings & Household Food Vectors
                  </h3>
                  <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                    Kyrgyzstan’s first national child blood lead survey evaluated more than 900 children across diverse administrative oblasts. The data dismantled the assumption that lead was exclusively confined to Soviet-era mining tailings; it established that residential glazed cookware and unregulated lead paint sold in open bazaars were equally responsible for pediatric toxicity.
                  </p>
                  <div className="p-3 rounded-xl bg-teal-100/60 dark:bg-teal-900/40 text-xs font-mono text-teal-900 dark:text-teal-200 flex items-center justify-between">
                    <span>Target Outcome:</span>
                    <span className="font-bold">Border customs screening & market recalls</span>
                  </div>
                </div>
              </div>

              {/* Exposure Vectors Breakdown Pie Chart */}
              <div className="pt-4 border-t border-stone-200 dark:border-stone-800 space-y-4">
                <h3 className="text-base font-black font-sans flex items-center gap-2">
                  <Flame size={18} className="text-amber-500" />
                  <span>Everyday Low- and Middle-Income Country (LMIC) Exposure Vectors Identified by Vital Strategies</span>
                </h3>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="h-72 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={exposurePathwaysData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={95}
                          paddingAngle={4}
                          dataKey="share"
                          nameKey="name"
                        >
                          {exposurePathwaysData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                          ))}
                        </Pie>
                        <Tooltip
                          formatter={(val: any) => [`${val}% of exposure share`, 'Estimated Impact']}
                          contentStyle={{
                            backgroundColor: isLight ? '#ffffff' : '#1c1917',
                            borderRadius: '8px',
                            border: '1px solid #78716c',
                            fontSize: '12px'
                          }}
                        />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="space-y-2.5">
                    {exposurePathwaysData.map((item, idx) => (
                      <div
                        key={idx}
                        className={`p-3 rounded-xl border flex items-center justify-between gap-3 text-xs ${
                          isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950/60 border-stone-800'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.fill }} />
                          <span className="font-bold font-sans">{item.name}</span>
                        </div>
                        <span className="font-mono font-black text-cyan-600 dark:text-cyan-400">
                          {item.share}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 4: ASYMPTOMATIC BLINDSPOT */}
        {activeSubTab === 'asymptomatic_blindspot' && (
          <div className="space-y-8">
            <div className={`p-6 sm:p-8 rounded-2xl border ${isLight ? 'bg-white border-stone-200 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-6`}>
              <div className="border-b border-stone-200 dark:border-stone-800 pb-4">
                <h2 className="text-2xl font-black font-sans">
                  The Asymptomatic Threat Matrix: Why Symptom-Based Medicine Fails
                </h2>
                <p className="text-sm text-stone-500 mt-1">
                  How subclinical neurotoxicity silently alters brain morphology long before clinical symptoms present.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4 text-sm leading-relaxed">
                  <p>
                    Conventional healthcare systems are designed around <em>symptom-driven presentation</em>: patients seek medical attention when they experience pain, fever, bleeding, or palpable discomfort.
                  </p>
                  <p>
                    Lead poisoning subverts this entire paradigm. At blood lead levels between <strong>3.5 and 20 µg/dL</strong>, children exhibit zero overt physical symptoms. There is no cough, rash, or distinctive pallor. Yet, behind this calm facade, lead ions (Pb²⁺) substitute for calcium (Ca²⁺) in developing neuronal synapses, inhibiting NMDA receptors, triggering apoptosis in prefrontal gray matter, and destabilizing the blood-brain barrier.
                  </p>
                  <p>
                    By the time a child exhibits the classic symptoms of clinical lead colic, encephalopathy, or wrist drop (typically above 45 to 60 µg/dL), the critical neurodevelopmental window has permanently closed. This is why Dan Kass emphasizes that <strong>universal screening data</strong> is the only mechanism that can replace retrospective autopsy with preventative public health.
                  </p>
                </div>

                <div className={`p-6 rounded-2xl border ${isLight ? 'bg-amber-50/50 border-amber-200' : 'bg-amber-950/20 border-amber-800'} space-y-4`}>
                  <div className="font-black text-amber-700 dark:text-amber-300 text-sm flex items-center gap-2">
                    <AlertTriangle size={18} />
                    <span>The Clinical vs. Subclinical Disconnect</span>
                  </div>
                  <div className="space-y-3 text-xs leading-relaxed">
                    <div className="p-3 rounded-xl bg-white/70 dark:bg-stone-900/80 border border-amber-300/50">
                      <strong>Subclinical Damage (&lt; 10 µg/dL):</strong> Attention-deficit disorders, executive impulse dysfunction, reduced IQ by 3–7 points, altered epigenetic methylation of brain-derived neurotrophic factor (BDNF).
                    </div>
                    <div className="p-3 rounded-xl bg-white/70 dark:bg-stone-900/80 border border-amber-300/50">
                      <strong>Adult Vascular Infiltration:</strong> Nitric oxide degradation, chronic hypertension, accelerated atherogenesis, and elevated risk of fatal ischemic stroke.
                    </div>
                    <div className="p-3 rounded-xl bg-white/70 dark:bg-stone-900/80 border border-amber-300/50">
                      <strong>Maternal-Fetal Transfer:</strong> Lead stored in maternal bone during adolescence mobilizes into bloodstream during pregnancy, crossing the placenta and intoxicating the fetus during organogenesis.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 5: WHY ICEARTH SYNTHESIS */}
        {activeSubTab === 'why_icearth_synthesis' && (
          <div className="space-y-8">
            <div className={`p-6 sm:p-8 rounded-2xl border ${isLight ? 'bg-white border-stone-200 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-6`}>
              <div className="border-b border-stone-200 dark:border-stone-800 pb-4">
                <h2 className="text-2xl font-black font-sans">
                  The Sovereign Synthesis: Why ICEarth Telemetry Realizes Dan Kass’s Mandate
                </h2>
                <p className="text-sm text-stone-500 mt-1">
                  How decentralized zero-knowledge proofs and local sensor mesh networks replace broken bureaucratic paperwork with unassailable action.
                </p>
              </div>

              <div className="space-y-6 text-sm leading-relaxed">
                <p>
                  Vital Strategies’ insistence that <em>“reliable, local data are essential to turning detection into prevention”</em> directly articulates the founding mission of <strong>Indigenous Communities Earth (ICEarth)</strong> and <strong>Roulet’s Law</strong>.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className={`p-5 rounded-2xl border ${isLight ? 'bg-red-50/50 border-red-200' : 'bg-red-950/20 border-red-800'} space-y-3`}>
                    <div className="font-black text-red-700 dark:text-red-300 text-sm flex items-center gap-2">
                      <ShieldAlert size={18} />
                      <span>The Failure of Centralized Paperwork</span>
                    </div>
                    <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                      As proven in ICEarth’s forensic audits of Cleveland (Plate #81 & Plate #84), municipal bureaucracies routinely turn lead safety into a hollow paperwork ritual. Over 70,000 rental units remain uncertified while officials shuffle compliance forms. Centralized state registries are plagued by multi-year lag times, sample loss, and jurisdictional buck-passing.
                    </p>
                  </div>

                  <div className={`p-5 rounded-2xl border ${isLight ? 'bg-emerald-50/50 border-emerald-200' : 'bg-emerald-950/20 border-emerald-800'} space-y-3`}>
                    <div className="font-black text-emerald-700 dark:text-emerald-300 text-sm flex items-center gap-2">
                      <ShieldCheck size={18} />
                      <span>The ICEarth Sovereign IT Solution</span>
                    </div>
                    <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                      ICEarth deploys decentralized, zero-knowledge exposenomic ledgers where blood lead test results, water pipe telemetry, and soil XRF readings are cryptographically hashed directly at the community level. When a local school or tribal pueblo detects lead, the tamper-proof data immediately triggers automated legal notices, phytoremediation protocols, and supplier blacklists without waiting for distant government permission.
                    </p>
                  </div>
                </div>

                <div className={`p-5 rounded-xl border ${isLight ? 'bg-stone-100 border-stone-300' : 'bg-stone-950 border-stone-800'} font-mono text-xs space-y-2`}>
                  <div className="font-bold text-cyan-600 dark:text-cyan-400">
                    THE ICEARTH SOVEREIGN DATA MANIFESTO:
                  </div>
                  <div className="text-stone-700 dark:text-stone-300">
                    Local Data + Zero-Knowledge Privacy + Immutable Provenance = Instantaneous Community Prevention.
                  </div>
                  <div className="text-stone-500 text-[11px]">
                    Turning detection into prevention is not a technological impossibility—it is a question of data sovereignty.
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 6: INFOGRAPHIC STUDIO */}
        {activeSubTab === 'infographic_studio' && (
          <div className="space-y-8">
            <div className={`p-6 sm:p-8 rounded-2xl border ${isLight ? 'bg-white border-stone-200 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-6`}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-stone-200 dark:border-stone-800 pb-4">
                <div>
                  <h2 className="text-2xl font-black font-sans">
                    Plate #87: From Detection to Prevention Master Infographic
                  </h2>
                  <p className="text-sm text-stone-500 mt-1">
                    Archived in User #1 Vault under PHOTO-000CV / IP-000CV • High-Resolution Vector Standard
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-stone-950 font-bold text-xs rounded-xl flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
                  >
                    <Maximize2 size={14} />
                    <span>Open Full-Screen Lightbox</span>
                  </button>
                </div>
              </div>

              {/* Master Artwork Container */}
              <div
                onClick={() => setIsModalOpen(true)}
                className="relative rounded-2xl overflow-hidden border border-cyan-500/30 group cursor-pointer shadow-xl bg-stone-950"
              >
                <img
                  src={vitalStrategiesImg}
                  alt="From Detection to Prevention: Reliable Local Data as the Critical Catalyst for Lead Elimination (Plate #87)"
                  className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div className="text-white space-y-1">
                    <div className="text-sm font-bold flex items-center gap-2">
                      <Maximize2 size={16} className="text-cyan-400" />
                      <span>Click to launch high-resolution cryptographic lightbox</span>
                    </div>
                    <div className="text-xs text-stone-300 font-mono">
                      Vault Hash: {vaultHash}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* FULL-SCREEN LIGHTBOX MODAL */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="max-w-6xl w-full bg-stone-900 border border-cyan-500/40 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-stone-800 flex items-center justify-between text-xs font-mono text-stone-300 bg-stone-950">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-pulse" />
                <span className="font-bold">PLATE #87 • VITAL STRATEGIES: FROM DETECTION TO PREVENTION</span>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-2.5 py-1 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded text-xs cursor-pointer font-sans"
              >
                ✕ Close
              </button>
            </div>
            <div className="flex-1 overflow-auto p-2 bg-black flex items-center justify-center">
              <img
                src={vitalStrategiesImg}
                alt="Plate #87 Master Infographic"
                className="max-h-[75vh] w-auto object-contain rounded-lg shadow-lg"
              />
            </div>
            <div className="p-4 bg-stone-950 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
              <div className="text-stone-400 truncate max-w-md">
                Hash: {vaultHash}
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="https://www.vitalstrategies.org/news/from-detection-to-prevention-lead-exposure-data-is-critical-for-action/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-cyan-500 hover:bg-cyan-600 text-stone-950 font-bold rounded-lg transition-colors flex items-center gap-1 font-sans"
                >
                  <ExternalLink size={12} />
                  <span>Vital Strategies Statement</span>
                </a>
                <button
                  onClick={copyVaultHash}
                  className="px-3 py-1.5 bg-stone-800 hover:bg-stone-700 text-stone-200 font-bold rounded-lg transition-colors flex items-center gap-1 font-sans"
                >
                  {copiedHash ? <Check size={12} /> : <Copy size={12} />}
                  <span>{copiedHash ? 'Copied' : 'Copy Hash'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

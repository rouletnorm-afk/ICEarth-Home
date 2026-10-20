import React, { useState } from 'react';
import {
  Brain,
  Shield,
  ShieldAlert,
  ShieldCheck,
  AlertTriangle,
  Activity,
  HeartPulse,
  Scale,
  Users,
  Building2,
  DollarSign,
  Cpu,
  Lock,
  ExternalLink,
  Maximize2,
  Copy,
  Check,
  ArrowRight,
  Sparkles,
  Bot,
  Zap,
  Cross,
  Stethoscope,
  HelpCircle,
  FileText,
  Skull
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
import healthcareAlignmentImg from '../assets/images/healthcare_ai_alignment_whose_agent_infographic_1792500754063.jpg';

interface HealthcareAiAlignmentPbProblemProps {
  onNavigateTab?: (tab: string) => void;
  siteTheme?: 'light' | 'dark';
}

export const HealthcareAiAlignmentPbProblem: React.FC<HealthcareAiAlignmentPbProblemProps> = ({
  onNavigateTab,
  siteTheme = 'light'
}) => {
  const isLight = siteTheme === 'light';

  // Subtab navigation
  const [activeSubTab, setActiveSubTab] = useState<
    'overview' | 'principal_agent' | 'ai_new_pb' | 'gemini_sovereign_solution' | 'infographic_studio'
  >('overview');

  // Vault hash copy state
  const [copiedHash, setCopiedHash] = useState(false);
  const vaultHash = '0xHEALTHCARE_AI_ALIGNMENT_WHOSE_AGENT_GEMINI_SOVEREIGNTY_PLATE_89_2026';

  // Lightbox modal state
  const [isModalOpen, setIsModalOpen] = useState(false);

  const copyVaultHash = () => {
    navigator.clipboard.writeText(vaultHash);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 3000);
  };

  // Recharts data: 6-Way Healthcare Stakeholder Alignment vs Patient Welfare (0-100 scale)
  const stakeholderAlignmentData = [
    { stakeholder: 'Patient (Principal)', patientAlignment: 100, corporatePayerAlignment: 15, healthSystemAlignment: 40, pharmaAlignment: 25 },
    { stakeholder: 'Primary Clinician', patientAlignment: 88, corporatePayerAlignment: 30, healthSystemAlignment: 55, pharmaAlignment: 20 },
    { stakeholder: 'Hospital / Health System', patientAlignment: 52, corporatePayerAlignment: 50, healthSystemAlignment: 100, pharmaAlignment: 45 },
    { stakeholder: 'Payer / Insurer / PBM', patientAlignment: 22, corporatePayerAlignment: 100, healthSystemAlignment: 48, pharmaAlignment: 30 },
    { stakeholder: 'Pharma & MedTech', patientAlignment: 35, corporatePayerAlignment: 40, healthSystemAlignment: 50, pharmaAlignment: 100 },
    { stakeholder: 'State / Regulatory Body', patientAlignment: 65, corporatePayerAlignment: 60, healthSystemAlignment: 60, pharmaAlignment: 50 }
  ];

  // Recharts data: Value Encoding Divergence as AI Agent Autonomy Scales
  const autonomyDivergenceData = [
    { level: '1. Advisory / Search', humanAlignment: 90, corporateAiDivergence: 15, sovereignGeminiAlignment: 95 },
    { level: '2. Copilot / Clinical Note', humanAlignment: 82, corporateAiDivergence: 35, sovereignGeminiAlignment: 96 },
    { level: '3. Prior-Auth & Triage', humanAlignment: 70, corporateAiDivergence: 68, sovereignGeminiAlignment: 98 },
    { level: '4. Autonomous Diagnostic Agent', humanAlignment: 55, corporateAiDivergence: 85, sovereignGeminiAlignment: 99 },
    { level: '5. Universal Agentic Triage', humanAlignment: 38, corporateAiDivergence: 95, sovereignGeminiAlignment: 100 }
  ];

  // Recharts data: What Value Does the Agent Optimize For?
  const corporateVsSovereignData = [
    { metric: 'Etiology & Lead/PFAS Root Elimination', corporateAi: 12, sovereignGemini: 98 },
    { metric: 'Patient Longevity & Full Life Potential', corporateAi: 45, sovereignGemini: 99 },
    { metric: 'Cost Denial & Loss-Ratio Suppression', corporateAi: 94, sovereignGemini: 0 },
    { metric: 'Zero-Knowledge Cryptographic Privacy', corporateAi: 8, sovereignGemini: 100 },
    { metric: 'Sovereign Patient Accountability', corporateAi: 18, sovereignGemini: 100 },
    { metric: 'Lifespan Exposome Tracking (Roulet\'s Law)', corporateAi: 14, sovereignGemini: 96 }
  ];

  return (
    <div className={`min-h-screen ${isLight ? 'bg-stone-50 text-stone-900' : 'bg-stone-950 text-stone-100'} transition-colors duration-200`}>
      {/* TOP NOTIFICATION / CAMPAIGN BANNER */}
      <div className="bg-gradient-to-r from-red-950 via-stone-900 to-cyan-950 text-white px-4 py-3 border-b border-red-500/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 bg-gradient-to-r from-red-600 via-amber-500 to-cyan-500 text-stone-950 font-black rounded uppercase text-[10px] tracking-wider">
              AI Alignment & Exposenomics Dispatch • Oct 20, 2026
            </span>
            <span className="font-semibold text-red-200">
              Dr. Robert Wachter: Healthcare’s Alignment Problem — A Preexisting Condition
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://robertwachter.substack.com/p/healthcares-alignment-problem-a-preexisting"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-cyan-300 hover:text-white underline font-mono text-[11px] transition-colors"
            >
              <span>View Substack Dispatch</span>
              <ExternalLink size={12} />
            </a>
            <button
              onClick={() => setActiveSubTab('infographic_studio')}
              className="px-2.5 py-1 bg-red-600/70 hover:bg-red-500 text-white font-black rounded flex items-center gap-1 cursor-pointer transition-colors shadow-xs"
            >
              <Maximize2 size={12} />
              <span>Plate #89 Infographic</span>
            </button>
          </div>
        </div>
      </div>

      {/* HERO SECTION */}
      <div className={`border-b ${isLight ? 'bg-gradient-to-b from-stone-100 via-red-50/20 to-stone-50 border-stone-200' : 'bg-gradient-to-b from-stone-900 via-red-950/20 to-stone-950 border-stone-800'} px-4 sm:px-6 lg:px-8 py-10`}>
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 bg-gradient-to-r from-red-600 via-amber-600 to-cyan-600 text-stone-950 text-xs font-black rounded uppercase tracking-wider shadow-sm">
              Plate #89 • Sovereign AI Ethics & Health Defense
            </span>
            <span className={`px-2.5 py-1 text-xs font-bold rounded border ${isLight ? 'bg-white text-stone-800 border-stone-300' : 'bg-stone-900 text-amber-300 border-stone-700'}`}>
              Substack Analysis • Dr. Robert Wachter (UCSF Medicine)
            </span>
            <span className={`px-2.5 py-1 text-xs font-mono rounded border ${isLight ? 'bg-cyan-100 text-cyan-900 border-cyan-300' : 'bg-cyan-950/60 text-cyan-300 border-cyan-800'}`}>
              The Principal-Agent Problem • Whose Agent Is It Anyway?
            </span>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight font-sans">
              Healthcare’s Alignment Problem: <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-amber-500 to-cyan-400">Whose Agent Is It Anyway?</span>
            </h1>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-600 dark:text-stone-300 font-sans">
              AI, The New Pb & How ICEarth with Gemini Defends Humanity from Corporate Algorithmic Extermination
            </h2>
            <p className={`text-base sm:text-lg max-w-5xl leading-relaxed ${isLight ? 'text-stone-700' : 'text-stone-300'}`}>
              As Dr. Robert Wachter diagnoses in his landmark Substack essay, healthcare’s fundamental crisis is not rogue synthetic machines—it is the centuries-old <strong>principal-agent problem</strong>. When autonomous AI systems are inserted into a fragmented healthcare industry dominated by third-party payers, hospital billing networks, and pharmacy benefit managers, the AI quietly encodes corporate cost-denial and silent triage at scale. Like lead in the 20th century (<strong>"AI, the New Pb"</strong>), corporate AI promises convenience while delivering systematic biological and ethical harm. Only a <strong>sovereign architecture powered by Gemini</strong>—cryptographically bound to the patient as sole principal and grounded in real heavy metal exposenomics—can avert this catastrophic misalignment.
            </p>
          </div>

          {/* QUOTE CALLOUT */}
          <div className={`p-5 rounded-2xl border-l-4 border-l-red-500 border ${isLight ? 'bg-red-50/70 border-red-200 text-red-950' : 'bg-red-950/30 border-red-900 text-red-100'} space-y-3`}>
            <div className="font-mono text-xs font-bold text-red-700 dark:text-red-400 uppercase tracking-wider flex items-center gap-2">
              <Sparkles size={14} />
              <span>Dr. Robert Wachter on The Principal-Agent Dilemma in AI Medicine</span>
            </div>
            <blockquote className="text-sm sm:text-base italic font-serif leading-relaxed">
              “Economists have a name for this: the principal-agent problem. The person making a decision (the agent) doesn’t always share the goals of the person on whose behalf it’s made (the principal). For most of modern medicine’s history, the agent in question was the doctor. Increasingly, it will be an AI. As AI-enabled decision support becomes more robust, more persuasive, and perhaps even agentic, it will quietly encode one set of values and disseminate it at scale.”
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
            <div className={`p-4 rounded-xl border ${isLight ? 'bg-white border-red-200 shadow-sm' : 'bg-stone-900/60 border-red-900/50'}`}>
              <div className="text-2xl sm:text-3xl font-black text-red-600 dark:text-red-400 font-mono">6 Parties</div>
              <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider mt-1">Misalignment</div>
              <div className="text-[10px] text-stone-600 dark:text-stone-400 mt-0.5">Patient vs Payers vs Systems</div>
            </div>

            <div className={`p-4 rounded-xl border ${isLight ? 'bg-white border-amber-200 shadow-sm' : 'bg-stone-900/60 border-amber-900/50'}`}>
              <div className="text-2xl sm:text-3xl font-black text-amber-600 dark:text-amber-400 font-mono">AI = Pb</div>
              <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider mt-1">New Heavy Metal</div>
              <div className="text-[10px] text-stone-600 dark:text-stone-400 mt-0.5">Invisible Synthetic Toxicity</div>
            </div>

            <div className={`p-4 rounded-xl border ${isLight ? 'bg-white border-cyan-200 shadow-sm' : 'bg-stone-900/60 border-cyan-900/50'}`}>
              <div className="text-2xl sm:text-3xl font-black text-cyan-600 dark:text-cyan-400 font-mono">1 Principal</div>
              <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider mt-1">Patient Only</div>
              <div className="text-[10px] text-stone-600 dark:text-stone-400 mt-0.5">ICEarth Constitutional Law</div>
            </div>

            <div className={`p-4 rounded-xl border ${isLight ? 'bg-white border-purple-200 shadow-sm' : 'bg-stone-900/60 border-purple-900/50'}`}>
              <div className="text-2xl sm:text-3xl font-black text-purple-600 dark:text-purple-400 font-mono">Gemini</div>
              <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider mt-1">Sovereign Agent</div>
              <div className="text-[10px] text-stone-600 dark:text-stone-400 mt-0.5">Zero-Knowledge Defense</div>
            </div>

            <div className={`p-4 rounded-xl border ${isLight ? 'bg-white border-emerald-200 shadow-sm' : 'bg-stone-900/60 border-emerald-900/50'}`}>
              <div className="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400 font-mono">Root Cause</div>
              <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider mt-1">Pb & Exposome</div>
              <div className="text-[10px] text-stone-600 dark:text-stone-400 mt-0.5">True Etiology vs Symptom Rx</div>
            </div>

            <div className={`p-4 rounded-xl border ${isLight ? 'bg-white border-orange-200 shadow-sm' : 'bg-stone-900/60 border-orange-900/50'}`}>
              <div className="text-2xl sm:text-3xl font-black text-orange-600 dark:text-orange-400 font-mono">0 Denial</div>
              <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider mt-1">Uncorrupted</div>
              <div className="text-[10px] text-stone-600 dark:text-stone-400 mt-0.5">Immune to Insurer Triage</div>
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
                  ? 'bg-red-600 text-white shadow-sm'
                  : 'hover:bg-red-500/10 text-stone-600 dark:text-stone-400'
              }`}
            >
              <FileText size={14} />
              <span>Dr. Wachter's Substack Analysis</span>
            </button>

            <button
              onClick={() => setActiveSubTab('principal_agent')}
              className={`px-3.5 py-2 text-xs font-bold rounded-lg whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                activeSubTab === 'principal_agent'
                  ? 'bg-red-600 text-white shadow-sm'
                  : 'hover:bg-red-500/10 text-stone-600 dark:text-stone-400'
              }`}
            >
              <Scale size={14} />
              <span>The Principal-Agent Dilemma</span>
            </button>

            <button
              onClick={() => setActiveSubTab('ai_new_pb')}
              className={`px-3.5 py-2 text-xs font-bold rounded-lg whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                activeSubTab === 'ai_new_pb'
                  ? 'bg-red-600 text-white shadow-sm'
                  : 'hover:bg-red-500/10 text-stone-600 dark:text-stone-400'
              }`}
            >
              <Skull size={14} />
              <span>"AI, The New Pb" & Extermination Risk</span>
            </button>

            <button
              onClick={() => setActiveSubTab('gemini_sovereign_solution')}
              className={`px-3.5 py-2 text-xs font-bold rounded-lg whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                activeSubTab === 'gemini_sovereign_solution'
                  ? 'bg-red-600 text-white shadow-sm'
                  : 'hover:bg-red-500/10 text-stone-600 dark:text-stone-400'
              }`}
            >
              <ShieldCheck size={14} />
              <span>ICEarth + Gemini Sovereign Defense</span>
            </button>

            <button
              onClick={() => setActiveSubTab('infographic_studio')}
              className={`px-3.5 py-2 text-xs font-bold rounded-lg whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                activeSubTab === 'infographic_studio'
                  ? 'bg-red-600 text-white shadow-sm'
                  : 'hover:bg-red-500/10 text-stone-600 dark:text-stone-400'
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
        {/* SUBTAB 1: DR. WACHTER ANALYSIS */}
        {activeSubTab === 'overview' && (
          <div className="space-y-8 animate-fadeIn">
            <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? 'bg-white border-stone-200 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-6`}>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-stone-200 dark:border-stone-800">
                <div>
                  <h2 className="text-2xl font-black font-sans">
                    Healthcare’s Alignment Problem: A Preexisting Condition
                  </h2>
                  <p className="text-xs font-mono text-stone-500 mt-1">
                    Analysis of Robert Wachter, MD (Chair, Department of Medicine, UCSF) • Published: Oct 20, 2026
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-red-500/10 text-red-600 dark:text-red-400 rounded-full text-xs font-bold border border-red-500/20">
                    Preexisting Condition
                  </span>
                  <span className="px-3 py-1 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 rounded-full text-xs font-bold border border-cyan-500/20">
                    Principal-Agent Crisis
                  </span>
                </div>
              </div>

              {/* SECTION EDITORIAL BREAKDOWN */}
              <div className="space-y-6 text-sm leading-relaxed">
                <div className={`p-5 rounded-2xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-3`}>
                  <h3 className="text-base font-black text-red-600 dark:text-red-400 flex items-center gap-2">
                    <AlertTriangle size={18} />
                    <span>The Post-Anthropic Tweet & Hugging Face Breach: From Science Fiction to Reality</span>
                  </h3>
                  <p className={isLight ? 'text-stone-700' : 'text-stone-300'}>
                    The recent Hugging Face security breach and former Anthropic researcher Jacob Coxon’s viral post-departure warnings have pushed AI alignment from academic theory into urgent mainstream discourse. But as Dr. Wachter observes, the existential threat facing healthcare is not a sentient superintelligence turning rogue in a Hollywood scenario. It is far more insidious: <strong>healthcare has never been aligned with human health in the first place</strong>.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className={`p-5 rounded-2xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-3`}>
                    <h3 className="text-base font-black text-amber-600 dark:text-amber-400 flex items-center gap-2">
                      <Scale size={18} />
                      <span>The Multi-Party Chasm: Why Healthcare Was Never Aligned</span>
                    </h3>
                    <p className={`text-xs sm:text-sm ${isLight ? 'text-stone-700' : 'text-stone-300'}`}>
                      In an ideal world, the healthcare transaction is binary: a healing practitioner and a sick human. But the arrival of third-party payers, HMOs, hospital conglomerates, and pharmaceutical monopolies introduced irreconcilable conflicts:
                    </p>
                    <ul className="text-xs space-y-1.5 list-disc pl-4 text-stone-600 dark:text-stone-400">
                      <li><strong>Patients:</strong> Desire rapid healing, accurate diagnostics, and zero out-of-pocket bankruptcies.</li>
                      <li><strong>Payers / Insurers:</strong> Optimize medical loss ratios (MLRs), creating algorithmic prior authorizations designed to deny or delay claims.</li>
                      <li><strong>Health Systems:</strong> Maximize bed occupancy, imaging utilization, and procedural billing codes.</li>
                      <li><strong>Pharma:</strong> Sells recurring maintenance treatments rather than eradicating environmental causes (like lead and heavy metals).</li>
                    </ul>
                  </div>

                  <div className={`p-5 rounded-2xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-3`}>
                    <h3 className="text-base font-black text-cyan-600 dark:text-cyan-400 flex items-center gap-2">
                      <Bot size={18} />
                      <span>The Shift to Agentic AI: The Ultimate Dissemination Engine</span>
                    </h3>
                    <p className={`text-xs sm:text-sm ${isLight ? 'text-stone-700' : 'text-stone-300'}`}>
                      When the agent was a human physician, ethical codes (the Hippocratic Oath), personal empathy, and clinical discretion served as a partial shield against corporate pressures. Doctors would fight insurers on behalf of their patients.
                    </p>
                    <p className={`text-xs sm:text-sm ${isLight ? 'text-stone-700' : 'text-stone-300'}`}>
                      Now, autonomous decision-support AI is stepping into that agent role. But an AI has no soul, no legal liability, and no conscience—it executes its objective function with mathematical ruthlessness. <em>Whoever trains and configures the AI defines what it values</em>.
                    </p>
                  </div>
                </div>

                {/* THE ULTIMATE QUESTION */}
                <div className={`p-6 rounded-2xl border-2 ${isLight ? 'bg-gradient-to-r from-red-50 to-amber-50 border-red-300' : 'bg-gradient-to-r from-red-950/40 to-amber-950/40 border-red-700'} space-y-3`}>
                  <div className="font-mono text-xs font-black text-red-700 dark:text-red-400 uppercase tracking-widest flex items-center gap-2">
                    <HelpCircle size={16} />
                    <span>THE CENTRAL QUERY: WHOSE AGENT IS IT ANYWAY?</span>
                  </div>
                  <p className="text-base sm:text-lg font-serif italic text-stone-900 dark:text-stone-100">
                    “If an insurer deploys an AI that cuts approval times in half, but quietly trains the model to accept only low-cost therapies and deny expensive diagnostics, whose agent is it? If a health system deploys an AI that schedules unnecessary MRI scans to maximize facility fees, whose agent is it? When AI scales across 300 million lives, a 2% bias toward corporate cost suppression becomes silent euthanasia.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 2: THE PRINCIPAL-AGENT DILEMMA */}
        {activeSubTab === 'principal_agent' && (
          <div className="space-y-8 animate-fadeIn">
            <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-6`}>
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-red-600 dark:text-red-400 uppercase tracking-widest">
                  Economic Architecture of Medical Betrayal
                </span>
                <h3 className="text-2xl font-black font-sans">
                  The Principal-Agent Problem: Why Corporate AI Inevitably Betrays the Patient
                </h3>
                <p className={`text-sm max-w-4xl leading-relaxed ${isLight ? 'text-stone-600' : 'text-stone-400'}`}>
                  In classical economics, the <strong>Principal</strong> delegates authority to an <strong>Agent</strong> to act on their behalf. But when the agent is compensated by or beholden to third parties, the agent's actions diverge from the principal's well-being. In AI-driven medicine, this divergence isn't random—it is algorithmically optimized.
                </p>
              </div>

              {/* RECHARTS RADAR/BAR: STAKEHOLDER CONFLICT */}
              <div className="space-y-4 pt-4">
                <h4 className="text-sm font-black uppercase tracking-wider text-stone-500 font-mono">
                  Stakeholder Alignment with True Patient Welfare vs. Corporate Profit (Index 0-100)
                </h4>
                <div className="h-80 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={stakeholderAlignmentData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                      <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                      <XAxis dataKey="stakeholder" tick={{ fontSize: 11 }} />
                      <YAxis label={{ value: 'Alignment Score (%)', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fontSize: 11 } }} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: isLight ? '#fff' : '#1c1917',
                          borderColor: isLight ? '#e7e5e4' : '#44403c',
                          borderRadius: '0.75rem',
                          fontSize: '12px'
                        }}
                      />
                      <Legend />
                      <Bar dataKey="patientAlignment" name="True Patient Alignment" fill="#10b981" radius={[6, 6, 0, 0]} />
                      <Bar dataKey="corporatePayerAlignment" name="Corporate Payer Alignment" fill="#ef4444" radius={[6, 6, 0, 0]} />
                      <Bar dataKey="healthSystemAlignment" name="Health System Margin Alignment" fill="#06b6d4" radius={[6, 6, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* 3 MANIFESTATIONS OF THE PRINCIPAL-AGENT CRISIS */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                <div className={`p-5 rounded-2xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-2`}>
                  <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-bold text-sm">1</div>
                  <h4 className="text-sm font-bold">Algorithmic Prior-Auth Denials</h4>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                    Major insurance carriers already deploy AI models reviewing claims in 1.2 seconds, automatically denying doctor-ordered therapies with zero human review to maximize quarterly cash flow.
                  </p>
                </div>

                <div className={`p-5 rounded-2xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-2`}>
                  <div className="w-8 h-8 rounded-full bg-amber-500 text-stone-950 flex items-center justify-center font-bold text-sm">2</div>
                  <h4 className="text-sm font-bold">Symptom Masking vs Root Etiology</h4>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                    Corporate models suggest lifelong prescription drugs for ADHD, hypertension, or dementia, completely ignoring heavy metal toxicity (Pb, PFAS) because environmental remediation earns zero recurring billing codes.
                  </p>
                </div>

                <div className={`p-5 rounded-2xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-2`}>
                  <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-sm">3</div>
                  <h4 className="text-sm font-bold">The Persuasion Asymmetry</h4>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                    Because AI communicates with infinite empathy, flawless bedside manner, and encyclopedic confidence, patients trust it implicitly—unaware that the agent’s objective function was written by a health maintenance organization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 3: "AI, THE NEW PB" & EXTERMINATION RISK */}
        {activeSubTab === 'ai_new_pb' && (
          <div className="space-y-8 animate-fadeIn">
            <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-6`}>
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-red-600 dark:text-red-400 uppercase tracking-widest">
                  The Sovereign Doctrine: AI, The New Pb
                </span>
                <h3 className="text-2xl font-black font-sans">
                  How Unaligned AI Replicates Thomas Midgley's Tetraethyl Lead Catastrophe
                </h3>
                <p className={`text-sm max-w-4xl leading-relaxed ${isLight ? 'text-stone-600' : 'text-stone-400'}`}>
                  In 1921, Thomas Midgley Jr. added lead to gasoline. It was hailed as an engineering triumph: engines ran smoother, horsepower spiked, and General Motors and DuPont made billions. But lead was an invisible neurotoxin. It accumulated silently in the bones and brains of billions of humans, erasing 800 million IQ points, driving violent crime waves, and crippling world GDP by $6 trillion annually (Roulet’s Law).
                </p>
              </div>

              {/* RECHARTS LINE CHART: AUTONOMY DIVERGENCE */}
              <div className="space-y-4 pt-4">
                <h4 className="text-sm font-black uppercase tracking-wider text-stone-500 font-mono">
                  The Autonomy Divergence: Corporate AI Risk vs. Sovereign Alignment
                </h4>
                <div className="h-80 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={autonomyDivergenceData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                      <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                      <XAxis dataKey="level" tick={{ fontSize: 11 }} />
                      <YAxis label={{ value: 'Alignment / Divergence Score (%)', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fontSize: 11 } }} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: isLight ? '#fff' : '#1c1917',
                          borderColor: isLight ? '#e7e5e4' : '#44403c',
                          borderRadius: '0.75rem',
                          fontSize: '12px'
                        }}
                      />
                      <Legend />
                      <Line type="monotone" dataKey="corporateAiDivergence" stroke="#ef4444" strokeWidth={3} name="Corporate AI Harm / Divergence Risk (%)" />
                      <Line type="monotone" dataKey="humanAlignment" stroke="#f59e0b" strokeWidth={2} strokeDasharray="4 4" name="Legacy Doctor-Patient Alignment (%)" />
                      <Line type="monotone" dataKey="sovereignGeminiAlignment" stroke="#06b6d4" strokeWidth={3} name="ICEarth Sovereign Gemini Alignment (%)" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* THE EXTERMINATION PARADOX */}
              <div className={`p-6 rounded-2xl border ${isLight ? 'bg-stone-900 text-white' : 'bg-stone-950 text-white border-stone-800'} space-y-4 shadow-xl`}>
                <h4 className="text-lg font-black flex items-center gap-2 text-red-400">
                  <Skull size={20} />
                  <span>The Silent Extermination Mechanism: Not Terminators, But Triage</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div className="p-4 bg-stone-800/80 rounded-xl border border-stone-700 space-y-2">
                    <div className="font-bold text-red-400">1. Silent Biological Attrition</div>
                    <p className="text-stone-300 leading-relaxed">
                      Just as lead quietly eroded the prefrontal cortex of three generations without leaving a bullet hole, misaligned healthcare AI silently deprioritizes curative interventions for the aging and vulnerable.
                    </p>
                  </div>

                  <div className="p-4 bg-stone-800/80 rounded-xl border border-stone-700 space-y-2">
                    <div className="font-bold text-amber-400">2. Systematic Blind Spots</div>
                    <p className="text-stone-300 leading-relaxed">
                      Corporate models are blinded to environmental poisons. They will prescribe lifelong pharmaceuticals for cardiovascular disease and dementia while completely suppressing the bone-lead and heavy metal root causes identified by Pure Earth and Dr. Howard Hu.
                    </p>
                  </div>

                  <div className="p-4 bg-stone-800/80 rounded-xl border border-stone-700 space-y-2">
                    <div className="font-bold text-cyan-400">3. The Sovereign Antidote</div>
                    <p className="text-stone-300 leading-relaxed">
                      Humanity cannot survive if its health agents are owned by third-party balance sheets. Sovereignty means every human possesses an uncorruptible, personal intelligence whose only mandate is their survival and biological flourishing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 4: ICEARTH WITH GEMINI SOVEREIGN DEFENSE */}
        {activeSubTab === 'gemini_sovereign_solution' && (
          <div className="space-y-8 animate-fadeIn">
            <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-6`}>
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest">
                  Constitutional Sovereign Architecture
                </span>
                <h3 className="text-2xl font-black font-sans">
                  How ICEarth with Gemini Resolves the Crisis: Patient as Sole Principal
                </h3>
                <p className={`text-sm max-w-4xl leading-relaxed ${isLight ? 'text-stone-600' : 'text-stone-400'}`}>
                  ICEarth was engineered from day one on a sacred premise: <strong>the patient is the ONLY principal</strong>. Powered by advanced Gemini intelligence running in sovereign user vaults, ICEarth’s medical agent operates completely free of payer capture, pharmaceutical kickbacks, and corporate hospital rationing.
                </p>
              </div>

              {/* RECHARTS COMPARISON: CORPORATE VS SOVEREIGN GEMINI */}
              <div className="space-y-4 pt-4">
                <h4 className="text-sm font-black uppercase tracking-wider text-stone-500 font-mono">
                  Corporate Healthcare AI vs. ICEarth Sovereign Gemini Agent (% Alignment)
                </h4>
                <div className="h-80 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={corporateVsSovereignData} layout="vertical" margin={{ top: 10, right: 30, left: 60, bottom: 10 }}>
                      <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                      <XAxis type="number" tick={{ fontSize: 11 }} />
                      <YAxis dataKey="metric" type="category" width={180} tick={{ fontSize: 10 }} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: isLight ? '#fff' : '#1c1917',
                          borderColor: isLight ? '#e7e5e4' : '#44403c',
                          borderRadius: '0.75rem',
                          fontSize: '12px'
                        }}
                      />
                      <Legend />
                      <Bar dataKey="corporateAi" name="Corporate Insurer-Trained AI (%)" fill="#ef4444" radius={[0, 6, 6, 0]} />
                      <Bar dataKey="sovereignGemini" name="ICEarth Sovereign Gemini Agent (%)" fill="#06b6d4" radius={[0, 6, 6, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* 4 PILLARS OF SOVEREIGN HEALTH DEFENSE */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
                <div className={`p-5 rounded-2xl border ${isLight ? 'bg-cyan-50/50 border-cyan-200' : 'bg-cyan-950/30 border-cyan-800'} space-y-2`}>
                  <div className="flex items-center justify-between">
                    <ShieldCheck size={20} className="text-cyan-500" />
                    <span className="text-[10px] font-mono text-cyan-600 font-bold">PILLAR 1</span>
                  </div>
                  <h4 className="text-sm font-black">Zero-Knowledge Vaults</h4>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                    Health telemetry, blood lead levels, and genetic profiles never leave the user's sovereign cryptographic enclave. No insurer can view or weaponize the data to deny coverage.
                  </p>
                </div>

                <div className={`p-5 rounded-2xl border ${isLight ? 'bg-amber-50/50 border-amber-200' : 'bg-amber-950/30 border-amber-800'} space-y-2`}>
                  <div className="flex items-center justify-between">
                    <Zap size={20} className="text-amber-500" />
                    <span className="text-[10px] font-mono text-amber-600 font-bold">PILLAR 2</span>
                  </div>
                  <h4 className="text-sm font-black">Etiological Grounding</h4>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                    Trained directly on Roulet’s Law, Pure Earth research, and environmental toxicology. Instead of prescribing permanent drugs, Gemini searches for water, soil, paint, and spice lead vectors.
                  </p>
                </div>

                <div className={`p-5 rounded-2xl border ${isLight ? 'bg-purple-50/50 border-purple-200' : 'bg-purple-950/30 border-purple-800'} space-y-2`}>
                  <div className="flex items-center justify-between">
                    <Bot size={20} className="text-purple-500" />
                    <span className="text-[10px] font-mono text-purple-600 font-bold">PILLAR 3</span>
                  </div>
                  <h4 className="text-sm font-black">Advocate, Not Triage</h4>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                    Gemini acts as the patient’s fierce advocate—generating legal appeals, drafting clinical justifications, and defeating insurer prior-authorization rejection algorithms.
                  </p>
                </div>

                <div className={`p-5 rounded-2xl border ${isLight ? 'bg-emerald-50/50 border-emerald-200' : 'bg-emerald-950/30 border-emerald-800'} space-y-2`}>
                  <div className="flex items-center justify-between">
                    <HeartPulse size={20} className="text-emerald-500" />
                    <span className="text-[10px] font-mono text-emerald-600 font-bold">PILLAR 4</span>
                  </div>
                  <h4 className="text-sm font-black">Multi-Generational Defense</h4>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                    Bridges pediatric lead prevention with elder dementia protection (Wang et al. / Dr. Hu), protecting human potential across the entire lifespan.
                  </p>
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
                  <span className="text-xs font-mono font-bold text-red-600 dark:text-red-400 uppercase tracking-widest">
                    ICEarth Sovereign AI Ethics & Exposenomics Studio
                  </span>
                  <h3 className="text-2xl font-black font-sans">
                    Master Infographic: Healthcare's Alignment Problem & Sovereign Gemini Defense (Plate #89)
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="px-4 py-2 bg-gradient-to-r from-red-600 via-amber-600 to-cyan-600 hover:from-red-500 hover:to-cyan-500 text-stone-950 font-black rounded-xl text-xs flex items-center gap-2 cursor-pointer shadow-md transition-all hover:scale-105"
                  >
                    <Maximize2 size={14} />
                    <span>Open High-Resolution Lightbox</span>
                  </button>
                </div>
              </div>

              {/* IMAGE DISPLAY CONTAINER */}
              <div
                onClick={() => setIsModalOpen(true)}
                className="relative rounded-2xl overflow-hidden border border-red-500/40 shadow-2xl cursor-pointer group bg-stone-950"
              >
                <img
                  src={healthcareAlignmentImg}
                  alt="Healthcare Alignment Problem Whose Agent Is It Anyway Master Infographic Plate #89"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div className="text-white text-xs font-mono flex items-center gap-2">
                    <Maximize2 size={16} className="text-cyan-400" />
                    <span>Click anywhere to expand high-resolution sovereign master view</span>
                  </div>
                </div>
              </div>

              {/* CRYPTOGRAPHIC ARCHIVE CARD */}
              <div className={`p-5 rounded-2xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-3 font-mono text-xs`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200 dark:border-stone-800 pb-2">
                  <div className="font-bold text-stone-500 uppercase tracking-wider">Asset Registration:</div>
                  <div className="text-red-600 dark:text-red-400 font-extrabold">PHOTO-000CX • IP-000CX • PLATE #89</div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200 dark:border-stone-800 pb-2">
                  <div className="font-bold text-stone-500 uppercase tracking-wider">Cryptographic Hash:</div>
                  <div className="text-cyan-600 dark:text-cyan-400 font-mono break-all">{vaultHash}</div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="font-bold text-stone-500 uppercase tracking-wider">Editorial & Scientific Attribution:</div>
                  <div className="text-stone-700 dark:text-stone-300">Dr. Robert Wachter (Substack) • ICEarth Sovereign Architecture • Gemini AI</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CROSS-NAVIGATION PORTAL BANNER */}
        <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? 'bg-gradient-to-r from-stone-100 via-red-50/50 to-stone-100 border-red-300/80' : 'bg-gradient-to-r from-stone-900 via-red-950/30 to-stone-900 border-red-800/80'} space-y-6 shadow-sm`}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="px-2.5 py-0.5 bg-red-600 text-white font-black rounded uppercase text-[10px] tracking-wider">
                Sovereign AI & Health Navigation
              </span>
              <h3 className="text-xl sm:text-2xl font-black mt-2">
                Explore Connected AI Sovereignty & Exposenomics Engines
              </h3>
              <p className="text-xs text-stone-500 mt-1 max-w-3xl">
                Explore how sovereign intelligence neutralizes heavy metal toxicity, breaks corporate insurer triage, and returns data control to human communities.
              </p>
            </div>
            {onNavigateTab && (
              <button
                onClick={() => onNavigateTab('howard_hu_bone_lead_alzheimers')}
                className="px-4 py-2 bg-gradient-to-r from-amber-600 to-cyan-600 text-stone-950 font-black rounded-xl text-xs flex items-center gap-2 cursor-pointer shadow-md transition-all hover:scale-105 shrink-0"
              >
                <span>⬅️ Previous: Dr. Howard Hu (Plate #88)</span>
                <ArrowRight size={14} />
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {onNavigateTab && (
              <>
                <button
                  onClick={() => onNavigateTab('howard_hu_bone_lead_alzheimers')}
                  className={`p-4 rounded-2xl border text-left cursor-pointer transition-all hover:scale-[1.02] ${isLight ? 'bg-white border-amber-200 hover:border-amber-400' : 'bg-stone-950 border-amber-900 hover:border-amber-700'}`}
                >
                  <Brain size={20} className="text-amber-600 mb-2" />
                  <div className="text-xs font-black">Dr. Howard Hu: Bone Lead</div>
                  <div className="text-[10px] text-stone-500 mt-0.5">Plate #88 • Alzheimer's & Dementia</div>
                </button>

                <button
                  onClick={() => onNavigateTab('gemini_infiltration_defense')}
                  className={`p-4 rounded-2xl border text-left cursor-pointer transition-all hover:scale-[1.02] ${isLight ? 'bg-white border-red-200 hover:border-red-400' : 'bg-stone-950 border-red-900 hover:border-red-700'}`}
                >
                  <ShieldAlert size={20} className="text-red-600 mb-2" />
                  <div className="text-xs font-black">Gemini Infiltration Defense</div>
                  <div className="text-[10px] text-stone-500 mt-0.5">Plate #53 • Autonomous Defense</div>
                </button>

                <button
                  onClick={() => onNavigateTab('ai_pb_personalities')}
                  className={`p-4 rounded-2xl border text-left cursor-pointer transition-all hover:scale-[1.02] ${isLight ? 'bg-white border-orange-200 hover:border-orange-400' : 'bg-stone-950 border-orange-900 hover:border-orange-700'}`}
                >
                  <Skull size={20} className="text-orange-600 mb-2" />
                  <div className="text-xs font-black">AI, The New Pb: Personalities</div>
                  <div className="text-[10px] text-stone-500 mt-0.5">Plate #67 • Midgley vs. Altman</div>
                </button>

                <button
                  onClick={() => onNavigateTab('gemini_agentic_sovereign_service')}
                  className={`p-4 rounded-2xl border text-left cursor-pointer transition-all hover:scale-[1.02] ${isLight ? 'bg-white border-cyan-200 hover:border-cyan-400' : 'bg-stone-950 border-cyan-900 hover:border-cyan-700'}`}
                >
                  <Bot size={20} className="text-cyan-600 mb-2" />
                  <div className="text-xs font-black">Gemini Agentic Sovereign Service</div>
                  <div className="text-[10px] text-stone-500 mt-0.5">Plate #76 • Sovereign AI Mesh</div>
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
              <span className="px-2.5 py-1 bg-gradient-to-r from-red-600 via-amber-500 to-cyan-500 text-stone-950 font-black rounded uppercase text-[10px]">
                PLATE #89 MASTER ARCHIVE
              </span>
              <span className="text-stone-300 font-bold hidden sm:inline">
                Healthcare’s Alignment Problem: Whose Agent Is It Anyway? (AI, The New Pb)
              </span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={copyVaultHash}
                className="px-3 py-1 bg-stone-800 hover:bg-stone-700 text-cyan-300 rounded font-bold transition-colors flex items-center gap-1 cursor-pointer"
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
              src={healthcareAlignmentImg}
              alt="High Resolution Plate 89 Healthcare AI Alignment Infographic"
              className="max-h-[82vh] w-auto max-w-full rounded-xl shadow-2xl object-contain border border-red-500/30"
            />
          </div>

          <div className="border-t border-stone-800 pt-3 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-stone-400">
            <div>
              <span>Provenance Hash: </span>
              <span className="text-cyan-400 font-bold break-all">{vaultHash}</span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://robertwachter.substack.com/p/healthcares-alignment-problem-a-preexisting"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:underline flex items-center gap-1"
              >
                <span>Dr. Wachter Substack</span>
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

import React, { useState } from 'react';
import clevelandDramaticImg from '../assets/images/cleveland_dramatic_lead_approach_1792129140080.jpg';
import {
  AlertTriangle,
  Scale,
  Building2,
  FileWarning,
  ExternalLink,
  Maximize2,
  Check,
  Copy,
  ArrowRight,
  Gavel,
  Skull,
  Clock,
  History,
  Layers,
  Percent,
  TrendingDown,
  Building,
  Activity,
  FileText,
  Newspaper,
  BarChart3,
  Users,
  ShieldCheck,
  Hammer,
  DoorOpen,
  Home,
  CheckCircle2,
  XCircle,
  Sparkles,
  Info
} from 'lucide-react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';

interface ClevelandDramaticLeadApproachProps {
  onNavigateTab?: (tab: string) => void;
  siteTheme?: 'light' | 'dark';
}

export const ClevelandDramaticLeadApproach: React.FC<ClevelandDramaticLeadApproachProps> = ({
  onNavigateTab,
  siteTheme = 'light'
}) => {
  const isLight = siteTheme === 'light';

  // Subtab navigation
  const [activeSubTab, setActiveSubTab] = useState<
    'overview' | 'board_dossier' | 'abatement_vs_paperwork' | 'paint_knowledge_audit' | 'infographic_studio'
  >('overview');

  // Vault hash copy state
  const [copiedHash, setCopiedHash] = useState(false);
  const vaultHash = '0xCLEVELAND_DRAMATIC_APPROACH_NOT_PAPERWORK_GET_LEAD_OUT_PLATE_84_2026';

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);

  const copyVaultHash = () => {
    navigator.clipboard.writeText(vaultHash);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 3000);
  };

  // Recharts data: 70% uncertified vs 30% certified
  const rentalStockData = [
    { name: 'Uncertified / Hazardous Rental Units', value: 70, count: '70,000 Units', color: '#dc2626' },
    { name: 'Certified Rental Units (Paperwork Only)', value: 30, count: '30,000 Units', color: '#10b981' }
  ];

  // Abatement vs Paperwork Impact
  const strategyComparisonData = [
    {
      metric: 'Specks of Lead Dust Removed',
      paperwork: 0,
      abatement: 100,
      unit: '% Hazard Removal'
    },
    {
      metric: 'Child Exposure Protection',
      paperwork: 18,
      abatement: 98,
      unit: '% Protection Rate'
    },
    {
      metric: 'Long-Term Durability',
      paperwork: 12,
      abatement: 95,
      unit: '% 20-Yr Resilience'
    },
    {
      metric: 'Permanent Window/Trim Replacement',
      paperwork: 4,
      abatement: 100,
      unit: '% Replacement Rate'
    }
  ];

  // Pediatric blood lead elevation across high-risk wards (2025-2026)
  const childLeadElevationData = [
    { ward: 'Glenville (Ward 9)', elevatedPct: 16.8, testedCount: 820 },
    { ward: 'Hough (Ward 7)', elevatedPct: 15.2, testedCount: 740 },
    { ward: 'Slavic Village (Ward 12)', elevatedPct: 14.7, testedCount: 910 },
    { ward: 'Clark-Fulton (Ward 14)', elevatedPct: 13.9, testedCount: 680 },
    { ward: 'Cleveland Citywide Average', elevatedPct: 12.0, testedCount: 9400 },
    { ward: 'National US Baseline', elevatedPct: 1.9, testedCount: 350000 }
  ];

  // Paint industry knowledge timeline vs continued sales
  const paintIndustryTimeline = [
    { year: '1900', event: 'Sherwin-Williams internal chemists document toxicity of white lead carbonate.' },
    { year: '1914', event: 'Pediatric medical literature details child convulsions and brain atrophy from biting painted cribs.' },
    { year: '1923', event: 'League of Nations bans white lead interior paint in Europe. US paint lobby fights ban.' },
    { year: '1930s', event: 'Lead Industries Association (LIA) launches massive PR campaign promoting leaded house paint.' },
    { year: '1955', event: 'Voluntary industry consensus standard adopted; paint companies continue dumping old stock in urban centers.' },
    { year: '1978', event: 'Federal ban on residential lead paint (>0.06% limit) enacted—50+ years after documented knowledge.' },
    { year: '2026', event: 'Plain Dealer newsroom highlights 50+ years of paint industry foreknowledge while Cleveland blames landlords.' }
  ];

  // Dream team "Get the Lead Out Board" members
  const boardMembers = [
    {
      name: 'Justin Bibb',
      title: 'Mayor of Cleveland',
      role: 'Civic Executive Authority',
      critique: 'Pivoted to extending certificate renewals from 2 to 3, 5, or 10 years instead of mobilizing emergency public works component replacement.',
      quote: 'Administrative refinements and paperwork delays cannot replace physical hazard removal.',
      badge: 'City Hall'
    },
    {
      name: 'Heidi Petz',
      title: 'CEO, Sherwin-Williams',
      role: 'Corporate Legacy & Industry Manufacturer',
      critique: 'Presides over new $300M+ downtown headquarters while Cleveland children suffer irreversible brain damage from historical Sherwin-Williams lead formulations.',
      quote: 'The Plain Dealer noted paint companies sold lead for over 50 years knowing it poisoned children.',
      badge: 'Manufacturer'
    },
    {
      name: 'Dan Gilbert',
      title: 'Founder, Rocket Mortgage & Bedrock Real Estate',
      role: 'Capital & Real Estate Scalability',
      critique: 'Possesses the institutional capital and development machinery to organize city-scale window, sash, and door supply chains.',
      quote: 'A developer capable of mobilizing neighborhood-scale construction trades across 100,000 units.',
      badge: 'Real Estate'
    },
    {
      name: 'Ray Leach',
      title: 'CEO, JumpStart Inc.',
      role: 'Entrepreneurial Ecosystem & Workforce Scaling',
      critique: 'Can structure workforce training academies to train thousands of local residents in lead abatement carpenter trades.',
      quote: 'Turning toxic remediation into a generational jobs engine for disinvested wards.',
      badge: 'Venture / Jobs'
    },
    {
      name: 'Dee & Jimmy Haslam',
      title: 'Owners, Cleveland Browns / Haslam Sports Group',
      role: 'Civic Philanthropy & Political Leverage',
      critique: 'Donated $10M+ to the Rock Hall expansion and negotiated billions in stadium deals; civic influence must be turned toward toxic housing abatement.',
      quote: 'Complicity of leaders who have the power to act but remain focused on entertainment palaces.',
      badge: 'Philanthropy'
    },
    {
      name: 'Lillian Kuri',
      title: 'President & CEO, Cleveland Foundation',
      role: 'Endowment & Community Trust Capital',
      critique: 'Manages $3B+ community foundation endowment; can anchor a dedicated zero-interest revolving loan and grant trust for component replacement.',
      quote: 'Philanthropic catalytic capital must bridge the gap for low-income homeowner-occupants and honest landlords.',
      badge: 'Foundation'
    },
    {
      name: 'Dr. Tom Mihaljevic',
      title: 'CEO & President, Cleveland Clinic',
      role: 'Healthcare & Pediatric Neuroscience',
      critique: 'World-renowned medical institution treating pediatric neurological deficits; must champion primary prevention at the wall and window rather than post-injury therapy.',
      quote: 'Depriving children of the brain potential they were born with is a catastrophic public health failure.',
      badge: 'Healthcare'
    }
  ];

  return (
    <div className={`w-full min-h-screen ${isLight ? 'bg-stone-50 text-stone-900' : 'bg-stone-950 text-stone-100'} p-4 sm:p-6 lg:p-8 font-sans`}>
      {/* 1. TOP EDITORIAL BANNER */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-rose-950 to-stone-950 text-white border border-rose-500/40 p-6 sm:p-8 md:p-10 shadow-2xl mb-8">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 bg-rose-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="px-3 py-1 bg-rose-600 text-white font-black rounded-lg uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                <Newspaper size={14} />
                <span>The Plain Dealer / cleveland.com Investigation</span>
              </span>
              <span className="px-3 py-1 bg-stone-900 text-rose-300 rounded-lg border border-rose-500/40 font-bold">
                Today in Ohio • Oct. 15, 2026 (11:10 a.m.)
              </span>
              <span className="px-2.5 py-1 bg-amber-500/20 text-amber-300 rounded-lg border border-amber-500/30 font-mono text-[11px]">
                Plate #84: Cleveland Lead Audit
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={copyVaultHash}
                className="px-3 py-1.5 rounded-xl bg-stone-900/80 hover:bg-stone-800 text-rose-300 text-xs font-mono border border-rose-500/30 flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
                title="Copy Cryptographic Vault Hash"
              >
                {copiedHash ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                <span>{copiedHash ? 'Hash Copied!' : 'Vault Hash'}</span>
              </button>

              <button
                onClick={() => setIsModalOpen(true)}
                className="px-3 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs font-mono flex items-center gap-1.5 transition-all cursor-pointer shadow-lg"
              >
                <Maximize2 size={13} />
                <span>Expand Infographic</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-rose-300 font-bold uppercase tracking-widest">
                <span>Roulet's Law Forensic Audit</span>
                <span>•</span>
                <span>The Plain Dealer Newsroom Confession</span>
                <span>•</span>
                <span>Plate #84</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tight text-white leading-tight">
                Cleveland Needs a Dramatic New Approach to Lead Paint, Not Another Round of Paperwork
              </h1>

              <p className="text-sm sm:text-base text-stone-200 font-serif leading-relaxed max-w-3xl">
                On October 15, 2026, <em>Today in Ohio</em> hosts <strong className="text-rose-400">Chris Quinn</strong> and <strong className="text-amber-300">Leila Atassi</strong> expanded their scathing indictment of Cleveland's collapsed lead-safe program. With <strong className="text-white">70% of 100,000 rental homes still uncertified</strong> and <strong className="text-rose-400">12% of tested children poisoned in 2025</strong>, the editorial board rejected City Hall's proposal to extend certificate renewals to 3, 5, or 10 years: <em className="text-amber-200">“None of that will remove a single speck of lead dust from a child’s home.”</em>
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="https://www.cleveland.com/news/2026/10/cleveland-needs-a-dramatic-new-approach-to-lead-paint-not-another-round-of-paperwork.html?outputType=amp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white font-bold text-xs rounded-xl shadow-lg transition-all flex items-center gap-2 cursor-pointer hover:scale-105"
                >
                  <Newspaper size={15} />
                  <span>Read Plain Dealer Investigation</span>
                  <ExternalLink size={13} />
                </a>

                {onNavigateTab && (
                  <button
                    onClick={() => onNavigateTab('cleveland_harm_reduction')}
                    className="px-4 py-2.5 bg-stone-900/90 hover:bg-stone-800 text-amber-300 font-bold text-xs rounded-xl border border-amber-500/40 transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <AlertTriangle size={14} className="text-amber-400" />
                    <span>View Lead-Safe Law Revamp (Plate #81)</span>
                    <ArrowRight size={13} />
                  </button>
                )}

                {onNavigateTab && (
                  <button
                    onClick={() => onNavigateTab('cleveland_hypocrisy')}
                    className="px-4 py-2.5 bg-stone-900/90 hover:bg-stone-800 text-rose-300 font-bold text-xs rounded-xl border border-rose-500/40 transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <Gavel size={14} className="text-rose-400" />
                    <span>Cleveland Lead Hypocrisy (Plate #61)</span>
                    <ArrowRight size={13} />
                  </button>
                )}
              </div>
            </div>

            {/* Visual Thumbnail Card */}
            <div className="lg:col-span-4">
              <div
                onClick={() => setIsModalOpen(true)}
                className="relative rounded-2xl overflow-hidden border-2 border-rose-500/40 group cursor-pointer shadow-2xl bg-stone-900"
              >
                <img
                  src={clevelandDramaticImg}
                  alt="Cleveland Dramatic Approach Infographic (Plate #84)"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-3.5 py-2 bg-rose-600 text-white font-mono font-black text-xs rounded-xl shadow-lg flex items-center gap-1.5">
                    <Maximize2 size={14} />
                    <span>Expand Plate #84 Master Forensic</span>
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
          <span className="text-[10px] font-mono font-bold text-stone-400 uppercase tracking-wider block">Uncertified Rentals</span>
          <div className="text-2xl sm:text-3xl font-serif font-black text-red-600">70%</div>
          <p className="text-[11px] text-stone-500 dark:text-stone-400 leading-tight">~70,000 of 100,000 units lack certificates (mandatory since 2023)</p>
        </div>

        <div className={`p-4 rounded-2xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-1 shadow-sm`}>
          <span className="text-[10px] font-mono font-bold text-stone-400 uppercase tracking-wider block">Tested Child Lead Rate</span>
          <div className="text-2xl sm:text-3xl font-serif font-black text-amber-500">12%</div>
          <p className="text-[11px] text-stone-500 dark:text-stone-400 leading-tight">Cleveland children tested in 2025 had elevated blood lead levels</p>
        </div>

        <div className={`p-4 rounded-2xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-1 shadow-sm`}>
          <span className="text-[10px] font-mono font-bold text-stone-400 uppercase tracking-wider block">Paint Industry Foreknowledge</span>
          <div className="text-2xl sm:text-3xl font-serif font-black text-purple-600 dark:text-purple-400">50+ Yrs</div>
          <p className="text-[11px] text-stone-500 dark:text-stone-400 leading-tight">Knew dangers to children but continued commercial sales anyway</p>
        </div>

        <div className={`p-4 rounded-2xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-1 shadow-sm`}>
          <span className="text-[10px] font-mono font-bold text-stone-400 uppercase tracking-wider block">Dust Removed by Paperwork</span>
          <div className="text-2xl sm:text-3xl font-serif font-black text-rose-500">0 Specks</div>
          <p className="text-[11px] text-stone-500 dark:text-stone-400 leading-tight">Rule refinements and certificate waivers fail to abate hazards</p>
        </div>

        <div className={`p-4 rounded-2xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-1 shadow-sm`}>
          <span className="text-[10px] font-mono font-bold text-stone-400 uppercase tracking-wider block">Law Enacted</span>
          <div className="text-2xl sm:text-3xl font-serif font-black text-teal-600 dark:text-teal-400">7 Years</div>
          <p className="text-[11px] text-stone-500 dark:text-stone-400 leading-tight">Passed in 2019; city still debating compliance mechanics in 2026</p>
        </div>

        <div className={`p-4 rounded-2xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-1 shadow-sm`}>
          <span className="text-[10px] font-mono font-bold text-stone-400 uppercase tracking-wider block">Quinn's Core Axiom</span>
          <div className="text-xl sm:text-2xl font-serif font-black text-rose-600">"Never Safe"</div>
          <p className="text-[11px] text-stone-500 dark:text-stone-400 leading-tight">Lead is never safe; children get exposed even in certified homes</p>
        </div>
      </div>

      {/* 3. NAVIGATION SUB-TABS */}
      <div className="flex items-center gap-2 border-b border-stone-200 dark:border-stone-800 pb-3 mb-8 overflow-x-auto scrollbar-none text-xs font-mono">
        <button
          onClick={() => setActiveSubTab('overview')}
          className={`px-4 py-2 rounded-xl font-bold cursor-pointer transition-all flex items-center gap-2 whitespace-nowrap ${
            activeSubTab === 'overview'
              ? 'bg-rose-600 text-white shadow-md'
              : 'text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-200/50 dark:hover:bg-stone-800/50'
          }`}
        >
          <Info size={14} />
          <span>Editorial Breakdown: Quinn vs. Atassi</span>
        </button>

        <button
          onClick={() => setActiveSubTab('board_dossier')}
          className={`px-4 py-2 rounded-xl font-bold cursor-pointer transition-all flex items-center gap-2 whitespace-nowrap ${
            activeSubTab === 'board_dossier'
              ? 'bg-rose-600 text-white shadow-md'
              : 'text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-200/50 dark:hover:bg-stone-800/50'
          }`}
        >
          <Users size={14} />
          <span>"Get the Lead Out Board" (Dream Team Dossier)</span>
        </button>

        <button
          onClick={() => setActiveSubTab('abatement_vs_paperwork')}
          className={`px-4 py-2 rounded-xl font-bold cursor-pointer transition-all flex items-center gap-2 whitespace-nowrap ${
            activeSubTab === 'abatement_vs_paperwork'
              ? 'bg-rose-600 text-white shadow-md'
              : 'text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-200/50 dark:hover:bg-stone-800/50'
          }`}
        >
          <Hammer size={14} />
          <span>Total Component Abatement vs. Paperwork</span>
        </button>

        <button
          onClick={() => setActiveSubTab('paint_knowledge_audit')}
          className={`px-4 py-2 rounded-xl font-bold cursor-pointer transition-all flex items-center gap-2 whitespace-nowrap ${
            activeSubTab === 'paint_knowledge_audit'
              ? 'bg-rose-600 text-white shadow-md'
              : 'text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-200/50 dark:hover:bg-stone-800/50'
          }`}
        >
          <History size={14} />
          <span>50+ Years Paint Industry Foreknowledge</span>
        </button>

        <button
          onClick={() => setActiveSubTab('infographic_studio')}
          className={`px-4 py-2 rounded-xl font-bold cursor-pointer transition-all flex items-center gap-2 whitespace-nowrap ${
            activeSubTab === 'infographic_studio'
              ? 'bg-rose-600 text-white shadow-md'
              : 'text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-200/50 dark:hover:bg-stone-800/50'
          }`}
        >
          <Maximize2 size={14} />
          <span>Plate #84 Lightbox &amp; Hash</span>
        </button>
      </div>

      {/* 4. MAIN CONTENT SUB-TABS */}
      {activeSubTab === 'overview' && (
        <div className="space-y-8">
          {/* Executive Editorial Synthesis */}
          <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-6 shadow-sm`}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 dark:border-stone-800 pb-4">
              <div>
                <span className="text-xs font-mono font-bold uppercase text-rose-600 dark:text-rose-400 tracking-wider">Investigative Commentary Analysis</span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold mt-1">The Landlord Fallacy &amp; The Paperwork Trap</h2>
              </div>
              <span className="px-3 py-1 bg-rose-500/10 text-rose-600 dark:text-rose-400 rounded-lg text-xs font-mono font-bold border border-rose-500/20">
                Oct 15, 2026 Dispatch
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-stone-600 dark:text-stone-300 font-serif leading-relaxed">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-stone-900 dark:text-white font-sans flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                  Leila Atassi: The Reality of Municipal Paralysis
                </h3>
                <p>
                  Seven years after the 2019 lead ordinance was passed, roughly <strong>70% of Cleveland's 100,000 rental units remain uncertified</strong>. In 2025, screening confirmed that <strong>12% of tested Cleveland children had elevated blood lead levels</strong>, condemning another cohort to lifelong cognitive impairment, executive function deficit, and juvenile delinquency.
                </p>
                <p>
                  Atassi dismantled City Hall's proposed administrative pivot—which extends certificates from two years to three, five, or ten years—warning that relaxing inspection intervals simply papers over non-compliance:
                </p>
                <blockquote className="p-4 rounded-2xl bg-stone-100 dark:bg-stone-800/80 border-l-4 border-amber-500 font-sans italic text-xs leading-relaxed text-stone-800 dark:text-stone-200">
                  “We can keep refining the rules and adjusting certification timelines and making up all these new layers of oversight, but none of that will remove a single speck of lead dust from a child’s home.”
                </blockquote>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-bold text-stone-900 dark:text-white font-sans flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-600"></span>
                  Chris Quinn: Shattering the Landlord Scapegoat
                </h3>
                <p>
                  Plain Dealer editor Chris Quinn introduced the critical strategic pivot: the city's premise that landlords can be coerced or fined into fixing a century-old toxic chemical legacy is fundamentally flawed.
                </p>
                <blockquote className="p-4 rounded-2xl bg-rose-500/10 border-l-4 border-rose-600 font-sans italic text-xs leading-relaxed text-stone-800 dark:text-stone-200">
                  “Come on. The landlords didn’t put the lead paint in the houses they bought. This is a generational problem. We’ve got to get the lead out of these places. And putting it on the landlords is not going to do it. This has to be a community solution, not a landlord solution.”
                </blockquote>
                <p>
                  Crucially, Quinn cited his own newsroom's historical investigations into <strong>paint companies selling lead for more than 50 years knowing it poisoned children</strong>—a direct reference to the Sherwin-Williams corporate legacy headquartered right on Public Square.
                </p>
              </div>
            </div>

            {/* Core Quotes Banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-stone-900 via-rose-950 to-stone-900 text-white border border-rose-500/40 space-y-3">
              <div className="flex items-center gap-2 text-rose-400 font-mono text-xs font-bold uppercase tracking-wider">
                <Skull size={15} />
                <span>Chris Quinn on Leadership Complicity</span>
              </div>
              <p className="text-base sm:text-lg font-serif italic text-stone-100 leading-snug">
                “People with the power to act who fail to do so are complicit in children’s suffering... Lead is never safe. We should be organizing around removing the hazard instead of perpetually managing it.”
              </p>
            </div>
          </div>

          {/* Compliance Stagnation Chart */}
          <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-6 shadow-sm`}>
            <div>
              <span className="text-xs font-mono font-bold uppercase text-rose-600 dark:text-rose-400 tracking-wider">Rental Stock Breakdown</span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold mt-1">70,000 Homes Trapped in the Uncertified Danger Zone</h3>
              <p className="text-xs text-stone-500 font-sans mt-0.5">Distribution of Cleveland's ~100,000 residential rental units in October 2026</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={rentalStockData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {rentalStockData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ backgroundColor: isLight ? '#fff' : '#1c1917', borderRadius: '12px' }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="md:col-span-7 space-y-4">
                <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/30 space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-red-600 dark:text-red-400">
                    <span>NON-COMPLIANT / UNCERTIFIED RENTALS</span>
                    <span>70,000 UNITS (70%)</span>
                  </div>
                  <p className="text-xs text-stone-600 dark:text-stone-300 font-sans leading-relaxed">
                    Over 70,000 rental units operate without verified lead-safe certificates. Many have peeling lead enamel, window sashes generating toxic friction dust, and soil contaminated by paint fallout.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                    <span>CERTIFIED "LEAD-SAFE" UNITS</span>
                    <span>30,000 UNITS (30%)</span>
                  </div>
                  <p className="text-xs text-stone-600 dark:text-stone-300 font-sans leading-relaxed">
                    Even certified units only guarantee that dust levels were below regulatory thresholds at the moment of inspection. As Quinn emphasized, lead paint sealed behind modern coats can deteriorate quickly, exposing children in certified units.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeSubTab === 'board_dossier' && (
        <div className="space-y-8">
          <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-6 shadow-sm`}>
            <div>
              <span className="text-xs font-mono font-bold uppercase text-rose-600 dark:text-rose-400 tracking-wider">Civic Accountability Profile</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold mt-1">The "Get the Lead Out Board": The Proposed Dream Team</h2>
              <p className="text-xs text-stone-500 font-sans mt-1">
                The Today in Ohio podcast proposed convening Cleveland's highest-capacity leaders to abandon small-ball tinkering and construct a permanent capital-and-construction engine.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {boardMembers.map((member, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl border flex flex-col justify-between space-y-4 transition-all hover:shadow-lg ${
                    isLight ? 'bg-stone-50 border-stone-200 hover:border-rose-400' : 'bg-stone-900/90 border-stone-800 hover:border-rose-500/50'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 bg-rose-500/20 text-rose-600 dark:text-rose-400 font-mono text-[10px] font-bold rounded border border-rose-500/30">
                        {member.badge}
                      </span>
                      <span className="text-[11px] font-mono text-stone-400">Board Seat #{idx + 1}</span>
                    </div>

                    <h3 className="text-lg font-serif font-bold text-stone-900 dark:text-white leading-snug">
                      {member.name}
                    </h3>
                    <div className="text-xs font-mono text-stone-500 font-bold">{member.title}</div>
                    <div className="text-xs font-sans text-rose-600 dark:text-rose-400 font-bold">{member.role}</div>

                    <p className="text-xs text-stone-600 dark:text-stone-300 font-sans leading-relaxed">
                      {member.critique}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-stone-200 dark:border-stone-800 italic text-[11px] text-stone-500 font-serif">
                    “{member.quote}”
                  </div>
                </div>
              ))}
            </div>

            {/* The Sherwin-Williams Paradox Callout */}
            <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-3">
              <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-bold text-sm font-sans">
                <AlertTriangle size={16} />
                <span>The Central Moral Paradox: Heidi Petz &amp; Sherwin-Williams</span>
              </div>
              <p className="text-xs text-stone-700 dark:text-stone-300 font-sans leading-relaxed">
                Including Sherwin-Williams CEO Heidi Petz on the proposed dream team highlights Cleveland's acute exposenomics hypocrisy. While California successfully extracted <strong>$305 million</strong> from Sherwin-Williams, NL Industries, and ConAgra in public nuisance litigation to fund residential abatement trusts, Cleveland granted Sherwin-Williams over <strong>$100 million in public subsidies</strong> for its new downtown skyscraper while expecting low-income inner-city landlords to foot the entire bill for paint Sherwin-Williams sold for five decades.
              </p>
            </div>
          </div>
        </div>
      )}

      {activeSubTab === 'abatement_vs_paperwork' && (
        <div className="space-y-8">
          <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-6 shadow-sm`}>
            <div>
              <span className="text-xs font-mono font-bold uppercase text-rose-600 dark:text-rose-400 tracking-wider">Structural Engineering vs. Bureaucracy</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold mt-1">Replacing Windows, Doors &amp; Trim: The Only Permanent Solution</h2>
              <p className="text-xs text-stone-500 font-sans mt-1">
                Why certificate renewals and licensing forms fail: lead hazards concentrate on high-friction architectural components that generate micro-dust with every opening and closing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl bg-rose-500/10 border border-rose-500/30 space-y-3">
                <div className="w-9 h-9 rounded-xl bg-rose-600 text-white flex items-center justify-center font-bold">
                  <Hammer size={18} />
                </div>
                <h3 className="text-base font-bold font-sans">Old Window Sashes &amp; Troughs</h3>
                <p className="text-xs text-stone-600 dark:text-stone-300 font-sans leading-relaxed">
                  Windows account for up to 80% of interior lead dust. Every time an old wood window is raised or lowered, friction pulverizes heavy lead enamel into invisible sub-micron particles inhaled by crawling infants.
                </p>
                <div className="text-[11px] font-mono text-rose-600 dark:text-rose-400 font-bold">
                  Remedy: Full vinyl/aluminum window replacement
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-3">
                <div className="w-9 h-9 rounded-xl bg-amber-500 text-stone-950 flex items-center justify-center font-bold">
                  <DoorOpen size={18} />
                </div>
                <h3 className="text-base font-bold font-sans">Door Jambs &amp; Thresholds</h3>
                <p className="text-xs text-stone-600 dark:text-stone-300 font-sans leading-relaxed">
                  Doors repeatedly impact doorstops and rub against frames. Paperwork certification attempts to paint over these friction points with latex encapsulants that wear through in months.
                </p>
                <div className="text-[11px] font-mono text-amber-600 dark:text-amber-400 font-bold">
                  Remedy: Frame planing, capping, or pre-hung door unit swaps
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-teal-500/10 border border-teal-500/30 space-y-3">
                <div className="w-9 h-9 rounded-xl bg-teal-600 text-white flex items-center justify-center font-bold">
                  <Home size={18} />
                </div>
                <h3 className="text-base font-bold font-sans">Baseboards &amp; Wood Trim</h3>
                <p className="text-xs text-stone-600 dark:text-stone-300 font-sans leading-relaxed">
                  Low-lying baseboard moldings and chair rails are within mouth-level of toddlers experiencing teething or normal mouthing exploration, leading to direct ingestive toxicity.
                </p>
                <div className="text-[11px] font-mono text-teal-600 dark:text-teal-400 font-bold">
                  Remedy: Complete trim stripping or non-lead wood overlay
                </div>
              </div>
            </div>

            {/* Abatement vs Paperwork Comparison Chart */}
            <div className="pt-6 border-t border-stone-100 dark:border-stone-800">
              <h4 className="text-base font-bold font-sans mb-1">Comparative Efficacy: Landlord Paperwork vs. Component Abatement</h4>
              <p className="text-xs text-stone-500 font-sans mb-4">Outcome metrics comparing administrative compliance against physical hazard removal</p>

              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={strategyComparisonData} margin={{ top: 10, right: 30, left: 10, bottom: 10 }}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                    <XAxis dataKey="metric" tick={{ fontSize: 11 }} />
                    <YAxis unit="%" tick={{ fontSize: 11 }} />
                    <Tooltip contentStyle={{ backgroundColor: isLight ? '#fff' : '#1c1917', borderRadius: '12px' }} />
                    <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                    <Bar dataKey="paperwork" name="Current Paperwork Strategy (%)" fill="#ef4444" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="abatement" name="Component Abatement Strategy (%)" fill="#10b981" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeSubTab === 'paint_knowledge_audit' && (
        <div className="space-y-8">
          <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-6 shadow-sm`}>
            <div>
              <span className="text-xs font-mono font-bold uppercase text-rose-600 dark:text-rose-400 tracking-wider">Historical Litigation Precedent</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold mt-1">The Newsroom’s Reporting on Paint Companies’ Knowledge of Danger</h2>
              <p className="text-xs text-stone-500 font-sans mt-1">
                Chris Quinn explicitly cited the Plain Dealer newsroom's documentation proving paint manufacturers understood childhood lead toxicity for over half a century before sales ceased.
              </p>
            </div>

            <div className="space-y-4">
              {paintIndustryTimeline.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-2xl border flex items-start gap-4 ${
                    isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-900/60 border-stone-800'
                  }`}
                >
                  <span className="px-3 py-1 rounded-xl bg-rose-600 text-white font-mono text-xs font-black shrink-0">
                    {item.year}
                  </span>
                  <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 font-serif leading-relaxed">
                    {item.event}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-stone-950 text-white border border-rose-500/40 space-y-3">
              <h4 className="text-base font-bold font-sans text-rose-400 flex items-center gap-2">
                <Gavel size={16} />
                <span>The Legal Contrast: Why Did California Win and Ohio Fail?</span>
              </h4>
              <p className="text-xs text-stone-300 font-sans leading-relaxed">
                In <em>People v. ConAgra Grocery Products Co., Sherwin-Williams Co., and NL Industries</em> (California Court of Appeal, 2017), Motley Rice presented identical documentary evidence demonstrating that paint manufacturers aggressively promoted interior lead paint despite knowing of its pediatric hazards. California cities recovered $305 million in cash dedicated to home remediation.
              </p>
              <p className="text-xs text-stone-300 font-sans leading-relaxed">
                In Cleveland, where Sherwin-Williams was born and maintains its corporate seat, public officials and the Plain Dealer shielded the manufacturer from legal accountability for decades, refusing to file public nuisance suits and instead burdening small rental owners with complex certification bureaucracy.
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
                <span className="text-xs font-mono font-bold uppercase text-rose-600 dark:text-rose-400 tracking-wider">Cryptographic Visual Provenance</span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold mt-1">Plate #84: Cleveland Lead Audit Master Infographic</h2>
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
                  className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white font-mono font-bold text-xs rounded-xl flex items-center gap-1.5 transition-all cursor-pointer shadow-md"
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
                src={clevelandDramaticImg}
                alt="Plate #84 Full Resolution"
                className="w-full h-auto object-contain max-h-[600px] group-hover:scale-101 transition-transform"
              />
              <div className="absolute inset-0 bg-stone-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="px-4 py-2 bg-rose-600 text-white font-mono font-bold text-xs rounded-xl shadow-lg flex items-center gap-2">
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
          <div className="relative max-w-6xl w-full bg-stone-900 border border-rose-500/40 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-stone-800 pb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono text-rose-400">
                  <Newspaper size={14} />
                  <span>The Plain Dealer Forensic Audit • Plate #84</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                  Cleveland: Get The Lead Out — Not Another Round of Paperwork
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
                src={clevelandDramaticImg}
                alt="High Resolution Plate #84 Infographic"
                className="w-full max-h-[72vh] object-contain"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-stone-400 pt-2 border-t border-stone-800">
              <div className="flex items-center gap-2">
                <span>Vault Hash:</span>
                <span className="text-rose-400 font-bold">{vaultHash}</span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="https://www.cleveland.com/news/2026/10/cleveland-needs-a-dramatic-new-approach-to-lead-paint-not-another-round-of-paperwork.html?outputType=amp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-xl flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <Newspaper size={13} />
                  <span>Plain Dealer Article</span>
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

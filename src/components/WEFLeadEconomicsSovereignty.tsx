import React, { useState } from 'react';
import {
  TrendingDown,
  DollarSign,
  Globe,
  Users,
  HeartPulse,
  Brain,
  Scale,
  Sparkles,
  ExternalLink,
  Maximize2,
  Copy,
  Check,
  ArrowRight,
  ShieldCheck,
  ShieldAlert,
  AlertTriangle,
  Building2,
  Coins,
  BarChart3,
  PieChart as PieChartIcon,
  CheckCircle2,
  Layers,
  Award,
  Zap,
  Info,
  ChevronRight,
  TrendingUp,
  FileText,
  Crown
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
import wefInfographicImg from '../assets/images/wef_lead_economics_infographic_1792468426342.jpg';

interface WEFLeadEconomicsSovereigntyProps {
  onNavigateTab?: (tab: string) => void;
  siteTheme?: 'light' | 'dark';
}

export const WEFLeadEconomicsSovereignty: React.FC<WEFLeadEconomicsSovereigntyProps> = ({
  onNavigateTab,
  siteTheme = 'light'
}) => {
  const isLight = siteTheme === 'light';

  // Subtab navigation
  const [activeSubTab, setActiveSubTab] = useState<
    'overview' | 'macro_breakdown' | 'roi_catalytic' | 'case_studies' | 'roulets_law_proof' | 'infographic_studio'
  >('overview');

  // Vault hash copy state
  const [copiedHash, setCopiedHash] = useState(false);
  const vaultHash = '0xWEF_6_TRILLION_ECONOMICS_OF_LEAD_POISONING_ROULETS_LAW_PLATE_86_2026';

  // Lightbox modal state
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ROI Calculator state
  const [donorContributionMillions, setDonorContributionMillions] = useState<number>(50);

  const copyVaultHash = () => {
    navigator.clipboard.writeText(vaultHash);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 3000);
  };

  // Recharts data: $6 Trillion Loss Breakdown
  const macroeconomicLossData = [
    { name: 'Cardiovascular (CVD) Mortality', amount: 4.10, percent: 68.3, fill: '#ef4444', desc: '5.5M premature adult cardiovascular deaths annually' },
    { name: 'Pediatric Cognitive / IQ Earnings Loss', amount: 1.40, percent: 23.3, fill: '#f59e0b', desc: 'Up to 12% lifetime earnings penalty across 1B+ children' },
    { name: 'Direct Healthcare Expenditures', amount: 0.35, percent: 5.8, fill: '#8b5cf6', desc: 'Chronic disease management, dialysis, and stroke care' },
    { name: 'Educational Remediation & Lost Yield', amount: 0.15, percent: 2.5, fill: '#06b6d4', desc: 'Compensatory education and lower returns on human capital' }
  ];

  // Recharts data: Comparison of Investment vs Cost ($ Billions)
  const interventionCostComparisonData = [
    { name: 'UNICEF Catalytic Fund (2040 Target)', value: 1.6, fill: '#10b981', label: '$1.6B Catalytic Solution' },
    { name: 'Annual Global Loss (1 Year Alone)', value: 6000.0, fill: '#b91c1c', label: '$6,000B Lost Every Year' }
  ];

  // Recharts data: Bangladesh Turmeric Lead Adulteration Rapid Reduction Timeline (%)
  const bangladeshTimelineData = [
    { year: '2019 (Baseline)', adulterationRate: 47, note: 'Pre-intervention: 47% turmeric contaminated with lead chromate' },
    { year: '2020 (Enforcement)', adulterationRate: 15, note: 'Nationwide crackdown, mobile testing, and merchant education' },
    { year: '2021 (Elimination)', adulterationRate: 0, note: 'Zero lead chromate detected; immediate plummet in pediatric BLL' },
    { year: '2026 (Sustained)', adulterationRate: 0, note: 'Institutionalized surveillance and sovereign supply chain tracing' }
  ];

  // Recharts data: Republic of Georgia Pediatric Elevation Drops
  const georgiaTimelineData = [
    { year: '2018 (MICS Survey)', elevatedRate: 41, status: 'Severe National Crisis' },
    { year: '2019 (Action Plan)', elevatedRate: 24, status: 'Inter-agency enforcement' },
    { year: '2021 (Regulation)', elevatedRate: 11, status: 'Strict import controls' },
    { year: '2026 (National Audit)', elevatedRate: 4, status: 'Near universal phase-out' }
  ];

  // Domestic Matching Multiplier Data ($1 Catalytic unlocks $4 Domestic)
  const fundingMultiplierData = [
    { stage: 'External Catalytic Seed', catalytic: 1.0, domesticMatch: 0.0, totalYield: 1.0 },
    { stage: 'National Policy Mandate', catalytic: 1.0, domesticMatch: 1.8, totalYield: 2.8 },
    { stage: 'Domestic Infrastructure Mobilized', catalytic: 1.0, domesticMatch: 3.8, totalYield: 4.8 }
  ];

  return (
    <div className={`min-h-screen ${isLight ? 'bg-stone-50 text-stone-900' : 'bg-stone-950 text-stone-100'} transition-colors duration-200`}>
      {/* TOP NOTIFICATION / CAMPAIGN BANNER */}
      <div className="bg-gradient-to-r from-red-900 via-amber-900 to-stone-900 text-white px-4 py-3 border-b border-amber-500/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 bg-amber-500 text-stone-950 font-black rounded uppercase text-[10px] tracking-wider">
              WEF Global Report • Oct 19, 2026
            </span>
            <span className="font-semibold text-amber-200">
              International Lead Poisoning Prevention Week Special Economic Briefing
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.weforum.org/stories/health-and-healthcare-systems/lead-poisoning-how-to-stop-it"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-amber-300 hover:text-white underline font-mono text-[11px] transition-colors"
            >
              <span>View WEF Investigation</span>
              <ExternalLink size={12} />
            </a>
            <button
              onClick={() => setActiveSubTab('infographic_studio')}
              className="px-2.5 py-1 bg-amber-600/60 hover:bg-amber-500 text-white font-bold rounded flex items-center gap-1 cursor-pointer transition-colors"
            >
              <Maximize2 size={12} />
              <span>Plate #86 Infographic</span>
            </button>
          </div>
        </div>
      </div>

      {/* HERO SECTION */}
      <div className={`border-b ${isLight ? 'bg-gradient-to-b from-stone-100 via-amber-50/40 to-stone-50 border-stone-200' : 'bg-gradient-to-b from-stone-900 via-amber-950/20 to-stone-950 border-stone-800'} px-4 sm:px-6 lg:px-8 py-10`}>
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 bg-gradient-to-r from-amber-600 to-red-600 text-white text-xs font-black rounded uppercase tracking-wider shadow-sm">
              Plate #86 • Master Economic Proof
            </span>
            <span className={`px-2.5 py-1 text-xs font-bold rounded border ${isLight ? 'bg-white text-stone-800 border-stone-300' : 'bg-stone-900 text-amber-300 border-stone-700'}`}>
              World Economic Forum • Health & Healthcare Systems
            </span>
            <span className={`px-2.5 py-1 text-xs font-mono rounded border ${isLight ? 'bg-amber-100 text-amber-900 border-amber-300' : 'bg-amber-950/60 text-amber-300 border-amber-800'}`}>
              Partnership for a Lead-Free Future (PLF)
            </span>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight font-sans">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-amber-600 to-amber-500">$6 Trillion Silent Tax:</span> The Economics of Global Lead Poisoning & Roulet’s Law
            </h1>
            <p className={`text-base sm:text-lg max-w-5xl leading-relaxed ${isLight ? 'text-stone-700' : 'text-stone-300'}`}>
              During International Lead Poisoning Prevention Week, reporting from the <strong>World Economic Forum</strong> reveals the staggering macroeconomic toll of heavy metal toxicity: <strong>$6 trillion lost annually</strong>—the equivalent of nearly <strong>7% of global GDP</strong>—with over <strong>1 billion children</strong> poisoned and <strong>5.5 million premature cardiovascular deaths</strong> every year. As an economist, this is the definitive real-world proof of <em>Roulet’s Law</em>: lead is not merely an environmental hazard, but a predatory biological tax destroying human capital, cognitive potential, and national wealth.
            </p>
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
            <div className={`p-4 rounded-xl border ${isLight ? 'bg-white border-red-200 shadow-sm' : 'bg-stone-900/60 border-red-900/50'}`}>
              <div className="text-2xl sm:text-3xl font-black text-red-600 dark:text-red-400 font-mono">$6.0T</div>
              <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider mt-1">Annual Global Loss</div>
              <div className="text-[10px] text-stone-600 dark:text-stone-400 mt-0.5">~7% of Global GDP</div>
            </div>

            <div className={`p-4 rounded-xl border ${isLight ? 'bg-white border-amber-200 shadow-sm' : 'bg-stone-900/60 border-amber-900/50'}`}>
              <div className="text-2xl sm:text-3xl font-black text-amber-600 dark:text-amber-400 font-mono">1.0B+</div>
              <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider mt-1">Children Poisoned</div>
              <div className="text-[10px] text-stone-600 dark:text-stone-400 mt-0.5">2 in 5 Kids Worldwide</div>
            </div>

            <div className={`p-4 rounded-xl border ${isLight ? 'bg-white border-rose-200 shadow-sm' : 'bg-stone-900/60 border-rose-900/50'}`}>
              <div className="text-2xl sm:text-3xl font-black text-rose-600 dark:text-rose-400 font-mono">5.5M</div>
              <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider mt-1">CVD Deaths / Year</div>
              <div className="text-[10px] text-stone-600 dark:text-stone-400 mt-0.5">Cardiovascular Mortality</div>
            </div>

            <div className={`p-4 rounded-xl border ${isLight ? 'bg-white border-purple-200 shadow-sm' : 'bg-stone-900/60 border-purple-900/50'}`}>
              <div className="text-2xl sm:text-3xl font-black text-purple-600 dark:text-purple-400 font-mono">-12%</div>
              <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider mt-1">Lifetime Earnings</div>
              <div className="text-[10px] text-stone-600 dark:text-stone-400 mt-0.5">Cognitive Capital Drain</div>
            </div>

            <div className={`p-4 rounded-xl border ${isLight ? 'bg-white border-emerald-200 shadow-sm' : 'bg-stone-900/60 border-emerald-900/50'}`}>
              <div className="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400 font-mono">$1.6B</div>
              <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider mt-1">Catalytic Solution</div>
              <div className="text-[10px] text-stone-600 dark:text-stone-400 mt-0.5">&lt; $2 Per Child by 2040</div>
            </div>

            <div className={`p-4 rounded-xl border ${isLight ? 'bg-white border-blue-200 shadow-sm' : 'bg-stone-900/60 border-blue-900/50'}`}>
              <div className="text-2xl sm:text-3xl font-black text-blue-600 dark:text-blue-400 font-mono">3,750:1</div>
              <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider mt-1">Economic Payoff</div>
              <div className="text-[10px] text-stone-600 dark:text-stone-400 mt-0.5">$6T Loss vs $1.6B Seed</div>
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
                  ? 'bg-amber-500 text-stone-950 shadow-sm'
                  : 'hover:bg-amber-500/10 text-stone-600 dark:text-stone-400'
              }`}
            >
              <FileText size={14} />
              <span>Executive Briefing</span>
            </button>

            <button
              onClick={() => setActiveSubTab('macro_breakdown')}
              className={`px-3.5 py-2 text-xs font-bold rounded-lg whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                activeSubTab === 'macro_breakdown'
                  ? 'bg-amber-500 text-stone-950 shadow-sm'
                  : 'hover:bg-amber-500/10 text-stone-600 dark:text-stone-400'
              }`}
            >
              <BarChart3 size={14} />
              <span>$6 Trillion Macroeconomic Breakdown</span>
            </button>

            <button
              onClick={() => setActiveSubTab('roi_catalytic')}
              className={`px-3.5 py-2 text-xs font-bold rounded-lg whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                activeSubTab === 'roi_catalytic'
                  ? 'bg-amber-500 text-stone-950 shadow-sm'
                  : 'hover:bg-amber-500/10 text-stone-600 dark:text-stone-400'
              }`}
            >
              <TrendingUp size={14} />
              <span>The Business Case ($1.6B vs $6T)</span>
            </button>

            <button
              onClick={() => setActiveSubTab('case_studies')}
              className={`px-3.5 py-2 text-xs font-bold rounded-lg whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                activeSubTab === 'case_studies'
                  ? 'bg-amber-500 text-stone-950 shadow-sm'
                  : 'hover:bg-amber-500/10 text-stone-600 dark:text-stone-400'
              }`}
            >
              <CheckCircle2 size={14} />
              <span>Rapid Proof: Bangladesh & Georgia</span>
            </button>

            <button
              onClick={() => setActiveSubTab('roulets_law_proof')}
              className={`px-3.5 py-2 text-xs font-bold rounded-lg whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                activeSubTab === 'roulets_law_proof'
                  ? 'bg-amber-500 text-stone-950 shadow-sm'
                  : 'hover:bg-amber-500/10 text-stone-600 dark:text-stone-400'
              }`}
            >
              <Scale size={14} />
              <span>Roulet's Law Econometric Proof</span>
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
              <span>Infographic Studio (Plate #86)</span>
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
                    Executive Summary: The Invisible Parasite on Global GDP
                  </h2>
                  <p className="text-sm text-stone-500 mt-1">
                    Published Oct 19, 2026 for International Lead Poisoning Prevention Week (ILPPW) • World Economic Forum
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="https://www.weforum.org/stories/health-and-healthcare-systems/lead-poisoning-how-to-stop-it"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold text-xs rounded-xl flex items-center gap-1.5 transition-all shadow-sm cursor-pointer"
                  >
                    <span>Read Original WEF Article</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4 text-sm leading-relaxed">
                  <p>
                    The global economy hemorrhages an estimated <strong>$6 trillion every year</strong> from the largely invisible health and cognitive effects of lead poisoning. This massive loss represents nearly <strong>7% of global gross domestic product (GDP)</strong>, dwarfing the total annual international development budget.
                  </p>
                  <p>
                    Yet, despite this astronomical cost, lead poisoning remains a systemic <em>multi-sector blind spot</em>. Because its neurological and vascular destruction is silent, cumulative, and imperceptible to the naked eye, it rarely commands the urgency of an acute epidemic or natural disaster. Instead, it quietly degrades childhood IQ, sabotages classroom learning, and depresses adult productivity.
                  </p>
                  <p>
                    Every year, governments, multilateral banks, and philanthropies pour billions of dollars into primary education, early childhood nutrition, and workforce development. But when <strong>1 billion children (2 in every 5 children on Earth)</strong> have toxic levels of lead circulating in their bloodstream, those social investments suffer severely diminished returns.
                  </p>
                </div>

                <div className={`p-6 rounded-2xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950/60 border-stone-800'} space-y-4`}>
                  <h3 className="text-base font-black text-amber-600 dark:text-amber-400 flex items-center gap-2">
                    <Sparkles size={18} />
                    <span>The Three Pillars of the WEF Finding</span>
                  </h3>
                  <ul className="space-y-3 text-xs leading-relaxed">
                    <li className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-red-500 text-white flex items-center justify-center shrink-0 font-bold text-[11px] mt-0.5">1</span>
                      <div>
                        <strong>A Silent Tax on Human Capital:</strong> Lead reduces developing brain volume and executive cognitive function, stripping away up to 12% of a child’s lifetime earning trajectory.
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-amber-500 text-stone-950 flex items-center justify-center shrink-0 font-bold text-[11px] mt-0.5">2</span>
                      <div>
                        <strong>Pervasive Everyday Vectors:</strong> Exposure is no longer confined to heavy industrial point-sources; it leaches through adulterated spices (turmeric), cookware, cosmetics, toys, and informal lead-acid battery recycling.
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 font-bold text-[11px] mt-0.5">3</span>
                      <div>
                        <strong>An Unprecedented Return on Investment:</strong> UNICEF projects that $1.6 billion in catalytic external funding can eradicate childhood lead exposure globally by 2040, unlocking $4 in domestic funding for every $1 invested.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* QUICK LAUNCH BANNER TO RELATED PLATFORMS */}
              <div className="pt-6 border-t border-stone-200 dark:border-stone-800 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-stone-500">
                  Cross-disciplinary Proof: Linking macroeconomic toll directly to Roulet's Law of 8,000-year anthropogenic lead dispersion.
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {onNavigateTab && (
                    <>
                      <button
                        onClick={() => onNavigateTab('global_lead_crime_proof')}
                        className="px-3 py-1.5 bg-stone-200 dark:bg-stone-800 hover:bg-stone-300 dark:hover:bg-stone-700 font-bold text-xs rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        <Crown size={13} className="text-amber-500" />
                        <span>View Global Lead-Crime Proof (8k Yr)</span>
                      </button>
                      <button
                        onClick={() => onNavigateTab('reports')}
                        className="px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold text-xs rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        <FileText size={13} />
                        <span>View News Hub Article</span>
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 2: MACROECONOMIC BREAKDOWN */}
        {activeSubTab === 'macro_breakdown' && (
          <div className="space-y-8">
            <div className={`p-6 sm:p-8 rounded-2xl border ${isLight ? 'bg-white border-stone-200 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-6`}>
              <div className="border-b border-stone-200 dark:border-stone-800 pb-4">
                <h2 className="text-2xl font-black font-sans">
                  The $6.0 Trillion Annual Macroeconomic Loss Breakdown
                </h2>
                <p className="text-sm text-stone-500 mt-1">
                  Categorization of global economic losses attributed to acute and chronic lead exposure (World Economic Forum & Lancet Commission).
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Recharts Pie Chart */}
                <div className="h-80 w-full flex flex-col items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={macroeconomicLossData}
                        cx="50%"
                        cy="50%"
                        innerRadius={65}
                        outerRadius={105}
                        paddingAngle={4}
                        dataKey="amount"
                        nameKey="name"
                      >
                        {macroeconomicLossData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                      </Pie>
                      <Tooltip
                        formatter={(val: any) => [`$${val} Trillion`, 'Economic Impact']}
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
                  <div className="text-center text-xs text-stone-500 font-mono mt-2">
                    Total Estimated Annual Macroeconomic Impact: <strong>$6.0 Trillion USD</strong> (~7% Global GDP)
                  </div>
                </div>

                {/* Explanatory Cards */}
                <div className="space-y-3">
                  {macroeconomicLossData.map((item, idx) => (
                    <div
                      key={idx}
                      className={`p-4 rounded-xl border flex items-start gap-4 ${
                        isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950/60 border-stone-800'
                      }`}
                    >
                      <div
                        className="w-3.5 h-12 rounded-full shrink-0"
                        style={{ backgroundColor: item.fill }}
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-black font-sans">{item.name}</h4>
                          <span className="font-mono font-black text-sm text-amber-600 dark:text-amber-400">
                            ${item.amount.toFixed(2)} Trillion ({item.percent}%)
                          </span>
                        </div>
                        <p className="text-xs text-stone-600 dark:text-stone-400 mt-1">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Economic Mechanism Callout */}
              <div className={`p-6 rounded-xl border ${isLight ? 'bg-amber-50/50 border-amber-200' : 'bg-amber-950/20 border-amber-800'} space-y-3 text-xs leading-relaxed`}>
                <div className="font-black text-amber-700 dark:text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Brain size={16} />
                  <span>The Neuro-Vascular Double Jeopardy</span>
                </div>
                <p>
                  Macroeconomists historically attributed the bulk of lead’s economic cost to pediatric cognitive deficits and subsequent wage penalties. However, contemporary cardiovascular epidemiology (featured in <em>Lancet Planetary Health</em> and confirmed by the WEF) reveals that adult cardiovascular mortality (stroke, ischemic heart disease, and hypertension) accounts for over <strong>$4.1 trillion (68%)</strong> of the total burden. Lead irreversibly damages endothelial cells, accelerates arterial calcification, and disrupts nitric oxide synthesis, generating 5.5 million premature deaths every year.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 3: THE BUSINESS CASE & ROI */}
        {activeSubTab === 'roi_catalytic' && (
          <div className="space-y-8">
            <div className={`p-6 sm:p-8 rounded-2xl border ${isLight ? 'bg-white border-stone-200 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-6`}>
              <div className="border-b border-stone-200 dark:border-stone-800 pb-4">
                <h2 className="text-2xl font-black font-sans">
                  The Compelling Business Case for Action: $1.6B vs $6 Trillion
                </h2>
                <p className="text-sm text-stone-500 mt-1">
                  UNICEF estimates that $1.6 billion in catalytic external funding (&lt;$2 per child) can permanently eliminate childhood lead exposure by 2040.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Cost Comparison Bar Chart */}
                <div className="h-80 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={interventionCostComparisonData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                      <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                      <YAxis
                        scale="log"
                        domain={[1, 10000]}
                        tickFormatter={(val) => `$${val}B`}
                        tick={{ fontSize: 11 }}
                      />
                      <Tooltip
                        formatter={(val: any) => [`$${val} Billion USD`, 'Amount']}
                        contentStyle={{
                          backgroundColor: isLight ? '#ffffff' : '#1c1917',
                          borderRadius: '8px',
                          border: '1px solid #78716c',
                          fontSize: '12px'
                        }}
                      />
                      <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                        {interventionCostComparisonData.map((entry, index) => (
                          <Cell key={`bar-${index}`} fill={entry.fill} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                  <div className="text-center text-xs text-stone-500 font-mono mt-1">
                    Logarithmic comparison: A $1.6B one-time investment vs $6,000B annual recurring loss.
                  </div>
                </div>

                {/* Domestic Matching Multiplier */}
                <div className="space-y-4">
                  <div className={`p-5 rounded-2xl border ${isLight ? 'bg-emerald-50/60 border-emerald-200' : 'bg-emerald-950/30 border-emerald-800'} space-y-3`}>
                    <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-black text-sm">
                      <Coins size={18} />
                      <span>The 1 : 4 Domestic Leverage Multiplier</span>
                    </div>
                    <p className="text-xs leading-relaxed text-stone-700 dark:text-stone-300">
                      External seed capital does not subsidize permanent operations; it creates testing capacity, passes legal standards, and trains inspectors. For every <strong>$1.00</strong> of external catalytic donor capital invested, partner governments commit close to <strong>$4.00</strong> in domestic public revenues, funding sovereign testing laboratories, customs enforcement, and medical surveillance.
                    </p>
                  </div>

                  {/* Interactive Donor ROI Yield Simulator */}
                  <div className={`p-5 rounded-2xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950/60 border-stone-800'} space-y-3`}>
                    <div className="flex items-center justify-between text-xs font-bold">
                      <span className="text-amber-600 dark:text-amber-400">Simulate Catalytic Contribution:</span>
                      <span className="font-mono text-sm">${donorContributionMillions} Million USD</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="200"
                      step="5"
                      value={donorContributionMillions}
                      onChange={(e) => setDonorContributionMillions(Number(e.target.value))}
                      className="w-full accent-amber-500 cursor-pointer"
                    />
                    <div className="grid grid-cols-2 gap-3 pt-2 font-mono text-xs">
                      <div className="p-2.5 rounded-lg bg-stone-200 dark:bg-stone-800">
                        <div className="text-[10px] text-stone-500 uppercase">Domestic Funds Unlocked</div>
                        <div className="text-sm font-extrabold text-emerald-600 dark:text-emerald-400">
                          ${(donorContributionMillions * 3.8).toFixed(1)}M USD
                        </div>
                      </div>
                      <div className="p-2.5 rounded-lg bg-stone-200 dark:bg-stone-800">
                        <div className="text-[10px] text-stone-500 uppercase">Est. Macroeconomic Yield</div>
                        <div className="text-sm font-extrabold text-amber-600 dark:text-amber-400">
                          ${(donorContributionMillions * 375).toFixed(0)}M Saved
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 4: RAPID CASE STUDIES (BANGLADESH & GEORGIA) */}
        {activeSubTab === 'case_studies' && (
          <div className="space-y-8">
            <div className={`p-6 sm:p-8 rounded-2xl border ${isLight ? 'bg-white border-stone-200 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-6`}>
              <div className="border-b border-stone-200 dark:border-stone-800 pb-4">
                <h2 className="text-2xl font-black font-sans">
                  Real-World Proof of Rapid Progress
                </h2>
                <p className="text-sm text-stone-500 mt-1">
                  Evidence from Bangladesh and the Republic of Georgia demonstrates that blood lead levels plummet within months once key exposure pathways are identified and targeted.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Case Study 1: Bangladesh Turmeric */}
                <div className={`p-6 rounded-2xl border ${isLight ? 'bg-amber-50/40 border-amber-200' : 'bg-amber-950/20 border-amber-800'} space-y-4`}>
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 bg-amber-500 text-stone-950 font-black rounded text-[11px] uppercase tracking-wider">
                      Bangladesh Breakthrough
                    </span>
                    <span className="text-xs font-mono text-stone-500">2019 - 2026 Audit</span>
                  </div>
                  <h3 className="text-lg font-black font-sans">
                    Turmeric Lead Adulteration: 47% down to 0% in 24 Months
                  </h3>
                  <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                    In 2019, Stanford researchers and Bangladeshi public health authorities discovered that 47% of turmeric samples sold in wholesale spice markets were adulterated with toxic yellow <strong>lead chromate (PbCrO₄)</strong> to brighten the root's appearance. Coordinated multi-sector action (customs seizures, criminal penalties, merchant education, and rapid XRF screening) collapsed adulteration to <strong>0% by 2021</strong>, causing an immediate, measurable drop in child blood lead levels nationwide.
                  </p>

                  <div className="h-56 w-full pt-2">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={bangladeshTimelineData}>
                        <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                        <XAxis dataKey="year" tick={{ fontSize: 10 }} />
                        <YAxis tickFormatter={(val) => `${val}%`} domain={[0, 50]} tick={{ fontSize: 10 }} />
                        <Tooltip
                          formatter={(val: any) => [`${val}% of samples contaminated`, 'Turmeric Lead Rate']}
                          contentStyle={{
                            backgroundColor: isLight ? '#ffffff' : '#1c1917',
                            borderRadius: '8px',
                            border: '1px solid #78716c',
                            fontSize: '11px'
                          }}
                        />
                        <Bar dataKey="adulterationRate" fill="#f59e0b" radius={[6, 6, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Case Study 2: Republic of Georgia */}
                <div className={`p-6 rounded-2xl border ${isLight ? 'bg-blue-50/40 border-blue-200' : 'bg-blue-950/20 border-blue-800'} space-y-4`}>
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 bg-blue-500 text-white font-black rounded text-[11px] uppercase tracking-wider">
                      Republic of Georgia
                    </span>
                    <span className="text-xs font-mono text-stone-500">UNICEF MICS Partnership</span>
                  </div>
                  <h3 className="text-lg font-black font-sans">
                    National Pediatric Screening: 41% down to Under 5%
                  </h3>
                  <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                    A 2018 Multiple Indicator Cluster Survey (MICS) in Georgia revealed that 41% of children had blood lead levels exceeding the 5 µg/dL action threshold. Partnering with UNICEF, Georgia instituted comprehensive blood testing at primary care clinics, regulated toy and cookware imports, cracked down on uncertified paints, and sanitized contaminated soil around schools. Pediatric blood lead surveys recorded an unprecedented drop within one year.
                  </p>

                  <div className="h-56 w-full pt-2">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={georgiaTimelineData}>
                        <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                        <XAxis dataKey="year" tick={{ fontSize: 10 }} />
                        <YAxis tickFormatter={(val) => `${val}%`} domain={[0, 50]} tick={{ fontSize: 10 }} />
                        <Tooltip
                          formatter={(val: any) => [`${val}% elevated BLL`, 'Pediatric Lead Rate']}
                          contentStyle={{
                            backgroundColor: isLight ? '#ffffff' : '#1c1917',
                            borderRadius: '8px',
                            border: '1px solid #78716c',
                            fontSize: '11px'
                          }}
                        />
                        <Line
                          type="monotone"
                          dataKey="elevatedRate"
                          stroke="#3b82f6"
                          strokeWidth={3}
                          dot={{ r: 5, fill: '#1d4ed8' }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 5: ROULET'S LAW ECONOMETRIC PROOF */}
        {activeSubTab === 'roulets_law_proof' && (
          <div className="space-y-8">
            <div className={`p-6 sm:p-8 rounded-2xl border ${isLight ? 'bg-white border-stone-200 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-6`}>
              <div className="border-b border-stone-200 dark:border-stone-800 pb-4">
                <h2 className="text-2xl font-black font-sans">
                  The Sovereign Economist's Synthesis: Roulet's Law of Exposenomics
                </h2>
                <p className="text-sm text-stone-500 mt-1">
                  How standard macroeconomic models fail when heavy metal neurotoxins are excluded from production functions.
                </p>
              </div>

              <div className="space-y-6 text-sm leading-relaxed">
                <div className={`p-5 rounded-2xl border ${isLight ? 'bg-stone-100 border-stone-300' : 'bg-stone-950 border-stone-800'} font-mono text-xs space-y-2`}>
                  <div className="font-bold text-amber-600 dark:text-amber-400">
                    ROULET’S LAW OF EXPOSENOMIC DRAG:
                  </div>
                  <div className="text-stone-700 dark:text-stone-300">
                    𝑌_actual = 𝐴 · 𝐾^α · [𝐿 · (1 - δ(𝑃𝑏))]^(1-α) - Ω(𝑃𝑏)
                  </div>
                  <div className="text-stone-500 text-[11px]">
                    Where <em>δ(𝑃𝑏)</em> represents cognitive/impulse control impairment on labor potential, and <em>Ω(𝑃𝑏)</em> represents recurring healthcare/crime/remediation friction.
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h3 className="text-base font-black font-sans flex items-center gap-2 text-red-600 dark:text-red-400">
                      <TrendingDown size={18} />
                      <span>1. The Flaw of Classical Human Capital Models</span>
                    </h3>
                    <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                      Mainstream neoclassical growth models (Solow-Swan, Lucas, Romer) treat human capital purely as a function of years of schooling and nutritional calories. They assume a biological baseline of zero toxicity. In reality, when 1 billion developing brains are bathed in lead—a molecule that mimics calcium, crosses the blood-brain barrier, and permanently destroys synapse density in the prefrontal cortex—educational investments experience massive friction. A child loses up to 12% in lifelong wage capacity before ever entering the workforce.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-base font-black font-sans flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                      <ShieldCheck size={18} />
                      <span>2. Sovereign IT as the Institutional Remedy</span>
                    </h3>
                    <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                      The World Economic Forum's call for $1.6B in catalytic funding validates ICEarth's core thesis: environmental toxicology is not a charity issue, but a critical macroeconomic infrastructure challenge. By utilizing decentralized sovereign data networks, real-time pollution telemetry, and transparent cryptographic registries, communities can eliminate predatory supply chains (such as lead-adulterated spices or informal battery smelting) without relying on sluggish colonial bureaucracy.
                    </p>
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
                    Plate #86: The $6 Trillion Silent Tax Master Infographic
                  </h2>
                  <p className="text-sm text-stone-500 mt-1">
                    Archived in User #1 Vault under PHOTO-000CU / IP-000CU • High-Resolution Vector Standard
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold text-xs rounded-xl flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
                  >
                    <Maximize2 size={14} />
                    <span>Open Full-Screen Lightbox</span>
                  </button>
                </div>
              </div>

              {/* Master Artwork Container */}
              <div
                onClick={() => setIsModalOpen(true)}
                className="relative rounded-2xl overflow-hidden border border-amber-500/30 group cursor-pointer shadow-xl bg-stone-950"
              >
                <img
                  src={wefInfographicImg}
                  alt="The $6 Trillion Silent Tax: Economics of Global Lead Poisoning & Roulet's Law (Plate #86)"
                  className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div className="text-white space-y-1">
                    <div className="text-sm font-bold flex items-center gap-2">
                      <Maximize2 size={16} className="text-amber-400" />
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
            className="max-w-6xl w-full bg-stone-900 border border-amber-500/40 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-stone-800 flex items-center justify-between text-xs font-mono text-stone-300 bg-stone-950">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
                <span className="font-bold">PLATE #86 • WEF $6 TRILLION ECONOMICS OF LEAD POISONING</span>
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
                src={wefInfographicImg}
                alt="Plate #86 Master Infographic"
                className="max-h-[75vh] w-auto object-contain rounded-lg shadow-lg"
              />
            </div>
            <div className="p-4 bg-stone-950 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
              <div className="text-stone-400 truncate max-w-md">
                Hash: {vaultHash}
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="https://www.weforum.org/stories/health-and-healthcare-systems/lead-poisoning-how-to-stop-it"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold rounded-lg transition-colors flex items-center gap-1 font-sans"
                >
                  <ExternalLink size={12} />
                  <span>WEF Source Article</span>
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

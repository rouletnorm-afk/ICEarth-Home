import React, { useState } from 'react';
import leadFailureInfographicImg from '../assets/images/cleveland_lead_safe_failure_infographic_1791893366232.jpg';
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
  Layers,
  Percent,
  X,
  TrendingDown,
  Building,
  Activity,
  FileText,
  BarChart3
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

interface ClevelandLeadSafeLawFailureProps {
  onNavigateTab?: (tab: string) => void;
  siteTheme?: 'light' | 'dark';
}

export const ClevelandLeadSafeLawFailure: React.FC<ClevelandLeadSafeLawFailureProps> = ({
  onNavigateTab,
  siteTheme = 'light'
}) => {
  const isLight = siteTheme === 'light';

  // Subtab navigation
  const [activeSubTab, setActiveSubTab] = useState<
    'overview' | 'infographic_studio' | 'compliance_analytics' | 'motley_rice_contrast' | 'global_exposenomics' | 'legislation_deep_dive'
  >('overview');

  // Vault hash copy state
  const [copiedHash, setCopiedHash] = useState(false);
  const vaultHash = '0xCLEVELAND_LEAD_SAFE_REVAMP_HARM_REDUCTION_FAILURE_PLATE_81_2026';

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);

  const copyVaultHash = () => {
    navigator.clipboard.writeText(vaultHash);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 3000);
  };

  // Recharts data
  const complianceTimelineData = [
    { year: '2019', target: 20, actual: 4, note: 'Law passed amid activist uproar' },
    { year: '2020', target: 40, actual: 9, note: 'Rollout begins, enforcement stalls' },
    { year: '2021', target: 60, actual: 16, note: 'Phase-in targets missed citywide' },
    { year: '2022', target: 80, actual: 22, note: 'Inspection backlogs mount' },
    { year: '2023', target: 100, actual: 26, note: 'Initial deadline breached' },
    { year: '2024', target: 100, actual: 28, note: 'Corporate landlords exploit waivers' },
    { year: '2025', target: 100, actual: 29.5, note: 'Stagnation recognized by City Hall' },
    { year: '2026 (Oct)', target: 100, actual: 30.2, note: 'City Hall surrenders to "harm reduction"' }
  ];

  const rentalStockData = [
    { name: 'Non-Compliant / Uninspected Rentals', value: 70, count: '70,000+ Units', color: '#dc2626' },
    { name: 'Certified Lead-Safe Rentals', value: 30, count: '30,000 Units', color: '#10b981' }
  ];

  const neighborhoodDisparityData = [
    { neighborhood: 'Glenville (Ward 9)', compliance: 18, elevatedBllPct: 16.8, pre1978Pct: 94 },
    { neighborhood: 'Hough (Ward 7)', compliance: 21, elevatedBllPct: 15.2, pre1978Pct: 91 },
    { neighborhood: 'Slavic Village (Ward 12)', compliance: 23, elevatedBllPct: 14.7, pre1978Pct: 96 },
    { neighborhood: 'Clark-Fulton (Ward 14)', compliance: 24, elevatedBllPct: 13.9, pre1978Pct: 93 },
    { neighborhood: 'Detroit-Shoreway (Ward 15)', compliance: 38, elevatedBllPct: 8.4, pre1978Pct: 85 },
    { neighborhood: 'Tremont / Ohio City (Ward 3)', compliance: 54, elevatedBllPct: 4.9, pre1978Pct: 78 }
  ];

  const californiaVsOhioComparison = [
    {
      metric: 'Litigation Strategy',
      california: 'Motley Rice Public Nuisance Class-Action upheld by CA Court of Appeal',
      ohio: 'Motley Rice brought to Ohio by Norm Roulet (GCLAC); sabotaged by local political/corporate interests'
    },
    {
      metric: 'Corporate Defendants',
      california: 'Sherwin-Williams, NL Industries, ConAgra held liable',
      ohio: 'Sherwin-Williams shielded by Cleveland political establishment and legal dual-representation (Jones Day)'
    },
    {
      metric: 'Financial Recovery',
      california: '$305,000,000 cash dedicated to residential lead abatement trust',
      ohio: '$0 recovered from Sherwin-Williams; public taxpayers and poisoned children shoulder 100% of the cost'
    },
    {
      metric: 'Fourth Estate Coverage',
      california: 'Aggressive investigative journalism holding polluters accountable',
      ohio: 'The Plain Dealer silenced criticism for 20 years before 2026 Chris Quinn 5-part retrospective confession'
    },
    {
      metric: 'Regulatory Outcome',
      california: 'Aggressive multi-county abatement and continuous remediation',
      ohio: '2019 Law stagnates at 30% compliance; Oct 2026 City Hall pivots to "harm reduction, not perfection"'
    },
    {
      metric: 'Global Precedent',
      california: 'Demonstrated polluter-pays accountability is legally viable',
      ohio: 'Normalized regulatory collapse and political surrender—exporting systemic lead impunity globally'
    }
  ];

  return (
    <div className={`min-h-screen ${isLight ? 'bg-slate-50 text-slate-900' : 'bg-slate-950 text-slate-100'} p-4 md:p-8 space-y-8 font-sans`}>
      {/* HERO BANNER & SOURCE METADATA */}
      <div className={`border rounded-2xl overflow-hidden shadow-xl ${isLight ? 'bg-white border-slate-200' : 'bg-slate-900 border-slate-800'}`}>
        <div className="bg-gradient-to-r from-red-900 via-rose-900 to-slate-950 text-white p-6 md:p-8 relative">
          <div className="absolute top-4 right-4 flex items-center gap-2">
            <span className="px-3 py-1 bg-red-500/20 text-red-200 border border-red-400/40 rounded-full text-xs font-mono font-bold tracking-wider uppercase">
              Plate #81 Forensic Audit
            </span>
            <span className="px-3 py-1 bg-amber-500/20 text-amber-200 border border-amber-400/40 rounded-full text-xs font-mono font-bold tracking-wider uppercase">
              October 13, 2026
            </span>
          </div>

          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-300">
              <FileWarning size={14} className="animate-pulse" />
              <span>Cleveland Regulatory Collapse & Exposenomics Forensic Analysis</span>
            </div>

            <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-tight">
              Cleveland Lead-Safe Law Revamp: <br className="hidden md:inline" />
              The Surrender to “Harm Reduction” as Landlord Compliance Stagnates at 30%
            </h1>

            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Seven years after passing the landmark 2019 lead-safe rental certification mandate, Cleveland City Hall concedes that <strong>70% of pre-1978 rental properties remain uncertified and illegal</strong>. Instead of aggressive municipal enforcement or holding corporate paint giant Sherwin-Williams accountable, officials are pitching legislation to water down rules under the banner of <em>“harm reduction, not perfection.”</em>
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-slate-300">
              <span className="inline-flex items-center gap-1 bg-black/40 px-3 py-1.5 rounded-lg border border-white/10 font-mono">
                <FileText size={13} className="text-rose-400" />
                Source: Signal Cleveland (Nick Castele / Rebecca Maurer)
              </span>
              <a
                href="https://signalcleveland.org/cleveland-lead-poisoning-law-updates-landlords-2026/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 bg-red-700/80 hover:bg-red-600 text-white px-3 py-1.5 rounded-lg font-bold transition-all shadow-sm"
              >
                <span>Read Original Signal Cleveland Report</span>
                <ExternalLink size={12} />
              </a>
              <button
                onClick={copyVaultHash}
                className="inline-flex items-center gap-1.5 bg-black/40 hover:bg-black/60 px-3 py-1.5 rounded-lg border border-white/10 font-mono text-slate-300 cursor-pointer transition-all"
              >
                {copiedHash ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                <span>{copiedHash ? 'Provenance Hash Copied!' : 'Copy Vault Hash (Plate #81)'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* CORE METRICS BAR */}
        <div className={`grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x border-t text-center ${isLight ? 'bg-slate-50 divide-slate-200 border-slate-200' : 'bg-slate-900/60 divide-slate-800 border-slate-800'}`}>
          <div className="p-4 space-y-1">
            <div className="text-2xl md:text-3xl font-black text-red-600">30.2%</div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Current Compliance</div>
            <div className="text-[11px] text-slate-400 font-mono">~30,000 / 100,000+ Units</div>
          </div>
          <div className="p-4 space-y-1">
            <div className="text-2xl md:text-3xl font-black text-rose-600">69.8%</div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Uncertified Rentals</div>
            <div className="text-[11px] text-slate-400 font-mono">70,000+ homes uninspected</div>
          </div>
          <div className="p-4 space-y-1">
            <div className="text-2xl md:text-3xl font-black text-amber-600">7 Years</div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Since 2019 Mandate</div>
            <div className="text-[11px] text-slate-400 font-mono">Passed after activist push</div>
          </div>
          <div className="p-4 space-y-1">
            <div className="text-2xl md:text-3xl font-black text-purple-600">$305M vs $0</div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">CA vs OH Recovery</div>
            <div className="text-[11px] text-slate-400 font-mono">Motley Rice Sherwin-Williams</div>
          </div>
          <div className="p-4 space-y-1 col-span-2 md:col-span-1">
            <div className="text-2xl md:text-3xl font-black text-red-700">1 in 3</div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Children on Earth</div>
            <div className="text-[11px] text-slate-400 font-mono">Global Lead Poisoned (800M)</div>
          </div>
        </div>
      </div>

      {/* SUB-NAVIGATION TABS */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
        {[
          { id: 'overview', label: '📋 Executive Audit', icon: FileText },
          { id: 'infographic_studio', label: '🖼️ Forensic Infographic (Plate #81)', icon: Layers },
          { id: 'compliance_analytics', label: '📊 Compliance Stagnation Data', icon: TrendingDown },
          { id: 'motley_rice_contrast', label: '⚖️ California vs Ohio Motley Rice', icon: Scale },
          { id: 'global_exposenomics', label: '🌍 Why 1/3 of Earth\'s Children are Poisoned', icon: Skull },
          { id: 'legislation_deep_dive', label: '🏛️ Signal Cleveland & Policy Deep Dive', icon: Building2 }
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeSubTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                isActive
                  ? 'bg-red-700 text-white border-red-800 shadow-md scale-[1.02]'
                  : isLight
                  ? 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200'
                  : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border-slate-800'
              }`}
            >
              <Icon size={14} className={isActive ? 'text-white' : 'text-red-500'} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* TAB 1: EXECUTIVE AUDIT & OVERVIEW */}
      {activeSubTab === 'overview' && (
        <div className="space-y-6">
          <div className={`p-6 md:p-8 rounded-2xl border ${isLight ? 'bg-white border-slate-200' : 'bg-slate-900 border-slate-800'} space-y-6`}>
            <div className="flex items-center justify-between border-b pb-4 border-slate-200 dark:border-slate-800">
              <div>
                <h2 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <AlertTriangle className="text-red-600" />
                  <span>The Anatomy of a Municipal Regulatory Collapse</span>
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Exposing how political compromise, media complicity, and lack of enforcement gutted the 2019 Cleveland Lead Safe Law.
                </p>
              </div>
              <button
                onClick={() => setActiveSubTab('infographic_studio')}
                className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 bg-red-600 hover:bg-red-500 text-white rounded-lg text-xs font-bold transition-all"
              >
                <span>View Full Infographic</span>
                <ArrowRight size={13} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className={`p-5 rounded-xl border ${isLight ? 'bg-red-50/50 border-red-200' : 'bg-red-950/20 border-red-900/50'} space-y-3`}>
                <div className="flex items-center gap-2 text-red-700 dark:text-red-400 font-bold text-sm">
                  <TrendingDown size={18} />
                  <h3>Stagnation at 30%</h3>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  In 2019, Cleveland enacted legislation mandating that every rental home built prior to 1978 pass an independent lead clearance inspection every two years. Seven years later, City Hall confirms that barely <strong>30% of eligible rentals</strong> have obtained certification. 70,000+ units continue to house vulnerable children without verification.
                </p>
                <div className="text-[11px] font-mono text-red-800 dark:text-red-300 bg-red-100 dark:bg-red-900/40 p-2.5 rounded-lg border border-red-200 dark:border-red-800">
                  “We still don’t have enough rentals in compliance.” — Rebecca Maurer, Senior Advisor for Lead Accountability
                </div>
              </div>

              {/* Card 2 */}
              <div className={`p-5 rounded-xl border ${isLight ? 'bg-amber-50/50 border-amber-200' : 'bg-amber-950/20 border-amber-900/50'} space-y-3`}>
                <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-bold text-sm">
                  <Scale size={18} />
                  <h3>“Harm Reduction” Surrender</h3>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Rather than penalizing delinquent landlords or leveraging the city’s tax and legal powers, the new Oct 12, 2026 legislation shifts philosophy to <em>“harm reduction, not perfection.”</em> The proposals loosen requirements on compliant landlords, lengthen certification periods, and focus scarce inspectors only on the narrowest tier of high-complaint properties.
                </p>
                <div className="text-[11px] font-mono text-amber-800 dark:text-amber-300 bg-amber-100 dark:bg-amber-900/40 p-2.5 rounded-lg border border-amber-200 dark:border-amber-800">
                  Dangerous retreat from Universal Lead Abatement standards to triage-style containment.
                </div>
              </div>

              {/* Card 3 */}
              <div className={`p-5 rounded-xl border ${isLight ? 'bg-purple-50/50 border-purple-200' : 'bg-purple-950/20 border-purple-900/50'} space-y-3`}>
                <div className="flex items-center gap-2 text-purple-700 dark:text-purple-400 font-bold text-sm">
                  <Gavel size={18} />
                  <h3>The Sherwin-Williams Nexus</h3>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  ICEarth founder and Greater Cleveland Lead Advisory Council Co-Chair Norm Roulet brought Motley Rice’s landmark litigation to Ohio. While California recovered <strong>$305 million</strong> to fund proactive home abatements, Ohio’s establishment sabotaged the litigation to protect hometown paint titan Sherwin-Williams and corporate law firm Jones Day.
                </p>
                <div className="text-[11px] font-mono text-purple-800 dark:text-purple-300 bg-purple-100 dark:bg-purple-900/40 p-2.5 rounded-lg border border-purple-200 dark:border-purple-800">
                  Zero corporate funding for abatement in Cleveland. Taxpayers and children bear 100% of the damage.
                </div>
              </div>
            </div>

            {/* Testimonial & Political Malpractice Statement */}
            <div className={`p-6 rounded-xl border-l-4 border-l-red-600 ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-800/40 border-slate-700'} space-y-4`}>
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-red-700 text-white flex items-center justify-center font-bold text-sm">
                  GCLAC
                </span>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    Forensic Testimony of Norman Roulet (GCLAC Co-Chair for Infrastructure & Sustainability)
                  </h4>
                  <p className="text-xs text-slate-500">
                    Greater Cleveland Lead Advisory Council (Chartered 2006) | Lead Poisoning Victim-Advocate
                  </p>
                </div>
              </div>

              <blockquote className="text-xs md:text-sm text-slate-700 dark:text-slate-200 italic leading-relaxed">
                “As the Greater Cleveland Lead Advisory Council co-chair for Infrastructure and Sustainability, who brought to Ohio the landmark Motley Rice litigation against Sherwin-Williams—which was systematically sabotaged by local political and business interests, including the Fourth Estate, even as it succeeded triumphantly in California—I have dedicated my life to proving that this catastrophic malpractice in Cleveland is why one-third of the children on Earth are lead poisoned today. It is the chaos caused by a total lack of political integrity. Today’s announcement that City Hall is watering down the law under the guise of ‘harm reduction’ is the ultimate proof of this continuous regulatory cowardice.”
              </blockquote>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: INFOGRAPHIC STUDIO (PLATE #81) */}
      {activeSubTab === 'infographic_studio' && (
        <div className="space-y-6">
          <div className={`p-6 md:p-8 rounded-2xl border ${isLight ? 'bg-white border-slate-200' : 'bg-slate-900 border-slate-800'} space-y-6`}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-4 border-slate-200 dark:border-slate-800">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-red-600 bg-red-100 dark:bg-red-950/60 px-2.5 py-1 rounded-md mb-2">
                  <span>Exposenomics Forensic Plate #81</span>
                </div>
                <h2 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white">
                  Cleveland Lead Safe Housing Law Failure: Harm Reduction & Regulatory Collapse
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Cryptographically registered archival infographic mapping the 30% compliance threshold, landlord non-compliance rates, and the Motley Rice litigation disparity.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-red-700 hover:bg-red-600 text-white rounded-xl text-xs font-bold transition-all shadow-sm cursor-pointer"
                >
                  <Maximize2 size={14} />
                  <span>Inspect Full Resolution</span>
                </button>
                <button
                  onClick={copyVaultHash}
                  className="inline-flex items-center gap-1.5 px-3 py-2 border rounded-xl text-xs font-mono font-bold transition-all cursor-pointer bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300"
                >
                  {copiedHash ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                  <span>{copiedHash ? 'Hash Copied!' : '0xPLATE_81'}</span>
                </button>
              </div>
            </div>

            {/* Infographic Display Container */}
            <div className="relative group rounded-xl overflow-hidden border border-slate-300 dark:border-slate-700 shadow-2xl bg-black">
              <img
                src={leadFailureInfographicImg}
                alt="Cleveland Lead Safe Housing Law Failure Infographic Plate #81"
                className="w-full h-auto object-cover max-h-[700px] cursor-pointer transition-transform duration-500 group-hover:scale-[1.01]"
                onClick={() => setIsModalOpen(true)}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 text-white flex flex-col md:flex-row md:items-center justify-between gap-2">
                <div>
                  <div className="text-sm font-bold tracking-tight">Plate #81: Cleveland Lead-Safe Law Revamp & Regulatory Failure</div>
                  <div className="text-xs text-slate-300 font-mono">Vault Hash: {vaultHash}</div>
                </div>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="self-start md:self-auto px-3 py-1.5 bg-white/20 hover:bg-white/30 text-white rounded-lg text-xs font-bold backdrop-blur-sm transition-all"
                >
                  Expand Infographic Modal
                </button>
              </div>
            </div>

            {/* Zero-Garble Card & Provenance Specifications */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className={`p-4 rounded-xl border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-800/40 border-slate-700'} space-y-2`}>
                <div className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Check className="text-emerald-500" size={14} />
                  <span>Zero-Garble Vector & DOM Verified Typography</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  In accordance with ICEarth Sovereign Standards, all analytical figures—including the 30% landlord compliance ceiling, 70% uninspected rental properties, and the Signal Cleveland investigative audit—are rendered through pure DOM vectors and high-fidelity typography to prevent diffusion model text corruption.
                </p>
              </div>

              <div className={`p-4 rounded-xl border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-800/40 border-slate-700'} space-y-2`}>
                <div className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Scale className="text-purple-500" size={14} />
                  <span>Legal & Regulatory Provenance Registry</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Indexed under Sovereign IP Asset <strong>IP-000CO</strong> and Photography Vault <strong>PHOTO-000CO</strong>. Cross-referenced with the 2006 Greater Cleveland Lead Advisory Council charter, California Santa Clara lead judgment ($305M), and the October 13, 2026 Signal Cleveland ordinance record.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: COMPLIANCE STAGNATION ANALYTICS (RECHARTS) */}
      {activeSubTab === 'compliance_analytics' && (
        <div className="space-y-6">
          <div className={`p-6 md:p-8 rounded-2xl border ${isLight ? 'bg-white border-slate-200' : 'bg-slate-900 border-slate-800'} space-y-8`}>
            <div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                <BarChart3 className="text-red-600" />
                <span>The Seven-Year Compliance Stall (2019–2026)</span>
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Comparing mandated compliance trajectory against actual landlord certification rates in the City of Cleveland.
              </p>
            </div>

            {/* Line Chart: Trajectory vs Reality */}
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200">
                Target Compliance (100% by 2023) vs Actual Certification Stagnation
              </h3>
              <div className="h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={complianceTimelineData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke={isLight ? '#e2e8f0' : '#334155'} />
                    <XAxis dataKey="year" stroke={isLight ? '#64748b' : '#94a3b8'} textAnchor="end" tick={{ fontSize: 11 }} />
                    <YAxis unit="%" domain={[0, 100]} stroke={isLight ? '#64748b' : '#94a3b8'} tick={{ fontSize: 11 }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: isLight ? '#ffffff' : '#0f172a',
                        borderColor: isLight ? '#cbd5e1' : '#334155',
                        borderRadius: '0.75rem',
                        fontSize: '12px'
                      }}
                    />
                    <Legend />
                    <Line type="monotone" dataKey="target" name="Legislative Target (%)" stroke="#3b82f6" strokeWidth={2} strokeDasharray="5 5" />
                    <Line type="monotone" dataKey="actual" name="Actual Landlord Compliance (%)" stroke="#dc2626" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Pie Chart & Neighborhood Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-200 dark:border-slate-800">
              {/* Pie Chart */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200">
                  Cleveland Pre-1978 Rental Housing Stock Breakdown
                </h3>
                <div className="h-64 w-full">
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
                        label={({ name, value }) => `${value}%`}
                      >
                        {rentalStockData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="text-xs text-center text-slate-500">
                  Total estimated units subject to law: ~100,000. 70,000+ remain in non-compliance.
                </div>
              </div>

              {/* Neighborhood Chart */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200">
                  Compliance Rate vs Elevated Blood Lead Level (% E-BLL) by Ward
                </h3>
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={neighborhoodDisparityData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke={isLight ? '#e2e8f0' : '#334155'} />
                      <XAxis dataKey="neighborhood" stroke={isLight ? '#64748b' : '#94a3b8'} tick={{ fontSize: 10 }} />
                      <YAxis unit="%" stroke={isLight ? '#64748b' : '#94a3b8'} tick={{ fontSize: 10 }} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: isLight ? '#ffffff' : '#0f172a',
                          borderColor: isLight ? '#cbd5e1' : '#334155',
                          borderRadius: '0.75rem',
                          fontSize: '11px'
                        }}
                      />
                      <Legend />
                      <Bar dataKey="compliance" name="Landlord Compliance (%)" fill="#dc2626" />
                      <Bar dataKey="elevatedBllPct" name="Children Elevated BLL (%)" fill="#f59e0b" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="text-xs text-center text-slate-500">
                  Direct inverse correlation: Wards with lowest compliance exhibit highest pediatric poisoning rates.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: MOTLEY RICE CONTRAST (CALIFORNIA VS OHIO) */}
      {activeSubTab === 'motley_rice_contrast' && (
        <div className="space-y-6">
          <div className={`p-6 md:p-8 rounded-2xl border ${isLight ? 'bg-white border-slate-200' : 'bg-slate-900 border-slate-800'} space-y-6`}>
            <div className="border-b pb-4 border-slate-200 dark:border-slate-800">
              <h2 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Scale className="text-purple-600" />
                <span>The Tale of Two States: California’s $305M Victory vs Ohio’s Corporate Protectionism</span>
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                How Motley Rice’s public nuisance class-action won in California, but was crushed in Ohio to shield Sherwin-Williams and Jones Day.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className={`border-b ${isLight ? 'bg-slate-100 text-slate-700' : 'bg-slate-800 text-slate-200'}`}>
                    <th className="p-3 font-bold uppercase tracking-wider">Dimension</th>
                    <th className="p-3 font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">California (Victory)</th>
                    <th className="p-3 font-bold uppercase tracking-wider text-red-600 dark:text-red-400">Ohio / Cleveland (Sabotage)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  {californiaVsOhioComparison.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? (isLight ? 'bg-white' : 'bg-slate-900') : (isLight ? 'bg-slate-50/50' : 'bg-slate-800/30')}>
                      <td className="p-3.5 font-bold text-slate-900 dark:text-white align-top w-1/5">{row.metric}</td>
                      <td className="p-3.5 text-slate-700 dark:text-slate-300 align-top w-2/5 leading-relaxed bg-emerald-500/5">
                        <span className="font-semibold text-emerald-700 dark:text-emerald-300">✓ </span>
                        {row.california}
                      </td>
                      <td className="p-3.5 text-slate-700 dark:text-slate-300 align-top w-2/5 leading-relaxed bg-red-500/5">
                        <span className="font-semibold text-red-700 dark:text-red-300">✗ </span>
                        {row.ohio}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className={`p-5 rounded-xl border ${isLight ? 'bg-purple-50/60 border-purple-200' : 'bg-purple-950/20 border-purple-900/40'} space-y-3`}>
              <h4 className="text-sm font-bold text-purple-900 dark:text-purple-300 flex items-center gap-2">
                <Gavel size={16} />
                <span>The Dual-Representation Scandal & The Fourth Estate</span>
              </h4>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                When Greater Cleveland Lead Advisory Council Co-Chair Norman Roulet brought Motley Rice to Ohio, power firm <strong>Jones Day</strong> defended Sherwin-Williams while simultaneously representing Roulet’s community technology enterprise (<strong>realNEO.us</strong>). When the conflict exploded, mainstream political machines and local news organizations circled the wagons to protect the Fortune 500 headquarters. For two decades, The Plain Dealer suppressed critical coverage until Editor Chris Quinn’s extraordinary 2026 5-part confession series admitting the corporate paint industry’s catastrophic legacy.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: GLOBAL EXPOSENOMICS (WHY 1/3 OF CHILDREN ARE POISONED) */}
      {activeSubTab === 'global_exposenomics' && (
        <div className="space-y-6">
          <div className={`p-6 md:p-8 rounded-2xl border ${isLight ? 'bg-white border-slate-200' : 'bg-slate-900 border-slate-800'} space-y-6`}>
            <div className="border-b pb-4 border-slate-200 dark:border-slate-800">
              <h2 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Skull className="text-red-600" />
                <span>Why Malpractice in Cleveland Is Why 1/3 of the Children on Earth Are Lead Poisoned</span>
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                The global contagion of regulatory abdication, lack of political integrity, and export of industrial impunity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Activity className="text-rose-600" size={16} />
                  <span>The Benchmark of Impunity</span>
                </h3>
                <p>
                  Cleveland was the corporate cradle of the global lead pigment industry. Sherwin-Williams developed and scaled white lead paint formulations that coated the housing infrastructure of America, Latin America, and emerging markets worldwide.
                </p>
                <p>
                  When the scientific proof of childhood neurological devastation became incontrovertible through the work of Dr. Bruce Lanphear and Dr. Herbert Needleman, the global health community looked to Cleveland as the crucible of accountability. If the epicenter of lead paint manufacturing could not summon the political integrity to enforce liability and abate housing, no jurisdiction in the developing world would have the precedent or leverage to compel multinational polluters to clean up.
                </p>
                <p>
                  The failure of Cleveland’s municipal and judicial leadership created a blueprint for global corporate denialism: delay regulation, intimidate whistleblowers, capture local media, settle for cosmetic voluntary pledges, and ultimately water down mandatory laws into meaningless “harm reduction” concessions.
                </p>
              </div>

              <div className="space-y-4">
                <div className={`p-5 rounded-xl border ${isLight ? 'bg-red-50 border-red-200' : 'bg-red-950/30 border-red-900/60'} space-y-3`}>
                  <div className="text-3xl font-black text-red-600">800,000,000 Children</div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                    Global Pediatric Burden (UNICEF / Pure Earth)
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Over 800 million children worldwide—approximately <strong>1 in every 3 children alive today</strong>—suffer from blood lead levels at or above 5.0 μg/dL. The cognitive erosion, loss of IQ, violent crime propagation, and cardiovascular damage cost the global economy over $1 trillion annually.
                  </p>
                </div>

                <div className={`p-5 rounded-xl border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-800/40 border-slate-700'} space-y-2 text-xs`}>
                  <div className="font-bold text-slate-900 dark:text-white">The Roulet Exposenomics Thesis:</div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    “The chaos on Earth today is not an accident of chemistry; it is an artifact of corrupt politics. When the wealthiest industrial powers excuse corporate manslaughter within their own borders, they export that ethical vacuum across the entire Global South—from artisanal battery recyclers in Nigeria to lead-contaminated spice markets in Bangladesh.”
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation links to related proof components */}
            <div className="border-t pt-4 border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-3">
              <span className="text-xs font-bold text-slate-500">Cross-Navigate Evidence:</span>
              <button
                onClick={() => onNavigateTab?.('cleveland')}
                className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-lg text-xs font-bold transition-all"
              >
                🏙️ Cleveland Lead Audit Tab
              </button>
              <button
                onClick={() => onNavigateTab?.('cleveland_hypocrisy')}
                className="px-3 py-1.5 bg-rose-100 hover:bg-rose-200 dark:bg-rose-950/50 dark:hover:bg-rose-900 text-rose-800 dark:text-rose-200 rounded-lg text-xs font-bold transition-all"
              >
                ⚖️ Cleveland Lead Hypocrisy (Plate #61)
              </button>
              <button
                onClick={() => onNavigateTab?.('litigation')}
                className="px-3 py-1.5 bg-purple-100 hover:bg-purple-200 dark:bg-purple-950/50 dark:hover:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-lg text-xs font-bold transition-all"
              >
                ⚖️ Environmental Litigation Profiler
              </button>
              <button
                onClick={() => onNavigateTab?.('nlppw_2026')}
                className="px-3 py-1.5 bg-amber-100 hover:bg-amber-200 dark:bg-amber-950/50 dark:hover:bg-amber-900 text-amber-800 dark:text-amber-200 rounded-lg text-xs font-bold transition-all"
              >
                🗓️ Lead Prevention Week 2026
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB 6: LEGISLATION DEEP DIVE (SIGNAL CLEVELAND REPORT OCT 13, 2026) */}
      {activeSubTab === 'legislation_deep_dive' && (
        <div className="space-y-6">
          <div className={`p-6 md:p-8 rounded-2xl border ${isLight ? 'bg-white border-slate-200' : 'bg-slate-900 border-slate-800'} space-y-6`}>
            <div className="border-b pb-4 border-slate-200 dark:border-slate-800">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-red-600 uppercase bg-red-50 dark:bg-red-950/50 px-2.5 py-1 rounded-md mb-2">
                <span>Signal Cleveland Investigation • Published October 13, 2026</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white">
                Cleveland Lead-Safe Law Revamp Would Focus on ‘Harm Reduction’ and Reward Compliant Landlords
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Forensic breakdown of the proposed amendments introduced to Cleveland City Council on October 12, 2026.
              </p>
            </div>

            {/* Signal Cleveland Article Quote Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`p-5 rounded-xl border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-800/40 border-slate-700'} space-y-3`}>
                <h4 className="text-xs font-bold uppercase tracking-wider text-red-600">Article Excerpt #1: Compliance Stagnation</h4>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed italic">
                  “Around 30% of the rentals in Cleveland have complied with the city’s lead safe law. Officials want to update the legislation to focus on the riskiest properties and loosen rules for compliant landlords... Cleveland City Hall is pitching a revamp to the city’s lead safe laws to focus on ‘harm reduction, not perfection,’ as landlord compliance with the law stagnates.”
                </p>
                <div className="text-[11px] font-mono text-slate-500">
                  Signal Cleveland • Reporter: Nick Castele • Oct 13, 2026
                </div>
              </div>

              <div className={`p-5 rounded-xl border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-800/40 border-slate-700'} space-y-3`}>
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-600">Article Excerpt #2: City Hall Admission</h4>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed italic">
                  “‘We still don’t have enough rentals in compliance,’ said Rebecca Maurer, the city’s senior advisor for lead accountability, in a late-September meeting about the proposals. Currently, the majority of rentals built before 1978 must pass an inspection for lead hazards, a process that many have to re-do every two years. But city leaders estimate only about 30% of Cleveland’s rental stock has the proper certificate showing it passed an inspection.”
                </p>
                <div className="text-[11px] font-mono text-slate-500">
                  City Hall Briefing on Proposed Ordinance Updates
                </div>
              </div>
            </div>

            {/* Critique of the "Harm Reduction" Paradigm */}
            <div className="space-y-4">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                The Fatal Flaws in City Hall's Proposed Amendments:
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className={`p-4 rounded-xl border ${isLight ? 'bg-white border-slate-200' : 'bg-slate-800/30 border-slate-700'} space-y-2`}>
                  <div className="font-bold text-red-600 flex items-center gap-1.5">
                    <X size={14} />
                    <span>Loosening Rules for Landlords</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    Extending certification intervals and reducing audit frequency for compliant landlords frees bad actors to slide under the radar, while diluting the principle of continuous oversight.
                  </p>
                </div>

                <div className={`p-4 rounded-xl border ${isLight ? 'bg-white border-slate-200' : 'bg-slate-800/30 border-slate-700'} space-y-2`}>
                  <div className="font-bold text-amber-600 flex items-center gap-1.5">
                    <X size={14} />
                    <span>Focusing Only on "Riskiest Properties"</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    Waiting for child lead poisonings or active code complaints to define "high-risk" retreats into reactive medical triage—using children as lead detectors rather than proactively clearing paint hazards.
                  </p>
                </div>

                <div className={`p-4 rounded-xl border ${isLight ? 'bg-white border-slate-200' : 'bg-slate-800/30 border-slate-700'} space-y-2`}>
                  <div className="font-bold text-purple-600 flex items-center gap-1.5">
                    <X size={14} />
                    <span>Failure to Touch Corporate Wealth</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    Neither the 2019 law nor the 2026 update levies a single cent on Sherwin-Williams’ billions in corporate profits, preserving the injustice of private enrichment and public toxicity.
                  </p>
                </div>
              </div>
            </div>

            {/* External Link */}
            <div className="flex items-center justify-between border-t pt-4 border-slate-200 dark:border-slate-800">
              <span className="text-xs text-slate-500 font-mono">
                Official Bill Tracking: Cleveland City Council Ordinance Introduced Oct 12, 2026
              </span>
              <a
                href="https://signalcleveland.org/cleveland-lead-poisoning-law-updates-landlords-2026/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold transition-all"
              >
                <span>Read Full Coverage at Signal Cleveland</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* FULL RESOLUTION ARTWORK MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 md:p-8 animate-in fade-in duration-200">
          <div className="w-full max-w-6xl flex items-center justify-between text-white pb-3 border-b border-white/20">
            <div>
              <div className="text-base font-bold">Plate #81: Cleveland Lead-Safe Law Failure Infographic</div>
              <div className="text-xs text-slate-400 font-mono">Vault Hash: {vaultHash}</div>
            </div>
            <button
              onClick={() => setIsModalOpen(false)}
              className="p-2 rounded-full hover:bg-white/20 text-white transition-all cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>

          <div className="w-full max-w-6xl flex-1 flex items-center justify-center p-2 overflow-auto">
            <img
              src={leadFailureInfographicImg}
              alt="Full Resolution Cleveland Lead Safe Law Failure Infographic"
              className="max-h-[82vh] w-auto max-w-full object-contain rounded-lg shadow-2xl border border-white/10"
            />
          </div>

          <div className="w-full max-w-6xl pt-3 flex items-center justify-between text-xs text-slate-400 border-t border-white/10">
            <span>ICEarth Sovereign Archival Repository • Resolution: 16:9 4K Master Asset</span>
            <button
              onClick={copyVaultHash}
              className="px-3 py-1 bg-red-700 hover:bg-red-600 text-white rounded-md font-bold transition-all cursor-pointer"
            >
              {copiedHash ? 'Hash Copied!' : 'Copy Provenance Hash'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default ClevelandLeadSafeLawFailure;

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
  TrendingDown,
  Scale,
  Building2,
  Landmark,
  Pickaxe,
  HeartPulse,
  Wind,
  Layers,
  Globe,
  Gavel,
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
  PieChart,
  Pie,
  Cell
} from 'recharts';
import zambiaKabweInfographicImg from '../assets/images/zambia_kabwe_lead_crisis_infographic_1792550654219.jpg';

interface ZambiaKabweLeadCrisisProps {
  onNavigateTab?: (tab: string) => void;
  siteTheme?: 'light' | 'dark';
}

export const ZambiaKabweLeadCrisis: React.FC<ZambiaKabweLeadCrisisProps> = ({
  onNavigateTab,
  siteTheme = 'light'
}) => {
  const isLight = siteTheme === 'light';

  // Subtab navigation state
  const [activeSubTab, setActiveSubTab] = useState<
    'overview' | 'toxic_triad' | 'acerwc_african_union' | 'exposenomics_data' | 'infographic_studio'
  >('overview');

  // Vault hash copy state
  const [copiedHash, setCopiedHash] = useState(false);
  const vaultHash = '0xZAMBIA_KABWE_LEAD_POISONING_ACERWC_AUCTION_PLATE_91_2026';

  // Modal lightbox state
  const [isModalOpen, setIsModalOpen] = useState(false);

  const copyVaultHash = () => {
    navigator.clipboard.writeText(vaultHash);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 3000);
  };

  // Recharts Data 1: Blood Lead Level Distribution in Kabwe Children (<5 years)
  const childBllDistribution = [
    { range: '< 5 µg/dL (WHO Guidance)', percentage: 4.8, count: 'Normal', fill: '#10b981' },
    { range: '5 - 19 µg/dL (Neurological Impairment)', percentage: 16.2, count: 'Elevated', fill: '#f59e0b' },
    { range: '20 - 44 µg/dL (Cognitive Stunting)', percentage: 31.0, count: 'Severe', fill: '#f97316' },
    { range: '45 - 99 µg/dL (Urgent Chelation Needed)', percentage: 34.5, count: 'Critical', fill: '#ef4444' },
    { range: '≥ 100 µg/dL (Fatal Encephalopathy Risk)', percentage: 13.5, count: 'Emergency', fill: '#991b1b' }
  ];

  // Recharts Data 2: Township Soil Lead Concentration vs Median Child Blood Lead Level
  const townshipExposomeData = [
    { township: 'Kasanda (Downwind)', soilLeadPpm: 4850, childMedianBll: 62.4, distanceKm: 0.8 },
    { township: 'Makululu (Informal Settlement)', soilLeadPpm: 3200, childMedianBll: 48.7, distanceKm: 1.5 },
    { township: 'Chowa (Historic Mine Housing)', soilLeadPpm: 2950, childMedianBll: 42.1, distanceKm: 1.2 },
    { township: 'Mutwe Wansofwa', soilLeadPpm: 1850, childMedianBll: 31.8, distanceKm: 2.8 },
    { township: 'Kabwe Central / Rail', soilLeadPpm: 920, childMedianBll: 18.5, distanceKm: 4.2 },
    { township: 'WHO Safe Soil Baseline', soilLeadPpm: 400, childMedianBll: 3.5, distanceKm: 15.0 }
  ];

  // Recharts Data 3: Historical Timeline & Tailings Accumulation (1904 - 2026)
  const historicalTimelineData = [
    { year: '1904', milestone: 'Colonial Mine Opens', cumulativeWasteMillionTonnes: 0.1, legalAccountability: 0 },
    { year: '1925', milestone: 'Anglo American Takes Control', cumulativeWasteMillionTonnes: 1.2, legalAccountability: 5 },
    { year: '1955', milestone: 'Peak Smelter Production', cumulativeWasteMillionTonnes: 3.4, legalAccountability: 5 },
    { year: '1974', milestone: 'Zambia Nationalizes (ZCCM)', cumulativeWasteMillionTonnes: 4.9, legalAccountability: 10 },
    { year: '1994', milestone: 'Mine Abandoned Uncapped', cumulativeWasteMillionTonnes: 6.4, legalAccountability: 12 },
    { year: '2020', milestone: 'SA High Court Class Action', cumulativeWasteMillionTonnes: 6.4, legalAccountability: 35 },
    { year: '2026', milestone: 'African Union ACERWC Hearing', cumulativeWasteMillionTonnes: 6.4, legalAccountability: 88 }
  ];

  return (
    <div className={`min-h-screen ${isLight ? 'bg-stone-50 text-stone-900' : 'bg-stone-950 text-stone-100'} transition-colors duration-200`}>
      {/* TOP NOTIFICATION / BANNER */}
      <div className="bg-gradient-to-r from-red-950 via-amber-950 to-stone-900 text-white px-4 py-3 border-b border-red-500/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 bg-gradient-to-r from-red-600 via-amber-500 to-emerald-500 text-stone-950 font-black rounded uppercase text-[10px] tracking-wider">
              African Union ACERWC Human Rights Hearing • Oct 20, 2026
            </span>
            <span className="font-semibold text-amber-200">
              International Lead Poisoning Prevention Week: Zambia’s Poisoned Children
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://mg.co.za/thought-leader/2026-10-20-zambia-s-poisoned-children-have-waited-long-enough-for-justice-africa-needs-to-act/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-cyan-300 hover:text-white underline font-mono text-[11px] transition-colors"
            >
              <span>Mail & Guardian Dispatch</span>
              <ExternalLink size={12} />
            </a>
            <button
              onClick={() => setActiveSubTab('infographic_studio')}
              className="px-2.5 py-1 bg-red-600/70 hover:bg-red-500 text-white font-black rounded flex items-center gap-1 cursor-pointer transition-colors shadow-xs"
            >
              <Maximize2 size={12} />
              <span>Plate #91 Infographic</span>
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
              <span>Plate #91 • African Union Human Rights Accountability</span>
            </span>
            <span className="px-3 py-1 bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/30 rounded-full font-mono text-xs font-semibold">
              Kabwe, Zambia • Colonial Broken Hill Mine
            </span>
            <span className="px-3 py-1 bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 rounded-full font-mono text-xs font-semibold">
              ILPPW 2026: “From Detection to Prevention”
            </span>
            <span className="px-3 py-1 bg-stone-500/20 text-stone-600 dark:text-stone-400 border border-stone-500/30 rounded-full font-mono text-xs font-semibold">
              ACERWC / African Charter Action
            </span>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-red-600 via-amber-500 to-emerald-500 bg-clip-text text-transparent">
                Zambia’s Poisoned Children
              </span>
              : The Toxic Colonial Legacy of Kabwe & The African Union Hearing
            </h1>
            <p className="text-lg md:text-xl text-stone-600 dark:text-stone-300 font-serif leading-relaxed max-w-5xl">
              On 20 October 2026, coinciding with International Lead Poisoning Prevention Week, the <strong>African Committee of Experts on the Rights and Welfare of the Child (ACERWC)</strong> convenes to consider a landmark legal complaint against the Republic of Zambia. In Kabwe—branded the world’s most toxic town—<strong>more than 95% of children have dangerously elevated blood lead levels</strong>, with over a third exceeding 45 µg/dL and many over 100 µg/dL. This ongoing atrocity is the direct consequence of <strong>decades of inadequate environmental protection, insufficient corporate accountability, and government failure</strong> that left 6.4 million tonnes of toxic mine tailings uncovered in the heart of a city of 200,000 people.
            </p>
          </div>

          {/* METRIC STRIP */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
            <div className={`p-4 rounded-xl border ${isLight ? 'bg-red-50 border-red-200' : 'bg-red-950/30 border-red-800/40'}`}>
              <div className="text-xs font-mono font-bold text-red-600 dark:text-red-400 uppercase tracking-wider flex items-center gap-1.5">
                <AlertTriangle size={14} />
                <span>Children Poisoned</span>
              </div>
              <div className="text-3xl font-black text-red-700 dark:text-red-300 mt-1">&gt;95%</div>
              <div className="text-xs text-stone-500 mt-1 font-serif">
                Over 48% suffer levels requiring urgent hospitalization (&gt;45 µg/dL)
              </div>
            </div>

            <div className={`p-4 rounded-xl border ${isLight ? 'bg-amber-50 border-amber-200' : 'bg-amber-950/30 border-amber-800/40'}`}>
              <div className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                <Layers size={14} />
                <span>Uncovered Waste</span>
              </div>
              <div className="text-3xl font-black text-amber-700 dark:text-amber-300 mt-1">6.4M Tonnes</div>
              <div className="text-xs text-stone-500 mt-1 font-serif">
                Uncapped lead tailings and slag dumps blowing dust into homes
              </div>
            </div>

            <div className={`p-4 rounded-xl border ${isLight ? 'bg-cyan-50 border-cyan-200' : 'bg-cyan-950/30 border-cyan-800/40'}`}>
              <div className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                <Activity size={14} />
                <span>Exposed Population</span>
              </div>
              <div className="text-3xl font-black text-cyan-700 dark:text-cyan-300 mt-1">200,000+</div>
              <div className="text-xs text-stone-500 mt-1 font-serif">
                Residents in Kasanda, Makululu, Chowa, and Mutwe Wansofwa
              </div>
            </div>

            <div className={`p-4 rounded-xl border ${isLight ? 'bg-emerald-50 border-emerald-200' : 'bg-emerald-950/30 border-emerald-800/40'}`}>
              <div className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                <Gavel size={14} />
                <span>AU Legal Forum</span>
              </div>
              <div className="text-3xl font-black text-emerald-700 dark:text-emerald-300 mt-1">ACERWC</div>
              <div className="text-xs text-stone-500 mt-1 font-serif">
                African Union Committee of Experts on Rights and Welfare of the Child
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
            <span>Overview & Colonial Legacy</span>
          </button>

          <button
            onClick={() => setActiveSubTab('toxic_triad')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              activeSubTab === 'toxic_triad'
                ? 'bg-amber-600 text-white shadow-md'
                : isLight ? 'text-stone-600 hover:bg-stone-100' : 'text-stone-300 hover:bg-stone-800'
            }`}
          >
            <AlertTriangle size={13} />
            <span>The Triad of Failure: Environment, Corporate & State</span>
          </button>

          <button
            onClick={() => setActiveSubTab('acerwc_african_union')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              activeSubTab === 'acerwc_african_union'
                ? 'bg-emerald-700 text-white shadow-md'
                : isLight ? 'text-stone-600 hover:bg-stone-100' : 'text-stone-300 hover:bg-stone-800'
            }`}
          >
            <Gavel size={13} />
            <span>African Union Hearing (20 Oct 2026)</span>
          </button>

          <button
            onClick={() => setActiveSubTab('exposenomics_data')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              activeSubTab === 'exposenomics_data'
                ? 'bg-cyan-600 text-white shadow-md'
                : isLight ? 'text-stone-600 hover:bg-stone-100' : 'text-stone-300 hover:bg-stone-800'
            }`}
          >
            <Activity size={13} />
            <span>Township Exposenomics & BLL Data</span>
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
            <span>Plate #91 Visual Infographic Studio</span>
          </button>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        {/* TAB 1: OVERVIEW & COLONIAL LEGACY */}
        {activeSubTab === 'overview' && (
          <div className="space-y-8">
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-amber-50/70 border-amber-200' : 'bg-amber-950/20 border-amber-800/40'}`}>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-500/20 text-amber-600 dark:text-amber-400 rounded-xl">
                  <Wind size={24} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold font-serif text-stone-900 dark:text-stone-100">
                    Kabwe, Zambia: The 122-Year Unremediated Poisoning of an African City
                  </h3>
                  <p className="text-sm text-stone-600 dark:text-stone-300 font-serif leading-relaxed">
                    Lead and zinc mining began in Kabwe during British colonial rule in 1904 at what was named the <em>Broken Hill mine</em>. For seven decades, British and South African corporate conglomerates—chiefly Anglo American Corporation from 1925 to 1974—extracted vast mineral wealth while releasing unfiltered lead fumes from smelter stacks and dumping unlined toxic slag and tailings. Although underground mining was shuttered in 1994, an estimated <strong>6.4 million tonnes of uncovered lead-rich waste and tailings</strong> remain in giant mounds right next to residential neighborhoods. The prevailing dry-season winds pick up this fine, toxic dust and deposit it directly into homes, schools, and unpaved yards across Kasanda, Makululu, and Chowa.
                  </p>
                </div>
              </div>
            </div>

            {/* Three Pillar Cards: History, Biology & Inaction */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className={`p-5 rounded-xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-3`}>
                <div className="w-8 h-8 rounded-lg bg-red-500/20 text-red-500 flex items-center justify-center font-bold font-mono">
                  01
                </div>
                <h4 className="font-bold text-base font-serif">Colonial Extraction, Post-Colonial Abandonment</h4>
                <p className="text-xs text-stone-600 dark:text-stone-400 font-serif leading-relaxed">
                  During colonial exploitation and subsequent nationalization under ZCCM, safety protocols for black African workers and surrounding townships were non-existent. When the mine was privatized and closed in 1994, foreign capital exited, leaving Zambia with an astronomical environmental debt that no developing economy could bear alone.
                </p>
              </div>

              <div className={`p-5 rounded-xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-3`}>
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-500 flex items-center justify-center font-bold font-mono">
                  02
                </div>
                <h4 className="font-bold text-base font-serif">Children Bearing the Deadliest Burden</h4>
                <p className="text-xs text-stone-600 dark:text-stone-400 font-serif leading-relaxed">
                  Toddlers crawl on unpaved lead-dust soil, ingesting particles through normal hand-to-mouth play. Because a child’s gut absorbs up to 50% of ingested lead (compared to ~10% in adults) and their blood-brain barrier is porous, children in Kabwe suffer irreversible cognitive stunting, sensory loss, behavioral disorders, and early-childhood encephalopathy.
                </p>
              </div>

              <div className={`p-5 rounded-xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-3`}>
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-500 flex items-center justify-center font-bold font-mono">
                  03
                </div>
                <h4 className="font-bold text-base font-serif">From Detection to Permanent Prevention</h4>
                <p className="text-xs text-stone-600 dark:text-stone-400 font-serif leading-relaxed">
                  As International Lead Poisoning Prevention Week 2026 highlights, identifying lead poisoning is meaningless if detection is treated as an endpoint. Kabwe’s blood lead levels have been documented in dozens of academic studies for 30 years. What has been absent is source elimination: capping the 6.4M tonnes of waste and holding polluters accountable.
                </p>
              </div>
            </div>

            {/* Historical Timeline Chart */}
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-4`}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b pb-3 border-stone-200 dark:border-stone-800">
                <div>
                  <h3 className="text-lg font-bold font-serif">Kabwe Tailings Accumulation vs. Legal Accountability Index (1904–2026)</h3>
                  <p className="text-xs text-stone-500 font-serif">Tracking 122 years of colonial lead production, post-closure abandonment, and legal struggles</p>
                </div>
                <span className="px-2.5 py-1 bg-red-500/10 text-red-600 dark:text-red-400 rounded text-xs font-mono font-bold">
                  Sovereign Legal Forensic Timeline
                </span>
              </div>
              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={historicalTimelineData} margin={{ top: 20, right: 30, left: 10, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke={isLight ? '#e5e7eb' : '#374151'} />
                    <XAxis dataKey="year" stroke={isLight ? '#4b5563' : '#9ca3af'} />
                    <YAxis yAxisId="left" stroke="#ef4444" label={{ value: 'Tailings (M Tonnes)', angle: -90, position: 'insideLeft', fill: '#ef4444', fontSize: 11 }} />
                    <YAxis yAxisId="right" orientation="right" stroke="#10b981" label={{ value: 'Accountability Index (0-100)', angle: 90, position: 'insideRight', fill: '#10b981', fontSize: 11 }} />
                    <Tooltip contentStyle={{ backgroundColor: isLight ? '#ffffff' : '#1c1917', borderColor: '#e5e7eb' }} />
                    <Legend />
                    <Line yAxisId="left" type="monotone" dataKey="cumulativeWasteMillionTonnes" name="Cumulative Uncovered Tailings (M Tonnes)" stroke="#ef4444" strokeWidth={3} dot={{ r: 5 }} />
                    <Line yAxisId="right" type="monotone" dataKey="legalAccountability" name="Human Rights & Legal Pressure Index (0-100)" stroke="#10b981" strokeWidth={2} strokeDasharray="5 5" dot={{ r: 4 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: THE TRIAD OF FAILURE */}
        {activeSubTab === 'toxic_triad' && (
          <div className="space-y-8">
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-red-50/70 border-red-200' : 'bg-red-950/20 border-red-800/40'}`}>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-500/20 text-red-600 dark:text-red-400 rounded-xl">
                  <Skull size={24} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold font-serif text-stone-900 dark:text-stone-100">
                    The Toxic Triad: Environmental Protection, Corporate Accountability & State Failure
                  </h3>
                  <p className="text-sm text-stone-600 dark:text-stone-300 font-serif leading-relaxed">
                    As framed by <em>Mail & Guardian</em>, the ongoing poisoning of Kabwe is not an unforeseen natural tragedy. It is the direct consequence of three decades-long structural failures that allowed private profit to be extracted while dumping lethal biological costs onto black children.
                  </p>
                </div>
              </div>
            </div>

            {/* Triad Deep-Dive Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Failure 1 */}
              <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-4`}>
                <div className="flex items-center gap-2 text-red-600 dark:text-red-400 font-bold font-serif">
                  <Wind size={20} />
                  <h4 className="text-base">1. Inadequate Environmental Protection</h4>
                </div>
                <ul className="space-y-2.5 text-xs text-stone-600 dark:text-stone-300 font-serif">
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-red-500 font-bold">•</span>
                    <span><strong>Uncapped Tailings & Slag:</strong> 6.4 million tonnes of lead-rich tailings have sat open to the elements for 32 years without vegetative cover, concrete capping, or synthetic geomembranes.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-red-500 font-bold">•</span>
                    <span><strong>Toxic Airborne Dust Plumes:</strong> During Zambia’s windy dry season (May to October), dust containing up to 10,000 mg/kg lead blankets residential zones up to 5 kilometers away.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-red-500 font-bold">•</span>
                    <span><strong>Informal Scavenging ("Scrapping"):</strong> Desperate youth and artisanal diggers scavenge lead scrap directly on the tailings mounds without basic PPE, bringing toxic dust into homes.</span>
                  </li>
                </ul>
              </div>

              {/* Failure 2 */}
              <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-4`}>
                <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold font-serif">
                  <Building2 size={20} />
                  <h4 className="text-base">2. Insufficient Corporate Accountability</h4>
                </div>
                <ul className="space-y-2.5 text-xs text-stone-600 dark:text-stone-300 font-serif">
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-amber-500 font-bold">•</span>
                    <span><strong>Anglo American Legal Evasion:</strong> Anglo American South Africa owned and managed the mine through supervisory subsidiaries from 1925 to 1974, deriving vast profits while internal memos acknowledged grave lead hazards.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-amber-500 font-bold">•</span>
                    <span><strong>Jurisdictional Shell Games:</strong> In South African courts, Anglo American argued that it owed no duty of care to Zambian victims, successfully opposing class certification in the Johannesburg High Court.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-amber-500 font-bold">•</span>
                    <span><strong>Externalized Superfund Costs:</strong> Multinational corporations transferred the financial and biological liability to a cash-strapped developing sovereign state.</span>
                  </li>
                </ul>
              </div>

              {/* Failure 3 */}
              <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-4`}>
                <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-bold font-serif">
                  <Landmark size={20} />
                  <h4 className="text-base">3. Government Failure & Bureaucracy</h4>
                </div>
                <ul className="space-y-2.5 text-xs text-stone-600 dark:text-stone-300 font-serif">
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-cyan-500 font-bold">•</span>
                    <span><strong>Stalled World Bank Projects:</strong> Despite tens of millions in World Bank loans (CEP and ZEMA programs since 2003), comprehensive environmental remediation of the central waste dump was never executed.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-cyan-500 font-bold">•</span>
                    <span><strong>Palliative Chelation over Source Elimination:</strong> Administering chelating agents to poisoned children without removing them from lead-soaked yards caused immediate re-poisoning upon discharge.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-cyan-500 font-bold">•</span>
                    <span><strong>Failure to Relocate Communities:</strong> The government failed to rezone high-risk zones or provide safe, clean housing away from the toxic plume.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: AFRICAN UNION ACERWC HEARING */}
        {activeSubTab === 'acerwc_african_union' && (
          <div className="space-y-8">
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-emerald-50/70 border-emerald-200' : 'bg-emerald-950/20 border-emerald-800/40'}`}>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-xl">
                  <Gavel size={24} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold font-serif text-stone-900 dark:text-stone-100">
                    The ACERWC Legal Petition: Africa Holds Zambia & Multinationals Accountable
                  </h3>
                  <p className="text-sm text-stone-600 dark:text-stone-300 font-serif leading-relaxed">
                    On <strong>20 October 2026</strong>, the <strong>African Committee of Experts on the Rights and Welfare of the Child (ACERWC)</strong>, the treaty body of the African Union responsible for monitoring the African Charter on the Rights and Welfare of the Child, convenes to consider a landmark communication filed on behalf of Kabwe’s children. The petition asserts that Zambia’s ongoing failure to remediate Kabwe violates the core non-derogable rights guaranteed under the African Charter.
                  </p>
                </div>
              </div>
            </div>

            {/* Legal Violations Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-3`}>
                <h4 className="font-bold text-base font-serif flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                  <Scale size={18} />
                  <span>Violations Under the African Children's Charter</span>
                </h4>
                <ul className="space-y-2.5 text-xs text-stone-600 dark:text-stone-300 font-serif">
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-emerald-500 font-bold">Art. 5:</span>
                    <span><strong>Right to Survival & Development:</strong> Forcing children to grow up in an environment where chronic lead encephalopathy impairs mental faculties directly deprives them of their developmental potential.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-emerald-500 font-bold">Art. 14:</span>
                    <span><strong>Right to Health:</strong> State failure to provide accessible, specialized heavy-metal medical treatment, regular blood testing, and clean, unpolluted living conditions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-emerald-500 font-bold">Art. 3:</span>
                    <span><strong>Non-Discrimination:</strong> Impoverished Zambian children in informal townships are subjected to environmental hazards that would never be tolerated in affluent residential districts.</span>
                  </li>
                </ul>
              </div>

              <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-3`}>
                <h4 className="font-bold text-base font-serif flex items-center gap-2 text-cyan-600 dark:text-cyan-400">
                  <ShieldCheck size={18} />
                  <span>Relief Demanded Before the African Union</span>
                </h4>
                <ul className="space-y-2.5 text-xs text-stone-600 dark:text-stone-300 font-serif">
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-cyan-500 font-bold">1.</span>
                    <span><strong>Mandatory Capping & Containment:</strong> Immediate physical sealing and containment of the 6.4 million tonnes of tailings and slag dumps.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-cyan-500 font-bold">2.</span>
                    <span><strong>Lifelong Medical Surveillance & Trust Fund:</strong> Establishment of a permanent medical fund providing free venous blood lead testing, continuous chelation, and special education support.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-cyan-500 font-bold">3.</span>
                    <span><strong>Relocation of Kasanda & Makululu:</strong> Safe, dignified relocation of families living directly adjacent to the mine boundary into remediated, lead-safe agricultural land.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: TOWNSHIP EXPOSENOMICS & BLL DATA */}
        {activeSubTab === 'exposenomics_data' && (
          <div className="space-y-8">
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-4`}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b pb-3 border-stone-200 dark:border-stone-800">
                <div>
                  <h3 className="text-lg font-bold font-serif">Blood Lead Level (BLL) Severity Distribution in Kabwe Children (&lt;5 Years)</h3>
                  <p className="text-xs text-stone-500 font-serif">Clinical data illustrating that over 95% of children have elevated BLLs, with 48% at critical or emergency thresholds</p>
                </div>
                <span className="px-2.5 py-1 bg-red-500/10 text-red-600 dark:text-red-400 rounded text-xs font-mono font-bold">
                  CDC / WHO Toxic Threshold: 3.5–5 µg/dL
                </span>
              </div>
              <div className="h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={childBllDistribution} margin={{ top: 20, right: 30, left: 10, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke={isLight ? '#e5e7eb' : '#374151'} />
                    <XAxis dataKey="range" stroke={isLight ? '#4b5563' : '#9ca3af'} tick={{ fontSize: 11 }} />
                    <YAxis stroke={isLight ? '#4b5563' : '#9ca3af'} tickFormatter={(v) => `${v}%`} />
                    <Tooltip formatter={(value: number) => [`${value}% of Kabwe Children`]} contentStyle={{ backgroundColor: isLight ? '#ffffff' : '#1c1917', borderColor: '#e5e7eb' }} />
                    <Bar dataKey="percentage" name="Percentage of Children" radius={[4, 4, 0, 0]}>
                      {childBllDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Township Soil Lead vs Child BLL */}
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-4`}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b pb-3 border-stone-200 dark:border-stone-800">
                <div>
                  <h3 className="text-lg font-bold font-serif">Soil Lead Concentration (ppm) vs. Median Child Blood Lead (µg/dL) by Township</h3>
                  <p className="text-xs text-stone-500 font-serif">Direct spatial correlation: Soil lead exceeding 4,000 ppm downwind from Black Mountain slag heaps</p>
                </div>
                <span className="px-2.5 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded text-xs font-mono font-bold">
                  Roulet’s Law Spatial Gradient
                </span>
              </div>
              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={townshipExposomeData} margin={{ top: 20, right: 30, left: 10, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke={isLight ? '#e5e7eb' : '#374151'} />
                    <XAxis dataKey="township" stroke={isLight ? '#4b5563' : '#9ca3af'} tick={{ fontSize: 11 }} />
                    <YAxis stroke={isLight ? '#4b5563' : '#9ca3af'} />
                    <Tooltip contentStyle={{ backgroundColor: isLight ? '#ffffff' : '#1c1917', borderColor: '#e5e7eb' }} />
                    <Legend />
                    <Bar dataKey="soilLeadPpm" name="Soil Lead Concentration (ppm)" fill="#ef4444" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="childMedianBll" name="Median Child Blood Lead (µg/dL)" fill="#f59e0b" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Cross Navigation Actions */}
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-stone-100 border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-4`}>
              <h4 className="font-bold text-base font-serif">Explore Related Mining & Exposenomics Proofs</h4>
              <div className="flex flex-wrap items-center gap-3">
                {onNavigateTab && (
                  <>
                    <button
                      onClick={() => onNavigateTab('artisanal_mining')}
                      className="px-3.5 py-2 bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-500 hover:to-red-500 text-stone-950 font-bold rounded-lg text-xs font-mono flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
                    >
                      <span>⛏️ Artisanal Mining & Illicit Pits</span>
                      <ArrowRight size={13} />
                    </button>
                    <button
                      onClick={() => onNavigateTab('nigeria_lead_review')}
                      className="px-3.5 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-stone-950 font-bold rounded-lg text-xs font-mono flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
                    >
                      <span>🇳🇬 Nigeria Lead Poisoning Review</span>
                      <ArrowRight size={13} />
                    </button>
                    <button
                      onClick={() => onNavigateTab('ghana_lead_poisoning')}
                      className="px-3.5 py-2 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-stone-950 font-bold rounded-lg text-xs font-mono flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
                    >
                      <span>🇬🇭 Ghana Silent Poison: Battery Lead</span>
                      <ArrowRight size={13} />
                    </button>
                    <button
                      onClick={() => onNavigateTab('peru_copper_sovereignty')}
                      className="px-3.5 py-2 bg-gradient-to-r from-stone-800 to-stone-700 hover:bg-stone-700 text-amber-300 font-bold rounded-lg text-xs font-mono flex items-center gap-1.5 transition-all shadow-md cursor-pointer border border-amber-400/40"
                    >
                      <span>🇵🇪 Peru Indigenous Copper Mining</span>
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
                  <h3 className="text-xl font-bold font-serif">Plate #91 Master Visual Infographic</h3>
                  <p className="text-xs text-stone-500 font-mono">
                    High-Resolution Sovereign Archive • Zambia’s Poisoned Children & The Kabwe Colonial Lead Legacy
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
                    href="https://mg.co.za/thought-leader/2026-10-20-zambia-s-poisoned-children-have-waited-long-enough-for-justice-africa-needs-to-act/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-stone-200 dark:bg-stone-800 hover:bg-stone-300 dark:hover:bg-stone-700 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 transition-colors"
                  >
                    <ExternalLink size={13} />
                    <span>Mail & Guardian Dispatch</span>
                  </a>
                </div>
              </div>

              {/* Infographic Container */}
              <div
                className="relative rounded-xl overflow-hidden border border-stone-300 dark:border-stone-700 bg-stone-950 cursor-pointer group"
                onClick={() => setIsModalOpen(true)}
              >
                <img
                  src={zambiaKabweInfographicImg}
                  alt="Zambia Kabwe Lead Poisoning Crisis Master Infographic"
                  className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-300 max-h-[650px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent flex items-end p-6">
                  <div className="space-y-1">
                    <span className="px-2 py-0.5 bg-red-600 text-white font-mono text-[10px] font-bold uppercase rounded">
                      Plate #91 Master Archive
                    </span>
                    <h4 className="text-white text-lg font-bold font-serif">
                      Zambia’s Poisoned Children: The Toxic Colonial Legacy of Kabwe
                    </h4>
                    <p className="text-stone-300 text-xs font-serif max-w-3xl">
                      Click to expand full high-resolution diagram mapping the 6.4 million tonnes of uncovered lead mine tailings, wind dispersion to Kasanda and Chowa townships, child blood lead level distributions, and the African Union ACERWC legal petition.
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
                PLATE #91 • ZAMBIA’S POISONED CHILDREN: THE TOXIC COLONIAL LEGACY OF KABWE
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
                src={zambiaKabweInfographicImg}
                alt="Zambia Kabwe Lead Crisis Master Infographic"
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>
            <div className="w-full pt-3 border-t border-stone-800 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <span className="text-stone-400">Vault: {vaultHash}</span>
              <div className="flex items-center gap-2">
                <a
                  href="https://mg.co.za/thought-leader/2026-10-20-zambia-s-poisoned-children-have-waited-long-enough-for-justice-africa-needs-to-act/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold rounded flex items-center gap-1"
                >
                  <ExternalLink size={12} />
                  <span>Mail & Guardian Dispatch</span>
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

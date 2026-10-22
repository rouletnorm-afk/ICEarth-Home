import React, { useState, useMemo } from 'react';
import {
  Building2,
  AlertTriangle,
  DollarSign,
  TrendingDown,
  TrendingUp,
  MapPin,
  FileText,
  Calendar,
  CheckCircle2,
  ExternalLink,
  Search,
  Sparkles,
  Share2,
  Download,
  Flame,
  Scale,
  Activity,
  Maximize2,
  Info,
  Clock,
  Zap,
  Sliders,
  ShieldAlert,
  GraduationCap,
  Droplets,
  HeartPulse,
  Award,
  ChevronRight,
  ShieldCheck,
  Stethoscope,
  Users,
  Gavel,
  BookOpen,
  HelpCircle,
  Landmark,
  Layers,
  ArrowRight,
  RefreshCw,
  Copy,
  Check,
  Crosshair,
  BadgeAlert,
  Globe,
  Brain,
  Microscope,
  CheckSquare
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
  PieChart,
  Pie,
  Cell
} from 'recharts';
import ethiopiaAuditPlateImg from '../assets/images/ethiopia_lead_audit_plate94_1792699851722.jpg';

interface EthiopiaLeadAuditProps {
  onNavigateTab?: (tab: string) => void;
  siteTheme?: 'light' | 'dark' | 'glass';
}

export const EthiopiaLeadAudit: React.FC<EthiopiaLeadAuditProps> = ({
  onNavigateTab,
  siteTheme = 'light'
}) => {
  const [activeSubTab, setActiveSubTab] = useState<
    'overview' | 'exposure_pathways' | 'diagnostic_cascade' | 'african_context' | 'national_roadmap' | 'interactive_simulator'
  >('overview');

  const [isArtworkModalOpen, setIsArtworkModalOpen] = useState(false);
  const [copiedHash, setCopiedHash] = useState(false);

  // Interactive Regional Intervention Simulator State
  const [selectedRegion, setSelectedRegion] = useState<'addis_ababa' | 'oromia' | 'amhara' | 'sidama' | 'dire_dawa'>('addis_ababa');
  const [screeningCoveragePercent, setScreeningCoveragePercent] = useState<number>(45);
  const [batteryFormalizationPercent, setBatteryFormalizationPercent] = useState<number>(60);
  const [paintAbatementRate, setPaintAbatementRate] = useState<number>(50);

  const isLight = siteTheme === 'light';
  const PROVENANCE_HASH = '0xETHIOPIA_LEAD_AUDIT_RESPONSE_WHO_CASE_STUDY_PLATE_94';

  const handleCopyHash = () => {
    navigator.clipboard.writeText(PROVENANCE_HASH);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2500);
  };

  // Epidemiological Timeline: Ethiopia Lead Exposure & Response (2014 - 2030 Target)
  const timelineData = [
    { year: '2014', pediatricBllPct: 44.5, meanBll: 8.2, policyAction: 'PAN-Ethiopia Lead Paint Testing', legalCapPpm: 10000 },
    { year: '2016', pediatricBllPct: 41.2, meanBll: 7.6, policyAction: 'Addis Ababa University Akaki Basin Audit', legalCapPpm: 10000 },
    { year: '2018', pediatricBllPct: 39.0, meanBll: 7.1, policyAction: 'Mandatory 90 ppm Lead Paint Standard Promulgated', legalCapPpm: 90 },
    { year: '2021', pediatricBllPct: 37.4, meanBll: 6.7, policyAction: 'Vital Strategies & EPHI National BLL Assessment', legalCapPpm: 90 },
    { year: '2024', pediatricBllPct: 36.1, meanBll: 6.3, policyAction: 'National Roadmap 2026-2030 Drafted', legalCapPpm: 90 },
    { year: '2026', pediatricBllPct: 35.8, meanBll: 6.1, policyAction: 'WHO Case Study: "Making the Invisible Visible"', legalCapPpm: 90 },
    { year: '2030 (Goal)', pediatricBllPct: 14.3, meanBll: 2.8, policyAction: 'Target: 60% Childhood BLL Reduction', legalCapPpm: 90 }
  ];

  // African Continent Comparative Lead Burden Data (% Children >= 5 ug/dL & Macroeconomic Loss)
  const africanComparisonData = [
    { country: 'Zambia (Kabwe Hotspot)', pediatricPct: 95.2, gdpLossPct: 6.8, annualCostBillion: 1.9, primarySource: 'Mining Tailings (6.4M tonnes Broken Hill)' },
    { country: 'Nigeria', pediatricPct: 41.5, gdpLossPct: 4.8, annualCostBillion: 19.8, primarySource: 'Artisanal Gold/Lead Smelting & ULAB' },
    { country: 'DR Congo', pediatricPct: 37.2, gdpLossPct: 4.5, annualCostBillion: 3.2, primarySource: 'Cobalt-Copper Tailings & Metallurgy' },
    { country: 'Ethiopia', pediatricPct: 35.8, gdpLossPct: 4.1, annualCostBillion: 6.5, primarySource: 'ULAB Recycling, Paint, Spices, Akaki River' },
    { country: 'Egypt', pediatricPct: 31.4, gdpLossPct: 3.6, annualCostBillion: 14.2, primarySource: 'Legacy TEL, Leaded Pipes & Industrial Dust' },
    { country: 'Ghana', pediatricPct: 28.6, gdpLossPct: 3.4, annualCostBillion: 2.7, primarySource: 'Agbogbloshie E-Waste & Informal ULAB' },
    { country: 'Kenya', pediatricPct: 26.5, gdpLossPct: 3.1, annualCostBillion: 3.8, primarySource: 'Informal Battery Smelters (Owino Uhuru)' },
    { country: 'South Africa', pediatricPct: 24.2, gdpLossPct: 2.8, annualCostBillion: 11.4, primarySource: 'Gold Mine Dust, Legacy TEL & Paint' }
  ];

  // Exposure Vectors Breakdown in Ethiopia
  const exposureSourcesData = [
    { name: 'Informal ULAB Battery Recycling', share: 38, annualTons: 14200, color: '#DC2626', riskCategory: 'Severe Acute & Chronic' },
    { name: 'Architectural & Industrial Paint', share: 24, annualTons: 8900, color: '#EA580C', riskCategory: 'Pediatric Ingestion' },
    { name: 'Contaminated Food, Spices & Clay Cookware', share: 18, annualTons: 6700, color: '#D97706', riskCategory: 'Dietary Bioaccumulation' },
    { name: 'Akaki Industrial River Watershed & Irrigation', share: 12, annualTons: 4500, color: '#059669', riskCategory: 'Agricultural Soil & Food Chain' },
    { name: 'Automotive Garages & Scrap E-Waste', share: 8, annualTons: 3000, color: '#4B5563', riskCategory: 'Occupational & Take-Home' }
  ];

  // Regional Profiles for Simulation
  const regionalProfiles = {
    addis_ababa: {
      name: 'Addis Ababa & Akaki Kality Corridor',
      childPopulation: 1450000,
      baselineElevatedPct: 42.6,
      gdpContributionPct: 32,
      majorHotspots: 'Akaki River Industrial Basin, Kality scrap markets, Mercato spice stalls'
    },
    oromia: {
      name: 'Oromia Regional State',
      childPopulation: 9800000,
      baselineElevatedPct: 36.4,
      gdpContributionPct: 29,
      majorHotspots: 'Adama transit hub, peri-urban battery recyclers, agricultural irrigation'
    },
    amhara: {
      name: 'Amhara Regional State (Gondar / Bahir Dar)',
      childPopulation: 6200000,
      baselineElevatedPct: 33.8,
      gdpContributionPct: 18,
      majorHotspots: 'Historic housing with lead paint, artisanal ceramic pottery, local spices'
    },
    sidama: {
      name: 'Sidama Regional State (Hawassa)',
      childPopulation: 1100000,
      baselineElevatedPct: 31.2,
      gdpContributionPct: 7,
      majorHotspots: 'Industrial park expansion, informal electronic and battery scrap'
    },
    dire_dawa: {
      name: 'Dire Dawa Chartered City',
      childPopulation: 380000,
      baselineElevatedPct: 39.5,
      gdpContributionPct: 5,
      majorHotspots: 'Cross-border transit corridor, radiator repair, railway workshop scrap'
    }
  };

  // Calculations for Regional Simulator
  const currentProfile = regionalProfiles[selectedRegion];
  const simResults = useMemo(() => {
    const totalChildren = currentProfile.childPopulation;
    const baselinePoisoned = Math.round(totalChildren * (currentProfile.baselineElevatedPct / 100));
    
    // Impact of intervention sliders
    const reductionFactor = (screeningCoveragePercent * 0.35 + batteryFormalizationPercent * 0.45 + paintAbatementRate * 0.20) / 100;
    const projectedReductionPct = Math.min(65, Math.round(reductionFactor * 60));
    const childrenProtected = Math.round(baselinePoisoned * (projectedReductionPct / 100));
    const remainingElevated = baselinePoisoned - childrenProtected;
    const postInterventionPct = ((remainingElevated / totalChildren) * 100).toFixed(1);

    // Economic and Cognitive Capital Saved
    const avgIqPointsSavedPerChild = 3.6;
    const totalIqPointsPreserved = (childrenProtected * avgIqPointsSavedPerChild).toLocaleString();
    const annualEconomicSavingsMillions = Math.round(childrenProtected * 285);

    return {
      baselinePoisoned,
      projectedReductionPct,
      childrenProtected,
      remainingElevated,
      postInterventionPct,
      totalIqPointsPreserved,
      annualEconomicSavingsMillions
    };
  }, [selectedRegion, screeningCoveragePercent, batteryFormalizationPercent, paintAbatementRate]);

  return (
    <div className={`min-h-screen py-8 px-4 sm:px-6 lg:px-8 font-sans ${isLight ? 'bg-stone-100 text-stone-900' : 'bg-stone-950 text-stone-100'}`}>
      
      {/* 1. HERO BANNER: ETHIOPIA LEAD AUDIT & RESPONSE */}
      <div className={`relative overflow-hidden rounded-3xl border mb-8 p-6 sm:p-10 shadow-2xl ${
        isLight 
          ? 'bg-gradient-to-br from-emerald-950 via-stone-900 to-amber-950 border-emerald-600/40 text-white' 
          : 'bg-gradient-to-br from-stone-950 via-emerald-950/60 to-amber-950/60 border-emerald-500/50 text-stone-100'
      }`}>
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-4xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 bg-emerald-600 text-white font-mono text-[10px] font-black rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                <Globe size={12} className="text-emerald-200" />
                WHO Feature Case Study • 22 October 2026
              </span>
              <span className="px-3 py-1 bg-amber-500/20 text-amber-300 font-mono text-[10px] font-bold rounded-full border border-amber-500/40">
                ILPPW 2026: From Detection to Prevention
              </span>
              <span className="px-2.5 py-0.5 bg-stone-800 text-stone-300 font-mono text-[10px] rounded border border-stone-700">
                PLATE #94
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-black tracking-tight text-white leading-tight">
              Ethiopia Lead Audit &amp; Response: <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-amber-300 to-amber-500">
                Making the Invisible Visible
              </span>
            </h1>

            <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-sans">
              On 22 October 2026, the World Health Organization (WHO) published a landmark case study detailing Ethiopia’s multi-sectoral national response to the invisible scourge of lead poisoning. From homes and school classrooms to automotive garages, industrial battery scrap yards, and hospital diagnostic laboratories, Ethiopia’s Ministry of Health, Ethiopian Public Health Institute (EPHI), and Environmental Protection Authority (EPA) are deploying blood lead screening, portable XRF analyzers, and a 2026–2030 National Strategic Roadmap aiming for an unprecedented <strong>60% reduction in childhood blood lead levels</strong>.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-mono text-stone-400">
              <span className="flex items-center gap-1 text-emerald-300">
                <MapPin size={13} /> Addis Ababa, Oromia, Hawassa, Gondar
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-amber-300">
                <ShieldCheck size={13} /> EPHI / WHO / Vital Strategies / Pure Earth
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-stone-300">
                <Gavel size={13} /> 90 ppm Paint Law &amp; 2026-2030 Roadmap
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto shrink-0">
            <button
              onClick={() => setIsArtworkModalOpen(true)}
              className="px-5 py-3 bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-600 hover:from-emerald-500 hover:to-amber-500 text-stone-950 font-mono font-black text-xs rounded-2xl shadow-xl border border-emerald-300 flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-105"
            >
              <Maximize2 size={15} />
              <span>Inspect Master Plate #94</span>
            </button>

            <a
              href="https://www.who.int/news-room/feature-stories/detail/making-the-invisible-visible--ethiopia-steps-up-action-to-prevent-lead-exposure"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 bg-stone-900/90 hover:bg-stone-800 text-amber-300 font-mono font-bold text-xs rounded-2xl border border-amber-500/40 flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <BookOpen size={15} />
              <span>Official WHO Case Study</span>
              <ExternalLink size={12} />
            </a>

            <div className="flex items-center justify-between px-4 py-2 bg-stone-950/80 rounded-xl border border-stone-800 text-[10px] font-mono">
              <span className="text-stone-400 truncate max-w-[150px]">0xETHIOPIA...PLATE_94</span>
              <button
                onClick={handleCopyHash}
                className="text-amber-400 hover:text-amber-300 flex items-center gap-1 ml-2 cursor-pointer"
                title="Copy cryptographic vault hash"
              >
                {copiedHash ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                <span>{copiedHash ? 'Copied' : 'Hash'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. CORE METRICS STRIP: ETHIOPIAN & AFRICAN EPIDEMIOLOGY */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-8 font-mono">
        <div className={`p-4 rounded-2xl border ${isLight ? 'bg-white border-stone-200 shadow-sm' : 'bg-stone-900 border-stone-800 shadow-md'}`}>
          <div className="flex items-center justify-between text-stone-500 text-[10px] font-bold uppercase mb-1">
            <span>Pediatric Prevalence</span>
            <AlertTriangle size={13} className="text-red-500" />
          </div>
          <div className="text-xl sm:text-2xl font-black text-red-600">35.8%</div>
          <div className="text-[10px] text-stone-500 mt-1">&ge; 5 &mu;g/dL (~18.2M kids)</div>
        </div>

        <div className={`p-4 rounded-2xl border ${isLight ? 'bg-white border-stone-200 shadow-sm' : 'bg-stone-900 border-stone-800 shadow-md'}`}>
          <div className="flex items-center justify-between text-stone-500 text-[10px] font-bold uppercase mb-1">
            <span>Annual Economic Cost</span>
            <DollarSign size={13} className="text-amber-500" />
          </div>
          <div className="text-xl sm:text-2xl font-black text-amber-600">$6.50B</div>
          <div className="text-[10px] text-stone-500 mt-1">4.1% of national GDP ($160B)</div>
        </div>

        <div className={`p-4 rounded-2xl border ${isLight ? 'bg-white border-stone-200 shadow-sm' : 'bg-stone-900 border-stone-800 shadow-md'}`}>
          <div className="flex items-center justify-between text-stone-500 text-[10px] font-bold uppercase mb-1">
            <span>Roadmap Target</span>
            <TrendingDown size={13} className="text-emerald-500" />
          </div>
          <div className="text-xl sm:text-2xl font-black text-emerald-600">-60%</div>
          <div className="text-[10px] text-stone-500 mt-1">Reduction by 2030 (EPHI)</div>
        </div>

        <div className={`p-4 rounded-2xl border ${isLight ? 'bg-white border-stone-200 shadow-sm' : 'bg-stone-900 border-stone-800 shadow-md'}`}>
          <div className="flex items-center justify-between text-stone-500 text-[10px] font-bold uppercase mb-1">
            <span>Legal Lead Paint Cap</span>
            <Gavel size={13} className="text-blue-500" />
          </div>
          <div className="text-xl sm:text-2xl font-black text-blue-600">90 ppm</div>
          <div className="text-[10px] text-stone-500 mt-1">Mandatory since 2018 (EPA)</div>
        </div>

        <div className={`p-4 rounded-2xl border ${isLight ? 'bg-white border-stone-200 shadow-sm' : 'bg-stone-900 border-stone-800 shadow-md'}`}>
          <div className="flex items-center justify-between text-stone-500 text-[10px] font-bold uppercase mb-1">
            <span>Paint Violation Rate</span>
            <BadgeAlert size={13} className="text-rose-500" />
          </div>
          <div className="text-xl sm:text-2xl font-black text-rose-600">76%</div>
          <div className="text-[10px] text-stone-500 mt-1">Solvent paints &gt; 90 ppm</div>
        </div>

        <div className={`p-4 rounded-2xl border ${isLight ? 'bg-white border-stone-200 shadow-sm' : 'bg-stone-900 border-stone-800 shadow-md'}`}>
          <div className="flex items-center justify-between text-stone-500 text-[10px] font-bold uppercase mb-1">
            <span>Africa Rank (Pediatric)</span>
            <Activity size={13} className="text-purple-500" />
          </div>
          <div className="text-xl sm:text-2xl font-black text-purple-600">#4 of 54</div>
          <div className="text-[10px] text-stone-500 mt-1">After Zambia, Nigeria, DRC</div>
        </div>
      </div>

      {/* 3. NAVIGATION SUB-TABS */}
      <div className="flex flex-wrap gap-2 border-b border-stone-200 dark:border-stone-800 pb-4 mb-6 font-mono text-xs">
        {[
          { id: 'overview', label: '1. National Audit Overview', icon: FileText },
          { id: 'exposure_pathways', label: '2. Five Primary Exposure Vectors', icon: AlertTriangle },
          { id: 'diagnostic_cascade', label: '3. Diagnostic Cascade & EPHI Labs', icon: Stethoscope },
          { id: 'african_context', label: '4. Africa Comparative Ranking', icon: Globe },
          { id: 'national_roadmap', label: '5. 2026-2030 Strategic Roadmap', icon: Award },
          { id: 'interactive_simulator', label: '6. Regional Intervention Simulator', icon: Sliders }
        ].map(tab => {
          const Icon = tab.icon;
          const isActive = activeSubTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all cursor-pointer font-bold ${
                isActive
                  ? 'bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-600 text-stone-950 shadow-md border border-amber-300'
                  : isLight
                    ? 'bg-white text-stone-700 hover:bg-stone-200 border border-stone-200'
                    : 'bg-stone-900 text-stone-300 hover:bg-stone-800 border border-stone-800'
              }`}
            >
              <Icon size={14} className={isActive ? 'text-stone-950' : 'text-emerald-500'} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* 4. TAB CONTENTS */}

      {/* TAB 1: OVERVIEW */}
      {activeSubTab === 'overview' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className={`lg:col-span-2 p-6 sm:p-8 rounded-3xl border space-y-5 ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'}`}>
              <div className="flex items-center justify-between border-b border-stone-200 dark:border-stone-800 pb-4">
                <div>
                  <h3 className="font-serif font-black text-xl sm:text-2xl text-emerald-600 dark:text-emerald-400">
                    The Invisible Crisis: Ethiopia's Epidemiological Baseline
                  </h3>
                  <p className="text-xs font-mono text-stone-500 mt-0.5">
                    Forensic Exposenomic Assessment • Synthesizing WHO, EPHI, PAN-Ethiopia &amp; Lancet Data
                  </p>
                </div>
                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-bold rounded-lg border border-emerald-500/20">
                  National Profile
                </span>
              </div>

              <div className="text-sm leading-relaxed space-y-4 font-sans text-stone-700 dark:text-stone-300">
                <p>
                  Until recently, lead poisoning in Ethiopia remained an <strong>"invisible hazard"</strong>—undetected because heavy metal neurotoxicity produces no acute fever or rash, yet insidiously chips away at prefrontal brain development, sensory-motor coordination, and renal-cardiovascular health. Children under age six absorb 4 to 5 times more ingested lead than adults, permanently degrading synaptic architecture during critical windows of neurogenesis.
                </p>
                <p>
                  Comprehensive epidemiological meta-analyses (including national blood surveys supported by Vital Strategies and the Ethiopian Public Health Institute) establish that approximately <strong>35.8% of Ethiopian children exceed the WHO 5 &mu;g/dL blood lead threshold</strong>. In dense urban sectors like the Akaki Kality industrial corridor in Addis Ababa, mean blood lead concentrations elevate to 8.2 &mu;g/dL, with occupational battery workers and nearby resident children frequently testing above 20 &mu;g/dL.
                </p>
                <p>
                  The economic consequence is devastating: applying recalibrated Lancet Planetary Health and New York University (Attina &amp; Trasande) health impact models, lead exposure costs Ethiopia <strong>$6.50 Billion annually</strong>—eroding 4.1% of national gross domestic product through lost pediatric cognitive potential, lifetime wage decrements, adult hypertension, and cardiovascular mortality.
                </p>
              </div>

              {/* Longitudinal Timeline Chart */}
              <div className="pt-4 border-t border-stone-200 dark:border-stone-800">
                <h4 className="text-xs font-mono font-black text-stone-500 uppercase tracking-wider mb-4 flex items-center justify-between">
                  <span>Longitudinal Trend &amp; 2030 Roadmap Projection (Pediatric BLL &gt; 5 &mu;g/dL)</span>
                  <span className="text-emerald-500 font-bold">2014 &rarr; 2030 Target</span>
                </h4>
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={timelineData}>
                      <CartesianGrid strokeDasharray="3 3" stroke={isLight ? '#E5E7EB' : '#292524'} />
                      <XAxis dataKey="year" stroke={isLight ? '#4B5563' : '#9CA3AF'} style={{ fontSize: '11px', fontFamily: 'monospace' }} />
                      <YAxis yAxisId="left" stroke={isLight ? '#DC2626' : '#EF4444'} style={{ fontSize: '11px', fontFamily: 'monospace' }} unit="%" domain={[0, 50]} />
                      <YAxis yAxisId="right" orientation="right" stroke={isLight ? '#059669' : '#10B981'} style={{ fontSize: '11px', fontFamily: 'monospace' }} unit=" µg/dL" domain={[0, 10]} />
                      <Tooltip contentStyle={{ backgroundColor: isLight ? '#FFFFFF' : '#1C1917', borderColor: '#44403C', borderRadius: '12px', fontSize: '12px', fontFamily: 'monospace' }} />
                      <Legend />
                      <Bar yAxisId="left" dataKey="pediatricBllPct" name="% Kids &ge; 5 µg/dL" fill="#EF4444" radius={[6, 6, 0, 0]} />
                      <Line yAxisId="right" type="monotone" dataKey="meanBll" name="Mean BLL (µg/dL)" stroke="#10B981" strokeWidth={3} dot={{ r: 4 }} />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
                <div className="text-[11px] font-mono text-stone-500 text-center mt-2">
                  Source: EPHI National Surveillance, Vital Strategies, PAN-Ethiopia &amp; WHO Strategic Roadmap 2026-2030.
                </div>
              </div>
            </div>

            {/* Quick Facts Sidebar */}
            <div className="space-y-4">
              <div className={`p-6 rounded-3xl border space-y-4 ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'}`}>
                <h4 className="font-serif font-black text-lg text-amber-600 dark:text-amber-400 flex items-center gap-2">
                  <AlertTriangle size={18} />
                  <span>The Four Pillars of the WHO Case</span>
                </h4>
                <ul className="space-y-3 text-xs font-mono text-stone-600 dark:text-stone-300">
                  <li className="p-3 rounded-xl bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700">
                    <strong className="text-emerald-500 block mb-0.5">1. Upstream Prevention:</strong>
                    Moving beyond treating poisoned patients to halting exposure at the factory, workshop, and marketplace before lead enters the blood.
                  </li>
                  <li className="p-3 rounded-xl bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700">
                    <strong className="text-amber-500 block mb-0.5">2. Point-of-Care Diagnostics:</strong>
                    Integrating capillary fingerstick analyzers and venous confirmation into primary healthcare clinics and district referral hospitals.
                  </li>
                  <li className="p-3 rounded-xl bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700">
                    <strong className="text-blue-500 block mb-0.5">3. Multi-Sectoral Governance:</strong>
                    Bridging Health, Environmental Protection Authority, Ministry of Mines, Ministry of Industry, and customs checkpoints.
                  </li>
                  <li className="p-3 rounded-xl bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700">
                    <strong className="text-purple-500 block mb-0.5">4. Evidence-Driven Enforcement:</strong>
                    Deploying portable XRF analyzers to police the 90 ppm paint limit and halt counterfeit spice adulteration.
                  </li>
                </ul>
              </div>

              <div className={`p-6 rounded-3xl border space-y-3 ${isLight ? 'bg-emerald-50/50 border-emerald-200' : 'bg-emerald-950/20 border-emerald-800/50'}`}>
                <h5 className="font-serif font-bold text-sm text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                  <Award size={16} />
                  <span>Cross-Navigation to Related Audits</span>
                </h5>
                <p className="text-xs text-stone-600 dark:text-stone-400">
                  Examine related forensic audits, the global macroeconomic cost model, and municipal investigations:
                </p>
                <div className="flex flex-col gap-2 pt-1 font-mono text-xs">
                  {onNavigateTab && (
                    <>
                      <button
                        onClick={() => onNavigateTab('jackson_lead_audit')}
                        className="p-2 rounded-xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 hover:border-emerald-500 text-left flex items-center justify-between transition-all cursor-pointer"
                      >
                        <span>⚖️ Jackson MS Lead Water Audit (Plate #43)</span>
                        <ChevronRight size={14} className="text-stone-400" />
                      </button>
                      <button
                        onClick={() => onNavigateTab('zambia_kabwe_lead_crisis')}
                        className="p-2 rounded-xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 hover:border-emerald-500 text-left flex items-center justify-between transition-all cursor-pointer"
                      >
                        <span>🇿🇲 Zambia Kabwe Lead Crisis (Plate #91)</span>
                        <ChevronRight size={14} className="text-stone-400" />
                      </button>
                      <button
                        onClick={() => onNavigateTab('global_lead_economic_impact_2026')}
                        className="p-2 rounded-xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 hover:border-emerald-500 text-left flex items-center justify-between transition-all cursor-pointer"
                      >
                        <span>💰 Global Lead Economic Impact ($14.8T, Plate #93)</span>
                        <ChevronRight size={14} className="text-stone-400" />
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: EXPOSURE PATHWAYS */}
      {activeSubTab === 'exposure_pathways' && (
        <div className="space-y-6">
          <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'}`}>
            <div className="border-b border-stone-200 dark:border-stone-800 pb-4 mb-6">
              <h3 className="font-serif font-black text-2xl text-amber-600 dark:text-amber-400">
                The Five Primary Exposure Vectors in Ethiopia
              </h3>
              <p className="text-xs font-mono text-stone-500 mt-1">
                Forensic Analysis of Industrial, Environmental, Dietary and Domestic Transmission Channels
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Vector 1 */}
              <div className="p-5 rounded-2xl border border-red-500/30 bg-red-500/5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 bg-red-600 text-white font-mono text-[10px] font-bold rounded">
                    38% Burden Share
                  </span>
                  <Flame size={18} className="text-red-500" />
                </div>
                <h4 className="font-serif font-bold text-lg text-red-600 dark:text-red-400">
                  1. Informal ULAB Battery Smelting
                </h4>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
                  Used lead-acid batteries (ULAB) from automotive transport, telecom backup towers, and off-grid solar are broken manually with axes in informal settlements (Kality, Oromia corridor). Open-air smelting releases toxic lead oxide plumes, while battery acid is dumped into open storm drains, contaminating nearby residential soil up to <strong>14,000 ppm</strong> (vs. WHO residential guidance of 400 ppm).
                </p>
                <div className="text-[11px] font-mono text-stone-500 border-t border-red-500/20 pt-2">
                  <strong>Intervention:</strong> Formalization of industrial recycling, automated battery breaking plants, and mandatory licensing.
                </div>
              </div>

              {/* Vector 2 */}
              <div className="p-5 rounded-2xl border border-amber-500/30 bg-amber-500/5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 bg-amber-600 text-white font-mono text-[10px] font-bold rounded">
                    24% Burden Share
                  </span>
                  <Building2 size={18} className="text-amber-500" />
                </div>
                <h4 className="font-serif font-bold text-lg text-amber-600 dark:text-amber-400">
                  2. Architectural &amp; School Paint
                </h4>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
                  Despite Ethiopia adopting a legally binding 90 ppm limit in 2018, studies by PAN-Ethiopia and IPEN confirmed that <strong>76% of solvent-based enamel paints</strong> on store shelves continue to exceed the cap, with some samples containing over 10,000 ppm lead chromate. Flaking paint and contaminated dust on school furniture and cribs remain a chronic source of pediatric ingestion.
                </p>
                <div className="text-[11px] font-mono text-stone-500 border-t border-amber-500/20 pt-2">
                  <strong>Intervention:</strong> Routine market surveillance using handheld XRF analyzers and criminal penalties for non-compliant paint manufacturers.
                </div>
              </div>

              {/* Vector 3 */}
              <div className="p-5 rounded-2xl border border-yellow-500/30 bg-yellow-500/5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 bg-yellow-600 text-stone-950 font-mono text-[10px] font-bold rounded">
                    18% Burden Share
                  </span>
                  <AlertTriangle size={18} className="text-yellow-600 dark:text-yellow-400" />
                </div>
                <h4 className="font-serif font-bold text-lg text-yellow-600 dark:text-yellow-400">
                  3. Spices, Food &amp; Earthen Cookware
                </h4>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
                  Lead chromate ($PbCrO_4$) is intermittently added to bulk turmeric, curry powders, and blended *berbere* to enhance vibrant yellow-red color and increase sell-weight. Concurrently, traditional Ethiopian earthenware (clay coffee pots /*jebena*, ceramic *mitad* baking griddles) glazed with low-temperature lead silicates leach bioavailable heavy metals into hot food and beverages.
                </p>
                <div className="text-[11px] font-mono text-stone-500 border-t border-yellow-500/20 pt-2">
                  <strong>Intervention:</strong> Strict food safety testing at Mercato and wholesale markets, coupled with lead-free ceramic certification for artisans.
                </div>
              </div>

              {/* Vector 4 */}
              <div className="p-5 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 bg-emerald-600 text-white font-mono text-[10px] font-bold rounded">
                    12% Burden Share
                  </span>
                  <Droplets size={18} className="text-emerald-500" />
                </div>
                <h4 className="font-serif font-bold text-lg text-emerald-600 dark:text-emerald-400">
                  4. Akaki Industrial River Watershed
                </h4>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
                  The Little and Great Akaki Rivers drain the industrial heartland of Addis Ababa, receiving untreated effluents from tanneries, metal finishing plants, and battery shops. Over 2 million residents consume vegetables (lettuce, cabbage, Swiss chard) cultivated via riverbed irrigation, where plant bioaccumulation drives chronic low-dose heavy metal intake across the population.
                </p>
                <div className="text-[11px] font-mono text-stone-500 border-t border-emerald-500/20 pt-2">
                  <strong>Intervention:</strong> Industrial effluent pre-treatment plants, phytoremediation wetland buffers, and strict monitoring of agricultural irrigation.
                </div>
              </div>

              {/* Vector 5 */}
              <div className="p-5 rounded-2xl border border-stone-500/30 bg-stone-500/5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 bg-stone-600 text-white font-mono text-[10px] font-bold rounded">
                    8% Burden Share
                  </span>
                  <Users size={18} className="text-stone-400" />
                </div>
                <h4 className="font-serif font-bold text-lg text-stone-700 dark:text-stone-300">
                  5. Garages &amp; Occupational Take-Home
                </h4>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
                  Informal automotive mechanics, radiator repairmen, and scrap collectors in Addis Ababa work with leaded solder and scrap batteries without personal protective equipment (PPE). Workers unknowingly transport toxic lead dust home on their clothing, shoes, and skin, exposing infant children through direct physical contact and household floor contamination.
                </p>
                <div className="text-[11px] font-mono text-stone-500 border-t border-stone-500/20 pt-2">
                  <strong>Intervention:</strong> Occupational safety guidelines, workplace changing facilities, and community health worker educational outreach.
                </div>
              </div>

              {/* Pie Breakdown */}
              <div className={`p-5 rounded-2xl border flex flex-col justify-between ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-900/50 border-stone-800'}`}>
                <div>
                  <h4 className="font-serif font-bold text-base text-stone-800 dark:text-stone-200 mb-2">
                    Relative Source Attribution
                  </h4>
                  <div className="h-44 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie data={exposureSourcesData} dataKey="share" nameKey="name" cx="50%" cy="50%" outerRadius={55} innerRadius={28} paddingAngle={4}>
                          {exposureSourcesData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                <div className="text-[10px] font-mono text-stone-500 text-center">
                  Total Annual Heavy Metal Burden: ~37,300 Metric Tonnes Pb equivalent
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: DIAGNOSTIC CASCADE & EPHI LABS */}
      {activeSubTab === 'diagnostic_cascade' && (
        <div className="space-y-6">
          <div className={`p-6 sm:p-8 rounded-3xl border space-y-6 ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'}`}>
            <div className="border-b border-stone-200 dark:border-stone-800 pb-4">
              <h3 className="font-serif font-black text-2xl text-emerald-600 dark:text-emerald-400">
                The Diagnostic Cascade: Building Ethiopia's Testing Backbone
              </h3>
              <p className="text-xs font-mono text-stone-500 mt-1">
                From Fingerstick Point-of-Care Capillary Screening to ICP-MS Spectrometry and XRF Environmental Auditing
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Tier 1 */}
              <div className="p-5 rounded-2xl border border-stone-200 dark:border-stone-800 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                  <Stethoscope size={20} />
                </div>
                <h4 className="font-serif font-bold text-lg">Tier 1: Point-of-Care Capillary Screening</h4>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
                  Deployed in primary health centers and maternal-child health clinics. Uses portable electrochemistry analyzers (e.g., LeadCare II) providing blood lead readings in under 3 minutes from a single 50 &mu;L capillary fingerstick. Enables immediate counseling, nutritional intervention (calcium/iron supplementation), and home source identification.
                </p>
                <div className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                  Capacity: Rapid screening at &lt; $6 per test
                </div>
              </div>

              {/* Tier 2 */}
              <div className="p-5 rounded-2xl border border-stone-200 dark:border-stone-800 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500">
                  <Microscope size={20} />
                </div>
                <h4 className="font-serif font-bold text-lg">Tier 2: EPHI National Reference Laboratory</h4>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
                  The Ethiopian Public Health Institute (EPHI) operates Inductively Coupled Plasma Mass Spectrometry (ICP-MS) and Graphite Furnace Atomic Absorption Spectrometry (GFAAS). Confirms venous blood lead levels for patients testing above 10 &mu;g/dL, conducts isotopic fingerprinting ($^{206}Pb/^{207}Pb$ ratios), and validates environmental media.
                </p>
                <div className="text-[11px] font-mono text-amber-600 dark:text-amber-400 font-bold">
                  Capacity: Ultra-trace detection down to 0.01 &mu;g/dL
                </div>
              </div>

              {/* Tier 3 */}
              <div className="p-5 rounded-2xl border border-stone-200 dark:border-stone-800 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                  <Search size={20} />
                </div>
                <h4 className="font-serif font-bold text-lg">Tier 3: Handheld XRF Environmental Enforcement</h4>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
                  The Environmental Protection Authority (EPA) and municipal inspectors utilize portable X-Ray Fluorescence (XRF) spectrometry devices. Inspectors can non-destructively quantify lead concentrations in paint cans, school desks, spice powders, and soil within 30 seconds on site, enforcing the 90 ppm limit and identifying illicit battery smelting hotspots.
                </p>
                <div className="text-[11px] font-mono text-blue-600 dark:text-blue-400 font-bold">
                  Capacity: Real-time non-destructive field audits
                </div>
              </div>
            </div>

            {/* Clinical Management Protocol */}
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-800/40 border-stone-700'}`}>
              <h4 className="font-serif font-bold text-base mb-3 flex items-center gap-2 text-stone-800 dark:text-stone-200">
                <Activity size={16} className="text-emerald-500" />
                <span>Ethiopia National Clinical Management Protocol for Childhood Lead</span>
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 font-mono text-xs">
                <div className="p-3 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800">
                  <span className="text-emerald-500 font-bold block mb-1">&lt; 3.5 &mu;g/dL (Normal)</span>
                  <p className="text-[11px] text-stone-500 font-sans">
                    Routine developmental monitoring, nutritional education, repeat capillary screen at 12 and 24 months.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800">
                  <span className="text-amber-500 font-bold block mb-1">3.5 – 9.9 &mu;g/dL (Elevated)</span>
                  <p className="text-[11px] text-stone-500 font-sans">
                    Environmental investigation, identify flaking paint/spices/batteries, iron &amp; calcium therapy, retest in 3 months.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800">
                  <span className="text-orange-500 font-bold block mb-1">10.0 – 44.9 &mu;g/dL (High)</span>
                  <p className="text-[11px] text-stone-500 font-sans">
                    Confirm via venous sample at EPHI lab, immediate home remediation, neurodevelopmental assessment, monthly tracking.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800">
                  <span className="text-red-500 font-bold block mb-1">&ge; 45.0 &mu;g/dL (Emergency)</span>
                  <p className="text-[11px] text-stone-500 font-sans">
                    Hospital admission, inpatient oral Succimer (DMSA) or IV $CaNa_2EDTA$ chelation therapy, eliminate lead source prior to discharge.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: AFRICAN COMPARATIVE RANKING */}
      {activeSubTab === 'african_context' && (
        <div className="space-y-6">
          <div className={`p-6 sm:p-8 rounded-3xl border space-y-6 ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'}`}>
            <div className="border-b border-stone-200 dark:border-stone-800 pb-4">
              <h3 className="font-serif font-black text-2xl text-purple-600 dark:text-purple-400">
                Africa Continent Lead Burden: Relative Country Ranking
              </h3>
              <p className="text-xs font-mono text-stone-500 mt-1">
                Comparative Epidemiological Prevalence, Macroeconomic GDP Drag, and Primary Toxicological Drivers
              </p>
            </div>

            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={africanComparisonData} layout="vertical" margin={{ left: 40, right: 30, top: 10, bottom: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke={isLight ? '#E5E7EB' : '#292524'} />
                  <XAxis type="number" stroke={isLight ? '#4B5563' : '#9CA3AF'} style={{ fontSize: '11px', fontFamily: 'monospace' }} unit="%" domain={[0, 100]} />
                  <YAxis type="category" dataKey="country" stroke={isLight ? '#4B5563' : '#9CA3AF'} style={{ fontSize: '11px', fontFamily: 'monospace' }} width={140} />
                  <Tooltip contentStyle={{ backgroundColor: isLight ? '#FFFFFF' : '#1C1917', borderColor: '#44403C', borderRadius: '12px', fontSize: '12px', fontFamily: 'monospace' }} />
                  <Legend />
                  <Bar dataKey="pediatricPct" name="% Children &ge; 5 µg/dL" fill="#9333EA" radius={[0, 6, 6, 0]} />
                  <Bar dataKey="gdpLossPct" name="% GDP Economic Drag" fill="#F59E0B" radius={[0, 6, 6, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left font-mono text-xs border border-stone-200 dark:border-stone-800 rounded-xl overflow-hidden">
                <thead className="bg-stone-100 dark:bg-stone-800/80 text-stone-600 dark:text-stone-300">
                  <tr>
                    <th className="p-3">Country / Hotspot</th>
                    <th className="p-3">% Kids &ge; 5 &mu;g/dL</th>
                    <th className="p-3">% GDP Drag</th>
                    <th className="p-3">Annual Cost ($B)</th>
                    <th className="p-3">Primary Exposure Epicenter</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 dark:divide-stone-800">
                  {africanComparisonData.map((row, idx) => (
                    <tr key={idx} className={row.country.includes('Ethiopia') ? 'bg-emerald-500/10 font-bold' : ''}>
                      <td className="p-3 text-stone-900 dark:text-stone-100 flex items-center gap-1.5">
                        {row.country.includes('Ethiopia') && <span className="text-emerald-500">🇪🇹</span>}
                        {row.country}
                      </td>
                      <td className="p-3 text-red-600 dark:text-red-400 font-bold">{row.pediatricPct}%</td>
                      <td className="p-3 text-amber-600 dark:text-amber-400">{row.gdpLossPct}%</td>
                      <td className="p-3 font-bold">${row.annualCostBillion}B</td>
                      <td className="p-3 text-stone-500 text-[11px] font-sans">{row.primarySource}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 rounded-2xl bg-stone-50 dark:bg-stone-800/40 border border-stone-200 dark:border-stone-700 text-xs font-sans text-stone-600 dark:text-stone-300 leading-relaxed">
              <strong>Continental Synthesis:</strong> Sub-Saharan Africa bears the highest per capita burden of heavy metal toxicity on Earth. In hotspots like Kabwe, Zambia, colonial-era mine tailings have poisoned generations (&gt;95% of children elevated). In Nigeria, artisanal gold extraction in Zamfara sparked acute encephalopathy fatalities. Ethiopia sits in a crucial middle zone: without catastrophic singular mining tailings, yet with pervasive urban-periurban exposure across informal battery breaking, contaminated spices, and non-compliant paints affecting <strong>18 million children</strong>. Ethiopia’s 2026–2030 Roadmap is the continent's most structured multi-sectoral initiative to reverse this trajectory.
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: 2026-2030 STRATEGIC ROADMAP */}
      {activeSubTab === 'national_roadmap' && (
        <div className="space-y-6">
          <div className={`p-6 sm:p-8 rounded-3xl border space-y-6 ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'}`}>
            <div className="border-b border-stone-200 dark:border-stone-800 pb-4">
              <h3 className="font-serif font-black text-2xl text-emerald-600 dark:text-emerald-400">
                National Roadmap for Lead Poisoning Prevention (2026–2030)
              </h3>
              <p className="text-xs font-mono text-stone-500 mt-1">
                Ethiopia's Five-Year Operational Strategy to Achieve a 60% Reduction in Childhood Lead Exposure
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Strategic Goal 1 */}
              <div className="p-5 rounded-2xl border border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-800/30 space-y-2">
                <span className="px-2.5 py-0.5 bg-emerald-600 text-white font-mono text-[10px] font-bold rounded">
                  Goal 1: Regulatory Enforcement
                </span>
                <h4 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100">
                  Strict Police of 90 ppm Paint &amp; Import Screening
                </h4>
                <p className="text-xs text-stone-600 dark:text-stone-300 font-sans leading-relaxed">
                  Empower the Environmental Protection Authority (EPA) with mandatory border point-of-entry XRF testing to halt imports of lead pigments and non-compliant paints. Impose license revocations and corporate fines on domestic paint manufacturers exceeding the 90 ppm standard.
                </p>
              </div>

              {/* Strategic Goal 2 */}
              <div className="p-5 rounded-2xl border border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-800/30 space-y-2">
                <span className="px-2.5 py-0.5 bg-amber-600 text-white font-mono text-[10px] font-bold rounded">
                  Goal 2: ULAB Battery Formalization
                </span>
                <h4 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100">
                  Shut Down Backyard Smelters &amp; Create Formal Centers
                </h4>
                <p className="text-xs text-stone-600 dark:text-stone-300 font-sans leading-relaxed">
                  Establish an Extended Producer Responsibility (EPR) framework requiring automotive battery importers to maintain closed-loop return systems. License two environmentally sound industrial recycling facilities with acid neutralization and baghouse particulate filtration.
                </p>
              </div>

              {/* Strategic Goal 3 */}
              <div className="p-5 rounded-2xl border border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-800/30 space-y-2">
                <span className="px-2.5 py-0.5 bg-blue-600 text-white font-mono text-[10px] font-bold rounded">
                  Goal 3: National Blood Lead Surveillance
                </span>
                <h4 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100">
                  Universal Screening for Children at 12 &amp; 24 Months
                </h4>
                <p className="text-xs text-stone-600 dark:text-stone-300 font-sans leading-relaxed">
                  Integrate capillary fingerstick testing into routine immunization checkups across 500 health centers in Addis Ababa, Oromia, and Sidama by 2028. Upload anonymized geospatial blood lead data into the National Health Information System (DHIS2).
                </p>
              </div>

              {/* Strategic Goal 4 */}
              <div className="p-5 rounded-2xl border border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-800/30 space-y-2">
                <span className="px-2.5 py-0.5 bg-purple-600 text-white font-mono text-[10px] font-bold rounded">
                  Goal 4: Food &amp; Cookware Safety
                </span>
                <h4 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100">
                  Spice Adulteration Raids &amp; Lead-Free Pottery
                </h4>
                <p className="text-xs text-stone-600 dark:text-stone-300 font-sans leading-relaxed">
                  The Ethiopian Food and Drug Authority (EFDA) will execute randomized spectral assays for lead chromate across bulk spice distributors. Subsidize lead-free non-toxic glazes for traditional ceramic pottery guilds in Amhara and southern regions.
                </p>
              </div>
            </div>

            {/* Target Metric Timeline */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-950 via-stone-900 to-amber-950 text-white border border-emerald-500/40">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-emerald-400 font-bold uppercase">Target Milestone 2030</span>
                  <h4 className="font-serif font-black text-2xl">From 35.8% to 14.3% Pediatric Prevalence</h4>
                  <p className="text-xs text-stone-300 font-sans">
                    Protecting over <strong>10.9 million children</strong> from irreversible neurological impairment and recovering <strong>$3.9 Billion</strong> in annual human capital.
                  </p>
                </div>
                <div className="px-6 py-4 rounded-xl bg-stone-900/90 border border-emerald-400/50 text-center shrink-0">
                  <div className="text-3xl font-mono font-black text-amber-400">10,900,000</div>
                  <div className="text-[10px] font-mono text-stone-400 mt-0.5">Children Protected</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 6: INTERACTIVE REGIONAL SIMULATOR */}
      {activeSubTab === 'interactive_simulator' && (
        <div className="space-y-6">
          <div className={`p-6 sm:p-8 rounded-3xl border space-y-6 ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'}`}>
            <div className="border-b border-stone-200 dark:border-stone-800 pb-4">
              <h3 className="font-serif font-black text-2xl text-amber-600 dark:text-amber-400">
                Ethiopia Regional Intervention &amp; Economic Savings Simulator
              </h3>
              <p className="text-xs font-mono text-stone-500 mt-1">
                Model the Epidemiological and Economic Impact of Testing, ULAB Formalization, and Paint Abatement across Regions
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Controls Column */}
              <div className="space-y-5 lg:col-span-1 p-5 rounded-2xl bg-stone-50 dark:bg-stone-800/40 border border-stone-200 dark:border-stone-700">
                <div>
                  <label className="text-xs font-mono font-bold text-stone-700 dark:text-stone-300 block mb-2">
                    Select Target Administrative Region:
                  </label>
                  <select
                    value={selectedRegion}
                    onChange={(e) => setSelectedRegion(e.target.value as any)}
                    className="w-full p-2.5 rounded-xl border border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-900 text-xs font-mono"
                  >
                    <option value="addis_ababa">Addis Ababa &amp; Akaki Corridor (42.6% Baseline)</option>
                    <option value="oromia">Oromia Regional State (36.4% Baseline)</option>
                    <option value="amhara">Amhara Regional State (33.8% Baseline)</option>
                    <option value="sidama">Sidama / Hawassa (31.2% Baseline)</option>
                    <option value="dire_dawa">Dire Dawa Chartered City (39.5% Baseline)</option>
                  </select>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-1">
                    <span className="font-bold">Capillary Screening Coverage:</span>
                    <span className="text-emerald-500 font-bold">{screeningCoveragePercent}%</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    step="5"
                    value={screeningCoveragePercent}
                    onChange={(e) => setScreeningCoveragePercent(Number(e.target.value))}
                    className="w-full accent-emerald-500 cursor-pointer"
                  />
                  <span className="text-[10px] text-stone-500 font-sans">Primary health clinic fingerstick testing capacity</span>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-1">
                    <span className="font-bold">ULAB Battery Formalization:</span>
                    <span className="text-amber-500 font-bold">{batteryFormalizationPercent}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="5"
                    value={batteryFormalizationPercent}
                    onChange={(e) => setBatteryFormalizationPercent(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                  <span className="text-[10px] text-stone-500 font-sans">Shutting backyard smelters &amp; formal EPR return plants</span>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-1">
                    <span className="font-bold">Paint Enforcement Rate:</span>
                    <span className="text-blue-500 font-bold">{paintAbatementRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="5"
                    value={paintAbatementRate}
                    onChange={(e) => setPaintAbatementRate(Number(e.target.value))}
                    className="w-full accent-blue-500 cursor-pointer"
                  />
                  <span className="text-[10px] text-stone-500 font-sans">Market surveillance with handheld XRF enforcing 90 ppm</span>
                </div>

                <div className="p-3 rounded-xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-[11px] font-mono text-stone-500">
                  <strong>Regional Hotspots:</strong> {currentProfile.majorHotspots}
                </div>
              </div>

              {/* Simulation Output Column */}
              <div className="lg:col-span-2 space-y-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono">
                  <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-center">
                    <div className="text-[10px] text-stone-500 uppercase font-bold">Baseline Poisoned</div>
                    <div className="text-xl sm:text-2xl font-black text-red-500">
                      {simResults.baselinePoisoned.toLocaleString()}
                    </div>
                    <div className="text-[10px] text-stone-400 mt-1">{currentProfile.baselineElevatedPct}% of children</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center">
                    <div className="text-[10px] text-stone-500 uppercase font-bold">Protected Children</div>
                    <div className="text-xl sm:text-2xl font-black text-emerald-500">
                      {simResults.childrenProtected.toLocaleString()}
                    </div>
                    <div className="text-[10px] text-stone-400 mt-1">-{simResults.projectedReductionPct}% reduction</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-center col-span-2 sm:col-span-1">
                    <div className="text-[10px] text-stone-500 uppercase font-bold">Post-Intervention</div>
                    <div className="text-xl sm:text-2xl font-black text-amber-500">
                      {simResults.postInterventionPct}%
                    </div>
                    <div className="text-[10px] text-stone-400 mt-1">From {currentProfile.baselineElevatedPct}%</div>
                  </div>
                </div>

                {/* Economic & Cognitive Capital Box */}
                <div className="p-6 rounded-3xl bg-gradient-to-br from-stone-900 via-emerald-950 to-stone-900 text-white border border-emerald-500/40 space-y-4">
                  <h4 className="font-serif font-bold text-lg text-emerald-400 flex items-center gap-2">
                    <Brain size={20} />
                    <span>Cognitive Capital &amp; Macroeconomic Preservation</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono">
                    <div className="p-4 rounded-xl bg-stone-950/70 border border-emerald-500/30">
                      <div className="text-xs text-stone-400">Total Pediatric IQ Preserved:</div>
                      <div className="text-2xl sm:text-3xl font-black text-emerald-300 mt-1">
                        {simResults.totalIqPointsPreserved} pts
                      </div>
                      <div className="text-[10px] text-stone-500 mt-0.5">~3.6 IQ points saved per protected child</div>
                    </div>

                    <div className="p-4 rounded-xl bg-stone-950/70 border border-amber-500/30">
                      <div className="text-xs text-stone-400">Annual Regional Economic Gain:</div>
                      <div className="text-2xl sm:text-3xl font-black text-amber-300 mt-1">
                        ${simResults.annualEconomicSavingsMillions}M / yr
                      </div>
                      <div className="text-[10px] text-stone-500 mt-0.5">Lifetime wage capacity &amp; healthcare costs saved</div>
                    </div>
                  </div>
                  <p className="text-xs text-stone-300 font-sans leading-relaxed">
                    By scaling capillary point-of-care screening to <strong>{screeningCoveragePercent}%</strong> and formalizing <strong>{batteryFormalizationPercent}%</strong> of informal battery recycling in {currentProfile.name}, the regional childhood poisoning rate drops from <strong>{currentProfile.baselineElevatedPct}%</strong> to <strong>{simResults.postInterventionPct}%</strong>, generating millions of dollars in preserved human productivity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. ARTWORK LIGHTBOX MODAL */}
      {isArtworkModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="relative max-w-5xl w-full bg-stone-900 rounded-3xl border border-emerald-500/40 p-6 space-y-4 text-stone-100 shadow-2xl my-8">
            <div className="flex items-center justify-between border-b border-stone-800 pb-3">
              <div>
                <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
                  Sovereign Forensic Audit Infographic Asset • Plate #94
                </span>
                <h3 className="font-serif font-black text-xl text-white">
                  Ethiopia Lead Audit &amp; Response: Making the Invisible Visible
                </h3>
              </div>
              <button
                onClick={() => setIsArtworkModalOpen(false)}
                className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-400 hover:text-white transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="rounded-2xl overflow-hidden border border-stone-800 bg-stone-950 flex items-center justify-center">
              <img
                src={ethiopiaAuditPlateImg}
                alt="Ethiopia Lead Audit & Response (Plate #94)"
                className="w-full h-auto max-h-[70vh] object-contain"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-stone-400 border-t border-stone-800 pt-3">
              <div className="flex items-center gap-2">
                <span>Cryptographic Provenance:</span>
                <span className="text-amber-400 font-bold">{PROVENANCE_HASH}</span>
              </div>
              <button
                onClick={handleCopyHash}
                className="px-3 py-1.5 rounded-lg bg-emerald-600 text-stone-950 font-bold hover:bg-emerald-500 flex items-center gap-1 cursor-pointer transition-colors"
              >
                {copiedHash ? <Check size={13} /> : <Copy size={13} />}
                <span>{copiedHash ? 'Hash Copied' : 'Copy Hash'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
export default EthiopiaLeadAudit;

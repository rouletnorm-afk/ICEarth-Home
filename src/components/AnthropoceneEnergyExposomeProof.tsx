import React, { useState } from 'react';
import {
  Flame,
  Globe,
  Brain,
  ExternalLink,
  BookOpen,
  Copy,
  Check,
  Maximize2,
  TrendingUp,
  AlertTriangle,
  Scale,
  Award,
  Crown,
  Activity,
  Layers,
  History,
  Clock,
  ArrowRight,
  Zap,
  Sparkles,
  RefreshCw,
  HeartPulse,
  TrendingDown,
  Percent,
  Users,
  FileText,
  Shield,
  ShieldAlert,
  Dna,
  Pickaxe,
  Building,
  Radio,
  Image as ImageIcon
} from 'lucide-react';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

import plate99InfographicSvg from '../assets/images/anthropocene_energy_exposome_infographic_plate99.svg';

interface AnthropoceneEnergyExposomeProofProps {
  onNavigateTab?: (tab: string) => void;
  siteTheme?: 'light' | 'dark';
}

// 1. Long-Run Anthropocene Energy & Metallurgical Perturbation Timeline
const ANTHROPOCENE_ENERGY_TIMELINE = [
  { epoch: '6500 BCE', eraLabel: 'Anatolia', primaryEnergy: 'Biomass/Charcoal', leadSmeltingIndex: 5, coalUsageIndex: 0, globalConflictRate: 2, heightIndex: 100, note: 'Earliest known lead smelting; low melting point 327°C' },
  { epoch: '2500 BCE', eraLabel: 'Bronze Age', primaryEnergy: 'Biomass & Charcoal', leadSmeltingIndex: 18, coalUsageIndex: 2, globalConflictRate: 5, heightIndex: 98, note: 'China earliest metallurgical coal in north; expanding silver/lead cupellation' },
  { epoch: '300 BCE', eraLabel: 'Theophrastus', primaryEnergy: 'Wood & Early Coal', leadSmeltingIndex: 32, coalUsageIndex: 12, globalConflictRate: 8, heightIndex: 97, note: 'On Stones (c. 371 BC): first European coal record' },
  { epoch: '150 CE', eraLabel: 'Roman Britain', primaryEnergy: 'British Coal & Sapa', leadSmeltingIndex: 85, coalUsageIndex: 38, globalConflictRate: 15, heightIndex: 93, note: 'Romans exploiting all major English/Welsh coalfields; sapa syrup rations' },
  { epoch: '1400 CE', eraLabel: 'Late Medieval', primaryEnergy: 'Peat, Wood, Coal', leadSmeltingIndex: 45, coalUsageIndex: 25, globalConflictRate: 12, heightIndex: 95, note: 'European metallurgy restarts; surface coal gathering' },
  { epoch: '1750 CE', eraLabel: 'Industrial Dawn', primaryEnergy: 'Coal & Steam', leadSmeltingIndex: 95, coalUsageIndex: 70, globalConflictRate: 22, heightIndex: 91, note: 'Coke smelting, steam engines, early urban smoke' },
  { epoch: '1850 CE', eraLabel: 'Victorian Coal', primaryEnergy: 'Intense Bituminous', leadSmeltingIndex: 140, coalUsageIndex: 160, globalConflictRate: 28, heightIndex: 86, note: 'London smog inversions [Hanlon]; extreme urban pediatric mortality' },
  { epoch: '1901 CE', eraLabel: 'WWI Cohort Birth', primaryEnergy: 'Peak Urban Coal', leadSmeltingIndex: 185, coalUsageIndex: 220, globalConflictRate: 35, heightIndex: 82, note: 'Bailey et al. (2018): childhood coal exposure stunts recruits by up to 1 inch' },
  { epoch: '1918 CE', eraLabel: 'Flu Pandemic', primaryEnergy: 'Coal Power Plants', leadSmeltingIndex: 195, coalUsageIndex: 245, globalConflictRate: 85, heightIndex: 82, note: 'Clay et al. (2018): coal air pollution severely scales 1918 flu mortality' },
  { epoch: '1921 CE', eraLabel: 'TEL Leaded Gas', primaryEnergy: 'Coal + Petroleum', leadSmeltingIndex: 280, coalUsageIndex: 230, globalConflictRate: 90, heightIndex: 85, note: 'Midgley TEL patent; atmospheric lead aerosol distributed globally' },
  { epoch: '1970 CE', eraLabel: 'Clean Air Act', primaryEnergy: 'Oil, Gas, Coal', leadSmeltingIndex: 150, coalUsageIndex: 180, globalConflictRate: 40, heightIndex: 95, note: 'US Clean Air Act & leaded gas phaseout trigger health & crime drop' },
  { epoch: '2026 CE', eraLabel: 'Modern Disparity', primaryEnergy: 'Fossil + Renewables', leadSmeltingIndex: 110, coalUsageIndex: 165, globalConflictRate: 48, heightIndex: 97, note: '1 in 3 developing children lead-poisoned; compounding climate risk' }
];

// 2. Bailey et al. (2018) Coal Intensity vs WWI British Army Height Deficit
const BAILEY_HEIGHT_DATA = [
  { quartile: 'Least Coal-Intensive Districts', coalUsagePerEmployee: 1.2, heightDeficitInches: 0.0, finalHeightInches: 66.8, relativeGrowthLossPct: 0, description: 'Rural agricultural counties; baseline growth' },
  { quartile: 'Moderate Coal Districts', coalUsagePerEmployee: 4.8, heightDeficitInches: 0.28, finalHeightInches: 66.52, relativeGrowthLossPct: 10.2, description: 'Light manufacturing; moderate particulate load' },
  { quartile: 'High Coal Districts (OLS)', coalUsagePerEmployee: 12.5, heightDeficitInches: 0.56, finalHeightInches: 66.24, relativeGrowthLossPct: 20.4, description: 'Standard OLS estimate: 0.56 inches lost from childhood air pollution' },
  { quartile: 'Most Coal-Intensive Districts (IV 1851)', coalUsagePerEmployee: 24.0, heightDeficitInches: 1.02, finalHeightInches: 65.78, relativeGrowthLossPct: 37.1, description: 'Instrumental Variable estimate using 1851 coal: ~1 full inch lost (37% of secular gain)' }
];

// 3. Hanlon (2018) & Clay et al. (2018) Infection Comorbidity Multipliers
const INFECTION_COMORBIDITY_DATA = [
  { condition: 'Baseline Air (Low Pollution)', mortalityMultiplier: 1.0, baselineDeathsPer10k: 14, excessRiskPct: 0, source: 'Control' },
  { condition: 'Acute Coal Smoke Inversion Alone', mortalityMultiplier: 1.85, baselineDeathsPer10k: 26, excessRiskPct: 85, source: 'Hanlon (2018)' },
  { condition: 'Coal Smoke + Measles Co-occurrence', mortalityMultiplier: 2.95, baselineDeathsPer10k: 41, excessRiskPct: 195, source: 'Hanlon (2018)' },
  { condition: 'Coal Smoke + Tuberculosis Synergy', mortalityMultiplier: 3.40, baselineDeathsPer10k: 48, excessRiskPct: 240, source: 'Hanlon (2018)' },
  { condition: 'Coal-Fired Plant Plume + 1918 Influenza', mortalityMultiplier: 3.85, baselineDeathsPer10k: 54, excessRiskPct: 285, source: 'Clay et al. (2018)' },
  { condition: 'Compounding Lead + Coal + Viral Syndemic', mortalityMultiplier: 4.60, baselineDeathsPer10k: 64, excessRiskPct: 360, source: 'ICEarth Composite' }
];

export const AnthropoceneEnergyExposomeProof: React.FC<AnthropoceneEnergyExposomeProofProps> = ({
  onNavigateTab,
  siteTheme = 'dark'
}) => {
  const [copiedHash, setCopiedHash] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Counterfactual Simulator State
  const [simCoalIntensity, setSimCoalIntensity] = useState<number>(65); // 0 to 100
  const [simLeadAdditive, setSimLeadAdditive] = useState<boolean>(true);
  const [simRegulationEra, setSimRegulationEra] = useState<'pre1970' | 'clean_air_act' | 'developing_unregulated'>('pre1970');

  // Compute Simulated Impacts
  const calculatedHeightDeficit = Number(
    ((simCoalIntensity / 100) * 0.95 + (simLeadAdditive ? 0.35 : 0) * (simRegulationEra === 'clean_air_act' ? 0.25 : simRegulationEra === 'developing_unregulated' ? 1.2 : 1.0)).toFixed(2)
  );

  const calculatedViralRisk = Number(
    (1.0 + (simCoalIntensity / 100) * 2.2 + (simLeadAdditive ? 1.4 : 0) * (simRegulationEra === 'clean_air_act' ? 0.3 : simRegulationEra === 'developing_unregulated' ? 1.15 : 1.0)).toFixed(2)
  );

  const calculatedConflictChaosIndex = Math.round(
    (simCoalIntensity * 1.8 + (simLeadAdditive ? 65 : 10)) * (simRegulationEra === 'clean_air_act' ? 0.4 : simRegulationEra === 'developing_unregulated' ? 1.25 : 1.0)
  );

  const vaultHash = '0xANTHROPOCENE_ENERGY_EXPOSOME_ROULETS_LAW_PLATE_99';

  const copyHashToClipboard = () => {
    navigator.clipboard.writeText(vaultHash);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2500);
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 font-sans pb-24 selection:bg-orange-900 selection:text-white">
      {/* TOP NOTIFICATION / PROVENANCE BAR */}
      <div className="bg-gradient-to-r from-orange-950 via-stone-900 to-red-950 border-b border-orange-800/60 px-4 py-2.5 text-xs text-stone-300 flex items-center justify-between shadow-inner">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 bg-orange-600 text-white rounded font-black text-[10px] uppercase tracking-wider animate-pulse">
            SOVEREIGN PROOF
          </span>
          <span className="font-semibold text-stone-200">
            Plate #99: The Anthropocene, Energy &amp; Compaction of Harm — From Fire &amp; Coal to the Exposome &amp; WW3
          </span>
        </div>
        <div className="flex items-center gap-4 text-[11px] text-stone-400">
          <span className="hidden md:inline">Hanlon (2018) • Clay et al. (2018) • Bailey et al. (2018) • PNAS (2022)</span>
          <button
            onClick={copyHashToClipboard}
            className="flex items-center gap-1.5 px-2 py-1 bg-stone-800 hover:bg-stone-700 text-amber-300 rounded border border-stone-700 transition-colors text-[10px] font-mono cursor-pointer"
            title="Copy Sovereign Cryptographic Hash"
          >
            {copiedHash ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
            <span>0xANTHROPOCENE...</span>
          </button>
        </div>
      </div>

      {/* HERO BANNER */}
      <div className="relative overflow-hidden bg-gradient-to-b from-stone-900 via-stone-950 to-stone-950 border-b border-stone-800 px-4 sm:px-8 py-10 sm:py-14">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-950/30 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="px-3 py-1 bg-orange-600 text-white text-xs font-black rounded uppercase tracking-wider shadow-sm">
              PLATE #99
            </span>
            <span className="px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-bold rounded">
              ROULET’S LAW OF ANTHROPOCENE PERTURBATION
            </span>
            <span className="px-3 py-1 bg-stone-800 text-stone-300 text-xs font-semibold rounded">
              8,500 YEARS OF METALLURGY &amp; ENERGY
            </span>
            <span className="px-3 py-1 bg-sky-950/60 text-sky-300 border border-sky-800/50 text-xs font-medium rounded">
              ECONOMIC HISTORY &amp; EXPOSOMICS
            </span>
            <span className="px-3 py-1 bg-rose-950/60 text-rose-300 border border-rose-800/50 text-xs font-medium rounded">
              QUAD-BIOME: GENOME • BIOME • IMMUNOME • EXPOSOME
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
            The Anthropocene, Energy &amp; Compaction of Harm
          </h1>
          <p className="text-xl sm:text-2xl text-orange-400 font-bold mb-5 leading-snug">
            From Fire, Anatolian Metallurgy (6,500 BCE) &amp; Coal to Leaded Petroleum, Biological Stunting &amp; Global War
          </p>

          <p className="text-base sm:text-lg text-stone-300 max-w-4xl leading-relaxed mb-6 font-normal">
            Roulet’s Law is not driven solely by Pb—it is driven by <strong>perturbation</strong> in a framework of uncertainty, chaos, and relativity. Through combined disciplines and systems science, ICEarth benchmarks all drivers of humanity to sovereign outcomes and defines best practices for improving the human condition.
            Beginning with ancient lead smelting in Anatolia (~6,500 BCE) enabled by its low melting point (327°C), followed by coal extraction from ancient China to Roman Britain, metallurgy and energy have defined the Anthropocene. Economic history reveals the devastating physical proof: <strong>Bailey et al. (2018)</strong> proved that childhood coal pollution directly stunted British army recruits by up to <strong>1 full inch</strong> prior to WWI, while <strong>Hanlon (2018)</strong> and <strong>Clay et al. (2018)</strong> proved that air pollution multiplied lethal comorbidity with tuberculosis, measles, and the 1918 influenza pandemic.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold rounded-lg shadow-lg shadow-orange-900/30 transition-all cursor-pointer text-sm"
            >
              <Maximize2 size={16} />
              <span>Inspect Master Vector Infographic (Plate #99)</span>
            </button>

            <a
              href="https://www.sciencedirect.com/science/article/pii/S0166046223000868"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700 hover:border-amber-500/50 rounded-lg text-sm font-medium transition-colors"
            >
              <BookOpen size={16} className="text-sky-400" />
              <span>ScienceDirect (Beach, Clay &amp; Hanlon Review)</span>
              <ExternalLink size={14} className="text-stone-400" />
            </a>

            <button
              onClick={copyHashToClipboard}
              className="flex items-center gap-2 px-4 py-2.5 bg-stone-900 hover:bg-stone-800 text-amber-300 border border-stone-700 rounded-lg text-sm font-mono transition-colors cursor-pointer"
            >
              {copiedHash ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
              <span>{copiedHash ? 'Hash Copied!' : 'Copy Vault Hash'}</span>
            </button>

            {onNavigateTab && (
              <button
                onClick={() => onNavigateTab('why_indigenous_communities_earth')}
                className="flex items-center gap-2 px-4 py-2.5 bg-stone-900 hover:bg-stone-800 text-orange-200 border border-orange-800/80 rounded-lg text-sm font-bold transition-colors cursor-pointer ml-auto"
              >
                <span>⬅️ Back to Why Indigenous Communities Earth (Plate #98)</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* CORE METRICS TICKER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 -mt-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gradient-to-b from-stone-900 to-stone-950 border border-stone-800 rounded-xl p-4 shadow-xl">
            <div className="flex items-center justify-between text-orange-400 text-xs font-bold mb-1">
              <span>PHYSICAL STUNTING</span>
              <TrendingDown size={16} />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white">~1.0 INCH LOST</div>
            <div className="text-xs text-stone-400 mt-1">Bailey (2018) IV estimate: 37% of secular height gain erased</div>
          </div>

          <div className="bg-gradient-to-b from-stone-900 to-stone-950 border border-stone-800 rounded-xl p-4 shadow-xl">
            <div className="flex items-center justify-between text-amber-400 text-xs font-bold mb-1">
              <span>METALLURGY FOUNDATION</span>
              <Pickaxe size={16} />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-amber-300">6,500 BCE</div>
            <div className="text-xs text-stone-400 mt-1">Anatolia smelting; 327°C melting point anchored 8,500y burden</div>
          </div>

          <div className="bg-gradient-to-b from-stone-900 to-stone-950 border border-stone-800 rounded-xl p-4 shadow-xl">
            <div className="flex items-center justify-between text-rose-400 text-xs font-bold mb-1">
              <span>PANDEMIC SYNERGY</span>
              <Flame size={16} />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-rose-300">3.85× RISK</div>
            <div className="text-xs text-stone-400 mt-1">Clay (2018) &amp; Hanlon: coal smog multiplied flu &amp; TB deaths</div>
          </div>

          <div className="bg-gradient-to-b from-stone-900 to-stone-950 border border-stone-800 rounded-xl p-4 shadow-xl">
            <div className="flex items-center justify-between text-sky-400 text-xs font-bold mb-1">
              <span>UNREGULATED DISPARITY</span>
              <Scale size={16} />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-sky-300">1 IN 3 KIDS</div>
            <div className="text-xs text-stone-400 mt-1">Developing nations suffer extreme heavy metal &amp; fuel burden today</div>
          </div>
        </div>
      </div>

      {/* ROULET'S LAW FORMALIZATION CARD */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-10">
        <div className="bg-stone-900/90 border-2 border-orange-800/80 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          <div className="flex items-center gap-3 mb-4">
            <Award className="text-amber-400" size={24} />
            <h2 className="text-lg sm:text-xl font-black text-stone-100 uppercase tracking-wide">
              Roulet’s Law of Anthropocene Perturbation &amp; Compaction of Harm
            </h2>
          </div>

          <div className="bg-stone-950 border border-orange-900/60 rounded-xl p-4 sm:p-6 mb-6">
            <p className="font-mono text-xs text-stone-400 uppercase tracking-wider mb-2">
              Formal Universal Equation
            </p>
            <div className="text-base sm:text-xl font-mono font-black text-white space-y-2">
              <div className="text-orange-400">
                Perturbation <span className="text-stone-400 font-normal">(1st Order Energy &amp; Metallurgy: Fire ➔ Anatolian Pb ➔ Coal ➔ Petroleum/TEL)</span>
              </div>
              <div className="text-amber-300">
                &times; Uncertainty <span className="text-stone-400 font-normal">(Compounding Exposome &times; Genome &times; Biome &times; Immunome)</span>
              </div>
              <div className="text-red-400">
                = Chaos <span className="text-stone-400 font-normal">(Stunted Height [Bailey 2018], Pandemic Mortality [Clay/Hanlon] &amp; WW1/WW2 Aggression)</span>
              </div>
              <div className="text-sky-300">
                &times; Relativity <span className="text-stone-400 font-normal">(Modern Global Disparity: 1970 Clean Air Act Benefits vs Developing World 1/3 Poisoning)</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-stone-300 leading-relaxed">
            <div className="p-4 bg-stone-950/60 border border-stone-800 rounded-lg">
              <strong className="text-amber-300 block mb-1">Overcoming the Scientific Isolation Fallacy:</strong>
              Mainstream epidemiology perpetually fails because it isolates insults (measuring one chemical or one exposure vector in a vacuum). In biological reality, insults have been continuous and compounding across evolution, human migration, natural geology (UV, radon), and then multiplied exponentially by Anthropocene energy extraction.
            </div>
            <div className="p-4 bg-stone-950/60 border border-stone-800 rounded-lg">
              <strong className="text-orange-300 block mb-1">The Biological Quad-Biome:</strong>
              The exposome directly alters the human genome (epigenetics, DNA strand breaks), the microbiome (gut dysbiosis), and the immunome (severe inflammatory hypersensitivity). Stunting physical growth and prefrontal executive function created the exact biological setting for the horrific carnage of WW1 and WW2.
            </div>
          </div>
        </div>
      </div>

      {/* MASTER VECTOR INFOGRAPHIC DISPLAY */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-10">
        <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-mono text-orange-400 font-bold uppercase tracking-wider block">
                EXHIBIT 1 • ZERO-GARBLE VECTOR INFOGRAPHIC
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Plate #99: The Anthropocene, Energy &amp; The Compaction of Harm
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-2 px-4 py-2 bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold rounded-lg cursor-pointer transition-colors"
              >
                <Maximize2 size={14} />
                <span>Enlarge Full Resolution</span>
              </button>
            </div>
          </div>

          {/* SVG Container with Crisp Typography */}
          <div 
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-stone-950 border border-stone-800 rounded-xl overflow-hidden cursor-pointer hover:border-orange-500/50 transition-all shadow-2xl group relative"
          >
            <img 
              src={plate99InfographicSvg} 
              alt="Plate #99: Anthropocene, Energy and Compaction of Harm Infographic" 
              className="w-full h-auto object-contain block group-hover:scale-[1.005] transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="px-4 py-2 bg-orange-600/90 text-white font-bold text-sm rounded-lg backdrop-blur-xs flex items-center gap-2 shadow-xl">
                <Maximize2 size={16} /> Click to Inspect High-Resolution Plate #99
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* INTERACTIVE DATA VISUALIZATIONS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-10 space-y-10">
        {/* CHART 1: LONG-RUN ENERGY & METALLURGICAL PERTURBATION */}
        <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-mono text-orange-400 font-bold uppercase tracking-wider block">
                TIMELINE FORENSICS (6,500 BCE – 2026 CE)
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Compaction of Harm: Lead Smelting, Coal Extraction &amp; Global Conflict
              </h3>
              <p className="text-xs text-stone-400 mt-1 max-w-3xl">
                Tracking the emergence of lead smelting (Anatolia), coal exploitation (China to Roman Britain to Victorian industrialization), and the corresponding escalations in societal chaos.
              </p>
            </div>
          </div>

          <div className="h-80 sm:h-96 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={ANTHROPOCENE_ENERGY_TIMELINE} margin={{ top: 10, right: 30, left: 0, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#292524" />
                <XAxis dataKey="epoch" stroke="#78716c" tick={{ fill: '#d6d3d1', fontSize: 11 }} />
                <YAxis stroke="#78716c" tick={{ fill: '#d6d3d1', fontSize: 11 }} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1c1917', borderColor: '#44403c', borderRadius: '8px', color: '#f8fafc', fontSize: '12px' }}
                />
                <Legend />
                <Area type="monotone" dataKey="leadSmeltingIndex" name="Lead Smelting Perturbation Index" fill="#ea580c" stroke="#f97316" fillOpacity={0.4} />
                <Area type="monotone" dataKey="coalUsageIndex" name="Coal Extraction &amp; Combustion Index" fill="#78716c" stroke="#a8a29e" fillOpacity={0.3} />
                <Line type="monotone" dataKey="globalConflictRate" name="Macro Conflict &amp; Violence Index" stroke="#ef4444" strokeWidth={3} dot={{ r: 4, fill: '#ef4444' }} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* CHART 2: BAILEY ET AL. (2018) WWI BRITISH ARMY RECRUIT STUNTING */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 sm:p-8 shadow-xl">
            <div className="mb-4">
              <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider block">
                BAILEY ET AL. (2018) PROOF
              </span>
              <h3 className="text-lg sm:text-xl font-black text-white">
                Childhood Coal Pollution vs. WWI Adult Height Deficit
              </h3>
              <p className="text-xs text-stone-400 mt-1">
                Linked 1901 census to WWI enlistment records. IV estimation reveals a 1.02-inch height deficit in high-coal districts—erasing 37% of the total secular growth achieved between the 1890s and 1970s.
              </p>
            </div>

            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={BAILEY_HEIGHT_DATA} margin={{ top: 10, right: 20, left: -10, bottom: 30 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#292524" />
                  <XAxis dataKey="quartile" stroke="#78716c" tick={{ fill: '#d6d3d1', fontSize: 10 }} interval={0} angle={-15} textAnchor="end" />
                  <YAxis stroke="#78716c" tick={{ fill: '#d6d3d1', fontSize: 11 }} />
                  <Tooltip contentStyle={{ backgroundColor: '#1c1917', borderColor: '#44403c', borderRadius: '8px', color: '#f8fafc', fontSize: '12px' }} />
                  <Bar dataKey="heightDeficitInches" name="Height Lost to Coal Pollution (Inches)" fill="#ea580c" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* CHART 3: INFECTION COMORBIDITY SYNERGY (HANLON & CLAY 2018) */}
          <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 sm:p-8 shadow-xl">
            <div className="mb-4">
              <span className="text-xs font-mono text-rose-400 font-bold uppercase tracking-wider block">
                HANLON (2018) &amp; CLAY (2018) PROOFS
              </span>
              <h3 className="text-lg sm:text-xl font-black text-white">
                Air Pollution &times; Viral Comorbidity Multipliers
              </h3>
              <p className="text-xs text-stone-400 mt-1">
                Acute London coal inversions (1866–1965) and 1915 coal power capacity: coal air pollution multiplies measles, tuberculosis, and 1918 influenza mortality by up to 3.85&times;.
              </p>
            </div>

            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={INFECTION_COMORBIDITY_DATA} layout="vertical" margin={{ top: 10, right: 30, left: 30, bottom: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#292524" />
                  <XAxis type="number" stroke="#78716c" tick={{ fill: '#d6d3d1', fontSize: 11 }} domain={[0, 5]} />
                  <YAxis dataKey="condition" type="category" stroke="#78716c" tick={{ fill: '#d6d3d1', fontSize: 9.5 }} width={120} />
                  <Tooltip contentStyle={{ backgroundColor: '#1c1917', borderColor: '#44403c', borderRadius: '8px', color: '#f8fafc', fontSize: '12px' }} />
                  <Bar dataKey="mortalityMultiplier" name="Mortality Multiplier (&times; Baseline)" fill="#ef4444" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* INTERACTIVE COUNTERFACTUAL / PERTURBATION SIMULATOR */}
        <div className="bg-gradient-to-b from-stone-900 to-stone-950 border-2 border-orange-800/80 rounded-2xl p-6 sm:p-8 shadow-2xl">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="text-orange-400" size={24} />
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Interactive Anthropocene Perturbation Simulator
              </h3>
              <p className="text-xs text-stone-400">
                Model how industrial coal intensity, lead additives, and regulatory regimes compound biological stunting and macro violence.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 pt-4 border-t border-stone-800">
            {/* Input 1: Coal / Industrial Intensity */}
            <div>
              <label className="text-xs font-bold text-stone-300 block mb-2">
                Coal Combustion &amp; Industrial Intensity ({simCoalIntensity}%)
              </label>
              <input 
                type="range" 
                min="5" 
                max="100" 
                value={simCoalIntensity} 
                onChange={(e) => setSimCoalIntensity(Number(e.target.value))}
                className="w-full accent-orange-500 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-stone-500 mt-1 font-mono">
                <span>Agrarian (5%)</span>
                <span>Victorian Peak (65%)</span>
                <span>Maximum Ruhr (100%)</span>
              </div>
            </div>

            {/* Input 2: Lead Additive Presence */}
            <div>
              <label className="text-xs font-bold text-stone-300 block mb-2">
                Heavy Metal / Lead Vector
              </label>
              <div className="flex gap-2">
                <button
                  onClick={() => setSimLeadAdditive(true)}
                  className={`flex-1 py-2 px-3 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                    simLeadAdditive 
                      ? 'bg-red-700 text-white border-red-500 shadow-md' 
                      : 'bg-stone-800 text-stone-400 border-stone-700'
                  }`}
                >
                  Active Pb (Smelting/TEL)
                </button>
                <button
                  onClick={() => setSimLeadAdditive(false)}
                  className={`flex-1 py-2 px-3 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                    !simLeadAdditive 
                      ? 'bg-emerald-700 text-white border-emerald-500 shadow-md' 
                      : 'bg-stone-800 text-stone-400 border-stone-700'
                  }`}
                >
                  Unleaded Baseline
                </button>
              </div>
              <p className="text-[10px] text-stone-500 mt-1">
                Simulates Midgley 1921 TEL additive or heavy industrial smelting plumes.
              </p>
            </div>

            {/* Input 3: Regulatory Era */}
            <div>
              <label className="text-xs font-bold text-stone-300 block mb-2">
                Regulatory Framework
              </label>
              <select
                value={simRegulationEra}
                onChange={(e) => setSimRegulationEra(e.target.value as any)}
                className="w-full bg-stone-800 border border-stone-700 text-stone-200 text-xs rounded-lg p-2 font-medium cursor-pointer"
              >
                <option value="pre1970">Pre-1970 Uncontrolled (Victorian to Mid-Century)</option>
                <option value="clean_air_act">Post-1970 Clean Air Act Enforcement</option>
                <option value="developing_unregulated">Modern Developing (Unregulated &amp; Exploited)</option>
              </select>
              <p className="text-[10px] text-stone-500 mt-1">
                Clean Air Act reduced emissions; developing nations still face 1 in 3 child poisoning.
              </p>
            </div>
          </div>

          {/* SIMULATED RESULTS CARDS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-stone-950 p-5 rounded-xl border border-stone-800">
            <div>
              <span className="text-[10px] font-mono text-orange-400 uppercase font-bold block">
                Estimated Adult Height Deficit
              </span>
              <div className="text-2xl font-black text-white mt-1">
                -{calculatedHeightDeficit} in
              </div>
              <span className="text-[10px] text-stone-400">
                Bailey (2018) biological stunting
              </span>
            </div>

            <div>
              <span className="text-[10px] font-mono text-rose-400 uppercase font-bold block">
                Viral / Pandemic Multiplier
              </span>
              <div className="text-2xl font-black text-rose-300 mt-1">
                {calculatedViralRisk}&times;
              </div>
              <span className="text-[10px] text-stone-400">
                Hanlon (2018) &amp; Clay (2018)
              </span>
            </div>

            <div>
              <span className="text-[10px] font-mono text-amber-400 uppercase font-bold block">
                Neuro-Aggression Chaos Index
              </span>
              <div className="text-2xl font-black text-amber-300 mt-1">
                {calculatedConflictChaosIndex} / 250
              </div>
              <span className="text-[10px] text-stone-400">
                Prefrontal executive dysfunction
              </span>
            </div>

            <div>
              <span className="text-[10px] font-mono text-sky-400 uppercase font-bold block">
                Quad-Biome Perturbation
              </span>
              <div className="text-2xl font-black text-sky-300 mt-1">
                {simRegulationEra === 'clean_air_act' ? 'Remediated' : simRegulationEra === 'developing_unregulated' ? 'Severe Crisis' : 'Critical'}
              </div>
              <span className="text-[10px] text-stone-400">
                Genome &bull; Biome &bull; Immunome
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* CROSS NAVIGATION FOOTER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-14 pt-8 border-t border-stone-800">
        <h4 className="text-xs font-mono text-stone-400 font-bold uppercase tracking-wider mb-4">
          Cross-Navigate Related Sovereign Proofs &amp; Exposome Engines
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {onNavigateTab && (
            <>
              <button
                onClick={() => onNavigateTab('why_indigenous_communities_earth')}
                className="p-4 bg-stone-900 hover:bg-stone-800 border border-stone-800 hover:border-red-600 rounded-xl text-left transition-all cursor-pointer group"
              >
                <div className="flex items-center justify-between text-red-400 text-xs font-bold mb-1">
                  <span>PLATE #98</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="text-sm font-bold text-white">Why Indigenous Communities Earth</div>
                <div className="text-[11px] text-stone-400 mt-1">The Great Dying, 55M Dead &amp; Genocide Relativity</div>
              </button>

              <button
                onClick={() => onNavigateTab('lead_war_ww2_proof')}
                className="p-4 bg-stone-900 hover:bg-stone-800 border border-stone-800 hover:border-amber-600 rounded-xl text-left transition-all cursor-pointer group"
              >
                <div className="flex items-center justify-between text-amber-400 text-xs font-bold mb-1">
                  <span>PLATE #96</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="text-sm font-bold text-white">1921 Lead-War Continuum</div>
                <div className="text-[11px] text-stone-400 mt-1">From Rome to WW2, Standard Oil &amp; Climate Change</div>
              </button>

              <button
                onClick={() => onNavigateTab('lead_covid_syndemic')}
                className="p-4 bg-stone-900 hover:bg-stone-800 border border-stone-800 hover:border-rose-600 rounded-xl text-left transition-all cursor-pointer group"
              >
                <div className="flex items-center justify-between text-rose-400 text-xs font-bold mb-1">
                  <span>PLATE #97</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="text-sm font-bold text-white">Lead Poisoning &amp; COVID Syndemic</div>
                <div className="text-[11px] text-stone-400 mt-1">Cardiovascular Comorbidities &amp; Minority Burden</div>
              </button>

              <button
                onClick={() => onNavigateTab('global_lead_crime_proof')}
                className="p-4 bg-stone-900 hover:bg-stone-800 border border-stone-800 hover:border-sky-600 rounded-xl text-left transition-all cursor-pointer group"
              >
                <div className="flex items-center justify-between text-sky-400 text-xs font-bold mb-1">
                  <span>PLATE #71</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="text-sm font-bold text-white">Global Lead-Crime Proof</div>
                <div className="text-[11px] text-stone-400 mt-1">8,000-Year Historical Validation of Roulet’s Law</div>
              </button>
            </>
          )}
        </div>
      </div>

      {/* HIGH-RES ARTWORK MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col p-4 sm:p-8 animate-fadeIn">
          <div className="flex items-center justify-between pb-4 border-b border-stone-800">
            <div>
              <span className="text-xs font-mono text-orange-400 font-bold uppercase tracking-wider block">
                HIGH RESOLUTION VECTOR PROVENANCE VIEW
              </span>
              <h3 className="text-lg sm:text-xl font-black text-white">
                Plate #99: The Anthropocene, Energy &amp; Compaction of Harm
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={copyHashToClipboard}
                className="px-3 py-1.5 bg-stone-800 hover:bg-stone-700 text-amber-300 rounded text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                {copiedHash ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                <span>{copiedHash ? 'Hash Copied!' : 'Copy Provenance Hash'}</span>
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 bg-stone-800 hover:bg-stone-700 text-stone-300 rounded-lg transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-auto flex items-center justify-center p-2 sm:p-6">
            <img 
              src={plate99InfographicSvg} 
              alt="High Resolution Plate #99 Infographic" 
              className="max-w-full max-h-[85vh] object-contain shadow-2xl rounded-lg"
            />
          </div>

          <div className="pt-3 border-t border-stone-800 text-center font-mono text-xs text-stone-400">
            Hash: {vaultHash} • Grounded in ScienceDirect (2023) • Hanlon (2018) • Clay et al. (2018) • Bailey et al. (2018)
          </div>
        </div>
      )}
    </div>
  );
};

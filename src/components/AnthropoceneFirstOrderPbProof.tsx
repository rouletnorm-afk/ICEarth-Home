import React, { useState } from 'react';
import {
  Atom,
  Flame,
  Globe,
  Brain,
  ExternalLink,
  BookOpen,
  Maximize2,
  Sliders,
  TrendingUp,
  AlertTriangle,
  Scale,
  Award,
  Crown,
  Share2,
  Activity,
  Layers,
  History,
  Clock,
  ArrowRight,
  Info,
  Calendar,
  Sparkles,
  RefreshCw,
  HeartPulse,
  Stethoscope,
  Microscope,
  DollarSign,
  TrendingDown,
  Percent,
  Users,
  Building2,
  Landmark,
  FileText,
  Skull,
  ShieldAlert,
  Dog,
  Feather,
  Home,
  Factory
} from 'lucide-react';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

import plate100Svg from '../assets/images/anthropocene_first_order_pb_infographic_plate100.svg';
import leadSciAmImg from '../assets/images/LeadIllustrationScientificAmerican_11307bc1.jpg';
import lakeSedimentsImg from '../assets/images/a-Global-lead-Pb-production-history-Settle-and-Patterson-1980-and-pollution-lead_74d28688.webp';
import leadPaintGasImg from '../assets/images/LeadPaintGas_6345702e.jpg';
import globalConflictImg from '../assets/images/GlobamConflict_314ab2af.png';

interface AnthropoceneFirstOrderPbProofProps {
  onNavigateTab?: (tab: string) => void;
  siteTheme?: 'light' | 'dark';
}

const HISTORICAL_PB_ATMOSPHERE = [
  { era: '6500 BCE', stage: 'Anatolian Smelting', leadSmelting: 5, governancePoisoning: 2, conflictCasualties: 1, coalPpb: 0 },
  { era: '2500 BCE', stage: 'Bronze/Ag Cupellation', leadSmelting: 25, governancePoisoning: 6, conflictCasualties: 4, coalPpb: 0 },
  { era: '500 BCE', stage: 'Greco-Roman Silver', leadSmelting: 120, governancePoisoning: 22, conflictCasualties: 18, coalPpb: 2 },
  { era: '200 CE', stage: 'High Roman Empire', leadSmelting: 450, governancePoisoning: 55, conflictCasualties: 42, coalPpb: 5 },
  { era: '1200 CE', stage: 'Medieval Glazed Ware', leadSmelting: 300, governancePoisoning: 35, conflictCasualties: 30, coalPpb: 12 },
  { era: '1600 CE', stage: 'Imperial Expansion', leadSmelting: 650, governancePoisoning: 45, conflictCasualties: 85, coalPpb: 45 },
  { era: '1918 CE', stage: 'WW1 & Peak Coal', leadSmelting: 2400, governancePoisoning: 62, conflictCasualties: 95, coalPpb: 480 },
  { era: '1970 CE', stage: 'Peak Leaded Gas/LBP', leadSmelting: 5000, governancePoisoning: 75, conflictCasualties: 70, coalPpb: 720 },
  { era: '2026 CE', stage: 'Modern Bifurcation', leadSmelting: 1200, governancePoisoning: 32, conflictCasualties: 45, coalPpb: 510 }
];

const ANIMAL_SENTINEL_STUDIES = [
  {
    species: 'Domestic Dogs (Canis familiaris)',
    location: 'Flint, Michigan (2017)',
    study: 'Langlois et al. (2017)',
    finding: 'Fourfold increase in blood lead levels in pet dogs compared to control dogs from unaffected metropolitan areas within 12 months of municipal water switch.',
    indicator: 'Direct bio-sentinel of residential tap water lead ingestion.',
    badge: 'Municipal Water Crisis'
  },
  {
    species: 'White House First Dog (Millie)',
    location: 'Washington, D.C. (August 1990)',
    study: 'Radcliffe (1990) / PMC8812512',
    finding: 'Millie, the English Springer Spaniel under President George H. W. Bush, was acutely lead-poisoned from exterior paint scraping renovations on the White House facade.',
    indicator: 'Proof that power centers and executive mansions are heavily lead-contaminated.',
    badge: 'Executive Residence'
  },
  {
    species: 'Domestic Pets vs Young Children',
    location: 'Closed Smelter Vicinity (1995)',
    study: 'Berny et al. (1995)',
    finding: '10% of proximate human residents and >30% of domestic pets had elevated lead exposures. Pet grooming behaviors ingested massive dust deposits before human symptoms manifested.',
    indicator: 'Indoor pets recommended as mandatory early warning sentinel for infant lead toxicity.',
    badge: 'Smelter Fallout'
  },
  {
    species: 'Domestic Felines (Felis catus)',
    location: 'Veterinary Urban Audits (2003)',
    study: 'Knight and Kumar (2003)',
    finding: 'Lead-based paint dust is the primary source of toxic feline plumbism; contaminated yard soil is secondary via grooming and licking paw surfaces.',
    indicator: 'Grooming-mediated heavy metal ingestion tracks indoor dust loadings.',
    badge: 'Paint & Soil Hazard'
  },
  {
    species: 'Northern Mockingbirds (Mimus polyglottos)',
    location: 'New Orleans, Louisiana (2019)',
    study: 'McClelland et al. (2019)',
    finding: 'Mockingbirds inhabiting high-lead urban neighborhoods exhibited extreme territorial aggression and disrupted song behavior, mirroring prefrontal aggression in leaded humans.',
    indicator: 'Wild avian behavioral proof of lead-induced territorial rage.',
    badge: 'Neuro-Behavioral Proof'
  }
];

export const AnthropoceneFirstOrderPbProof: React.FC<AnthropoceneFirstOrderPbProofProps> = ({
  onNavigateTab,
  siteTheme = 'dark'
}) => {
  const [selectedViewerTab, setSelectedViewerTab] = useState<
    'infographic' | 'heavy_metal_sciam' | 'lake_sediments' | 'paint_gas' | 'global_conflict'
  >('heavy_metal_sciam');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [governancePoisoningPct, setGovernancePoisoningPct] = useState(35);

  const calculatedAggressionIndex = Math.min(100, Math.round(governancePoisoningPct * 2.2));
  const calculatedExcessCasualties = Math.round(Math.pow(governancePoisoningPct / 10, 2.4) * 120000);

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 font-sans p-4 sm:p-6 lg:p-8 space-y-10">
      {/* 1. TOP HEADER & PROVENANCE BAR */}
      <div className="max-w-7xl mx-auto space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-800 pb-4">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="px-3 py-1 bg-red-600/30 text-red-400 border border-red-500/50 rounded-lg text-xs font-mono font-black tracking-wider uppercase flex items-center gap-1.5">
              <Atom size={13} className="text-red-400" />
              Plate #100 Master Sovereign Vault
            </span>
            <span className="px-2.5 py-1 bg-stone-800 text-stone-300 rounded text-xs font-mono">
              0xANTHROPOCENE_FIRST_ORDER_PB_PLATE_100
            </span>
            <span className="px-2.5 py-1 bg-amber-950/80 border border-amber-600/40 text-amber-300 rounded text-xs font-mono">
              Roulet&apos;s Law of Perturbation
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <a
              href="https://normroulet.substack.com/"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 bg-red-600/20 hover:bg-red-600/30 text-red-300 border border-red-500/40 rounded-xl text-xs font-mono flex items-center gap-1.5 transition-all"
            >
              <BookOpen size={13} />
              <span>Norm Roulet Substack</span>
              <ExternalLink size={12} />
            </a>

            {onNavigateTab && (
              <>
                <button
                  onClick={() => onNavigateTab('anthropocene_energy_exposome_proof')}
                  className="px-3.5 py-1.5 bg-amber-900/30 hover:bg-amber-900/50 text-amber-300 text-xs font-mono rounded-xl border border-amber-700/50 flex items-center gap-1.5 cursor-pointer transition-all"
                >
                  <Flame size={13} />
                  <span>Plate #99: Energy</span>
                </button>
                <button
                  onClick={() => onNavigateTab('why_indigenous_communities_earth')}
                  className="px-3.5 py-1.5 bg-emerald-950/50 hover:bg-emerald-900/50 text-emerald-300 text-xs font-mono rounded-xl border border-emerald-700/50 flex items-center gap-1.5 cursor-pointer transition-all"
                >
                  <Globe size={13} />
                  <span>The Great Dying (1492–1600)</span>
                </button>
              </>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-red-400 uppercase tracking-widest">
            <span>Historical Exposenomics</span>
            <span>•</span>
            <span>Mathematical Perturbation Theory</span>
            <span>•</span>
            <span>8,500-Year Metallurgical Disruption</span>
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-red-100 font-serif tracking-tight leading-tight">
            Anthropocene, 1st Order Pb Perturbation &amp; The Warrior Dysgenic
          </h1>
          <p className="text-stone-300 text-sm sm:text-base max-w-5xl leading-relaxed">
            Applying Perturbation Theory <span className="font-mono text-amber-300">(H = H₀ + λH&apos;)</span> to human civilization: How Lead (atomic number 82) predated and compounded with coal and petroleum as the foundational first-order physical disruption driving ruling caste prefrontal atrophy, territorial hysteria, pandemic vulnerability, and global conflict.
          </p>
        </div>

        {/* 2. THE MASTER ROULET'S LAW EQUATION CARD */}
        <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-stone-900 via-stone-900 to-red-950/40 border border-red-500/50 shadow-2xl space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-red-500/20 pb-2">
            <span className="text-xs font-mono text-red-400 font-bold uppercase tracking-wider flex items-center gap-2">
              <Scale size={14} className="text-red-400" />
              ICEarth Roulet’s Law of Relativity &amp; Perturbation
            </span>
            <span className="text-[11px] font-mono text-amber-300 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-600/30">
              Fundamental Theorem of Anthropogenic Dysfunction
            </span>
          </div>

          <div className="text-base sm:text-xl lg:text-2xl font-mono font-black text-amber-200 tracking-tight leading-snug">
            Perturbation (1st Order Energy &amp; Metallurgy: Fire ➔ Anatolian Pb ➔ Coal ➔ Petroleum/TEL) × Uncertainty (Compounding Exposome × Genome × Biome × Immunome) = Chaos (Stunted Height [Bailey 2018], Pandemic Mortality [Clay/Hanlon] &amp; WW1/WW2 Aggression) × Relativity (Modern Global Disparity: 1970 Clean Air Act Benefits vs Developing World 1/3 Poisoning)
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 text-xs text-stone-300 leading-relaxed">
            <div className="p-3 bg-stone-950/80 rounded-xl border border-stone-800 space-y-1.5">
              <span className="font-bold text-amber-300 font-mono flex items-center gap-1.5">
                <Atom size={13} className="text-amber-400" />
                Perturbation Theory Foundation (H = H₀ + λH&apos;):
              </span>
              <p>
                In mathematical physics, perturbation theory finds approximate solutions to complex dynamical problems by starting from the exact solution of a simpler, unperturbed system (<span className="font-mono text-stone-200">H₀</span>). In human history, <span className="font-mono text-stone-200">H₀</span> is pristine hominin biology. The <strong>1st Order Perturbation factor (<span className="font-mono text-red-400">λH&apos;</span>)</strong> throughout all of Anthropogenic civilization is <strong>Lead (Pb)</strong>.
              </p>
            </div>

            <div className="p-3 bg-stone-950/80 rounded-xl border border-stone-800 space-y-1.5">
              <span className="font-bold text-red-300 font-mono flex items-center gap-1.5">
                <Crown size={13} className="text-red-400" />
                The Warrior Dysgenic Multiplication Principle:
              </span>
              <p>
                As established in <em>Why Indigenous Communities Earth</em>, it only takes a small percentage (5–10%) of a population to be poisoned to trigger massive societal catastrophe—because the most heavily leaded caste in history has consistently been the <strong>governing, military, and aristocratic command elite</strong> controlling armies and state machinery.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. KEY METRICS TICKER */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
        <div className="bg-stone-900/90 border border-stone-800 hover:border-red-500/40 transition-all p-4 rounded-xl space-y-1.5">
          <div className="text-stone-400 flex items-center justify-between">
            <span>Deep-Time Origin</span>
            <Flame size={14} className="text-red-400" />
          </div>
          <div className="text-2xl font-black text-red-400">6,500 BCE</div>
          <div className="text-[11px] text-stone-400 leading-snug">
            Anatolian smelting (327°C low melting point). Neanderthal teeth show soot at 250,000 BP.
          </div>
        </div>

        <div className="bg-stone-900/90 border border-stone-800 hover:border-amber-500/40 transition-all p-4 rounded-xl space-y-1.5">
          <div className="text-stone-400 flex items-center justify-between">
            <span>Silver Cupellation Waste</span>
            <Factory size={14} className="text-amber-400" />
          </div>
          <div className="text-2xl font-black text-amber-400">350 : 1 Tons</div>
          <div className="text-[11px] text-stone-400 leading-snug">
            300–400 tons toxic Pb byproduct released per 1 ton of pure Ag extracted for coinage.
          </div>
        </div>

        <div className="bg-stone-900/90 border border-stone-800 hover:border-red-500/40 transition-all p-4 rounded-xl space-y-1.5">
          <div className="text-stone-400 flex items-center justify-between">
            <span>Medieval Skeletal Rate</span>
            <Skull size={14} className="text-red-400" />
          </div>
          <div className="text-2xl font-black text-red-400">35% Rural / ~100% Elite</div>
          <div className="text-[11px] text-stone-400 leading-snug">
            Boldsen (2015) Danish bone analysis: rural peasants poisoned, urban wealthy saturated.
          </div>
        </div>

        <div className="bg-stone-900/90 border border-stone-800 hover:border-emerald-500/40 transition-all p-4 rounded-xl space-y-1.5">
          <div className="text-stone-400 flex items-center justify-between">
            <span>US 20th C. Usage Parity</span>
            <TrendingUp size={14} className="text-emerald-400" />
          </div>
          <div className="text-2xl font-black text-emerald-400">1:1 Paint vs Gas</div>
          <div className="text-[11px] text-stone-400 leading-snug">
            Mielke (1999) / NRC: Equal tonnage in Lead Paint (1884–1989) as in Leaded Gasoline (1929–1989).
          </div>
        </div>
      </div>

      {/* 4. MULTI-GRAPHIC SCIENTIFIC ARCHIVE VIEWER */}
      <div className="max-w-7xl mx-auto bg-stone-900 rounded-2xl border border-stone-800 overflow-hidden shadow-2xl space-y-4 p-4 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-800 pb-4">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setSelectedViewerTab('heavy_metal_sciam')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                selectedViewerTab === 'heavy_metal_sciam'
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                  : 'bg-stone-800 text-stone-400 hover:text-white'
              }`}
            >
              <History size={13} />
              <span>Heavy Metal History (SciAm 2020)</span>
            </button>

            <button
              onClick={() => setSelectedViewerTab('lake_sediments')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                selectedViewerTab === 'lake_sediments'
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                  : 'bg-stone-800 text-stone-400 hover:text-white'
              }`}
            >
              <Layers size={13} />
              <span>Lake Sediment Archives (Settle &amp; Patterson)</span>
            </button>

            <button
              onClick={() => setSelectedViewerTab('paint_gas')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                selectedViewerTab === 'paint_gas'
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                  : 'bg-stone-800 text-stone-400 hover:text-white'
              }`}
            >
              <TrendingUp size={13} />
              <span>Paint vs Gasoline (Mielke 1999)</span>
            </button>

            <button
              onClick={() => setSelectedViewerTab('infographic')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                selectedViewerTab === 'infographic'
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                  : 'bg-stone-800 text-stone-400 hover:text-white'
              }`}
            >
              <Atom size={13} />
              <span>Plate #100 Master Vector</span>
            </button>

            <button
              onClick={() => setSelectedViewerTab('global_conflict')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                selectedViewerTab === 'global_conflict'
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                  : 'bg-stone-800 text-stone-400 hover:text-white'
              }`}
            >
              <Skull size={13} />
              <span>Conflict &amp; Genocide Matrix</span>
            </button>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="px-3.5 py-1.5 bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 rounded-lg text-xs font-mono flex items-center gap-1.5 cursor-pointer border border-amber-500/40"
          >
            <Maximize2 size={13} />
            <span>High-Res Fullscreen</span>
          </button>
        </div>

        {/* IMAGE DISPLAY CONTAINER */}
        <div className="bg-stone-950 p-4 rounded-xl flex flex-col justify-center items-center min-h-[460px] border border-stone-800/80">
          {selectedViewerTab === 'heavy_metal_sciam' && (
            <div className="space-y-4 w-full flex flex-col items-center">
              <img
                src={leadSciAmImg}
                alt="Heavy Metal History - Scientific American October 2020"
                className="max-h-[580px] w-auto object-contain rounded-lg border border-stone-800 shadow-2xl"
              />
              <div className="max-w-4xl bg-stone-900/90 border border-stone-800 p-4 rounded-xl text-xs text-stone-300 space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-800 pb-1.5">
                  <span className="font-bold text-amber-300 font-mono uppercase">
                    Scientific American (October 2020) — Heavy Metal History
                  </span>
                  <span className="text-stone-400 font-mono">
                    Text: Mark Fischetti | Graphic: Nadieh Bremer | Data: McConnell et al. (PNAS 2018/2019)
                  </span>
                </div>
                <p className="leading-relaxed">
                  <strong>The 3,000-Year Arctic Ice Record:</strong> Ice cores extracted from Greenland and Severnaya Zemlya (Russian Arctic) capture continuous airborne lead deposition from 1,000 BCE to modern times. Whenever empires expanded silver smelting, Arctic lead spiked. Crucially, <strong>lead production plummeted repeatedly following catastrophic pandemics</strong>: the Antonine Plague (165 CE), the Plague of Justinian (541 CE), and the Black Death (1349–1360 CE) which killed one-third of Europe, freezing industrial demand. Plagues became far more lethal because chronic background lead compromised immune resilience.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 font-mono text-[11px] text-stone-400">
                  <div className="bg-stone-950 p-2 rounded border border-stone-800">
                    <span className="text-red-400 block font-bold">1000 BCE–165 CE</span>
                    Phoenician &amp; Roman peak; falls during Antonine plague
                  </div>
                  <div className="bg-stone-950 p-2 rounded border border-stone-800">
                    <span className="text-amber-400 block font-bold">740–814 CE</span>
                    Charlemagne ramps silver coinage across Frankish empire
                  </div>
                  <div className="bg-stone-950 p-2 rounded border border-stone-800">
                    <span className="text-red-400 block font-bold">1349–1360 CE</span>
                    Black Death kills 1/3 of Europe; mining collapses
                  </div>
                  <div className="bg-stone-950 p-2 rounded border border-stone-800">
                    <span className="text-emerald-400 block font-bold">1940–1972 CE</span>
                    Peak TEL &amp; coal (300 µg/m²/yr); 1970 Clean Air Act plunge
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedViewerTab === 'lake_sediments' && (
            <div className="space-y-4 w-full flex flex-col items-center">
              <img
                src={lakeSedimentsImg}
                alt="Lake Sediment Records of Preindustrial Metal Pollution"
                className="max-h-[580px] w-auto object-contain rounded-lg border border-stone-800 shadow-2xl bg-white p-2"
              />
              <div className="max-w-4xl bg-stone-900/90 border border-stone-800 p-4 rounded-xl text-xs text-stone-300 space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-800 pb-1.5">
                  <span className="font-bold text-amber-300 font-mono uppercase">
                    Lake Sediment Records of Preindustrial Metal Pollution
                  </span>
                  <span className="text-stone-400 font-mono">
                    Settle &amp; Patterson (1980) • Hong et al. (1994) • Brännvall (1997/1999) • Thevenon (2011)
                  </span>
                </div>
                <p className="leading-relaxed">
                  <strong>Independent Millennial Archive:</strong> The extraction of mineral resources has been occurring for millennia in both the Old and New Worlds. Annually laminated lake sediments archive the environmental legacy of preindustrial smelting across Europe with pristine isotopic accuracy:
                </p>
                <ul className="list-disc list-inside space-y-1 text-stone-300 pl-1">
                  <li><strong>Panel a:</strong> Global lead (Pb) production history reconstructed by Clair Patterson and Dorothy Settle (Science, 1980).</li>
                  <li><strong>Panel b:</strong> Greenland glacial summit ice record and 206Pb/207Pb isotopic ratios (Hong 1994; Rosman 1997).</li>
                  <li><strong>Panel c:</strong> Annually laminated (varved) lake sediments of Koltjärnen, northern Sweden (Brännvall et al. 1999).</li>
                  <li><strong>Panel d:</strong> Rudegyl sediments in southernmost Sweden showing massive Roman and Renaissance spikes (Brännvall 1997).</li>
                  <li><strong>Panel e:</strong> Meidsee sediments in the Swiss Alps bordering Italy, calculated as Enrichment Factor (PbEF) relative to Upper Continental Crust (Thevenon 2011).</li>
                  <li><strong>Panel f:</strong> High-altitude Lake Redó sediments in the Spanish Pyrenees capturing classical Iberian smelting plumes (Camarero 1998).</li>
                </ul>
              </div>
            </div>
          )}

          {selectedViewerTab === 'paint_gas' && (
            <div className="space-y-4 w-full flex flex-col items-center">
              <img
                src={leadPaintGasImg}
                alt="Total US usage of lead in paint and gasoline, 1910-1990"
                className="max-h-[580px] w-auto object-contain rounded-lg border border-stone-800 shadow-2xl bg-white p-2"
              />
              <div className="max-w-4xl bg-stone-900/90 border border-stone-800 p-4 rounded-xl text-xs text-stone-300 space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-800 pb-1.5">
                  <span className="font-bold text-amber-300 font-mono uppercase">
                    US Lead Usage in Paint vs Gasoline (1910–1990)
                  </span>
                  <span className="text-stone-400 font-mono">
                    Source: Howard W. Mielke (American Scientist 87: 62–73, 1999) • NRC (1993)
                  </span>
                </div>
                <p className="leading-relaxed">
                  <strong>The Urban Compaction of Poison:</strong> About equal amounts of lead were used in Lead-Based Paint (LBP) pigment between 1884 and 1989 as in leaded gasoline between 1929 and 1989. While lead paint peaked in the 1920s (160,000 tons/yr), tetraethyl lead (TEL) in gasoline surged from 1930 to 1970 to over 250,000 tons/yr. Suburban commuters disgorged pulverized sub-micron lead aerosols directly into inner-city corridors twice daily, creating permanent toxic soil sinks that persist today.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 font-mono text-[11px] text-stone-400 pt-1">
                  <div className="bg-stone-950 p-2 rounded border border-stone-800">
                    <span className="text-red-400 font-bold block">87% Pre-1940 Homes</span>
                    Contaminated with interior &amp; exterior lead-based paint.
                  </div>
                  <div className="bg-stone-950 p-2 rounded border border-stone-800">
                    <span className="text-amber-400 font-bold block">69% (1940–1959)</span>
                    Substantial lead paint burdens in residential structures.
                  </div>
                  <div className="bg-stone-950 p-2 rounded border border-stone-800">
                    <span className="text-stone-300 font-bold block">24% (1960–1977)</span>
                    Still built with lead paint prior to the 1978 CPSC federal ban.
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedViewerTab === 'infographic' && (
            <div className="space-y-4 w-full flex flex-col items-center">
              <img
                src={plate100Svg}
                alt="Plate 100 Infographic Vector"
                className="max-h-[580px] w-auto object-contain rounded-lg border border-stone-800 shadow-2xl"
              />
              <div className="max-w-4xl bg-stone-900/90 border border-stone-800 p-3 rounded-xl text-xs text-stone-300 font-mono">
                Plate #100 Master Vector: The 8,500-Year Metallurgical Perturbation Cascade, Neanderthal Hearth Fires, Roman Cupellation Ratios, and the Warrior Dysgenic Governance Multiplier.
              </div>
            </div>
          )}

          {selectedViewerTab === 'global_conflict' && (
            <div className="space-y-4 w-full flex flex-col items-center">
              <img
                src={globalConflictImg}
                alt="Global Conflict & Genocide Matrix"
                className="max-h-[580px] w-auto object-contain rounded-lg border border-stone-800 shadow-2xl"
              />
              <div className="max-w-4xl bg-stone-900/90 border border-stone-800 p-3 rounded-xl text-xs text-stone-300 font-mono">
                Long-run conflict fatalities vs atmospheric lead spikes. Peak conflict in the 20th century aligns precisely with peak tetraethyl lead deposition and coal combustion.
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 5. HISTORICAL NARRATIVE & SKELETAL EVIDENCE SECTION */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* LEFT: DEEP TIME & MEDIEVAL SKELETAL REALITY */}
        <div className="bg-stone-900 rounded-2xl border border-stone-800 p-6 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-red-400 uppercase tracking-wider">
            <History size={14} />
            <span>Deep Time to Medieval Europe</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-amber-200 font-serif">
            Primate Teeth, Neanderthal Hearth Soot &amp; Medieval Skeletal Plumbism
          </h2>

          <div className="text-xs sm:text-sm text-stone-300 space-y-3 leading-relaxed">
            <p>
              Lead has been detected in the fossilized teeth of primates going back millions of years, and in Neanderthal teeth at <strong>250,000 BP</strong>, reflecting environmental exposure and concentrated inhalation of biomass hearth fire soot inside cave shelters.
            </p>
            <p>
              By <strong>6,500 BCE</strong>, early metallurgy developed in Anatolia (Çatalhöyük). Because lead possesses an extraordinarily low melting point (<strong>327°C</strong>), it became humanity’s first industrially smelted metal. What began as an occupational disaster for slave laborers evolved into history’s first anthropogenic urban toxic catastrophe.
            </p>
            <p>
              As silver mining exploded, lead—the dominant byproduct (350 tons of Pb per ton of Ag)—flooded society. Kohl was used as eye cosmetics; lead acetate sweetened wine (*sapa*); water flowed through lead pipes (*fistulae*); and lead-glazed pottery leached directly into daily food.
            </p>

            {/* DIRECT SCIENCEDIRECT / BOLDSEN QUOTE */}
            <div className="p-4 bg-stone-950 rounded-xl border-l-4 border-amber-500 space-y-2">
              <div className="text-[11px] font-mono text-amber-400 font-bold flex items-center justify-between">
                <span>Boldsen et al. (ScienceDirect 2015):</span>
                <a
                  href="https://www.sciencedirect.com/science/article/abs/pii/S2352409X15300407"
                  target="_blank"
                  rel="noreferrer"
                  className="text-amber-300 hover:underline flex items-center gap-1"
                >
                  <span>Paper</span>
                  <ExternalLink size={11} />
                </a>
              </div>
              <blockquote className="italic text-xs text-stone-300 leading-relaxed">
                “Lead exposure reached even out into the rural communities where ca. 35% of the population was exposed above background... The sources for Pb in medieval societies encompassed lead glazed ceramics which were in close and daily contact with foodstuff; lead containing coins; stained glass windows; lead tiled roofs which were in some instances in contact with the drinking water... It is therefore an intuitive hypothesis that one should find higher concentrations of Pb in urban communities than in rural ones.”
              </blockquote>
            </div>

            {/* SMITHSONIAN QUOTE */}
            <div className="p-4 bg-stone-950 rounded-xl border-l-4 border-red-500 space-y-2">
              <div className="text-[11px] font-mono text-red-400 font-bold flex items-center justify-between">
                <span>Smithsonian Magazine (2015) — Wealthy Townspeople Sickly:</span>
                <a
                  href="https://www.smithsonianmag.com/smart-news/lead-poisoning-made-medieval-townspeople-sickly-180957021/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-red-300 hover:underline flex items-center gap-1"
                >
                  <span>Smithsonian</span>
                  <ExternalLink size={11} />
                </a>
              </div>
              <blockquote className="italic text-xs text-stone-300 leading-relaxed">
                “In the Middle Ages you could almost not avoid ingesting lead, if you were wealthy or living in an urban environment... the skeletons of the urban rich had substantially higher (and potentially toxic) levels of lead compared to rural communities. Lead glaze was practical to clean...and looked beautiful, so it was understandably in high demand.”
              </blockquote>
            </div>
          </div>
        </div>

        {/* RIGHT: THE GROUNDBREAKING REALITY OF AUTHORITY & WARRIOR DYSGENICS */}
        <div className="bg-stone-900 rounded-2xl border border-stone-800 p-6 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-red-400 uppercase tracking-wider">
            <Crown size={14} />
            <span>The Power Paradox</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-red-200 font-serif">
            The Ruling Class Plumbism &amp; The Warrior Dysgenic
          </h2>

          <div className="text-xs sm:text-sm text-stone-300 space-y-3 leading-relaxed">
            <p className="font-semibold text-amber-200">
              This unearths a groundbreaking historical reality: throughout human civilization, the worst lead-poisoned individuals were precisely those in authority.
            </p>
            <p>
              From Egyptian dynasties to Roman emperors and senators, to medieval European monarchs, bishops, and early industrial oligarchs—the ruling class possessed the exclusive wealth to drink from lead cisterns, dine from lead-glazed ceramics and pewter, and drink wine sweetened with lead acetate.
            </p>
            <p>
              Because lead severely damages the <strong>prefrontal cortex</strong>—destroying impulse control, executive function, empathy, and emotional stability while promoting paranoid megalomania and violent aggression—the exact caste controlling state armies and territorial policy was biologically compromised by neurotoxicity.
            </p>

            <div className="p-4 bg-red-950/40 border border-red-500/50 rounded-xl space-y-2">
              <span className="font-mono text-red-300 font-bold text-xs uppercase block flex items-center gap-1.5">
                <AlertTriangle size={13} className="text-red-400" />
                The Minority Multiplication Law:
              </span>
              <p className="text-xs text-stone-300 leading-relaxed">
                As proven in <em>Why Indigenous Communities Earth: The Great Dying (1492–1600)</em>, <strong>it only takes a small percentage (5–10%) of a population to be lead-poisoned</strong> to cause multiples of their scale in death and destruction. When the warrior and ruling caste is dysgenic, a handful of poisoned commanders plunge millions of healthy people into genocidal wars, famines, and societal collapse.
              </p>
            </div>

            <p>
              As energy transitions unlocked <strong>coal combustion</strong> in the 18th–19th centuries and <strong>tetraethyl lead in petroleum</strong> in 1923, this perturbation expanded globally, culminating in the unprecedented industrial slaughter of World War I, World War II, and the mid-20th-century global violent crime wave.
            </p>
          </div>
        </div>
      </div>

      {/* 6. ANIMAL SENTINELS & URBAN EXPOSOME DOSSIER (PMC8812512) */}
      <div className="max-w-7xl mx-auto bg-stone-900 rounded-2xl border border-stone-800 p-6 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-800 pb-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider">
              <Dog size={14} />
              <span>Comparative Toxicology &amp; One Health</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-stone-100 font-serif">
              The Urban Lead Burden: Domestic Pets &amp; Wildlife as Human Sentinels
            </h3>
            <p className="text-xs text-stone-400 mt-1 max-w-4xl">
              From PMC8812512 (<em>The Urban Lead Burden in Humans, Animals and the Natural Environment</em>): Parallels between wildlife, pets, and humans reveal that animal exposures in urban areas frequently exceed proximate human populations, serving as definitive early biological indicators.
            </p>
          </div>

          <a
            href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8812512/"
            target="_blank"
            rel="noreferrer"
            className="px-3.5 py-1.5 bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs font-mono rounded-xl border border-stone-700 flex items-center gap-1.5"
          >
            <BookOpen size={13} />
            <span>PMC8812512 Review</span>
            <ExternalLink size={12} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ANIMAL_SENTINEL_STUDIES.map((study, idx) => (
            <div
              key={idx}
              className="p-4 bg-stone-950 rounded-xl border border-stone-800 hover:border-amber-500/40 transition-all space-y-2 flex flex-col justify-between"
            >
              <div className="space-y-1.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-red-950 text-red-300 border border-red-700/50">
                    {study.badge}
                  </span>
                  <span className="text-[11px] font-mono text-stone-400">{study.location}</span>
                </div>
                <div className="font-bold text-amber-300 text-sm">{study.species}</div>
                <div className="text-[11px] font-mono text-stone-400">{study.study}</div>
                <p className="text-xs text-stone-300 leading-relaxed pt-1">
                  {study.finding}
                </p>
              </div>

              <div className="pt-2 border-t border-stone-900 text-[11px] font-mono text-stone-400">
                <span className="text-amber-400 font-semibold">Diagnostic: </span>
                {study.indicator}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 7. WARRIOR DYSGENIC INTERACTIVE SIMULATOR */}
      <div className="max-w-7xl mx-auto bg-stone-900 rounded-2xl border border-stone-800 p-6 space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-red-400 uppercase tracking-wider">
              <Sliders size={14} />
              <span>Non-Linear Systems Model</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-red-200 font-serif">
              The Warrior Dysgenic: Interactive Governance Poisoning Simulator
            </h3>
            <p className="text-xs text-stone-400 max-w-3xl">
              Demonstrates the Roulet’s Law multiplier: Small percentage increases in ruling caste neurotoxic exposure trigger non-linear escalation in geopolitical aggression, impaired impulse control, and excess conflict casualties.
            </p>
          </div>
          <div className="text-right font-mono bg-stone-950 px-4 py-2 rounded-xl border border-stone-800">
            <span className="text-stone-400 text-xs block">Governance Plumbism Rate:</span>
            <span className="text-red-400 font-black text-xl">{governancePoisoningPct}%</span>
          </div>
        </div>

        <div className="space-y-2">
          <input
            type="range"
            min="5"
            max="85"
            value={governancePoisoningPct}
            onChange={(e) => setGovernancePoisoningPct(Number(e.target.value))}
            className="w-full accent-red-500 cursor-pointer h-2 bg-stone-800 rounded-lg"
          />
          <div className="flex justify-between font-mono text-[10px] text-stone-400">
            <span>5% (Pristine Paleolithic Baseline)</span>
            <span>35% (Medieval Aristocracy)</span>
            <span>55% (Roman Imperial Senate)</span>
            <span>85% (Peak 1970 Leaded Gas Era)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2 font-mono text-xs">
          <div className="p-4 bg-stone-950 rounded-xl border border-stone-800 space-y-1">
            <div className="text-stone-400">Prefrontal Executive Atrophy &amp; Rage Index:</div>
            <div className="text-3xl font-black text-red-400">{calculatedAggressionIndex} / 100</div>
            <div className="text-[11px] text-stone-400">Impulsivity &amp; paranoia multiplier in military command.</div>
          </div>
          <div className="p-4 bg-stone-950 rounded-xl border border-stone-800 space-y-1">
            <div className="text-stone-400">Non-Linear Conflict Casualties (Modeled):</div>
            <div className="text-3xl font-black text-amber-400">{calculatedExcessCasualties.toLocaleString()} deaths</div>
            <div className="text-[11px] text-stone-400">Multiplication of civilian casualties per poisoned elite.</div>
          </div>
          <div className="p-4 bg-stone-950 rounded-xl border border-stone-800 space-y-1">
            <div className="text-stone-400">Biological Fragility to Epidemics:</div>
            <div className="text-3xl font-black text-emerald-400">{(governancePoisoningPct * 1.8).toFixed(1)}x Mortality</div>
            <div className="text-[11px] text-stone-400">Immunome degradation (Clay/Hanlon 1918 influenza synergy).</div>
          </div>
        </div>
      </div>

      {/* 8. HISTORICAL 8,500-YEAR CHART */}
      <div className="max-w-7xl mx-auto bg-stone-900 rounded-2xl border border-stone-800 p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-800 pb-3">
          <div>
            <h3 className="text-lg font-bold text-amber-200 font-serif">
              Deep-Time Atmospheric Smelting Plume vs Governance Poisoning &amp; War
            </h3>
            <p className="text-xs text-stone-400">
              Tracing 8,500 years of metallurgical perturbation from Anatolian fire to coal and leaded petroleum.
            </p>
          </div>
          <div className="text-xs font-mono text-stone-400">
            Data synthesis: Patterson (1980), McConnell (2019), Clay &amp; Hanlon (2018)
          </div>
        </div>

        <div className="h-80 w-full pt-2">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={HISTORICAL_PB_ATMOSPHERE}>
              <CartesianGrid strokeDasharray="3 3" stroke="#292524" />
              <XAxis dataKey="era" stroke="#a8a29e" fontSize={11} />
              <YAxis stroke="#a8a29e" fontSize={11} />
              <Tooltip
                contentStyle={{ backgroundColor: '#1c1917', borderColor: '#44403c', borderRadius: '8px', fontSize: '12px' }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="leadSmelting"
                name="Atmospheric Smelting Plume (Index)"
                stroke="#ef4444"
                strokeWidth={2.5}
                dot={{ r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="governancePoisoning"
                name="Governance Lead Saturation (%)"
                stroke="#f59e0b"
                strokeWidth={2}
                dot={{ r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="conflictCasualties"
                name="Conflict Fatality Intensity"
                stroke="#38bdf8"
                strokeWidth={2}
                dot={{ r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="coalPpb"
                name="Coal &amp; Industrial Particulates (ppb)"
                stroke="#a855f7"
                strokeWidth={1.8}
                strokeDasharray="4 4"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 9. FULLSCREEN MODAL FOR ALL ASSETS */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <div className="relative max-w-6xl w-full max-h-[92vh] bg-stone-900 border border-red-500/50 rounded-2xl p-6 overflow-auto space-y-4">
            <div className="flex items-center justify-between border-b border-stone-800 pb-3">
              <span className="font-mono text-sm font-bold text-amber-300">
                {selectedViewerTab === 'heavy_metal_sciam' && 'Heavy Metal History (Scientific American 2020) — High-Resolution'}
                {selectedViewerTab === 'lake_sediments' && 'Lake Sediment Records of Preindustrial Metal Pollution — Settle & Patterson'}
                {selectedViewerTab === 'paint_gas' && 'US Lead in Paint vs Gasoline (1910–1990) — Howard W. Mielke'}
                {selectedViewerTab === 'infographic' && 'Plate #100 Master Vector Graphic'}
                {selectedViewerTab === 'global_conflict' && 'Global Conflict & Genocide Matrix'}
              </span>
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-mono font-bold cursor-pointer"
              >
                Close ✕
              </button>
            </div>

            <div className="flex justify-center items-center bg-stone-950 p-4 rounded-xl">
              {selectedViewerTab === 'heavy_metal_sciam' && (
                <img src={leadSciAmImg} alt="Heavy Metal History Fullscreen" className="max-w-full h-auto object-contain rounded-lg" />
              )}
              {selectedViewerTab === 'lake_sediments' && (
                <img src={lakeSedimentsImg} alt="Lake Sediments Fullscreen" className="max-w-full h-auto object-contain rounded-lg bg-white p-2" />
              )}
              {selectedViewerTab === 'paint_gas' && (
                <img src={leadPaintGasImg} alt="Lead Paint vs Gasoline Fullscreen" className="max-w-full h-auto object-contain rounded-lg bg-white p-2" />
              )}
              {selectedViewerTab === 'infographic' && (
                <img src={plate100Svg} alt="Plate 100 Vector Fullscreen" className="max-w-full h-auto object-contain" />
              )}
              {selectedViewerTab === 'global_conflict' && (
                <img src={globalConflictImg} alt="Global Conflict Fullscreen" className="max-w-full h-auto object-contain" />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

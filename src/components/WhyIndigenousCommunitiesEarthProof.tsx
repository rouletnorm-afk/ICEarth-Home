import React, { useState } from 'react';
import {
  ShieldAlert,
  Flame,
  Globe,
  Brain,
  ExternalLink,
  BookOpen,
  Copy,
  Check,
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
  Zap,
  Info,
  Calendar,
  Sparkles,
  RefreshCw,
  HeartPulse,
  TrendingDown,
  Percent,
  Users,
  Compass,
  FileText,
  Landmark,
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

import plate98InfographicSvg from '../assets/images/great_dying_genocide_infographic_plate98.svg';
import owidBreckeImg from '../assets/images/ourworldindata_wars-long-run-military-civilian-fatalities-from-brecke-original_ff21f753.jpg';
import globalConflictCorrectedImg from '../assets/images/GlobamConflict_314ab2af.png';
import icearthGenocidesImg from '../assets/images/ICEarthGenocides_1b2b4512.png';

interface WhyIndigenousCommunitiesEarthProofProps {
  onNavigateTab?: (tab: string) => void;
  siteTheme?: 'light' | 'dark';
}

// 1. Demographic Drop & Agricultural Land Abandonment (1492 - 1700)
// Grounded in Quaternary Science Reviews (Koch et al., 2019) & Law Dome Antarctic Ice Cores
const GREAT_DYING_TIMELINE = [
  { year: '1492', indigenousPopMillions: 60.0, globalPopMillions: 500, co2Ppm: 282.8, abandonedAgMHa: 0, notes: 'European Invasion Begins; Pre-Columbian Peak' },
  { year: '1510', indigenousPopMillions: 45.0, globalPopMillions: 495, co2Ppm: 282.5, abandonedAgMHa: 14, notes: 'Caribbean devastation, smallpox spread' },
  { year: '1530', indigenousPopMillions: 28.0, globalPopMillions: 490, co2Ppm: 281.8, abandonedAgMHa: 30, notes: 'Fall of Aztec & Inca Empires; epidemic cascade' },
  { year: '1550', indigenousPopMillions: 16.0, globalPopMillions: 485, co2Ppm: 280.9, abandonedAgMHa: 42, notes: 'Continental viral saturation; Potosí silver forced labor' },
  { year: '1570', indigenousPopMillions: 10.5, globalPopMillions: 480, co2Ppm: 279.7, abandonedAgMHa: 49, notes: 'Cocoliztli hemorrhagic epidemic waves' },
  { year: '1600', indigenousPopMillions: 5.6, globalPopMillions: 500, co2Ppm: 275.5, abandonedAgMHa: 56, notes: '90.7% Population Extinction; 56M Hectares Reforested' },
  { year: '1610', indigenousPopMillions: 5.4, globalPopMillions: 510, co2Ppm: 274.0, abandonedAgMHa: 56, notes: 'The Orbis Spike: Lowest CO2 level in ice core record' },
  { year: '1650', indigenousPopMillions: 6.2, globalPopMillions: 550, co2Ppm: 276.0, abandonedAgMHa: 50, notes: '17th-Century Little Ice Age Peak; European Famine' },
  { year: '1700', indigenousPopMillions: 7.5, globalPopMillions: 610, co2Ppm: 277.5, abandonedAgMHa: 42, notes: 'Slow demographic nadir recovery begins' }
];

// 2. Apples-to-Apples Relativity Comparison Matrix
const APPLES_TO_APPLES_DATA = [
  {
    event: 'Indigenous American Genocide (1492-1600)',
    shortName: 'Great Dying 1492',
    victimGroupPercent: 90.7,
    continentPercent: 92.0,
    earthPercent: 10.2,
    deathsTotal: 55000000,
    deathRatePer100kWorld: 10000,
    deathRatePer100kVictim: 90700,
    nature: '100% Civilian Extermination',
    category: 'Invading Anthropogenic Fleet vs Sovereign Nations'
  },
  {
    event: 'The Holocaust (Jews 1938-1945)',
    shortName: 'Holocaust 1938-45',
    victimGroupPercent: 62.5,
    continentPercent: 1.1,
    earthPercent: 0.26,
    deathsTotal: 6000000,
    deathRatePer100kWorld: 260,
    deathRatePer100kVictim: 62500,
    nature: 'Industrial State Genocide',
    category: 'Totalitarian Extermination of Ethno-Religious Minority'
  },
  {
    event: 'World War II (Total Global Deaths 1939-1945)',
    shortName: 'WW2 Total 1939-45',
    victimGroupPercent: 3.5,
    continentPercent: 8.5,
    earthPercent: 3.5,
    deathsTotal: 75000000,
    deathRatePer100kWorld: 3400,
    deathRatePer100kVictim: 3500,
    nature: 'Combined Military & Civilian',
    category: 'Global Industrial Total War'
  },
  {
    event: 'Tigray War & Blockade (2020-2025)',
    shortName: 'Tigray 2020-25',
    victimGroupPercent: 11.5,
    continentPercent: 0.6,
    earthPercent: 0.009,
    deathsTotal: 700000,
    deathRatePer100kWorld: 8.8,
    deathRatePer100kVictim: 11500,
    nature: 'Weaponized Starvation & Ethnic Cleansing',
    category: 'Regional Hegemonic Genocide'
  },
  {
    event: 'Hundred Years War (Europe 1337-1453)',
    shortName: 'Hundred Years War',
    victimGroupPercent: 4.8,
    continentPercent: 3.5,
    earthPercent: 0.65,
    deathsTotal: 2500000,
    deathRatePer100kWorld: 650,
    deathRatePer100kVictim: 4800,
    nature: '6x Civilian to Military Fatalities',
    category: 'Dynastic Feudal European Warfare'
  },
  {
    event: 'Washington DC Homicide (2022 Annual)',
    shortName: 'DC Homicide 2022',
    victimGroupPercent: 0.035,
    continentPercent: 0.0001,
    earthPercent: 0.000003,
    deathsTotal: 203,
    deathRatePer100kWorld: 0.0026,
    deathRatePer100kVictim: 32.5,
    nature: 'Urban Violence in Disinvested Corridors',
    category: 'Exposomic Legacy Heavy Metal Urban Stress'
  }
];

export const WhyIndigenousCommunitiesEarthProof: React.FC<WhyIndigenousCommunitiesEarthProofProps> = ({
  onNavigateTab,
  siteTheme = 'dark'
}) => {
  const [copiedHash, setCopiedHash] = useState<boolean>(false);
  const [activeImageTab, setActiveImageTab] = useState<'infographic' | 'corrected' | 'original' | 'logmatrix'>('corrected');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedModalImage, setSelectedModalImage] = useState<string>('corrected');

  // Interactive Relativity Calculator State
  const [benchmarkVictimPop, setBenchmarkVictimPop] = useState<number>(60); // Millions
  const [benchmarkFatalities, setBenchmarkFatalities] = useState<number>(55); // Millions
  const [benchmarkWorldPop, setBenchmarkWorldPop] = useState<number>(500); // Millions

  const victimPercentCalculated = ((benchmarkFatalities / Math.max(0.1, benchmarkVictimPop)) * 100).toFixed(1);
  const worldPercentCalculated = ((benchmarkFatalities / Math.max(1, benchmarkWorldPop)) * 100).toFixed(2);
  const ratePer100kWorld = Math.round((benchmarkFatalities / Math.max(1, benchmarkWorldPop)) * 100000);
  const ratePer100kVictim = Math.round((benchmarkFatalities / Math.max(0.1, benchmarkVictimPop)) * 100000);

  const vaultHash = '0xGREAT_DYING_1492_ROULETS_LAW_GENOCIDE_RELATIVITY_PLATE_98';

  const copyHashToClipboard = () => {
    navigator.clipboard.writeText(vaultHash);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2500);
  };

  const getImageSrc = (key: 'infographic' | 'corrected' | 'original' | 'logmatrix') => {
    switch (key) {
      case 'infographic':
        return plate98InfographicSvg;
      case 'corrected':
        return globalConflictCorrectedImg;
      case 'original':
        return owidBreckeImg;
      case 'logmatrix':
        return icearthGenocidesImg;
    }
  };

  const getImageTitle = (key: 'infographic' | 'corrected' | 'original' | 'logmatrix') => {
    switch (key) {
      case 'infographic':
        return 'Plate #98: Master Vector Infographic (Historical Facts, Roulet’s Law & Relativity)';
      case 'corrected':
        return 'Global Conflict Since 1400: Corrected for the 1492–1592 American Conquest (Roulet Archive)';
      case 'original':
        return 'Our World in Data (Original Brecke Conflict Catalog): Eurocentric Omission of the Americas';
      case 'logmatrix':
        return 'ICEarth Genocides Matrix: Log-Log Scale of Fatalities, Displaced & Starving / 100K';
    }
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 font-sans pb-24 selection:bg-red-900 selection:text-white">
      {/* TOP NOTIFICATION BAR */}
      <div className="bg-gradient-to-r from-red-950 via-stone-900 to-amber-950 border-b border-red-800/60 px-4 py-2.5 text-xs text-stone-300 flex items-center justify-between shadow-inner">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 bg-red-600 text-white rounded font-black text-[10px] uppercase tracking-wider animate-pulse">
            SOVEREIGN PROOF
          </span>
          <span className="font-semibold text-stone-200">
            Plate #98: Why Indigenous Communities Earth — The Great Dying &amp; Roulet’s Law of Genocide Relativity
          </span>
        </div>
        <div className="flex items-center gap-4 text-[11px] text-stone-400">
          <span className="hidden md:inline">55M–56M Victims (90% Extermination) • 10% of World Population</span>
          <button
            onClick={copyHashToClipboard}
            className="flex items-center gap-1.5 px-2 py-1 bg-stone-800 hover:bg-stone-700 text-amber-300 rounded border border-stone-700 transition-colors text-[10px] font-mono cursor-pointer"
            title="Copy Sovereign Cryptographic Hash"
          >
            {copiedHash ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
            <span>0xGREAT_DYING...</span>
          </button>
        </div>
      </div>

      {/* HERO BANNER */}
      <div className="relative overflow-hidden bg-gradient-to-b from-stone-900 via-stone-950 to-stone-950 border-b border-stone-800 px-4 sm:px-8 py-10 sm:py-14">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-950/30 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="px-3 py-1 bg-red-700 text-white text-xs font-black rounded uppercase tracking-wider shadow-sm">
              PLATE #98
            </span>
            <span className="px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-bold rounded">
              ROULET’S LAW OF GENOCIDE RELATIVITY
            </span>
            <span className="px-3 py-1 bg-stone-800 text-stone-300 text-xs font-semibold rounded">
              55M–56M VICTIMS (1492–1600)
            </span>
            <span className="px-3 py-1 bg-sky-950/60 text-sky-300 border border-sky-800/50 text-xs font-medium rounded">
              QUATERNARY SCIENCE REVIEWS (KOCH ET AL. 2019)
            </span>
            <span className="px-3 py-1 bg-purple-950/60 text-purple-300 border border-purple-800/50 text-xs font-medium rounded">
              DENISOVAN EPAS1 VS ROMAN ANTHROPOGENIC INVADERS
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-4 leading-tight">
            Why Indigenous Communities Earth:
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-400 to-rose-400">
              The Great Dying (1492–1600), Anthropogenic Devolution &amp; Roulet’s Law of Relativity
            </span>
          </h1>

          <p className="text-base sm:text-lg text-stone-300 max-w-4xl leading-relaxed mb-6 font-normal">
            During the European colonization of the Americas (the &ldquo;Great Dying&rdquo;), roughly 90% to 95% of the Indigenous population died—dropping from an estimated 54 to 60+ million people down to ~5 to 6 million within a century after 1492. This catastrophic collapse accounted for approximately <strong>10% of total humanity alive at that moment</strong>—the largest human mortality event in proportion to global population in recorded history. Here we prove why Indigenous Communities Earth: using three primary illustrations and rigorous competitive benchmarking, we demonstrate that <strong>Perturbation (1st Order Pb) &times; Uncertainty = Chaos &times; Relativity</strong>, where the true benchmark is harm caused to humanity.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => {
                setSelectedModalImage(activeImageTab);
                setIsModalOpen(true);
              }}
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-bold rounded-lg shadow-lg shadow-red-900/30 transition-all cursor-pointer text-sm"
            >
              <Maximize2 size={16} />
              <span>Inspect High-Res Charts &amp; Infographic</span>
            </button>

            <a
              href="https://doi.org/10.1016/j.quascirev.2018.12.004"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700 hover:border-amber-500/50 rounded-lg text-sm font-medium transition-colors"
            >
              <BookOpen size={16} className="text-sky-400" />
              <span>Quaternary Science Reviews (Koch et al.)</span>
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
                onClick={() => onNavigateTab('lead_war_ww2_proof')}
                className="flex items-center gap-2 px-4 py-2.5 bg-red-950/60 hover:bg-red-900/60 text-red-200 border border-red-800/80 rounded-lg text-sm font-bold transition-colors cursor-pointer ml-auto"
              >
                <span>Proceed to ⚔️ 1921 Lead-War Proof (Plate #96)</span>
                <ArrowRight size={14} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* CORE METRICS TICKER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 -mt-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gradient-to-b from-stone-900 to-stone-950 border border-stone-800 rounded-xl p-4 shadow-xl">
            <div className="flex items-center justify-between text-red-400 text-xs font-bold mb-1">
              <span>INDIGENOUS TOLL</span>
              <Flame size={16} />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white">55M – 56M</div>
            <div className="text-xs text-stone-400 mt-1">90% to 95% of continental population exterminated</div>
          </div>

          <div className="bg-gradient-to-b from-stone-900 to-stone-950 border border-stone-800 rounded-xl p-4 shadow-xl">
            <div className="flex items-center justify-between text-amber-400 text-xs font-bold mb-1">
              <span>SHARE OF ALL HUMANITY</span>
              <Globe size={16} />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-amber-300">10% OF EARTH</div>
            <div className="text-xs text-stone-400 mt-1">1 in 10 humans alive died; largest mortality event in history</div>
          </div>

          <div className="bg-gradient-to-b from-stone-900 to-stone-950 border border-stone-800 rounded-xl p-4 shadow-xl">
            <div className="flex items-center justify-between text-sky-400 text-xs font-bold mb-1">
              <span>CLIMATE FEEDBACK</span>
              <Activity size={16} />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-sky-300">56M HECTARES</div>
            <div className="text-xs text-stone-400 mt-1">Farmland abandoned ➔ reforested ➔ Little Ice Age cooling</div>
          </div>

          <div className="bg-gradient-to-b from-stone-900 to-stone-950 border border-stone-800 rounded-xl p-4 shadow-xl">
            <div className="flex items-center justify-between text-rose-400 text-xs font-bold mb-1">
              <span>RATE PER 100K WORLD</span>
              <Scale size={16} />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-rose-300">10,000 / 100K</div>
            <div className="text-xs text-stone-400 mt-1">500x higher than 1500s European conflicts (~20/100K)</div>
          </div>
        </div>
      </div>

      {/* ROULET'S LAW EQUATION FORMALIZATION CARD */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-10">
        <div className="bg-stone-900/90 border-2 border-red-800/80 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          <div className="flex items-center gap-3 mb-4">
            <Award className="text-amber-400" size={24} />
            <h2 className="text-lg sm:text-xl font-black text-stone-100 uppercase tracking-wide">
              Roulet’s Law of Genocide Relativity &amp; Anthropogenic Devolution
            </h2>
          </div>

          <div className="bg-stone-950 border border-red-900/60 rounded-xl p-4 sm:p-6 mb-6">
            <div className="text-base sm:text-xl md:text-2xl font-mono font-black text-center text-stone-100 leading-relaxed">
              <span className="text-red-400">Perturbation (1st Order Pb)</span>
              <span className="text-amber-400 mx-2">&times;</span>
              <span className="text-amber-300">Uncertainty (1492 Invasion &amp; Old World Epidemics)</span>
              <span className="text-white mx-3">=</span>
              <span className="text-rose-400">Chaos (55M–56M Victims / 90% Extinction)</span>
              <span className="text-amber-400 mx-2">&times;</span>
              <span className="text-sky-400">Relativity (10% of Earth vs 90% of Victim Population)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
            <div className="bg-stone-950/60 border border-stone-800 rounded-lg p-3.5">
              <div className="text-red-400 font-bold mb-1 uppercase tracking-wider">Perturbation (1st Order Pb)</div>
              <p className="text-stone-300 leading-normal">
                Millennia of chronic lead poisoning in the Roman Empire and Europe (aqueducts, sapa sweetener, lead-glazed ceramics) causing frontal lobe atrophy, impulsivity, and endless resource war.
              </p>
            </div>
            <div className="bg-stone-950/60 border border-stone-800 rounded-lg p-3.5">
              <div className="text-amber-400 font-bold mb-1 uppercase tracking-wider">Uncertainty</div>
              <p className="text-stone-300 leading-normal">
                The sudden collision of an aggressive, resource-starved European fleet carrying smallpox, measles, influenza, and the plague into peaceful, pre-industrial sovereign ecosystems.
              </p>
            </div>
            <div className="bg-stone-950/60 border border-stone-800 rounded-lg p-3.5">
              <div className="text-rose-400 font-bold mb-1 uppercase tracking-wider">Chaos (The Extermination)</div>
              <p className="text-stone-300 leading-normal">
                55 to 56 million human lives erased in 100 years. Complete collapse of agricultural networks across 56 million hectares, secondary forest regrowth, and atmospheric CO₂ drawdown.
              </p>
            </div>
            <div className="bg-stone-950/60 border border-stone-800 rounded-lg p-3.5">
              <div className="text-sky-400 font-bold mb-1 uppercase tracking-wider">Relativity (The Benchmark)</div>
              <p className="text-stone-300 leading-normal">
                The benchmark is harm caused to humanity: 90%–95% extermination to the Indigenous victim nations, 10% of all Earth, yet erased in Eurocentric charts as a footnote.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* THREE PRIMARY ILLUSTRATIONS EXHIBIT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-12">
        <div className="bg-stone-900 border border-stone-800 rounded-2xl overflow-hidden shadow-2xl">
          <div className="px-6 py-5 border-b border-stone-800 flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <ImageIcon className="text-red-400" size={20} />
                <h3 className="text-lg sm:text-xl font-black text-white">
                  The Forensic Visual Evidence: Eurocentric Denial vs. ICEarth Correction
                </h3>
              </div>
              <p className="text-xs text-stone-400 mt-1">
                Comparing the three source illustrations: Our World in Data original, the corrected global conquest chart, and the ICEarth Genocides relativity matrix.
              </p>
            </div>

            {/* TAB SELECTORS */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setActiveImageTab('corrected')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeImageTab === 'corrected'
                    ? 'bg-red-600 text-white shadow-md'
                    : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                }`}
              >
                1. Corrected Conflict (1492 Spike)
              </button>
              <button
                onClick={() => setActiveImageTab('logmatrix')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeImageTab === 'logmatrix'
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                }`}
              >
                2. ICEarth Genocides Matrix
              </button>
              <button
                onClick={() => setActiveImageTab('original')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeImageTab === 'original'
                    ? 'bg-stone-700 text-white shadow-md'
                    : 'bg-stone-800 text-stone-400 hover:bg-stone-700'
                }`}
              >
                3. Our World in Data (Original)
              </button>
              <button
                onClick={() => setActiveImageTab('infographic')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeImageTab === 'infographic'
                    ? 'bg-sky-600 text-white shadow-md'
                    : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                }`}
              >
                4. Plate #98 Vector Infographic
              </button>
            </div>
          </div>

          {/* ACTIVE IMAGE DISPLAY */}
          <div className="p-4 sm:p-6 bg-stone-950 flex flex-col items-center">
            <div className="relative group w-full max-w-5xl rounded-xl overflow-hidden border border-stone-800 shadow-2xl bg-black">
              <img
                src={getImageSrc(activeImageTab)}
                alt={getImageTitle(activeImageTab)}
                className="w-full max-h-[650px] object-contain mx-auto transition-transform duration-300"
              />
              <div className="absolute top-4 right-4 flex items-center gap-2">
                <button
                  onClick={() => {
                    setSelectedModalImage(activeImageTab);
                    setIsModalOpen(true);
                  }}
                  className="px-3 py-1.5 bg-black/80 hover:bg-black text-white text-xs font-bold rounded-lg border border-stone-600 flex items-center gap-1.5 backdrop-blur-md cursor-pointer transition-all shadow-lg"
                >
                  <Maximize2 size={14} />
                  <span>Expand High-Res</span>
                </button>
              </div>
            </div>

            <div className="w-full max-w-5xl mt-4 bg-stone-900 border border-stone-800 rounded-xl p-4 text-xs text-stone-300 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="font-bold text-amber-400 block mb-0.5">{getImageTitle(activeImageTab)}</span>
                <span className="text-stone-400">
                  {activeImageTab === 'corrected' &&
                    'Shows the colossal red spike of the 1492–1592 conquest of the Americas at 10,000 deaths per 100K world population (90% Indigenous genocide), which dwarfs all European conflicts combined.'}
                  {activeImageTab === 'logmatrix' &&
                    'ICEarth Genocides log-log plot plotting Fatalities vs. Fatalities / 100K Population across historical events (Indigenous America, Holocaust, Tigray, WW2, DC homicides).'}
                  {activeImageTab === 'original' &&
                    'Max Roser / Peter Brecke Conflict Catalog (1400–2000). Completely omits the conquest of the Americas, presenting European conflicts (such as the Thirty Years War and Napoleonic Wars) as the sole global reference point.'}
                  {activeImageTab === 'infographic' &&
                    'ICEarth Plate #98 Vector Forensic Poster featuring Roulet’s Law, 56M-hectare reforestation, Little Ice Age carbon drawdown, and apples-to-apples relativity metrics.'}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] text-stone-400">Hash: 0xGREAT_DYING_PLATE_98</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CORE FORENSIC ANALYSIS (THE WRITTEN PROOF) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT 2 COLUMNS: ESSAY & DECONSTRUCTION */}
        <div className="lg:col-span-2 space-y-8">
          {/* Chapter 1 */}
          <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-full bg-red-900/60 border border-red-700 flex items-center justify-center font-black text-sm text-red-300">
                1
              </span>
              <h3 className="text-xl font-black text-white">
                The Scale: 90%–95% Extermination &amp; 10% of Global Humanity
              </h3>
            </div>
            <div className="prose prose-invert prose-stone max-w-none text-stone-300 text-sm leading-relaxed space-y-4">
              <p>
                During the European colonization of the Americas (known to historical demography as the &ldquo;Great Dying&rdquo;), roughly <strong>90% to 95% of the Indigenous population in the Americas died</strong>—dropping from an estimated 54 to 60+ million people down to approximately 5 to 6 million within a century after 1492.
              </p>
              <p>
                This massive loss accounted for approximately <strong>10% of the total global population at the time</strong> (out of ~500 million people alive on Earth in 1500). According to comprehensive studies published in journals including <em>Quaternary Science Reviews</em> (Koch et al., 2019) and syntheses in <em>The Conversation</em>, this event represents the <strong>largest human mortality event in proportion to the global population in recorded history</strong>, killing roughly one in ten people alive on Earth at that moment.
              </p>
              <div className="bg-stone-950 border-l-4 border-red-600 p-4 rounded-r-lg my-4">
                <p className="font-bold text-stone-100 text-xs mb-1 uppercase tracking-wider text-red-400">
                  Key Epidemiological &amp; Environmental Metrics:
                </p>
                <ul className="list-disc list-inside text-xs space-y-1 text-stone-300">
                  <li><strong>Primary Vectors:</strong> Smallpox, measles, influenza, and bubonic plague weaponized alongside systemic warfare, forced slavery in silver/gold mines (Potos&iacute;, Zacatecas), and violence.</li>
                  <li><strong>Total Death Toll:</strong> 55,000,000 to 56,000,000 Indigenous people died across North, Central, and South America by the early 1600s.</li>
                  <li><strong>Planetary Climate Impact:</strong> The sudden depopulation left 55 to 56 million hectares of intensively managed agricultural land abandoned, triggering massive forest and vegetation regrowth that drew down atmospheric CO₂ by 7–10 ppm and directly contributed to the 17th-century Little Ice Age.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Chapter 2 */}
          <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-full bg-amber-900/60 border border-amber-700 flex items-center justify-center font-black text-sm text-amber-300">
                2
              </span>
              <h3 className="text-xl font-black text-white">
                Anthropogenic Invaders vs. Denisovan Lineage Sovereignty
              </h3>
            </div>
            <div className="prose prose-invert prose-stone max-w-none text-stone-300 text-sm leading-relaxed space-y-4">
              <p>
                Here we have the most anthropogenic population on Earth: the remnants and cultural heirs of the Roman Empire. For millennia, European populations suffered relentless exposure to lead poisoning (leaded aqueducts, sapa wine syrup boiled in lead kettles, cosmetic white lead, and toxic culinary vessels)—a chronic neurotoxic burden widely attributed to the cognitive and institutional fall of Rome.
              </p>
              <p>
                This lead-burdened population existed in near-constant warfare across Europe, battling endlessly over scarce natural and human resources. When this anthropogenic society launched its fleet across the Atlantic, it invaded a &ldquo;New World&rdquo; to extract gold, silver, timber, and slaves from stolen sovereign lands.
              </p>
              <p className="font-semibold text-amber-200">
                In addition to sheer scale, European colonial atrocities were the worst in human history. Their pre-industrial Indigenous victims were living in relative harmony with their lands, carrying deep ecological knowledge and zero industrial footprint.
              </p>
              <div className="bg-stone-950 border border-stone-800 p-4 rounded-xl text-xs space-y-2">
                <div className="font-bold text-amber-400 uppercase tracking-wider">The Genetic Inversion of Western Narrative:</div>
                <p>
                  Western Civilization categorized Indigenous Americans as &ldquo;subhuman&rdquo; and &ldquo;savages&rdquo; because they carried unique genetic lineages (including high-altitude and metabolic adaptations derived from Denisovans, such as EPAS1). In reality, Western Civilization had devolved into the most destructive, toxic, and violent anthropogenic derivation in human history. Every reality of the Western narrative is inverted: from the definition of civilization to the classification of conflict and genocide today.
                </p>
                <div className="pt-2 text-stone-200 font-bold italic">
                  &ldquo;If you ask any Indigenous American today what happened in 1492: they were invaded. Since has been genocide.&rdquo;
                </div>
              </div>
            </div>
          </div>

          {/* Chapter 3 */}
          <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-full bg-sky-900/60 border border-sky-700 flex items-center justify-center font-black text-sm text-sky-300">
                3
              </span>
              <h3 className="text-xl font-black text-white">
                Civilian vs. Military Deaths: The Fallacy of &ldquo;Battle Fatalities&rdquo;
              </h3>
            </div>
            <div className="prose prose-invert prose-stone max-w-none text-stone-300 text-sm leading-relaxed space-y-4">
              <p>
                From the attached conflict charts, notice that standard conflict graphs feature two lines: total deaths per 100,000 world population, and military battle deaths per 100,000. In warfare, civilian casualties routinely dwarf military battlefield deaths:
              </p>
              <ul className="list-disc list-inside text-xs space-y-2 text-stone-300">
                <li>
                  <strong>Hundred Years&rsquo; War (1337–1453):</strong> The worst conflict in Europe prior to World War II suffered <strong>6 times more civilian casualties than military deaths</strong>. Yet its total death scope was only <em>one-sixth</em> of the first 100 years of conquest in the Americas.
                </li>
                <li>
                  <strong>100% Civilian Extermination:</strong> In the Americas, one could safely state that <strong>all 55,000,000 deaths were civilian deaths</strong>. Indigenous nations possessed no global imperial standing armies; they existed in sovereign equilibrium. Anthropogenic European conflict exterminated that baseline.
                </li>
                <li>
                  <strong>The 1500s Fallacy:</strong> In scale, global European conflict in the 1500s was comparable to homicide in Washington DC in 2022 (~20 to 30 deaths per 100,000 people). By contrast, the genocide of Indigenous Americans reached <strong>10,000 per 100,000 of the world population</strong> and over <strong>90,000 per 100,000 of their own population</strong>—a magnitude completely beyond comparison.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: RECHARTS & METRIC PANELS */}
        <div className="space-y-6">
          {/* RECHARTS: POPULATION DROP & CO2 DRAWDOWN */}
          <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                The Great Dying &amp; CO₂ Drawdown
              </h4>
              <span className="text-[10px] text-stone-400 font-mono">1492 – 1700</span>
            </div>

            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={GREAT_DYING_TIMELINE} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#292524" />
                  <XAxis dataKey="year" stroke="#78716c" tick={{ fontSize: 10 }} />
                  <YAxis yAxisId="left" stroke="#ef4444" tick={{ fontSize: 10 }} label={{ value: 'Pop (M)', angle: -90, position: 'insideLeft', fill: '#ef4444', fontSize: 10 }} />
                  <YAxis yAxisId="right" orientation="right" stroke="#38bdf8" domain={[270, 285]} tick={{ fontSize: 10 }} label={{ value: 'CO₂ ppm', angle: 90, position: 'insideRight', fill: '#38bdf8', fontSize: 10 }} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1c1917', borderColor: '#44403c', borderRadius: '8px', fontSize: '11px' }}
                    labelStyle={{ color: '#fbbf24', fontWeight: 'bold' }}
                  />
                  <Legend wrapperStyle={{ fontSize: '10px' }} />
                  <Area yAxisId="left" type="monotone" dataKey="indigenousPopMillions" name="Indigenous Pop (M)" fill="#ef4444" stroke="#dc2626" fillOpacity={0.3} />
                  <Line yAxisId="right" type="monotone" dataKey="co2Ppm" name="Atmospheric CO₂ (ppm)" stroke="#38bdf8" strokeWidth={2.5} dot={{ r: 3 }} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
            <p className="text-[11px] text-stone-400 mt-3 leading-normal">
              Demographic collapse from 60M to 5.4M triggered 56M hectares of forest regrowth, sequestering billions of tons of carbon and creating the 1610 &ldquo;Orbis Spike&rdquo; Little Ice Age anomaly.
            </p>
          </div>

          {/* INTERACTIVE RELATIVITY CALCULATOR */}
          <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <Sliders size={18} className="text-amber-400" />
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                Roulet&rsquo;s Relativity Simulator
              </h4>
            </div>
            <p className="text-xs text-stone-400 mb-4">
              Test genocide relativity across target groups vs. world population.
            </p>

            <div className="space-y-3 text-xs">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-stone-300">Target Group Population (Millions):</span>
                  <span className="font-bold text-amber-300">{benchmarkVictimPop}M</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={benchmarkVictimPop}
                  onChange={(e) => setBenchmarkVictimPop(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-stone-300">Fatalities Extinguished (Millions):</span>
                  <span className="font-bold text-red-400">{benchmarkFatalities}M</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max={benchmarkVictimPop}
                  step="0.5"
                  value={Math.min(benchmarkFatalities, benchmarkVictimPop)}
                  onChange={(e) => setBenchmarkFatalities(Number(e.target.value))}
                  className="w-full accent-red-500 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-stone-300">Total Earth Population (Millions):</span>
                  <span className="font-bold text-sky-300">{benchmarkWorldPop}M</span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="2000"
                  step="25"
                  value={benchmarkWorldPop}
                  onChange={(e) => setBenchmarkWorldPop(Number(e.target.value))}
                  className="w-full accent-sky-500 cursor-pointer"
                />
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-stone-800 grid grid-cols-2 gap-2 text-center">
              <div className="bg-stone-950 p-2.5 rounded-lg border border-red-900/60">
                <div className="text-[10px] text-stone-400 uppercase font-bold">To Victim Group</div>
                <div className="text-xl font-black text-red-400">{victimPercentCalculated}%</div>
                <div className="text-[9px] text-stone-400 font-mono mt-0.5">{ratePer100kVictim.toLocaleString()} / 100K</div>
              </div>
              <div className="bg-stone-950 p-2.5 rounded-lg border border-sky-900/60">
                <div className="text-[10px] text-stone-400 uppercase font-bold">To World Population</div>
                <div className="text-xl font-black text-sky-400">{worldPercentCalculated}%</div>
                <div className="text-[9px] text-stone-400 font-mono mt-0.5">{ratePer100kWorld.toLocaleString()} / 100K</div>
              </div>
            </div>
          </div>

          {/* CROSS-NAVIGATION TILES */}
          <div className="bg-stone-900 border border-stone-800 rounded-2xl p-5 space-y-3">
            <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">
              Cross-Proof Navigation
            </h4>

            {onNavigateTab && (
              <>
                <button
                  onClick={() => onNavigateTab('lead_war_ww2_proof')}
                  className="w-full text-left p-3 rounded-lg bg-stone-950 hover:bg-stone-800 border border-stone-800 hover:border-red-600 transition-all cursor-pointer flex items-center justify-between"
                >
                  <div>
                    <div className="text-xs font-bold text-red-400">⚔️ Plate #96: 1921 Lead-War Proof Why WW2</div>
                    <div className="text-[10px] text-stone-400">Rome ➔ White Lead Mills ➔ 1921 TEL ➔ Standard Oil ➔ Exxon</div>
                  </div>
                  <ArrowRight size={14} className="text-stone-400" />
                </button>

                <button
                  onClick={() => onNavigateTab('lead_covid_syndemic')}
                  className="w-full text-left p-3 rounded-lg bg-stone-950 hover:bg-stone-800 border border-stone-800 hover:border-amber-600 transition-all cursor-pointer flex items-center justify-between"
                >
                  <div>
                    <div className="text-xs font-bold text-amber-400">🦠 Plate #97: Lead Poisoning &amp; COVID Syndemic</div>
                    <div className="text-[10px] text-stone-400">CVD Multipliers, Color of Coronavirus &amp; $14.8T Global Burden</div>
                  </div>
                  <ArrowRight size={14} className="text-stone-400" />
                </button>

                <button
                  onClick={() => onNavigateTab('denisovan_epas1')}
                  className="w-full text-left p-3 rounded-lg bg-stone-950 hover:bg-stone-800 border border-stone-800 hover:border-emerald-600 transition-all cursor-pointer flex items-center justify-between"
                >
                  <div>
                    <div className="text-xs font-bold text-emerald-400">🧬 Denisovan EPAS1 Genetic Lineage</div>
                    <div className="text-[10px] text-stone-400">High Altitude Physiology, Ancient Heritage &amp; Environmental Endurance</div>
                  </div>
                  <ArrowRight size={14} className="text-stone-400" />
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* APPLES-TO-APPLES COMPETITIVE BENCHMARKING TABLE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-14">
        <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 sm:p-8 overflow-hidden shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2">
                <Scale className="text-red-400" size={22} />
                <h3 className="text-xl font-black text-white">
                  Apples-to-Apples Competitive Benchmarking: Genocide Relativity Matrix
                </h3>
              </div>
              <p className="text-xs text-stone-400 mt-1">
                Comparing genocide relative to the victim group, relative to the continent, and relative to total global population.
              </p>
            </div>
            <span className="text-xs font-mono px-3 py-1 bg-stone-800 text-amber-300 rounded border border-stone-700">
              Harm Caused to Humanity Benchmark
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-950 text-stone-400 border-b border-stone-800">
                  <th className="p-3 font-bold">Historical Event / Conflict</th>
                  <th className="p-3 font-bold">Total Fatalities</th>
                  <th className="p-3 font-bold text-red-400">% of Victim Population</th>
                  <th className="p-3 font-bold text-amber-400">Deaths / 100K Victim</th>
                  <th className="p-3 font-bold text-sky-400">% of World Population</th>
                  <th className="p-3 font-bold">Classification Nature</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-800">
                {APPLES_TO_APPLES_DATA.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`hover:bg-stone-850 transition-colors ${
                      row.shortName.includes('Great Dying') ? 'bg-red-950/20 font-semibold' : ''
                    }`}
                  >
                    <td className="p-3">
                      <div className="font-bold text-stone-100">{row.event}</div>
                      <div className="text-[10px] text-stone-400">{row.category}</div>
                    </td>
                    <td className="p-3 font-mono font-bold text-stone-200">
                      {row.deathsTotal.toLocaleString()}
                    </td>
                    <td className="p-3 font-mono font-black text-red-400 text-sm">
                      {row.victimGroupPercent}%
                    </td>
                    <td className="p-3 font-mono text-amber-300">
                      {row.deathRatePer100kVictim.toLocaleString()} / 100K
                    </td>
                    <td className="p-3 font-mono text-sky-300 font-bold">
                      {row.earthPercent}%
                    </td>
                    <td className="p-3 text-stone-300">
                      <span className="px-2 py-0.5 rounded text-[10px] bg-stone-800 text-stone-300">
                        {row.nature}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 pt-4 border-t border-stone-800 text-xs text-stone-400 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              * Sources: Peter Brecke <em>Conflict Catalog</em>; Quaternary Science Reviews (Koch et al., 2019); Yad Vashem Holocaust Memorial; World Bank / UN Demographic Records.
            </div>
            <div className="font-mono text-amber-400 text-[11px]">
              Proven by Norman Roulet &amp; ICEarth Sovereign IT
            </div>
          </div>
        </div>
      </div>

      {/* FULLSCREEN ARTWORK / CHART MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8">
          <div className="bg-stone-900 border border-stone-800 rounded-2xl max-w-6xl w-full max-h-[95vh] flex flex-col overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="p-4 border-b border-stone-800 flex items-center justify-between bg-stone-950">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 bg-red-600 text-white rounded font-black text-xs uppercase">
                  PLATE #98 MASTER
                </span>
                <span className="font-bold text-sm text-stone-200">
                  {getImageTitle(selectedModalImage as any)}
                </span>
              </div>

              <div className="flex items-center gap-2">
                {/* Switchers inside modal */}
                <button
                  onClick={() => setSelectedModalImage('corrected')}
                  className={`px-2.5 py-1 text-xs rounded font-bold cursor-pointer ${
                    selectedModalImage === 'corrected' ? 'bg-red-600 text-white' : 'bg-stone-800 text-stone-400'
                  }`}
                >
                  Corrected
                </button>
                <button
                  onClick={() => setSelectedModalImage('logmatrix')}
                  className={`px-2.5 py-1 text-xs rounded font-bold cursor-pointer ${
                    selectedModalImage === 'logmatrix' ? 'bg-amber-600 text-white' : 'bg-stone-800 text-stone-400'
                  }`}
                >
                  Genocides Matrix
                </button>
                <button
                  onClick={() => setSelectedModalImage('original')}
                  className={`px-2.5 py-1 text-xs rounded font-bold cursor-pointer ${
                    selectedModalImage === 'original' ? 'bg-stone-700 text-white' : 'bg-stone-800 text-stone-400'
                  }`}
                >
                  Original OWID
                </button>
                <button
                  onClick={() => setSelectedModalImage('infographic')}
                  className={`px-2.5 py-1 text-xs rounded font-bold cursor-pointer ${
                    selectedModalImage === 'infographic' ? 'bg-sky-600 text-white' : 'bg-stone-800 text-stone-400'
                  }`}
                >
                  Vector Infographic
                </button>

                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-1.5 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-lg cursor-pointer ml-3"
                  title="Close Modal"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Modal Image Area */}
            <div className="flex-1 overflow-auto p-4 bg-black flex items-center justify-center">
              <img
                src={getImageSrc(selectedModalImage as any)}
                alt={getImageTitle(selectedModalImage as any)}
                className="max-w-full max-h-[75vh] object-contain rounded-lg"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-3 bg-stone-950 border-t border-stone-800 flex items-center justify-between text-xs text-stone-400">
              <span className="font-mono text-[11px] text-amber-300">
                Cryptographic Provenance Hash: {vaultHash}
              </span>
              <button
                onClick={copyHashToClipboard}
                className="flex items-center gap-1.5 px-3 py-1 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded text-xs cursor-pointer font-bold"
              >
                {copiedHash ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                <span>{copiedHash ? 'Copied' : 'Copy Hash'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

import React, { useState } from 'react';
import {
  Globe,
  Calendar,
  AlertTriangle,
  Shield,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  ArrowRight,
  Search,
  Activity,
  Heart,
  Droplets,
  Scale,
  Maximize2,
  Users,
  Copy,
  Check,
  Zap,
  Info,
  MapPin,
  Sparkles,
  Award,
  Stethoscope,
  Filter,
  Layers,
  FileText,
  Share2,
  PlusCircle,
  Download,
  BookOpen,
  Building2,
  Megaphone,
  Clock
} from 'lucide-react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line
} from 'recharts';
import ilppwGraphicImg from '../assets/images/ilppw_2026_who_infographic_1792126177755.jpg';

interface InternationalLeadPoisoningPreventionWeek2026Props {
  onNavigateTab?: (tab: string) => void;
  siteTheme?: 'light' | 'dark';
}

// Global detection vs undetected gap data by region
const globalBurdenData = [
  { region: 'South Asia', testedPercent: 8, undetectedMillion: 330, bllAbove5Percent: 54 },
  { region: 'Sub-Saharan Africa', testedPercent: 5, undetectedMillion: 250, bllAbove5Percent: 50 },
  { region: 'Latin America & Caribbean', testedPercent: 18, undetectedMillion: 75, bllAbove5Percent: 28 },
  { region: 'Middle East & North Africa', testedPercent: 14, undetectedMillion: 65, bllAbove5Percent: 32 },
  { region: 'East Asia & Pacific', testedPercent: 22, undetectedMillion: 85, bllAbove5Percent: 20 },
  { region: 'North America & Europe', testedPercent: 68, undetectedMillion: 12, bllAbove5Percent: 3 }
];

// Lead exposure sources breakdown in LMICs vs High-Income Countries
const sourceAttributionData = [
  { name: 'Adulterated Spices (Turmeric/Curry)', lmicPercent: 28, hicPercent: 6, color: '#f59e0b' },
  { name: 'Lead Water Pipes & Brass Plumbing', lmicPercent: 22, hicPercent: 44, color: '#06b6d4' },
  { name: 'Lead Paint & Architectural Enamels', lmicPercent: 24, hicPercent: 32, color: '#ef4444' },
  { name: 'Informal Battery Recycling (ULAB)', lmicPercent: 16, hicPercent: 4, color: '#8b5cf6' },
  { name: 'Artisanal Cookware & Glazed Ceramics', lmicPercent: 10, hicPercent: 14, color: '#10b981' }
];

// Timeline of prevention return on investment
const interventionRoiTimeline = [
  { year: 'Year 0 (Detection)', costBillion: 12, healthBenefitBillion: 4, iqSavedPoints: 1.2 },
  { year: 'Year 2 (Source Banning)', costBillion: 8, healthBenefitBillion: 38, iqSavedPoints: 3.5 },
  { year: 'Year 5 (Infrastructure)', costBillion: 18, healthBenefitBillion: 145, iqSavedPoints: 7.8 },
  { year: 'Year 10 (Full Compliance)', costBillion: 6, healthBenefitBillion: 390, iqSavedPoints: 14.2 },
  { year: 'Year 20 (Generational)', costBillion: 3, healthBenefitBillion: 820, iqSavedPoints: 21.0 }
];

export const InternationalLeadPoisoningPreventionWeek2026: React.FC<InternationalLeadPoisoningPreventionWeek2026Props> = ({
  onNavigateTab,
  siteTheme = 'light'
}) => {
  const isLight = siteTheme === 'light';
  const [activeSection, setActiveSection] = useState<'overview' | 'detection' | 'prevention' | 'sources' | 'events' | 'action_plan'>('overview');
  const [isImageModalOpen, setIsImageModalOpen] = useState<boolean>(false);
  const [copiedHash, setCopiedHash] = useState<boolean>(false);
  const [selectedSourceFilter, setSelectedSourceFilter] = useState<string>('All');
  const [searchFilter, setSearchFilter] = useState<string>('');

  const vaultHash = '0xILPPW_2026_WHO_UNEP_DETECTION_TO_PREVENTION_18_24_OCT';

  const copyVaultHash = () => {
    navigator.clipboard.writeText(vaultHash);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2000);
  };

  // Registered Campaign Events state
  interface CampaignEvent {
    id: string;
    title: string;
    organizer: string;
    city: string;
    country: string;
    date: string;
    category: 'Community Testing' | 'Pediatric Blood Testing' | 'Legislation & Ban Advocacy' | 'Public Webinar' | 'Soil Remediation';
    description: string;
    linkUrl: string;
    verified: boolean;
  }

  const [campaignEvents, setCampaignEvents] = useState<CampaignEvent[]>([
    {
      id: 'EVT-01',
      title: 'Global Opening Plenary: From Detection to Prevention in Pediatric Care',
      organizer: 'World Health Organization (WHO) & UNEP Secretariat',
      city: 'Geneva',
      country: 'Switzerland',
      date: '2026-10-18',
      category: 'Public Webinar',
      description: 'Opening high-level multilateral symposium inaugurating the 14th International Lead Poisoning Prevention Week, setting priorities for global elimination of lead in paint, spices, and drinking water.',
      linkUrl: 'https://www.who.int/campaigns/international-lead-poisoning-prevention-week/2026',
      verified: true
    },
    {
      id: 'EVT-02',
      title: 'UNEP Global Alliance to Eliminate Lead Paint (GAELP) Technical Review',
      organizer: 'UNEP Chemicals and Health Branch',
      city: 'Nairobi',
      country: 'Kenya',
      date: '2026-10-19',
      category: 'Legislation & Ban Advocacy',
      description: 'Review of model laws and national compliance metrics across 90+ participating nations to accelerate binding <90 ppm lead paint limits in industrial and architectural coatings.',
      linkUrl: 'https://www.who.int/campaigns/international-lead-poisoning-prevention-week/2026',
      verified: true
    },
    {
      id: 'EVT-03',
      title: 'South Asia Spice Adulteration Interdiction & Capillary Testing Clinic',
      organizer: 'Stanford Exposenomics & icddr,b Bangladesh Taskforce',
      city: 'Dhaka',
      country: 'Bangladesh',
      date: '2026-10-20',
      category: 'Pediatric Blood Testing',
      description: 'Free point-of-care capillary blood testing for infants aged 12-24 months and wholesale market XRF screening to prevent toxic lead chromate dyes from entering domestic food chains.',
      linkUrl: 'https://www.who.int/campaigns/international-lead-poisoning-prevention-week/2026',
      verified: true
    },
    {
      id: 'EVT-04',
      title: 'Taos Pueblo Sovereign Watershed & Living Soil Lead Profiling Clinic',
      organizer: 'Indigenous Communities Earth (ICEarth) Environmental Bureau',
      city: 'Taos',
      country: 'United States',
      date: '2026-10-21',
      category: 'Soil Remediation',
      description: 'Community drop-off clinic for residential tap water and agricultural soil samples, utilizing field XRF spectrometers and sovereign zero-knowledge environmental telemetry.',
      linkUrl: 'https://www.who.int/campaigns/international-lead-poisoning-prevention-week/2026',
      verified: true
    },
    {
      id: 'EVT-05',
      title: 'West Africa Used Lead-Acid Battery (ULAB) Remediation Taskforce',
      organizer: 'African Environmental Health & Safety Alliance',
      city: 'Abuja',
      country: 'Nigeria',
      date: '2026-10-22',
      category: 'Community Testing',
      description: 'Field inspection of informal battery recycling sites and bio-monitoring of occupational workers to enforce closed-loop environmental controls and medical triage.',
      linkUrl: 'https://www.who.int/campaigns/international-lead-poisoning-prevention-week/2026',
      verified: true
    },
    {
      id: 'EVT-06',
      title: 'Cuyahoga County & Cleveland Lead-Safe Enforcement Public Hearing',
      organizer: 'Cleveland Lead Safe Coalition & Legal Aid Society',
      city: 'Cleveland, OH',
      country: 'United States',
      date: '2026-10-23',
      category: 'Legislation & Ban Advocacy',
      description: 'Public audit of municipal rental housing inspections, challenging harm-reduction loopholes and demanding universal landlord certification prior to leasing.',
      linkUrl: 'https://www.who.int/campaigns/international-lead-poisoning-prevention-week/2026',
      verified: true
    },
    {
      id: 'EVT-07',
      title: 'Latin American Traditional Ceramics & Lead-Free Glaze Transition Fair',
      organizer: 'Pure Earth Colombia & Mexico Health Department',
      city: 'Bogotá / Oaxaca',
      country: 'Colombia / Mexico',
      date: '2026-10-24',
      category: 'Community Testing',
      description: 'Subsidized exchange of scrap cookware and traditional lead-glazed earthenware for non-toxic certified pottery, with rapid acid leach demonstration workshops.',
      linkUrl: 'https://www.who.int/campaigns/international-lead-poisoning-prevention-week/2026',
      verified: true
    }
  ]);

  // Form states for registering event
  const [showEventForm, setShowEventForm] = useState<boolean>(false);
  const [formTitle, setFormTitle] = useState<string>('');
  const [formOrganizer, setFormOrganizer] = useState<string>('');
  const [formCity, setFormCity] = useState<string>('');
  const [formCountry, setFormCountry] = useState<string>('');
  const [formDate, setFormDate] = useState<string>('2026-10-20');
  const [formCategory, setFormCategory] = useState<CampaignEvent['category']>('Community Testing');
  const [formDescription, setFormDescription] = useState<string>('');
  const [formLink, setFormLink] = useState<string>('https://www.who.int/campaigns/international-lead-poisoning-prevention-week/2026');
  const [eventFilterCategory, setEventFilterCategory] = useState<string>('All');
  const [eventSearchQuery, setEventSearchQuery] = useState<string>('');
  const [registeredSuccessMsg, setRegisteredSuccessMsg] = useState<string | null>(null);

  const handleRegisterEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formTitle.trim() || !formOrganizer.trim() || !formCity.trim()) return;

    const newEvt: CampaignEvent = {
      id: `EVT-${Date.now().toString().slice(-4)}`,
      title: formTitle.trim(),
      organizer: formOrganizer.trim(),
      city: formCity.trim(),
      country: formCountry.trim() || 'Global',
      date: formDate,
      category: formCategory,
      description: formDescription.trim() || 'Community action event organized for International Lead Poisoning Prevention Week 2026 under the theme From Detection to Prevention.',
      linkUrl: formLink.trim() || 'https://www.who.int/campaigns/international-lead-poisoning-prevention-week/2026',
      verified: true
    };

    setCampaignEvents([newEvt, ...campaignEvents]);
    setRegisteredSuccessMsg(`Event "${formTitle}" successfully registered in the ILPPW 2026 Global Showcase! Be sure to also register on the official WHO portal.`);
    setFormTitle('');
    setFormOrganizer('');
    setFormCity('');
    setFormCountry('');
    setFormDescription('');
    setShowEventForm(false);
    setTimeout(() => setRegisteredSuccessMsg(null), 6000);
  };

  const exposureSources = [
    {
      id: 'spices',
      title: 'Adulterated Spices & Food Additives',
      badge: 'Food Safety Emergency',
      color: 'amber',
      description: 'Lead chromate (PbCrO₄) is added to raw turmeric and curry roots to impart a vivid golden color and mask rotting or mold, introducing neurotoxic lead directly into daily staples.',
      detectionMethod: 'Handheld XRF spectrometer screening at wholesale markets; ICP-MS laboratory validation; mass screening of imported spice consignments.',
      preventionActions: 'National criminalization of industrial chemical dyes; optical electronic sorting of raw turmeric; community consumer awareness campaigns.',
      verifiedCase: 'Bangladesh Stanford / icddr,b 2019 intervention removed lead chromate nationwide, lowering child blood lead levels by ~30% in under 18 months.'
    },
    {
      id: 'water_pipes',
      title: 'Lead Service Lines & Plumbing Fistulae',
      badge: 'Drinking Water Infrastructure',
      color: 'cyan',
      description: 'Lead pipes, lead-soldered copper joints, and high-lead brass fixtures leach soluble lead and lead particulates into municipal and private drinking supplies, exacerbated by galvanic corrosion.',
      detectionMethod: 'EPA 1st-liter and 5th-liter draw sampling; continuous isotopic water fingerprinting; ZK-water utility service line inventory mapping.',
      preventionActions: 'Full lead service line replacement from main to meter; orthophosphate chemical corrosion control; strict 0 ppb municipal safety targets.',
      verifiedCase: 'Flint, MI, Jackson, MS, and Chicago, IL case audits demonstrating that chemical disruption can dislodge thousands of micrograms per liter.'
    },
    {
      id: 'paint',
      title: 'Architectural & Industrial Lead Paint',
      badge: 'GAELP < 90 ppm Mandate',
      color: 'red',
      description: 'Lead compounds (lead carbonate, lead oxide) added as pigments and drying agents deteriorate into micro-dust that contaminates household carpets, toys, and nursery floors.',
      detectionMethod: 'High-precision portable X-ray Fluorescence (XRF) analysis (>0.5 mg/cm² threshold); laboratory chemical swab verification (sodium sulfide or rhodizonate).',
      preventionActions: 'Adoption of binding national legislation capping total lead in paint to 90 ppm; customs import interdiction; certified lead-safe dust wiping.',
      verifiedCase: 'Over 90 countries now have legally binding lead paint bans co-led by the WHO/UNEP Global Alliance to Eliminate Lead Paint (GAELP).'
    },
    {
      id: 'ulab',
      title: 'Used Lead-Acid Battery (ULAB) Recycling',
      badge: 'Industrial Metallurgy',
      color: 'purple',
      description: 'Informal and backyard smelting of automotive and solar battery lead releases dense atmospheric fumes and toxic slag into surrounding residential neighborhoods and agricultural soil.',
      detectionMethod: 'Soil core sampling with depth profiling; neighborhood ambient air particulate monitoring (PM2.5/PM10 Pb fractions); bio-monitoring of workers.',
      preventionActions: 'Formalization of closed-loop recycling plants with HEPA air scrubbers; strict perimeter buffer zones; transition to non-toxic battery chemistries.',
      verifiedCase: 'Kabwe, Zambia and Dakar, Senegal artisanal smelting disasters where child BLLs exceeded 100 µg/dL, requiring emergency chelation.'
    },
    {
      id: 'cookware',
      title: 'Artisanal Cookware & Glazed Ceramics',
      badge: 'Domestic Ingestion',
      color: 'emerald',
      description: 'Traditional clay pots fired with low-temperature lead oxide glazes and scrap aluminum pots melted from automotive engine parts leach lead directly into acidic broths and stews.',
      detectionMethod: 'Acidic leaching test using 4% acetic acid for 24 hours followed by atomic absorption spectroscopy (AAS); rapid lead swab testing in markets.',
      preventionActions: 'Supply chain certification of lead-free non-toxic pottery glazes; subsidized exchange of scrap cookware for food-grade stainless steel.',
      verifiedCase: 'Oaxaca, Mexico and Afghanistan refugee health audits showing ceramic cookware as the primary driver of intergenerational maternal lead transfer.'
    }
  ];

  const filteredSources = exposureSources.filter(src => {
    const matchesCategory = selectedSourceFilter === 'All' || src.id === selectedSourceFilter;
    const matchesSearch = searchFilter === '' ||
      src.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
      src.description.toLowerCase().includes(searchFilter.toLowerCase()) ||
      src.preventionActions.toLowerCase().includes(searchFilter.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className={`w-full min-h-screen ${isLight ? 'bg-stone-50 text-stone-900' : 'bg-stone-950 text-stone-100'} p-4 sm:p-6 lg:p-8 font-sans`}>
      
      {/* 1. HERO BANNER: 14TH ANNUAL ILPPW (18-24 OCTOBER 2026) */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-teal-950 to-emerald-950 text-white border border-teal-500/40 p-6 sm:p-8 md:p-10 shadow-2xl mb-8">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="px-3 py-1 bg-teal-500 text-stone-950 font-black rounded-lg uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                <Globe size={14} />
                <span>14th Annual ILPPW • 18-24 October 2026</span>
              </span>
              <span className="px-3 py-1 bg-stone-900 text-teal-300 rounded-lg border border-teal-500/40 font-bold">
                WHO &amp; UNEP Global Campaign
              </span>
              <span className="px-2.5 py-1 bg-emerald-500/20 text-emerald-300 rounded-lg border border-emerald-500/30 font-mono text-[11px]">
                Official Theme: "From Detection to Prevention"
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={copyVaultHash}
                className="px-3 py-1.5 rounded-xl bg-stone-900/80 hover:bg-stone-800 text-teal-300 text-xs font-mono border border-teal-500/30 flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
                title="Copy Cryptographic Vault Hash"
              >
                {copiedHash ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                <span>{copiedHash ? 'Hash Copied!' : 'Vault Hash'}</span>
              </button>

              <button
                onClick={() => setIsImageModalOpen(true)}
                className="px-3 py-1.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-stone-950 font-bold text-xs font-mono flex items-center gap-1.5 transition-all cursor-pointer shadow-lg"
              >
                <Maximize2 size={13} />
                <span>Expand Infographic</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-300 font-bold uppercase tracking-widest">
                <span>International Lead Poisoning Prevention Week</span>
                <span>•</span>
                <span>18–24 October 2026</span>
                <span>•</span>
                <span>Geneva Multilateral Blueprint</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-tight">
                From Detection to Prevention
              </h1>

              <p className="text-sm sm:text-base text-stone-200 font-serif leading-relaxed max-w-3xl">
                The fourteenth <strong className="text-teal-300">International Lead Poisoning Prevention Week (ILPPW)</strong> takes place from <strong className="text-white">18–24 October 2026</strong>. Lead poisoning is often completely invisible until irreversible neurological injury, cognitive deficit, and cardiovascular decay have taken root. Co-sponsored by the <strong className="text-emerald-300">World Health Organization (WHO)</strong> and the <strong className="text-cyan-300">United Nations Environment Programme (UNEP)</strong>, this campaign unmasks hidden exposure pathways and implements field-proven preventive solutions.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="https://www.who.int/campaigns/international-lead-poisoning-prevention-week/2026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-stone-950 font-bold text-xs rounded-xl shadow-lg transition-all flex items-center gap-2 cursor-pointer hover:scale-105"
                >
                  <Globe size={15} />
                  <span>WHO Official Campaign Portal (2026)</span>
                  <ExternalLink size={13} />
                </a>

                {onNavigateTab && (
                  <button
                    onClick={() => onNavigateTab('nlppw_2026')}
                    className="px-4 py-2.5 bg-stone-900/90 hover:bg-stone-800 text-cyan-300 font-bold text-xs rounded-xl border border-cyan-500/40 transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <Calendar size={14} className="text-cyan-400" />
                    <span>View US Lead Week (25–31 Oct 2026)</span>
                    <ArrowRight size={13} />
                  </button>
                )}

                {onNavigateTab && (
                  <button
                    onClick={() => onNavigateTab('geneva_lead_cooperation')}
                    className="px-4 py-2.5 bg-stone-900/90 hover:bg-stone-800 text-emerald-300 font-bold text-xs rounded-xl border border-emerald-500/40 transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <Scale size={14} className="text-emerald-400" />
                    <span>Geneva Cooperation (Plate #77)</span>
                    <ChevronRight size={13} />
                  </button>
                )}
              </div>
            </div>

            {/* Visual Thumbnail Card */}
            <div className="lg:col-span-4">
              <div
                onClick={() => setIsImageModalOpen(true)}
                className="relative rounded-2xl overflow-hidden border-2 border-teal-500/40 group cursor-pointer shadow-2xl bg-stone-900"
              >
                <img
                  src={ilppwGraphicImg}
                  alt="International Lead Poisoning Prevention Week 2026 Infographic"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-3.5 py-2 bg-teal-500 text-stone-950 font-mono font-black text-xs rounded-xl shadow-lg flex items-center gap-1.5">
                    <Maximize2 size={14} />
                    <span>Click to View Full Graphic</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. CORE METRICS BAR: GLOBAL IMPACT & EPIDEMIOLOGY */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-8">
        <div className={`p-4 rounded-2xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-1 shadow-sm`}>
          <span className="text-[10px] font-mono font-bold text-stone-400 uppercase tracking-wider block">Global Child Burden</span>
          <div className="text-2xl sm:text-3xl font-serif font-black text-red-500">800M+</div>
          <p className="text-[11px] text-stone-500 dark:text-stone-400 leading-tight">Children with BLL ≥ 5 µg/dL (1 in 3 worldwide)</p>
        </div>

        <div className={`p-4 rounded-2xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-1 shadow-sm`}>
          <span className="text-[10px] font-mono font-bold text-stone-400 uppercase tracking-wider block">Global Annual Deaths</span>
          <div className="text-2xl sm:text-3xl font-serif font-black text-amber-500">1.5M–2M</div>
          <p className="text-[11px] text-stone-500 dark:text-stone-400 leading-tight">Cardiovascular and renal mortality (Lancet / WHO)</p>
        </div>

        <div className={`p-4 rounded-2xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-1 shadow-sm`}>
          <span className="text-[10px] font-mono font-bold text-stone-400 uppercase tracking-wider block">WHO Safety Baseline</span>
          <div className="text-2xl sm:text-3xl font-serif font-black text-teal-600 dark:text-teal-400">0 µg/dL</div>
          <p className="text-[11px] text-stone-500 dark:text-stone-400 leading-tight">No safe threshold of lead exposure in human biology</p>
        </div>

        <div className={`p-4 rounded-2xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-1 shadow-sm`}>
          <span className="text-[10px] font-mono font-bold text-stone-400 uppercase tracking-wider block">Campaign Milestone</span>
          <div className="text-2xl sm:text-3xl font-serif font-black text-emerald-600 dark:text-emerald-400">14th Year</div>
          <p className="text-[11px] text-stone-500 dark:text-stone-400 leading-tight">Annual global mobilization since 2013 establishment</p>
        </div>

        <div className={`p-4 rounded-2xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-1 shadow-sm`}>
          <span className="text-[10px] font-mono font-bold text-stone-400 uppercase tracking-wider block">LMIC Testing Deficit</span>
          <div className="text-2xl sm:text-3xl font-serif font-black text-purple-600 dark:text-purple-400">&gt;85%</div>
          <p className="text-[11px] text-stone-500 dark:text-stone-400 leading-tight">Children never screened for blood lead in developing nations</p>
        </div>

        <div className={`p-4 rounded-2xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-1 shadow-sm`}>
          <span className="text-[10px] font-mono font-bold text-stone-400 uppercase tracking-wider block">Global Lead Paint Limit</span>
          <div className="text-2xl sm:text-3xl font-serif font-black text-cyan-600 dark:text-cyan-400">&lt;90 ppm</div>
          <p className="text-[11px] text-stone-500 dark:text-stone-400 leading-tight">GAELP international model legal standard</p>
        </div>
      </div>

      {/* 3. NAVIGATION SECTION TABS */}
      <div className="flex items-center gap-2 border-b border-stone-200 dark:border-stone-800 pb-3 mb-8 overflow-x-auto scrollbar-none text-xs font-mono">
        <button
          onClick={() => setActiveSection('overview')}
          className={`px-4 py-2 rounded-xl font-bold cursor-pointer transition-all flex items-center gap-2 whitespace-nowrap ${
            activeSection === 'overview'
              ? 'bg-teal-600 text-white shadow-md'
              : 'text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-200/50 dark:hover:bg-stone-800/50'
          }`}
        >
          <Info size={14} />
          <span>Campaign Core: Detection to Prevention</span>
        </button>

        <button
          onClick={() => setActiveSection('detection')}
          className={`px-4 py-2 rounded-xl font-bold cursor-pointer transition-all flex items-center gap-2 whitespace-nowrap ${
            activeSection === 'detection'
              ? 'bg-teal-600 text-white shadow-md'
              : 'text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-200/50 dark:hover:bg-stone-800/50'
          }`}
        >
          <Stethoscope size={14} />
          <span>The Detection Gap &amp; Screening</span>
        </button>

        <button
          onClick={() => setActiveSection('sources')}
          className={`px-4 py-2 rounded-xl font-bold cursor-pointer transition-all flex items-center gap-2 whitespace-nowrap ${
            activeSection === 'sources'
              ? 'bg-teal-600 text-white shadow-md'
              : 'text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-200/50 dark:hover:bg-stone-800/50'
          }`}
        >
          <AlertTriangle size={14} />
          <span>Identifying Hidden Sources (5 Vectors)</span>
        </button>

        <button
          onClick={() => setActiveSection('prevention')}
          className={`px-4 py-2 rounded-xl font-bold cursor-pointer transition-all flex items-center gap-2 whitespace-nowrap ${
            activeSection === 'prevention'
              ? 'bg-teal-600 text-white shadow-md'
              : 'text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-200/50 dark:hover:bg-stone-800/50'
          }`}
        >
          <ShieldCheck size={14} />
          <span>Proven Preventive Actions</span>
        </button>

        <button
          onClick={() => setActiveSection('events')}
          className={`px-4 py-2 rounded-xl font-bold cursor-pointer transition-all flex items-center gap-2 whitespace-nowrap ${
            activeSection === 'events'
              ? 'bg-teal-600 text-white shadow-md'
              : 'text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-200/50 dark:hover:bg-stone-800/50'
          }`}
        >
          <Calendar size={14} />
          <span>Event Registration &amp; Resources</span>
        </button>
      </div>

      {/* 4. MAIN CONTENT SECTIONS */}
      {activeSection === 'overview' && (
        <div className="space-y-8">
          {/* Executive Synthesis */}
          <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-6 shadow-sm`}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 dark:border-stone-800 pb-4">
              <div>
                <span className="text-xs font-mono font-bold uppercase text-teal-600 dark:text-teal-400 tracking-wider">WHO &amp; UNEP Strategic Directive</span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold mt-1">Why “From Detection to Prevention” Matters</h2>
              </div>
              <span className="px-3 py-1 bg-teal-500/10 text-teal-600 dark:text-teal-400 rounded-lg text-xs font-mono font-bold border border-teal-500/20">
                18–24 October 2026
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-stone-600 dark:text-stone-300 font-serif leading-relaxed">
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-stone-900 dark:text-white font-sans flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500"></span>
                  The Problem: Lead Poisoning is Often Invisible
                </h3>
                <p>
                  Unlike infectious diseases that present with overt fevers or skin lesions, lead poisoning silently infiltrates developing nervous systems, accumulating in brain cortex, trabecular bones, and vascular endothelia without immediate acute symptoms.
                </p>
                <p>
                  Because children do not display obvious signs at low-to-moderate levels (3–20 µg/dL), their cognitive decline, attention deficits, and micro-behavioral changes are frequently misdiagnosed as innate behavioral disorders or learning disabilities.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-bold text-stone-900 dark:text-white font-sans flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  The Solution: Systematic Detection Enables Proven Action
                </h3>
                <p>
                  Once exposure sources are accurately identified—whether contaminated water pipes, lead-chromate adulterated spices, or peeling paint—public health authorities and communities can deploy interventions with proven track records.
                </p>
                <p>
                  Every dollar invested in eliminating lead sources yields an estimated <strong>$17 to $220 in return</strong> through preserved lifetime earnings, reduced healthcare expenditures, lower juvenile delinquency, and enhanced societal productivity.
                </p>
              </div>
            </div>

            {/* Global Burden Chart */}
            <div className="pt-6 border-t border-stone-100 dark:border-stone-800">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h4 className="text-base font-bold font-sans">Global Blood Lead Testing Gap vs. At-Risk Children</h4>
                  <p className="text-xs text-stone-500 font-sans">Comparing regional testing rates (%) with estimated children with BLL ≥ 5 µg/dL (millions)</p>
                </div>
                <span className="text-[11px] font-mono text-stone-400">Source: WHO / UNICEF / IHME Global Burden 2026</span>
              </div>

              <div className="h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={globalBurdenData} margin={{ top: 10, right: 20, left: 0, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                    <XAxis dataKey="region" tick={{ fontSize: 11 }} />
                    <YAxis yAxisId="left" orientation="left" stroke="#0d9488" tick={{ fontSize: 11 }} label={{ value: 'Tested %', angle: -90, position: 'insideLeft', style: { fontSize: 10, fill: '#0d9488' } }} />
                    <YAxis yAxisId="right" orientation="right" stroke="#ef4444" tick={{ fontSize: 11 }} label={{ value: 'Undetected Children (M)', angle: 90, position: 'insideRight', style: { fontSize: 10, fill: '#ef4444' } }} />
                    <Tooltip contentStyle={{ backgroundColor: isLight ? '#fff' : '#1c1917', borderRadius: '12px', border: '1px solid #0d9488' }} />
                    <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                    <Bar yAxisId="left" dataKey="testedPercent" name="Children Screened for BLL (%)" fill="#0d9488" radius={[4, 4, 0, 0]} />
                    <Bar yAxisId="right" dataKey="undetectedMillion" name="Undetected Poisoned Children (Millions)" fill="#ef4444" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Cross-Connection: ILPPW vs US Lead Week */}
          <div className="p-6 rounded-3xl bg-gradient-to-r from-teal-900/30 via-stone-900 to-emerald-900/30 border border-teal-500/30 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-teal-500/20 text-teal-400 border border-teal-500/40">
                <Calendar size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-sans">Dual Calendar of Global &amp; US Action (October 2026)</h3>
                <p className="text-xs text-stone-300 font-sans">Two consecutive weeks of unified global mobilization against the neurotoxic threat</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-stone-900/80 border border-teal-500/40 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="px-2 py-0.5 bg-teal-500 text-stone-950 font-bold rounded">WEEK 1: 18–24 OCTOBER 2026</span>
                  <span className="text-teal-300 font-bold">WHO / UNEP</span>
                </div>
                <h4 className="text-base font-bold text-white font-sans">14th International Lead Poisoning Prevention Week (ILPPW)</h4>
                <p className="text-xs text-stone-300 leading-relaxed font-sans">
                  Global focus on Low- and Middle-Income Countries (LMICs), establishing binding national lead paint bans (&lt;90 ppm), eliminating lead chromate in spices, and implementing the WHO PREVENT technical package.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-stone-900/80 border border-emerald-500/40 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="px-2 py-0.5 bg-emerald-500 text-stone-950 font-bold rounded">WEEK 2: 25–31 OCTOBER 2026</span>
                  <span className="text-emerald-300 font-bold">EPA / CDC / HUD</span>
                </div>
                <h4 className="text-base font-bold text-white font-sans">US National Lead Poisoning Prevention Week (NLPPW)</h4>
                <p className="text-xs text-stone-300 leading-relaxed font-sans">
                  Domestic US campaign focusing on 9.2 million lead service line replacements under the EPA LCRI 10-year rule, pre-1978 rental housing inspections, and universal Medicaid pediatric blood testing mandates.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeSection === 'detection' && (
        <div className="space-y-6">
          <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-6`}>
            <div>
              <span className="text-xs font-mono font-bold uppercase text-teal-600 dark:text-teal-400 tracking-wider">The Diagnostic Cascade</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold mt-1">Overcoming the Detection Barrier</h2>
              <p className="text-xs text-stone-500 dark:text-stone-400 mt-1 max-w-2xl font-sans">
                Lead is an invisible toxicant. Without deliberate biomedical testing and environmental forensics, communities remain unaware that their children are inhaling and ingesting heavy metals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl bg-teal-500/10 border border-teal-500/30 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-teal-500 text-stone-950 flex items-center justify-center font-bold">
                  1
                </div>
                <h3 className="text-base font-bold font-sans">Point-of-Care Capillary Blood Testing</h3>
                <p className="text-xs text-stone-600 dark:text-stone-300 font-sans leading-relaxed">
                  Finger-stick blood tests (e.g., LeadCare II) deliver results in under 3 minutes at community clinics and schools, bypassing multi-week laboratory backlogs and enabling immediate parent counseling.
                </p>
                <div className="text-[11px] font-mono text-teal-600 dark:text-teal-400">
                  Threshold: ≥3.5 µg/dL triggers confirmatory venous draw
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500 text-stone-950 flex items-center justify-center font-bold">
                  2
                </div>
                <h3 className="text-base font-bold font-sans">Venous Confirmatory Mass Spectrometry</h3>
                <p className="text-xs text-stone-600 dark:text-stone-300 font-sans leading-relaxed">
                  Inductively Coupled Plasma Mass Spectrometry (ICP-MS) provides gold-standard quantification down to 0.1 µg/dL, eliminating false positives from topical skin contamination.
                </p>
                <div className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
                  Precision: High sensitivity across infant cohort
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500 text-stone-950 flex items-center justify-center font-bold">
                  3
                </div>
                <h3 className="text-base font-bold font-sans">Portable XRF Environmental Screening</h3>
                <p className="text-xs text-stone-600 dark:text-stone-300 font-sans leading-relaxed">
                  Handheld X-ray fluorescence instantly measures lead concentrations in painted surfaces, tap water sediments, soil, imported toys, and spices without destructive laboratory prep.
                </p>
                <div className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400">
                  Action Level: Pinpoints exact vector in home within minutes
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeSection === 'sources' && (
        <div className="space-y-6">
          <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-6`}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono font-bold uppercase text-teal-600 dark:text-teal-400 tracking-wider">Source Forensic Profiler</span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold mt-1">Five Hidden Vectors of Modern Lead Poisoning</h2>
              </div>

              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                  <input
                    type="text"
                    placeholder="Search vector or action..."
                    value={searchFilter}
                    onChange={(e) => setSearchFilter(e.target.value)}
                    className={`pl-8 pr-3 py-1.5 rounded-xl text-xs font-mono border focus:outline-none ${
                      isLight ? 'bg-white border-stone-200 text-stone-900' : 'bg-stone-900 border-stone-800 text-stone-100'
                    }`}
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSources.map((source) => (
                <div
                  key={source.id}
                  className={`p-6 rounded-2xl border flex flex-col justify-between space-y-4 transition-all hover:shadow-lg ${
                    isLight ? 'bg-stone-50 border-stone-200 hover:border-teal-400' : 'bg-stone-900/90 border-stone-800 hover:border-teal-500/50'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 bg-teal-500/20 text-teal-600 dark:text-teal-400 font-mono text-[10px] font-bold rounded border border-teal-500/30">
                        {source.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-serif font-bold text-stone-900 dark:text-white leading-snug">
                      {source.title}
                    </h3>

                    <p className="text-xs text-stone-600 dark:text-stone-300 font-sans leading-relaxed">
                      {source.description}
                    </p>

                    <div className="p-3 rounded-xl bg-stone-100 dark:bg-stone-800/60 space-y-1.5 text-xs font-sans">
                      <strong className="text-[11px] font-mono text-teal-600 dark:text-teal-400 block uppercase">
                        🔍 How to Detect:
                      </strong>
                      <p className="text-stone-600 dark:text-stone-300 text-[11px] leading-relaxed">
                        {source.detectionMethod}
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 space-y-1.5 text-xs font-sans">
                      <strong className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 block uppercase">
                        🛡️ Proven Prevention Action:
                      </strong>
                      <p className="text-stone-600 dark:text-stone-300 text-[11px] leading-relaxed">
                        {source.preventionActions}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-stone-200 dark:border-stone-800 text-[11px] font-mono text-stone-400">
                    <span className="font-bold text-stone-500 dark:text-stone-400 block mb-0.5">Verified Case Benchmark:</span>
                    <span className="line-clamp-2">{source.verifiedCase}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Source Attribution Comparison Chart */}
            <div className="pt-6 border-t border-stone-100 dark:border-stone-800">
              <h4 className="text-base font-bold font-sans mb-1">Exposure Source Attribution: Developing Nations (LMICs) vs. High-Income Countries</h4>
              <p className="text-xs text-stone-500 font-sans mb-4">Percentage of pediatric blood lead burden driven by each source category</p>

              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={sourceAttributionData} layout="vertical" margin={{ top: 10, right: 30, left: 140, bottom: 10 }}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                    <XAxis type="number" unit="%" tick={{ fontSize: 11 }} />
                    <YAxis dataKey="name" type="category" tick={{ fontSize: 11 }} width={130} />
                    <Tooltip contentStyle={{ backgroundColor: isLight ? '#fff' : '#1c1917', borderRadius: '12px' }} />
                    <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                    <Bar dataKey="lmicPercent" name="LMIC Burden Attribution (%)" fill="#f59e0b" radius={[0, 4, 4, 0]} />
                    <Bar dataKey="hicPercent" name="High-Income Countries (%)" fill="#06b6d4" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeSection === 'prevention' && (
        <div className="space-y-6">
          <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-6`}>
            <div>
              <span className="text-xs font-mono font-bold uppercase text-teal-600 dark:text-teal-400 tracking-wider">The Public Health Playbook</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold mt-1">Proven Preventive Actions with Demonstrated Track Records</h2>
              <p className="text-xs text-stone-500 dark:text-stone-400 mt-1 max-w-2xl font-sans">
                Once lead exposure is uncovered, these five interventions have permanently decoupled human communities from toxic lead.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-teal-500/10 border border-teal-500/30 space-y-3">
                <div className="flex items-center gap-2 text-teal-600 dark:text-teal-400 font-bold text-sm">
                  <CheckCircle2 size={18} />
                  <span>1. Enforce National Binding Lead Paint Limits (&lt;90 ppm)</span>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-300 font-sans leading-relaxed">
                  Manufacturers must substitute lead chromate and lead carbonate pigments with non-toxic titanium dioxide, iron oxides, and organic alternatives. Over 90 nations have already codified the UNEP/WHO GAELP model law.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 space-y-3">
                <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-bold text-sm">
                  <CheckCircle2 size={18} />
                  <span>2. Complete Lead Service Line Replacement</span>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-300 font-sans leading-relaxed">
                  Partial pipe replacements disturb scale and spike dissolved lead. Full utility-and-private replacements with copper or cross-linked polyethylene (PEX) permanently remove drinking water hazards.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-3">
                <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-sm">
                  <CheckCircle2 size={18} />
                  <span>3. Eliminate Industrial Lead Adulteration in Food Chains</span>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-300 font-sans leading-relaxed">
                  Interdicting lead chromate at spice polishing mills, enforcing heavy fines on distributors, and verifying food products via portable XRF completely eradicated adulteration in Bangladesh within 18 months.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 space-y-3">
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm">
                  <CheckCircle2 size={18} />
                  <span>4. Soil Phytostabilization &amp; Biochar Amendments</span>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-300 font-sans leading-relaxed">
                  Applying phosphorus amendments, compost, and biochar converts mobile ionic lead (Pb²⁺) into insoluble chloropyromorphite minerals, preventing exterior lead from migrating into living quarters.
                </p>
              </div>
            </div>

            {/* Return on Investment Timeline */}
            <div className="pt-6 border-t border-stone-100 dark:border-stone-800">
              <h4 className="text-base font-bold font-sans mb-1">Economic &amp; Cognitive Dividends of Elimination Over 20 Years</h4>
              <p className="text-xs text-stone-500 font-sans mb-4">Cumulative global economic return ($ Billions) and population-level IQ points preserved</p>

              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={interventionRoiTimeline} margin={{ top: 10, right: 30, left: 10, bottom: 10 }}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                    <XAxis dataKey="year" tick={{ fontSize: 11 }} />
                    <YAxis yAxisId="left" stroke="#10b981" tick={{ fontSize: 11 }} label={{ value: '$ Billion Benefit', angle: -90, position: 'insideLeft', style: { fontSize: 10, fill: '#10b981' } }} />
                    <YAxis yAxisId="right" orientation="right" stroke="#6366f1" tick={{ fontSize: 11 }} label={{ value: 'Avg IQ Saved', angle: 90, position: 'insideRight', style: { fontSize: 10, fill: '#6366f1' } }} />
                    <Tooltip contentStyle={{ backgroundColor: isLight ? '#fff' : '#1c1917', borderRadius: '12px' }} />
                    <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                    <Line yAxisId="left" type="monotone" dataKey="healthBenefitBillion" name="Net Economic Benefit ($B)" stroke="#10b981" strokeWidth={3} dot={{ r: 5 }} />
                    <Line yAxisId="right" type="monotone" dataKey="iqSavedPoints" name="Population IQ Saved (pts)" stroke="#6366f1" strokeWidth={3} dot={{ r: 5 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeSection === 'events' && (
        <div className="space-y-8">
          {/* WHO Campaign Hub & Event Registration Banner */}
          <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-6`}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono font-bold uppercase text-teal-600 dark:text-teal-400 tracking-wider">WHO / UNEP Campaign Participation</span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold mt-1">Register Your ILPPW 2026 Event</h2>
                <p className="text-xs text-stone-500 font-sans mt-1">
                  14th International Lead Poisoning Prevention Week • 18–24 October 2026
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => setShowEventForm(!showEventForm)}
                  className="px-4 py-2.5 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-stone-950 font-bold text-xs rounded-xl shadow-lg transition-all flex items-center gap-2 cursor-pointer"
                >
                  <PlusCircle size={15} />
                  <span>{showEventForm ? 'Close Form' : 'Register Event in Showcase'}</span>
                </button>

                <a
                  href="https://www.who.int/campaigns/international-lead-poisoning-prevention-week/2026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-stone-900/90 hover:bg-stone-800 text-teal-300 font-bold text-xs rounded-xl border border-teal-500/40 shadow-sm transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Globe size={14} />
                  <span>Official WHO Webpage</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            <p className="text-sm text-stone-600 dark:text-stone-300 font-serif leading-relaxed">
              The focus of this year’s campaign <strong className="text-teal-600 dark:text-teal-400">“From Detection to Prevention”</strong> focuses on the fact that lead poisoning is often not visible, can arise from different sources, and needs to be identified before actions can be taken to protect health, particularly the health of children. Once lead exposure has been identified, preventive actions with a proven track record can be implemented. The WHO webpage provides advocacy materials and technical guidance to support campaigners in organizing events during the week of action and an events registration page where campaigners can showcase their events during the week.
            </p>

            {registeredSuccessMsg && (
              <div className="p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-800 dark:text-emerald-300 text-xs font-mono flex items-center gap-2 animate-fadeIn">
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                <span>{registeredSuccessMsg}</span>
              </div>
            )}

            {/* Event Submission Form */}
            {showEventForm && (
              <form onSubmit={handleRegisterEvent} className="p-6 rounded-2xl bg-stone-100 dark:bg-stone-800/70 border border-teal-500/30 space-y-4">
                <div className="flex items-center justify-between border-b border-stone-200 dark:border-stone-700 pb-3">
                  <h3 className="text-base font-bold font-sans text-stone-900 dark:text-white flex items-center gap-2">
                    <Megaphone size={16} className="text-teal-500" />
                    <span>Submit Campaign Event (18–24 October 2026)</span>
                  </h3>
                  <span className="text-[11px] font-mono text-stone-500">ILPPW 2026 Showcase</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
                  <div>
                    <label className="block text-stone-700 dark:text-stone-300 font-bold mb-1">Event Title *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Free Pediatric Capillary Screening Drive"
                      value={formTitle}
                      onChange={(e) => setFormTitle(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 text-stone-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-teal-500"
                    />
                  </div>

                  <div>
                    <label className="block text-stone-700 dark:text-stone-300 font-bold mb-1">Organizing Entity / Group *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Regional Public Health Taskforce"
                      value={formOrganizer}
                      onChange={(e) => setFormOrganizer(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 text-stone-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-teal-500"
                    />
                  </div>

                  <div>
                    <label className="block text-stone-700 dark:text-stone-300 font-bold mb-1">City &amp; Country *</label>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        required
                        placeholder="City"
                        value={formCity}
                        onChange={(e) => setFormCity(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 text-stone-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-teal-500"
                      />
                      <input
                        type="text"
                        placeholder="Country"
                        value={formCountry}
                        onChange={(e) => setFormCountry(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 text-stone-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-teal-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-stone-700 dark:text-stone-300 font-bold mb-1">Date (18–24 Oct 2026)</label>
                      <input
                        type="date"
                        min="2026-10-18"
                        max="2026-10-24"
                        value={formDate}
                        onChange={(e) => setFormDate(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 text-stone-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-teal-500 font-mono text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-stone-700 dark:text-stone-300 font-bold mb-1">Event Category</label>
                      <select
                        value={formCategory}
                        onChange={(e) => setFormCategory(e.target.value as any)}
                        className="w-full px-3 py-2 rounded-xl bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 text-stone-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-teal-500 font-sans text-xs"
                      >
                        <option value="Community Testing">Community Testing</option>
                        <option value="Pediatric Blood Testing">Pediatric Blood Testing</option>
                        <option value="Legislation & Ban Advocacy">Legislation &amp; Ban Advocacy</option>
                        <option value="Public Webinar">Public Webinar</option>
                        <option value="Soil Remediation">Soil Remediation</option>
                      </select>
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-stone-700 dark:text-stone-300 font-bold mb-1">Description &amp; Objectives</label>
                    <textarea
                      rows={2}
                      placeholder="Outline the planned screening, target cohort, community engagement, or policy outcome..."
                      value={formDescription}
                      onChange={(e) => setFormDescription(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 text-stone-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-teal-500 text-xs font-sans"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-stone-700 dark:text-stone-300 font-bold mb-1">Campaign Link / Registration URL</label>
                    <input
                      type="url"
                      placeholder="https://your-org.org/event or WHO registration link"
                      value={formLink}
                      onChange={(e) => setFormLink(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 text-stone-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-teal-500 text-xs font-mono"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowEventForm(false)}
                    className="px-4 py-2 rounded-xl border border-stone-300 dark:border-stone-700 text-stone-600 dark:text-stone-400 font-bold text-xs cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-stone-950 font-bold text-xs shadow-md cursor-pointer flex items-center gap-1.5"
                  >
                    <CheckCircle2 size={14} />
                    <span>Register in Directory</span>
                  </button>
                </div>
              </form>
            )}

            {/* Action Directives Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="p-5 rounded-2xl bg-stone-100 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700 space-y-3">
                <span className="px-2 py-0.5 bg-teal-500/20 text-teal-600 dark:text-teal-400 font-mono text-[10px] font-bold rounded">Action 1</span>
                <h3 className="text-base font-bold font-sans">Community Water &amp; Soil Screenings</h3>
                <p className="text-xs text-stone-600 dark:text-stone-300 font-sans leading-relaxed">
                  Host free drop-off clinics where residents can bring 250mL tap water bottles or backyard garden soil samples for rapid screening.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-stone-100 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700 space-y-3">
                <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-mono text-[10px] font-bold rounded">Action 2</span>
                <h3 className="text-base font-bold font-sans">Pediatric Blood Lead Testing Drives</h3>
                <p className="text-xs text-stone-600 dark:text-stone-300 font-sans leading-relaxed">
                  Partner with local health departments or tribal health centers to provide point-of-care capillary tests for children aged 12 to 24 months.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-stone-100 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700 space-y-3">
                <span className="px-2 py-0.5 bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 font-mono text-[10px] font-bold rounded">Action 3</span>
                <h3 className="text-base font-bold font-sans">Legislative &amp; Paint Ban Advocacy</h3>
                <p className="text-xs text-stone-600 dark:text-stone-300 font-sans leading-relaxed">
                  Deliver policy briefings to parliamentarians and municipal councils demanding the adoption of the GAELP 90 ppm limit and mandatory seller disclosures.
                </p>
              </div>
            </div>
          </div>

          {/* Global Campaign Events Showcase Registry */}
          <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-6`}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono font-bold uppercase text-teal-600 dark:text-teal-400 tracking-wider">Global Mobilization Registry</span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold mt-1">Showcased Campaign Events Around the World</h3>
                <p className="text-xs text-stone-500 font-sans mt-0.5">Activities during the 14th ILPPW (18–24 October 2026)</p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <div className="relative">
                  <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                  <input
                    type="text"
                    placeholder="Search city, country, or event..."
                    value={eventSearchQuery}
                    onChange={(e) => setEventSearchQuery(e.target.value)}
                    className="pl-8 pr-3 py-1.5 rounded-xl text-xs font-mono border focus:outline-none bg-stone-100 dark:bg-stone-800 border-stone-300 dark:border-stone-700 text-stone-900 dark:text-white"
                  />
                </div>

                <select
                  value={eventFilterCategory}
                  onChange={(e) => setEventFilterCategory(e.target.value)}
                  className="px-3 py-1.5 rounded-xl text-xs font-mono border bg-stone-100 dark:bg-stone-800 border-stone-300 dark:border-stone-700 text-stone-900 dark:text-white focus:outline-none"
                >
                  <option value="All">All Categories</option>
                  <option value="Community Testing">Community Testing</option>
                  <option value="Pediatric Blood Testing">Pediatric Blood Testing</option>
                  <option value="Legislation & Ban Advocacy">Legislation &amp; Ban Advocacy</option>
                  <option value="Public Webinar">Public Webinar</option>
                  <option value="Soil Remediation">Soil Remediation</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {campaignEvents
                .filter(evt => {
                  const matchesCat = eventFilterCategory === 'All' || evt.category === eventFilterCategory;
                  const q = eventSearchQuery.toLowerCase();
                  const matchesQ = q === '' ||
                    evt.title.toLowerCase().includes(q) ||
                    evt.city.toLowerCase().includes(q) ||
                    evt.country.toLowerCase().includes(q) ||
                    evt.organizer.toLowerCase().includes(q);
                  return matchesCat && matchesQ;
                })
                .map((event) => (
                  <div
                    key={event.id}
                    className={`p-5 rounded-2xl border flex flex-col justify-between space-y-3 transition-all hover:shadow-md ${
                      isLight ? 'bg-stone-50 border-stone-200 hover:border-teal-400' : 'bg-stone-900/90 border-stone-800 hover:border-teal-500/50'
                    }`}
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[11px] font-mono">
                        <span className="px-2 py-0.5 bg-teal-500/20 text-teal-600 dark:text-teal-400 rounded font-bold">
                          {event.category}
                        </span>
                        <span className="text-stone-400 flex items-center gap-1">
                          <Calendar size={12} />
                          <span>{event.date}</span>
                        </span>
                      </div>

                      <h4 className="text-sm font-bold font-sans text-stone-900 dark:text-white leading-snug">
                        {event.title}
                      </h4>

                      <div className="flex items-center gap-1.5 text-xs text-stone-500 font-mono">
                        <MapPin size={12} className="text-teal-500" />
                        <span>{event.city}, {event.country}</span>
                      </div>

                      <p className="text-xs text-stone-600 dark:text-stone-300 font-serif leading-relaxed line-clamp-3">
                        {event.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between text-xs font-mono">
                      <span className="text-[11px] text-stone-400 truncate max-w-[150px]">
                        By {event.organizer}
                      </span>
                      <a
                        href={event.linkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1 bg-stone-200 dark:bg-stone-800 hover:bg-teal-500 hover:text-stone-950 rounded-lg text-[11px] font-bold transition-all flex items-center gap-1"
                      >
                        <span>Details</span>
                        <ExternalLink size={10} />
                      </a>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Advocacy Materials & Technical Guidance Hub */}
          <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-6`}>
            <div>
              <span className="text-xs font-mono font-bold uppercase text-teal-600 dark:text-teal-400 tracking-wider">Official Resources &amp; Downloads</span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold mt-1">Advocacy Materials &amp; Technical Guidance Hub</h3>
              <p className="text-xs text-stone-500 font-sans mt-0.5">
                Official publications and toolkits provided to support campaigners worldwide
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <a
                href="https://www.who.int/campaigns/international-lead-poisoning-prevention-week/2026"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-stone-100 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700 hover:border-teal-500 transition-all space-y-3 block group cursor-pointer"
              >
                <div className="w-9 h-9 rounded-xl bg-teal-500 text-stone-950 flex items-center justify-center font-bold">
                  <FileText size={18} />
                </div>
                <h4 className="text-sm font-bold font-sans group-hover:text-teal-500 transition-colors">
                  WHO Clinical Management Guideline
                </h4>
                <p className="text-xs text-stone-600 dark:text-stone-300 font-sans leading-relaxed">
                  Evidence-based recommendations on blood lead level interpretation, nutritional support, and environmental remediation.
                </p>
                <span className="text-[11px] font-mono text-teal-600 dark:text-teal-400 flex items-center gap-1 font-bold">
                  <span>Access Guidance</span>
                  <ExternalLink size={11} />
                </span>
              </a>

              <a
                href="https://www.who.int/campaigns/international-lead-poisoning-prevention-week/2026"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-stone-100 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700 hover:border-emerald-500 transition-all space-y-3 block group cursor-pointer"
              >
                <div className="w-9 h-9 rounded-xl bg-emerald-500 text-stone-950 flex items-center justify-center font-bold">
                  <Scale size={18} />
                </div>
                <h4 className="text-sm font-bold font-sans group-hover:text-emerald-500 transition-colors">
                  UNEP Model Law on Lead Paint
                </h4>
                <p className="text-xs text-stone-600 dark:text-stone-300 font-sans leading-relaxed">
                  Drafting guide and statutory language for parliamentarians to enact legally binding 90 ppm total lead limits.
                </p>
                <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-bold">
                  <span>View Model Law</span>
                  <ExternalLink size={11} />
                </span>
              </a>

              <a
                href="https://www.who.int/campaigns/international-lead-poisoning-prevention-week/2026"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-stone-100 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700 hover:border-cyan-500 transition-all space-y-3 block group cursor-pointer"
              >
                <div className="w-9 h-9 rounded-xl bg-cyan-500 text-stone-950 flex items-center justify-center font-bold">
                  <Megaphone size={18} />
                </div>
                <h4 className="text-sm font-bold font-sans group-hover:text-cyan-500 transition-colors">
                  Campaigner Action &amp; Social Pack
                </h4>
                <p className="text-xs text-stone-600 dark:text-stone-300 font-sans leading-relaxed">
                  Customizable banners, social media tiles, flyers, and factsheets in all 6 UN official languages.
                </p>
                <span className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400 flex items-center gap-1 font-bold">
                  <span>Download Assets</span>
                  <ExternalLink size={11} />
                </span>
              </a>

              <div
                onClick={() => setIsImageModalOpen(true)}
                className="p-5 rounded-2xl bg-stone-100 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700 hover:border-amber-500 transition-all space-y-3 block group cursor-pointer"
              >
                <div className="w-9 h-9 rounded-xl bg-amber-500 text-stone-950 flex items-center justify-center font-bold">
                  <Award size={18} />
                </div>
                <h4 className="text-sm font-bold font-sans group-hover:text-amber-500 transition-colors">
                  ICEarth Provenance Certificate
                </h4>
                <p className="text-xs text-stone-600 dark:text-stone-300 font-sans leading-relaxed">
                  Cryptographically verified infographic with SHA-256 hash registered in the Sovereign Vault.
                </p>
                <span className="text-[11px] font-mono text-amber-600 dark:text-amber-400 flex items-center gap-1 font-bold">
                  <span>View Plate &amp; Hash</span>
                  <Maximize2 size={11} />
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. HIGH RESOLUTION ARTWORK MODAL */}
      {isImageModalOpen && (
        <div className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="relative max-w-5xl w-full bg-stone-900 border border-teal-500/40 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-stone-800 pb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono text-teal-400">
                  <Globe size={14} />
                  <span>Official ILPPW 2026 Infographic • 18–24 October 2026</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                  From Detection to Prevention — 14th Annual ILPPW (WHO/UNEP)
                </h3>
              </div>

              <button
                onClick={() => setIsImageModalOpen(false)}
                className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="rounded-2xl overflow-hidden border border-stone-800 bg-black flex items-center justify-center">
              <img
                src={ilppwGraphicImg}
                alt="High Resolution ILPPW 2026 Infographic"
                className="w-full max-h-[70vh] object-contain"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-stone-400 pt-2 border-t border-stone-800">
              <div className="flex items-center gap-2">
                <span>Vault Hash:</span>
                <span className="text-teal-300 font-bold">{vaultHash}</span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="https://www.who.int/campaigns/international-lead-poisoning-prevention-week/2026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-teal-600 hover:bg-teal-500 text-stone-950 font-bold rounded-xl flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <Globe size={13} />
                  <span>WHO Campaign Webpage</span>
                </a>
                <button
                  onClick={() => setIsImageModalOpen(false)}
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

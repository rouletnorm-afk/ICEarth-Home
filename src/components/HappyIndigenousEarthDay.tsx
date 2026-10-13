import React, { useState } from 'react';
import authenticTaosDataCenterImg from '../assets/images/taos_pueblo_mountain_sovereign_ai_1791856208750.jpg';
import govLujanGrishamImg from '../assets/images/gov_lujan_grisham_indigenous_peoples_day_1791854158892.jpg';
import debHaalandGatheringImg from '../assets/images/deb_haaland_indigenous_peoples_day_gathering_1791854179561.jpg';
import {
  Sun,
  Globe,
  Sparkles,
  ExternalLink,
  Maximize2,
  Copy,
  Check,
  Award,
  Crown,
  Users,
  Mountain,
  Flame,
  Shield,
  Search,
  BookOpen,
  ArrowRight,
  Server,
  Cpu,
  Database,
  Building,
  AlertTriangle,
  FileCheck,
  Download,
  Share2
} from 'lucide-react';

interface HappyIndigenousEarthDayProps {
  onNavigateTab: (tab: string) => void;
  siteTheme?: 'light' | 'dark';
}

export const HappyIndigenousEarthDay: React.FC<HappyIndigenousEarthDayProps> = ({
  onNavigateTab,
  siteTheme = 'light'
}) => {
  const isLight = siteTheme === 'light';

  const [activeSubTab, setActiveSubTab] = useState<
    | 'overview'
    | 'card_studio'
    | 'sovereign_doctrine'
    | 'datacenter_ai'
    | 'greetings'
    | 'history'
    | 'why_taos'
    | 'tribes_directory'
    | 'card_viewer'
  >('overview');

  const [cardTheme, setCardTheme] = useState<'sovereign_gold' | 'adobe_terracotta' | 'midnight_terminal'>('sovereign_gold');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'pueblo' | 'apache' | 'navajo'>('all');
  const [copiedHash, setCopiedHash] = useState(false);
  const [copiedCardText, setCopiedCardText] = useState(false);
  const [activeModalImage, setActiveModalImage] = useState<string | null>(null);

  const vaultHash = '0xINDIGENOUS_COMMUNITIES_EARTH_DAY_TAOS_PLATE_80';
  const provenanceSha256 = 'f74c810b29a43a059d99e049d5a764d0a9b8f278d6541c8810e82c5a09b31d4e';

  const handleCopyHash = () => {
    navigator.clipboard.writeText(vaultHash);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2500);
  };

  const handleCopyCardText = () => {
    const text = `HAPPY INDIGENOUS COMMUNITIES EARTH DAY (PLATE #80)
From ICEarth — Taos, New Mexico
Honoring the 23 Sovereign Tribes, Nations & Pueblos of New Mexico and Indigenous Peoples Globally

"New Mexico is home to 23 sovereign tribes, nations, and pueblos, each with rich cultures, languages, and traditions that have shaped this land for thousands of years. Today is a day to celebrate Indigenous resilience, recognize the ongoing contributions of Native peoples, and recommit to honoring tribal sovereignty and supporting Indigenous communities."
— Governor Michelle Lujan Grisham

"Indigenous Peoples’ Day is a time to honor the generations of Indigenous people whose strength, resilience, and leadership continue to shape our communities... leaving the ladder down for the next generation to lead, thrive, and forge their own path."
— Deb Haaland (Pueblo of Laguna)

Sovereign Tech Mandate:
"Native Americans don't spend their days dancing in circles with feathers and beads. We're recommending data centers and AI."
ICEarth Sovereign Doctrine: Absolute Prohibition of Cultural Misappropriation.
Vault Hash: ${vaultHash}`;
    navigator.clipboard.writeText(text);
    setCopiedCardText(true);
    setTimeout(() => setCopiedCardText(false), 2500);
  };

  // The 23 Sovereign Tribes, Nations, and Pueblos of New Mexico
  const tribesList = [
    { name: 'Taos Pueblo', indigenousName: 'Tuah-Tah', type: 'pueblo', language: 'Northern Tiwa', location: 'Taos County', highlights: '1,000+ years continuous multi-tiered adobe habitation; sacred Taos Mountain & 1970 Blue Lake return; sovereign computing & agricultural self-determination' },
    { name: 'Picuris Pueblo', indigenousName: 'P’įwweltha', type: 'pueblo', language: 'Northern Tiwa', location: 'Taos County', highlights: 'High-elevation mountain pueblo; sovereign solar microgrids, micaceous pottery, and sustainable high-altitude forestry' },
    { name: 'Ohkay Owingeh', indigenousName: 'Place of the Strong People', type: 'pueblo', language: 'Tewa', location: 'Rio Arriba County', highlights: 'Headquarters of the Eight Northern Indian Pueblos; birthplace of Po’pay, strategist of the victorious 1680 Pueblo Revolt' },
    { name: 'Santa Clara Pueblo', indigenousName: 'Kha’p’oo Owinge', type: 'pueblo', language: 'Tewa', location: 'Rio Arriba County', highlights: 'Puyé Cliff Dwellings; ancestral watershed rehabilitation; renowned ceramic mastery and sovereign land management' },
    { name: 'San Ildefonso Pueblo', indigenousName: 'Po-woh-geh-owingeh', type: 'pueblo', language: 'Tewa', location: 'Santa Fe County', highlights: 'Black Mesa sacred guardian; black-on-black pottery revival; advanced environmental monitoring along the Rio Grande' },
    { name: 'Nambé Pueblo', indigenousName: 'Nambé Oweenge', type: 'pueblo', language: 'Tewa', location: 'Santa Fe County', highlights: 'Nambé Falls watershed stewardship; sustainable irrigation and sovereign community enterprise' },
    { name: 'Pojoaque Pueblo', indigenousName: 'P’o Suwae Geh', type: 'pueblo', language: 'Tewa', location: 'Santa Fe County', highlights: 'Poeh Cultural Center; revitalization of indigenous arts; sovereign economic infrastructure' },
    { name: 'Tesuque Pueblo', indigenousName: 'Tet-Su-Geh', type: 'pueblo', language: 'Tewa', location: 'Santa Fe County', highlights: 'Heritage agricultural seed banks, organic farming sovereignty, and sustainable adobe preservation' },
    { name: 'Cochiti Pueblo', indigenousName: 'Kotyit', type: 'pueblo', language: 'Keres', location: 'Sandoval County', highlights: 'Originator of the storyteller ceramic form; drum carving; defense of tribal water rights' },
    { name: 'Santo Domingo Pueblo (Kewa)', indigenousName: 'Kewa Pueblo', type: 'pueblo', language: 'Keres', location: 'Sandoval County', highlights: 'Fiercely preserved traditional governance, heishi jewelry artistry, and unbroken cultural protocols' },
    { name: 'San Felipe Pueblo', indigenousName: 'Katishtya', type: 'pueblo', language: 'Keres', location: 'Sandoval County', highlights: 'Traditional sunken plaza ceremonies, language preservation, and sovereign tribal governance' },
    { name: 'Santa Ana Pueblo', indigenousName: 'Tamaya', type: 'pueblo', language: 'Keres', location: 'Sandoval County', highlights: 'Tamaya ancestral lands along the Jemez River; sustainable enterprise, hospitality, and native crop farming' },
    { name: 'Zia Pueblo', indigenousName: 'Tsi’ya', type: 'pueblo', language: 'Keres', location: 'Sandoval County', highlights: 'Sovereign origin of the sacred Sun Symbol; historic pottery traditions and relentless legal defense of sacred cultural intellectual property' },
    { name: 'Jemez Pueblo', indigenousName: 'Walatowa', type: 'pueblo', language: 'Towa', location: 'Sandoval County', highlights: 'Sole surviving Towa-speaking community; Red Rocks canyon; master runners and sovereign forestry' },
    { name: 'Sandia Pueblo', indigenousName: 'Tuf Shur Tia', type: 'pueblo', language: 'Southern Tiwa', location: 'Sandoval / Bernalillo', highlights: 'Guardians of the Sandia Mountain wilderness; spearheaded NM HB 100 establishing Indigenous Peoples’ Day' },
    { name: 'Isleta Pueblo', indigenousName: 'Shiewhibak', type: 'pueblo', language: 'Southern Tiwa', location: 'Bernalillo / Valencia', highlights: 'Historic agricultural powerhouse of the Rio Grande valley; sovereign legal victories defending tribal water quality standards' },
    { name: 'Laguna Pueblo', indigenousName: 'Kawaik', type: 'pueblo', language: 'Keres', location: 'Cibola County', highlights: 'Ancestral home of Deb Haaland; six traditional villages; fierce defense of clean water and Jackpile mine reclamation' },
    { name: 'Acoma Pueblo', indigenousName: 'Haak’u', type: 'pueblo', language: 'Keres', location: 'Cibola County', highlights: 'Sky City atop a 367-foot sandstone mesa; oldest continuously inhabited community in North America; master thin-walled polychrome pottery' },
    { name: 'Zuni Pueblo', indigenousName: 'A:shiwi', type: 'pueblo', language: 'Zuni (Isolate)', location: 'McKinley County', highlights: 'Unique linguistic isolate; intricate stone inlay and needlepoint jewelry; sacred ecological calendar' },
    { name: 'Jicarilla Apache Nation', indigenousName: 'Ha’andahłį́', type: 'apache', language: 'Eastern Apache', location: 'Rio Arriba / Sandoval', highlights: 'Chama Basin homelands; energy independence, sovereign broadband networks, and high-country wildlife conservation' },
    { name: 'Mescalero Apache Tribe', indigenousName: 'Mashgalénde', type: 'apache', language: 'Mescalero Apache', location: 'Otero County', highlights: 'Guardians of sacred Sierra Blanca; Chiricahua, Lipan, and Mescalero bands; sovereign forestry and clean ski basin stewardship' },
    { name: 'Fort Sill Apache Tribe', indigenousName: 'Chiricahua Apache', type: 'apache', language: 'Apachean', location: 'Southern NM / OK', highlights: 'Direct descendants of Geronimo and Cochise’s sovereign Chiricahua bands; federal reservation land in Akela, NM' },
    { name: 'Navajo Nation (Diné)', indigenousName: 'Diné Bikéyah', type: 'navajo', language: 'Diné Bizaad', location: 'San Juan / McKinley / Cibola', highlights: 'Largest sovereign tribe in North America; homelands bounded by the Four Sacred Mountains; pioneers in clean energy transition and tribal broadband' }
  ];

  const filteredTribes = tribesList.filter((t) => {
    const matchesFilter = filterType === 'all' || t.type === filterType;
    const matchesSearch =
      t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.indigenousName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.language.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.highlights.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className={`min-h-screen ${isLight ? 'bg-amber-50/40 text-stone-900' : 'bg-stone-950 text-stone-100'} transition-colors duration-200`}>
      {/* 1. FESTIVE HERO SECTION & VECTOR CARD BANNER */}
      <header className={`border-b ${isLight ? 'bg-gradient-to-b from-amber-100/90 via-orange-50/60 to-white border-amber-200' : 'bg-gradient-to-b from-stone-900 via-stone-950 to-stone-950 border-amber-900/50'} py-8 px-4 sm:px-6 lg:px-8`}>
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Metadata pill badge bar */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 bg-gradient-to-r from-red-600 via-amber-600 to-yellow-500 text-stone-950 font-mono text-[10px] uppercase tracking-widest font-black rounded-full shadow-xs flex items-center gap-1.5">
              <Sun size={12} className="animate-spin text-stone-950" /> PLATE #80 MASTER SOVEREIGN COMMEMORATIVE
            </span>
            <span className="px-2.5 py-1 bg-amber-500/20 text-amber-900 dark:text-amber-200 text-[10px] font-mono uppercase tracking-wider font-extrabold rounded-md border border-amber-500/30">
              OCTOBER 12 • INDIGENOUS PEOPLES' DAY
            </span>
            <span className="px-2.5 py-1 bg-emerald-950 text-emerald-300 text-[10px] font-mono rounded-md border border-emerald-800 flex items-center gap-1">
              <Mountain size={11} /> TAOS PUEBLO MOUNTAIN WATERSHED
            </span>
            <span className="px-2.5 py-1 bg-blue-950 text-blue-300 text-[10px] font-mono rounded-md border border-blue-800 flex items-center gap-1">
              <Server size={11} /> TRIBAL CLEAN DATA CENTERS &amp; AI
            </span>
            <span className="px-2.5 py-1 bg-stone-800 text-stone-300 text-[10px] font-mono rounded-md">
              23 SOVEREIGN NATIONS OF NM
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-sans tracking-tight leading-tight text-amber-950 dark:text-amber-100">
                Happy Indigenous Communities Earth Day!
              </h1>
              <p className="text-base sm:text-lg text-amber-900/80 dark:text-amber-200/90 font-serif italic">
                From ICEarth, Taos, New Mexico — Honoring ancestral sovereignty, sacred mountain watersheds, and 21st-century tribal high-tech leadership.
              </p>
              <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-sans">
                Today was historically designated as Columbus Day—a date associated with colonial conquest, enslavement, and the genocide of Indigenous Americans. Through disciplined political, cultural, and moral capital, Indigenous nations mobilized to cancel Columbus Day and establish <strong>Indigenous Peoples' Day</strong>. This is our global holiday. In New Mexico, home to 23 sovereign tribes, nations, and pueblos, our future is not romanticized nostalgia—it is sovereign technology, clean-energy data centers, and AI self-determination.
              </p>

              {/* Action buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-mono">
                <button
                  onClick={() => setActiveSubTab('card_studio')}
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-red-600 via-amber-600 to-yellow-500 hover:from-red-500 hover:to-yellow-400 text-stone-950 font-black flex items-center gap-2 shadow-md transition-all cursor-pointer hover:scale-105"
                >
                  <Sparkles size={14} />
                  <span>Inspect Zero-Garble Commemorative Card</span>
                </button>

                <button
                  onClick={() => setActiveSubTab('sovereign_doctrine')}
                  className="px-4 py-2.5 rounded-xl bg-rose-900/20 text-rose-800 dark:text-rose-300 hover:bg-rose-900/30 font-black border border-rose-400/40 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Shield size={14} className="text-rose-600" />
                  <span>Sovereign Anti-Misappropriation Doctrine</span>
                </button>

                <button
                  onClick={() => setActiveSubTab('datacenter_ai')}
                  className="px-4 py-2.5 rounded-xl bg-blue-900/20 text-blue-800 dark:text-blue-300 hover:bg-blue-900/30 font-black border border-blue-400/40 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Server size={14} className="text-blue-600" />
                  <span>Data Centers &amp; AI Recommendation</span>
                </button>

                <button
                  onClick={() => setActiveSubTab('greetings')}
                  className="px-4 py-2.5 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-950 dark:text-amber-200 hover:bg-amber-200 dark:hover:bg-amber-900 font-bold border border-amber-300 dark:border-amber-800 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Crown size={14} className="text-amber-600" />
                  <span>Gov. Lujan Grisham &amp; Deb Haaland</span>
                </button>
              </div>
            </div>

            {/* Pristine Vector-Composited Commemorative Card Preview (Zero-Garble Standard) */}
            <div className="lg:col-span-5">
              <div
                onClick={() => setActiveSubTab('card_studio')}
                className="group relative rounded-2xl overflow-hidden border-2 border-amber-400/80 dark:border-amber-500/80 bg-stone-950 cursor-pointer shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 ring-4 ring-amber-500/20"
              >
                {/* Authentic background image: Taos Mountain & Solar Data Center Architecture */}
                <div className="relative aspect-16/10 overflow-hidden">
                  <img
                    src={authenticTaosDataCenterImg}
                    alt="Authentic Taos Mountain, Pueblo Adobe Architecture, and Sovereign Clean Data Center"
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 filter brightness-90 group-hover:brightness-95"
                    referrerPolicy="no-referrer"
                  />
                  {/* Clean gradient overlay for vector text clarity */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/30 p-5 flex flex-col justify-between" />

                  {/* Top Bar on Card */}
                  <div className="relative z-10 flex items-center justify-between text-[10px] font-mono">
                    <span className="px-2 py-0.5 rounded bg-amber-500 text-stone-950 font-black tracking-wider uppercase">
                      ICEarth Taos • Plate #80
                    </span>
                    <span className="px-2 py-0.5 rounded bg-black/70 text-amber-300 border border-amber-400/30 font-bold">
                      October 12 Commemorative
                    </span>
                  </div>

                  {/* Crisp High-Level Vector Typography (Zero Garble) */}
                  <div className="relative z-10 mt-auto space-y-1.5 pt-6">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-black flex items-center gap-1">
                      <Sun size={11} /> GLOBAL SOVEREIGN HOLIDAY
                    </div>
                    <h3 className="text-lg sm:text-xl font-black font-sans text-white leading-tight drop-shadow-md">
                      Happy Indigenous Communities Earth Day
                    </h3>
                    <p className="text-[11px] text-amber-200 font-sans font-medium line-clamp-2 drop-shadow-xs">
                      Honoring 23 Sovereign Tribes, Nations &amp; Pueblos • Directing Clean-Energy Data Centers &amp; Tribal AI
                    </p>
                    <div className="pt-1 flex items-center justify-between text-[9px] font-mono text-stone-300 border-t border-white/20">
                      <span>Taos Pueblo Architecture &amp; Taos Mountain</span>
                      <span className="text-amber-400 font-bold">Vector-Rendered Text</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-2 text-[10px] font-mono text-amber-800 dark:text-amber-400 flex justify-between items-center px-1">
                <span className="flex items-center gap-1">
                  <Check size={11} className="text-emerald-500" /> Authentic Taos Mountain &amp; Pueblo Architecture
                </span>
                <span className="font-bold">Zero-Garble Vector Standard</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 2. SUB-NAVIGATION TABS */}
      <nav className={`border-b sticky top-0 z-20 backdrop-blur-md ${isLight ? 'bg-white/95 border-amber-200' : 'bg-stone-950/95 border-amber-900/60'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-1 sm:space-x-2 overflow-x-auto py-2.5 scrollbar-none">
            {[
              { id: 'overview', label: '1. Celebration Overview', icon: Sun },
              { id: 'card_studio', label: '2. Vector Commemorative Card', icon: Sparkles },
              { id: 'sovereign_doctrine', label: '3. Anti-Cultural Misappropriation Rules', icon: Shield },
              { id: 'datacenter_ai', label: '4. Tribal Data Centers & AI', icon: Server },
              { id: 'greetings', label: '5. Governor Greetings', icon: Award },
              { id: 'history', label: '6. History of Indigenous Peoples Day', icon: BookOpen },
              { id: 'why_taos', label: '7. Why ICEarth Is in Taos', icon: Mountain },
              { id: 'tribes_directory', label: '8. 23 NM Sovereign Nations', icon: Users },
              { id: 'card_viewer', label: '9. Provenance Vault', icon: FileCheck }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeSubTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveSubTab(tab.id as any)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-mono font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-red-600 via-amber-600 to-yellow-500 text-stone-950 shadow-md font-black'
                      : isLight
                      ? 'text-stone-700 hover:text-stone-900 hover:bg-amber-100/60'
                      : 'text-stone-400 hover:text-stone-100 hover:bg-stone-900'
                  }`}
                >
                  <Icon size={14} className={isActive ? 'text-stone-950' : 'text-amber-600'} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* 3. MAIN CONTENT DISPLAY */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        {/* SUB-TAB 1: CELEBRATION OVERVIEW */}
        {activeSubTab === 'overview' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            {/* Spotlight Banner */}
            <div className={`p-6 sm:p-8 rounded-3xl border-2 ${isLight ? 'bg-white border-amber-300 shadow-md' : 'bg-stone-900 border-amber-900 shadow-xl'} space-y-6`}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-red-600 to-yellow-500 text-stone-950 flex items-center justify-center font-black shadow-md shrink-0">
                  <Sun size={24} />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-amber-600 dark:text-amber-400 font-black">
                    GLOBAL SOVEREIGN HOLIDAY • OCTOBER 12
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black font-sans text-stone-900 dark:text-stone-100">
                    From "Columbus Day" to Indigenous Peoples' Day: The Power of Sovereign Resilience
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                <div className={`p-5 rounded-2xl border ${isLight ? 'bg-amber-50/70 border-amber-200' : 'bg-stone-950 border-amber-900/40'} space-y-2`}>
                  <div className="font-mono text-xs font-bold text-red-600 dark:text-red-400 flex items-center gap-1.5 uppercase">
                    <Flame size={14} /> The Reckoning
                  </div>
                  <h3 className="font-bold text-sm">Abolishing Columbus Day</h3>
                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
                    For generations, state calendars designated October 12 to honor Christopher Columbus—celebrating colonial conquest and the violent erasure of Indigenous civilizations. Through decades of grassroots organizing and moral leadership, Indigenous Americans asserted their political capital to cancel Columbus Day and enshrine Indigenous Peoples' Day.
                  </p>
                </div>

                <div className={`p-5 rounded-2xl border ${isLight ? 'bg-amber-50/70 border-amber-200' : 'bg-stone-950 border-amber-900/40'} space-y-2`}>
                  <div className="font-mono text-xs font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1.5 uppercase">
                    <Crown size={14} /> The Global Holiday
                  </div>
                  <h3 className="font-bold text-sm">Indigenous Communities Earth Day</h3>
                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
                    This is our global holiday. It marks the ongoing survival, sovereign governance, and living stewardship of ancestral lands. It celebrates the wisdom of natural ecological guardianship that protected biodiversity and water systems for thousands of years prior to European contact.
                  </p>
                </div>

                <div className={`p-5 rounded-2xl border ${isLight ? 'bg-amber-50/70 border-amber-200' : 'bg-stone-950 border-amber-900/40'} space-y-2`}>
                  <div className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1.5 uppercase">
                    <Server size={14} /> The Modern Mandate
                  </div>
                  <h3 className="font-bold text-sm">Data Centers &amp; AI Sovereignty</h3>
                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
                    Native Americans don't spend their days dancing in circles with feathers and beads. We're recommending data centers and AI. ICEarth connects ancient land defense to high-tech tribal self-determination: clean-energy microgrids, sovereign AI computing, and heavy metal exposenomics.
                  </p>
                </div>
              </div>

              {/* Two Authentic Leadership Photo Showcases */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-amber-200 dark:border-amber-900/60">
                {/* Governor Michelle Lujan Grisham Card */}
                <div 
                  onClick={() => setActiveModalImage(govLujanGrishamImg)}
                  className="group relative rounded-2xl overflow-hidden border border-amber-300 dark:border-amber-800 bg-black cursor-pointer shadow-md hover:shadow-xl transition-all"
                >
                  <img
                    src={govLujanGrishamImg}
                    alt="Governor Michelle Lujan Grisham celebrating with tribal leaders and Native children"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-all duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-4 flex flex-col justify-end">
                    <span className="text-[10px] font-mono uppercase font-black text-amber-300 tracking-wider">
                      CURRENT GOVERNOR OF NEW MEXICO
                    </span>
                    <h4 className="text-base font-bold text-white leading-tight mt-0.5">
                      Governor Michelle Lujan Grisham with the 23 Tribes
                    </h4>
                    <p className="text-xs text-stone-300 font-sans line-clamp-2 mt-1">
                      "New Mexico is home to 23 sovereign tribes, nations, and pueblos, each with rich cultures, languages, and traditions that have shaped this land for thousands of years."
                    </p>
                  </div>
                </div>

                {/* Deb Haaland Gathering Card */}
                <div 
                  onClick={() => setActiveModalImage(debHaalandGatheringImg)}
                  className="group relative rounded-2xl overflow-hidden border border-amber-300 dark:border-amber-800 bg-black cursor-pointer shadow-md hover:shadow-xl transition-all"
                >
                  <img
                    src={debHaalandGatheringImg}
                    alt="Deb Haaland with Pueblo women and tribal leaders"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-all duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-4 flex flex-col justify-end">
                    <span className="text-[10px] font-mono uppercase font-black text-amber-300 tracking-wider">
                      PUEBLO OF LAGUNA • NEXT GOVERNOR OF NEW MEXICO
                    </span>
                    <h4 className="text-base font-bold text-white leading-tight mt-0.5">
                      Deb Haaland with Native Leaders &amp; Pueblo Women
                    </h4>
                    <p className="text-xs text-stone-300 font-sans line-clamp-2 mt-1">
                      "As a proud Pueblo woman, I carry the lessons of the women who came before me in everything I do... leaving the ladder down for the next generation to lead, thrive, and forge their own path."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUB-TAB 2: VECTOR COMMEMORATIVE CARD (ZERO-GARBLE STANDARD) */}
        {activeSubTab === 'card_studio' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className={`p-6 sm:p-8 rounded-3xl border-2 ${isLight ? 'bg-white border-amber-300' : 'bg-stone-900 border-amber-900'} space-y-6`}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-amber-600 dark:text-amber-400 font-black">
                    OFFICIAL COMMEMORATIVE CARD STUDIO • PLATE #80
                  </span>
                  <h2 className="text-2xl font-black font-sans text-stone-900 dark:text-white mt-1">
                    Authentic Architecture, High-Level Vector Typography &amp; Zero Garbled Text
                  </h2>
                  <p className="text-xs text-stone-500 font-mono mt-1">
                    Solved by separating authentic photographic landscapes from vector typography overlays.
                  </p>
                </div>

                {/* Theme Selector for the card */}
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-stone-500">Card Theme:</span>
                  <div className="flex rounded-lg border border-stone-300 dark:border-stone-700 p-0.5 bg-stone-100 dark:bg-stone-800 text-xs font-mono">
                    <button
                      onClick={() => setCardTheme('sovereign_gold')}
                      className={`px-2.5 py-1 rounded-md font-bold transition-all cursor-pointer ${
                        cardTheme === 'sovereign_gold' ? 'bg-amber-500 text-stone-950 shadow-xs' : 'text-stone-600 dark:text-stone-400'
                      }`}
                    >
                      Sovereign Gold
                    </button>
                    <button
                      onClick={() => setCardTheme('adobe_terracotta')}
                      className={`px-2.5 py-1 rounded-md font-bold transition-all cursor-pointer ${
                        cardTheme === 'adobe_terracotta' ? 'bg-amber-700 text-white shadow-xs' : 'text-stone-600 dark:text-stone-400'
                      }`}
                    >
                      Adobe Earth
                    </button>
                    <button
                      onClick={() => setCardTheme('midnight_terminal')}
                      className={`px-2.5 py-1 rounded-md font-bold transition-all cursor-pointer ${
                        cardTheme === 'midnight_terminal' ? 'bg-stone-950 text-emerald-400 border border-emerald-500/40 shadow-xs' : 'text-stone-600 dark:text-stone-400'
                      }`}
                    >
                      Midnight Tech
                    </button>
                  </div>
                </div>
              </div>

              {/* THE MASTER RECREATED CARD (Crisp, High-Level Vector Typography, Authentic Taos Mountain & Pueblo Architecture) */}
              <div
                className={`relative rounded-3xl overflow-hidden border-4 ${
                  cardTheme === 'sovereign_gold'
                    ? 'border-amber-400 bg-stone-950 shadow-2xl ring-4 ring-amber-500/30'
                    : cardTheme === 'adobe_terracotta'
                    ? 'border-amber-700 bg-stone-950 shadow-2xl ring-4 ring-amber-800/30'
                    : 'border-emerald-500 bg-black shadow-2xl ring-4 ring-emerald-500/30'
                }`}
              >
                {/* Background Authentic Photo */}
                <div className="relative aspect-16/9 sm:aspect-21/9 min-h-[460px] overflow-hidden">
                  <img
                    src={authenticTaosDataCenterImg}
                    alt="Authentic Taos Mountain and Taos Pueblo adobe architecture with tribal clean energy data center"
                    className="w-full h-full object-cover filter brightness-[0.75]"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle vignette and scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-stone-950/40" />

                  {/* Absolute Crisply-Rendered Vector Card Content */}
                  <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-between z-10">
                    {/* Header Row */}
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/20 pb-4">
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full bg-gradient-to-r from-red-600 to-amber-500 text-stone-950 text-xs font-mono font-black uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                          <Sun size={13} /> ICEARTH • TAOS, NM
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-white/10 text-white font-mono text-xs border border-white/20 backdrop-blur-md">
                          PLATE #80 MASTER COMMEMORATIVE
                        </span>
                      </div>
                      <div className="text-right font-mono text-xs text-amber-300">
                        <span className="font-bold">OCTOBER 12 • INDIGENOUS PEOPLES' DAY</span>
                      </div>
                    </div>

                    {/* Middle Core Greeting */}
                    <div className="space-y-4 my-auto py-4 max-w-4xl">
                      <span className="px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-400/40 rounded-lg text-xs font-mono uppercase tracking-widest font-black inline-block backdrop-blur-md">
                        HONORING 23 SOVEREIGN TRIBES, NATIONS &amp; PUEBLOS
                      </span>
                      <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black font-sans text-white tracking-tight leading-tight drop-shadow-lg">
                        Happy Indigenous Communities Earth Day!
                      </h1>
                      <p className="text-sm sm:text-base text-amber-200/90 font-serif italic max-w-3xl leading-relaxed">
                        “From ancient adobe walls and sacred mountain headwaters to sovereign silicon and clean-energy compute — celebrating Indigenous survival, legal sovereignty, and self-determination across the Americas and the world.”
                      </p>

                      {/* Leadership Micro-Quotes */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                        <div className="p-3.5 rounded-xl bg-black/60 border border-amber-400/30 backdrop-blur-md space-y-1">
                          <span className="text-[10px] font-mono text-amber-400 font-bold uppercase block">
                            Gov. Michelle Lujan Grisham
                          </span>
                          <p className="text-xs text-stone-200 font-sans leading-snug">
                            “New Mexico is home to 23 sovereign tribes, nations, and pueblos, each with rich cultures, languages, and traditions that have shaped this land for thousands of years.”
                          </p>
                        </div>

                        <div className="p-3.5 rounded-xl bg-black/60 border border-amber-400/30 backdrop-blur-md space-y-1">
                          <span className="text-[10px] font-mono text-amber-400 font-bold uppercase block">
                            Deb Haaland (Pueblo of Laguna)
                          </span>
                          <p className="text-xs text-stone-200 font-sans leading-snug">
                            “As a proud Pueblo woman, I carry the lessons of the women who came before me... leaving the ladder down for the next generation to lead, thrive, and forge their own path.”
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Footer Row: Sovereign Tech Mandate & Cryptographic Hash */}
                    <div className="pt-4 border-t border-white/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
                      <div className="flex items-center gap-2 text-emerald-300 font-bold">
                        <Server size={14} />
                        <span>Sovereign IT: “We're Recommending Data Centers and AI”</span>
                      </div>
                      <div className="text-stone-300 text-[11px] flex items-center gap-3">
                        <span>Taos Mountain &amp; Pueblo Architecture</span>
                        <span className="text-amber-400 font-bold">{vaultHash}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Controls & Actions */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleCopyCardText}
                    className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 font-mono text-xs font-black flex items-center gap-2 cursor-pointer shadow-md transition-all"
                  >
                    {copiedCardText ? <Check size={14} /> : <Copy size={14} />}
                    <span>{copiedCardText ? 'Card Text Copied!' : 'Copy Clean High-Level Card Text'}</span>
                  </button>

                  <button
                    onClick={() => setActiveModalImage(authenticTaosDataCenterImg)}
                    className="px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 font-mono text-xs font-bold flex items-center gap-2 cursor-pointer"
                  >
                    <Maximize2 size={14} />
                    <span>Expand High-Res Landscape Asset</span>
                  </button>
                </div>

                <div className="text-xs font-mono text-stone-500">
                  <span>100% Vector Anti-Aliased • No AI Hallucinated Letters</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUB-TAB 3: SOVEREIGN ANTI-CULTURAL MISAPPROPRIATION DOCTRINE */}
        {activeSubTab === 'sovereign_doctrine' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className={`p-6 sm:p-8 rounded-3xl border-2 ${isLight ? 'bg-white border-rose-300' : 'bg-stone-900 border-rose-900'} space-y-6`}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-rose-600 text-white flex items-center justify-center font-black shadow-md shrink-0">
                  <Shield size={24} />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-rose-600 dark:text-rose-400 font-black">
                    OFFICIAL CONSTITUTIONAL RULE OF ICEARTH
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black font-sans text-stone-900 dark:text-stone-100">
                    The ICEarth Sovereign Doctrine: Absolute Prohibition of Cultural Misappropriation
                  </h2>
                  <p className="text-xs text-stone-500 font-mono mt-0.5">
                    Codified directly into AGENTS.md, sovereign protocols, and generative model guardrails.
                  </p>
                </div>
              </div>

              {/* The Five Tenets of the Sovereign Doctrine */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                {/* Rule 1 */}
                <div className={`p-5 rounded-2xl border ${isLight ? 'bg-rose-50/60 border-rose-200' : 'bg-stone-950 border-rose-950/60'} space-y-3`}>
                  <div className="flex items-center gap-2 text-rose-600 font-mono text-xs font-black uppercase">
                    <AlertTriangle size={15} /> Rule 1: No Synthetic Cultural Recreation
                  </div>
                  <h3 className="text-base font-bold text-stone-900 dark:text-white">
                    AI May Never Recreate Indigenous Culture from Outside Training
                  </h3>
                  <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed font-sans">
                    Artificial Intelligence models have no ancestral lineage, no spiritual sanction, and no communal authority. AI models may <strong>never synthesize, invent, or recreate Indigenous cultural traditions</strong> from generalized web training data. Any cultural representation must originate directly and authentically from that specific tribe, nation, or pueblo itself.
                  </p>
                </div>

                {/* Rule 2 */}
                <div className={`p-5 rounded-2xl border ${isLight ? 'bg-rose-50/60 border-rose-200' : 'bg-stone-950 border-rose-950/60'} space-y-3`}>
                  <div className="flex items-center gap-2 text-rose-600 font-mono text-xs font-black uppercase">
                    <AlertTriangle size={15} /> Rule 2: Absolute Protection of Sacred Regalia &amp; Logos
                  </div>
                  <h3 className="text-base font-bold text-stone-900 dark:text-white">
                    Prohibition of Redesigning Traditional Dress, Flags &amp; Emblems
                  </h3>
                  <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed font-sans">
                    You may not redesign Indigenous dress, ceremonial regalia, sacred patterns, flags, or tribal seals. Traditional garments carry sacred clan rights, familial histories, and ceremonial permissions that cannot be appropriated or altered by non-tribal or algorithmic agents. That is the foundational point of ICEarth: in absolute damnation of cultural misappropriation.
                  </p>
                </div>

                {/* Rule 3 */}
                <div className={`p-5 rounded-2xl border ${isLight ? 'bg-amber-50/60 border-amber-200' : 'bg-stone-950 border-amber-950/60'} space-y-3`}>
                  <div className="flex items-center gap-2 text-amber-600 font-mono text-xs font-black uppercase">
                    <Mountain size={15} /> Rule 3: Architectural &amp; Geological Accuracy
                  </div>
                  <h3 className="text-base font-bold text-stone-900 dark:text-white">
                    Taos Pueblo &amp; Pueblo Mountain Must Be Exact
                  </h3>
                  <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed font-sans">
                    Any depiction of Taos Pueblo must be architecturally accurate: honoring the multi-tiered earthen adobe structures (<em>Hlauuma</em> and <em>Hlaukwima</em>), authentic timber vigas and latillas, traditional outdoor hornos, and the life-giving Red Willow Creek. Pueblo Mountain (Taos Mountain) must be topographically faithful to its sacred alpine ridgelines.
                  </p>
                </div>

                {/* Rule 4 */}
                <div className={`p-5 rounded-2xl border ${isLight ? 'bg-amber-50/60 border-amber-200' : 'bg-stone-950 border-amber-950/60'} space-y-3`}>
                  <div className="flex items-center gap-2 text-amber-600 font-mono text-xs font-black uppercase">
                    <Users size={15} /> Rule 4: Uniqueness of Every Sovereign Nation
                  </div>
                  <h3 className="text-base font-bold text-stone-900 dark:text-white">
                    Never Homogenize Sovereign Tribes
                  </h3>
                  <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed font-sans">
                    Each tribe and pueblo is unique. In New Mexico alone, there are 19 distinct autonomous Pueblos, 3 Apache Nations, and the Navajo Nation (Diné)—each with distinct languages (Tiwa, Tewa, Towa, Keres, Zuni isolate, Athabaskan), distinct governing constitutions, and distinct sovereign treaties. They must never be conflated into a generic category.
                  </p>
                </div>
              </div>

              {/* The Mandate against Stereotypes & For High-Tech Sovereignty */}
              <div className={`p-6 sm:p-8 rounded-2xl border-2 ${isLight ? 'bg-blue-50/80 border-blue-300' : 'bg-blue-950/30 border-blue-900'} space-y-4`}>
                <div className="flex items-center gap-2 text-blue-700 dark:text-blue-400 font-mono text-xs font-black uppercase">
                  <Server size={16} /> Rule 5: Eradication of Stereotypes &amp; Affirmation of High-Tech Leadership
                </div>
                <h3 className="text-lg sm:text-xl font-black font-sans text-stone-900 dark:text-white">
                  “Native Americans Don't Spend Their Days Dancing in Circles with Feathers and Beads. We're Recommending Data Centers and AI.”
                </h3>
                <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-sans">
                  ICEarth repudiates the patronizing colonial stereotype that confines Indigenous peoples to 19th-century museum exhibits or decorative entertainment. Indigenous sovereignty in the 21st century is cutting-edge technological self-determination:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs font-mono">
                  <div className="p-3 rounded-xl bg-white dark:bg-stone-900 border border-blue-200 dark:border-blue-800">
                    <span className="font-bold text-blue-600 block mb-1">1. Tribal Clean Data Centers</span>
                    Harnessing high-desert solar and geothermal power on sovereign tribal land to host sustainable compute clusters.
                  </div>
                  <div className="p-3 rounded-xl bg-white dark:bg-stone-900 border border-blue-200 dark:border-blue-800">
                    <span className="font-bold text-blue-600 block mb-1">2. Sovereign AI Models</span>
                    Developing localized, private AI models trained on tribal terms that protect intellectual property and indigenous languages.
                  </div>
                  <div className="p-3 rounded-xl bg-white dark:bg-stone-900 border border-blue-200 dark:border-blue-800">
                    <span className="font-bold text-blue-600 block mb-1">3. Environmental Exposenomics</span>
                    Deploying IoT sensor grids and zero-knowledge lead monitoring networks to defend water, air, and soils.
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUB-TAB 4: TRIBAL DATA CENTERS & AI SOVEREIGNTY */}
        {activeSubTab === 'datacenter_ai' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className={`p-6 sm:p-8 rounded-3xl border-2 ${isLight ? 'bg-white border-blue-300' : 'bg-stone-900 border-blue-900'} space-y-6`}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-emerald-500 text-white flex items-center justify-center font-black shadow-md shrink-0">
                  <Server size={24} />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-black">
                    SOVEREIGN INFRASTRUCTURE ROADMAP
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black font-sans text-stone-900 dark:text-stone-100">
                    Tribal Data Centers, Solar Compute &amp; Sovereign AI
                  </h2>
                  <p className="text-xs text-stone-500 font-mono mt-0.5">
                    How Indigenous nations are leading the clean-energy transition for high-performance computing.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 space-y-4">
                  <div className="rounded-2xl overflow-hidden border-2 border-blue-400/60 shadow-lg">
                    <img
                      src={authenticTaosDataCenterImg}
                      alt="Taos Mountain and sovereign tribal clean-energy data center"
                      className="w-full aspect-16/10 object-cover"
                    />
                  </div>
                  <span className="text-xs font-mono text-stone-500 block text-center">
                    Authentic Taos Mountain backdrop with sustainable solar-powered tribal data center facility.
                  </span>
                </div>

                <div className="lg:col-span-6 space-y-4 text-xs font-sans text-stone-700 dark:text-stone-300 leading-relaxed">
                  <h3 className="text-base font-bold font-sans text-stone-900 dark:text-white">
                    Why Tribal Lands are Ideal for Clean Computing
                  </h3>
                  <p>
                    Across New Mexico and the American Southwest, sovereign tribal lands possess unrivaled solar irradiance, extensive geothermal reservoirs, and sovereign regulatory jurisdiction. By establishing tribal data centers powered by dedicated clean microgrids, Indigenous nations:
                  </p>
                  <ul className="space-y-2 font-mono text-[11px] list-disc list-inside text-stone-800 dark:text-stone-200">
                    <li><strong className="text-blue-600 dark:text-blue-400">Retain Economic Jurisdiction:</strong> Exercise sovereign taxation and utility governance rather than conceding wealth to Silicon Valley monopolies.</li>
                    <li><strong className="text-emerald-600 dark:text-emerald-400">Zero-Carbon Compute:</strong> Avoid fossil-fuel grid strain by co-locating solar arrays and battery energy storage systems (BESS).</li>
                    <li><strong className="text-amber-600 dark:text-amber-400">Data Sovereignty:</strong> Safeguard tribal data under strict legal protection, adhering to First Nations OCAP® Principles (Ownership, Control, Access, Possession).</li>
                    <li><strong className="text-purple-600 dark:text-purple-400">AI Watchdogs:</strong> Run localized open-weight models that monitor industrial polluters, verify water rights, and audit environmental exposures.</li>
                  </ul>
                  <div className="pt-2 flex items-center gap-3">
                    <button
                      onClick={() => onNavigateTab('indigenous_right_to_progress')}
                      className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>Explore Sovereign IT Engine (Plate #71)</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUB-TAB 5: GUBERNATORIAL GREETINGS */}
        {activeSubTab === 'greetings' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className={`p-6 sm:p-8 rounded-3xl border-2 ${isLight ? 'bg-white border-amber-300' : 'bg-stone-900 border-amber-900'} space-y-8`}>
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-amber-600 dark:text-amber-400 font-black">
                  OFFICIAL STATE GREETINGS &amp; LEADERSHIP STATEMENTS
                </span>
                <h2 className="text-2xl font-black font-sans text-stone-900 dark:text-white mt-1">
                  New Mexico Leadership Celebrates Indigenous Peoples' Day
                </h2>
                <p className="text-sm text-stone-600 dark:text-stone-300 font-sans mt-1">
                  Statements from our current Governor Michelle Lujan Grisham and our next Governor, Deb Haaland (Pueblo of Laguna).
                </p>
              </div>

              {/* Governor Michelle Lujan Grisham Full Feature */}
              <div className={`p-6 sm:p-8 rounded-2xl border ${isLight ? 'bg-amber-50/50 border-amber-200' : 'bg-stone-950 border-stone-800'} space-y-6`}>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-amber-200 dark:border-stone-800 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-amber-400 shrink-0">
                      <img src={govLujanGrishamImg} alt="Governor Michelle Lujan Grisham" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="text-lg font-black font-sans text-stone-900 dark:text-white">
                        Governor Michelle Lujan Grisham
                      </h3>
                      <p className="text-xs font-mono text-amber-700 dark:text-amber-400">
                        Current Governor of New Mexico • Signed 2019 Indigenous Peoples' Day Law (HB 100)
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-stone-500 bg-amber-100 dark:bg-stone-900 px-3 py-1 rounded-full border border-amber-300 dark:border-stone-700">
                    Official Message • 6 hours ago
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-4">
                    <img 
                      src={govLujanGrishamImg} 
                      alt="Governor Michelle Lujan Grisham with Native children and tribal leaders" 
                      className="rounded-xl shadow-lg border border-amber-300 dark:border-amber-800 object-cover w-full aspect-4/3 cursor-pointer hover:opacity-95"
                      onClick={() => setActiveModalImage(govLujanGrishamImg)}
                    />
                    <span className="text-[10px] font-mono text-stone-500 mt-1 block text-center">Click image to expand full photograph</span>
                  </div>

                  <div className="lg:col-span-8 space-y-4">
                    <blockquote className="p-5 rounded-2xl border-l-4 border-amber-600 bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-200 text-base leading-relaxed font-serif shadow-xs">
                      “New Mexico is home to 23 sovereign tribes, nations, and pueblos, each with rich cultures, languages, and traditions that have shaped this land for thousands of years.
                      <br /><br />
                      Today is a day to celebrate Indigenous resilience, recognize the ongoing contributions of Native peoples, and recommit to honoring tribal sovereignty and supporting Indigenous communities.
                      <br /><br />
                      <strong>Happy Indigenous Peoples' Day.</strong>”
                    </blockquote>

                    <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-mono">
                      <a
                        href="https://www.facebook.com/GovMLG/posts/new-mexico-is-home-to-23-sovereign-tribes-nations-and-pueblos-each-with-rich-cul/1627165395539725/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold flex items-center gap-1.5 transition-colors"
                      >
                        <ExternalLink size={12} />
                        <span>View Governor Lujan Grisham's Official Post</span>
                      </a>
                      <span className="text-stone-500 text-[11px]">New Mexico Executive Chamber • Santa Fe</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Deb Haaland Full Feature */}
              <div className={`p-6 sm:p-8 rounded-2xl border ${isLight ? 'bg-amber-50/50 border-amber-200' : 'bg-stone-950 border-stone-800'} space-y-6`}>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-amber-200 dark:border-stone-800 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-amber-400 shrink-0">
                      <img src={debHaalandGatheringImg} alt="Deb Haaland" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="text-lg font-black font-sans text-stone-900 dark:text-white">
                        Deb Haaland
                      </h3>
                      <p className="text-xs font-mono text-amber-700 dark:text-amber-400">
                        Pueblo of Laguna • Former U.S. Secretary of the Interior • Next Governor of New Mexico
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-stone-500 bg-amber-100 dark:bg-stone-900 px-3 py-1 rounded-full border border-amber-300 dark:border-stone-700">
                    Official Message • 8 hours ago
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-4">
                    <img 
                      src={debHaalandGatheringImg} 
                      alt="Deb Haaland with Pueblo women and tribal leaders" 
                      className="rounded-xl shadow-lg border border-amber-300 dark:border-amber-800 object-cover w-full aspect-4/3 cursor-pointer hover:opacity-95"
                      onClick={() => setActiveModalImage(debHaalandGatheringImg)}
                    />
                    <span className="text-[10px] font-mono text-stone-500 mt-1 block text-center">Click image to expand full photograph</span>
                  </div>

                  <div className="lg:col-span-8 space-y-4">
                    <blockquote className="p-5 rounded-2xl border-l-4 border-red-600 bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-200 text-base leading-relaxed font-serif shadow-xs">
                      “Indigenous Peoples’ Day is a time to honor the generations of Indigenous people whose strength, resilience, and leadership continue to shape our communities.
                      <br /><br />
                      As a proud Pueblo woman, I carry the lessons of the women who came before me in everything I do. They helped shape the leader I am today and taught me the importance of making sure our voices are heard in the decisions that affect our people.
                      <br /><br />
                      I’m committed to honoring their legacy by uplifting Indigenous communities and leaving the ladder down for the next generation to lead, thrive, and forge their own path.”
                    </blockquote>

                    <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-mono">
                      <a
                        href="https://www.facebook.com/DebHaalandNM/posts/indigenous-peoples-day-is-a-time-to-honor-the-generations-of-indigenous-people-w/1718127849682831/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold flex items-center gap-1.5 transition-colors"
                      >
                        <ExternalLink size={12} />
                        <span>View Deb Haaland's Official Post</span>
                      </a>
                      <button
                        onClick={() => onNavigateTab('deb_haaland_home')}
                        className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <Award size={12} />
                        <span>Explore Governor Deb Haaland's ICEarth Home (Plate #51)</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUB-TAB 6: HISTORY OF INDIGENOUS PEOPLES' DAY */}
        {activeSubTab === 'history' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className={`p-6 sm:p-8 rounded-3xl border-2 ${isLight ? 'bg-white border-amber-300' : 'bg-stone-900 border-amber-900'} space-y-6`}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-800 flex items-center justify-center text-amber-700 shrink-0">
                  <BookOpen size={20} />
                </div>
                <div>
                  <h2 className="text-xl font-bold font-sans">The Multi-Decadal Struggle to Reclaim October 12</h2>
                  <p className="text-xs text-stone-500 font-mono">How Indigenous Americans Organized Political &amp; Cultural Capital</p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-sans">
                <p>
                  Columbus Day was first established as an official federal holiday in 1937, cementing a Eurocentric historical narrative that framed the arrival of European explorers as a benign "discovery" of an empty continent. In reality, the Americas were home to tens of millions of people organized into sophisticated sovereign confederacies, agricultural empires, and autonomous nations with thousands of distinct languages and governance treaties.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className={`p-4 rounded-xl border ${isLight ? 'bg-amber-50 border-amber-200' : 'bg-stone-950 border-amber-900/50'} space-y-2`}>
                    <h4 className="font-bold text-xs font-mono uppercase text-red-600 dark:text-red-400">
                      1. The 1977 Geneva Conference Catalyst
                    </h4>
                    <p className="text-xs">
                      At the United Nations International Conference on Discrimination Against Indigenous Populations in the Americas in Geneva, Switzerland, Indigenous delegates formally resolved that October 12 should be celebrated as an international day of solidarity with Indigenous Peoples.
                    </p>
                  </div>

                  <div className={`p-4 rounded-xl border ${isLight ? 'bg-amber-50 border-amber-200' : 'bg-stone-950 border-amber-900/50'} space-y-2`}>
                    <h4 className="font-bold text-xs font-mono uppercase text-amber-600 dark:text-amber-400">
                      2. South Dakota (1990) &amp; Berkeley (1992)
                    </h4>
                    <p className="text-xs">
                      In 1990, South Dakota became the first state to replace Columbus Day with "Native American Day". In 1992, during the 500th anniversary of Columbus’s voyage, the city of Berkeley, California officially established "Indigenous Peoples' Day", sparking nationwide momentum.
                    </p>
                  </div>

                  <div className={`p-4 rounded-xl border ${isLight ? 'bg-amber-50 border-amber-200' : 'bg-stone-950 border-amber-900/50'} space-y-2`}>
                    <h4 className="font-bold text-xs font-mono uppercase text-emerald-600 dark:text-emerald-400">
                      3. New Mexico House Bill 100 (2019)
                    </h4>
                    <p className="text-xs">
                      Spearheaded by Native American legislators including Representative Derrick Lente (Sandia Pueblo), New Mexico enacted House Bill 100 in 2019, signed by Governor Michelle Lujan Grisham, officially replacing Columbus Day statewide with Indigenous Peoples' Day across all 23 sovereign nations.
                    </p>
                  </div>

                  <div className={`p-4 rounded-xl border ${isLight ? 'bg-amber-50 border-amber-200' : 'bg-stone-950 border-amber-900/50'} space-y-2`}>
                    <h4 className="font-bold text-xs font-mono uppercase text-blue-600 dark:text-blue-400">
                      4. Federal Recognition (2021 to Present)
                    </h4>
                    <p className="text-xs">
                      In October 2021, the first-ever presidential proclamation was issued officially recognizing Indigenous Peoples' Day across the United States, followed by dozens of state legislatures and hundreds of municipalities formally retiring Columbus Day.
                    </p>
                  </div>
                </div>

                <div className={`p-5 rounded-2xl border ${isLight ? 'bg-stone-100 border-stone-300' : 'bg-stone-800 border-stone-700'} mt-4 space-y-2`}>
                  <h4 className="font-bold text-xs font-mono uppercase text-stone-900 dark:text-white flex items-center gap-2">
                    <Shield size={14} className="text-emerald-500" />
                    Sovereignty as the Core of the Holiday
                  </h4>
                  <p className="text-xs leading-relaxed">
                    Indigenous Peoples' Day is not merely about representation or cultural heritage—it is fundamentally about <strong>legal and political sovereignty</strong>. It affirms that Native nations are inherent, pre-constitutional governments with sovereign jurisdiction over their lands, water, children, digital data, and natural resources.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUB-TAB 7: WHY ICEARTH IS IN TAOS */}
        {activeSubTab === 'why_taos' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className={`p-6 sm:p-8 rounded-3xl border-2 ${isLight ? 'bg-white border-amber-300' : 'bg-stone-900 border-amber-900'} space-y-6`}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 flex items-center justify-center text-emerald-700 shrink-0">
                  <Mountain size={20} />
                </div>
                <div>
                  <h2 className="text-xl font-bold font-sans">Why Indigenous Communities Earth Is Founded in Taos</h2>
                  <p className="text-xs text-stone-500 font-mono">The Sacred Ground of Pueblo Sovereignty, the 1680 Revolt &amp; the Blue Lake Restoration</p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-sans">
                <p>
                  When Norm Roulet and the sovereign leaders behind ICEarth selected the global headquarters for Indigenous Communities Earth, Taos, New Mexico was the only natural choice. Taos is not merely a town; it is a sacred geographical sanctuary that holds the historical blueprint for how Indigenous peoples defend land, water, and human sovereignty against colonial domination.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                  <div className={`p-5 rounded-2xl border ${isLight ? 'bg-amber-50/70 border-amber-200' : 'bg-stone-950 border-amber-900/40'} space-y-3`}>
                    <div className="text-amber-600 font-mono text-xs font-bold uppercase">Milestone 1</div>
                    <h3 className="font-bold text-sm">1,000+ Years Continuous Habitation</h3>
                    <p className="text-xs leading-relaxed">
                      Taos Pueblo (<em>Tuah-Tah</em>) has been continuously inhabited for over a millennium. Built of straw and mud adobe without running water or electricity in the historic village, it stands as North America's premier living testament to sustainable human architecture and sovereign perseverance.
                    </p>
                  </div>

                  <div className={`p-5 rounded-2xl border ${isLight ? 'bg-amber-50/70 border-amber-200' : 'bg-stone-950 border-amber-900/40'} space-y-3`}>
                    <div className="text-red-600 font-mono text-xs font-bold uppercase">Milestone 2</div>
                    <h3 className="font-bold text-sm">The 1680 Pueblo Revolt</h3>
                    <p className="text-xs leading-relaxed">
                      Coordinated from Taos Pueblo by the spiritual leader Po’pay using knotted yucca cords, the 1680 Pueblo Revolt was the most successful Indigenous uprising against European colonization in North American history. The Pueblos drove the Spanish empire out of New Mexico for twelve years, forever preserving Pueblo religion, seed sovereignty, and clan systems.
                    </p>
                  </div>

                  <div className={`p-5 rounded-2xl border ${isLight ? 'bg-amber-50/70 border-amber-200' : 'bg-stone-950 border-amber-900/40'} space-y-3`}>
                    <div className="text-emerald-600 font-mono text-xs font-bold uppercase">Milestone 3</div>
                    <h3 className="font-bold text-sm">The 1970 Blue Lake Return</h3>
                    <p className="text-xs leading-relaxed">
                      For 64 years after Teddy Roosevelt appropriated sacred Blue Lake into the Carson National Forest in 1906, Taos Pueblo elders fought non-violently in Washington. In 1970, Public Law 91-550 returned 48,000 acres of sacred mountain watershed to Taos Pueblo—the first statutory return of stolen sacred land in U.S. history.
                    </p>
                  </div>
                </div>

                <div className={`p-5 rounded-2xl border ${isLight ? 'bg-emerald-50/70 border-emerald-300' : 'bg-emerald-950/20 border-emerald-900'} space-y-2 mt-4`}>
                  <h4 className="font-bold text-xs font-mono uppercase text-emerald-800 dark:text-emerald-400 flex items-center gap-2">
                    <Globe size={14} /> The ICEarth Vision in Taos
                  </h4>
                  <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                    At ICEarth, we connect Taos’s unyielding history of land defense with cutting-edge environmental exposenomics, zero-knowledge sovereign data networks, clean-energy data centers, and community lead prevention. Here, Indigenous youth are trained in sovereign AI orchestration, heavy metal telemetry, and ecological restoration—carrying forward the spirit of Po'pay and the Blue Lake elders into the digital century.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUB-TAB 8: THE 23 SOVEREIGN NATIONS & PUEBLOS */}
        {activeSubTab === 'tribes_directory' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className={`p-6 rounded-3xl border-2 ${isLight ? 'bg-white border-amber-300' : 'bg-stone-900 border-amber-900'} space-y-4`}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-amber-600 dark:text-amber-400 font-black">
                    SOVEREIGN DIRECTORY OF NEW MEXICO
                  </span>
                  <h2 className="text-xl font-black font-sans text-stone-900 dark:text-white">
                    The 23 Sovereign Tribes, Nations, and Pueblos
                  </h2>
                  <p className="text-xs text-stone-500 font-mono">
                    19 Autonomous Pueblos • 3 Apache Nations • The Navajo Nation (Diné)
                  </p>
                </div>

                {/* Filter buttons */}
                <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono">
                  {[
                    { id: 'all', label: 'All 23' },
                    { id: 'pueblo', label: '19 Pueblos' },
                    { id: 'apache', label: '3 Apache' },
                    { id: 'navajo', label: 'Navajo Nation' }
                  ].map((f) => (
                    <button
                      key={f.id}
                      onClick={() => setFilterType(f.id as any)}
                      className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                        filterType === f.id
                          ? 'bg-amber-600 text-white shadow-xs'
                          : isLight
                          ? 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                          : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Search bar */}
              <div className="relative">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                <input
                  type="text"
                  placeholder="Search by tribe name, indigenous language, location, or cultural highlights..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full pl-9 pr-4 py-2.5 rounded-xl border text-xs font-mono ${
                    isLight ? 'bg-stone-50 border-stone-200 text-stone-900' : 'bg-stone-950 border-stone-800 text-stone-100'
                  } focus:outline-none focus:ring-2 focus:ring-amber-500`}
                />
              </div>

              {/* Grid of Tribes */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                {filteredTribes.map((tribe, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-2xl border transition-all hover:shadow-md ${
                      isLight ? 'bg-amber-50/50 border-amber-200 hover:border-amber-400' : 'bg-stone-950 border-stone-800 hover:border-amber-700'
                    } space-y-2`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="font-bold font-sans text-sm text-stone-900 dark:text-stone-100">
                          {tribe.name}
                        </h4>
                        <span className="text-xs font-serif italic text-amber-700 dark:text-amber-400 block">
                          "{tribe.indigenousName}"
                        </span>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[9px] font-mono uppercase font-black bg-amber-500/20 text-amber-800 dark:text-amber-300 border border-amber-400/40 shrink-0">
                        {tribe.type.toUpperCase()}
                      </span>
                    </div>

                    <div className="text-[11px] font-mono space-y-0.5 text-stone-600 dark:text-stone-400 border-t border-stone-200 dark:border-stone-800 pt-2">
                      <div><strong>Language:</strong> {tribe.language}</div>
                      <div><strong>Location:</strong> {tribe.location}</div>
                    </div>

                    <p className="text-xs text-stone-700 dark:text-stone-300 font-sans leading-normal pt-1">
                      {tribe.highlights}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SUB-TAB 9: ARTWORK & PROVENANCE VAULT */}
        {activeSubTab === 'card_viewer' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className={`p-6 sm:p-8 rounded-3xl border-2 ${isLight ? 'bg-white border-amber-300' : 'bg-stone-900 border-amber-900'} space-y-6`}>
              <div>
                <h2 className="text-xl font-bold font-sans">Plate #80 Commemorative Cryptographic Provenance</h2>
                <p className="text-xs text-stone-500 font-mono">Immutable Registration on ICEarth Sovereign Ledger &amp; Media Vault</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div
                    onClick={() => setActiveModalImage(authenticTaosDataCenterImg)}
                    className="group relative rounded-2xl overflow-hidden border-2 border-amber-400 bg-stone-950 cursor-pointer shadow-xl hover:shadow-2xl transition-all aspect-video flex items-center justify-center"
                  >
                    <img
                      src={authenticTaosDataCenterImg}
                      alt="Authentic Taos Mountain and Sovereign Data Center"
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-4 py-2 rounded-xl bg-amber-500 text-stone-950 font-bold font-mono text-xs flex items-center gap-1.5 shadow-lg">
                        <Maximize2 size={14} /> Expand Authentic Landscape Asset
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-stone-500 block text-center">
                    Plate #80 Master Sovereign Asset • Authentic Taos Mountain &amp; Clean Solar Data Center
                  </span>
                </div>

                <div className={`p-5 rounded-2xl border space-y-4 font-mono text-xs ${isLight ? 'bg-amber-50/50 border-amber-200' : 'bg-stone-950 border-stone-800'}`}>
                  <div>
                    <span className="text-stone-400 text-[10px] uppercase">Asset Title:</span>
                    <div className="font-bold text-stone-900 dark:text-stone-100">
                      Happy Indigenous Communities Earth Day (Taos, NM • Plate #80)
                    </div>
                  </div>

                  <div>
                    <span className="text-stone-400 text-[10px] uppercase">Archived Entities:</span>
                    <div className="text-stone-700 dark:text-stone-300">
                      23 Sovereign Tribes, Nations &amp; Pueblos of NM • Governor Michelle Lujan Grisham • Deb Haaland
                    </div>
                  </div>

                  <div>
                    <span className="text-stone-400 text-[10px] uppercase">Vault Registration Hash:</span>
                    <div className="p-2.5 rounded bg-black text-amber-300 font-mono text-[11px] break-all border border-stone-800">
                      {vaultHash}
                    </div>
                  </div>

                  <div>
                    <span className="text-stone-400 text-[10px] uppercase">SHA-256 Provenance Fingerprint:</span>
                    <div className="p-2.5 rounded bg-black text-stone-300 font-mono text-[11px] break-all border border-stone-800">
                      {provenanceSha256}
                    </div>
                  </div>

                  <div className="pt-2 flex items-center gap-3">
                    <button
                      onClick={handleCopyHash}
                      className="px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-500 text-stone-950 font-mono text-xs font-black flex items-center gap-2 cursor-pointer shadow-sm"
                    >
                      {copiedHash ? <Check size={14} /> : <Copy size={14} />}
                      <span>{copiedHash ? 'Hash Copied!' : 'Copy Vault Hash'}</span>
                    </button>

                    <button
                      onClick={() => setActiveModalImage(authenticTaosDataCenterImg)}
                      className="px-4 py-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 font-mono text-xs font-bold flex items-center gap-2 cursor-pointer"
                    >
                      <Maximize2 size={14} />
                      <span>Expand Artwork</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 4. CROSS-NAVIGATION BAR */}
        <div className={`p-6 rounded-3xl border-2 ${isLight ? 'bg-white border-amber-300' : 'bg-stone-900 border-amber-900'}`}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-sm font-bold font-sans text-stone-900 dark:text-stone-100">
                Continue Exploring Sovereign IT &amp; Indigenous Self-Determination
              </h3>
              <p className="text-xs text-stone-500 font-mono mt-0.5">
                Related sovereign plates covering Deb Haaland, Pueblo history, and tribal computing
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => onNavigateTab('deb_haaland_home')}
                className="px-3.5 py-2 rounded-lg text-xs font-mono font-bold bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300 hover:bg-amber-200 dark:hover:bg-amber-900 border border-amber-300 dark:border-amber-800 flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>🏛️ Plate #51: Deb Haaland's ICEarth Home</span>
              </button>

              <button
                onClick={() => onNavigateTab('indigenous_right_to_progress')}
                className="px-3.5 py-2 rounded-lg text-xs font-mono font-bold bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300 hover:bg-amber-200 dark:hover:bg-amber-900 border border-amber-300 dark:border-amber-800 flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>⚡ Plate #71: Indigenous Right to Progress (Sovereign IT)</span>
              </button>

              <button
                onClick={() => onNavigateTab('pueblo_revolt_1680')}
                className="px-3.5 py-2 rounded-lg text-xs font-mono font-bold bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300 hover:bg-amber-200 dark:hover:bg-amber-900 border border-amber-300 dark:border-amber-800 flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>🏹 1680 Pueblo Revolt Archive</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* 5. HIGH-RESOLUTION MODAL */}
      {activeModalImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setActiveModalImage(null)}
        >
          <div 
            className="relative max-w-5xl max-h-[90vh] bg-stone-950 rounded-2xl overflow-hidden border border-amber-500/50 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-3 border-b border-stone-800 flex justify-between items-center text-xs font-mono text-stone-300">
              <span className="text-amber-400 font-bold flex items-center gap-1.5">
                <Sun size={14} /> Plate #80 High-Resolution View • Authentic Taos &amp; Sovereign AI
              </span>
              <button 
                onClick={() => setActiveModalImage(null)}
                className="px-2.5 py-1 bg-stone-800 hover:bg-stone-700 text-white rounded font-bold transition-colors cursor-pointer"
              >
                Close (ESC)
              </button>
            </div>

            <div className="overflow-auto p-2 flex items-center justify-center">
              <img 
                src={activeModalImage} 
                alt="High resolution viewer" 
                className="max-h-[75vh] w-auto object-contain rounded-lg shadow-inner"
              />
            </div>

            <div className="p-3 border-t border-stone-800 bg-stone-900/60 text-[11px] font-mono text-stone-400 flex flex-wrap justify-between items-center gap-2">
              <span>ICEarth Provenance: {vaultHash}</span>
              <span className="text-amber-400 font-bold">100% Authentic Imagery • Anti-Misappropriation Standard</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

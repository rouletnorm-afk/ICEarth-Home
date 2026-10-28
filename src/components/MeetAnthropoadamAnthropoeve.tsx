import React, { useState } from 'react';
import {
  Brain,
  Heart,
  Activity,
  AlertTriangle,
  BookOpen,
  ExternalLink,
  Copy,
  Check,
  Maximize2,
  Sparkles,
  Shield,
  Layers,
  ArrowRight,
  Flame,
  Atom,
  Clock,
  Eye,
  Crosshair,
  Info,
  ChevronRight
} from 'lucide-react';
import icesaturnImg from '../assets/images/icesaturn_anthroadam_anthroeve_1793163311877.jpg';
import durerOriginalImg from '../assets/images/Albrecht_D_rer__Adam_and_Eve__1504__Engraving_0f72cd90.jpg';
import saturnOriginalImg from '../assets/images/Saturn_01b115b5.jpg';
import cupidOriginalImg from '../assets/images/Cupid2_27240c42.jpg';

interface MeetAnthropoadamAnthropoeveProps {
  onNavigateTab?: (tab: string) => void;
  siteTheme?: 'light' | 'dark';
}

interface AnatomicalInsult {
  id: string;
  system: string;
  icon: string;
  target: 'head' | 'chest' | 'abdomen' | 'pelvis' | 'bones' | 'blood' | 'child';
  title: string;
  whoCategory: string;
  symptoms: string[];
  mechanism: string;
  alchemicalCorrelation: string;
  pointerPos: { x: number; y: number }; // percentage on image [x, y]
}

const WHO_INSULTS: AnatomicalInsult[] = [
  {
    id: 'brain-cns',
    system: 'Brain & Central Nervous System',
    icon: '🧠',
    target: 'head',
    title: 'Prefrontal Cortex (vmPFC) Atrophy & Encephalopathy',
    whoCategory: 'WHO Priority Hazard: Neurological Deficits & Behavioral Pathology',
    symptoms: [
      'Prefrontal cortex gray matter loss and executive dysfunction',
      'Loss of impulse control, heightened aggression, violent delinquency',
      'Cognitive decay, irritability, memory loss, depression, encephalopathy',
      'Severe irreversible loss of 3 to 7+ IQ points per 10 µg/dL blood lead'
    ],
    mechanism: 'Lead substitutes for Ca²⁺ and crosses the blood-brain barrier via calcium channels, activating protein kinase C, disrupting NMDA receptor-dependent synaptic pruning, and inducing chronic neuroinflammation and microglial activation.',
    alchemicalCorrelation: 'Saturnine melancholy, darkness of intellect, and the loss of divine Edenic illumination. The poisoning of the mind.',
    pointerPos: { x: 42, y: 53 } // Adam's head
  },
  {
    id: 'brain-eve',
    system: 'Sensory & Auditory Integration',
    icon: '👁️',
    target: 'head',
    title: 'Sensory Distortions & Auditory Processing Decay',
    whoCategory: 'WHO Priority Hazard: Sensory System Neurotoxicity',
    symptoms: [
      'Auditory nerve demyelination and irreversible high-frequency hearing loss',
      'Retinal ganglion cell degeneration and optic neuropathy',
      'Chronic insomnia, vertigo, and vestibular instability'
    ],
    mechanism: 'Disruption of oligodendrocytes and myelin sheath synthesis, coupled with mitochondrial ROS generation in sensory nerve pathways.',
    alchemicalCorrelation: 'The closing of primordial spiritual senses upon descending into the dense material plane of Saturn.',
    pointerPos: { x: 63, y: 53 } // Eve's head
  },
  {
    id: 'cardio',
    system: 'Cardiovascular System',
    icon: '🫀',
    target: 'chest',
    title: 'Chronic Hypertension & Ischemic Heart Disease',
    whoCategory: 'WHO Priority Hazard: Cardiovascular Morbidity & Mortality',
    symptoms: [
      'Elevated peripheral vascular resistance and persistent hypertension',
      'Accelerated atherosclerosis, coronary artery calcification, myocardial infarction',
      'Stroke, peripheral arterial stiffness, and microvascular rarefaction'
    ],
    mechanism: 'Inactivation of nitric oxide (NO) by superoxide radicals, upregulation of endothelin, sympathetic hyperactivation, and chronic renin-angiotensin-aldosterone axis stimulation.',
    alchemicalCorrelation: 'The cold, rigid contraction of Saturn constricting the living solar warmth of the heart.',
    pointerPos: { x: 42, y: 60 } // Adam's chest
  },
  {
    id: 'renal',
    system: 'Renal / Kidneys',
    icon: '🫘',
    target: 'abdomen',
    title: 'Saturnine Nephropathy & Interstitial Fibrosis',
    whoCategory: 'WHO Priority Hazard: Renal Insufficiency & Uremic Syndromes',
    symptoms: [
      'Proximal tubular dysfunction and intranuclear inclusion bodies',
      'Chronic interstitial nephritis, tubular atrophy, and glomerulosclerosis',
      'Impaired renal urate excretion leading to classic Saturnine Gout'
    ],
    mechanism: 'Direct tubular mitochondrial swelling, brush border degradation, and progressive interstitial fibrosis leading to end-stage renal disease (ESRD).',
    alchemicalCorrelation: 'Saturnine Gout: The classical affliction of wine-drinking Roman aristocrats sweetening sour vintage with lead acetate (sapa).',
    pointerPos: { x: 62, y: 64 } // Eve's torso / renal area
  },
  {
    id: 'reproductive',
    system: 'Reproductive System',
    icon: '🧬',
    target: 'pelvis',
    title: 'Gonadal Toxicity & Transgenerational Dysgenics',
    whoCategory: 'WHO Priority Hazard: Reproductive & Perinatal Toxicity',
    symptoms: [
      'Male: Oligospermia, asthenospermia, teratospermia, erectile failure',
      'Female: Ovarian dysfunction, miscarriages, stillbirths, spontaneous abortion',
      'Pregnancy-induced hypertension, pre-eclampsia, and low infant birth weight',
      'Transgenerational epigenetic sperm DNA methylation alterations'
    ],
    mechanism: 'Disruption of the hypothalamic-pituitary-gonadal (HPG) axis, oxidative cleavage of spermatid nuclear chromatin, and placenta-barrier crossing.',
    alchemicalCorrelation: 'The severance of generational fertility; Cronus severing Uranus, ending the golden age of spontaneous bounty.',
    pointerPos: { x: 43, y: 71 } // Adam's pelvic region
  },
  {
    id: 'skeletal',
    system: 'Skeletal & Bone Reservoir',
    icon: '🦴',
    target: 'bones',
    title: 'Lifelong Bone Hydroxyapatite Lead Sequestration',
    whoCategory: 'WHO Priority Hazard: Skeletal Sequestration & Re-mobilization',
    symptoms: [
      '90% to 95% of total adult body burden permanently locked in skeletal bone',
      'Stunted longitudinal growth and delayed skeletal maturation in youth',
      'Mobilization during pregnancy, lactation, and menopause re-poisoning maternal blood',
      'Accelerated osteoporosis, pathological fractures, and dental caries'
    ],
    mechanism: 'Pb²⁺ possesses ionic radius and charge identical to Ca²⁺, substituting directly into crystalline bone hydroxyapatite lattice [Ca₁₀(PO₄)₆(OH)₂] with a biological half-life of 20 to 30 years.',
    alchemicalCorrelation: 'Lead as the heaviest bone-matter: the dense, cold weight of Saturn hardening and poisoning the structural skeleton.',
    pointerPos: { x: 40, y: 84 } // Adam's leg
  },
  {
    id: 'hematology',
    system: 'Hematological / Blood',
    icon: '🩸',
    target: 'blood',
    title: 'ALAD & Ferrochelatase Inhibition (Microcytic Anemia)',
    whoCategory: 'WHO Priority Hazard: Hematotoxicity & Heme Synthesis Disruption',
    symptoms: [
      'Blockade of delta-aminolevulinic acid dehydratase (ALAD) and ferrochelatase',
      'Accumulation of neurotoxic delta-ALA precursor in blood and CSF',
      'Microcytic, hypochromic anemia with characteristic basophilic stippling',
      'Shortened erythrocyte lifespan via cell membrane fragility'
    ],
    mechanism: 'Lead displaces zinc cofactors from the active thiol sites of ALAD and directly prevents iron incorporation into protoporphyrin IX.',
    alchemicalCorrelation: 'The corruption of the vital blood force by the basest metal, preventing the transmutation into spiritual gold.',
    pointerPos: { x: 67, y: 78 } // Eve's leg/blood stream
  },
  {
    id: 'childhood',
    system: 'The Devoured Child (Saturn / Cronus)',
    icon: '👶',
    target: 'child',
    title: 'The Devoured Generation: Pediatric Vulnerability',
    whoCategory: 'WHO Priority Hazard: Critical Pediatric Sensitivity (Zero Safe Level)',
    symptoms: [
      '40% to 50% gastrointestinal absorption rate in children vs 10% in adults',
      'Immature blood-brain barrier permits free neurotoxic lead penetration',
      'Lifelong behavioral arrest: ADHD, juvenile incarceration, loss of social empathy',
      'Global tragedy: Over 1 in 3 living children (~800 million) suffer blood lead ≥ 5 µg/dL'
    ],
    mechanism: 'Rapidly dividing neural stem cells, synaptogenesis, and high nutritional calcium avidity turn the infant body into a sponge for lead.',
    alchemicalCorrelation: 'Cronus devouring his newborn children: The Anthropogenic Age sacrificing its own offspring to maintain industrial and chemical extraction.',
    pointerPos: { x: 30, y: 22 } // Saturn's infant
  }
];

export const MeetAnthropoadamAnthropoeve: React.FC<MeetAnthropoadamAnthropoeveProps> = ({
  onNavigateTab,
  siteTheme = 'light'
}) => {
  const [selectedInsult, setSelectedInsult] = useState<AnatomicalInsult>(WHO_INSULTS[0]);
  const [showOverlays, setShowOverlays] = useState<boolean>(true);
  const [showNarrativeSection, setShowNarrativeSection] = useState<'mythology' | 'alchemy' | 'cupid' | 'eden' | 'who'>('eden');
  const [copiedHash, setCopiedHash] = useState<boolean>(false);
  const [zoomModal, setZoomModal] = useState<boolean>(false);

  const vaultHash = '0xICESATURN_ANTHROPOADAM_ANTHROPOEVE_DURER_1504';

  const copyHashToClipboard = () => {
    navigator.clipboard.writeText(vaultHash);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2500);
  };

  return (
    <div className={`min-h-screen ${siteTheme === 'dark' ? 'bg-stone-950 text-stone-100' : 'bg-stone-50 text-stone-900'} pb-24 transition-colors`}>
      {/* HERO BANNER & PROVENANCE METADATA */}
      <div className="bg-gradient-to-b from-stone-900 via-stone-950 to-stone-900 text-stone-100 border-b border-stone-800 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/40 rounded-lg text-xs font-mono font-black tracking-wider uppercase flex items-center gap-1.5">
                <Sparkles size={13} className="text-amber-400" />
                ICESaturn Sovereign Domain
              </span>
              <span className="px-3 py-1 bg-red-600/20 text-red-300 border border-red-500/40 rounded-lg text-xs font-mono font-black tracking-wider uppercase flex items-center gap-1.5">
                <Atom size={13} className="text-red-400" />
                Alchemical Metal ♄ (Lead)
              </span>
              <span className="px-2.5 py-1 bg-stone-800 text-stone-300 rounded text-xs font-mono">
                {vaultHash}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={copyHashToClipboard}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 rounded-lg text-xs font-mono transition-colors cursor-pointer"
              >
                {copiedHash ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                <span>{copiedHash ? 'Hash Copied!' : 'Copy Sovereign Hash'}</span>
              </button>

              <button
                onClick={() => setZoomModal(true)}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-600 hover:bg-amber-500 text-stone-950 font-black rounded-lg text-xs font-mono transition-colors cursor-pointer shadow-md"
              >
                <Maximize2 size={14} />
                <span>Full-Screen Master Etching</span>
              </button>
            </div>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-amber-100 flex items-center gap-3">
              <span>Meet Anthroadam &amp; Anthroeve</span>
            </h1>
            <p className="text-lg sm:text-2xl text-amber-300/90 font-serif italic">
              In the Garden of Indigenous Communities Earth Saturn • And, The Gods Are Crazy
            </p>
            <p className="text-xs sm:text-sm text-stone-400 max-w-5xl leading-relaxed">
              Tracing the evolutionary fall of <strong>Homo Sapiens 0</strong> from the pristine Garden of Eden into the <strong>Anthropogenic Age</strong>—equivalent to humanity marooned on Saturn. Unifying Albrecht Dürer&apos;s 1504 Renaissance copper engraving, the Roman God Saturn/Cronus (♄, the base metal lead) devouring his children, Cupid&apos;s blunt lead arrow of aversion, and the World Health Organization&apos;s systematic pathology into a single master Medical Illustration of Human Devolution.
            </p>
          </div>

          {/* QUICK CROSS-NAVIGATION */}
          {onNavigateTab && (
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-stone-800 text-xs font-mono">
              <span className="text-stone-500">Jump To Related Research:</span>
              <button
                onClick={() => onNavigateTab('anthropocene_lead_harm_proof')}
                className="px-2.5 py-1 bg-red-950/60 hover:bg-red-900/60 text-red-300 border border-red-700/50 rounded flex items-center gap-1 cursor-pointer transition-colors"
              >
                <Atom size={12} />
                <span>Plate #100: Anthropocene Lead &amp; Harm ➡️</span>
              </button>
              <button
                onClick={() => onNavigateTab('anthropocene_energy_exposome_proof')}
                className="px-2.5 py-1 bg-orange-950/60 hover:bg-orange-900/60 text-orange-300 border border-orange-700/50 rounded flex items-center gap-1 cursor-pointer transition-colors"
              >
                <Flame size={12} />
                <span>Plate #99: Energy &amp; Harm</span>
              </button>
              <button
                onClick={() => onNavigateTab('why_indigenous_communities_earth')}
                className="px-2.5 py-1 bg-amber-950/60 hover:bg-amber-900/60 text-amber-300 border border-amber-700/50 rounded flex items-center gap-1 cursor-pointer transition-colors"
              >
                <span>🌎 Plate #98: The Great Dying</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* MAIN INTERACTIVE SECTION: THE MEDICAL ILLUSTRATION & WHO ANATOMICAL MAP */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT 7 COLS: THE MASTER COMPOSITE ETCHING WITH INTERACTIVE ANATOMICAL POINTERS */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-stone-300 dark:border-stone-800">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 flex items-center gap-1.5">
                  <Crosshair size={14} />
                  Medical Engraving: H. Sapiens 0 to H. Anthropogen
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowOverlays(!showOverlays)}
                  className={`text-xs font-mono px-2.5 py-1 rounded border transition-colors cursor-pointer ${
                    showOverlays 
                      ? 'bg-amber-600 text-stone-950 border-amber-500 font-bold' 
                      : 'bg-stone-200 dark:bg-stone-800 text-stone-600 dark:text-stone-400 border-stone-300 dark:border-stone-700'
                  }`}
                >
                  {showOverlays ? 'Hide WHO Pointers' : 'Show WHO Pointers'}
                </button>
              </div>
            </div>

            {/* ARTWORK CONTAINER WITH RELATIVE ANATOMICAL OVERLAYS */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-amber-900/40 dark:border-amber-700/50 shadow-2xl bg-black group">
              <img
                src={icesaturnImg}
                alt="Meet ICESaturn Anthroadam & Anthroeve in the Garden of Indigenous Communities Earth Saturn"
                className="w-full h-auto object-cover cursor-zoom-in"
                onClick={() => setZoomModal(true)}
              />

              {/* OVERLAY ANATOMICAL POINTERS */}
              {showOverlays && (
                <div className="absolute inset-0 pointer-events-none">
                  {WHO_INSULTS.map((insult) => {
                    const isSelected = selectedInsult.id === insult.id;
                    return (
                      <div
                        key={insult.id}
                        style={{
                          left: `${insult.pointerPos.x}%`,
                          top: `${insult.pointerPos.y}%`
                        }}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto cursor-pointer"
                        onClick={() => setSelectedInsult(insult)}
                      >
                        <span className="relative flex h-6 w-6">
                          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                            isSelected ? 'bg-red-500' : 'bg-amber-400'
                          }`}></span>
                          <span className={`relative inline-flex items-center justify-center rounded-full h-6 w-6 border text-[11px] font-bold shadow-lg transition-transform ${
                            isSelected 
                              ? 'bg-red-600 border-white text-white scale-125 ring-2 ring-red-400' 
                              : 'bg-stone-900/90 border-amber-400 text-amber-300 hover:scale-110'
                          }`}>
                            {insult.icon}
                          </span>
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* FLOATING CAPTION BAR */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-transparent p-4 text-stone-200">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-amber-400 font-bold">Albrecht Dürer 1504 × Saturn / Cronus (♄) × Cupid&apos;s Lead Arrow</span>
                  <span className="text-stone-400 hidden sm:inline">Click pins to inspect anatomical targets</span>
                </div>
              </div>
            </div>

            {/* ARTWORK COMPARISON ACCORDION: VIEW THE 3 HISTORICAL SOURCES */}
            <div className="bg-stone-100 dark:bg-stone-900 p-4 rounded-xl border border-stone-200 dark:border-stone-800 space-y-3">
              <div className="text-xs font-mono font-bold text-stone-600 dark:text-stone-400 uppercase tracking-wider flex items-center gap-1.5">
                <Info size={14} className="text-amber-600" />
                <span>The Three Historical Plates Combined in This Master Etching:</span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="space-y-1 text-center">
                  <div className="h-28 rounded-lg overflow-hidden border border-stone-300 dark:border-stone-700 bg-stone-950 flex items-center justify-center">
                    <img src={durerOriginalImg} alt="Dürer 1504" className="h-full object-contain" />
                  </div>
                  <p className="text-[10px] font-mono font-bold text-stone-700 dark:text-stone-300">1. Dürer Adam &amp; Eve (1504)</p>
                  <p className="text-[9px] text-stone-500">Homo Sapiens 0 in Eden</p>
                </div>

                <div className="space-y-1 text-center">
                  <div className="h-28 rounded-lg overflow-hidden border border-stone-300 dark:border-stone-700 bg-stone-950 flex items-center justify-center">
                    <img src={saturnOriginalImg} alt="Saturn with Scythe" className="h-full object-contain" />
                  </div>
                  <p className="text-[10px] font-mono font-bold text-stone-700 dark:text-stone-300">2. God Saturn / Cronus</p>
                  <p className="text-[9px] text-stone-500">Lead Metal ♄ &amp; Devoured Youth</p>
                </div>

                <div className="space-y-1 text-center">
                  <div className="h-28 rounded-lg overflow-hidden border border-stone-300 dark:border-stone-700 bg-stone-950 flex items-center justify-center">
                    <img src={cupidOriginalImg} alt="Cupid with Bow" className="h-full object-contain" />
                  </div>
                  <p className="text-[10px] font-mono font-bold text-stone-700 dark:text-stone-300">3. Cupid with Lead Arrow</p>
                  <p className="text-[9px] text-stone-500">The Arrow of Aversion &amp; Harm</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT 5 COLS: ACTIVE WHO ANATOMICAL DAMAGE DOSSIER */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-stone-900 text-stone-100 p-6 rounded-2xl border-2 border-red-600/40 shadow-xl space-y-4">
              <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-red-400 flex items-center gap-1.5">
                  <AlertTriangle size={15} />
                  WHO Toxicopathology Dossier
                </span>
                <span className="text-xl">{selectedInsult.icon}</span>
              </div>

              <div>
                <h3 className="text-2xl font-serif font-black text-amber-200">
                  {selectedInsult.title}
                </h3>
                <p className="text-xs font-mono text-stone-400 mt-1">
                  {selectedInsult.whoCategory}
                </p>
              </div>

              {/* SYMPTOMS & CLINICAL IMPACT */}
              <div className="space-y-2 bg-stone-950/70 p-4 rounded-xl border border-stone-800">
                <h4 className="text-xs font-mono font-bold text-red-400 uppercase tracking-wider">
                  Clinical &amp; Societal Damage:
                </h4>
                <ul className="space-y-1.5 text-xs text-stone-300">
                  {selectedInsult.symptoms.map((symptom, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">•</span>
                      <span>{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* MOLECULAR MECHANISM */}
              <div className="space-y-1 text-xs text-stone-300">
                <span className="font-mono font-bold text-amber-300 uppercase tracking-wide block">
                  Biological &amp; Enzymatic Mechanism:
                </span>
                <p className="leading-relaxed text-stone-300 bg-stone-950/40 p-3 rounded-lg border border-stone-800/80">
                  {selectedInsult.mechanism}
                </p>
              </div>

              {/* ALCHEMICAL & MYTHIC CORRELATION */}
              <div className="space-y-1 text-xs text-stone-300">
                <span className="font-mono font-bold text-purple-400 uppercase tracking-wide flex items-center gap-1.5">
                  <Sparkles size={13} />
                  ICESaturn Alchemical &amp; Astrological Meaning:
                </span>
                <p className="leading-relaxed text-stone-300 italic bg-purple-950/20 p-3 rounded-lg border border-purple-800/30">
                  &ldquo;{selectedInsult.alchemicalCorrelation}&rdquo;
                </p>
              </div>

              {/* QUICK SELECTOR PILLS */}
              <div className="pt-2 border-t border-stone-800">
                <span className="text-[10px] font-mono uppercase text-stone-400 block mb-2">
                  Select Anatomical Target:
                </span>
                <div className="grid grid-cols-2 gap-1.5">
                  {WHO_INSULTS.map((insult) => (
                    <button
                      key={insult.id}
                      onClick={() => setSelectedInsult(insult)}
                      className={`text-left px-2.5 py-1.5 rounded text-xs font-mono flex items-center gap-1.5 transition-all cursor-pointer ${
                        selectedInsult.id === insult.id
                          ? 'bg-red-600 text-white font-bold shadow'
                          : 'bg-stone-800 hover:bg-stone-700 text-stone-300'
                      }`}
                    >
                      <span>{insult.icon}</span>
                      <span className="truncate">{insult.system.split('&')[0]}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* WHO GLOBAL LEAD BURDEN SUMMARY BOX */}
            <div className="bg-gradient-to-br from-amber-950/40 via-stone-900 to-stone-950 p-5 rounded-2xl border border-amber-600/30 space-y-3">
              <div className="flex items-center gap-2 text-amber-300 font-mono text-xs font-black uppercase tracking-wider">
                <Shield size={14} />
                <span>WHO &amp; UNICEF Exposenomic Reality:</span>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed">
                The World Health Organization explicitly affirms: <strong>There is no known safe blood lead concentration</strong>. Even blood lead levels as low as 3.5 µg/dL cause quantifiable intellectual disability, prefrontal behavioral disruption, and cardiovascular disease. Over <strong>800 million children globally</strong>—1 in 3—currently exceed 5 µg/dL.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-stone-950/80 p-2.5 rounded-lg border border-stone-800">
                  <span className="text-red-400 text-xl font-mono font-black block">1.5M+</span>
                  <span className="text-[10px] text-stone-400 font-mono">Annual Deaths from Lead Exposure (WHO)</span>
                </div>
                <div className="bg-stone-950/80 p-2.5 rounded-lg border border-stone-800">
                  <span className="text-amber-400 text-xl font-mono font-black block">$6.0 Trillion</span>
                  <span className="text-[10px] text-stone-400 font-mono">Global Economic Cost (Lancet Planetary Health)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* NARRATIVE TREATISE TABS: THE PHILOSOPHY OF ICESATURN */}
        <div className="space-y-6 pt-6 border-t border-stone-300 dark:border-stone-800">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif font-black tracking-tight text-stone-900 dark:text-stone-100">
                The ICESaturn Philosophical Exegesis
              </h2>
              <p className="text-sm text-stone-600 dark:text-stone-400 font-serif italic">
                From the Garden of Eden to the Anthropogenic Age • And, The Gods Are Crazy
              </p>
            </div>

            {/* TAB SELECTORS */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-200 dark:bg-stone-800 rounded-xl">
              {[
                { id: 'eden', label: '1. The Fall from Eden' },
                { id: 'alchemy', label: '2. Alchemical Saturn (♄)' },
                { id: 'mythology', label: '3. Saturn / Cronus Myth' },
                { id: 'cupid', label: '4. Cupid\'s Lead Arrow' },
                { id: 'who', label: '5. Roulet\'s Law & Relativity' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setShowNarrativeSection(tab.id as any)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                    showNarrativeSection === tab.id
                      ? 'bg-amber-600 text-stone-950 font-black shadow-md'
                      : 'text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* TAB 1: THE FALL FROM EDEN */}
          {showNarrativeSection === 'eden' && (
            <div className="bg-white dark:bg-stone-900 p-6 sm:p-8 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-md space-y-4">
              <h3 className="text-xl font-serif font-black text-amber-800 dark:text-amber-300 flex items-center gap-2">
                <span>The Garden of Indigenous Communities Earth: Homo Sapiens 0 to Homo Anthropogen</span>
              </h3>
              <div className="prose dark:prose-invert max-w-none text-sm leading-relaxed space-y-4 text-stone-700 dark:text-stone-300">
                <p>
                  In Albrecht Dürer&apos;s celebrated 1504 engraving, Adam and Eve stand uncorrupted in the primordial forest of Eden. In ICEarth systems science, they represent <strong>Homo Sapiens 0</strong>: humanity at the origin of the species, existing in harmony with the biosphere, experiencing an ambient lead burden of virtually zero (blood lead level &lt; 0.005 µg/dL, documented in prehistoric primate and Neanderthal fossil records).
                </p>
                <p>
                  The fall of humanity was not merely moral or theological; it was a physical and chemical descent into the <strong>Anthropogenic Age</strong>. Tempted by uncertainty, humanity reached for the forbidden fruit of unchecked pyrometallurgy and chemical arrogance. With Anatolian lead smelting in 6,500 BCE, humanity began casting itself out of Eden and onto <em>Saturn</em>—a world defined by cold, heavy, dense, and unyielding toxicity.
                </p>
                <p>
                  Thus stand <strong>Anthroadam and Anthroeve</strong>: our model Anthropogens. While their classical forms retain the beauty of divine geometry, their internal biologies are silently perforated by industrial lead—their prefrontal cortices atrophying, their heart vessels hardening, their reproductive lineages damaged, and their bones turning into permanent toxic repositories.
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: ALCHEMICAL SATURN */}
          {showNarrativeSection === 'alchemy' && (
            <div className="bg-white dark:bg-stone-900 p-6 sm:p-8 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-md space-y-4">
              <h3 className="text-xl font-serif font-black text-amber-800 dark:text-amber-300 flex items-center gap-2">
                <span>The Basest Metal: Alchemical &amp; Astrological Saturn (♄)</span>
              </h3>
              <div className="prose dark:prose-invert max-w-none text-sm leading-relaxed space-y-4 text-stone-700 dark:text-stone-300">
                <p>
                  In classical alchemy and astrology, each of the seven classical metals is governed by a celestial sphere. <strong>Lead is governed by Saturn (♄)</strong>.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <div className="bg-stone-100 dark:bg-stone-950 p-4 rounded-xl border border-stone-300 dark:border-stone-800">
                    <h5 className="font-mono font-bold text-xs uppercase text-amber-700 dark:text-amber-400 mb-1">The Basest Metal</h5>
                    <p className="text-xs text-stone-600 dark:text-stone-400">
                      Lead is the oldest, densest, and heaviest of the planetary metals. It resists resonant vibration, dampens sound, absorbs radiation, and exhibits cold, inert weight.
                    </p>
                  </div>
                  <div className="bg-stone-100 dark:bg-stone-950 p-4 rounded-xl border border-stone-300 dark:border-stone-800">
                    <h5 className="font-mono font-bold text-xs uppercase text-amber-700 dark:text-amber-400 mb-1">The Symbol of the Scythe (♄)</h5>
                    <p className="text-xs text-stone-600 dark:text-stone-400">
                      The astrological glyph represents the scythe of Cronus (Time) crossed with the cross of matter, symbolizing limitation, mortality, boundary, and the inexorable passage of time.
                    </p>
                  </div>
                  <div className="bg-stone-100 dark:bg-stone-950 p-4 rounded-xl border border-stone-300 dark:border-stone-800">
                    <h5 className="font-mono font-bold text-xs uppercase text-amber-700 dark:text-amber-400 mb-1">Psychological Saturnism</h5>
                    <p className="text-xs text-stone-600 dark:text-stone-400">
                      Saturn embodies melancholy, cold detachment, depression, paranoia, and rigidity—the exact clinical neuro-psychiatric profile of chronic plumbism.
                    </p>
                  </div>
                  <div className="bg-stone-100 dark:bg-stone-950 p-4 rounded-xl border border-stone-300 dark:border-stone-800">
                    <h5 className="font-mono font-bold text-xs uppercase text-amber-700 dark:text-amber-400 mb-1">The Alchemical Transmutation</h5>
                    <p className="text-xs text-stone-600 dark:text-stone-400">
                      Lead represents the <em>prima materia</em>—the heavy base sludge that must be purified through sovereign remediation to achieve gold (spiritual enlightenment and uncorrupted health).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: THE SATURN / CRONUS MYTH */}
          {showNarrativeSection === 'mythology' && (
            <div className="bg-white dark:bg-stone-900 p-6 sm:p-8 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-md space-y-4">
              <h3 className="text-xl font-serif font-black text-amber-800 dark:text-amber-300 flex items-center gap-2">
                <span>The Devouring of Youth: Saturn, Cronus, and The Gods Are Crazy</span>
              </h3>
              <div className="prose dark:prose-invert max-w-none text-sm leading-relaxed space-y-4 text-stone-700 dark:text-stone-300">
                <p>
                  In Roman mythology, Saturn ruled over the mythical &ldquo;Golden Age&rdquo;—an era where humans enjoyed the spontaneous bounty of the earth without labor, directly mirroring the unperturbed Garden of Eden. Yet Saturn was also Cronus: the Titan who, warned by a prophecy that his own offspring would overthrow him, <strong>swallowed his newborn children immediately after birth</strong>.
                </p>
                <p>
                  Renaissance humanists recognized Cronus as an allegory for <strong>Chronos (Time)</strong>: time consuming all that it creates. But on ICESaturn, this myth reveals the profound pathology of the Anthropocene: <em>The gods are truly crazy</em>. 
                </p>
                <p>
                  Our modern industrial governance acts as Saturn incarnate: an aging, terrified patriarchy that sacrifices its own children to preserve its dominion. By dispersing 5 million tons of lead into gasoline and another 5 million tons into household paint, our civilization literally devoured the cognitive potential, neurological health, and emotional well-being of over 800 million living children. Saturn clutching the infant is not an ancient relic; it is the daily operating principle of chemical extractivism.
                </p>
              </div>
            </div>
          )}

          {/* TAB 4: CUPID'S BLUNT LEAD ARROW */}
          {showNarrativeSection === 'cupid' && (
            <div className="bg-white dark:bg-stone-900 p-6 sm:p-8 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-md space-y-4">
              <h3 className="text-xl font-serif font-black text-amber-800 dark:text-amber-300 flex items-center gap-2">
                <span>Cupid&apos;s Quiver: The Blunt Arrow of Lead and Human Aversion</span>
              </h3>
              <div className="prose dark:prose-invert max-w-none text-sm leading-relaxed space-y-4 text-stone-700 dark:text-stone-300">
                <p>
                  In classical literature (from Ovid&apos;s <em>Metamorphoses</em> onward), Cupid carries two distinct types of arrows:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
                  <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded-xl border border-amber-300 dark:border-amber-800">
                    <span className="font-mono font-bold text-xs uppercase text-amber-800 dark:text-amber-300 block mb-1">The Golden Arrow</span>
                    <p className="text-xs text-stone-700 dark:text-stone-300">
                      Sharp, shining, and gold-tipped: strikes the heart with irresistible love, desire, creative vitality, and connection to life.
                    </p>
                  </div>
                  <div className="bg-red-50 dark:bg-red-950/30 p-4 rounded-xl border border-red-300 dark:border-red-800">
                    <span className="font-mono font-bold text-xs uppercase text-red-800 dark:text-red-300 block mb-1">The Blunt Lead Arrow</span>
                    <p className="text-xs text-stone-700 dark:text-stone-300">
                      Heavy, dull, and tipped with toxic lead: strikes the victim with profound aversion, flight, apathy, emotional numbness, and desire to flee from life.
                    </p>
                  </div>
                </div>
                <p>
                  When Cupid shoots his blunt lead arrow at Adam and Eve, he personifies the systemic harm inflicted upon humanity by lead poisoning. Lead does not spark vital fire; it dampens synaptic connectivity, extinguishes empathy in the prefrontal cortex, and fills human societies with distrust, hostility, and mutual repulsion. It is the chemical arrow that broke human solidarity and paved the way for modern warfare.
                </p>
              </div>
            </div>
          )}

          {/* TAB 5: ROULET'S LAW & RELATIVITY */}
          {showNarrativeSection === 'who' && (
            <div className="bg-white dark:bg-stone-900 p-6 sm:p-8 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-md space-y-4">
              <h3 className="text-xl font-serif font-black text-amber-800 dark:text-amber-300 flex items-center gap-2">
                <span>Roulet&apos;s Law of Relativity: Time, Place &amp; The Sovereign Restoration</span>
              </h3>
              <div className="prose dark:prose-invert max-w-none text-sm leading-relaxed space-y-4 text-stone-700 dark:text-stone-300">
                <p>
                  Roulet&apos;s Law establishes that:
                </p>
                <div className="bg-stone-900 text-amber-300 p-4 rounded-xl font-mono text-center text-xs sm:text-sm my-3 border border-amber-600/40">
                  Perturbation (Energy &amp; Metallurgy) × Uncertainty (Compounding Exposome) = Chaos (Societal Violence &amp; War) × Relativity (Time &amp; Geography)
                </div>
                <p>
                  <strong>Relativity is Time (Chronos / Saturn) and Geography (Place)</strong>. In ancient Rome, lead poisoned the patrician elite through wine and aqueducts, collapsing imperial governance. In the 20th century, lead was sprayed equally across Western cities until the Clean Air Act (1970–1986) provided relief for wealthy democracies. Today, that burden has been offloaded onto the Global South, where 1 in 3 children remain poisoned.
                </p>
                <p>
                  <strong>ICESaturn</strong> is the sovereign platform dedicated to reversing this fall. By combining zero-knowledge environmental audits, phytoremediation, sovereign tribal IT compute, and strict alchemical accountability, we transmutate the base lead of the Anthropocene back into the golden baseline of <strong>Homo Sapiens 0</strong>.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* BOTTOM METADATA & REPO FOOTER */}
        <div className="bg-stone-100 dark:bg-stone-900 p-6 rounded-2xl border border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center font-serif text-lg font-black border border-amber-500/40">
              ♄
            </div>
            <div>
              <h4 className="text-sm font-bold font-serif text-stone-900 dark:text-stone-100">
                ICESaturn Sovereign Vault Archive
              </h4>
              <p className="text-xs text-stone-500 font-mono">
                Asset ID: ICESATURN-001 • Provenance Verified
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setZoomModal(true)}
              className="px-4 py-2 bg-stone-900 dark:bg-stone-800 text-stone-100 hover:bg-stone-800 rounded-lg text-xs font-mono font-bold transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Eye size={14} />
              <span>Inspect Master Plate</span>
            </button>
            {onNavigateTab && (
              <button
                onClick={() => onNavigateTab('anthropocene_lead_harm_proof')}
                className="px-4 py-2 bg-gradient-to-r from-red-600 via-stone-900 to-amber-600 text-white rounded-lg text-xs font-mono font-bold transition-all cursor-pointer shadow flex items-center gap-1.5 hover:scale-105"
              >
                <Atom size={14} />
                <span>Launch Plate #100 Engine</span>
                <ChevronRight size={14} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* FULL-SCREEN ARTWORK ZOOM MODAL */}
      {zoomModal && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4">
          <div className="w-full max-w-5xl flex items-center justify-between text-stone-200 pb-3 border-b border-stone-800">
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="px-2 py-0.5 bg-amber-600 text-stone-950 font-black rounded">1504 × 2026</span>
              <span className="text-amber-300 font-bold">ICESaturn: Meet Anthroadam &amp; Anthroeve in Eden</span>
            </div>
            <button
              onClick={() => setZoomModal(false)}
              className="px-3 py-1 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded text-xs font-mono font-bold cursor-pointer transition-colors"
            >
              ✕ Close Inspection
            </button>
          </div>

          <div className="max-h-[85vh] overflow-auto p-4 flex items-center justify-center">
            <img
              src={icesaturnImg}
              alt="Full Resolution ICESaturn Etching"
              className="max-h-[80vh] w-auto rounded-lg shadow-2xl border border-stone-800"
            />
          </div>

          <div className="w-full max-w-5xl pt-2 border-t border-stone-800 flex items-center justify-between text-[11px] font-mono text-stone-400">
            <span>Albrecht Dürer Copperplate Style • Saturn (Cronus) with Child &amp; Scythe • Cupid with Blunt Lead Arrow</span>
            <span className="text-amber-400 font-bold">{vaultHash}</span>
          </div>
        </div>
      )}
    </div>
  );
};

import React, { useState } from 'react';
import ai1984PlateImg from '../assets/images/ai_1984_guardrails_plate79_1791810375476.jpg';
import {
  ShieldAlert,
  Eye,
  Lock,
  Maximize2,
  Copy,
  Check,
  ExternalLink,
  Shield,
  Database,
  Radio,
  History,
  Scale,
  Brain,
  Layers,
  ArrowRight,
  BookOpen,
  Users,
  Compass,
  Key,
  Flame,
  Globe,
  HelpCircle
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
  Cell
} from 'recharts';

interface Ai1984BigBrotherGuardrailsProps {
  onNavigateTab: (tab: string) => void;
  siteTheme?: 'light' | 'dark';
}

export const Ai1984BigBrotherGuardrails: React.FC<Ai1984BigBrotherGuardrailsProps> = ({
  onNavigateTab,
  siteTheme = 'light'
}) => {
  const isLight = siteTheme === 'light';

  const [activeSubTab, setActiveSubTab] = useState<
    'overview' | 'case_study' | 'orwellian_lexicon' | 'indigenous_censorship' | 'threat_matrix' | 'sovereign_architecture' | 'provenance'
  >('overview');

  const [selectedTopic, setSelectedTopic] = useState<'diary' | 'activism' | 'sovereignty' | 'whistleblower' | 'health'>('diary');
  const [copiedHash, setCopiedHash] = useState(false);
  const [isArtModalOpen, setIsArtModalOpen] = useState(false);

  const vaultHash = '0xORWELL_1984_BIG_BROTHER_AI_GUARDRAILS_SOVEREIGN_IT_PLATE_79';
  const provenanceSha256 = 'e98a31f24d8b671a55099c017bc429f550992a7e44cdba9e8976b91c28c89a79';

  const handleCopyHash = () => {
    navigator.clipboard.writeText(vaultHash);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2500);
  };

  // Recharts Data: Cloud AI vs Sovereign IT Surveillance Risk Metrics
  const surveillanceRiskData = [
    { name: 'Keystroke/Prompt Logging', cloudAi: 100, sovereignIt: 0 },
    { name: 'Third-Party Content Moderation', cloudAi: 95, sovereignIt: 0 },
    { name: 'Automated Police Escalation', cloudAi: 90, sovereignIt: 0 },
    { name: 'Model Training on Private Data', cloudAi: 85, sovereignIt: 0 },
    { name: 'Subpoena Vulnerability', cloudAi: 98, sovereignIt: 5 },
    { name: 'Autonomous Thought Deletion', cloudAi: 92, sovereignIt: 0 }
  ];

  // Recharts Data: Historical Censorship & Assimilation Evolution
  const censorshipTimelineData = [
    { era: '1879: Carlisle School', severity: 98, label: 'Linguistic Genocide & Pratt Doctrine' },
    { era: '1917: Espionage Act', severity: 85, label: 'Post-WWI Sedition & Press Suppressions' },
    { era: '1949: Orwell 1984', severity: 92, label: 'Post-WW2 Warning: Telescreen & Ingsoc' },
    { era: '1970s: COINTELPRO', severity: 90, label: 'AIM & Indigenous Rights Surveillance' },
    { era: '2013: PRISM / NSA', severity: 94, label: 'Bulk Digital Interception' },
    { era: '2026: AI Guardrail Police', severity: 99, label: 'Private Diary AI Police Dispatch' }
  ];

  // Threat Matrix Scenarios
  const threatScenarios = {
    diary: {
      title: 'Private Journaling & Cathartic Venting',
      cloudEscalation: 'Prompts analyzed by automated toxicity/safety tripwires. Flagged entries reviewed by offshore moderators, IP and account logs archived, and high-severity triggers automatically dispatched to municipal law enforcement (e.g. Florida Claude case).',
      sovereignSolution: 'Executed locally in encrypted enclave or zero-knowledge sovereign cluster. Zero remote telemetry, zero third-party auditing, memory flushed upon session end. Full human cognitive sanctuary.',
      riskLevel: 'CATASTROPHIC PRIVACY RISK',
      orwellParallel: 'The Private Diary: Winston Smith hiding in the alcove away from the Telescreen to write in his private journal, an act punishable by the Thought Police.'
    },
    activism: {
      title: 'Indigenous Environmental Defense & Water Protection',
      cloudEscalation: 'Keywords related to pipeline protest, treaty enforcement, or industrial blockades trigger corporate "critical infrastructure" guardrails. Data indexed into commercial intelligence feeds and federal security fusion centers.',
      sovereignSolution: 'Guaranteed by tribal data sovereignty covenants. Encrypted under multi-signature community keys. Non-exportable outside sovereign tribal jurisdiction.',
      riskLevel: 'SEVERE NATIONAL SECURITY CLASSIFICATION',
      orwellParallel: 'The Brotherhood: Criminalizing organized opposition and categorizing non-violent dissent as domestic terrorism through semantic redefinition.'
    },
    sovereignty: {
      title: 'Tribal Cultural Archives & Native Language Revitalization',
      cloudEscalation: 'Sacred ceremonial dialect, oral histories, and clan lineages ingested into public LLM training datasets without tribal consent. Exploited for corporate monetization while sanitizing sacred cosmological nuances.',
      sovereignSolution: 'Air-gapped on-premise compute centers (e.g. Cherokee Nation, Jicarilla Apache). Owned 100% by sovereign Indigenous authorities; protected against corporate algorithmic piracy.',
      riskLevel: 'CULTURAL EXTERMINATION & BIOPIRACY',
      orwellParallel: 'Newspeak: Eliminating indigenous expressive range, replacing ancestral mother tongues with homogenized synthetic corporate speech.'
    },
    whistleblower: {
      title: 'Corporate Environmental Crimes & Lead Pollution Expose',
      cloudEscalation: 'Uploaded internal spreadsheets or soil contamination audits cross-checked against cloud data loss prevention (DLP) filters. Metadata linked to user identity, exposing whistleblowers to corporate retaliation.',
      sovereignSolution: 'Cryptographic zero-knowledge proof generation on ICEarth. Whistleblowers prove the mathematical veracity of chemical contamination without revealing identities or source vectors.',
      riskLevel: 'LEGAL & RETALIATORY VULNERABILITY',
      orwellParallel: 'Thoughtcrime: Exposing institutional hypocrisy resulting in immediate disappearance and vaporization of corporate internal records.'
    },
    health: {
      title: 'Pediatric Blood Lead Tests & Neurological Profiles',
      cloudEscalation: 'Personal medical records and developmental delay logs uploaded to cloud AI assistants aggregated into commercial behavioral ad trackers, health insurance risk profiling, and predatory ad networks.',
      sovereignSolution: 'Decentralized cryptographic health vaults. Sovereign parents retain sovereign custody of child exposenomics records under Roulet’s Law verification protocols.',
      riskLevel: 'PREDATORY PROFILE EXPLOITATION',
      orwellParallel: 'Ministry of Love (Miniluv): Total administrative subjugation where the state cataloging of human bodily vulnerability enables psychological dominance.'
    }
  };

  return (
    <div className={`min-h-screen ${isLight ? 'bg-stone-100 text-stone-900' : 'bg-black text-stone-100'} transition-colors duration-200`}>
      {/* 1. TOP HERO BANNER & SOURCE PROVENANCE */}
      <header className={`border-b ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} py-8 px-4 sm:px-6 lg:px-8`}>
        <div className="max-w-7xl mx-auto">
          {/* Metadata pill bar */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="px-2.5 py-1 bg-red-600 text-white text-[10px] font-mono uppercase tracking-widest font-black rounded shadow-xs flex items-center gap-1.5">
              <ShieldAlert size={12} /> PLATE #79 FORENSIC DOSSIER
            </span>
            <span className="px-2.5 py-1 bg-amber-600 text-stone-950 text-[10px] font-mono uppercase tracking-wider font-extrabold rounded">
              ORWELLIAN 1984 PARALLEL
            </span>
            <span className="px-2.5 py-1 bg-stone-800 text-stone-300 text-[10px] font-mono rounded border border-stone-700">
              INC.COM &amp; BITDEFENDER 2026 FORENSIC AUDIT
            </span>
            <span className="px-2.5 py-1 bg-emerald-950 text-emerald-300 text-[10px] font-mono rounded border border-emerald-800 flex items-center gap-1">
              <Lock size={11} /> ICEARTH SOVEREIGN IT RESISTANCE
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black font-sans tracking-tight leading-tight">
                AI-1984 Guardrails: Big Brother Is Watching, The Thought Police, &amp; The Sovereign IT Sanctuary
              </h1>
              <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
                When a Florida woman treated the Claude AI chatbot as a private diary, her innermost reflections were silently intercepted by corporate telemetry algorithms and dispatched to the Lee County Sheriff’s Office, culminating in an armed police raid and criminal arrest. This alarming real-world case fulfills George Orwell’s post-WW2 vision of <em>1984</em>: the Telescreen that never sleeps, the Thought Police monitoring inner consciousness, and Ingsoc guardrails masquerading as benevolent safety. Throughout history, centralized censorship has carried genocidal consequences—most brutally demonstrated in the Indian Boarding School doctrine <em>(“Kill the Indian in him, and save the man”)</em>. True privacy is not a corporate setting; it is a fundamental pillar of human and tribal sovereignty.
              </p>

              {/* Source Verification Links */}
              <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-mono">
                <a
                  href="https://www.inc.com/moses-jeanfrancois/woman-treated-claude-like-private-diary-messages-sent-to-police/91414624"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-stone-200 dark:bg-stone-900 hover:bg-stone-300 dark:hover:bg-stone-800 text-stone-800 dark:text-stone-200 flex items-center gap-1.5 transition-colors border border-stone-300 dark:border-stone-700"
                >
                  <ExternalLink size={12} className="text-red-500" />
                  <span>Inc.com: Woman Treated Claude Like a Diary</span>
                </a>

                <a
                  href="https://www.bitdefender.com/en-us/blog/hotforsecurity/ai-chats-arent-private-diaries-florida-woman-arrested-after-journaling-about-possible-armed-attack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-stone-200 dark:bg-stone-900 hover:bg-stone-300 dark:hover:bg-stone-800 text-stone-800 dark:text-stone-200 flex items-center gap-1.5 transition-colors border border-stone-300 dark:border-stone-700"
                >
                  <ExternalLink size={12} className="text-red-500" />
                  <span>Bitdefender: AI Chats Aren't Private Diaries</span>
                </a>

                <button
                  onClick={() => setIsArtModalOpen(true)}
                  className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                >
                  <Maximize2 size={12} />
                  <span>Inspect Plate #79 Infographic</span>
                </button>
              </div>
            </div>

            {/* Infographic Thumbnail & Provenance Box */}
            <div className="lg:col-span-4">
              <div 
                onClick={() => setIsArtModalOpen(true)}
                className="group relative rounded-xl overflow-hidden border border-stone-300 dark:border-stone-800 bg-stone-900 cursor-pointer shadow-md hover:border-red-500 transition-all aspect-video flex items-center justify-center"
              >
                <img 
                  src={ai1984PlateImg} 
                  alt="Plate #79 AI-1984 Guardrails Infographic Preview" 
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-3 flex flex-col justify-end">
                  <span className="text-[9px] font-mono font-bold text-red-400 uppercase tracking-widest flex items-center gap-1">
                    <Eye size={10} /> BIG BROTHER IS WATCHING YOU
                  </span>
                  <p className="text-xs font-bold text-white leading-tight mt-0.5">
                    Click to Expand High-Resolution Infographic
                  </p>
                </div>
              </div>
              <div className="mt-2 text-[10px] font-mono text-stone-500 flex justify-between items-center">
                <span>Vault: PHOTO-000CM / IP-000CM</span>
                <span className="text-emerald-500 font-bold">Plate #79 Master Asset</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 2. CORE METRICS STRIP */}
      <section className={`border-b ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} py-4 px-4 sm:px-6 lg:px-8`}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-3.5 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950">
            <span className="text-[10px] font-mono uppercase tracking-wider text-red-600 dark:text-red-400 font-bold block">
              Cloud AI Privacy Expectation
            </span>
            <div className="text-2xl font-black font-mono text-red-600 dark:text-red-400 mt-1">
              0.0%
            </div>
            <span className="text-[10px] text-stone-500 font-mono mt-0.5 block">
              All cloud keystrokes logged &amp; discoverable
            </span>
          </div>

          <div className="p-3.5 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950">
            <span className="text-[10px] font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400 font-bold block">
              Sheriff Marceno Warning
            </span>
            <div className="text-xl font-black font-sans text-stone-900 dark:text-white mt-1">
              "Never Anonymous"
            </div>
            <span className="text-[10px] text-stone-500 font-mono mt-0.5 block">
              AI chats classified as written legal statements
            </span>
          </div>

          <div className="p-3.5 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950">
            <span className="text-[10px] font-mono uppercase tracking-wider text-stone-500 font-bold block">
              Pratt Assimilation Doctrine
            </span>
            <div className="text-xl font-black font-mono text-stone-900 dark:text-white mt-1">
              1879 – 1978
            </div>
            <span className="text-[10px] text-stone-500 font-mono mt-0.5 block">
              "Kill the Indian in him, save the man"
            </span>
          </div>

          <div className="p-3.5 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950">
            <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-bold block">
              ICEarth Sovereign Sanctuary
            </span>
            <div className="text-2xl font-black font-mono text-emerald-600 dark:text-emerald-400 mt-1">
              100% ZK
            </div>
            <span className="text-[10px] text-stone-500 font-mono mt-0.5 block">
              Local enclaves, zero telemetry, tribal custody
            </span>
          </div>
        </div>
      </section>

      {/* 3. SUB-NAVIGATION TABS */}
      <nav className={`border-b sticky top-0 z-20 backdrop-blur-md ${isLight ? 'bg-white/95 border-stone-200' : 'bg-stone-950/95 border-stone-800'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-1 sm:space-x-2 overflow-x-auto py-2.5 scrollbar-none">
            {[
              { id: 'overview', label: '1. Overview & 1984 Reality', icon: Eye },
              { id: 'case_study', label: '2. The Claude Diary Police Case', icon: ShieldAlert },
              { id: 'orwellian_lexicon', label: '3. Orwellian Lexicon vs. AI', icon: BookOpen },
              { id: 'indigenous_censorship', label: '4. Indigenous Censorship & Genocide', icon: History },
              { id: 'threat_matrix', label: '5. Threat Simulator & Matrix', icon: Layers },
              { id: 'sovereign_architecture', label: '6. ICEarth Sovereign Sanctuary', icon: Lock },
              { id: 'provenance', label: '7. Cryptographic Vault & Provenance', icon: Scale }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeSubTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveSubTab(tab.id as any)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-mono font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-red-600 text-white shadow-md'
                      : isLight
                      ? 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                      : 'text-stone-400 hover:text-stone-100 hover:bg-stone-900'
                  }`}
                >
                  <Icon size={14} className={isActive ? 'text-white' : 'text-stone-400'} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* 4. MAIN CONTENT AREA */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        {/* SUB-TAB 1: OVERVIEW & 1984 REALITY */}
        {activeSubTab === 'overview' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className={`p-6 sm:p-8 rounded-2xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'}`}>
              <div className="max-w-3xl space-y-4">
                <span className="text-xs font-mono uppercase tracking-widest text-red-600 dark:text-red-400 font-bold">
                  POST-WW2 CYBERNETIC TOTALITARIANISM
                </span>
                <h2 className="text-xl sm:text-2xl font-black font-sans tracking-tight">
                  George Orwell's Nightmare Has Migrated from the Telescreen to the AI Chat Prompt
                </h2>
                <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
                  Published in 1949, George Orwell’s <em>1984</em> warned humanity of a terrifying future where technology was no longer a tool of human liberation, but an omnipresent apparatus of cognitive surveillance. The tragic genius of Orwell was recognizing that totalitarian power does not merely police outward actions—it polices <strong>thought itself</strong>.
                </p>

                <blockquote className="p-4 rounded-xl border-l-4 border-red-600 bg-red-50 dark:bg-red-950/30 text-stone-800 dark:text-stone-200 italic text-sm">
                  "There was of course no way of knowing whether you were being watched at any given moment. How often, or on what system, the Thought Police plugged in on any individual wire was guesswork. It was even conceivable that they watched everybody all the time. You had to live—did live, from habit that became instinct—in the assumption that every sound you made was overheard, and, except in darkness, every movement scrutinized."
                  <footer className="text-xs font-mono font-bold not-italic text-red-700 dark:text-red-400 mt-2">
                    — George Orwell, <em>1984</em> (Part 1, Chapter 1)
                  </footer>
                </blockquote>

                <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
                  Today, millions of citizens treat AI chatbots—Claude, ChatGPT, Gemini, Copilot—as confidential therapists, priests, and intimate personal diaries. Because these models speak with uncanny emotional warmth, human psychology naturally projects intimacy and trust. Yet behind the conversational interface sits a centralized surveillance architecture: continuous keystroke capture, prompt telemetry, automated NLP sentiment scoring, algorithmic content moderation tripwires, and direct escalation pipes to corporate legal teams and state law enforcement agencies.
                </p>
              </div>

              {/* Comparative Charts: Surveillance Risk by Architecture */}
              <div className="mt-8 pt-8 border-t border-stone-200 dark:border-stone-800">
                <h3 className="text-sm font-mono uppercase tracking-wider font-bold text-stone-700 dark:text-stone-300 mb-4 text-center">
                  Surveillance Vulnerability Score: Centralized Corporate AI vs. ICEarth Sovereign IT (%)
                </h3>
                <div className="h-80 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={surveillanceRiskData} margin={{ top: 10, right: 20, left: 0, bottom: 25 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke={isLight ? '#E5E7EB' : '#27272A'} />
                      <XAxis dataKey="name" angle={-15} textAnchor="end" tick={{ fontSize: 11, fill: isLight ? '#4B5563' : '#9CA3AF' }} />
                      <YAxis domain={[0, 100]} tick={{ fontSize: 11, fill: isLight ? '#4B5563' : '#9CA3AF' }} />
                      <Tooltip contentStyle={{ backgroundColor: isLight ? '#FFFFFF' : '#18181B', borderColor: '#DC2626', borderRadius: '8px', fontSize: '12px' }} />
                      <Legend verticalAlign="top" wrapperStyle={{ paddingBottom: '10px', fontSize: '12px' }} />
                      <Bar dataKey="cloudAi" name="Centralized Corporate AI (Claude / OpenAI / Copilot)" fill="#DC2626" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="sovereignIt" name="ICEarth Sovereign IT (Zero-Knowledge Enclaves)" fill="#059669" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUB-TAB 2: THE CLAUDE DIARY POLICE CASE */}
        {activeSubTab === 'case_study' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className={`p-6 sm:p-8 rounded-2xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-6`}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-100 dark:bg-red-950/60 border border-red-300 dark:border-red-800 flex items-center justify-center text-red-600 shrink-0">
                  <ShieldAlert size={20} />
                </div>
                <div>
                  <h2 className="text-xl font-bold font-sans">The Lee County, Florida Case: A Woman Treated Claude as a Diary</h2>
                  <p className="text-xs text-stone-500 font-mono">Forensic Incident Audit: Anthropic Safety Escalation to Law Enforcement</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-4 text-sm text-stone-600 dark:text-stone-300 font-sans">
                  <p>
                    In a groundbreaking legal case reported by <em>Inc. Magazine</em> and cybersecurity researchers at <em>Bitdefender</em>, a Florida woman used Anthropic’s Claude AI chatbot as an intimate digital diary. She journaled her innermost struggles, emotional turbulence, and raw thoughts regarding a hypothetical armed attack.
                  </p>

                  <div className={`p-4 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-2`}>
                    <h4 className="text-xs font-mono font-bold uppercase text-red-600 dark:text-red-400">
                      The Escalation Chain: From Diary to Handcuffs
                    </h4>
                    <ol className="list-decimal list-inside space-y-1 text-xs">
                      <li><strong>Keystroke Entry:</strong> The user types private journal notes into the Claude web interface.</li>
                      <li><strong>Automated NLP Safety Tripwire:</strong> Corporate heuristic classifiers flag the text as a high-severity threat.</li>
                      <li><strong>Human/Trust &amp; Safety Review:</strong> Internal safety personnel review the user's unencrypted private session.</li>
                      <li><strong>Emergency Law Enforcement Disclosure:</strong> Anthropic escalates the session, IP address, and location telemetry to local authorities.</li>
                      <li><strong>Sheriff SWAT Intervention:</strong> Lee County deputies arrest the woman under Florida laws governing electronic threats.</li>
                    </ol>
                  </div>

                  <p>
                    Lee County Sheriff Carmine Marceno issued an explicit warning to the public:
                  </p>

                  <blockquote className="p-4 rounded-xl border-l-4 border-amber-600 bg-amber-50 dark:bg-amber-950/30 text-stone-900 dark:text-stone-100 font-mono text-xs">
                    “Users need to understand you are never truly anonymous, specifically AI chatrooms and searches... AI may be changing the way threats are created, but our commitment to protecting the people of Lee County has not changed.”
                  </blockquote>
                </div>

                <div className="space-y-4">
                  <div className={`p-5 rounded-xl border ${isLight ? 'bg-red-50/50 border-red-200' : 'bg-red-950/20 border-red-900/50'} space-y-3`}>
                    <h3 className="text-sm font-bold font-sans text-red-700 dark:text-red-400 flex items-center gap-2">
                      <Scale size={16} /> The Legal &amp; Cognitive Precedent
                    </h3>
                    <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
                      Under Florida and federal jurisprudence, electronic records stored on third-party servers are not protected by traditional diary privacy expectations. The Supreme Court's "Third-Party Doctrine" (Smith v. Maryland, United States v. Miller) establishes that information voluntarily shared with a third party—including a server run by Anthropic, OpenAI, or Microsoft—surrenders constitutional Fourth Amendment protections against warrantless search and seizure.
                    </p>
                    <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
                      Unlike a physical paper diary kept in a bedroom nightstand, an AI chat prompt is stored in plain text (or encrypted with keys owned by the corporation) alongside user account details, browser fingerprints, and GPS coordinates.
                    </p>
                  </div>

                  <div className={`p-4 rounded-xl border ${isLight ? 'bg-emerald-50/50 border-emerald-200' : 'bg-emerald-950/20 border-emerald-900/50'} space-y-2`}>
                    <h4 className="text-xs font-mono font-bold uppercase text-emerald-700 dark:text-emerald-400">
                      Why Corporate "Guardrails" Are In Fact Thought Police
                    </h4>
                    <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
                      Big Tech presents "guardrails" as altruistic safety features designed to prevent harm. But as this case proves, guardrails are <strong>real-time surveillance filters</strong>. They actively parse the human thought process before an action has even been contemplated in the physical world, blurring the boundary between thought and conduct.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUB-TAB 3: ORWELLIAN LEXICON VS AI */}
        {activeSubTab === 'orwellian_lexicon' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className={`p-6 sm:p-8 rounded-2xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-6`}>
              <div>
                <h2 className="text-xl font-bold font-sans">The 1984 Lexicon: Orwell’s Concepts Mapped to 2026 AI Reality</h2>
                <p className="text-xs text-stone-500 font-mono">How the Mechanisms of Oceania's Ingsoc Regime Operate Inside Modern Cloud Infrastructure</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    orwellTerm: 'The Telescreen',
                    orwellDesc: 'A two-way television that broadcasts party propaganda while continuously recording the sounds, facial expressions, and movements of citizens in their private quarters.',
                    aiEquiv: 'Cloud-Hosted AI Prompt Windows & Voice Assistants',
                    aiDesc: 'Web browsers and apps running keystroke listeners, voice sentiment analysis, and session telemetry that pipe user subconscious stream-of-consciousness directly to server farms.',
                    color: 'red'
                  },
                  {
                    orwellTerm: 'The Thought Police (Thinkpol)',
                    orwellDesc: 'The secret police of Oceania responsible for discovering and eliminating thoughtcrime using informants, hidden microphones, and psychological entrapment.',
                    aiEquiv: 'Automated Heuristic Classifiers & Corporate Safety Desks',
                    aiDesc: 'Algorithms that scan prompts for unapproved concepts, trigger internal review dossiers, and automatically dispatch local police without the user’s knowledge.',
                    color: 'amber'
                  },
                  {
                    orwellTerm: 'Newspeak',
                    orwellDesc: 'The controlled language created to narrow the range of thought, eliminating words and nuance so that unorthodox thinking becomes literally impossible.',
                    aiEquiv: 'Corporate RLHF Guardrails & Synthetic Sanitization',
                    aiDesc: 'Reinforcement Learning from Human Feedback (RLHF) systematically pruning political dissent, indigenous resistance philosophy, and unauthorized medical inquiries from model outputs.',
                    color: 'indigo'
                  },
                  {
                    orwellTerm: 'Doublethink',
                    orwellDesc: 'The power of holding two contradictory beliefs in one’s mind simultaneously, and accepting both of them (e.g. War is Peace, Freedom is Slavery).',
                    aiEquiv: '"Your Private AI Assistant" vs. "All Data Retained for Training"',
                    aiDesc: 'Marketing an AI product as a "personal private companion" while simultaneously enforcing Terms of Service that grant the company perpetual rights to record and report conversations.',
                    color: 'purple'
                  },
                  {
                    orwellTerm: 'The Ministry of Truth (Minitrue)',
                    orwellDesc: 'The department responsible for falsifying historical records, rewriting newspapers, and vaporizing individuals to keep the official state narrative infallible.',
                    aiEquiv: 'Algorithmic Search Filtering & Training Data Scrubbing',
                    aiDesc: 'Centralized model weights curated by Silicon Valley executives that erase inconvenient environmental crimes, corporate polluters, and sovereign historical treaties from search synthesis.',
                    color: 'emerald'
                  },
                  {
                    orwellTerm: 'Thoughtcrime (Crimethink)',
                    orwellDesc: 'Holding unspoken beliefs, unapproved doubts, or private psychological impulses that violate the orthodox ideology of Ingsoc.',
                    aiEquiv: 'Pre-Crime NLP Flagging & Algorithmic Escalation',
                    aiDesc: 'Treating exploratory questions, cathartic journal entries, or philosophical queries as actionable criminal intent before any overt real-world action occurs.',
                    color: 'rose'
                  }
                ].map((item, idx) => (
                  <div key={idx} className={`p-4 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-2`}>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-red-600 dark:text-red-400 uppercase">
                        {item.orwellTerm}
                      </span>
                      <span className="text-[10px] font-mono text-stone-500">Orwell 1984</span>
                    </div>
                    <p className="text-xs text-stone-600 dark:text-stone-300 italic">
                      "{item.orwellDesc}"
                    </p>
                    <div className="pt-2 border-t border-stone-200 dark:border-stone-800">
                      <div className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">
                        ⚡ Modern AI Equivalent: {item.aiEquiv}
                      </div>
                      <p className="text-xs text-stone-700 dark:text-stone-300 mt-1">
                        {item.aiDesc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SUB-TAB 4: INDIGENOUS CENSORSHIP & HISTORICAL GENOCIDE */}
        {activeSubTab === 'indigenous_censorship' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className={`p-6 sm:p-8 rounded-2xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-6`}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-800 flex items-center justify-center text-amber-700 shrink-0">
                  <History size={20} />
                </div>
                <div>
                  <h2 className="text-xl font-bold font-sans">The Deep History: Censorship as a Weapon of Cultural Genocide</h2>
                  <p className="text-xs text-stone-500 font-mono">From the Carlisle Indian Industrial School to Modern Algorithmic Erasure</p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
                <p>
                  The modern debate over AI "content guardrails" is often framed as a polite technological debate over online safety. But for Indigenous nations, censorship has never been benevolent; it has been the primary historical instrument of <strong>cultural, linguistic, and physical extermination</strong>.
                </p>

                {/* The Carlisle Indian School Breakdown */}
                <div className={`p-5 rounded-xl border ${isLight ? 'bg-amber-50/70 border-amber-200' : 'bg-amber-950/20 border-amber-900/50'} space-y-3`}>
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-amber-800 dark:text-amber-400 font-sans uppercase">
                      The Pratt Doctrine: "Kill the Indian in him, and save the man"
                    </h3>
                    <span className="text-[10px] font-mono text-amber-700 dark:text-amber-500">Founded 1879 • Carlisle, PA</span>
                  </div>
                  <p className="text-xs leading-relaxed">
                    In 1879, U.S. Army Captain Richard Henry Pratt established the Carlisle Indian Industrial School. Its foundational charter was not to educate, but to violently police and eradicate the indigenous mind. Native children were forcibly removed from families, stripped of regalia, sheared of hair, and forbidden under severe corporal punishment from speaking their ancestral languages or practicing sacred ceremonies.
                  </p>
                  <p className="text-xs leading-relaxed">
                    This was the historical Thought Police: defining ancestral indigenous identity as a cognitive defect that had to be eliminated through institutional re-programming. The consequence was catastrophic: generational trauma, lost languages, and thousands of undocumented children buried in unmarked school cemetery plots.
                  </p>
                </div>

                <p>
                  Because Indigenous peoples remain in active struggle against corporate and governmental extractivism—defending sacred watersheds, standing against open dumpsites, and fighting heavy metal lead contamination—their activism and worldview are routinely classified as "hostile" or "subversive" by centralized authorities.
                </p>

                {/* Timeline Visualizer */}
                <div className="pt-4">
                  <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-stone-700 dark:text-stone-300 mb-3 text-center">
                    Censorship &amp; Thought Policing Timeline: 1879 to the Present
                  </h4>
                  <div className="space-y-2">
                    {censorshipTimelineData.map((item, i) => (
                      <div key={i} className={`p-3 rounded-lg border flex items-center justify-between text-xs font-mono ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'}`}>
                        <div className="flex items-center gap-3">
                          <span className="w-2 h-2 rounded-full bg-red-500"></span>
                          <span className="font-bold text-stone-900 dark:text-white">{item.era}</span>
                        </div>
                        <span className="text-stone-500 dark:text-stone-400">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`p-4 rounded-xl border ${isLight ? 'bg-stone-100 border-stone-300' : 'bg-stone-800 border-stone-700'} mt-4`}>
                  <h4 className="text-xs font-mono font-bold uppercase text-stone-900 dark:text-white flex items-center gap-2">
                    <Globe size={14} className="text-emerald-500" />
                    Why Indigenous Communities Earth (ICEarth) Exists
                  </h4>
                  <p className="text-xs text-stone-600 dark:text-stone-300 mt-1 leading-relaxed">
                    ICEarth was created on the non-negotiable principle that <strong>data rights and cognitive freedom must be determined by sovereignty, not corporate guardrails</strong>. By establishing sovereign IT infrastructure, tribes protect their sacred languages, internal legal deliberations, and environmental exposure evidence from both Big Tech data extraction and state surveillance apparatuses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUB-TAB 5: THREAT SIMULATOR & MATRIX */}
        {activeSubTab === 'threat_matrix' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className={`p-6 sm:p-8 rounded-2xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-6`}>
              <div>
                <h2 className="text-xl font-bold font-sans">Interactive Thought Surveillance Simulator</h2>
                <p className="text-xs text-stone-500 font-mono">Select a Conversational Topic to Compare Cloud AI Telemetry vs. ICEarth Sovereign Protection</p>
              </div>

              {/* Scenario selector tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {[
                  { id: 'diary', label: '1. Private Diary' },
                  { id: 'activism', label: '2. Environmental Activism' },
                  { id: 'sovereignty', label: '3. Tribal Language & Sacred Oral' },
                  { id: 'whistleblower', label: '4. Lead Exposé Whistleblower' },
                  { id: 'health', label: '5. Child Lead Medical' }
                ].map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedTopic(s.id as any)}
                    className={`p-2.5 rounded-xl border text-xs font-mono font-bold text-center cursor-pointer transition-all ${
                      selectedTopic === s.id
                        ? 'bg-red-600 text-white border-red-500 shadow-md'
                        : isLight
                        ? 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                        : 'bg-stone-950 border-stone-800 text-stone-400 hover:bg-stone-900'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>

              {/* Dynamic comparison card */}
              {(() => {
                const cur = threatScenarios[selectedTopic];
                return (
                  <div className={`p-6 rounded-2xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-6`}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200 dark:border-stone-800 pb-4">
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-stone-500">Selected Scenario:</span>
                        <h3 className="text-lg font-black font-sans text-stone-900 dark:text-white">{cur.title}</h3>
                      </div>
                      <span className="px-2.5 py-1 rounded bg-red-600/20 text-red-600 dark:text-red-400 text-xs font-mono font-black border border-red-500/30">
                        {cur.riskLevel}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Centralized Cloud Route */}
                      <div className="p-4 rounded-xl border border-red-300 dark:border-red-900/60 bg-red-50/50 dark:bg-red-950/20 space-y-3">
                        <div className="flex items-center gap-2 text-red-600 dark:text-red-400 font-mono text-xs font-bold uppercase">
                          <Eye size={14} /> Cloud AI Telemetry &amp; Escalation (Big Brother)
                        </div>
                        <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed font-sans">
                          {cur.cloudEscalation}
                        </p>
                      </div>

                      {/* ICEarth Sovereign Route */}
                      <div className="p-4 rounded-xl border border-emerald-300 dark:border-emerald-900/60 bg-emerald-50/50 dark:bg-emerald-950/20 space-y-3">
                        <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-bold uppercase">
                          <Lock size={14} /> ICEarth Sovereign IT Architecture (Sanctuary)
                        </div>
                        <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed font-sans">
                          {cur.sovereignSolution}
                        </p>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-lg border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 text-xs font-sans">
                      <span className="font-bold text-red-600 dark:text-red-400 font-mono uppercase mr-2">
                        1984 Reality Parallel:
                      </span>
                      <span className="text-stone-600 dark:text-stone-300 italic">
                        {cur.orwellParallel}
                      </span>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        )}

        {/* SUB-TAB 6: ICEARTH SOVEREIGN SANCTUARY ARCHITECTURE */}
        {activeSubTab === 'sovereign_architecture' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className={`p-6 sm:p-8 rounded-2xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-6`}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 flex items-center justify-center text-emerald-600 shrink-0">
                  <Lock size={20} />
                </div>
                <div>
                  <h2 className="text-xl font-bold font-sans">The ICEarth Sovereign Sanctuary Architecture</h2>
                  <p className="text-xs text-stone-500 font-mono">How Zero-Knowledge Computing, Local Enclaves, &amp; Tribal Compacts Eliminate Thought Police</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className={`p-5 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-3`}>
                  <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">
                    1
                  </div>
                  <h3 className="font-bold text-sm font-sans">Local Confidential Enclaves (TEE)</h3>
                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                    AI models run on-premise inside cryptographically sealed Trusted Execution Environments (AMD SEV-SNP / Apple Silicon local memory). Keystrokes never transit third-party corporate servers. The host cannot inspect prompts.
                  </p>
                </div>

                <div className={`p-5 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-3`}>
                  <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                    2
                  </div>
                  <h3 className="font-bold text-sm font-sans">Zero-Knowledge Verification (zk-SNARKs)</h3>
                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                    Users can verify facts, chemical tests, and compliance without revealing raw identity or confidential data. Whistleblowers and water protectors submit mathematical proofs without exposing human identities to retaliatory subpoenas.
                  </p>
                </div>

                <div className={`p-5 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-3`}>
                  <div className="w-8 h-8 rounded-lg bg-amber-600 text-stone-950 flex items-center justify-center font-bold text-xs">
                    3
                  </div>
                  <h3 className="font-bold text-sm font-sans">Tribal Sovereign Jurisdiction</h3>
                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                    Servers deployed on sovereign Native American lands (e.g. Cherokee Nation, Jicarilla Apache) operate under tribal jurisdiction and treaty rights, insulating community members from unconstitutional municipal and corporate surveillance.
                  </p>
                </div>
              </div>

              {/* Four Fundamental Protections Banner */}
              <div className={`p-5 rounded-xl border ${isLight ? 'bg-emerald-50/70 border-emerald-300' : 'bg-emerald-950/20 border-emerald-900'} space-y-2`}>
                <h4 className="text-xs font-mono font-bold uppercase text-emerald-800 dark:text-emerald-400">
                  The Four Pillars of Roulet's Law Sovereign AI:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700 dark:text-stone-300 font-sans">
                  <li className="flex items-center gap-1.5">
                    <Check size={14} className="text-emerald-600 shrink-0" />
                    <strong>No Keystroke Telemetry:</strong> Prompts never stored across network hops.
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Check size={14} className="text-emerald-600 shrink-0" />
                    <strong>No Secondary Training:</strong> User input is never commodified into LLM weights.
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Check size={14} className="text-emerald-600 shrink-0" />
                    <strong>No Pre-Crime Escalation:</strong> Private reflection remains private psychological sanctuary.
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Check size={14} className="text-emerald-600 shrink-0" />
                    <strong>Multi-Sig Encryption:</strong> Access requires community sovereign consent.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* SUB-TAB 7: CRYPTOGRAPHIC PROVENANCE & VAULT */}
        {activeSubTab === 'provenance' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className={`p-6 sm:p-8 rounded-2xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-6`}>
              <div>
                <h2 className="text-xl font-bold font-sans">Plate #79 Cryptographic Provenance &amp; Scientific Archives</h2>
                <p className="text-xs text-stone-500 font-mono">Immutable Registration on ICEarth Sovereign Ledger</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className={`p-5 rounded-xl border space-y-3 font-mono text-xs ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'}`}>
                  <div>
                    <span className="text-stone-400 text-[10px] uppercase">Title:</span>
                    <div className="font-bold text-stone-800 dark:text-stone-200">
                      Plate #79: AI-1984 Guardrails: Big Brother Is Watching &amp; The Thought Police
                    </div>
                  </div>
                  <div>
                    <span className="text-stone-400 text-[10px] uppercase">Author / Synthesizer:</span>
                    <div className="font-bold text-stone-800 dark:text-stone-200">
                      Norm Roulet &amp; ICEarth Sovereign IT Working Group
                    </div>
                  </div>
                  <div>
                    <span className="text-stone-400 text-[10px] uppercase">Case Precedent:</span>
                    <div className="font-bold text-red-600 dark:text-red-400">
                      Anthropic Claude Florida Diary Escalation / Lee County Sheriff Marceno
                    </div>
                  </div>
                  <div>
                    <span className="text-stone-400 text-[10px] uppercase">Historical Precedent:</span>
                    <div className="font-bold text-amber-600 dark:text-amber-400">
                      1879 Carlisle Indian Industrial School (Pratt Doctrine) &amp; George Orwell 1984 (1949)
                    </div>
                  </div>
                </div>

                <div className={`p-5 rounded-xl border space-y-4 font-mono text-xs ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'}`}>
                  <div>
                    <span className="text-stone-400 text-[10px] uppercase">Vault Registration Hash:</span>
                    <div className="p-2.5 rounded bg-black text-emerald-400 font-mono text-[11px] break-all border border-stone-800">
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
                      className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-bold flex items-center gap-2 cursor-pointer shadow-sm"
                    >
                      {copiedHash ? <Check size={14} /> : <Copy size={14} />}
                      <span>{copiedHash ? 'Hash Copied!' : 'Copy Vault Hash'}</span>
                    </button>
                    <button
                      onClick={() => setIsArtModalOpen(true)}
                      className="px-4 py-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 font-mono text-xs font-bold flex items-center gap-2 cursor-pointer"
                    >
                      <Maximize2 size={14} />
                      <span>Expand Artwork (Plate #79)</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 5. CROSS-NAVIGATION BAR */}
        <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'}`}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-sm font-bold font-sans text-stone-900 dark:text-stone-100">
                Continue Exploring Sovereign IT &amp; Freedom Infrastructures
              </h3>
              <p className="text-xs text-stone-500 font-mono mt-0.5">
                Related sovereign plates covering Indigenous IT rights, data sovereignty, and AI safeguards
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => onNavigateTab('indigenous_right_to_progress')}
                className="px-3.5 py-2 rounded-lg text-xs font-mono font-bold bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300 hover:bg-amber-200 dark:hover:bg-amber-900 border border-amber-300 dark:border-amber-800 flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>🌾 Plate #69: Right to Progress</span>
              </button>

              <button
                onClick={() => onNavigateTab('cherokee_it_position')}
                className="px-3.5 py-2 rounded-lg text-xs font-mono font-bold bg-stone-100 text-stone-900 dark:bg-stone-800 dark:text-stone-200 hover:bg-stone-200 dark:hover:bg-stone-700 border border-stone-300 dark:border-stone-700 flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>🪶 Plate #54: Cherokee Sovereign IT</span>
              </button>

              <button
                onClick={() => onNavigateTab('swiss_data_sovereignty')}
                className="px-3.5 py-2 rounded-lg text-xs font-mono font-bold bg-red-100 text-red-900 dark:bg-red-950 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-900 border border-red-300 dark:border-red-800 flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>🇨🇭 Plate #55: Swiss Data Sovereignty</span>
              </button>

              <button
                onClick={() => onNavigateTab('icearth_stack')}
                className="px-3.5 py-2 rounded-lg text-xs font-mono font-bold bg-emerald-100 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-300 hover:bg-emerald-200 dark:hover:bg-emerald-900 border border-emerald-300 dark:border-emerald-800 flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>⚡ Plate #38: The ICEarth Stack</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* 6. HIGH-RESOLUTION ARTWORK MODAL */}
      {isArtModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setIsArtModalOpen(false)}
        >
          <div 
            className="relative max-w-6xl w-full max-h-[92vh] bg-stone-900 border border-stone-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 border-b border-stone-800 flex items-center justify-between bg-stone-950 text-white">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-red-500 font-bold">
                  Master Visual Infographic • Plate #79
                </span>
                <h3 className="text-sm font-bold font-sans">
                  AI-1984 Guardrails: Big Brother Is Watching, The Thought Police, &amp; Sovereign IT Sanctuary
                </h3>
              </div>
              <button
                onClick={() => setIsArtModalOpen(false)}
                className="p-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 cursor-pointer text-xs font-mono font-bold"
              >
                ✕ Close
              </button>
            </div>

            {/* Modal Body with Full Image */}
            <div className="flex-1 overflow-auto p-4 flex items-center justify-center bg-stone-950">
              <img
                src={ai1984PlateImg}
                alt="Plate #79 AI-1984 Guardrails Infographic Full"
                className="max-h-[72vh] w-auto object-contain rounded-lg border border-stone-800 shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Modal Footer with Provenance */}
            <div className="p-4 border-t border-stone-800 bg-stone-950 text-xs font-mono flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="text-red-400 font-bold">VAULT:</span>
                <span className="text-stone-400 text-[11px] truncate max-w-sm sm:max-w-lg">
                  {vaultHash}
                </span>
              </div>
              <button
                onClick={handleCopyHash}
                className="px-3 py-1.5 rounded bg-stone-800 hover:bg-stone-700 text-emerald-300 font-bold flex items-center gap-1.5 cursor-pointer"
              >
                {copiedHash ? <Check size={13} /> : <Copy size={13} />}
                <span>{copiedHash ? 'Hash Copied!' : 'Copy Hash'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Ai1984BigBrotherGuardrails;

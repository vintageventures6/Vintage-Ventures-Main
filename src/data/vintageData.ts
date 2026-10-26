import { ServiceSolution, PipelineStage, MetricCategory, SuccessStory, LinkedInPost } from '../types';

export const SOLUTIONS_DATA: ServiceSolution[] = [
  {
    id: 'workforce-talent',
    title: 'Workforce & Talent',
    badge: 'Core Competency',
    summary: 'Domestic and international manpower, talent acquisition, recruitment strategy and background verification.',
    description: 'We deliver scalable talent acquisition capabilities designed to seamlessly plug into existing corporate HR teams or operate as an end-to-end recruitment engine.',
    capabilities: [
      'Domestic & International Manpower Sourcing',
      'End-to-End Talent Acquisition & Headhunting',
      'Strategic Recruitment Process Architecture',
      'Rigorous Background & Credential Verification',
      'High-Volume & Recurring Hiring Campaigns',
      'Specialized Non-IT Corporate Roles'
    ],
    metrics: ['35% Faster Time-to-Hire', '94% Retention Rate at 180 Days', 'Zero Compliance Gaps'],
    suitableFor: 'Enterprises and fast-growing organizations seeking high-caliber non-IT professional talent across domestic and international markets.'
  },
  {
    id: 'business-consulting',
    title: 'Business Consulting',
    badge: 'Strategic Advisory',
    summary: 'Business and management consulting, market entry, expansion and cost optimization.',
    description: 'We translate executive intent into sustainable operational frameworks, enabling businesses to enter new geographies and restructure operational expense structures.',
    capabilities: [
      'Market Entry Feasibility & Cross-Border Expansion',
      'Business & Management Advisory',
      'Operational Expense & Cost Optimization',
      'Organizational Structuring & Role Architecture',
      'Vendor Ecosystem Evaluation & Consolidation',
      'Change Management & Execution Roadmaps'
    ],
    metrics: ['20-30% Operational Cost Rationalization', 'Clear Market Entry Roadmaps', 'Defined Executive Ownership'],
    suitableFor: 'Corporate leadership planning expansion, entering new territories (including North America), or eliminating operational redundancies.'
  },
  {
    id: 'bpo-operations',
    title: 'BPO & Operations',
    badge: 'Operational Scale',
    summary: 'BPO setup and transition, call centre consulting, process optimization and workforce management.',
    description: 'Full-spectrum capability spanning greenfield contact center setups, lift-and-shift process transitions, and continuous efficiency engineering.',
    capabilities: [
      'BPO Facility Setup, Transition & Stabilization',
      'Contact Center Architecture & Dialing Strategies',
      'Business Process Re-engineering & Optimization',
      'Workforce Management (WFM) & Forecasting',
      'Quality Assurance & Real-Time Monitoring',
      'Executive MIS & Operations Performance Signals'
    ],
    metrics: ['99.2% SLA Adherence', '15-25% FTE Utilization Gain', 'Transparent Daily Reporting'],
    suitableFor: 'Organizations setting up new customer interaction hubs, shared service centers, or seeking to improve existing center throughput.'
  },
  {
    id: 'hr-payroll',
    title: 'HR & Payroll',
    badge: 'Reliable Administration',
    summary: 'Payroll management, HR operations, compliance consulting and employee lifecycle support.',
    description: 'Robust, audit-ready human capital governance delivering error-free payroll dispatch, regulatory compliance, and smooth employee journey touchpoints.',
    capabilities: [
      'End-to-End Multi-Tier Payroll Processing',
      'Statutory Compliance & Regulatory Advisory',
      'Attendance, Shift & Leave Administration',
      'Employee Central Database & Record Governance',
      'Onboarding, Verification & Offboarding Lifecycle',
      'Employee Query Resolution Desk'
    ],
    metrics: ['99.9% Payroll Calculation Accuracy', 'Zero Statutory Default Record', '< 4hr Query Resolution TAT'],
    suitableFor: 'Companies requiring bulletproof compliance, reliable payroll execution, and seamless administrative support without expanding internal headcount.'
  }
];

export const PIPELINE_STAGES: PipelineStage[] = [
  {
    step: '01',
    title: 'Client Requirement',
    subtitle: 'Role, market and hiring need',
    details: 'Comprehensive intake session analyzing job specifications, essential skill matrices, cultural fit parameters, compensation bands, and target market dynamics.',
    turnaroundTime: 'Day 1 - 2',
    keyDeliverable: 'Validated Role Charter & Market Feasibility Blueprint',
    responsibility: 'Lead Strategic Account Director & Client Hiring Manager'
  },
  {
    step: '02',
    title: 'Sourcing',
    subtitle: 'Relevant candidate channels',
    details: 'Multi-channel outbound discovery across domestic and international candidate channels, active talent networks, proprietary talent repositories, and targeted talent mapping.',
    turnaroundTime: 'Day 3 - 5',
    keyDeliverable: 'Curated Longlist of Active & Passive Candidates',
    responsibility: 'Specialized Sourcing Pod'
  },
  {
    step: '03',
    title: 'Screening',
    subtitle: 'Experience, skills and fit',
    details: 'Structured technical and behavioral pre-screening evaluating relevant domain experience, communication dexterity, role suitability, and compensation alignment.',
    turnaroundTime: 'Day 5 - 7',
    keyDeliverable: 'Detailed Candidate Assessment Scorecards',
    responsibility: 'Senior Domain Evaluation Panel'
  },
  {
    step: '04',
    title: 'Shortlisting',
    subtitle: 'Qualified candidates presented',
    details: 'Rigorous filtering down to candidates meeting 100% of agreed qualifying benchmarks, submitted in executive profile packages ready for hiring manager review.',
    turnaroundTime: 'Day 7 - 9',
    keyDeliverable: 'Verified Shortlist Dossier (Top 3-5 candidates per role)',
    responsibility: 'Delivery Account Manager'
  },
  {
    step: '05',
    title: 'Interview Coordination',
    subtitle: 'Communication and feedback',
    details: 'End-to-end schedule management across time zones (US, Canada, India), briefing candidates, tracking panel feedback, and maintaining prompt candidate momentum.',
    turnaroundTime: 'Day 10 - 15',
    keyDeliverable: 'Calibrated Interview Matrix & Consolidated Feedback Logs',
    responsibility: 'Operations Coordination Lead'
  },
  {
    step: '06',
    title: 'Verification',
    subtitle: 'Background and documentation',
    details: 'Multi-layer document audit, previous employment authentication, educational degree verification, and formal reference inquiries to safeguard organizational integrity.',
    turnaroundTime: 'Day 15 - 18',
    keyDeliverable: 'Certified Pre-Employment Background Report',
    responsibility: 'Risk & Verification Compliance Desk'
  },
  {
    step: '07',
    title: 'Offer',
    subtitle: 'Offer coordination',
    details: 'Strategic compensation structuring, expectation alignment, counter-offer mitigation, and formal offer letter presentation support.',
    turnaroundTime: 'Day 18 - 20',
    keyDeliverable: 'Formally Signed Acceptance Letter',
    responsibility: 'Engagement Lead & HR Partner'
  },
  {
    step: '08',
    title: 'Joining',
    subtitle: 'Follow-up through start date',
    details: 'Consistent engagement during the notice period, documentation readiness, day-one onboarding check-in, and 30-60-90 day performance calibration.',
    turnaroundTime: 'Notice Period - Day 1 Onboarding',
    keyDeliverable: 'Successful Onboarding & 90-Day Retention Checkpoint',
    responsibility: 'Talent Success Partner'
  }
];

export const METRICS_DATA: MetricCategory[] = [
  {
    index: '01 · 02',
    title: 'Speed & Quality of Workforce',
    subcategories: [
      {
        name: 'Faster Workforce Deployment',
        indicators: ['Time-to-Hire', 'Time-to-Join', 'Vacancy Closure Rate'],
        benchmarkImpact: 'Reduces typical hiring cycle by 35% through active pre-screened talent pools.'
      },
      {
        name: 'Better Talent Quality',
        indicators: ['Shortlist-to-Interview', 'Interview-to-Selection', 'Quality-of-Hire'],
        benchmarkImpact: 'Ensures 85%+ interview-to-shortlist approval ratios across corporate roles.'
      }
    ]
  },
  {
    index: '03 · 04',
    title: 'Cost & Operational Output',
    subcategories: [
      {
        name: 'Cost Efficiency',
        indicators: ['Cost-per-Hire', 'Process Cost', 'Workforce Cost'],
        benchmarkImpact: 'Cuts recruitment overheads and redundant agency spend by 25-40%.'
      },
      {
        name: 'Improved Productivity',
        indicators: ['Productivity per FTE', 'Utilization Rate', 'Attendance Stability', 'Performance KPIs'],
        benchmarkImpact: 'Enforces clear operational baselines yielding measurable per-agent productivity.'
      }
    ]
  },
  {
    index: '05 · 06',
    title: 'Governance & Risk Mitigation',
    subcategories: [
      {
        name: 'Payroll Efficiency',
        indicators: ['Payroll Accuracy', 'Processing TAT', 'Error / Query Rate'],
        benchmarkImpact: 'Delivers 99.9% calculation precision and statutory submittal adherence.'
      },
      {
        name: 'Compliance & Risk Control',
        indicators: ['Verification Completion', 'Documentation Accuracy', 'Audit Findings'],
        benchmarkImpact: 'Eliminates liability exposure via 100% authenticated candidate background audits.'
      }
    ]
  }
];

export const BEYOND_RECRUITMENT_STAGES = [
  {
    num: '01',
    name: 'Business Challenge',
    summary: 'Clarify the operating issue',
    detail: 'Unpack root operational bottlenecks, unit economics, talent deficits, or market expansion roadblocks.'
  },
  {
    num: '02',
    name: 'Strategy',
    summary: 'Define the path forward',
    detail: 'Architect customized delivery solutions, capacity plans, technology interfaces, and financial models.'
  },
  {
    num: '03',
    name: 'Implementation',
    summary: 'Translate direction into action',
    detail: 'Deploy structured cross-functional teams, implement standardized SOPs, and establish operational cadences.'
  },
  {
    num: '04',
    name: 'Performance',
    summary: 'Track measurable business signals',
    detail: 'Monitor live dashboard metrics, efficiency signals, and output quality against agreed target benchmarks.'
  },
  {
    num: '05',
    name: 'Scale',
    summary: 'Extend what works',
    detail: 'Scale stabilized workflows into recurring operational engines across departments or geographies.'
  }
];

export const BEYOND_RECRUITMENT_DOMAINS = [
  {
    category: 'Advisory',
    focus: 'Business setup · market entry · expansion · workforce strategy',
    description: 'Guiding corporate entities into high-growth territories with structural compliance and localized talent frameworks.'
  },
  {
    category: 'Improvement',
    focus: 'Process consulting · vendor management · cost optimization',
    description: 'Identifying structural inefficiencies, rationalizing supplier contracts, and streamlining operational workflows.'
  },
  {
    category: 'Planning',
    focus: 'Resource planning · operational improvement · implementation support',
    description: 'Designing balanced capacity models, shift schedules, and change roadmaps that absorb volume fluctuations.'
  }
];

export const METHODOLOGY_STEPS = [
  {
    step: '01',
    title: 'Understand',
    desc: 'Clarify objectives, context and constraints.'
  },
  {
    step: '02',
    title: 'Strategize',
    desc: 'Design the right operating response.'
  },
  {
    step: '03',
    title: 'Implement',
    desc: 'Move from plan to disciplined delivery.'
  },
  {
    step: '04',
    title: 'Measure',
    desc: 'Track agreed KPIs and reporting signals.'
  },
  {
    step: '05',
    title: 'Optimize',
    desc: 'Refine the model as needs evolve.'
  }
];

export const SLIDES_GALLERY = [
  { page: 1, title: 'Title & Value Proposition', file: '/assets/slides/page_1.png' },
  { page: 2, title: 'The Operating Idea & Framework', file: '/assets/slides/page_2.png' },
  { page: 3, title: 'The Partner Model: 4 Solutions', file: '/assets/slides/page_3.png' },
  { page: 4, title: 'Cross-Border Recruitment Delivery', file: '/assets/slides/page_4.png' },
  { page: 5, title: 'Requirement to Joining Model', file: '/assets/slides/page_5.png' },
  { page: 6, title: 'Measurement System & Outcomes', file: '/assets/slides/page_6.png' },
  { page: 7, title: 'Efficient, Scalable Operations', file: '/assets/slides/page_7.png' },
  { page: 8, title: 'Supporting Businesses Beyond Recruitment', file: '/assets/slides/page_8.png' },
  { page: 9, title: 'Strategic Engagement Methodology', file: '/assets/slides/page_9.png' },
  { page: 10, title: 'The Next Conversation & Contact', file: '/assets/slides/page_10.png' }
];

export const EXECUTIVE_CONTACT = {
  name: 'Mr. Shashank Mohan',
  title: 'Managing Director & Strategic Lead',
  company: 'Vintage Ventures',
  phone: '+919310173949',
  displayPhone: '+91 93101 73949',
  email: 'sales@vintageventures.in',
  tagline: 'Right People. Smarter Processes. Measurable Business Outcomes.',
  coverage: 'United States · Canada · India · Global Delivery'
};

export const SUCCESS_STORIES: SuccessStory[] = [
  {
    id: 'meridian-logistics',
    clientName: 'Marcus Vance',
    role: 'VP of Talent Acquisition',
    company: 'Meridian Global Logistics',
    industry: 'Supply Chain & Freight Logistics',
    region: 'United States & Canada',
    serviceCategory: 'Cross-Border Recruitment',
    headline: 'Scaling 42 Corporate Operations Roles Across US & Canada Ahead of Peak Demand',
    quote: 'Vintage Ventures integrated directly with our North American talent team. Their rigorous 8-stage vetting meant our hiring managers only met candidates who met 100% of our bar, cutting our open vacancy cycle by more than half.',
    challenge: 'Facing 52-day hiring cycles and high turnover in freight pricing, account operations, and dispatch supervisors across Chicago and Toronto prior to peak seasonal surges.',
    intervention: 'Deployed a dedicated cross-border talent acquisition pod with structured candidate screening, multi-tier background verifications, and structured notice-period engagement.',
    results: [
      { label: 'Time-to-Offer Velocity', value: '19 Days (from 52)' },
      { label: '180-Day Retention Rate', value: '96.4%' },
      { label: 'Roles Filled on Schedule', value: '42 Corporate FTEs' },
      { label: 'Agency Spend Reduction', value: '38%' }
    ]
  },
  {
    id: 'omnicare-health',
    clientName: 'Priya Somasundaram',
    role: 'Chief Operating Officer',
    company: 'Omnicare Health Solutions',
    industry: 'Healthcare Patient Services',
    region: 'Global Shared Services',
    serviceCategory: 'BPO & Operations Transition',
    headline: 'Zero-Downtime Transition of a 110-Seat Tier-1 Inbound Patient Support Center',
    quote: 'From telephony and dialer setup to workforce planning and supervisor training, Vintage Ventures executed the transition with zero downtime and took our SLA adherence to an all-time high.',
    challenge: 'A legacy vendor transition with declining SLA performance (78%), severe agent absenteeism, and absence of executive MIS performance telemetry.',
    intervention: 'Full turn-key BPO facility and process re-engineering, establishing workforce management (WFM) scheduling, QA monitoring grids, and real-time leadership dashboards.',
    results: [
      { label: 'SLA Adherence', value: '99.2% (from 78%)' },
      { label: 'FTE Utilization Gain', value: '+24%' },
      { label: 'Transition Execution', value: '45 Days Zero-Downtime' },
      { label: 'First Contact Resolution', value: '91.8%' }
    ]
  },
  {
    id: 'apex-industrial',
    clientName: 'David R. Hoffman',
    role: 'Head of Human Resources',
    company: 'Apex Industrial Systems',
    industry: 'Precision Manufacturing',
    region: 'Multi-Facility Regional',
    serviceCategory: 'HR & Payroll Governance',
    headline: '100% Audit Compliance & Flawless Shift Payroll Across 850+ Personnel',
    quote: 'Shift-based manufacturing payroll across multiple facilities was fraught with disputes. Vintage Ventures established automated reconciliation and delivered month-one error-free execution.',
    challenge: 'Manual attendance spreadsheets, recurrent payroll query backlogs taking over 72 hours, and statutory compliance gaps creating audit vulnerabilities.',
    intervention: 'Implemented end-to-end multi-tier payroll administration, attendance centralization, statutory verification sweeps, and a dedicated employee support desk with <4 hour TAT.',
    results: [
      { label: 'Payroll Accuracy Rate', value: '99.98%' },
      { label: 'Statutory Defaults', value: '0 in 24 Months' },
      { label: 'Query Resolution TAT', value: '< 3.5 Hours' },
      { label: 'Admin Time Reclaimed', value: '160 hrs / month' }
    ]
  },
  {
    id: 'vanguard-retail',
    clientName: 'Sarah Jenkins',
    role: 'Managing Director, North America',
    company: 'Vanguard Retail Infrastructure',
    industry: 'Commercial Retail & E-Commerce',
    region: 'North America Market Entry',
    serviceCategory: 'Business Consulting & Advisory',
    headline: 'Accelerating North American Market Entry With Lean Corporate Architecture',
    quote: 'Vintage Ventures’ advisory team eliminated bureaucratic overhead and established compliant local vendor ecosystems, enabling us to launch in the US four weeks ahead of schedule.',
    challenge: 'Need to rapidly establish corporate infrastructure, statutory compliance frameworks, and key management teams in the US market without bloated operational overhead.',
    intervention: 'Conducted comprehensive market entry feasibility, designed optimized role and reporting architectures, and negotiated consolidated vendor SLAs.',
    results: [
      { label: 'Setup Opex Reduction', value: '29% Savings' },
      { label: 'Launch Acceleration', value: '4 Weeks Early' },
      { label: 'Vendor Cost Rationalization', value: '22% Efficiency' },
      { label: 'Core Leadership Team', value: '100% in Place' }
    ]
  }
];

export const LINKEDIN_PROFILE = {
  companyName: 'Vintage Ventures',
  headline: 'Strategic Workforce & Business Solutions Partner',
  followers: '14,820',
  industry: 'Staffing, Consulting & Business Process Outsourcing',
  headquarters: 'New Delhi · Global Delivery Network',
  linkedinUrl: 'https://www.linkedin.com/company/vintage-ventures',
  leadershipUrl: 'https://www.linkedin.com/in/shashank-mohan',
  leadershipName: 'Mr. Shashank Mohan',
  leadershipTitle: 'Managing Director & Strategic Solutions Lead'
};

export const LINKEDIN_POSTS: LinkedInPost[] = [
  {
    id: 'post-1',
    author: {
      name: 'Shashank Mohan',
      title: 'Managing Director · Vintage Ventures',
      avatar: '/assets/aistudio/Vintage_Venture_67b9bac7.png',
      company: 'Vintage Ventures'
    },
    date: '3 days ago',
    category: 'Cross-Border Talent',
    title: 'Why US & Canadian corporate hiring cycles stretch to 50+ days (and how to fix them)',
    content: 'When evaluating recruitment delivery for corporate roles across North America, the biggest latency occurs not in candidate sourcing, but in the disconnect between initial screening criteria and hiring manager interviews.\n\nBy instituting calibrated, pre-vetted scorecards and dedicated timezone-aligned delivery pods, our partners routinely compress requisition-to-offer cycles from 52 days down to under 20 days.\n\nRecruitment is not a numbers game; it is a precision workflow.',
    tags: ['WorkforceStrategy', 'CrossBorderHiring', 'TalentAcquisition', 'Operations'],
    metrics: {
      likes: 342,
      comments: 58,
      reposts: 27
    },
    link: 'https://www.linkedin.com/company/vintage-ventures',
    featuredStat: {
      label: 'Average Cycle Time Reduction',
      value: '-63% Days to Offer'
    }
  },
  {
    id: 'post-2',
    author: {
      name: 'Vintage Ventures Insights',
      title: 'Strategic Operations Dispatch',
      avatar: '/assets/aistudio/Vintage_Venture_67b9bac7.png',
      company: 'Vintage Ventures'
    },
    date: '1 week ago',
    category: 'BPO & Operations',
    title: 'The Reality of BPO Transitions: Why Lift-and-Shift Models Create Hidden Deficits',
    content: 'Too many organizations treat BPO transition as a logistical handover rather than an efficiency re-engineering event. If you transfer broken workflows into an offshore or nearshore facility, you merely export inefficiencies.\n\nAt Vintage Ventures, our 4-phase operational framework pairs facility setup with immediate workforce management (WFM) scheduling, supervisory ratios, and real-time MIS signals. Sustainable SLA performance starts on day zero.',
    tags: ['BPO', 'ProcessOptimization', 'OperationalExcellence', 'WFM'],
    metrics: {
      likes: 489,
      comments: 73,
      reposts: 41
    },
    link: 'https://www.linkedin.com/company/vintage-ventures',
    featuredStat: {
      label: 'SLA Stabilization Benchmark',
      value: '99.2% Adherence'
    }
  },
  {
    id: 'post-3',
    author: {
      name: 'Shashank Mohan',
      title: 'Managing Director · Vintage Ventures',
      avatar: '/assets/aistudio/Vintage_Venture_67b9bac7.png',
      company: 'Vintage Ventures'
    },
    date: '2 weeks ago',
    category: 'HR & Payroll Governance',
    title: 'Statutory compliance is not administrative overhead—it is enterprise risk insurance',
    content: 'In distributed enterprise operations, payroll errors and documentation gaps are the fastest way to erode employee trust and trigger regulatory penalties.\n\nA robust multi-tier audit protocol, automated attendance pipelines, and verified background authentication ensure 100% statutory clearance. Peace of mind in HR administration allows leadership to focus purely on core business expansion.',
    tags: ['HROperations', 'ComplianceRisk', 'PayrollAccuracy', 'Leadership'],
    metrics: {
      likes: 275,
      comments: 34,
      reposts: 19
    },
    link: 'https://www.linkedin.com/company/vintage-ventures',
    featuredStat: {
      label: 'Calculation Precision Record',
      value: '99.98% Accuracy'
    }
  }
];


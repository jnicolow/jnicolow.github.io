/**
 * Portfolio copy aligned with Joel Nicolow — Curriculum Vitae (CV PDF).
 */

export const personal = {
  brand: 'JN',
  name: 'Joel Nicolow',
  location: 'Honolulu, HI',
  email: 'jnicolow@hawaii.edu',
  linkedin: 'https://www.linkedin.com/in/joelnicolow',
  github: 'https://github.com/jnicolow',
  website: 'https://jnicolow.github.io/',
  scholar: 'https://scholar.google.com/citations?user=zSGvQXcAAAAJ&hl=en',
  tagline: 'Ph.D. student, Computer Science, University of Hawaiʻi at Mānoa',
  summary:
    'Interested in machine learning in the natural sciences — satellite-derived shorelines, environmental monitoring, and related remote-sensing work. M.S. and B.S. in Computer Science (UH Mānoa).',
  contactBlurb:
    'Email is the best way to reach me. CV, code, and publications are linked below.',
  about: [
    'I am a Ph.D. student in <strong>Computer Science</strong> at the University of Hawaiʻi at Mānoa. I completed an M.S. (thesis on shoreline segmentation methods) and a B.S. (Honors, cum laude) with a <strong>minor in Public Health</strong>.',
    'As a <strong>Graduate Research Assistant</strong> with the Coastal Research Collaborative, I work on semantic segmentation for satellite-derived shoreline methods and have co-authored NSF grant proposals. At the <strong>Water Resources Research Center</strong>, I built fog classification models for trail camera imagery using pretrained ResNet backbones.',
    'Earlier work includes EPSCoR undergraduate research, public-health data analysis (R, LaTeX), and field conservation with Kupu.'
  ],
  aboutStats: [
    { value: '3', label: 'Journal articles' },
    { value: 'UH Mānoa', label: 'M.S. CS' },
    { value: 'CRC / WRRC', label: 'Labs' }
  ]
}

/**
 * Experience: newest first. `expandOnly` optional — see `experienceSettings`.
 */
export const experienceSettings = {
  collapsedCount: 3
}

/** How many items show before “Show all” in Publications / Projects */
export const publicationSettings = {
  journalsCollapsedCount: 4,
  postersCollapsedCount: 3
}

export const projectSettings = {
  collapsedCount: 4
}

export const experience = [
  {
    title: 'Graduate Research Assistant',
    company: 'Coastal Research Collaborative, University of Hawaiʻi at Mānoa',
    location: 'Honolulu, HI',
    dates: '2024 \u2014 Present',
    bullets: [
      {
        text: 'Semantic segmentation of satellite imagery (Landsat, Sentinel-2, PlanetScope) for satellite-derived shoreline methods; co-authored NSF grant proposals and related papers.',
        cites: ['J3', 'J2', 'J1']
      }
    ]
  },
  {
    title: 'Machine Learning Engineer',
    company: 'Water Resources Research Center, University of Hawaiʻi at Mānoa',
    location: 'Honolulu, HI',
    dates: '2024 \u2014 2025',
    bullets: [
      {
        text: 'Classification of fog in mountain trail camera imagery using pretrained ResNet backbones.',
        cites: ['C3', 'C1', 'C5']
      }
    ]
  },
  {
    title: 'Introductory Remote Sensing Specialist',
    company: 'Coastal Research Collaborative, University of Hawaiʻi at Mānoa',
    location: 'Honolulu, HI',
    dates: '2022 \u2014 2024',
    bullets: [
      {
        text: 'Geospatial analysis and ML-based pixel classification in Python; QGIS mapping; grant writing; presented at the 2023 Pacific Rim Geospatial Conference and Planet Labs’ Planetary Variables event, San Francisco.',
        cites: ['C2', 'C4']
      }
    ]
  },
  {
    title: 'Undergraduate Researcher',
    company: 'Hawaiʻi Established Program to Stimulate Competitive Research (EPSCoR)',
    location: 'Honolulu, HI',
    dates: '2023 \u2014 2024',
    bullets: [
      'Classification of environmental conditions in images using machine learning; data visualization of temperature and relative humidity data.'
    ]
  },
  {
    title: 'CyberInfrastructure Training for Undergraduates in Summer (CITRUS)',
    company: 'Hawaiʻi Data Science Institute, University of Hawaiʻi at Mānoa',
    location: 'Honolulu, HI',
    dates: 'Summer 2022',
    bullets: [
      'Awarded position in climate-focused one-month program developing key skills and abilities in cyberinfrastructure.'
    ]
  },
  {
    title: 'Data Analyst',
    company: 'Thompson School of Social Work & Public Health, University of Hawaiʻi at Mānoa',
    location: 'Honolulu, HI',
    dates: '2022',
    bullets: [
      'Created R data frameworks to aggregate and de-identify observation-level health data.'
    ]
  },
  {
    title: 'Research Assistant',
    company: 'Pacific Health Analytics Collaborative, University of Hawaiʻi at Mānoa',
    location: 'Honolulu, HI',
    dates: '2019 \u2014 2022',
    bullets: [
      'Web scraping public health data using R; generated aggregate data tables from observation-level data using LaTeX and R; co-authored the Hawaiʻi Opioid Initiative Evaluation report (2020) and Hawaiʻi State Plan for a Data-Driven System of Care on Substance Use (2022).'
    ]
  },
  {
    title: 'Kupu Team Member',
    company: 'Kupu, AmeriCorps Hawaiʻi Youth Conservation Corps',
    location: 'Hawaiʻi',
    dates: 'Summer 2019',
    bullets: [
      'Performed conservation-related tasks in Natural Area Reserves; conducted literary research on maʻa hau hele and its importance to biodiversity in Hawaiʻi.'
    ]
  },
  {
    title: 'Behavioral Health Student Fellow',
    company: 'State of Hawaiʻi, Behavioral Health Administration',
    location: 'Honolulu, HI',
    dates: '2018 \u2014 2019',
    bullets: [
      'Completed fellowship at the Behavioral Health Administration, Alcohol and Drug Abuse Division, compiling a complete list of substance use treatment providers in Hawaiʻi.'
    ]
  }
]

export const projects = [
  {
    title: 'CoastVision',
    subtitle: 'Satellite-derived shorelines from PlanetScope',
    description:
      'Open-source Python framework for generating satellite-derived shorelines in PlanetScope imagery: download AOI imagery, co-register scenes, segment land/water, extract shorelines with marching squares, compute transect intersections, and apply tidal corrections. Used in the Waikīkī resolving-shorelines study.',
    cites: ['J2'],
    tags: ['PlanetScope', 'SDS', 'Machine learning', 'Python'],
    github: 'https://github.com/Coastal-Research-Collaborative/CoastVision',
    dates: '2023 \u2014 Present'
  },
  {
    title: 'Satellite imagery download',
    subtitle: 'Landsat · Sentinel · PlanetScope',
    description:
      'Companion Python packages for pulling coastal imagery: geedownload for Google Earth Engine Landsat and Sentinel, and planetscopedownload for Planet Labs PlanetScope orders — given a site polygon and date range.',
    tags: ['Google Earth Engine', 'Planet API', 'Remote sensing', 'Python'],
    githubs: [
      {
        label: 'geedownload',
        url: 'https://github.com/Coastal-Research-Collaborative/geedownload'
      },
      {
        label: 'planetscopedownload',
        url: 'https://github.com/Coastal-Research-Collaborative/planetscopedownload'
      }
    ],
    dates: '2024 \u2014 Present'
  },
  {
    title: 'FogVision',
    subtitle: 'WRRC · Mt. Kaʻala',
    description:
      'Open-source framework for classifying mountain trail-camera imagery by fog presence. ResNet50 embeddings feed separate diurnal and nocturnal classification heads trained on ~40k images from 30 sites.',
    cites: ['C3', 'C1', 'C5'],
    tags: ['PyTorch', 'ResNet', 'Computer vision'],
    github: 'https://github.com/jnicolow/FogVision',
    dates: '2024 \u2014 2025'
  },
  {
    title: 'Comparative shoreline segmentation (M.S. thesis)',
    subtitle: 'Six long-term beach survey sites',
    description:
      'Compared five shoreline segmentation methods across six long-term beach survey sites in Hawaiʻi.',
    tags: ['Segmentation', 'Remote sensing', 'Thesis'],
    image: '2025-12-15_nicolow_joel_masters_planb_poster.png',
    dates: '2024 \u2014 2025'
  },
  {
    title: 'NumPy neural network',
    subtitle: 'MNIST from scratch',
    description:
      'Neural network and gradient descent implemented in NumPy (no deep-learning framework). Explored architectures and hyperparameters on MNIST; best model reached 94.6% test accuracy.',
    tags: ['NumPy', 'Deep learning', 'MNIST'],
    github: 'https://github.com/jnicolow/numpy_neural_network',
    dates: '2023'
  },
  {
    title: 'Pixel annotation tool',
    subtitle: 'Interactive labeling in matplotlib',
    description:
      'Matplotlib-based interactive tool for labeling image pixels with a single-pixel selector, flood fill, or lasso — useful for building training masks for segmentation models.',
    tags: ['Matplotlib', 'Annotation', 'Computer vision'],
    github: 'https://github.com/jnicolow/Python-pixel-annotation-tool',
    dates: '2022 \u2014 2023'
  }
]

/** Multiple degrees (newest / highest first) */
export const educationDegrees = [
  {
    school: 'University of Hawaiʻi at Mānoa',
    location: 'Honolulu, HI',
    degree: 'Ph.D. Computer Science',
    dates: '2026 \u2014 Present',
    status: 'In progress',
    detail: null
  },
  {
    school: 'University of Hawaiʻi at Mānoa',
    location: 'Honolulu, HI',
    degree: 'M.S. Computer Science',
    dates: '2024 \u2014 2025',
    detailLabel: 'Thesis',
    detail:
      'Comparative Evaluation of Five Shoreline Segmentation Methods Across Six Long-Term Beach Survey Sites.'
  },
  {
    school: 'University of Hawaiʻi at Mānoa',
    location: 'Honolulu, HI',
    degree: 'B.S. Computer Science — Honors Program, Cum Laude',
    dates: '2019 \u2014 2024',
    detailLabel: 'Minor',
    detail: 'Public Health'
  }
]

/**
 * Journal articles — newest first.
 * Optional `image` = basename under `src/assets/media/pubs/` (square thumbs preferred).
 */
export const publicationsJournals = [
  {
    cite: 'J3',
    short: 'Mikkelsen et al., ERC',
    title:
      'Sea-level rise and coastal hazards push O‘ahu’s infrastructure toward functional collapse: a multi-hazard exposure assessment',
    authors:
      'A. B. Mikkelsen, C. H. Fletcher, R. U. Moskvichev, S. L. Habel, A. Kapono, T. R. Anderson, N. Paoa, A. Azouri, F.-Z. Mihami, and J. C. Nicolow',
    venue: 'Environmental Research: Climate',
    date: 'Accepted manuscript',
    link: 'https://doi.org/10.1088/2752-5295/aeab02',
    linkLabel: 'Journal article',
    tags: ['Sea-level rise', 'Multi-hazard', 'Infrastructure', 'O‘ahu']
  },
  {
    cite: 'J2',
    short: 'Mikkelsen et al., Sci. Rep. 2026',
    title:
      'Resolving uncertainty in satellite-derived shorelines of a reef-lined beach using high spatiotemporal resolution topographic surveys',
    authors:
      'A. B. Mikkelsen, J. C. Nicolow, K. D. Murray, S. Vitousek, R. U. Moskvichev, T. R. Anderson, and C. H. Fletcher',
    venue: 'Scientific Reports',
    date: '26 May 2026',
    link: 'https://doi.org/10.1038/s41598-026-54336-z',
    linkLabel: 'Journal article',
    image: 'nature2026_square.png',
    tags: ['Satellite-derived shorelines', 'CoastVision', 'PlanetScope', 'Waikīkī']
  },
  {
    cite: 'J1',
    short: 'Moskvichev et al., 2025',
    title:
      'Wave driven cross shore and alongshore transport reveal more extreme projections of shoreline change in island environments',
    authors:
      'R. U. Moskvichev, A. B. Mikkelsen, T. R. Anderson, S. F. Vitousek, J. C. Nicolow, and C. H. Fletcher',
    venue: 'Scientific Reports, vol. 15, no. 1, p. 10794',
    date: '28 Mar 2025',
    link: 'https://doi.org/10.1038/s41598-025-95074-y',
    linkLabel: 'Journal article',
    image: 'nature2025_square.png',
    tags: ['Shoreline modeling', 'CoSMoS-COAST', 'Sea-level rise']
  }
]

/** Conference posters & talks — optional `image` for square thumb */
export const publicationsPosters = [
  {
    cite: 'C1',
    short: 'DeLay et al., 2024',
    title: 'Determining Fog Frequency with Elevation on Mt. Kaʻala',
    venue: 'American Association of Geographers Annual Meeting, Honolulu, HI, Apr. 2024'
  },
  {
    cite: 'C2',
    short: 'Mikkelsen et al., 2024',
    title: 'A Systematic Error Analysis of Satellite-Derived Shorelines',
    venue: 'American Association of Geographers Annual Meeting (Virtual), Dec. 2024'
  },
  {
    cite: 'C3',
    short: 'Nicolow et al., 2024',
    title: 'A Machine Learning Method for Detecting Fog in Mountain Trail Camera Images',
    venue: 'Hawaii Conservation Conference, Honolulu, HI, Jul. 2024',
    link: 'https://jnicolow.github.io/publications/hcc2024.html',
    linkLabel: 'Poster',
    image: 'hcc2024_square.png',
    tags: ['Fog', 'Image classification', 'Cloud forest']
  },
  {
    cite: 'C4',
    short: 'Mikkelsen et al., 2023',
    title: 'Advancing Satellite-Derived Shoreline Identification Frameworks for Complex Reef-Fronted Beaches in Hawaiʻi',
    venue: 'American Association of Geographers Annual Meeting (Virtual), Dec. 2023'
  },
  {
    cite: 'C5',
    short: 'Nicolow et al., 2023',
    title: 'FogVision: A Machine Learning Method for Detecting Fog in Mountain Trail Camera Images',
    venue: 'American Association of Geographers Annual Meeting, San Francisco, Dec. 2023',
    link: 'https://jnicolow.github.io/publications/agu2023.html',
    linkLabel: 'Poster',
    image: 'fog_square.png',
    tags: ['FogVision', 'Machine learning']
  },
  {
    cite: 'C6',
    short: 'DeLay et al., 2022',
    title: 'Measuring Fog Frequency With Elevation On Mt. Kaala Using Trail Cameras: Initial Findings',
    venue: 'American Association of Geographers Annual Meeting (Virtual), Dec. 2022',
    link:
      'https://agu2022fallmeeting-agu.ipostersessions.com/Default.aspx?s=E6-2A-D7-F0-F6-E6-F4-00-C6-A0-30-24-43-CE-7B-82',
    linkLabel: 'Poster'
  },
  {
    cite: 'C7',
    short: 'DeLay et al., 2022',
    title: 'Using Meteorological Monitoring and Image Recognition to Inform Species Relocation',
    venue: 'American Association of Geographers Annual Meeting (Virtual), 2022'
  },
  {
    cite: 'C8',
    short: 'DeLay et al., 2020',
    title: 'Slope Environmental Lapse Rates and Fog on Oʻahu’s Highest Mountain',
    venue: 'American Association of Geographers Annual Meeting (Virtual), Dec. 2020',
    link:
      'https://agu2020fallmeeting-agu.ipostersessions.com/Default.aspx?s=76-A1-DE-D7-1F-32-28-4A-73-E8-86-7C-F9-C4-92-52',
    linkLabel: 'Poster'
  }
]

/** Lookup for employment / project cite chips */
export const publicationsByCite = Object.fromEntries(
  [...publicationsJournals, ...publicationsPosters].map((p) => [p.cite, p])
)

export function pubAnchorId (cite) {
  return `pub-${cite}`
}

export function normalizeBullet (bullet) {
  if (typeof bullet === 'string') return { text: bullet, cites: [] }
  return { text: bullet.text || '', cites: bullet.cites || [] }
}

/** Optional leadership block — empty bullets hides the card */
export const leadership = {
  title: '',
  org: '',
  dates: '',
  bullets: []
}

export const honorsList = [
  {
    title: 'Outstanding Undergraduate Student Poster Presentation',
    context: 'Hawaiʻi Conservation Conference',
    year: '2024'
  },
  {
    title: 'Research Award',
    context: 'Associated Students of the University of Hawaiʻi at Mānoa',
    year: '2021'
  },
  {
    title: 'Project Funding',
    context: 'Undergraduate Research Opportunities Program',
    year: '2020'
  }
]

export const affiliations = []

export const skills = {
  Languages: ['Python', 'R', 'LaTeX'],
  'ML & DL': ['PyTorch', 'TensorFlow', 'scikit-learn', 'OpenCV'],
  Geospatial: ['GDAL', 'Rasterio', 'GeoPandas', 'Google Earth Engine', 'QGIS'],
  'Misc.': ['Academic research', 'Technical writing', 'Grant applications']
}

/* Gallery: `src/assets/media/gallery/` — see `src/data/media.js` */

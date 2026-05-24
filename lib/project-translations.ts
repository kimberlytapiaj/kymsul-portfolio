// English translations for all project content.
// Spanish source lives in lib/projects.ts.
// Applied in ProjectDetailView via applyTranslation(project, lang).

export type CampaignTranslation = {
  name?: string
  objective?: string
  formats?: string[]
  subCampaigns?: {
    name?: string
    objective?: string
    formats?: string[]
  }[]
}

export type ProjectTranslation = {
  name?: string
  tagline?: string
  tags?: string[]
  overview?: string
  role?: string
  challenge?: string
  process?: string
  result?: string
  campaignsLabel?: string
  campaigns?: CampaignTranslation[]
}

export const projectTranslationsEN: Record<string, ProjectTranslation> = {
  zealix: {
    tagline: 'Automate. Optimize. Evolve.',
    tags: ['Naming', 'Visual Identity', 'Brand Guidelines', 'Brand Manual', 'Stationery', 'Social Media'],
    overview:
      'Zealix is a Mexican AI-powered platform designed to automate restaurant, café and food business management, from inventory and orders to profitability analysis with the Zea AI assistant. The project was end-to-end: naming of Zealix and Zea, full visual identity from sketch, brand application to the digital product and corporate stationery, and creative direction of social media production.',
    role: 'Art Director and Brand Designer. Naming, full visual identity, brand manual and corporate stationery for 6 team members. Creative direction of visual production for IG · FB · LinkedIn.',
    challenge:
      'Building a Mexican tech brand that felt approachable for restaurant owners with no software experience, without losing the credibility a B2B product requires. The identity had to anchor Mexican heritage without falling into the folkloric. The system had to work in light and dark mode, on screen and in print, with a visual language clear enough that any business operator could understand without jargon.',
    process:
      'The project starts with naming: Zealix comes from "the root of corn," anchoring the identity in Mexican heritage and communicating the idea of being the foundation from which businesses grow. Zea, the AI assistant, branches from the same origin. The logo translates that concept: hand sketches exploring growth and connection, built on a grid and documented in three versions. From there, the identity extends to motion with the animated logo and to social media with creative direction of visual production.',
    result:
      'Identity system in active use with real restaurants operating under the brand. Deliverables: logo in multiple versions, brand manual, custom business cards for 6 team members, corporate brochure and legal documents with applied identity. The brand lives today on IG · FB · LinkedIn: 27 pieces published in the first 2 months.',
    campaignsLabel: 'WORK',
    campaigns: [
      {
        name: 'Branding',
        objective:
          'Naming, logo construction, typographic system, color palette and stationery. Documented in a brand manual for internal and external teams.',
        formats: ['Identity Manual', 'Logotype', 'Typography', 'Stationery'],
      },
      {
        name: 'Brand in Product',
        objective:
          'The brand system applied to the digital product. Consistency review across real interfaces: dashboard, AI inventory, table management, menu, Zea AI assistant and mobile app.',
        formats: ['Mac · Desktop', 'iPad · Tablet', 'Mobile'],
      },
      {
        name: 'POS · Point of Sale',
        objective:
          'Brand identity applied to hardware: the Zealix system at the physical point of sale. Zea assistant, menu management and sales dashboard on a real POS terminal.',
        formats: ['POS Terminal', 'Zea AI Assistant', 'Menu Management', 'Sales Dashboard'],
      },
      {
        name: 'Motion · Animated Logo',
        objective:
          'Zealix animated logo: brand identity in motion for digital use, presentations and brand activations.',
        formats: ['Animated Logo · MP4'],
      },
      {
        name: 'Social Media',
        objective:
          'Creative direction of visual production: guidelines, review and brand consistency. Editorial photography for restaurant owners on IG · FB · LinkedIn.',
        formats: ['Post · Instagram', 'Post · Facebook', 'Post · LinkedIn', 'Carousel'],
      },
    ],
  },

  brainy: {
    tagline: 'Learning that is seen, felt and remembered.',
    tags: ['Branding', 'Visual Identity', 'Mascot', 'Brand Book'],
    overview:
      "BrainyBudzz is a gamified EdTech platform for primary school children. The challenge was to create an identity that could compete for attention against social media without falling into the visual chaos typical of children's content, energetic but systematic.",
    role: 'Logo design, full visual system, Bud character design and digital mockup identity applications.',
    challenge:
      'Creating something children find fun and parents perceive as trustworthy. Two opposing audiences with completely different decision criteria.',
    process:
      "I designed Bud, a modular mascot based on a children's inventor helmet with a virtual reality visor, functioning as a living brand element: capable of expressing emotions, adapting to contexts, and scaling to merchandise or animation. The palette combines CMY primaries with black and lavender to deliver energy without overwhelming.",
    result:
      'Complete brand book: logo construction, reduction system, documented Pantone palette, typography and Bud character. Identity applied in digital platform mockup.',
    campaigns: [
      {
        name: 'Branding',
        objective:
          'Complete visual identity for BrainyBudzz: logo and Bud mascot construction, color variant system, Pantone palette, typography and digital platform application.',
        formats: ['Logotype', 'Mascot · Bud', 'Color Palette', 'Typography', 'Reductions', 'Digital Application'],
      },
    ],
  },

  beatness: {
    tagline: 'Content that moves as hard as the workout.',
    tags: ['Motion', 'Social Media', 'Art Direction'],
    overview:
      'Beatness is a fitness studio in Puebla with multiple disciplines: Cycling, Boxing, Bootcamp and Functional training. The project: produce content that communicated intensity, belonging and community progress on social media.',
    role: 'Art direction and content production: reels, stories, carousels, event activations and content capture at the Beatness × Kinabela collab.',
    challenge:
      'Maintaining brand consistency with variable production material, without a controlled studio, with different crews and shooting contexts.',
    process:
      "I worked within the Beatness visual system: dark palette with neon accents, impact typography, fast cuts. Paid media for the club's disciplines, organic content for feed and stories, and event activations. For the Kinabela Derma collab: invitation reels and live content capture at the event.",
    result:
      'Paid media, reels, stories and organic carousels for the club. Beatness × Kinabela collab: 2 fully booked cycling classes on the rooftop, ~40 people.',
    campaigns: [
      {
        name: 'Paid Media · Club Disciplines',
        objective:
          'Paid media campaign in 4 photo variations and 2 formats (square post and HD banner) for brand activation in digital ads.',
        formats: ['Post · 4 variations', 'HD Banner · 2 variations'],
      },
      {
        name: 'Events',
        objective:
          'Activation pieces for special club events, from grand openings and external collaborations to themed classes and inclusive programs.',
        formats: ['Story · Instagram', 'Post · Instagram'],
      },
      {
        name: 'Collab · Beatness × Kinabela',
        objective:
          'Cycling class on the Kinabela Derma rooftop, collab between the fitness studio and the aesthetics clinic. Invitation reel and live content capture at the event.',
        formats: ['Reel · Invitation'],
      },
      {
        name: 'The ___ Beat',
        objective:
          'Editorial series by discipline: each sport with its own color accent and real gym photography. Boxing, Functional, Bootcamp and Cycling in one visual system.',
        formats: ['Post · Instagram · 4 disciplines'],
      },
    ],
  },

  kop: {
    tagline: 'Where sport becomes a lifestyle.',
    tags: ['Social Media', 'Art Direction', 'Reels', 'Sub-brand', 'Paid Media', 'Generative AI'],
    overview:
      'KOP is a padel and tennis club in San Antonio, TX. The project included both the main brand (sports content for the club) and Kings Tavern, its in-house restaurant, with its own editorial line within the same ecosystem.',
    role: 'Art direction, content production and motion: sports editorial, educational carousels, reels, differentiated content for Kings Tavern and paid media produced with AI-generated imagery and an After Effects automation script.',
    challenge:
      "Managing two voices within one account without the restaurant content overshadowing the club's sports identity, or vice versa. Each sub-brand had to feel cohesive but distinguishable.",
    process:
      'I created a two-speed visual system: high-impact editorial posts for KOP (black, white and energetic green) and a warmer, more atmospheric line for Kings Tavern that coexists without breaking the feed. The paid media pieces combine generative imagery with Gemini and an After Effects script that builds the complete reel (timeline, text, end card) in a single click.',
    result:
      '30+ pieces across editorials, carousels and reels for KOP, plus differentiated content for Kings Tavern. The Sin Yolanda opening reel reached 26.3K views and 212 likes in 6 weeks organically. A 22-second paid media reel produced with an AI + script workflow.',
    campaigns: [
      {
        name: 'Campaigns',
        objective:
          'Communication system for events, activations and club operations, each piece adapted to the required formats and screens.',
        subCampaigns: [
          {
            name: 'Soccer Tournament · Maestro Dobel',
            objective:
              'Comprehensive campaign for a sponsored soccer tournament. One design adapted to 5 formats and screens, from printable flyer to app banner.',
            formats: ['Flyer', 'Post', 'Story', 'TV Screen', 'App Banner'],
          },
          {
            name: 'World Cup 2026 · Sticker Swap',
            objective:
              'Activation campaign leveraging the 2026 World Cup. Concept adapted to 5 formats: flyer, social media, in-venue TV, digital banner and email.',
            formats: ['Flyer', 'Post', 'Story', 'TV Screen', 'App Banner'],
          },
          {
            name: 'Plan Weeks Opens',
            objective:
              'Weekly communication system for club opening hours. Designed as a modular template adaptable to each day and delivered in 4 different formats.',
            formats: ['Flyer', 'Post', 'Story', 'TV Screen'],
          },
          {
            name: 'Highlights per Sport',
            objective:
              '30-second videos per sport at the club (Padel, Soccer and Volleyball) for activation on venue screens and social media.',
            formats: ['Reel 30s · Padel', 'Reel 30s · Soccer', 'Reel 30s · Volleyball'],
          },
          {
            name: 'SPURS Watch Party',
            objective:
              'Activation reel for the San Antonio Spurs Watch Party at the club, a seasonal sports event for members and the community.',
            formats: ['Reel · Event'],
          },
        ],
      },
      {
        name: 'Kings Tavern',
        objective:
          "Editorial content for the club's in-house restaurant. A warmer, more atmospheric visual line that coexists with KOP's sports identity without breaking the feed.",
        formats: ['Post · Instagram', 'Carousel · Instagram'],
      },
      {
        name: 'Sin Yolanda',
        objective:
          'Reel series for the Sin Yolanda opening: three distinct pieces with two versions of the main opening for social media distribution. The main opening accumulated 26.3K views and 212 likes in 6 weeks organically.',
        formats: ['Reel · Opening v1', 'Reel · Opening v2', 'Reel · Part 2', 'Reel · Part 3'],
      },
      {
        name: 'Organic Content',
        objective:
          "Editorial posts, educational carousels and reels for KOP's Instagram feed, 15+ pieces building brand identity week by week.",
        formats: ['Post', 'Carousel', 'Reel'],
      },
    ],
  },

  bwl: {
    tagline: 'A global brand that speaks two languages without losing its voice.',
    tags: ['Social Media', 'Motion', 'Paid Media', 'RedNote · 小红书', 'Generative AI'],
    overview:
      'BWL (Best World) is a Singapore-origin wellness brand with global distribution and multiple product lines. The work covers content production for Instagram and paid media in English, plus reel adaptation to Chinese for RedNote (小红书), each piece translated and reformatted for the cultural context and algorithm of each platform.',
    role: 'Art direction, video editing and content production. Bilingual Chinese-English adaptation for Instagram and RedNote.',
    challenge:
      "Adapting the same content to two platforms with different visual cultures: what works on Instagram doesn't necessarily connect on RedNote. Each version had to feel native to its platform, not a simple translation.",
    process:
      'For each reel: first the English version with premium stock, motion type and western pacing; then the Chinese adaptation with adjusted typography, native copy and visual references that connect with the RedNote audience. The paid media statics follow a clean, premium line that works in both markets.',
    result:
      '20+ pieces across static paid media, bilingual reels and editorial posts. A production system that allows adapting each piece to two languages without losing brand coherence. May 1 · Global Love Your Skin Month campaign: 53 likes and 43 sends, a high send ratio for editorial content.',
    campaigns: [
      {
        name: 'May 1 · Global Love Your Skin Month',
        objective:
          'Editorial campaign for Global Love Your Skin Day: carousel with photography of diverse skin tones and inclusive copy, adapted in English for Instagram and Chinese for RedNote. 53 likes · 43 organic sends.',
        formats: ['Carousel EN · Instagram', 'Carousel 中文 · 小红书'],
      },
      {
        name: 'BWL · Organic Content',
        objective: 'Editorial reels, product carousel and static posts for the main BWL brand channel.',
        formats: ['Reel', 'Carousel', 'Post'],
      },
      {
        name: 'Avance',
        objective:
          'Product content for Instagram and RedNote: bilingual platform-adapted reels and educational carousel designed for retention and saves.',
        formats: ['Reel EN', 'Reel 中文', 'Carousel'],
      },
      {
        name: 'Optrimax',
        objective:
          'Bilingual product reel adaptation: English version for Instagram and Chinese version for RedNote (小红书). Same visual concept, native copy in each language.',
        formats: ['Reel EN · Instagram', 'Reel 中文 · 小红书'],
      },
      {
        name: 'Paid Media',
        objective:
          'Ad pieces across multiple BWL brands: activation videos and static sets for feed and display.',
        formats: ['Video · Paid Media', 'Statics · Paid Media'],
      },
    ],
  },

  procyon: {
    tagline: 'Our power is cosmic, our victory inevitable.',
    tags: ['Branding', 'Esports', 'Social Media', 'Visual Identity', 'Merch', 'Streaming'],
    overview:
      'Procyon is a Mexican esports organization competing in Valorant Challengers LATAM Norte. The work covers the complete visual identity: logo system, social media content templates, platform headers and the design of the official team jersey.',
    role: 'Complete visual identity and content production: logo system in three variants, match day templates in three states (Gameday, Winners, Defeat), headers for Twitch, YouTube, Twitter and Facebook, player posts and official jersey design.',
    challenge:
      'Building an identity that worked in the competitive Valorant Challengers context without losing its own personality. The name Procyon — the brightest star in Canis Minor — defined the direction: cosmic, precise, with an edge of mystery.',
    process:
      'The system is built around a four-pointed star monogram as the central icon: geometric, symmetrical, with stellar references. The black/purple palette reinforces the spatial dimension of the name. The match templates operate in two modes: dark background with an intense character for match day, light background with expansive typography for winning results. The jersey reproduces the icon on the chest with topographic texture for the premium finish.',
    result:
      'Complete system published on @ProcyonGaming_: logo in three versions (horizontal, vertical, icon) in positive, negative and digital. Six result templates, headers on four platforms, player posts and official team jersey.',
    campaigns: [
      {
        name: 'Visual Identity',
        objective: 'Complete logo system in three variants (horizontal, vertical, icon) and two palettes (positive and negative) for use across all digital and physical contexts.',
        formats: ['Horizontal Logo', 'Vertical Logo', 'Icon', 'Positive · Negative'],
      },
      {
        name: 'Match Templates',
        objective: 'Three templates for match results: Gameday (match announcement), Winners (positive result) and Defeat (negative result), each featuring a different Valorant character and distinct composition.',
        formats: ['Gameday · 1080×1080', 'Winners · 1080×1080', 'Defeat · 1080×1080'],
      },
      {
        name: 'Merch · Official Jersey',
        objective: 'Official team jersey design with topographic texture, Procyon icon on the chest and wordmark on the front. Produced in white version.',
        formats: ['Jersey · White', 'Sublimated Design'],
      },
    ],
  },

  'activated-decor': {
    tagline: 'Rebranding for the brand behind Disney+, Four Seasons and Ritz-Carlton TV lifts.',
    tags: ['Rebranding', 'Visual Identity', 'Animated Logo', 'Brand Guidelines', 'Motion'],
    overview:
      'Activated Decor is a Canadian company that designs and manufactures motorized TV lift and concealment systems for luxury architecture. Their installations are at Disney+, Four Seasons, Hilton, Marriott and Ritz-Carlton. The project was a complete rebranding: visual identity system, brand guidelines and animated logo in multiple versions for digital use.',
    role: 'Complete rebranding: logo construction and brand system, brand guidelines, color palette, typography and identity-in-motion production: animated logo in three versions and two color combinations.',
    challenge:
      '"Quiet. Precise. Invisible." is their positioning; their product aims to disappear. The challenge was building a brand that was memorable and premium for B2B, without contradicting the philosophy of invisibility they sell to their luxury clients.',
    process:
      'I developed the "ad" monogram as the foundation of the system: geometric, clean, with personality. The deep black and burgundy palette communicates technical luxury without falling into generic corporate. The identity manual documents logo construction, correct usage across different backgrounds, typography and application variants. The animated logos were produced in three versions (icon, full logotype, short version) and two color palettes.',
    result:
      'Complete identity system with brand guidelines, logo in three static and animated versions delivered in GIF and MOV formats. The animated logo is in active use on their website, a brand worthy of the luxury venues where their products live.',
    campaigns: [
      {
        name: 'Brand Identity',
        objective:
          'Complete visual identity system for Activated Decor: logo and monogram, color palette, typography, system construction and correct/incorrect usage guide.',
        formats: ['Logotype · 3 versions', 'Color Palette', 'Typography', 'Brand Guidelines'],
      },
      {
        name: 'Motion · Animated Logo',
        objective:
          'Animated logo in three versions (icon, full logotype and short version), produced in two color combinations: black/red and white/red.',
        formats: ['Animated Logo · Black/Red', 'Animated Logo · White/Red', 'GIF · MOV'],
      },
    ],
  },

  'ai-creative': {
    name: 'AI Creative System',
    tagline: 'From prompt to deliverable. No friction.',
    tags: ['Generative AI', 'Gemini', 'AE Script', 'PS Script', 'Automation', 'Codex'],
    overview:
      'AI-powered creative production workflow applied to real clients: generative imagery, editing automation and design component generation through scripts. Not as an experiment; as a working method.',
    role: 'Creative direction, prompt engineering, image generation with Gemini and ChatGPT, and assembly automation in After Effects and Photoshop with scripts written with Codex.',
    challenge:
      "The challenge isn't using AI; it's using it in a way that the result doesn't look generic and still communicates the client's identity. Integrating these tools without the client noticing any difference in quality, only in speed.",
    process:
      'Three layers: (1) Generative imagery: prompt engineering to create scene photography without a photo shoot. (2) AE Script: automation that builds the complete reel with motion type, clip scaling and end card in minutes; the art director only intervenes to select cuts and adjust final details. (3) PS Script: Claude Code researches the brand, generates components separately with AI and iterates versions until producing the final editable PSD.',
    result:
      'What previously took hours of editing now takes minutes of scripting + creative review. A 22-second reel produced by script with human intervention only in cut selection. A flyer in 5 formats generated from brief to PSD. Editorial product posts without a photo shoot. A documented, client-replicable system.',
    campaigns: [
      {
        name: '/reel Skill · From Brief to Video',
        objective:
          'I built my own skill in Claude Code: a brief goes in, a complete Remotion composition comes out. Each pair shows the direct AI output and the final deliverable after art direction.',
        formats: ['Claude Code · Skill', 'Remotion', 'After Effects', 'Before / After'],
      },
      {
        name: 'Generative Imagery',
        objective:
          'Scene photography, brand compositions and product flats generated with AI for real clients. Prompt engineering as a production tool — no photo shoot, no location.',
        formats: ['Gemini · ChatGPT', 'Prompt Engineering', 'Post · Instagram', 'Carousel · Instagram'],
      },
      {
        name: 'Generative Video',
        objective:
          'Art direction using generative video tools: initial prompt, naturalness corrections and acting direction. Generated clips are assembled in After Effects for the final deliverable.',
        formats: ['Gemini Flow · Runway', 'AI Clips · Source', 'Final Reel · AE'],
        subCampaigns: [
          {
            name: 'BWL · Post 71',
            objective:
              "Art direction in Gemini Flow: initial prompt with brand constraint (\"don't modify any elements, just adapt to video\"), followed by naturalness corrections (\"fix the hands, it's not a natural pose to open juice\") and acting direction (\"young rejuvenated person, natural and fresh, picking up the glass and smiling\"). Generated clips were then assembled in After Effects.",
            formats: ['Prompt · Gemini Flow', 'AI Clips · Source', 'Final Reel EN · AE', 'Final Reel 中文 · AE'],
          },
          {
            name: 'BWL · Paid Media',
            objective: 'AI-generated paid media reel for BWL: product video without location or models.',
            formats: ['Paid Media · Video', 'Gemini · Runway'],
          },
          {
            name: 'BWL · Post 77',
            objective:
              'Five AI product video clips used as base material for the final reel assembled in After Effects.',
            formats: ['AI Clips · Source', 'Final Reel · AE', 'Runway · Gemini'],
          },
          {
            name: 'BWL · Post 79',
            objective:
              'AI-generated clips used as base material for the reel (sunbeam, cinemagraph and product animations), then assembled in After Effects.',
            formats: ['AI Clips · Source', 'Final Reel · AE', 'Gemini · Runway'],
          },
        ],
      },
      {
        name: 'Scripts + Codex',
        objective:
          'From brief to deliverable using scripts generated with Claude Code and Codex: assembly automation in After Effects, format generation in Photoshop and carousel building.',
        formats: ['AE Script · Claude Code', 'PS Script · Claude Code', 'Codex · Claude Code'],
        subCampaigns: [
          {
            name: 'KOP · AE Script + Paid Media',
            objective:
              'Brief + resource folder → Claude Code read the brand file, generated the AE script (307 lines) and the Remotion component in parallel. Refinement by prompts: timing adjusted from 0.83s to 2s per sport ("make them last longer to appreciate them"), verification of 8 clips with exact cut moment for each. Result: 22-second reel ready to render in AE in a single click.',
            formats: ['Reel 22s · Paid Media', 'AE Script · Claude Code', 'Remotion · Preview', '1080×1920 · 30fps'],
          },
          {
            name: 'KOP · PS Script + World Cup 2026',
            objective:
              "Claude researched the brand on web + guidelines folder before designing. First version rejected on aesthetics (\"KOP doesn't usually have such a marked aesthetic\") → pivot to the real feed look. Two exploration versions with a World Cup 2026 vibe. Key art direction criterion: \"use stock instead of AI backgrounds so it looks less AI.\" Approved version adapted to 5 formats with a Photoshop script.",
            formats: ['01 · AI Components', '02 · Assembled', '03 · Exploration · Not Approved', '04 · Final · 5 Formats', 'PS Script · Claude Code'],
          },
          {
            name: 'AMX · Carousel · Codex',
            objective:
              'Brief → Codex generates base panels with AI (typography, composition, palette) → human retouching of people and lighting → final text and copy overlaid. 8 slides ready to publish without manually building each one.',
            formats: ['Carousel 8 slides · Instagram', 'Codex · Claude Code', 'Gemini · Generative Image'],
          },
        ],
      },
    ],
  },

  'corazon-mixteco': {
    tagline: 'The heritage of fine cheese, in every piece of content.',
    tags: ['Social Media', 'Art Direction', 'Editorial Photography', 'Carousels', 'Print', 'Generative AI'],
    overview:
      'Corazón Mixteco is a Mexican artisanal cheese brand: quesillo, panela, manchego and more. The work covers art direction and monthly content production for social media: editorial product grids, educational carousels, reels and point-of-sale materials.',
    role: 'Art direction and content production: February and March 2026 monthly grids, educational product carousels, reels and roll-up banner design for exhibitions.',
    challenge:
      "Communicating artisanal authenticity and Oaxacan tradition on an Instagram feed without falling into the folkloric or the generic. The cheese has to look like what it is: a premium product of origin.",
    process:
      'Each grid starts with the product as protagonist: food photography with natural light, wooden props, clay vessels and Oaxacan textiles. Educational carousels complement the editorial by explaining processes and care tips. The copy plays with colloquial Mexican language without losing the premium tone.',
    result:
      'Continuous production: editorial grids for February and March 2026, two educational carousels, seven reels (three in February and four in March) and a roll-up banner for the point of sale.',
    campaigns: [
      {
        name: 'Educational Carousels',
        objective:
          'Product carousels that educate consumers on the authenticity and care of artisanal cheese, in two formats: identifying artisanal cheese and preservation tips.',
        formats: ['Carousel · Instagram', 'Educational · Product'],
      },
      {
        name: 'Print Materials',
        objective:
          'Roll-up banner for point of sale and exhibitions: communicates the two main product lines (Quesillo and Panela) with clear brand identity and contact details.',
        formats: ['Roll-up Banner · Point of Sale', 'Print'],
      },
    ],
  },

  amorcito: {
    tagline: 'The most badass sushi in Mexico, across five locations.',
    tags: ['Social Media', 'Motion', 'Art Direction', 'Campaigns', 'Print', 'Point of Sale', 'Generative AI'],
    overview:
      'Amorcito Corazón is a Japanese-Mexican restaurant chain with five locations in Puebla. The work covers art direction and social media content production, from the monthly editorial photography grid to activation campaigns, location kits and point-of-sale materials.',
    role: 'Art direction and content production: monthly reels and posts grid, activation campaigns, multi-format adaptation (feed, stories, HD, print) and POS materials. Production of the shooting call and co-direction of the on-location mixology photo shoot.',
    challenge:
      'Maintaining visual consistency across a chain with five locations and a positioning that blends Japanese and Mexican (two distinct visual worlds) without falling into the clichés of either.',
    process:
      'The work had two fronts. Content production: reels, posts and campaign pieces built from the restaurant\'s aesthetic (warm lighting, yellow neon, wood). Mixology shoot: I prepared the shooting call with the copywriter, coordinated with the restaurant manager and co-directed the on-location shoot with the photographer. The resulting images feed the brand\'s visual bank for cocktail content.',
    result:
      "Monthly grids for Feb and March 2026, Valentine's Day campaign in digital and print, five-location kit in four formats, cocktail tent card, expansion survey and a mixology image bank produced on location.",
    campaigns: [
      {
        name: "Valentine's Day Campaign",
        objective:
          'Activation campaign for February 14th: mini UGC campaign "Do you have a story with your amorcito?" across three Instagram stories: call for submissions, mechanics and closing.',
        formats: ['Stories · Instagram', 'UGC · Activation'],
      },
      {
        name: 'Location Kit',
        objective:
          'Content kit for the five locations in Puebla: square post and story with locations, adapted in two photo versions to rotate in the feed.',
        formats: ['Post · Instagram', '5 Locations'],
      },
      {
        name: 'TV Screen · Promos',
        objective:
          'Promotional video for in-venue screens: animated restaurant offers and promos adapted to HD TV screen format.',
        formats: ['Video · HD Screen', 'TV Screen'],
      },
      {
        name: 'Point of Sale Materials',
        objective:
          'Design of physical materials for the tables: cocktail tent card with QR and expansion survey to identify demand for a new location.',
        formats: ['Tent Card · Cocktail Menu', 'Survey · New Location', 'Print'],
      },
    ],
  },
}

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
  // Provisional: case narratives pending Kimberly's new text.
  bardana: {
    tagline: 'Identity for a Mexico‑Asia kitchen, from brief to manual.',
    tags: ['Visual Identity', 'Character', 'Lettering', 'Brand Manual'],
    overview: 'Bardana is a Mexico‑Asia restaurant in Metepec for people aged 20 to 40: informal, artistic and made to work by day and by night.',
    role: 'Full brand identity: research, visual routes, character, lettering, palette, logos and identity manual.',
    challenge: 'Text in progress.',
    process: 'Text in progress.',
    result: 'Text in progress.',
    campaignsLabel: 'PROCESS',
    campaigns: [
      { name: 'The brief', objective: 'A Mexico‑Asia kitchen with a character of its own: young, simple, imperfect on purpose. No geishas, no kanji, no talavera.', formats: ['Brief', 'Personality'] },
      {
        name: 'Three routes',
        objective: 'Three paths for the same idea: between two worlds, everything takes another shape.',
        subCampaigns: [
          { name: 'Matter', objective: 'Clay, wood and ceramics: the kitchen as matter that transforms.', formats: ['Logo moodboard', 'Scene'] },
          { name: 'Stamp', objective: 'Flat shapes and market colour: a brand you can stamp.', formats: ['Logo moodboard', 'Scene'] },
          { name: 'Stroke', objective: 'The gesture of the hand: brush lettering and living drawing.', formats: ['Logo moodboard', 'Scene'] },
        ],
      },
      { name: 'The character', objective: 'A burdock peeking out of the bowl, tested in four drawing styles.', formats: ['Ink', 'Engraving', 'Fanzine', 'Brush'] },
      { name: 'The lettering', objective: 'From type to brush stroke: dozens of tests to the final signature.', formats: ['Type exploration', 'Hand lettering', 'Brush'] },
      { name: 'The identity', objective: 'Primary, horizontal and lettering logos, in positive and negative.', formats: ['Primary', 'Horizontal', 'Lettering'] },
      { name: 'Brand manual', objective: 'Twenty-two pages: stroke, negative, palette, type, photography and applications.', formats: ['Identity manual · 22 pages'] },
    ],
  },
  'motion-centre': {
    tagline: 'Identity for a physiotherapy centre: the body in motion.',
    tags: ['Visual Identity', 'Iconography', 'Patterns', 'Stationery', 'Brand Manual'],
    overview: 'Motion Centre is a physiotherapy and health space that helps people understand, care for and develop their bodies.',
    role: 'Full brand identity: visual concept, four-figure iconography, logo, palette, clinical stationery and identity manual.',
    challenge: 'Text in progress.',
    process: 'Text in progress.',
    result: 'Text in progress.',
    campaignsLabel: 'PROCESS',
    campaigns: [
      { name: 'The brand', objective: 'Knowing how to move: a clear, warm, expert brand that explains the body without jargon.', formats: ['Mission', 'Personality', 'Tone'] },
      { name: 'Visual concept', objective: 'Movement as shape: organic figures, flat colour and companionship.', formats: ['Moodboard', 'Concept'] },
      { name: 'Iconography', objective: 'Four figures for four stages: understand, prepare, recover and move forward.', formats: ['Understand', 'Prepare', 'Recover', 'Move forward'] },
      { name: 'The identity', objective: 'The figures become symbol and pattern; blue, navy and bone; Campton and Rubik.', formats: ['Symbol', 'Logotype', 'Palette', 'Typography'] },
      { name: 'Applications', objective: 'Digital card, clinical stationery and three proposals for patient documents.', formats: ['Digital card', 'Stationery', 'Proposals'] },
      { name: 'Brand manual', objective: 'Twenty-four pages: essence, logo and icon construction, and applications.', formats: ['Identity manual · 24 pages'] },
    ],
  },
  'sin-yolanda': {
    tagline: 'Promos, reels and requests for its Texas locations.',
    tags: ['Social Media', 'Promotional Design', 'Typography', 'Reels', 'Motion'],
    overview: 'Sin Yolanda is a Mexican cantina and restaurant with locations in Houston, San Antonio, The Woodlands and El Paso.',
    role: 'Design and composition of promotional pieces, reels and motion.',
    challenge: 'Text in progress.',
    process: 'Text in progress.',
    result: 'Text in progress.',
    campaignsLabel: 'WORK',
    campaigns: [
      { name: 'Content', objective: 'Nights, drinks and music across its four locations. Terracotta, mustard and type you can hear.', formats: ['Post', 'Reel'] },
      {
        name: 'Creative requests',
        objective: 'Requests per location: openings, weekly nights, ambiance reels and the Jorge Guevara series.',
        subCampaigns: [
          { name: 'Jorge Guevara', objective: 'Interview series with the singer, ahead of his night at Sin Yolanda The Woodlands.', formats: ['Reel 9:16', 'Animated captions'] },
          { name: 'Nights in El Paso', objective: "One piece for each of the El Paso location's weekly nights.", formats: ['Ladies Night', 'Birthday Bash', 'Open Mic', 'Ahogo y Desahogo'] },
          { name: 'Friday Industry Night', objective: 'A night for hospitality people in Houston: reel and email.', formats: ['Reel 9:16', 'Email'] },
          { name: 'Grand Opening', objective: 'El Paso opening reel: the champagne toast.', formats: ['Reel 9:16'] },
          { name: 'Food Reel', objective: 'San Antonio food, dish by dish.', formats: ['Reel 9:16'] },
          { name: 'Night Ambiance', objective: 'What a night in San Antonio feels like.', formats: ['Reel 9:16'] },
          { name: 'Cocktail Experience', objective: "Houston's cocktails, drink by drink.", formats: ['Reel 9:16'] },
          { name: 'Now Hiring', objective: 'Animated job-openings reel for the El Paso opening.', formats: ['Reel 9:16 · motion'] },
        ],
      },
    ],
  },
  aseguramax: {
    tagline: 'Insurance explained without the fine print.',
    tags: ['Social Media', 'Carousels', 'Reels', 'Paid Media'],
    overview: 'AseguraMax is an insurance agency, a GNP agent, with online quotes at aseguramax.com.',
    role: 'Design of carousels, posts, reels and ads.',
    challenge: 'Text in progress.',
    process: 'Text in progress.',
    result: 'Text in progress.',
    campaignsLabel: 'WORK',
    campaigns: [
      { name: 'Content', objective: 'Car, home and medical insurance as simple questions. Navy, coral and checklists you tick off.', formats: ['Carousel', 'Post', 'Reel'] },
      { name: 'Paid media', objective: 'Video ads to get a quote online.', formats: ['Ad · Reel 9:16'] },
    ],
  },
  iamonemind: {
    tagline: 'Wellness in a strip: supplements without the pills.',
    tags: ['Social Media', 'Posts', 'Reels', 'Product'],
    overview: 'iamonemind sells supplements as oral strips: Glow, Calm, Spark, Aware and Serenity.',
    role: 'Design of product posts and reels.',
    challenge: 'Text in progress.',
    process: 'Text in progress.',
    result: 'Text in progress.',
    campaignsLabel: 'WORK',
    campaigns: [
      { name: 'Content', objective: 'Product up front and real skin: a strip for every moment of the day.', formats: ['Post', 'Reel'] },
    ],
  },
  nexlaunch: {
    tagline: 'The agency talking about itself: strategy before content.',
    tags: ['Social Media', 'Carousels', 'Reels', 'Illustration'],
    overview: "NexLaunch is the marketing agency where I currently work; this is the content for its own brand.",
    role: "Design of carousels, posts and reels for the agency's brand.",
    challenge: 'Text in progress.',
    process: 'Text in progress.',
    result: 'Text in progress.',
    campaignsLabel: 'WORK',
    campaigns: [
      { name: 'Content', objective: 'Short messages for business owners: speed, strategy and data. Electric blue and lines you read at a glance.', formats: ['Carousel', 'Post', 'Reel'] },
      {
        name: 'Creative requests',
        objective: "Requests for the agency's website.",
        subCampaigns: [
          { name: 'Social sharing image', objective: 'The image that shows up when the site is shared on social and in messages.', formats: ['1200 × 630'] },
        ],
      },
    ],
  },
  zealix: {
    tagline: 'Naming, visual identity and brand system for a restaurant SaaS.',
    tags: ['Naming', 'Visual Identity', 'Brand Guidelines', 'Brand Manual', 'Stationery', 'Social Media'],
    overview:
      'Zealix is a Mexican AI-powered platform designed to automate restaurant, café and food business management, from inventory and orders to profitability analysis with the Zea AI assistant. The project was end-to-end: naming of Zealix and Zea, full visual identity from sketch, brand application to the digital product and corporate stationery, and creative direction of social media production.',
    role: 'Naming, visual identity, brand manual and stationery. Visual production for IG, FB and LinkedIn.',
    challenge:
      'A Mexican tech brand that felt approachable for restaurant owners with no software experience. The identity had to anchor Mexican heritage without falling into the folkloric. The system had to work in light and dark mode, on screen and in print, with a visual language clear enough that any business operator could understand without jargon.',
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
    campaignsLabel: 'WORK',
    campaigns: [
      { name: 'The brand', objective: 'An educational video game platform: mission, values and a friendly, fun, trustworthy tone.', formats: ['Mission', 'Values', 'Tone'] },
      { name: 'Construction', objective: 'Bud, the character: helmet, visor and smile; the logo and its reductions.', formats: ['Symbol', 'Logotype', 'Reductions'] },
      { name: 'Visual system', objective: 'Primary colours with cyan, yellow and magenta, and a rounded typeface.', formats: ['Palette', 'Typography', 'Versions'] },
      { name: 'Applications', objective: 'The identity on the platform: desktop, mobile and brand pattern.', formats: ['Digital', 'Pattern'] },
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
    campaignsLabel: 'WORK',
    campaigns: [
      { name: 'Content', objective: "Real photography in the gym, neon accents and impact type: the club's feed.", formats: ['Post', 'Reel'] },
      { name: 'Paid media', objective: '"Different disciplines" ads: four photo variations, also as HD banners.', formats: ['Post · 4 variations', 'HD banner'] },
      {
        name: 'Creative requests',
        objective: "The club's series, events and collaborations.",
        subCampaigns: [
          { name: 'The ___ Beat', objective: 'One series per discipline, each with its own colour accent.', formats: ['Box', 'Functional', 'Bootcamp', 'Cycling'] },
          { name: 'Events', objective: "The club's openings, themed classes, talks and programmes.", formats: ['Story', 'Post'] },
          { name: '10K Beatdown', objective: "The club's Hyrox-style event: reel with an external videographer and promo stories.", formats: ['Reel', 'Story'] },
          { name: 'Beatness × Kinabela', objective: 'Cycling class on the Kinabela Derma rooftop: invitation and event reels.', formats: ['Reel · Invitation', 'Reel · Event'] },
        ],
      },
    ],
  },

  kop: {
    tagline: 'Social content, motion and ads for a sports club.',
    tags: ['Social Media', 'Art Direction', 'Reels', 'Sub-brand', 'Paid Media', 'Generative AI'],
    overview:
      'KOP is a padel and tennis club in San Antonio, TX. Kings Tavern, its in-house restaurant, has its own case.',
    role: 'Art direction, visual production and motion within a multi-brand workflow: sports editorial, educational carousels, reels and paid media supported by generative imagery and After Effects automation.',
    challenge:
      "Managing two voices within one account without the restaurant content overshadowing the club's sports identity, or vice versa. Each sub-brand had to feel cohesive but distinguishable.",
    process:
      'I created a two-speed visual system: high-impact editorial posts for KOP (black, white and energetic green) and a warmer, more atmospheric line for Kings Tavern that coexists without breaking the feed. The paid media pieces combine generative imagery with Gemini and After Effects automation to speed up the editable base before final review.',
    result:
      'Posts, carousels, reels and ads for the club.',
    campaignsLabel: 'WORK',
    campaigns: [
      {
        name: 'Content',
        objective: 'The sports club: padel, soccer and volleyball under one roof. Black, white and energetic green.',
        formats: ['Post', 'Carousel', 'Reel', 'Ad'],
      },
      {
        name: 'Paid media',
        objective: 'September 2026 ad campaign: two angles to get people to book the whole venue.',
        formats: ['Ad · Reel 9:16'],
      },
      {
        name: 'Creative requests',
        objective: 'Requests for club events and operations: one design adapted to every format and screen.',
        subCampaigns: [
          {
            name: 'World Cup 2026 · Sticker Swap Day',
            objective: 'World Cup activation: flyer, post, story, in-venue screen and app banner.',
            formats: ['Flyer', 'Post', 'Story', 'TV', 'App banner'],
          },
          {
            name: 'Padel every night',
            objective: 'Weekly padel events template, adaptable to each day.',
            formats: ['Flyer', 'Daily flyer', 'Post', 'Story', 'TV'],
          },
          {
            name: 'Sponsors TV',
            objective: 'Video for the club screens inviting brands to sponsor: padel, volleyball and "One place. All in."',
            formats: ['TV 16:9 · 10 s'],
          },
        ],
      },
    ],
  },

  'kings-tavern': {
    tagline: 'Food, drinks and game nights inside KOP.',
    tags: ['Social Media', 'Art Direction', 'Reels', 'Paid Media', 'Game day series'],
    overview: 'Kings Tavern is the restaurant and bar inside KOP, the sports club in San Antonio, TX.',
    role: 'Art direction, visual production and motion: posts, carousels, reels, ads and the game day series.',
    challenge: 'Text in progress.',
    process: 'Text in progress.',
    result: 'Text in progress.',
    campaignsLabel: 'WORK',
    campaigns: [
      {
        name: 'Content',
        objective: 'Food, drinks and game nights. Purple, gold and a warmer line than the club.',
        formats: ['Post', 'Carousel', 'Reel', 'Ad'],
      },
      {
        name: 'Paid media',
        objective: 'September 2026 campaign ad: reasons to watch the game at Kings Tavern.',
        formats: ['Ad · Reel 9:16'],
      },
      {
        name: 'Creative requests',
        objective: 'Requests for the bar and its screens.',
        subCampaigns: [
          {
            name: 'Game day',
            objective: "A series for each team on the bar's screens: every poster takes the team's colours and its sponsor beer.",
            formats: ['Texas A&M', 'Texas Longhorns', 'Spurs', 'UTSA'],
          },
          {
            name: 'Sponsors TV',
            objective: 'Video inviting brands to advertise in the bar: "Great food. Cold drinks." and "Want to advertise here?"',
            formats: ['TV 16:9 · 10 s'],
          },
        ],
      },
    ],
  },

  bwl: {
    tagline: 'Five skincare and supplement brands, in English and Chinese.',
    tags: ['Social Media', 'Motion', 'Paid Media', 'RedNote · 小红书', 'Generative AI'],
    overview:
      'BWL (Best World) is a Singapore-origin wellness brand with global distribution and multiple product lines. The work covers content pieces for Instagram and paid media in English, plus reel adaptation to Chinese for RedNote (小红书), each piece reformatted for the cultural and visual context of each platform.',
    role: 'Art direction, video editing and visual production within a multi-brand workflow. Bilingual Chinese-English adaptation for Instagram and RedNote.',
    challenge:
      "Adapting the same content to two platforms with different visual cultures: what works on Instagram doesn't necessarily connect on RedNote. Each version had to feel native to its platform, not a simple translation.",
    process:
      'For each reel: first the English version with premium stock, motion type and western pacing; then the Chinese adaptation with adjusted typography, native copy and visual references that connect with the RedNote audience. The paid media statics follow a clean, premium line that works in both markets.',
    result:
      '20+ pieces across static paid media, bilingual reels and editorial posts. A production system that allows adapting each piece to two languages without losing brand coherence. May 1 · Global Love Your Skin Month campaign: 53 likes and 43 sends, a high send ratio for editorial content.',
    campaignsLabel: 'WORK',
    campaigns: [
      {
        name: 'The brands',
        objective: 'Five brands from one family, each with its own visual language. Open each one to see all its pieces.',
        subCampaigns: [
          { name: 'BWL', objective: 'The parent brand: global campaigns in English and Chinese for Instagram and RedNote.', formats: ['Carousel EN · 中文', 'Reel'] },
          { name: "DR's Secret", objective: 'Skincare: real skin, seasonal routines and the product up front.', formats: ['Carousel', 'Post', 'Reel'] },
          { name: 'Avance', objective: 'Beauty and wellness supplements: daily rituals and collagen.', formats: ['Carousel', 'Post', 'Reel EN · 中文'] },
          { name: 'Optrimax', objective: 'Functional drinks: colour, illustration and a more playful tone.', formats: ['Post', 'Reel'] },
          { name: 'Pentalab', objective: "Body care: skin doesn't stop at your face.", formats: ['Carousel'] },
        ],
      },
      { name: 'Paid media', objective: 'Ads for the family of brands: from the parent brand to each product line.', formats: ['Ad · Reel 9:16', 'Ad · Carousel'] },
    ],
  },

  procyon: {
    tagline: 'Visual identity, content and graphic system for an esports organization.',
    tags: ['Branding', 'Esports', 'Social Media', 'Visual Identity', 'Merch', 'Streaming'],
    overview:
      'Procyon is a Mexican esports organization competing in Valorant Challengers LATAM Norte. The work covers the complete visual identity: logo system, social media content templates, platform headers and the design of the official team jersey.',
    role: 'Complete visual identity and content production: logo system in three variants, match day templates in three states (Gameday, Winners, Defeat), headers for Twitch, YouTube, Twitter and Facebook, player posts and official jersey design.',
    challenge:
      'An identity for an esports team that would read in every piece, from posts to the jersey. The name Procyon — the brightest star in Canis Minor — defined the direction: cosmic, precise, with an edge of mystery.',
    process:
      'The system is built around a four-pointed star monogram as the central icon: geometric, symmetrical, with stellar references. The black/purple palette reinforces the spatial dimension of the name. The match templates operate in two modes: dark background with an intense character for match day, light background with expansive typography for winning results. The jersey reproduces the icon on the chest with topographic texture for the premium finish.',
    result:
      'Complete system published on @ProcyonGaming_: logo in three versions (horizontal, vertical, icon) in positive, negative and digital. Six result templates, headers on four platforms, player posts and official team jersey.',
    campaignsLabel: 'WORK',
    campaigns: [
      { name: 'Identity', objective: 'A four-pointed star: icon, horizontal and vertical logo.', formats: ['Icon', 'Horizontal', 'Vertical'] },
      { name: 'Match day', objective: 'Templates for every match in three states: gameday, win and defeat.', formats: ['Gameday', 'Winners', 'Defeat'] },
      { name: 'Players and creators', objective: 'Welcomes for the roster and content creators.', formats: ['Welcome', 'Players'] },
      { name: 'Banners', objective: 'Headers for YouTube, Twitch and each creator.', formats: ['YouTube', 'Twitch', 'Creators'] },
      { name: 'Merch', objective: "The organisation's official jersey.", formats: ['Jersey'] },
    ],
  },
  retrato: {
    tagline: 'Ivanna and Michel, two sessions on a Canon T3i.',
    tags: ['Photography', 'Portrait', 'Model direction'],
    overview: 'Two portrait sessions: stairs, plants, a motorbike and a lift as the set, with natural and hard light.',
    role: 'Photography, pose direction and selection.',
    challenge: 'Text in progress.',
    process: 'Text in progress.',
    result: 'Text in progress.',
    campaignsLabel: 'WORK',
    campaigns: [
      { name: 'Ivanna', objective: 'Blue hair against concrete, plants and metal: cold colour in grey spaces.', formats: ['Portrait', 'Outdoor'] },
      { name: 'Michel', objective: 'From the tree to the lift: hard light, reflections and a close-up.', formats: ['Portrait', 'Outdoor', 'Indoor'] },
    ],
  },
  kymsul: {
    tagline: 'Illustration and animation commissions: from zero to sales. Coming soon.',
    tags: ['Illustration', 'Animation', 'Emotes', 'Overlays', 'PNGtuber'],
    overview: 'Kymsul started with illustration and animation commissions; I grew it from zero to sales.',
    role: 'Illustration, animation, client care and commission sales.',
    challenge: 'Text in progress.',
    process: 'Text in progress.',
    result: 'Text in progress.',
    campaignsLabel: 'WORK',
    campaigns: [],
  },

  'activated-decor': {
    tagline: 'Rebranding for a Canadian TV-lift brand.',
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
    campaignsLabel: 'WORK',
    campaigns: [
      { name: 'Construction', objective: 'Monogram, logotype and short version, with their anatomy and how they adapt.', formats: ['Monogram', 'Logotype', 'Adaptation'] },
      { name: 'System', objective: 'Black, wine and greys; Poppins and Inter; correct and incorrect use.', formats: ['Palette', 'Typography', 'Usage'] },
      { name: 'Applications', objective: 'The brand on social and on product.', formats: ['Social', 'Mockup'] },
      { name: 'Motion', objective: 'The animated logo in its versions.', formats: ['Animated logo', 'Monogram', 'Logotype'] },
    ],
  },

  'ai-creative': {
    name: 'AI Creative System',
    tagline: 'AI-native creative workflows for producing with more control.',
    tags: ['Generative AI', 'Gemini', 'AE Script', 'PS Script', 'Automation', 'Codex'],
    overview:
      'AI creative system applied to real pieces: brand documentation, visual exploration, automated motion, generative video, and multi-format adaptation. This is not a tool test; it is a production method where AI helps reach an editable base faster and human judgment decides what works, what needs adjustment, and what should be discarded.',
    role: 'Creative direction and automation: brand documentation in Obsidian, Claude Code + Remotion + After Effects for paid media reels, Codex + Gemini Image for carousels and product editorial, and art direction in Gemini Flow and Higgsfield for generative video.',
    challenge:
      'The challenge was not using AI for novelty, but integrating it without breaking each brand identity. Every flow keeps a human decision point: reading guidelines before generating, selecting cuts, directing acting in video, retouching lighting, and deciding when stock works better than AI backgrounds so the result feels more natural.',
    process:
      'The system is divided into five flows, the same ones documented on the AI page: brand documentation, motion, generative image, generative video, and static design. For motion, the brief goes into Claude Code and becomes a Remotion composition with timing and cut structure; I review, select, and finish the deliverable in After Effects. For static pieces, Codex and Gemini help explore visual components from the brief. For generative video, Gemini Flow and Higgsfield are used with art direction from the initial prompt to acting corrections.',
    result:
      'A documented workflow that reduces repetitive work and speeds up the first editable base without removing creative review. It includes reels produced with the /reel skill, generative video pieces with acting direction, editorial posts created with generative imagery, and a World Cup 2026 flyer for KOP adapted into 5 formats with a Photoshop script. To see the full system, the AI page shows the working logic behind these cases.',
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
          'Scene photography, brand compositions and product flats generated with AI for real pieces. Prompt engineering as an exploration and production tool, with art direction and human judgment.',
        formats: ['Gemini · ChatGPT', 'Prompt Engineering', 'Post · Instagram', 'Carousel · Instagram'],
      },
      {
        name: 'Generative Video',
        objective:
          'Art direction using generative video tools: initial prompt, naturalness corrections and acting direction. Generated clips are assembled in After Effects for the final deliverable.',
        formats: ['Gemini Flow · Higgsfield', 'AI Clips · Source', 'Final Reel · AE'],
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
            formats: ['Paid Media · Video', 'Gemini · Higgsfield'],
          },
          {
            name: 'BWL · Post 77',
            objective:
              'Five AI product video clips used as base material for the final reel assembled in After Effects.',
            formats: ['AI Clips · Source', 'Final Reel · AE', 'Higgsfield · Gemini'],
          },
          {
            name: 'BWL · Post 79',
            objective:
              'AI-generated clips used as base material for the reel (sunbeam, cinemagraph and product animations), then assembled in After Effects.',
            formats: ['AI Clips · Source', 'Final Reel · AE', 'Gemini · Higgsfield'],
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
              'Brief + resource folder → Claude Code read the brand file, generated the AE script (307 lines) and the Remotion component in parallel. Refinement by prompts: timing adjusted from 0.83s to 2s per sport ("make them last longer to appreciate them"), verification of 8 clips with exact cut moment for each. Result: an editable 22-second reel base ready for final review and render in After Effects.',
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
              'Brief → Codex explores base panels with AI (typography, composition, palette) → human retouching of people and lighting → final text and copy overlaid. 8 slides prepared with less repetitive layout work.',
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
    campaignsLabel: 'WORK',
    campaigns: [
      { name: 'Content', objective: 'Cheese as the hero: natural light, wood, clay and Oaxacan textiles, plus carousels that teach how to recognise and care for it.', formats: ['Post', 'Carousel', 'Reel'] },
      {
        name: 'Creative requests',
        objective: 'Printed material for point of sale.',
        subCampaigns: [
          { name: 'Roll-up banner', objective: 'The two main lines, Quesillo and Panela, for in-store display.', formats: ['Roll-up', 'Print'] },
        ],
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
    campaignsLabel: 'WORK',
    campaigns: [
      { name: 'Content', objective: 'Sushi, cocktails and real people under the neon: the monthly grid of reels and posts.', formats: ['Post', 'Reel'] },
      {
        name: 'Creative requests',
        objective: 'Campaigns, locations, screens and point of sale.',
        subCampaigns: [
          { name: "Valentine's Day", objective: 'UGC mini-campaign "Do you have a story with your amorcito?": call, mechanics and close, plus tabloid and cover.', formats: ['Story · UGC', 'Tabloid', 'Cover'] },
          { name: 'Location kit', objective: 'The five Puebla locations as post and story, with two photos to rotate.', formats: ['Post', 'Story'] },
          { name: 'TV screen', objective: "The restaurant's promos animated for the venue screens.", formats: ['TV 16:9'] },
          { name: 'Point of sale', objective: 'For the tables: a cocktail tent card with QR and a survey to choose the next location.', formats: ['Tent card', 'Survey'] },
        ],
      },
    ],
  },
}

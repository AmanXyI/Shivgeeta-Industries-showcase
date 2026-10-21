import { Building2, Factory, Flame, FlaskConical, GraduationCap, HeartPulse, Hexagon, MessagesSquare, Radiation, Ruler, ShieldCheck, Snowflake, Stethoscope, Truck, Wrench } from 'lucide-react'

const files = import.meta.glob('./assets/img/*.jpg', { eager: true, import: 'default' })
export const img = Object.fromEntries(
  Object.entries(files).map(([path, url]) => [path.split('/').pop().replace('.jpg', ''), url]),
)

export const COMPANY = {
  name: 'Shivgeeta Industries',
  tagline: 'Built for Protection. Engineered for Life Safety & Sterile Environments.',
  established: 2022,
  address: 'Khasra No. 86, Telangkhedi Road, Pipla Bhadi, Savner - 441107 (Dist. Nagpur), Maharashtra, India',
  addressLines: ['Khasra No. 86, Telangkhedi Road,', 'Pipla Bhadi, Savner - 441107', '(Dist. Nagpur), Maharashtra, India'],
  gst: '27DFVPP8319N1Z9',
  // Placeholder until the real email address is provided.
  emails: ['youremail@example.com'],
  phones: ['+91 93714 74552'],
  whatsapp: '919371474552',
}

export const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'products', label: 'Product Showcase' },
  { id: 'specs', label: 'Technical Specs' },
  { id: 'infill', label: 'Infill Tech' },
  { id: 'applications', label: 'Applications' },
  { id: 'contact', label: 'Contact' },
]

export const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'fire', label: 'Fire Doors' },
  { id: 'cleanroom', label: 'Cleanroom & Pharma' },
  { id: 'shaft', label: 'Shaft Doors' },
  { id: 'acoustic', label: 'Acoustic Doors' },
  { id: 'radiation', label: 'Radiation Shielding' },
  { id: 'panels', label: 'Modular Panels' },
]

const FIRE_SPECS = {
  'Fire Rating': 'Up to 120 minutes (IS / BS / EN 1634-1)',
  Material: 'Galvanized / Galvalume steel',
  'Sheet Thickness': 'Frame 1.2 / 1.5 mm · Shutter 0.8 / 1.0 / 1.2 mm',
  'Frame Profile': 'Wall frame 100 × 57 mm',
  'Shutter Thickness': '40 / 50 / 60 mm (± 2 mm)',
  Infill: 'High-density Rockwool / Mineral Wool with vertical GI stiffeners',
  Finish: 'Powder coated (80 micron) · Matt / Glossy',
  Sealing: 'Intumescent smoke seals',
}
const FIRE_HARDWARE = [
  'Panic bar (EN 1125)',
  'Heavy-duty SS 304 ball-bearing hinges',
  'Surface / concealed door closer (EN 1154)',
  'Intumescent smoke seals',
  'Fire-rated vision glass 6 / 8 / 10 mm',
]

const CLEAN_SPECS = {
  Material: 'GI powder coated / SS 304 (optional)',
  'Sheet Thickness': 'Frame 1.0 / 1.2 mm · Shutter 0.8 / 1.0 mm',
  'Frame Profile': 'Wall frame 100 × 57 mm · PUF panel frame 50 × 57 mm',
  'Shutter Thickness': '40 / 50 / 60 mm (± 2 mm)',
  Infill: 'Honeycomb / PUF',
  'Vision Glass': 'Double glazed 3 / 5 mm, flush type',
  Sealing: 'Airtight EPDM perimeter gasket',
  Finish: 'Antimicrobial powder coat (80 micron) · Matt / Glossy / Custom',
}

const ACOUSTIC_SPECS = {
  'Acoustic Rating': 'STC 40 – 48 dB (configuration dependent)',
  Material: 'Galvanized / Galvalume steel',
  'Sheet Thickness': 'Frame 1.2 / 1.5 mm · Shutter 1.2 / 1.5 mm',
  'Shutter Thickness': '50 mm (± 2 mm) standard, custom available',
  Infill: 'Proprietary acoustic infill (Mineral Wool / Honeycomb)',
  'Vision Glass': '5 / 6 / 8 / 10 mm double glazed, hermetically sealed',
  Sealing: 'Perimeter acoustic seals + automatic drop-down bottom seal',
  'Fire Rating': 'Up to 120 minutes optional (IS / BS / EN)',
}

const RAD_SPECS = {
  'Lead Lining': '1.0 / 1.5 / 2.0 / 3.0 mm Pb (as per shielding design)',
  Material: 'Galvanized / Galvalume steel',
  'Sheet Thickness': 'Frame 1.2 / 1.5 mm · Shutter 1.0 / 1.2 mm',
  'Frame Profile': 'Wall frame 100 × 57 mm',
  Infill: 'Lead sheet with Honeycomb / Mineral Wool',
  Finish: 'Powder coated (Matt / Glossy / Texture) · SS cladding optional',
  Compliance: 'AERB (India), NCRP (USA), IAEA guidelines',
}

const SHAFT_SPECS = {
  Construction: 'Single / double skin, single or double leaf',
  Material: 'Galvanized steel, powder coated',
  'Sheet Thickness': 'Frame 1.2 / 1.5 mm · Shutter 0.8 / 1.0 mm',
  Ventilation: 'Louvered panels (optional)',
  Locking: 'Secure multi-point / cylinder locking for riser safety',
  'Fire Rating': 'Up to 120 minutes for fire shaft variants',
}

const PANEL_SPECS = {
  Thickness: '50 / 60 / 80 / 100 mm',
  Width: '1000 / 1200 mm',
  Length: 'Customised to site',
  Skins: 'Pre-painted GI (PPGI) / SS 304',
  Core: 'High-density PUF / Aluminium Honeycomb',
  'Joint Type': 'Tongue & groove, silicone sealed',
  Finish: 'Antimicrobial / powder coated',
  Accessories: 'Aluminium coving, 2D / 3D corner joints',
}

export const PRODUCTS = [
  {
    id: 'fire-single', category: 'fire', title: 'Single Leaf Fire Door', image: img['fire-single'],
    tags: ['120 Min', 'EN 1634-1', 'Vision Glass'],
    desc: 'Compact fire-rated door for stairwells, corridors and plant rooms, with a rockwool core and intumescent seals.',
    specs: { ...FIRE_SPECS, 'Max Size': 'Width up to 1200 mm, height up to 2500 mm' },
    features: FIRE_HARDWARE, sectors: ['Hospitals', 'Commercial buildings', 'Factories'],
  },
  {
    id: 'fire-double', category: 'fire', title: 'Double Leaf Fire Exit Door', image: img['fire-hero'],
    tags: ['120 Min', 'Panic Bar', 'EN 1125'],
    desc: 'Wide-opening exit door with vision panels, panic exit device and vertical rods for fast, safe evacuation.',
    specs: { ...FIRE_SPECS, 'Max Size': 'Width up to 2400 mm, height up to 2500 mm' },
    features: FIRE_HARDWARE, sectors: ['Malls & airports', 'High-rise offices', 'Educational institutions'],
  },
  {
    id: 'fire-unequal', category: 'fire', title: 'Unequal Leaf Fire Door', image: img['fire-unequal'],
    tags: ['120 Min', 'Flexible Width', 'Flush Bolt'],
    desc: 'An active leaf for daily traffic plus a secondary leaf that opens for equipment movement.',
    specs: { ...FIRE_SPECS, 'Max Size': 'Width up to 1800 mm, height up to 2500 mm' },
    features: FIRE_HARDWARE, sectors: ['Hospitals', 'Warehouses', 'Data centres'],
  },
  {
    id: 'fire-solid', category: 'fire', title: 'Solid Fire Door', image: img['fire-solid'],
    tags: ['120 Min', 'No Vision Glass', 'Rockwool'],
    desc: 'Full-solid leaf without glazing for electrical rooms, stores and service areas needing maximum integrity.',
    specs: { ...FIRE_SPECS, 'Max Size': 'Width up to 1200 mm, height up to 2500 mm' },
    features: FIRE_HARDWARE, sectors: ['Electrical rooms', 'Stores', 'Industrial plants'],
  },
  {
    id: 'fire-vision', category: 'fire', title: 'Vision Glass Fire Exit Door', image: img['fire-double'],
    tags: ['Fire-Rated Glass', 'Panic Bar', 'Double Leaf'],
    desc: 'Double leaf exit door with fire-rated clear glass panels for visibility across escape routes.',
    specs: { ...FIRE_SPECS, 'Vision Glass': 'Fire-rated clear glass 6 / 8 / 10 mm, 200 × 300 mm (std)' },
    features: FIRE_HARDWARE, sectors: ['Hotels', 'Hospitals', 'Shopping centres'],
  },
  {
    id: 'cr-gi', category: 'cleanroom', title: 'GI Powder Coated Cleanroom Door', image: img['cr-single'],
    tags: ['EPDM Airtight', 'Flush Surface', 'Antimicrobial'],
    desc: 'Flush, gap-free cleanroom door with airtight EPDM gasketing and antimicrobial powder coating.',
    specs: { ...CLEAN_SPECS, 'Max Size': 'Width up to 1200 mm, height up to 2500 mm' },
    features: ['Airtight EPDM gaskets', 'Zero dust-accumulation flush surface', 'Coved frame compatible', 'D-pull handle & mortise lock (SS 304)'],
    sectors: ['Operation Theatres', 'ICUs', 'Pharma production'],
  },
  {
    id: 'cr-ss', category: 'cleanroom', title: 'SS 304 Premium Cleanroom Door', image: img['cr-ss304'],
    tags: ['SS 304', 'Corrosion Resistant', 'GMP'],
    desc: 'Premium stainless steel finish for sterile and wash-down environments with strict GMP needs.',
    specs: { ...CLEAN_SPECS, Material: 'SS 304 premium finish' },
    features: ['Fully corrosion resistant', 'Easy wash-down cleaning', 'Airtight EPDM gaskets', 'Flush vision panels'],
    sectors: ['Pharma', 'CSSD', 'IVF labs'],
  },
  {
    id: 'cr-double', category: 'cleanroom', title: 'Double Glazed Vision Glass Door', image: img['cr-double'],
    tags: ['Double Leaf', 'Flush Glazing', 'Wide Access'],
    desc: 'Double leaf door with flush double-glazed vision panels for equipment and trolley movement.',
    specs: { ...CLEAN_SPECS, 'Max Size': 'Width up to 2400 mm, height up to 2500 mm' },
    features: ['Wider access for equipment', 'Flush double glazed vision panels', 'Minimal dust ledges', 'Flush bolts top & bottom'],
    sectors: ['Hospital corridors', 'Cleanrooms', 'Process areas'],
  },
  {
    id: 'cr-hatch', category: 'cleanroom', title: 'Hatch / Pass Box Door', image: img['cr-hatch'],
    tags: ['Pass Box', 'Airtight', 'Custom Size'],
    desc: 'Material transfer hatch for passing samples and supplies without breaking room classification.',
    specs: { ...CLEAN_SPECS, 'Max Size': 'Available in various sizes' },
    features: ['Flush & airtight construction', 'Interlocking option', 'SS 304 or GI finish'],
    sectors: ['Pharma', 'Labs', 'CSSD'],
  },
  {
    id: 'cr-hospital', category: 'cleanroom', title: 'Hospital & OT Door', image: img['range-cleanroom'],
    tags: ['Kick Plate', 'Hygienic', 'OT Ready'],
    desc: 'Heavy-traffic hospital door with SS kick plate, vision panel and hygienic powder-coated surfaces.',
    specs: CLEAN_SPECS,
    features: ['SS 304 kick plate', 'Door closer (surface mounted)', 'Vision glass panel', 'Antimicrobial coating'],
    sectors: ['Operation Theatres', 'ICUs', 'Patient wards'],
  },
  {
    id: 'shaft-fire', category: 'shaft', title: 'Fire Shaft Door', image: img['shaft-fire'],
    tags: ['Vertical Safety', 'Smoke Control', 'Single / Double'],
    desc: 'Stops fire and smoke travelling through vertical shafts in high-rise and commercial buildings.',
    specs: SHAFT_SPECS,
    features: ['Fire-rated performance', 'Prevents smoke spread', 'Ideal for high-rise buildings', 'Complies with national standards'],
    sectors: ['High-rise residential', 'Commercial complexes', 'Industrial facilities'],
  },
  {
    id: 'shaft-electrical', category: 'shaft', title: 'Electrical Shaft Door', image: img['shaft-electrical'],
    tags: ['Louvered', 'Secure Locking', 'Riser Access'],
    desc: 'Secure enclosure for electrical risers and utility services, with optional louvers for ventilation.',
    specs: SHAFT_SPECS,
    features: ['Cable safety', 'Secure locking', 'Easy maintenance access', 'Robust construction'],
    sectors: ['Commercial buildings', 'Hospitals', 'Data centres'],
  },
  {
    id: 'shaft-lv', category: 'shaft', title: 'LV Shaft Door', image: img['range-lv-shaft'],
    tags: ['Low Voltage', 'Vision Panel', 'Lockable'],
    desc: 'Low-voltage / communication riser door with a lockable leaf and optional vision panel.',
    specs: SHAFT_SPECS,
    features: ['Communication cable enclosure', 'Lockable for authorised access', 'Fire-rated option'],
    sectors: ['IT parks', 'Offices', 'Hotels'],
  },
  {
    id: 'ac-single', category: 'acoustic', title: 'Single Leaf Acoustic Door', image: img['acoustic-single'],
    tags: ['STC 40–48 dB', 'Drop Seal', 'Solid Leaf'],
    desc: 'Maximum acoustic performance for studios, meeting rooms and noisy plant areas.',
    specs: ACOUSTIC_SPECS,
    features: ['Perimeter acoustic seals', 'Automatic drop-down bottom seal', 'SS hinges (heavy duty)'],
    sectors: ['Recording studios', 'Conference rooms', 'Industrial facilities'],
  },
  {
    id: 'ac-glass', category: 'acoustic', title: 'Acoustic Door with Sealed Vision Glass', image: img['acoustic-single-glass'],
    tags: ['STC 40–48 dB', 'Hermetic Glass', 'Visibility'],
    desc: 'Keeps sightlines open with double-glazed, hermetically sealed acoustic glass.',
    specs: ACOUSTIC_SPECS,
    features: ['Hermetically sealed double glazing', 'Perimeter & drop seals', 'Wide colour options'],
    sectors: ['Hospital ICUs', 'Offices', 'Classrooms'],
  },
  {
    id: 'ac-double', category: 'acoustic', title: 'Double Leaf Acoustic Door', image: img['acoustic-double-glass'],
    tags: ['Double Leaf', 'STC Rated', 'Large Openings'],
    desc: 'Double leaf acoustic door for auditoriums and larger openings, with or without vision glass.',
    specs: { ...ACOUSTIC_SPECS, 'Max Size': 'Width up to 2400 mm, height up to 2500 mm' },
    features: ['Wider access for larger openings', 'Acoustic meeting stiles', 'Drop seals on both leaves'],
    sectors: ['Auditoriums', 'Studios', 'Industrial plants'],
  },
  {
    id: 'rad-single', category: 'radiation', title: 'Lead-Lined Radiation Door', image: img['rad-hero'],
    tags: ['1.0–3.0 mm Pb', 'AERB', 'IAEA'],
    desc: 'Shields staff and patients from X-ray and gamma radiation without compromising usability.',
    specs: { ...RAD_SPECS, 'Max Size': 'Width up to 1200 mm, height up to 2500 mm' },
    features: ['Lead-lined frame & shutter', 'Radiation seal (frame & shutter)', 'Automatic drop seal (bottom)', 'Kick plate (SS 304, optional)'],
    sectors: ['X-Ray rooms', 'CT Scan suites', 'Cath labs'],
  },
  {
    id: 'rad-double', category: 'radiation', title: 'Double Leaf Lead-Lined Door', image: img['rad-variants'],
    tags: ['Double Leaf', 'Pb Shielding', 'NCRP'],
    desc: 'Wide shielded opening for imaging suites where beds and equipment move in and out.',
    specs: { ...RAD_SPECS, 'Max Size': 'Width up to 2400 mm, height up to 2500 mm' },
    features: ['Continuous lead overlap at meeting stiles', 'Heavy-duty hinges', 'Custom finishes'],
    sectors: ['PET / Nuclear medicine', 'Interventional radiology', 'Research facilities'],
  },
  {
    id: 'panel-wall', category: 'panels', title: 'PUF Modular Wall Panel', image: img['range-puf'],
    tags: ['50–100 mm', 'PPGI / SS 304', 'T&G Joint'],
    desc: 'High-performance insulated wall panels for clean, seamless and hygienic partitions.',
    specs: PANEL_SPECS,
    features: ['Silicone-sealed tongue & groove joints', 'Aluminium coving profiles', '2D / 3D corner joints'],
    sectors: ['Cleanrooms', 'Pharma', 'Food & beverage'],
  },
  {
    id: 'panel-ot', category: 'panels', title: 'Modular OT Wall & Ceiling System', image: img['puf-ot'],
    tags: ['OT Grade', 'Walk-on Ceiling', 'HVAC Ready'],
    desc: 'Sterile operation theatre environment with modular walls, ceilings and integrated flush doors.',
    specs: { ...PANEL_SPECS, 'Air Tightness': '≤ 0.3 m³/hr/m²' },
    features: ['Airtight construction with coved corners', 'Compatible with HVAC & medical services', 'Flush observation panels'],
    sectors: ['Operation Theatres', 'ICUs', 'IVF labs'],
  },
  {
    id: 'panel-cleanroom', category: 'panels', title: 'Cleanroom Partition System', image: img['puf-hero'],
    tags: ['Aluminium Honeycomb', 'Flush Windows', 'Coving'],
    desc: 'Complete cleanroom envelope with flush glazing, integrated doors and smooth, coved finishes.',
    specs: PANEL_SPECS,
    features: ['Flush double-glazed windows', 'Integrated cleanroom doors', 'Turnkey design & installation'],
    sectors: ['Pharma production', 'Labs', 'Electronics'],
  },
]

export const INFILLS = [
  {
    id: 'honeycomb', name: 'Honeycomb Core', image: img['infill-honeycomb'], icon: Hexagon,
    summary: 'Lightweight yet strong hexagonal paper-honeycomb core made from 100% recycled paper.',
    points: ['High pressure strength and deformation resistance', 'Excellent base for flat or moulded facings', 'Used in cleanroom, acoustic and interior doors'],
    badges: ['Eco-friendly', 'Lightweight', 'High strength'],
  },
  {
    id: 'rockwool', name: 'Rockwool / Mineral Wool + GI Stiffener', image: img['infill-rockwool'], icon: Flame,
    summary: 'High-density basalt rock fibre, bonded with heat-resistant binder and reinforced with vertical GI stiffeners.',
    points: ['Thermal and acoustic insulation (ASTM C-612)', 'Steel stiffeners run full door height', 'Core of all 120-minute fire doors'],
    badges: ['Fire resistant', 'Sound insulation', 'Thermal'],
  },
  {
    id: 'puf', name: 'High-Density PUF Core', image: img['infill-puf'], icon: Snowflake,
    summary: 'Foamed polyurethane that expands to fill the leaf cavity completely, offering the highest insulation value.',
    points: ['Best-in-class thermal insulation', 'Ideal for cleanroom & sterile environments', 'Not fire rated — for hygiene-critical areas'],
    badges: ['High insulation', 'Clean environments'],
  },
  {
    id: 'lead', name: 'Lead-Lined Shielding Core', image: img['infill-lead'], icon: Radiation,
    summary: 'Specified-thickness lead sheet laminated within the leaf to stop harmful X-rays from passing through.',
    points: ['1.0 to 3.0 mm Pb options', 'Designed to AERB / NCRP / IAEA guidance', 'Used in radiology & diagnostic facilities'],
    badges: ['Radiation protection', 'Safe & reliable'],
  },
]

export const RAL_COLOURS = [
  { code: 'RAL 3020', name: 'Traffic Red', hex: '#C1121C' },
  { code: 'RAL 5005', name: 'Signal Blue', hex: '#1F4E8C' },
  { code: 'RAL 5015', name: 'Sky Blue', hex: '#2874B2' },
  { code: 'RAL 7035', name: 'Light Grey', hex: '#CBD0CC' },
  { code: 'RAL 9010', name: 'Pure White', hex: '#F1EDE1' },
  { code: 'RAL 7016', name: 'Anthracite Grey', hex: '#383E42' },
  { code: 'RAL 1003', name: 'Signal Yellow', hex: '#F2A900' },
  { code: 'RAL 7006', name: 'Beige Grey', hex: '#766A5E' },
  { code: 'RAL 6005', name: 'Moss Green', hex: '#114232' },
]

export const FINISHES = [
  { id: 'matt', name: 'Matt', image: img['finish-matt'], note: 'Non-reflective, smooth and elegant.' },
  { id: 'texture', name: 'Texture', image: img['finish-texture'], note: 'Fine texture for grip and durability.' },
  { id: 'glossy', name: 'Glossy', image: img['finish-glossy'], note: 'High-gloss for a modern, clean look.' },
  { id: 'structure', name: 'Structure', image: img['finish-structure'], note: 'Textured, scratch resistant finish.' },
  { id: 'metallic', name: 'Metallic', image: img['finish-metallic'], note: 'Brushed metallic premium appearance.' },
]

export const SECTORS = [
  { name: 'Hospitals & Healthcare', image: img['rad-hero'], icon: HeartPulse, text: 'Patient wards, ICUs and corridors with hygienic, fire-safe doors.' },
  { name: 'Operation Theatres & CSSD', image: img['puf-ot'], icon: Stethoscope, text: 'Modular OTs with airtight doors and seamless PUF walls.' },
  { name: 'Pharmaceuticals & IVF', image: img['puf-hero'], icon: FlaskConical, text: 'GMP cleanrooms, pass boxes and SS 304 production doors.' },
  { name: 'Industrial & Manufacturing', image: img['shaft-electrical'], icon: Factory, text: 'Fire, acoustic and utility doors for plants and warehouses.' },
  { name: 'High-Rise Commercial', image: img['city'], icon: Building2, text: 'Fire exit and shaft doors for towers, malls and hotels.' },
  { name: 'Educational & Research', image: img['acoustic-hero'], icon: GraduationCap, text: 'Labs, auditoriums and classrooms with acoustic and fire doors.' },
]

export const PROCESS = [
  { title: 'Design Consultation', text: 'Site study, opening schedule and compliance mapping with your architects and consultants.', icon: MessagesSquare },
  { title: 'Engineering', text: 'Shop drawings, infill selection and hardware specification for every opening.', icon: Ruler },
  { title: 'Precision Supply', text: 'CNC fabrication and powder coating at our Nagpur facility, delivered on schedule.', icon: Truck },
  { title: 'Expert Installation', text: 'Trained teams install frames, leaves, seals and hardware to tested configurations.', icon: Wrench },
  { title: 'Testing & After-Sales', text: 'Commissioning checks, handover documentation and responsive maintenance support.', icon: ShieldCheck },
]

// Not shown yet: <Trust /> is removed from App until certificates are confirmed.
export const CERTS = [
  { title: 'ISO 9001:2015', sub: 'Quality Management' },
  { title: 'ISO 14001:2015', sub: 'Environmental Mgmt.' },
  { title: 'ISO 45001:2018', sub: 'Occupational Safety' },
  { title: 'CE', sub: 'Certified' },
  { title: 'GMP', sub: 'Certified' },
  { title: 'AERB', sub: 'Compliance' },
  { title: 'Make in India', sub: 'Proudly Indian' },
  { title: 'GeM', sub: 'Portal Registered' },
]

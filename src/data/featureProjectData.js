// 🔹 Normal projects
const officeImages = Object.values(
  import.meta.glob("@/assets/officeIMG1/*.webp", { eager: true })
).map((img) => img.default);

const villaImages = Object.values(
  import.meta.glob("@/assets/Villa2/*.webp", { eager: true })
).map((img) => img.default);

const homeImages = Object.values(
  import.meta.glob("@/assets/home2/*.webp", { eager: true })
).map((img) => img.default);

const pgImages = Object.values(
  import.meta.glob("@/assets/PG2/*.webp", { eager: true })
).map((img) => img.default);

const likithImages = Object.values(
  import.meta.glob("@/assets/LIKITH-lux-residential/*.webp", { eager: true })
).map((img) => img.default);

const acresImages = Object.values(
  import.meta.glob("@/assets/ACRES-LAYOUT-DESIGN/*.webp", { eager: true })
).map((img) => img.default);

const commercialImages = Object.values(
  import.meta.glob("@/assets/commercial-building/*.webp", { eager: true })
).map((img) => img.default);

const sereneImages = Object.values(
  import.meta.glob(
    "@/assets/SERENE_GROOVES_FARM_LAND/*.webp",
    { eager: true }
  )
).map((img) => img.default);

const suryaImages = Object.values(
  import.meta.glob(
    "@/assets/surya-room-final-renders/*.webp",
    { eager: true }
  )
).map((img) => img.default);

// 🔥 RADIENT (MULTI-FOLDER → FLAT PROJECTS)
const radientModules = import.meta.glob(
  "@/assets/radient-jasmine-interiors/*/*.webp",
  { eager: true }
);

const mamathaImages = Object.values(
  import.meta.glob(
    "@/assets/Chandrashekar/*.webp",
    { eager: true }
  )
).map((img) => img.default);

const radientImages = {};

Object.entries(radientModules).forEach(([path, module]) => {
  const folder = path.split("/").slice(-2, -1)[0];

  if (!radientImages[folder]) {
    radientImages[folder] = [];
  }

  radientImages[folder].push(module.default);
});

// 🔥 CREATE FLAT CARDS
const radientCards = Object.entries(radientImages).map(
  ([unit, imgs], index) => ({
    id: 8 + index,
    src: imgs[0],
    title: `Radient Jasmine - ${unit.replace("-", " ").toUpperCase()}`,
    type: "Residential",
    desc: unit.replace("-", " ").toUpperCase(),
    additionalDesc:
      "Interior design with modern finishes and optimized space planning.",
    images: imgs,
  })
);

// 🔥 FINAL EXPORT
export default [
  {
    id: 1,
    src: villaImages[0],
    title: "Luxury Villa",
    type: "Residential",
    desc: "Modern 4BHK Villa with contemporary design",
    additionalDesc:
      "Complete construction and interior design for a 3500 sq ft villa featuring open-plan living spaces and smart home integration.",
    images: villaImages,
  },

  {
    id: 2,
    src: officeImages[0],
    title: "Corporate Office",
    type: "Commercial",
    desc: "Modern office renovation",
    additionalDesc:
      "5000 sq ft office space with collaborative workspaces and ergonomic design.",
    images: officeImages,
  },

  {
    id: 3,
    src: homeImages[0],
    title: "Residential Complex",
    type: "Construction",
    desc: "30-unit residential project",
    additionalDesc:
      "Multi-story residential complex with amenities like gym, pool, and gardens.",
    images: homeImages,
  },

  {
    id: 4,
    src: pgImages[0],
    title: "Commercial Complex",
    type: "Commercial",
    desc: "Multi-unit commercial development",
    additionalDesc:
      "Retail shops and office spaces designed for business usage.",
    images: pgImages,
  },

  {
    id: 5,
    src: likithImages[0],
    title: "Likith Luxury Residence",
    type: "Residential",
    desc: "Modern luxury G+3 elevation",
    additionalDesc:
      "Premium facade design with balcony landscaping and modern aesthetics.",
    images: likithImages,
  },

  {
    id: 6,
    src: acresImages[0],
    title: "Acres Layout Design",
    type: "Construction",
    desc: "Residential layout planning",
    additionalDesc:
      "Layout with plots, clubhouse, sports courts, and infrastructure.",
    images: acresImages,
  },

  {
    id: 7,
    src: commercialImages[0],
    title: "Commercial Building",
    type: "Commercial",
    desc: "Multi-storey commercial structure",
    additionalDesc:
      "Retail + office spaces with modern elevation.",
    images: commercialImages,
  },
  {
  id: 103,
  src: mamathaImages[0] || "",
  title: "Chandrashekar Residence",
  type: "Residential",
  desc: "First & Second Floor Interiors",
  additionalDesc:
    "Complete interior design including living room, kitchen, bedrooms, wardrobes and ceiling work.",
  images: mamathaImages,
},
{
  id: 102,
  src: sereneImages[0] || "",
  title: "Serene Grooves Farm Land",
  type: "Construction",
  desc: "Farm land layout & development",
  additionalDesc:
    "Farm land planning, layout design, landscaping, and infrastructure development.",
  images: sereneImages,
},
{
  id: 101,
  src: suryaImages[0] || "",
  title: "Surya Room Interiors",
  type: "Residential",
  desc: "Modern bedroom interior design",
  additionalDesc:
    "Customized bedroom interior with wardrobe, lighting, and premium finishes.",
  images: suryaImages,
},

  // 🔥 RADIENT PROJECTS (AUTO GENERATED)
  ...radientCards,
];
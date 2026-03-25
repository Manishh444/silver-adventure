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

export default [
  {
    id: 1,
    src: villaImages[0],
    title: "Luxury Villa",
    type: "Residential",
    desc: "Modern 4BHK Villa2 with contemporary design",
    additionalDesc:
      "Complete construction and interior design for a 3500 sq ft Villa2 featuring open-plan living spaces, premium finishes, and smart home integration.",
    images: villaImages,
  },
  {
    id: 2,
    src: officeImages[0],
    title: "Corporate Office",
    type: "Commercial",
    desc: "Complete office renovation with modern interiors",
    additionalDesc:
      "5000 sq ft office space transformation with collaborative workspaces, meeting rooms, and ergonomic design for a tech company.",
    images: officeImages,
  },
  {
    id: 3,
    src: homeImages[0],
    title: "Residential Complex",
    type: "Construction",
    desc: "30-unit residential project with premium amenities",
    additionalDesc:
      "Multi-story residential complex with clubhouse, swimming pool, gym, and landscaped gardens across 2 acres.",
    images: homeImages,
  },
  {
    id: 4,
    src: pgImages[0],
    title: "PG Complex",
    type: "Construction",
    desc: "30-unit residential project with premium amenities",
    additionalDesc:
      "Multi-story residential complex with clubhouse, swimming pool, gym, and landscaped gardens across 2 acres.",
    images: pgImages,
  },
  {
  id: 5,
  src: likithImages[0],
  title: "Likith Luxury Residence",
  type: "Residential",
  desc: "Modern luxury G+3 residential elevation",
  additionalDesc:
    "Premium residential project featuring contemporary facade design, natural textures, ventilation blocks, and balcony landscaping with a modern aesthetic.",
  images: likithImages,
},
{
  id: 6,
  src: acresImages[0],
  title: "Acres Layout Design",
  type: "Construction",
  desc: "Residential layout planning with clubhouse & plots",
  additionalDesc:
    "Comprehensive site planning for a residential layout including plotted development, row houses, clubhouse, sports courts, landscaping, and road infrastructure.",
  images: acresImages,
},
];
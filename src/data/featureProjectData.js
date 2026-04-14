// 🔥 AUTO LOAD ALL PROJECTS (LAZY LOAD — FIXED)
const allImages = import.meta.glob(
  "/src/assets/projects/*/*.{webp,jpg,png}"
);

// 🧠 GROUP IMAGES BY FOLDER
const groupedProjects = {};

Object.entries(allImages).forEach(([path, loader]) => {
 const folder = path
  .split("/")
  .slice(-2, -1)[0]
  .toLowerCase()
  .replace(/[\s_]+/g, "-") // 🔥 replaces multiple _ or space → single dash
  .replace(/-+/g, "-")     // 🔥 removes double dash
  .replace(/[^a-z0-9-]/g, "");
  
  if (!groupedProjects[folder]) {
    groupedProjects[folder] = [];
  }

  // 👉 store loader function instead of actual image
  groupedProjects[folder].push(loader);
});

// 🧠 FORMAT TITLE
const formatTitle = (name) =>
  name
    .replaceAll("-", " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

// 🧠 CUSTOM CONFIG (UNCHANGED)
const projectMeta = {
  villa2: {
    title: "Luxury Villa",
    type: "Residential",
    desc: "Modern 4BHK Villa with contemporary design",
    additionalDesc:
      "Complete construction and interior design for a 3500 sq ft villa featuring open-plan living spaces and smart home integration.",
  },

  officeimg1: {
    title: "Corporate Office",
    type: "Commercial",
    desc: "Modern office renovation",
    additionalDesc:
      "5000 sq ft office space with collaborative workspaces and ergonomic design.",
  },

  home2: {
    title: "Residential Complex",
    type: "Construction",
    desc: "30-unit residential project",
    additionalDesc:
      "Multi-story residential complex with gym, pool, and landscaped gardens.",
  },

  pg2: {
    title: "Commercial Complex",
    type: "Commercial",
    desc: "Retail + office space",
    additionalDesc:
      "Multi-unit commercial development designed for business use.",
  },

  "likith-lux-residential": {
    title: "Likith Luxury Residence",
    type: "Residential",
    desc: "Modern luxury G+3 elevation",
    additionalDesc:
      "Premium facade design with balcony landscaping and modern aesthetics.",
  },

  "acres-layout-design": {
    title: "Acres Layout Design",
    type: "Construction",
    desc: "Residential layout planning",
    additionalDesc:
      "Layout with plots, clubhouse, sports courts, and infrastructure.",
  },

  "commercial-building": {
    title: "Commercial Building",
    type: "Commercial",
    desc: "Multi-storey commercial structure",
    additionalDesc:
      "Retail and office spaces with modern elevation design.",
  },

  "serene-grooves-farm-land": {
    title: "Serene Grooves Farm Land",
    type: "Construction",
    desc: "Farm land layout & development",
    additionalDesc:
      "Farm planning, landscaping, and infrastructure development.",
  },

  "surya-room-final-renders": {
    title: "Surya Room Interiors",
    type: "Residential",
    desc: "Modern bedroom interior design",
    additionalDesc:
      "Customized bedroom with wardrobe, lighting, and premium finishes.",
  },

  chandrashekar: {
    title: "Chandrashekar Residence",
    type: "Residential",
    desc: "First & Second floor interiors",
    additionalDesc:
      "Complete interior design including living room, kitchen, bedrooms, wardrobes, and ceiling work.",
  },

  "radient-jasmine-202-3bhk": {
    title: "Radient Jasmine - 202 3BHK",
    type: "Residential",
    desc: "202 3BHK",
    additionalDesc:
      "Interior design with modern finishes and optimized space planning.",
  },

  "radient-jasmine-401-3bhk": {
    title: "Radient Jasmine - 401 3BHK",
    type: "Residential",
    desc: "401 3BHK",
    additionalDesc:
      "Interior design with modern finishes and optimized space planning.",
  },

  "radient-jasmine-501-3bhk": {
    title: "Radient Jasmine - 501 3BHK",
    type: "Residential",
    desc: "501 3BHK",
    additionalDesc:
      "Interior design with modern finishes and optimized space planning.",
  },

  "radient-jasmine-kitchen": {
    title: "Radient Jasmine - Kitchen",
    type: "Residential",
    desc: "Kitchen",
    additionalDesc:
      "Modern kitchen design with optimized storage and finishes.",
  },

  "radient-jasmine-tv-unit": {
    title: "Radient Jasmine - TV Unit",
    type: "Residential",
    desc: "TV Unit",
    additionalDesc:
      "Modern TV unit design with optimized layout and aesthetics.",
  },

  "radient-jasmine-wardrobe": {
    title: "Radient Jasmine - Wardrobe",
    type: "Residential",
    desc: "Wardrobe",
    additionalDesc:
      "Interior wardrobe design with optimized storage planning.",
  },
};

// 🧠 BUILD FINAL PROJECT ARRAY
const projects = Object.entries(groupedProjects).map(
  ([folder, images], index) => {
    const meta = projectMeta[folder] || {};

    return {
      id: index + 1,

      // ⚠️ NOW THIS IS A FUNCTION (IMPORTANT)
      src: images[0] || null,

      title: meta.title || formatTitle(folder),
      type: meta.type || "Project",
      desc: meta.desc || "Project showcase",
      additionalDesc: meta.additionalDesc || "",

      // ⚠️ ARRAY OF FUNCTIONS
      images,
    };
  }
);

export default projects;
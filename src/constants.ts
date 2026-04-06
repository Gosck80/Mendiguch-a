export const PORTFOLIO_DATA = {
  name: "Óscar Ramón Mendiguchía",
  title: "Industrial Design Engineer",
  location: "Valladolid, Spain",
  email: "gosck80@gmail.com",
  tagline: "Shaping products people love through engineering precision and aesthetic harmony.",
  bio: "",
  manifesto: "Design is not just how it looks, but how it works, how it's made, and how it lasts.",
  
  projects: [
    {
      id: "ergonomic-workspace",
      title: "Nexus Workspace System",
      category: "Furniture",
      description: "A modular, ergonomic desk system designed for modern remote work environments.",
      image: "https://picsum.photos/seed/desk/1200/800",
      tools: ["SolidWorks", "Keyshot", "Rhino"],
      process: {
        brief: "Create a desk that adapts to small spaces while maintaining ergonomic standards.",
        research: "Studied anthropometric data for 5th to 95th percentile users.",
        sketches: "Explored over 50 iterations of the leg adjustment mechanism.",
        cad: "Full assembly in SolidWorks with motion analysis for the height adjustment.",
        prototype: "1:5 scale 3D printed model followed by a 1:1 plywood functional prototype.",
        final: "A sleek, powder-coated steel and oak system with integrated cable management."
      }
    },
    {
      id: "sustainable-packaging",
      title: "EcoLoop Packaging",
      category: "Packaging",
      description: "Zero-waste packaging solution for high-end electronics using molded pulp.",
      image: "https://picsum.photos/seed/package/1200/800",
      tools: ["Fusion 360", "Illustrator"],
      process: {
        brief: "Replace plastic inserts with a 100% biodegradable alternative.",
        research: "Analyzed impact protection requirements for fragile electronics.",
        sketches: "Focused on structural ribbing for strength without extra material.",
        cad: "Surfacing in Fusion 360 to create the molding dies.",
        prototype: "CNC machined molds for wet-press pulp prototyping.",
        final: "A premium, tactile unboxing experience that is fully compostable."
      }
    },
    {
      id: "medical-device",
      title: "VitalPulse Inhaler",
      category: "Medical",
      description: "A smart, connected asthma inhaler with improved dose tracking and ergonomics.",
      image: "https://picsum.photos/seed/medical/1200/800",
      tools: ["SolidWorks", "Blender", "UX Design"],
      process: {
        brief: "Improve adherence in pediatric asthma patients through better design.",
        research: "User testing with children and parents to identify friction points.",
        sketches: "Playful yet professional forms that fit comfortably in small hands.",
        cad: "Complex internal mechanism design for consistent dose delivery.",
        prototype: "High-fidelity SLA prints with functional spring mechanisms.",
        final: "A device that reduced missed doses by 40% in pilot testing."
      }
    },
    {
      id: "urban-mobility",
      title: "Shift Electric Scooter",
      category: "Transport",
      description: "Foldable electric scooter optimized for last-mile urban commuting.",
      image: "https://picsum.photos/seed/scooter/1200/800",
      tools: ["CATIA", "Keyshot", "DFM"],
      process: {
        brief: "Design a scooter that is light enough to carry but stable enough for cobblestones.",
        research: "Vibration analysis on various urban surfaces.",
        sketches: "Integrated folding mechanism that locks with a single click.",
        cad: "Structural optimization using FEA to minimize weight.",
        prototype: "Functional aluminum frame prototype with off-the-shelf electronics.",
        final: "A 9kg scooter with a 25km range and superior ride quality."
      }
    }
  ],

  skills: {
    cad: [
      { name: "SolidWorks", level: 95 },
      { name: "Fusion 360", level: 90 },
      { name: "Rhino", level: 85 },
      { name: "CATIA", level: 80 }
    ],
    rendering: [
      { name: "Keyshot", level: 95 },
      { name: "Blender", level: 80 },
      { name: "V-Ray", level: 75 }
    ],
    prototyping: ["3D Printing (FDM/SLA)", "CNC Machining", "Laser Cutting", "Foam Modeling"],
    engineering: ["DFM/DFA", "GD&T", "Materials Selection", "FEA Analysis"]
  },

  services: [
    {
      title: "Concept Design",
      description: "From initial ideation and sketching to high-fidelity renderings that sell the vision.",
      deliverables: ["Sketches", "3D Visuals", "Market Research"]
    },
    {
      title: "Product Development",
      description: "Full engineering cycle: CAD modeling, mechanism design, and DFM optimization.",
      deliverables: ["Production Files", "BOM", "Technical Drawings"]
    },
    {
      title: "Prototyping",
      description: "Bringing ideas to life through physical models to test form, fit, and function.",
      deliverables: ["Functional Models", "Proof of Concept", "User Testing Kits"]
    }
  ],

  processSteps: [
    { title: "Discover", desc: "Researching user needs, market trends, and technical constraints." },
    { title: "Define", desc: "Setting clear goals, requirements, and design direction." },
    { title: "Design", desc: "Iterative sketching, 3D modeling, and aesthetic refinement." },
    { title: "Prototype", desc: "Building and testing physical models to validate the design." },
    { title: "Deliver", desc: "Finalizing technical documentation and production-ready files." }
  ]
};

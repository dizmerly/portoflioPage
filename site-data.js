/*
  ──────────────────────────────────────────────────────────────────────────
  YOUR QUICK-EDIT FILE
  ──────────────────────────────────────────────────────────────────────────
  Update your name, short bio, social links, projects, and photo captions here.
  Photos currently live in /photos. To add another, place it there and add its
  filename below (for example: "photos/new-work.jpg").
*/
export const profile = {
  name: "Daniel Izmerly",
  role: "Developer · Photographer",
  location: "Based anywhere",
  email: "hello@danielizmerly.com",
  bio: "I build considered digital experiences and collect the quiet details in between.",
  socials: {
    github: "https://github.com/dizmerly",
    instagram: "https://www.instagram.com/dizmerly/",
    linkedin: "https://linkedin.com/in/your-username",
  },
};

// Keep this list short and sharp—three to six great projects reads best.
export const projects = [
  {
    title: "Archive / 01", type: "Full-stack web app", number: "01",
    description: "A focused product description goes here. Explain the problem, your role, and why it mattered in two short lines.",
    stack: ["React", "TypeScript", "API"], url: "https://github.com/your-username/project-one",
  },
  {
    title: "Signal Garden", type: "Creative coding", number: "02",
    description: "Use this space for a project with a different flavor: an experiment, tool, open-source contribution, or visual study.",
    stack: ["JavaScript", "Canvas", "CSS"], url: "https://github.com/your-username/project-two",
  },
  {
    title: "Field Notes", type: "Design system", number: "03",
    description: "A third project rounds out the story. Link to a live build, case study, repository, or wherever the work lives.",
    stack: ["Design", "Next.js", "A11y"], url: "https://github.com/your-username/project-three",
  },
];

export const photos = [
  { title: "Camp light", place: "Colorado", image: "photos/DSC00115.jpg" },
  { title: "The long way", place: "Colorado", image: "photos/DSC00171_01.jpg" },
  { title: "Ridgeline", place: "Colorado", image: "photos/DSC00183_01.jpg" },
  { title: "High country", place: "Colorado", image: "photos/DSC00234_01.jpg" },
  { title: "Alpine window", place: "Colorado", image: "photos/DSC00288_02.jpg" },
  { title: "Open air", place: "Colorado", image: "photos/DSC00348_01.jpg" },
  { title: "Along the pass", place: "Colorado", image: "photos/DSC00624.jpg" },
  { title: "Wild company", place: "Colorado", image: "photos/DSC00624_01.jpg" },
  { title: "At elevation", place: "Colorado", image: "photos/DSC01031.jpg" },
  { title: "Blue hour", place: "Great Sand Dunes", image: "photos/DSC01465.jpg" },
  { title: "Wide open", place: "Colorado", image: "photos/DSC01554.jpg" },
];

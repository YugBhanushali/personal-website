// Hey, 👋 I’m Yug a developer who loves to make stuff on the internet using internet and love to design which makes ux more smoother and cleaner.

export const HeroTitle = [
  "Hey",
  "👋",
  "I'm",
  "Yug",
  "a",
  "full-stack",
  "developer",
  "who",
  "loves",
  "to",
  "make",
  "stuff",
  "on",
  "the",
  "internet.",
  "Also",
  "love",
  "to",
  "create",
  "minimalistic,",
  "cleaner",
  "and",
  "appealing",
  "UI.",
  "Which",
  "makes",
  "user",
  "experience",
  "more",
  "smoother.",
];
//hey, 👋 i’m yug a full-stack developer who loves to make stuff on the internet and love to create minimalistic, cleaner and appealing ui. which makes user experience more smoother.

const statuType: any = {
  Active: {
    colour: "#0CCE6B",
    title: "Active",
    boxShadow: "#0bff0640",
  },
  Building: {
    colour: "#FFB800",
    title: "Building",
    boxShadow: "#ffbf0040",
  },
  Deploying: {
    colour: "#2f42f5",
    title: "Deploying",
    boxShadow: "#2f42f540",
  },
};

export const projectCardData = [
  {
    projectId: 1,
    projectName: "Code to Image",
    githubLink: "https://github.com/YugBhanushali/code-to-image",
    projectLink: "https://codetoimg.vercel.app/",
    projectImage: "/assets/code-to-image-home.png",
    techStack: [
      {
        name: "React",
        backgroundColour: "#21bad551",
        borderColour: "#024149",
        borderColourHover: "#088090",
        icon: "https://img.icons8.com/color/48/000000/react-native.png",
      },
      {
        name: "Redux",
        backgroundColour: "#8000ff3b",
        borderColour: "#382359",
        borderColourHover: "#764abc",
        icon: "https://img.icons8.com/color/48/000000/redux.png",
      },
      {
        name: "Styled Components",
        backgroundColour: "#d76d773b",
        borderColour: "#6d3d77",
        borderColourHover: "#d76d77",
        icon: "https://img.icons8.com/color/48/000000/styled-components.png",
      },
      {
        name: "Prismjs",
        backgroundColour: "#f5d76e3b",
        borderColour: "#939b00cc",
        borderColourHover: "#f5d76e",
        icon: "https://img.icons8.com/color/48/000000/prism.png",
      },
      {
        name: "tailwindcss",
        backgroundColour: "#06b6d43b",
        borderColour: "#004959cc",
        borderColourHover: "#06b6d4",
        icon: "/assets/tech-logos/tailwindcss.png",
      },
    ],
  },

  {
    projectId: 2,
    projectName: "ZipURL",
    githubLink: "https://github.com/YugBhanushali/ZipURL",
    projectLink: "https://zipurl.vercel.app/",
    projectImage: "/assets/zipurl-home.png",
    techStack: [
      {
        name: "Next.js",
        backgroundColour: "#9100006e",
        borderColour: "#5f2101cc",
        borderColourHover: "#c81717",
        icon: "/assets/tech-logos/nextjs.png",
      },
      {
        name: "Chakra UI",
        backgroundColour: "#3197953b",
        borderColour: "#0e6a6699",
        borderColourHover: "#319795",
        icon: "https://img.icons8.com/color/48/000000/chakra-ui.png",
      },
      {
        //supabase logo have green colour so choose the background colour accordingly
        name: "Supabase",
        backgroundColour: "#00ff003b",
        borderColour: "#007100cc",
        borderColourHover: "#00ff00",
        icon: "/assets/tech-logos/supabase.png",
      },
      {
        name: "TypeScript",
        backgroundColour: "#007acc3b",
        borderColour: "#02476ecc",
        borderColourHover: "#007acc",
        icon: "https://img.icons8.com/color/48/000000/typescript.png",
      },
      {
        name: "tailwindcss",
        backgroundColour: "#06b6d43b",
        borderColour: "#004959cc",
        borderColourHover: "#06b6d4",
        icon: "/assets/tech-logos/tailwindcss.png",
      },
    ],
  },
  {
    projectId: 3,
    projectName: "EventHub",
    githubLink: "https://github.com/YugBhanushali/Event-Hub-Frontend",
    projectLink: "https://eventhubs.vercel.app/",
    projectImage: "/assets/event-hub-home.png",
    techStack: [
      {
        name: "React",
        backgroundColour: "#21bad551",
        borderColour: "#024149",
        borderColourHover: "#088090",
        icon: "https://img.icons8.com/color/48/000000/react-native.png",
      },
      {
        name: "Node js",
        backgroundColour: "#00ff003b",
        borderColour: "#007100cc",
        borderColourHover: "#00ff00",
        icon: "/assets/tech-logos/nodejs.png",
      },
      {
        name: "Express js",
        backgroundColour: "#f5d76e3b",
        borderColour: "#939b00cc",
        borderColourHover: "#f5d76e",
        icon: "/assets/tech-logos/expressjs.png",
      },
      {
        name: "MongoDB",
        backgroundColour: "#00ff003b",
        borderColour: "#007100cc",
        borderColourHover: "#00ff00",
        icon: "https://img.icons8.com/color/48/000000/mongodb.png",
      },
    ],
  },
  {
    projectId: 4,
    projectName: "FileDrop",
    githubLink: "https://github.com/YugBhanushali/FileDrop",
    projectLink: "https://file-drops.vercel.app/",
    projectImage: "/assets/filedrop.png",
    techStack: [
      {
        name: "Next.js",
        backgroundColour: "#9100006e",
        borderColour: "#5f2101cc",
        borderColourHover: "#c81717",
        icon: "/assets/tech-logos/nextjs.png",
      },
      {
        name: "WebRTC",
        backgroundColour: "#ff99003b",
        borderColour: "#cc6600",
        borderColourHover: "#ff9900",
        icon: "/assets/tech-logos/webrtc.png",
      },
      {
        name: "Socket-io",
        backgroundColour: "#f5d76e3b",
        borderColour: "#939b00cc",
        borderColourHover: "#f5d76e",
        icon: "/assets/tech-logos/socket-io.png",
      },
      {
        name: "Node js",
        backgroundColour: "#00ff003b",
        borderColour: "#007100cc",
        borderColourHover: "#00ff00",
        icon: "/assets/tech-logos/nodejs.png",
      },
      {
        name: "typescript",
        backgroundColour: "#007acc3b",
        borderColour: "#02476ecc",
        borderColourHover: "#007acc",
        icon: "https://img.icons8.com/color/48/000000/typescript.png",
      },
    ],
  },
  {
    projectId: 5,
    projectName: "Colour Codes",
    githubLink: "",
    projectLink: "https://colourcodes.vercel.app/",
    projectImage: "/assets/colour-codes.png",
    techStack: [
      {
        name: "Next.js",
        backgroundColour: "#9100006e",
        borderColour: "#5f2101cc",
        borderColourHover: "#c81717",
        icon: "/assets/tech-logos/nextjs.png",
      },
      {
        name: "typescript",
        backgroundColour: "#007acc3b",
        borderColour: "#02476ecc",
        borderColourHover: "#007acc",
        icon: "https://img.icons8.com/color/48/000000/typescript.png",
      },
      {
        name: "tailwindcss",
        backgroundColour: "#06b6d43b",
        borderColour: "#004959cc",
        borderColourHover: "#06b6d4",
        icon: "/assets/tech-logos/tailwindcss.png",
      },
    ],
  },
  {
    projectId: 6,
    projectName: "colour-codes",
    githubLink: "https://github.com/YugBhanushali/colour-codes-npm-package",
    projectLink: "https://www.npmjs.com/package/colour-codes",
    projectImage: "/assets/colour-codes-pkg-home.png",
    techStack: [
      {
        name: "TypeScript",
        backgroundColour: "#007acc3b",
        borderColour: "#02476ecc",
        borderColourHover: "#007acc",
        icon: "https://img.icons8.com/color/48/000000/typescript.png",
      },
      {
        name: "npm",
        backgroundColour: "#ff00003b",
        borderColour: "#7a0000cc",
        borderColourHover: "#ff0000",
        icon: "/assets/tech-logos/npm-logos.png",
      },
    ],
  },
  {
    projectId: 7,
    projectName: "webwall",
    githubLink: "https://github.com/YugBhanushali/webwall",
    projectLink: "https://www.npmjs.com/package/webwall",
    projectImage: "/assets/webwall-home.png",
    techStack: [
      {
        name: "Javascript",
        backgroundColour: "#f5d76e3b",
        borderColour: "#939b00cc",
        borderColourHover: "#f5d76e",
        icon: "/assets/tech-logos/javascript.png",
      },
      {
        name: "npm",
        backgroundColour: "#ff00003b",
        borderColour: "#7a0000cc",
        borderColourHover: "#ff0000",
        icon: "/assets/tech-logos/npm-logos.png",
      },
    ],
  },
  // {
  //   projectId: 7,
  //   projectName: "SGPA Calculator",
  //   githubLink: "https://github.com/YugBhanushali/SGPA-Calculator",
  //   projectLink: "https://sgpa-calculators.vercel.app/",
  //   projectImage: "/assets/sgpa-calculator-home.png",
  //   techStack: [
  //     {
  //       name: "Next.js",
  //       backgroundColour: "#9100006e",
  //       borderColour: "#5f2101cc",
  //       borderColourHover: "#c81717",
  //       icon: "/assets/tech-logos/nextjs.png",
  //     },
  //     {
  //       name: "tailwindcss",
  //       backgroundColour: "#06b6d43b",
  //       borderColour: "#004959cc",
  //       borderColourHover: "#06b6d4",
  //       icon: "/assets/tech-logos/tailwindcss.png",
  //     },
  //   ],
  // },
];

export const tecnologiesData = [
  {
    name: "ReactJs",
    boxShadow: "0px 0px 15px 4px #00708b",
    image: "/assets/tech-logos/reactjs.png",
  },
  {
    name: "NextJs",
    boxShadow: "0px 0px 15px 4px #b7b7b7c7",
    image: "/assets/tech-logos/nextjs.png",
  },
  {
    name: "JavaScript",
    boxShadow: "0px 0px 15px 4px #978600",
    image: "/assets/tech-logos/javascript.png",
  },
  {
    name: "NodeJs",
    boxShadow: "0px 0px 15px 4px #226f00",
    image: "/assets/tech-logos/nodejs.png",
  },
  {
    name: "MySQL",
    boxShadow: "0px 0px 15px 4px #00708b",
    image: "/assets/tech-logos/mySQL.png",
  },
  {
    name: "MongoDB",
    boxShadow: "0px 0px 15px 4px #00692c",
    image: "/assets/tech-logos/mongodB.png",
  },
  {
    name: "TypeScript",
    boxShadow: "0px 0px 15px 4px #00708b",
    image: "/assets/tech-logos/typescript.png",
  },
  {
    name: "Tailwind",
    boxShadow: "0px 0px 15px 4px #00708b",
    image: "/assets/tech-logos/tailwindcss.png",
  },
  {
    name: "Java",
    boxShadow: "0px 0px 15px 4px #9d5600",
    image: "/assets/tech-logos/java.png",
  },
  {
    name: "Redux",
    boxShadow: "0px 0px 15px 4px #5b0081",
    image: "/assets/tech-logos/Redux.png",
  },
  {
    name: "Firebase",
    boxShadow: "0px 0px 15px 4px #a6a33d",
    image: "/assets/tech-logos/firebaseLogo.png",
  },
  {
    name: "PostgresSQL",
    boxShadow: "0px 0px 15px 4px #3b779f",
    image: "/assets/tech-logos/postgres.png",
  },
  {
    name: "Amazon Web Services",
    boxShadow: "0px 0px 15px 4px #1c6fa6",
    image: "/assets/tech-logos/aws-logo.png",
  },
  {
    name: "Prisma",
    boxShadow: "0px 0px 15px 4px #1c6fa6",
    image: "/assets/tech-logos/prisma.png",
  },
];

export const toolsData = [
  {
    name: "VS Code",
    boxShadow: "0px 0px 15px 4px #3498db",
    image: "/assets/tool-logos/VSCode.png",
    height: 50,
    width: 50,
  },
  {
    name: "Git",
    boxShadow: "0px 0px 15px 4px #d35400",
    image: "/assets/tool-logos/git.png",
    height: 50,
    width: 50,
  },
  {
    name: "Figma",
    boxShadow: "0px 0px 15px 4px #14d364",
    image: "/assets/tool-logos/figma.png",
    height: 30,
    width: 30,
  },
  {
    name: "Postman",
    boxShadow: "0px 0px 15px 4px #dc7633",
    image: "/assets/tool-logos/postman.png",
    height: 80,
    width: 80,
  },
  {
    name: "Vercel",
    boxShadow: "0px 0px 15px 4px #cacfd2",
    image: "/assets/tool-logos/vercel.png",
    height: 50,
    width: 50,
  },
  {
    name: "Arc",
    boxShadow: "0px 0px 15px 4px #ff0000",
    image: "/assets/tool-logos/arc.png",
    height: 80,
    width: 80,
  },
  {
    name: "Hyper",
    boxShadow: "0px 0px 15px 4px #ab006a",
    image: "/assets/tool-logos/hyper.png",
    height: 50,
    width: 50,
  },
];

export function DevelperStatus(status: "Active" | "Building" | "Deploying") {
  return {
    colour: statuType[status].colour,
    title: statuType[status].title,
    boxShadow: statuType[status].boxShadow,
  };
}

export const musicData = [
  {
    id: 1,
    name: "Interstellar",
    artist: "Hans Zimmer",
    image: "/assets/music/images/interstellar.jpg",
    audio: "/assets/music/audio/interstellar.mp3",
  },
];

export const socialLinks = [
  {
    id: 1,
    name: "Twitter",
    link: "https://twitter.com/TheYug03",
  },
  {
    id: 2,
    name: "Github",
    link: "https://github.com/YugBhanushali",
  },
  {
    id: 3,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/yug-bhanushali-b3b872224/",
  },
];

export const URL_OF_WEBSITE = "https://yugbhanushali.me";

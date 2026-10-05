export type Author = {
  name: string;
  role?: "first" | "second" | "corresponding";
  link?: string;
};

export type Publication = {
  id: string;
  title: string;
  authors: Author[];
  year: number;
  venue: string;
  image: string;
  imageAlt: string;
  tags: string[];
  paper: string;
  code?: string;
  website?: string;
  pdf?: string;
  video?: string;
  dataset?: string;
};

type AcademicProfile = {
  affiliation: string;
  subtitle: string;
  introduction: (string | { text: string; link: string })[][];
  interests: { title: string; description: string }[];
  publications: Publication[];
  education: { institution: string; degree: string; period: string[]; link: string; logo?: string }[];
  experience: { institution: string; description: string; period: string[]; link?: string; collaborator?: { name: string; link: string }; projects?: string[] }[];
  news: { date: string; text: string; link?: string }[];
  awards: string[];
  service: { label: string; text: string }[];
  cv: string;
};

export const academic: AcademicProfile = {
  "affiliation": "Sichuan University",
  "subtitle": "Research intern at PDAIS",
  "introduction": [
    [
      "I am an undergraduate student majoring in Computer Science and Technology at ",
      {
        "text": "Sichuan University",
        "link": "https://en.scu.edu.cn/"
      },
      ". I previously conducted research at the ",
      {
        "text": "IDs Lab",
        "link": "https://ids-lab-asia.github.io/"
      },
      " under the supervision of ",
      {
        "text": "Prof. Mingjie Tang",
        "link": "https://merlintang.github.io/"
      },
      ". I am currently a research intern at the ",
      {
        "text": "Purdue Data & AI System (PDAIS) Lab",
        "link": "https://www.cs.purdue.edu/homes/chunwei/"
      },
      " at ",
      {
        "text": "Purdue University",
        "link": "https://www.purdue.edu/"
      },
      ", working with ",
      {
        "text": "Prof. Chunwei Liu",
        "link": "https://www.cs.purdue.edu/homes/chunwei/"
      },
      "."
    ],
    [
      "My research focuses on the intersection of AI and database systems. My current research interest is semantic databases, where I explore how to combine semantic understanding with efficient query processing over structured and unstructured data. I am also interested in LLM-based query optimization and reliable data-analysis agents, aiming to make AI-powered data systems more efficient and trustworthy."
    ]
  ],
  "interests": [
    {
      "title": "AI for databases",
      "description": "Using language models and agents to improve how database systems work."
    },
    {
      "title": "Query optimization",
      "description": "Rewriting SQL queries with database feedback to improve execution performance."
    },
    {
      "title": "Text-to-SQL",
      "description": "Translating natural language into SQL through data synthesis and agent learning."
    }
  ],
  "publications": [
    {
      "id": "jevdb",
      "title": "Prune First, Decide Fast: Scalable Semantic Query Processing with JEVDB",
      "authors": [
        {
          "name": "Zhengle Wang"
        },
        {
          "name": "Hanxu Yan"
        },
        {
          "name": "Fuheng Zhao"
        },
        {
          "name": "Chunwei Liu",
          "role": "corresponding"
        }
      ],
      "year": 2026,
      "venue": "Preprint",
      "image": "/images/publications/jevdb.png",
      "imageAlt": "JEVDB architecture: semantic query compilation, candidate pruning, and tiered execution",
      "tags": [
        "Selected",
        "Semantic databases",
        "Query optimization"
      ],
      "paper": "https://arxiv.org/abs/2610.02046",
      "pdf": "https://arxiv.org/pdf/2610.02046",
      "website": "https://jevdb.org/"
    },
    {
      "id": "radar",
      "title": "Fail Loudly: An Auditable Runtime for Agentic Data Analysis",
      "authors": [
        {
          "name": "Hanxu Yan"
        },
        {
          "name": "Langxuan Deng"
        },
        {
          "name": "Zhengle Wang"
        },
        {
          "name": "Yibo Wang"
        },
        {
          "name": "Chunwei Liu",
          "role": "corresponding"
        }
      ],
      "year": 2026,
      "venue": "Preprint",
      "image": "/images/publications/radar.png",
      "imageAlt": "RADAR workflow: source maps, query-aware exploration, and auditable execution",
      "tags": [
        "Selected",
        "LLM agents",
        "Data analysis"
      ],
      "paper": "https://arxiv.org/abs/2609.32528",
      "pdf": "https://arxiv.org/pdf/2609.32528"
    },
    {
      "id": "iquest-coder",
      "title": "IQuest-Coder-V1 Technical Report",
      "authors": [],
      "year": 2026,
      "venue": "Tech Report",
      "image": "/images/publications/iquest-coder.png",
      "imageAlt": "IQuest-Coder-V1 performance across coding and tool-use benchmarks",
      "tags": [
        "Code LLMs"
      ],
      "paper": "https://arxiv.org/abs/2603.16733",
      "pdf": "https://arxiv.org/pdf/2603.16733",
      "code": "https://github.com/IQuestLab/IQuest-Coder-V1"
    },
    {
      "id": "quite",
      "image": "/images/publications/quite.png",
      "imageAlt": "QUITE: LLM agents rewriting SQL with database feedback",
      "tags": [
        "Selected",
        "Query optimization",
        "AI4DB"
      ],
      "title": "QUITE: A Query Rewrite System Beyond Rules with LLM Agents",
      "authors": [
        {
          "name": "Yuyang Song"
        },
        {
          "name": "Hanxu Yan"
        },
        {
          "name": "Jiale Lao"
        },
        {
          "name": "Yibo Wang"
        },
        {
          "name": "Yufei Li"
        },
        {
          "name": "Yuanchun Zhou"
        },
        {
          "name": "Jianguo Wang"
        },
        {
          "name": "Mingjie Tang",
          "role": "corresponding"
        }
      ],
      "year": 2025,
      "venue": "Preprint",
      "paper": "https://arxiv.org/abs/2506.07675",
      "code": "https://github.com/Yuyang-Song/QUITE"
    }
  ],
  "education": [
    {
      "institution": "Sichuan University",
      "link": "https://en.scu.edu.cn/",
      "logo": "/images/scu.png",
      "degree": "Computer Science and Technology",
      "period": [
        "2024.09 –",
        "Present"
      ]
    },
    {
      "institution": "Sichuan University",
      "link": "https://en.scu.edu.cn/",
      "logo": "/images/scu.png",
      "degree": "Mechanical Engineering",
      "period": [
        "2023.09 –",
        "2024.06"
      ]
    }
  ],
  "experience": [
    {
      "institution": "PDAIS Lab, Purdue University",
      "description": "Research intern",
      "collaborator": {
        "name": "Prof. Chunwei Liu",
        "link": "https://www.cs.purdue.edu/homes/chunwei/"
      },
      "period": [
        "2026.04 –",
        "Present"
      ],
      "link": "https://www.cs.purdue.edu/homes/chunwei/"
    },
    {
      "institution": "IDs Lab, Sichuan University",
      "description": "Research intern",
      "collaborator": {
        "name": "Prof. Mingjie Tang",
        "link": "https://merlintang.github.io/"
      },
      "period": [
        "2024.12 –",
        "2026.01"
      ],
      "link": "https://ids-lab-asia.github.io/"
    }
  ],
  "cv": "",
  "news": [],
  "awards": [],
  "service": []
};

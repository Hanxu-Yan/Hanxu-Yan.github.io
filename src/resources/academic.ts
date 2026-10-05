export type Publication = {
  id: string;
  title: string;
  authors: string[];
  year: number;
  venue: string;
  summary: string;
  image: string;
  imageAlt: string;
  tags: string[];
  paper: string;
  code?: string;
  website?: string;
};

type AcademicProfile = {
  affiliation: string;
  introduction: string[];
  interests: { title: string; description: string }[];
  publications: Publication[];
  education: { institution: string; description: string; period: string }[];
  experience: { institution: string; description: string; period: string }[];
  cv: string;
};

export const academic: AcademicProfile = {
  "affiliation": "Sichuan University",
  "introduction": [
    "I am an undergraduate at Sichuan University, China, working on AI for databases (AI4DB).",
    "My research explores how language models can help people query data and make database systems more efficient. I am also an open-source enthusiast."
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
      "id": "agro-sql",
      "image": "/images/publications/agro-sql.png",
      "imageAlt": "AGRO-SQL framework: data synthesis and agentic optimization",
      "tags": ["Text-to-SQL", "LLM agents"],
      "title": "AGRO-SQL: Agentic Group-Relative Optimization with High-Fidelity Data Synthesis",
      "authors": [
        "Cehua Yang",
        "Dongyu Xiao",
        "Junming Lin",
        "Yuyang Song",
        "Hanxu Yan",
        "Shawn Guo",
        "Wei Zhang",
        "Jian Yang",
        "Mingjie Tang",
        "Bryan Dai"
      ],
      "year": 2025,
      "venue": "arXiv preprint",
      "summary": "A Text-to-SQL framework that combines verified synthetic training data with reinforcement learning for an agent that uses execution feedback.",
      "paper": "https://arxiv.org/abs/2512.23366"
    },
    {
      "id": "quite",
      "image": "/images/publications/quite.png",
      "imageAlt": "QUITE system overview: agents rewriting SQL with database feedback",
      "tags": ["Query optimization", "AI4DB"],
      "title": "QUITE: A Query Rewrite System Beyond Rules with LLM Agents",
      "authors": [
        "Yuyang Song",
        "Hanxu Yan",
        "Jiale Lao",
        "Yibo Wang",
        "Yufei Li",
        "Yuanchun Zhou",
        "Jianguo Wang",
        "Mingjie Tang"
      ],
      "year": 2025,
      "venue": "arXiv preprint",
      "summary": "An agent-based system that uses database feedback to rewrite SQL queries beyond a fixed set of optimization rules.",
      "paper": "https://arxiv.org/abs/2506.07675",
      "code": "https://github.com/Yuyang-Song/QUITE"
    }
  ],
  "education": [
    {
      "institution": "Sichuan University",
      "description": "Undergraduate studies · China",
      "period": ""
    }
  ],
  "experience": [],
  "cv": ""
};

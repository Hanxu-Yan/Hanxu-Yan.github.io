export type Author = {
  name: string;
  role?: "first" | "second" | "advisor";
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
  introduction: string[];
  interests: { title: string; description: string }[];
  publications: Publication[];
  education: { institution: string; degree: string; period: string[]; link: string; logo?: string }[];
  experience: { institution: string; description: string; period: string[]; link?: string; projects?: string[] }[];
  news: { date: string; text: string; link?: string }[];
  awards: string[];
  service: { label: string; text: string }[];
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
          "name": "Mingjie Tang"
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
      "degree": "Undergraduate studies",
      "period": [],
      "link": "https://en.scu.edu.cn/",
      "logo": "/images/scu.png"
    }
  ],
  "experience": [],
  "cv": "",
  "news": [],
  "awards": [],
  "service": []
};

import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaGoogleScholar } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Publications } from "@/components/Publications";
import { academic } from "@/resources/academic";
import { person, social } from "@/resources/content";
import { baseURL } from "@/resources/site";

const socialIcons = { "Google Scholar": FaGoogleScholar, GitHub: FaGithub, LinkedIn: FaLinkedin };

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Person", name: person.name,
        url: baseURL, image: baseURL + person.avatar, sameAs: social.map((item) => item.link),
        affiliation: { "@type": "Organization", name: academic.affiliation },
      }).replace(/</g, "\\u003c") }} />
      <section className="about" id="about" aria-labelledby="about-title">
        <h2 className="card-title" id="about-title">About Me</h2>
        <div className="about-layout">
          <div className="about-profile">
            <Image src={person.avatar} alt="Hanxu Yan's cat avatar from GitHub" width={220} height={220} priority className="profile-pic" />
            <div className="hero-meta">
              <h1 className="meta-name">{person.name}</h1>
              <div className="meta-subtitle">{academic.subtitle}</div>
              <div className="contact-small">
                <a href={`mailto:${person.email}`} className="icon-link" aria-label="Email" title="Email"><MdEmail aria-hidden="true" /></a>
                {social.map((item) => {
                  const Icon = socialIcons[item.name as keyof typeof socialIcons];
                  return <a key={item.name} href={item.link} target="_blank" rel="noopener noreferrer" className="icon-link" aria-label={item.name} title={item.name}><Icon aria-hidden="true" /></a>;
                })}
              </div>
            </div>
          </div>
          <div className="about-text">
            <div className="intro-text">
              {academic.introduction.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
        </div>
      </section>

      {academic.news.length > 0 && <section className="news" id="news" aria-labelledby="news-title">
        <h2 className="card-title" id="news-title">News</h2>
        <div className="news-list">{academic.news.map((item, index) => <div className="news-item" key={index}>
          <span className="news-icon" aria-hidden="true">▸ </span>
          <div><span className="news-time">{item.date}</span><span className="news-content">{item.link ? <a href={item.link}>{item.text}</a> : item.text}</span></div>
        </div>)}</div>
      </section>}

      {academic.publications.length > 0 && <Publications />}

      {academic.experience.length > 0 && <section className="content-section" id="internship" aria-labelledby="internship-title">
        <h2 className="card-title" id="internship-title">Internship</h2>
        <div className="exp-list timeline-list">{academic.experience.map((item, index) => <article className="exp-row" key={index}>
          {item.period.length > 0 && <div className="exp-row-period">{item.period.map((line) => <span key={line}>{line}</span>)}</div>}
          <div className="exp-row-body">
            <h3 className="exp-row-org">{item.link ? <a href={item.link} target="_blank" rel="noopener noreferrer">{item.institution}</a> : item.institution}</h3>
            <div className="exp-row-role">
              {item.description}{item.collaborator && <>, working with <a href={item.collaborator.link} target="_blank" rel="noopener noreferrer">{item.collaborator.name}</a></>}
            </div>
            {item.projects && <ul className="exp-row-projects">{item.projects.map((project) => <li key={project}>{project}</li>)}</ul>}
          </div>
        </article>)}</div>
      </section>}

      {academic.education.length > 0 && <section className="content-section" id="education" aria-labelledby="education-title">
        <h2 className="card-title" id="education-title">Education</h2>
        <div className="education-list timeline-list">{academic.education.map((item) => <article className="edu-row" key={item.institution + item.period.join("-")}>
          {item.period.length > 0 && <div className="edu-period">{item.period.map((line) => <span key={line}>{line}</span>)}</div>}
          <div className="edu-body">
            <h3 className="edu-degree">{item.degree}</h3>
            <div className="edu-university-row">
              {item.logo && <Image src={item.logo} alt="" width={22} height={22} className="edu-logo" />}
              <a className="edu-university-name" href={item.link} target="_blank" rel="noopener noreferrer">{item.institution}</a>
            </div>
          </div>
        </article>)}</div>
      </section>}

      {academic.awards.length > 0 && <section className="content-section" id="awards" aria-labelledby="awards-title">
        <h2 className="card-title" id="awards-title">Selected Awards</h2>
        <div className="awards-list">{academic.awards.map((award) => <div className="award-item" key={award}><span className="award-icon" aria-hidden="true">▸ </span><span className="award-text">{award}</span></div>)}</div>
      </section>}

      {academic.service.length > 0 && <section className="content-section" id="more" aria-labelledby="service-title">
        <h2 className="card-title" id="service-title">Academic Service</h2>
        {academic.service.map((item) => <div className="award-item" key={item.label}><span className="award-icon" aria-hidden="true">▸ </span><span className="award-text"><strong>{item.label}:</strong> {item.text}</span></div>)}
      </section>}
    </>
  );
}

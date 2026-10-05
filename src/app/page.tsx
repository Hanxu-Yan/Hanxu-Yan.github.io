import Image from "next/image";
import { FaEnvelope, FaGithub, FaGraduationCap, FaLinkedin } from "react-icons/fa6";
import { academic } from "@/resources/academic";
import { person, social } from "@/resources/content";
import { baseURL } from "@/resources/site";
import styles from "./page.module.scss";

const socialIcons = { "Google Scholar": FaGraduationCap, GitHub: FaGithub, LinkedIn: FaLinkedin };

export default function Home() {
  const scholar = social.find((item) => item.name === "Google Scholar")!;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: person.name,
        url: baseURL,
        image: baseURL + person.avatar,
        sameAs: social.map((item) => item.link),
        affiliation: { "@type": "Organization", name: academic.affiliation },
      }).replace(/</g, "\\u003c") }} />

      <section id="about" className={styles.section} aria-labelledby="about-title">
        <h2 id="about-title">About Me</h2>
        <div className={styles.about}>
          <div className={styles.profile}>
            <Image src={person.avatar} alt="Hanxu Yan's cat avatar from GitHub" width={220} height={220} priority className={styles.avatar} />
            <h1>{person.name}</h1>
            <p>{academic.affiliation}</p>
            <div className={styles.social}>
              <a href={`mailto:${person.email}`} aria-label="Email" title="Email"><FaEnvelope aria-hidden="true" /></a>
              {social.map((item) => {
                const Icon = socialIcons[item.name as keyof typeof socialIcons];
                return <a key={item.name} href={item.link} aria-label={item.name} title={item.name}><Icon aria-hidden="true" /></a>;
              })}
            </div>
          </div>
          <div className={styles.biography}>
            {academic.introduction.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <p><strong>Research interests:</strong> {academic.interests.map((interest) => interest.title).join(", ")}.</p>
            <div className={styles.callout}>For research discussions, please feel free to <a href={`mailto:${person.email}`}>reach out</a>.</div>
          </div>
        </div>
      </section>

      <section id="publications" className={styles.section} aria-labelledby="publications-title">
        <div className={styles.sectionHeading}>
          <h2 id="publications-title">Publications</h2>
          <a href={scholar.link} className={styles.scholarLink}>Google Scholar ↗</a>
        </div>
        <div className={styles.publications}>
          {academic.publications.map((publication) => (
            <article key={publication.id} className={styles.publication}>
              <a href={publication.paper} className={styles.thumbnail} aria-label={`Read ${publication.title}`}>
                <Image src={publication.image} alt={publication.imageAlt} width={480} height={280} sizes="(max-width: 640px) 100vw, 240px" />
              </a>
              <div className={styles.paperContent}>
                <span className={styles.venue}>{publication.venue} · {publication.year}</span>
                <h3><a href={publication.paper}>{publication.title}</a></h3>
                <p className={styles.authors}>
                  {publication.authors.map((author, index) => <span key={author}>{index > 0 && ", "}{author === person.name ? <strong>{author}</strong> : author}</span>)}
                </p>
                <ul className={styles.tags} aria-label="Research topics">
                  {publication.tags.map((tag) => <li key={tag}>#{tag}</li>)}
                </ul>
                <div className={styles.paperLinks}>
                  <a href={publication.paper}>Paper</a>
                  {publication.code && <a href={publication.code}>GitHub</a>}
                  {publication.website && <a href={publication.website}>Website</a>}
                </div>
                <details className={styles.abstract}>
                  <summary>Overview</summary>
                  <p>{publication.summary}</p>
                </details>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="education" className={styles.section} aria-labelledby="education-title">
        <h2 id="education-title">Education</h2>
        {academic.education.map((item) => (
          <article className={styles.education} key={item.institution}>
            {item.period && <span className={styles.period}>{item.period}</span>}
            <div><h3>{item.institution}</h3><p>{item.description}</p></div>
          </article>
        ))}
      </section>

      <section id="contact" className={styles.section} aria-labelledby="contact-title">
        <h2 id="contact-title">Contact</h2>
        <p className={styles.contact}>Email: <a href={`mailto:${person.email}`}>{person.email}</a></p>
        <p className={styles.contact}>You can also find me on {social.map((item, index) => <span key={item.name}>{index > 0 && (index === social.length - 1 ? ", and " : ", ")}<a href={item.link}>{item.name}</a></span>)}.</p>
      </section>
    </>
  );
}

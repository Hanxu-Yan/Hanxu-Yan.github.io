"use client";

import Image from "next/image";
import { useState } from "react";
import { academic } from "@/resources/academic";
import { person } from "@/resources/content";

export function Publications() {
  const [selectedTag, setSelectedTag] = useState("");
  const papers = selectedTag ? academic.publications.filter((paper) => paper.tags.includes(selectedTag)) : academic.publications;

  return (
    <section className="publications content-section" id="publications" aria-labelledby="publications-title">
      <div className="publications-select">
        <h2 className="card-title" id="publications-title">Publications</h2>
        <div className="tag-buttons-filter" role="group" aria-label="Filter publications">
          {[{ label: "All", tag: "" }, { label: "Selected", tag: "Selected" }].map(({ label, tag }) => (
            <button key={label} type="button" className={`tag-button ${selectedTag === tag ? "active" : ""}`} aria-pressed={selectedTag === tag} aria-controls="publication-list" onClick={() => setSelectedTag(selectedTag === tag ? "" : tag)}>{label}</button>
          ))}
        </div>
      </div>
      <p className="publications-info-small">* indicates equal contribution, and † denotes the corresponding author.</p>
      <div className="publications-list" id="publication-list" aria-live="polite">
        {papers.map((paper) => (
          <article key={paper.id} className="publication-card" id={paper.id}>
            <a className="publication-image-link" href={paper.paper} target="_blank" rel="noopener noreferrer" aria-label={`Read ${paper.title}`}>
              <Image src={paper.image} alt={paper.imageAlt} width={240} height={140} className="publication-image" />
            </a>
            <div className="publication-content">
              <div className="publication-venue"><span className="venue-tag wip">{paper.venue}</span></div>
              <div className="publication-title-wrapper"><h3 className="publication-title"><a href={paper.paper} target="_blank" rel="noopener noreferrer">{paper.title}</a></h3></div>
              {paper.authors.length > 0 && <p className="publication-authors">
                {paper.authors.map((author, index) => {
                  const symbol = author.role === "first" ? "*" : author.role === "second" ? "**" : author.role === "corresponding" ? "†" : "";
                  const name = author.name === person.name ? <strong className="author-self">{author.name}{symbol}</strong> : <>{author.name}{symbol}</>;
                  return <span key={author.name} title={author.role === "corresponding" ? "Corresponding author" : undefined}>{author.link ? <a href={author.link} target="_blank" rel="noopener noreferrer" className="author-link">{name}</a> : name}{index < paper.authors.length - 1 && ", "}</span>;
                })}
              </p>}
              <div className="publication-tags">{paper.tags.map((tag) => <span key={tag} className={tag === "Selected" ? "rainbow-tag-all" : "tag-item-show"}>#{tag}</span>)}</div>
              <div className="publication-links">
                {paper.pdf && <a href={paper.pdf} target="_blank" rel="noopener noreferrer">PDF</a>}
                <a href={paper.paper} target="_blank" rel="noopener noreferrer">Paper</a>
                {paper.code && <a href={paper.code} target="_blank" rel="noopener noreferrer">Github</a>}
                {paper.website && <a href={paper.website} target="_blank" rel="noopener noreferrer">Website</a>}
                {paper.video && <a href={paper.video} target="_blank" rel="noopener noreferrer">Presentation</a>}
                {paper.dataset && <a href={paper.dataset} target="_blank" rel="noopener noreferrer">Dataset</a>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

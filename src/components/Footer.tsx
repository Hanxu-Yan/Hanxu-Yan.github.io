import { person } from "@/resources/content";

export function Footer() {
  return <footer className="site-footer"><div className="footer-left">© {new Date().getFullYear()} {person.name}</div></footer>;
}

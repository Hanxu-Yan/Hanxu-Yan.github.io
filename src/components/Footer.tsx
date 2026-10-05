import { person } from "@/resources/content";

export function Footer() {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} {person.name}</p>
      <p className="credits">Visual inspiration: <a href="https://flossiee.github.io/">Chujie Gao</a>. Adapted from <a href="https://once-ui.com/products/magic-portfolio">Magic Portfolio by Once UI</a> · <a href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0</a>.</p>
    </footer>
  );
}

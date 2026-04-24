import { useNavScrolled } from "../hooks/useNavScrolled";

export function Nav() {
  const scrolled = useNavScrolled(20);
  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`} aria-label="Primary">
      <div className="nav-inner">
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          {/*    <li>
            <a href="#work">Work</a>
          </li> */}
          <li>
            <a href="#stack">Stack</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

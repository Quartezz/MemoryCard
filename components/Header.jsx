import "../styles/Header.scss";

export default function Header() {
  return (
    <header>
      <img src="logo.png" alt="lol" />
      <a
        href="https://github.com/Quartezz"
        target="_blank"
        className="github-link"
      >
        <h2 className="nick">Quartezz</h2>
        <i className="fab fa-github"></i>
      </a>
      <h1 className="title">Memory Card Game</h1>
    </header>
  );
}

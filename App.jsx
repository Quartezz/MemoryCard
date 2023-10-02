import Header from "./components/Header";
import Game from "./components/Game";
import "./styles/App.scss";
import "./styles/Scoreboard.scss";
import "./styles/Modal.scss";

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Game />
      </main>
    </div>
  );
}

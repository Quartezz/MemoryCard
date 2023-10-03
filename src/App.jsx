import Header from "./components/Header";
import Game from "./components/Game";
import StartModal from "./components/Startmodal";
import "./styles/App.scss";
import "./styles/Scoreboard.scss";
import "./styles/Modal.scss";
import "./styles/StartModal.scss";

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Game />
        <StartModal />
      </main>
    </div>
  );
}

import data from "../data/characters.json";
import "../styles/Cards.scss"

export default function Cards() {
    const { characters } = data;
    const [{ name, image }] = characters;

    return (
        <ul>
            <li className="card">
                <img src={`/characters/${image}`} alt="Character" />
                <div className="character-name">{name}</div>
            </li>
        </ul>
    )
}
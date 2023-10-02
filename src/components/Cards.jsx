import "../styles/Cards.scss"
import PropTypes from "prop-types"

Cards.PropTypes = {
    cards: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            image: PropTypes.string,
            hasClicked: PropTypes.bool,
            isCardInUse: PropTypes.bool,
            id: PropTypes.string,
        })
    ).isRequired,
}

export default function Cards({ cards }) {
   
    return (
        <ul>
            {cards.map(({ image, name, id }) => (
                <li key={id} className="card">
                    <button type="button" className="card-button">
                        <img 
                        className="character-image"
                        src={`/characters/${image}`}
                        alt="Champion"
                         />
                         <div className="character-name">{name}</div>
                    </button>
                </li>
            ))}
        </ul>
    )
}


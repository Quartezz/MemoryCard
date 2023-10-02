import "../styles/Cards.scss"
import PropTypes from "prop-types"

Cards.PropTypes = {
    cardsInUse: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            image: PropTypes.string,
            hasClicked: PropTypes.bool,
            isCardInUse: PropTypes.bool,
            id: PropTypes.string,
        })
    ).isRequired,
    cards: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            image: PropTypes.string,
            hasClicked: PropTypes.bool,
            isCardInUse: PropTypes.bool,
            id: PropTypes.string,
        })
    ).isRequired,
    setCardsClicked: PropTypes.func.isRequired,
    resetGame: PropTypes.func.isRequired,
    incrementCurrentScore: PropTypes.func.isRequired,
}

export default function Cards({ cards, cardsInUse, setCardsClicked, incrementCurrentScore, resetGame }) {
   
    return (
        <ul>
                {cardsInUse.map((card) => (
                    <li key={card.id} className="card">
                        <button
                        type="button"
                        className="card-button"
                        onClick={() => {
                            if (!card.hasClicked) {
                                setCardsClicked(cards, card)
                                incrementCurrentScore()
                                return
                            }

                            if (card.hasClicked) {
                                alert("You lost!")
                                resetGame()
                            }
                        }}
                            >
                        <img 
                        className="character-image"
                        src={`/characters/${card.image}`}
                        alt="Champion"
                         />
                         <div className="character-name">{card.name}</div>
                         </button>
                    </li>
                ))}
            </ul>
    )
}


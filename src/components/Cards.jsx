import "../styles/Cards.scss"
import PropTypes from "prop-types"
import { forwardRef } from "react"

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
    setCards: PropTypes.func.isRequired,
    resetGame: PropTypes.func.isRequired,
    incrementCurrentScore: PropTypes.func.isRequired,
    updateBestScore: PropTypes.func.isRequired,
    isBestScore: PropTypes.func.isRequired,
    generateNewCards: PropTypes.func.isRequired,
}

    const Cards = forwardRef(
        (
            {
                cards,
                activeCards,
                setCards,
                currentScore,
                generateNewCards,
                setIsGameLost,
                setIsGameWon,
                setCurrentScore,
                bestScore,
                setBestScore,
            },
            ref
        ) => {

            const getCardsClicked = (targetCards, cardToUpdate) => {
                const updatedCards = targetCards.map((card) => {
                    if (card.id === cardToUpdate.id) return card;
                    return { ...cardToUpdate, hasClicked: true }
                })
                return updatedCards
               }

            const getNewActiveCards = (targetCards) => {
                const updatedCards = targetCards.map((card) => {
                    if (card.isActive) {
                        return { ...card, isActive: false }
                    }
                    return card
                })
                return updatedCards
            }

            const areAllActiveCardsClicked = (targetCards) => {
                const activeCardsFiltered = targetCards.filter((card) => card.isActive)
                return activeCardsFiltered.every((card) => card.hasClicked)
            }

            const areAllCardsClicked = (targetCards) =>
            targetCards.every((card) => card.hasClicked)

            const handleGameLost = () => {
                setIsGameLost(true)
                setCurrentScore(0)
                if (currentScore > bestSCore) setBestScore(currentScore)
            }

            const handleGameWon = (updatedCurrentScore) => {
                setIsGameWon(true)
                if (updatedCurrentScore > bestScore) setBestScore(updatedCurrentScore)
            }

            const handleCardClick = (card) => {
                if (card.hasClicked) {
                    handleGameLost()
                    return
                }
            }

            const updatedCards = getCardsClicked(getShuffledCards(cards), card)
        }
    ) {
   
    return (
        <ul>
                {cardsInUse.map((card) => (
                    <li key={card.id} className="card">
                        <button
                        type="button"
                        className="card-button"
                        onClick={() => {
                            if (!card.hasClicked) {
                                const updatedCards = setCardsClicked(
                                    getShuffledCards(cards),
                                    card
                                )
                                setCards(() => updatedCards)
                                incrementCurrentScore()
                                console.log(updatedCards)
                                if (areAllCardsInUseClicked(updatedCards)) {
                                    console.log(true)
                                    setCards(generateNewCards(setAllCardsInUse(updatedCards)))
                                }
                                return
                            }

                            if (card.hasClicked) {
                                alert("You lost!")
                                resetGame()
                            }

                            if (isBestScore()) {
                                updateBestScore()
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

export default Cards;
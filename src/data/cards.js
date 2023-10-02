import { v4 as uuidv4 } from "uuid";

const cardsData = [
  {
    name: "Aatrox",
    image: "aatrox.jpg",
    hasClicked: false,
    isCardInUse: false,
    id: uuidv4(),
  },
  {
    name: "Ahri",
    image: "ahri.jpg",
    hasClicked: false,
    isCardInUse: false,
    id: uuidv4(),
  },
  {
    name: "Jinx",
    image: "jinx.jpg",
    hasClicked: false,
    isCardInUse: false,
    id: uuidv4(),
  },
  {
    name: "Master Yi",
    image: "masteryi.jpg",
    hasClicked: false,
    isCardInUse: false,
    id: uuidv4(),
  },
];

export default cardsData;

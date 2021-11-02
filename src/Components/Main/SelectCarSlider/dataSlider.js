import { v4 as uuidv4 } from "uuid";

const dataSlider = [
    {
        id:uuidv4(),
        title: 'Standard',
        price: 200,
        passenger: 4,
        info: '100% Elbil',
        option: 'Ja',
    },
    {
        id:uuidv4(),
        title: 'XL',
        price: 300,
        passenger: 7,
        info: 'Större Elbil/Hybrid för större sällskap',
        option: 'Ja',
    },
    {
        id:uuidv4(),
        title: 'Guld',
        price: 400,
        passenger: 3,
        info: 'Åk i en Tesla, Porsche eller Mercedes',
        option: 'Nej',
    }
];

export default dataSlider
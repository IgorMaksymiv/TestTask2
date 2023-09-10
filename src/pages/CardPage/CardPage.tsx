import React from "react";
import { useParams } from "react-router-dom";
import { Array } from "../../components/Array/Array";


export function findCardById(id: string | undefined, cardsArray: any) {
    for (const card of cardsArray) {
        if (card.id === id) {
            return card;
        }
    }
    return null;
}

function CardPage() {
    const { id } = useParams();
    const card = findCardById(id, Array);

    return (
        <div>
            {card ? (
                <div>
                    <p>Назва: {card.title}</p>
                    <p>Дата: {card.date}</p>
                    <p>Ціна: {card.price}</p>
                    <img src={card.photo} alt="img" />
                </div>
            ) : (
                <p>Карточку не знайдено</p>
            )}
            <button><a href="/">На головну</a></button>
        </div>
    )
}

export default CardPage;

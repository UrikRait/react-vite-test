import { useState } from "react";
import { IGetPosition } from "../common/IGetPostion"

export function GetWeather({ lat, lon, error }: IGetPosition) {
    const [name, setName] = useState('')
    const [temp_c, setTemp_c] = useState('')
    const [text, setText] = useState('')
    fetch(`https://api.weatherapi.com/v1/current.xml?key=833224568d694db9b0763116232709&q=${lat},${lon}&lang=ru`)
        .then(response => response.text())
        .then(xmlText => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlText, 'application/xml');
            setName(xmlDoc.querySelector('name')?.textContent ?? '')
            setTemp_c(xmlDoc.querySelector('temp_c')?.innerHTML ?? '')
            setText(xmlDoc.querySelector('text')?.innerHTML ?? '')
        })
        .catch(error => {
            console.error('Произошла ошибка при загрузке или парсинге XML:', error);
        });
    return (
        <div>
            {error &&
                <span>Ошибка:   {error}</span>
            }
            {!error &&
                <>
                <p>{name}</p>
                <p>Температура: {temp_c}</p>
                <p>{text}</p>
                </>
            }
        </div>
    )
}

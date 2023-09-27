import { useState } from "react"
import { GetWeather } from "./GetWeather"


export function GetPosition() {
    const [lat, setLat] = useState(0)
    const [lon, setLon] = useState(0)
    const [error, setError] = useState('')

    navigator.geolocation.getCurrentPosition(
        (position) => {
            setLat(position.coords.latitude)
            setLon(position.coords.longitude)

        },
        (error) => {
            setError(error.message)
        }
    )
   return(
    <GetWeather lat={lat} lon={lon} error={error} />
   )
}

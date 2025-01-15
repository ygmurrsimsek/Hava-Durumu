import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

function Api() {
    const { city } = useParams();
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeatherData = async () => {
            const url = "https://api.openweathermap.org/data/2.5/";
            const key = "8781f08d270b55874c0c14ff2da44c25";
            const fullUrl = `${url}weather?q=${city}&appid=${key}&lang=tr&units=metric`;

            try {
                const response = await fetch(fullUrl);
                if (!response.ok) {
                    throw new Error("Veri alınırken bir hata oluştu.");
                }
                const data = await response.json();
                setWeatherData(data);
            } catch (err) {
                setError(err.message);
            }
        };

        if (city) {
            fetchWeatherData();
        }
    }, [city]);

    if (error) {
        return <div style={{ textAlign: "center", color: "red" }}>Hata: {error}</div>;
    }

    if (!weatherData) {
        return <div style={{ textAlign: "center" }}>Yükleniyor...</div>;
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            textAlign: "center",
            marginBottom: "250px"
        }}>
            <Header />
            <div >
                <h1>{city} Hava Durumu</h1>
                <p>Sıcaklık: {weatherData.main.temp}°C</p>
                <p>Nem: {weatherData.main.humidity}%</p>
                <p>Durum: {weatherData.weather[0].description}</p>
            </div>

        </div>
    );
}

export default Api;

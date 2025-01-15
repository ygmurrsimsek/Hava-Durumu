import { SiPointy } from "react-icons/si";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function HomeHeader() {
    const navigate = useNavigate();
    const [city, setCity] = useState("");

    const handleSearch = () => {
        console.log(city);
        if (city.trim()) {
            navigate(`/weather/${city}`);
            setCity(""); // Arama çubuğunu sıfırla
        }
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column", // Dikey yerleşim
                justifyContent: "center", // Dikey ortalama
                alignItems: "center", // Yatay ortalama
                width: "100%",
                padding: "20px", // Biraz boşluk ekledik
                boxSizing: "border-box", // Padding boyuta dahil edilir
                paddingBottom: "30px",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "row", // Input ve buton yatay hizalanır
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%", // İçerik genişliği ekran genişliği kadar
                    maxWidth: "600px", // Maksimum genişlik sınırı
                }}
            >
                <input
                    type="text"
                    placeholder="Şehir Seçiniz.."
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    style={{
                        margin: "20px 10px",
                        width: "100%", // Input genişliğini kapsayıcıya göre ayarla
                        maxWidth: "500px", // Maksimum genişlik sınırı
                        padding: "10px",
                        background: "none",
                        border: "none",
                        borderBottom: "2px solid rgb(229, 240, 240)",
                        outline: "none",
                        fontSize: "1rem",
                        boxSizing: "border-box",
                    }}
                />
                <button
                    onClick={handleSearch}
                    style={{
                        border: "none",
                        background: "none",
                        padding: "10px",
                        cursor: "pointer",
                        fontSize: "1.5rem",
                        marginTop: "20px",
                    }}
                >
                    <SiPointy />
                </button>
            </div>
        </div>
    );
}

export default HomeHeader;

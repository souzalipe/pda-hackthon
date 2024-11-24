import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Map, { Marker, Popup } from "react-map-gl"; // Biblioteca react-map-gl

export const HotelDetails = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [viewState, setViewState] = useState({
    longitude: -46.6341251, // Coordenadas iniciais
    latitude: -23.5572746,
    zoom: 14,
  });

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:3000/api/hotels/id/${id}`
        );
        setHotel(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch hotel details");
        setLoading(false);
      }
    };

    fetchHotel();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!hotel) return <div>Hotel not found</div>;

  const MAPBOX_TOKEN =
    "pk.eyJ1IjoibHVjeWF0bW9zcGhlcmUiLCJhIjoiY20zdnN6M3NyMDhiNDJscHNiOGI0amM1eCJ9.cw_mrZ6Y7iW0S8jwjnHwFw";
    

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h1 className="text-3xl font-bold mb-4">{hotel.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <p className="text-gray-600 mb-2">
            {hotel.address}, {hotel.district}
          </p>
          <p className="text-gray-600 mb-2">
            {hotel.city}, {hotel.state}, {hotel.country}
          </p>
          <p className="text-gray-600 mb-4">
            <span className="text-yellow-500 mr-1">★</span>
            {hotel.stars} Stars
          </p>
          <p className="text-gray-800 mb-4">{hotel.description}</p>
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Amenities</h2>
            {/* <ul className="list-disc list-inside">
              {hotel.amenities.map((amenity, index) => (
                <li key={index} className="text-gray-600">
                  {amenity}
                </li>
              ))}
            </ul> */}
          </div>
          <p className="text-gray-600 mb-2">Category: {hotel.category.name}</p>
          <p className="text-gray-600 mb-2">
            {/* Hotel Chain: {hotel.hotelChain.name ?? "sem hotel chain"} */}
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Location</h2>
          <div className="aspect-w-16 aspect-h-9">

            <div style={{ height: "100vh" }}>
              <Map
                {...viewState}
                mapboxAccessToken={MAPBOX_TOKEN}
                style={{ width: "100%", height: "100%" }}
                mapStyle="mapbox://styles/mapbox/streets-v11" // Estilo do mapa
                onMove={(event) => setViewState(event.viewState)} // Atualiza ao mover
              >
                {/* Marcador no mapa */}
                <Marker longitude={hotel.longitude} latitude={hotel.latitude}>
                  <div
                    style={{
                      background: "red",
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                    }}
                  />
                </Marker>

                {/* Popup ao clicar no marcador */}
                <Popup
                  longitude={hotel.longitude}
                  latitude={hotel.latitude}
                  closeButton={true}
                  closeOnClick={false}
                  anchor="top"
                >
                  <div>{hotel.name}</div>
                </Popup>
              </Map>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import CircularProgress from "@mui/material/CircularProgress";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useState, useEffect } from "react";
import { PlaceCard } from "../../components/PlaceCard";
import axios from "axios";
import { Navbar } from "../../components/Navbar"
import InputLabel from "@mui/material/InputLabel"

export function DashboardPage() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filters, setFilters] = useState({
    name: "",
    stars: "",
    city: "",
    country: "",
    category: "",
    page: 1,
    limit: 10,
    orderby: "name",
    sort: "ASC",
  });
  const [meta, setMeta] = useState({ total: 0, page: 1, pages: 1 });

  useEffect(() => {
    fetchHotels();
  }, [filters]);

  const fetchHotels = async () => {
    try {
      setLoading(true);
      const baseUrl = "http://localhost:3000/api/hotels";
      const endpoint = filters.category
        ? `${baseUrl}/category/${filters.category}`
        : baseUrl;
       
      const response = await axios.get(endpoint, {
        params: {
          ...filters
        },
      });

      setHotels(response.data.data || [...response.data]);
      setMeta(response.data.meta || { total: 0, page: 1, pages: 1 });
      setLoading(false);
      if (response.data) {
        setHotels(response.data.data || response.data);
        setMeta(response.data.meta || { total: 0, page: 1, pages: 1 });
      }
    } catch (err) {
      setError("Ocorreu um erro ao buscar os hotéis.");
      console.error("Erro ao buscar os hotéis:", err);
      setError(
        "Ocorreu um erro ao buscar os hotéis. Por favor, tente novamente."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const handlePageChange = (newPage) => {
    setFilters({ ...filters, page: newPage });
  };

  const handleSortChange = (field) => {
    setFilters({
      ...filters,
      orderby: field,
      sort:
        filters.orderby === field && filters.sort === "ASC" ? "DESC" : "ASC",
    });
  };

  return (
    <Box>
      <Navbar/>
      <Typography variant="h4" gutterBottom>
        Lista de Hotéis
      </Typography>

      <form>
        <Box display="flex" flexWrap="wrap" gap={2} mb={3}>
          <TextField
            label="Nome"
            name="name"
            value={filters.name}
            onChange={handleFilterChange}
            variant="outlined"
            fullWidth
          />
          <Select
            label="Estrelas"
            name="stars"
            value={filters.stars}
            onChange={handleFilterChange}
            displayEmpty
            fullWidth
          >
            <MenuItem value="">Todas</MenuItem>
            {[1, 2, 3, 4, 5].map((star) => (
              <MenuItem key={star} value={star}>
                {star} {star === 1 ? "Estrela" : "Estrelas"}
              </MenuItem>
            ))}
          </Select>
          <TextField
            label="Cidade"
            name="city"
            value={filters.city}
            onChange={handleFilterChange}
            variant="outlined"
            fullWidth
          />
          <TextField
            label="País"
            name="country"
            value={filters.country}
            onChange={handleFilterChange}
            variant="outlined"
            fullWidth
          />
            <InputLabel id="category">Categoria</InputLabel>
          <Select
            name="category"
            value={filters.category}
            onChange={handleFilterChange}
            displayEmpty
            fullWidth
            label="Categoria"
          >
            <MenuItem se>Todas</MenuItem>
            <MenuItem value="1">Hotel</MenuItem>
            <MenuItem value="2">Pousada</MenuItem>
            <MenuItem value="3">Hostel/Albergue</MenuItem>
            <MenuItem value="4">Resort</MenuItem>
            <MenuItem value="5">Hotel Fazenda</MenuItem>
            <MenuItem value="6">Flat/Apart Hotel</MenuItem>
          </Select>
        </Box>
      </form>

      {loading ? (
        <Box display="flex" justifyContent="center" my={4}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Typography color="error" variant="body1">
          {error}
        </Typography>
      ) : (
        <Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            my={2}
          >
            <Typography>
              Mostrando {(meta.page - 1) * filters.limit + 1} -{" "}
              {Math.min(meta.page * filters.limit, meta.total)} de {meta.total}{" "}
              resultados
            </Typography>
            <Box>
              <Button
                onClick={() => handlePageChange(meta.page - 1)}
                disabled={meta.page === 1}
                startIcon={<ArrowBackIosIcon />}
              >
                Anterior
              </Button>
              <Button
                onClick={() => handlePageChange(meta.page + 1)}
                disabled={meta.page === meta.pages}
                endIcon={<ArrowForwardIosIcon />}
              >
                Próxima
              </Button>
            </Box>
          </Box>
          <Box display="flex" flexWrap="wrap" gap={2} flexDirection={"column"}>
            {hotels.map((hotel) => (
              <PlaceCard
                key={hotel.id}
                to={`/hotel/${hotel.id}`}
                placeID={hotel.id}
                thumb={
                  hotel.images?.[0] ||
                  "https://placehold.co/600x400?text=Imagem+não+disponível"
                }
                name={hotel.name}
                rating={hotel.stars}
                city={hotel.city}
                country={hotel.country}
                category={hotel.category?.name}
                amenities={hotel.amenities || []}
              />
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
}

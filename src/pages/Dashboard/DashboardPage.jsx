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
import { Header } from "../../components/Header";
import { PlaceCard } from "../../components/PlaceCard";
import axios from "axios";

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

      const validFilters = Object.fromEntries(
        Object.entries(filters).filter(([_, value]) => value !== "")
      );

      const response = await axios.get(endpoint, {
        params: validFilters,
      });

      if (response.data) {
        setHotels(response.data.data || response.data);
        setMeta(response.data.meta || { total: 0, page: 1, pages: 1 });
      }
    } catch (err) {
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
    console.log({ [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilters({ ...filters, page: 1 });
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
      <Header />
      <Typography variant="h4" gutterBottom>
        Lista de Hotéis
      </Typography>

      <form onSubmit={handleSubmit}>
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
          <Select
            name="category"
            value={filters.category}
            onChange={handleFilterChange}
            displayEmpty
            fullWidth
          >
            <MenuItem value="">Todas</MenuItem>
            <MenuItem value="1">Hotel</MenuItem>
            <MenuItem value="2">Pousada</MenuItem>
            <MenuItem value="3">Hostel/Albergue</MenuItem>
            <MenuItem value="4">Resort</MenuItem>
            <MenuItem value="5">Hotel Fazenda</MenuItem>
            <MenuItem value="6">Flat/Apart Hotel</MenuItem>
          </Select>
        </Box>
        <Button variant="contained" color="primary" type="submit">
          Aplicar Filtros
        </Button>
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

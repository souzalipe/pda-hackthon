import Box from "@mui/material/Box";
import { PlaceCard } from "../../components/PlaceCard";
import { useState, useEffect } from "react";
import { Header } from "../../components/Header";
import Typography from "@mui/material/Typography";
import axios from "axios";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import CircularProgress from "@mui/material/CircularProgress";

export function DashboardPage() {
  const [hotels, setHotels] = useState([
    {
      id: "",
      name: "",
      stars: 0,
      latitude: "",
      longitude: "",
      description: "",
      address: " ",
      district: "",
      city: "",
      state: "",
      country: "",
      placeid: "",
      images: [""],
      amenities: [
        {
          key: "",
          label: "",
        },
      ],
      category: {
        name: "",
      },
    },
  ]);
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
  }, [
    filters.page,
    filters.limit,
    filters.orderby,
    filters.sort,
    filters.category,
  ]);

  const fetchHotels = async () => {
    try {
      setLoading(true);
      const baseUrl = "http://localhost:3000/api/hotels";
      const endpoint = filters.category
        ? `${baseUrl}/category/${filters.category}`
        : baseUrl;

      const response = await axios.get(endpoint, {
        params: {
          name: filters.name,
          stars: filters.stars,
          city: filters.city,
          country: filters.country,
          page: filters.page,
          limit: filters.limit,
          orderby: filters.orderby,
          sort: filters.sort,
        },
      });
      console.log(response.data)

      setHotels(response.data.data || [...response.data]);
      if (response.data.meta) {
        setMeta(response.data.meta);
      }
      if (response.status == 404) {
        setError("Category not found");
      }
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch hotels");
      setLoading(false);
    }
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
    console.log({ [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilters({ ...filters, page: 1 }); // Reset to first page when applying new filters
    fetchHotels();
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

  if (loading) {
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <CircularProgress />
    </Box>;
  }

  if (error) {
    <Box>
      <Typography color="error" variant="h6">
        Ocorreu um erro ao buscar os hotéis. Por favor, tente novamente mais
        tarde.
      </Typography>
    </Box>;
  }

  return (
    <Box>
      <Header />
      <h1 className="text-3xl font-bold mb-6">Lista de Hotéis</h1>
      <form onSubmit={handleSubmit} className="mb-8 space-y-4">
        <Box className="flex flex-wrap -mx-2">
          <Box className="px-2 w-full sm:w-1/2 md:w-1/4">
            <TextField
              label="Nome"
              type="text"
              id="name"
              name="name"
              autoComplete="none"
              value={filters.name}
              onChange={handleFilterChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </Box>
          <Box className="px-2 w-full sm:w-1/2 md:w-1/4">
            <label
              htmlFor="stars"
              className="block text-sm font-medium text-gray-700"
            >
              Estrelas
            </label>
            <select
              id="stars"
              name="stars"
              value={filters.stars}
              onChange={handleFilterChange}
            >
              <option value="">Todas</option>
              <option value={"1"}>1 Estrela</option>
              <option value={"2"}>2 Estrelas</option>
              <option value={"3"}>3 Estrelas</option>
              <option value={"4"}>4 Estrelas</option>
              <option value={"5"}>5 Estrelas</option>
            </select>
          </Box>
          <Box className="px-2 w-full sm:w-1/2 md:w-1/4">
            <TextField
              label="Cidade"
              type="text"
              id="city"
              name="city"
              value={filters.city}
              onChange={handleFilterChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </Box>
          <Box className="px-2 w-full sm:w-1/2 md:w-1/4">
            <TextField
              label="País"
              type="text"
              id="country"
              name="country"
              value={filters.country}
              onChange={handleFilterChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </Box>
          <Box>
            Categorias
            <select
              id="category"
              name="category"
              value={filters.category}
              onChange={handleFilterChange}
            >
              <option value={0}>Todas</option>
              <option value={1}>Hotel</option>
              <option value={2}>Pousada</option>
              <option value={3}>Hostel/Albergue</option>
              <option value={4}>Resort</option>
              <option value={5}>Hotel fazenda</option>
              <option value={6}>Flat/Apart Hotel</option>
            </select>
          </Box>
        </Box>
        <Box>
          <Button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Aplicar Filtros
          </Button>
        </Box>
      </form>
      <Box className="overflow-x-auto">
        <Box
          sx={{
            display: "flex",
            width: "100%",
            gap: 20,
          }}
        >
          <Typography
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
            onClick={() => handleSortChange("name")}
          >
            Nome{" "}
            {filters.orderby === "name" && (filters.sort === "ASC" ? "↑" : "↓")}
          </Typography>
          <Typography
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
            onClick={() => handleSortChange("stars")}
          >
            Estrelas{" "}
            {filters.orderby === "stars" &&
              (filters.sort === "ASC" ? "↑" : "↓")}
          </Typography>
          <Typography
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
            onClick={() => handleSortChange("city")}
          >
            Cidade{" "}
            {filters.orderby === "city" && (filters.sort === "ASC" ? "↑" : "↓")}
          </Typography>
          <Typography
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            País
          </Typography>
          <Typography
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Categoria
          </Typography>
        </Box>

        {hotels?.length > 0 &&
          hotels.map((hotel) => (
            <PlaceCard
              to={`/hotel/${hotel.id}`}
              key={hotel.id}
              placeID={hotel.id}
              thumb={hotel.images?.[0] || "/path/to/default-image.jpg"} // Fallback para imagem padrão
              name={hotel.name || "Nome Indisponível"}
              rating={hotel.stars || "Sem Avaliação"}
              city={hotel.city || "Cidade Desconhecida"}
              country={hotel.country || "País Desconhecido"}
              category={hotel.category?.name || "Categoria Não Informada"}
            />
          ))}
      </Box>
      <Box className="mt-4 flex justify-between items-center">
        <Box>
          Mostrando {(meta.page - 1) * filters.limit + 1} -{" "}
          {Math.min(meta.page * filters.limit, meta.total)} de {meta.total}{" "}
          resultados
        </Box>
        <Box className="flex space-x-2">
          <Button
            onClick={() => handlePageChange(meta.page - 1)}
            disabled={meta.page === 1}
          >
            <ArrowBackIosIcon />
            Anterior
          </Button>
          <Button
            onClick={() => handlePageChange(meta.page + 1)}
            disabled={meta.page === meta.pages}
          >
            Próxima
            <ArrowForwardIosIcon />
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

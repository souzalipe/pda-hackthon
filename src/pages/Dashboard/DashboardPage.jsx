import { Box, Flex } from "@radix-ui/themes";
import { PlaceCard } from "../../components/PlaceCard";

const infoMocking = [
  {
    name: "Glória Plaza Hotel",
    rating: 3,
    latitude: -23.5572746,
    longitude: -46.6341251134872,
    description:
      'Um hotel romântico somente para adultos (Adults Only), com decoração moderna e temática oriental, atendendo ao gosto dos clientes mais exigentes. Localizado no bairro da Liberdade, a 200 metros da estação do metrô, no coração da cidade de São Paulo, o Glória Plaza Hotel conta com seis categorias de suítes. Destaque para Suíte Hidro Master equipada com ar-condicionado split, cama super king size, banheira de hidromassagem dupla, iluminação especial, wi-fi, sistema de som bluetooth e TV LCD 49".',
    address: {
      street: "Rua da Gloria , 452",
      neighborhood: "Liberdade",
      city: "Sao Paulo",
      state: "SP",
      country: "BR",
    },
    placeId: "ChIJ0WGkg4FEzpQRrlsz_whLqZs",
    mainImage:
      "https://i.t4w.mobi/h/BR/1010502/1257353/1257353_8859Property605322.jpg",
    gallery: [
      "https://i.t4w.mobi/h/BR/1010502/1257353/1257353_8859Property605322.jpg",
      "https://i.t4w.mobi/h/BR/1010502/1257353/1257353_8859Property398788.jpg",
      "https://i.t4w.mobi/h/BR/1010502/1257353/1257353_8859Property398789.jpg",
      "https://i.t4w.mobi/h/BR/1010502/1257353/1257353_8859Property398790.jpg",
      "https://i.t4w.mobi/h/BR/1010502/1257353/1257353_8859Property398791.jpg",
      "https://i.t4w.mobi/h/BR/1010502/1257353/1257353_8859Property398793.jpg",
      "https://i.t4w.mobi/h/BR/1010502/1257353/1257353_8859Property398794.jpg",
      "https://i.t4w.mobi/h/BR/1010502/1257353/1257353_8859Property398795.jpg",
      "https://i.t4w.mobi/h/BR/1010502/1257353/1257353_8859Property398796.jpg",
      "https://i.t4w.mobi/h/BR/1010502/1257353/1257353_8859Property398797.jpg",
      "https://i.t4w.mobi/h/BR/1010502/1257353/1257353_8859Property398798.jpg",
      "https://i.t4w.mobi/h/BR/1010502/1257353/1257353_8859Property398799.jpg",
      "https://i.t4w.mobi/h/BR/1010502/1257353/1257353_8859Property605323.jpg",
      "https://i.t4w.mobi/h/BR/1010502/1257353/1257353_8859Property605324.jpg",
      "https://i.t4w.mobi/h/BR/1010502/1257353/1257353_8859Property605325.jpg",
    ],
    amenities: [
      { key: "WI_FI", label: "Internet" },
      { key: "BREAKFAST", label: "Café da manhã" },
      { key: "PARKING", label: "Estacionamento" },
      { key: "RESTAURANT", label: "Restaurante" },
    ],
    nearbyPlaces: [
      {
        lat: -23.557189999999935,
        long: -46.63489999999996,
        name: "Yamamoto",
        type: "Food",
        address: "Rua Américo de Campos 84, Liberdade, São Paulo, 01506-010",
        distance: 1.2,
      },
      {
        lat: -23.55804999999998,
        long: -46.63406999999995,
        name: "Chopperia Liberdade",
        type: "Food",
        address: "Rua da Glória 523, Liberdade, São Paulo, 01510-000",
        distance: 1.35,
      },
      {
        lat: -23.55806999999993,
        long: -46.63394999999997,
        name: "Karaokê Tequila's",
        type: "Food",
        address: "Rua da Glória 543, Liberdade, São Paulo, 01510-000",
        distance: 1.35,
      },
      {
        lat: -23.55734999999993,
        long: -46.63505999999995,
        name: "Banri Katian",
        type: "Food",
        address: "Rua Galvão Bueno 205, Liberdade, São Paulo, 01506-000",
        distance: 1.5,
      },
      {
        lat: -23.558149999999955,
        long: -46.63391999999993,
        name: "Okuyama",
        type: "Food",
        address: "Rua da Glória 553, Liberdade, São Paulo, 01510-000",
        distance: 1.5,
      },
      {
        lat: -23.55747999999994,
        long: -46.63522999999998,
        name: "Banco do Brasil",
        type: "Bank",
        address: "Rua Galvão Bueno 218, Liberdade, São Paulo, 01506-000",
        distance: 1.65,
      },
      {
        lat: -23.557049999999947,
        long: -46.63271999999995,
        name: "Bradesco",
        type: "Bank",
        address: "Rua São Paulo 26, Liberdade, São Paulo, 01513-000",
        distance: 2.25,
      },
    ],
    reviews: [],
  },
  {
    name: "Paraíso Suites by Charlie",
    rating: 3,
    latitude: -23.5768926,
    longitude: -46.6427201,
    description:
      "Com uma localização atraente no bairro de Vila Mariana, em São Paulo, o Paulista Suites by Charlie fica a 1,8 km do Pavilhão Ciccillo Matarazzo, a 2,2 km do Parque do Ibirapuera e a 2,3 km do MASP São Paulo. A propriedade oferece recepção 24 horas, lounge compartilhado e Wi-Fi gratuito em todas as áreas. O hotel dispõe de quartos família. Os quartos dispõem de ar-condicionado, área de estar, TV de tela plana a cabo, cofre e banheiro privativo com chuveiro. O Paulista Suites by Charlie dispõe de alguns quartos com vista da cidade, e todos os quartos têm uma chaleira. As acomodações incluem roupa de cama e toalhas. No Paulista Suites by Charlie, você pode desfrutar de um café da manhã à la carte. Um business center está à sua disposição no hotel. O Paulista Suites by Charlie fica a 2,9 km da Catedral Metropolitana de São Paulo e a 3,4 km do Edifício Copan. O aeroporto mais próximo é o Aeroporto de Congonhas/São Paulo, a 6 km da acomodação.",
    address: {
      street: "RUA APENINOS , 1070",
      neighborhood: "Paraíso",
      city: "Sao Paulo",
      state: "SP",
      country: "BR",
    },
    placeId: "ChIJ0WGkg4FEzpQRrlsz_whLqZs",
    mainImage: "https://media.omnibees.com/Images/15483/Property/871274.jpg",
    gallery: [
      "https://media.omnibees.com/Images/15483/Property/871274.jpg",
      "https://media.omnibees.com/Images/15483/Property/871275.jpg",
      "https://media.omnibees.com/Images/15483/Property/871276.jpg",
      "https://media.omnibees.com/Images/15483/Property/871277.jpg",
      "https://media.omnibees.com/Images/15483/Property/871278.jpg",
      "https://media.omnibees.com/Images/15483/Property/871279.jpg",
      "https://media.omnibees.com/Images/15483/Property/871280.jpg",
      "https://media.omnibees.com/Images/15483/Property/871281.jpg",
      "https://media.omnibees.com/Images/15483/Property/871283.jpg",
      "https://media.omnibees.com/Images/15483/Property/871284.jpg",
      "https://media.omnibees.com/Images/15483/Property/871285.jpg",
      "https://media.omnibees.com/Images/15483/Property/871286.jpg",
      "https://images.trvl-media.com/lodging/1000000/920000/915000/915000/8e3b777f.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
      "https://contentstatic.blob.core.windows.net/prd/predios/paraiso-suites/006.jpeg",
      "https://contentstatic.blob.core.windows.net/prd/predios/paraiso-suites/005.jpeg",
      "https://contentstatic.blob.core.windows.net/prd/predios/paraiso-suites/002.jpeg",
    ],
    amenities: [
      { key: "WI_FI", label: "Internet" },
      { key: "BREAKFAST", label: "Café da manhã" },
      { key: "PARKING", label: "Estacionamento" },
      { key: "RESTAURANT", label: "Restaurante" },
      { key: "LAUNDRY", label: "Lavanderia" },
      { key: "FITNESS_CENTER", label: "Academia" },
    ],
    nearbyPlaces: [
      {
        lat: -23.57704999999993,
        long: -46.64322999999996,
        name: "Confeitaria Asti",
        type: "Food",
        address: "Rua Cubatão 580, Vila Mariana, São Paulo, 04013-002",
        distance: 0.75,
      },
      {
        lat: -23.577369999999977,
        long: -46.64293999999995,
        name: "Pizzeria Cézanne",
        type: "Food",
        address: "Rua Cubatão 621, Vila Mariana, São Paulo, 04013-042",
        distance: 0.9,
      },
      {
        lat: -23.577489999999955,
        long: -46.642859999999985,
        name: "Ariake Bistrô",
        type: "Food",
        address: "Rua Cubatão 639, Vila Mariana, São Paulo, 04013-042",
        distance: 1.05,
      },
      {
        lat: -23.57756999999998,
        long: -46.64268999999996,
        name: "Hora Hora",
        type: "Food",
        address: "Rua Estela 180, Vila Mariana, São Paulo, 04011-000",
        distance: 1.2,
      },
      {
        lat: -23.57765999999998,
        long: -46.64281999999997,
        name: "Açai Com Graviola",
        type: "Food",
        address: "Rua Cubatão, Vila Mariana, São Paulo, 04013-042",
        distance: 1.35,
      },
      {
        lat: -23.575879999999927,
        long: -46.64142999999996,
        name: "Metrô-Paraíso-Avenida Bernardino de Campos-Lado Par",
        type: "Metro",
        address:
          "Avenida Bernardino de Campos, Vila Mariana, São Paulo, 04004-040",
        distance: 2.55,
      },
    ],
    reviews: [],
    createdAt: "2023-01-09T23:24:51",
    updatedAt: "2023-08-25T09:27:37",
  },
];

// Card clicável direciona para página de detalhes

export function DashboardPage() {
  return (
    <Box>
      <Box>
        <h1>Pagina de hoteis</h1>
        <Flex>
          {infoMocking.map((info) => (
            <PlaceCard
              key={info.placeId}
              thumb={info.mainImage}
              name={info.name}
              rating={info.rating}
              description={info.description}
              amenities={[]}
            />
          ))}
        </Flex>
      </Box>
    </Box>
  );
}

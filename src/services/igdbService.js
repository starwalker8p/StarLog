import { createClient } from 'apicalypse';

const IGDB_CLIENT_ID = 'shsiehyp1jtiqpqo02d9ohvrayduqo';
const IGDB_CLIENT_SECRET = 'no3v38enrmd39b9kjyeq15a81bnmo7';
const IGDB_ACCESS_TOKEN = 'jfvduz4ntfq1s380u9lzn6nsjdwei8'; // Adicione o token de acesso OAuth aqui

const igdbClient = createClient({
  clientId: IGDB_CLIENT_ID,
  clientSecret: IGDB_CLIENT_SECRET,
  accessToken: IGDB_ACCESS_TOKEN,
  endpoint: 'https://api.igdb.com/v4',
  headers: {
    'Client-ID': IGDB_CLIENT_ID,
    'Authorization': `Bearer ${IGDB_ACCESS_TOKEN}`,
  },
});

// Função para buscar jogos populares usando o Apicalypse
const fetchPopularGames = async () => {
  try {
    const response = await igdbClient.fields('name, cover.url').limit(5).sort('popularity:desc').get('/games');
    return response.data;
  } catch (error) {
    console.error('Error fetching popular games:', error);
    throw error;
  }
};

export default { fetchPopularGames };

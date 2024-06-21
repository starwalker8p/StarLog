import axios from 'axios';

const IGDB_CLIENT_ID = process.env.REACT_APP_IGDB_CLIENT_ID;
const IGDB_ACCESS_TOKEN = process.env.REACT_APP_IGDB_ACCESS_TOKEN;

const igdbService = axios.create({
  baseURL: 'https://api.igdb.com/v4',
  headers: {
    'Client-ID': IGDB_CLIENT_ID,
    'Authorization': `Bearer ${IGDB_ACCESS_TOKEN}`,
  },
});

export const getGames = async () => {
  try {
    const response = await igdbService.post('/games', {
      fields: 'name,cover.url',
      limit: 10, // Adjust limit as needed
      sort: 'popularity desc',
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching games:', error);
    return [];
  }
};

export default igdbService;

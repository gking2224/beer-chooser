import axios from 'axios';
import validateFetchBeersResponse from './validate-response';
import { IFetchBeersResponseDataPoint, IFetchBeersResponse } from '~/api-schema/types';

export interface IBeerResult {
  id: number;
  name: string;
  description: string;
  firstBrewed: string;
  imageUrl: string;
}

const API_BASE_URL = 'https://api.punkapi.com/v2/beers';

const constructUrl = (meal: string) => `${API_BASE_URL}?food=${meal}`;

const extractFields = (beer: IFetchBeersResponseDataPoint): IBeerResult => {
  return {
    id: beer.id,
    name: beer.name,
    description: beer.description,
    firstBrewed: beer.first_brewed,
    imageUrl: beer.image_url
  };
};

const fetchBeersForMeal: (meal: string) => Promise<IBeerResult[]> = async (meal) => {

  const {data, statusText, status} = await axios.get(constructUrl(meal));

  if (status !== 200) {
    throw new Error(statusText);
  }

  const response = validateFetchBeersResponse<IFetchBeersResponse>(data);

  return response.map(extractFields);
}

export default fetchBeersForMeal;

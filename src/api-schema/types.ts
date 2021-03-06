export interface IFetchBeersResponseDataPoint {
  id: number;
  name: string;
  description: string;
  tagline: string;
  first_brewed: string;
  image_url?: string | null;
}

export type IFetchBeersResponse = IFetchBeersResponseDataPoint[];

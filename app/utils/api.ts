import axios from 'axios';
import { VehicleModel } from '../types';

export async function fetchVehicleModels(makeId: string, year: string): Promise<VehicleModel[]> {
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;


  try {
    const response = await axios.get<{ Results: VehicleModel[] }>(
      `${apiBaseUrl}/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
    );
    return response.data.Results;
  } catch (error) {
    console.error('Error fetching vehicle models:', error);
    throw new Error('Failed to fetch vehicle models. Please try again later.');
  }
}

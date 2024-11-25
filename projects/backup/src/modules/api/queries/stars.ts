import { useQuery } from '@tanstack/react-query';
import { apiClient } from '../client';
import { Star, StarSchema } from '../../../types/star';
import { API_KEY } from '@env';
import { Alert } from 'react-native';

export const useStars = () => {
  Alert.alert("Log", "useStars called");

  return useQuery({
    queryKey: ['stars'],
    queryFn: async () => {
      try {
        const { data } = await apiClient.get('/stars', {
          params: { api_key: API_KEY },
        });
        console.log("API Response:", data);
        Alert.alert("API Response", JSON.stringify(data)); // For debugging in RN
        return data; 
      } catch (error) {
        console.error("API Error:", error);
        Alert.alert("Error", JSON.stringify(error));
        throw new Error("Failed to fetch stars");
      }
    }
    
  });
};


export const useNearbyStars = (coordinates: { lat: number; lng: number }) => {
  return useQuery({
    queryKey: ['stars', 'nearby', coordinates],
    queryFn: async () => {
      const { data } = await apiClient.get<Star[]>('/stars/nearby', {
        params: coordinates,
      });
      return data.map(star => StarSchema.parse(star));
    },
  });
};
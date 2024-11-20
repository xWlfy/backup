import { useQuery } from '@tanstack/react-query';
import { apiClient } from '../client';
import { Star, StarSchema } from '../../types/star';

export const useStars = () => {
  return useQuery({
    queryKey: ['stars'],
    queryFn: async () => {
      const { data } = await apiClient.get<Star[]>('/stars');
      return data.map(star => StarSchema.parse(star));
    },
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
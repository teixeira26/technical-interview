import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface VehicleType {
  MakeId: number;
  MakeName: string;
}

export const useVehicleFilter = () => {
  const [vehicleTypes, setVehicleTypes] = useState<VehicleType[]>([]);
  const [selectedType, setSelectedType] = useState<string>('');
  const [selectedYear, setSelectedYear] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();
  const currentYear = new Date().getFullYear();
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  useEffect(() => {
    const fetchVehicleTypes = async () => {
      try {
        const response = await fetch(`${apiBaseUrl}/vehicles/GetMakesForVehicleType/car?format=json`);
        if (!response.ok) {
          throw new Error('Failed to fetch vehicle types');
        }
        const data = await response.json();
        setVehicleTypes(data.Results);
      } catch (error) {
        setError('Error fetching vehicle types. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchVehicleTypes();
  }, []);

  const yearOptions = Array.from(
    { length: currentYear - 2014 + 1 },
    (_, i) => ({
      value: (currentYear - i).toString(),
      label: (currentYear - i).toString(),
    })
  );

  const isNextEnabled = selectedType !== '' && selectedYear !== '';

  const handleNext = () => {
    if (isNextEnabled) {
      router.push(`/result/${selectedType}/${selectedYear}`);
    }
  };

  return {
    vehicleTypes,
    selectedType,
    setSelectedType,
    selectedYear,
    setSelectedYear,
    yearOptions,
    isNextEnabled,
    isLoading,
    error,
    handleNext,
  };
};

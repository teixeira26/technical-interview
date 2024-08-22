import React from 'react';
import { useVehicleFilter } from '../hooks/useVehicleFilter';
import { Select } from '../components/Select';
import { Button } from './Button';
import Skeleton from 'react-loading-skeleton'

export const VehicleFilter: React.FC = () => {
  const {
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
  } = useVehicleFilter();

  if (isLoading) {
    return <Skeleton height='200px'/>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="space-y-6">
        <Select
          label="Vehicle Type"
          id="vehicleType"
          value={selectedType}
          onChange={setSelectedType}
          options={vehicleTypes.map((type) => ({
            value: type.MakeId.toString(),
            label: type.MakeName,
          }))}
          placeholder="Select a vehicle type"
        />
        <Select
          label="Model Year"
          id="modelYear"
          value={selectedYear}
          onChange={setSelectedYear}
          options={yearOptions}
          placeholder="Select a year"
        />
        <Button onClick={handleNext} disabled={!isNextEnabled}>
          Next
        </Button>
      </div>
    </div>
  );
};
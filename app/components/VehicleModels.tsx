import { VehicleCard } from './VehicleCard';
import { fetchVehicleModels } from '../utils/api';
import { VehicleModel } from '../types';

export default async function VehicleModels({ makeId, year }: { makeId: string; year: string }) {
  const models = await fetchVehicleModels(makeId, year);

  if (models.length === 0) {
    return <p className="text-center text-gray-500">No models found for the selected criteria.</p>;
  }

  return (
    <>
     <h1 className="text-3xl font-bold text-gray-900">{`${models[0].Make_Name} ${year}`}</h1>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-4">
  {models.map((model) => (
    <VehicleCard key={model.Model_ID} model={model} />
  ))}
</div>
    </>
   
  );
}
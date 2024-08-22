import { VehicleModel } from '../types';

export const VehicleCard: React.FC<{ model: VehicleModel }> = ({ model }) => (
  <div className="bg-white overflow-hidden shadow rounded-lg">
    <div className="px-4 py-5 sm:p-6">
      <h3 className="text-lg leading-6 font-medium text-gray-900">{model.Model_Name}</h3>
      <p className="mt-1 max-w-2xl text-sm text-gray-500">{model.Make_Name}</p>
    </div>
  </div>
);
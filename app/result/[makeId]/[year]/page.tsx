import { Suspense } from 'react';
import VehicleModels from '../../../components/VehicleModels';
import { BackToFilterButton } from '../../../components/BackToFilterButton';
import Skeleton from 'react-loading-skeleton';

export default function ResultPage({ params }: { params: { makeId: string; year: string } }) {
  return (
    <div className='bg-gray-50'>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  mt-6">
       
        <Suspense fallback={<Skeleton height={250}/>}>
          <VehicleModels makeId={params.makeId} year={params.year} />
        </Suspense>
      <div className="mt-6">
        <BackToFilterButton />
      </div>
    </div>
    </div>
   
  );
}
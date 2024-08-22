'use client';

import React from 'react';
import { VehicleFilter } from './components/VehicleFilter';
import { Layout } from './components/Layout';

export default function FilterPage() {
  return (
    <Layout>
      <VehicleFilter />
    </Layout>
  );
}
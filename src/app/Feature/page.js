import React from 'react';
import Feature from './featureMain/feature';
import FeatureCard from './featureCard/featureCard';
import FeatureFinance from './featureThird/FeatureFinance';

const page = () => {
  return (
    <div>
        <Feature/>
        <FeatureCard/>
        <FeatureFinance/>
    </div>
  );
}

export default page;

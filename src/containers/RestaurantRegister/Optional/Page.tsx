'use client';

import { Spacing } from '@/components/Spacing';
import { CTA } from './components/CTA';
import { RecommendSection } from '@/containers/RestaurantRegister/Optional/sections/RecommendSection';
import { useState } from 'react';
import { ImageSection } from '@/containers/RestaurantRegister/Optional/sections/ImageSection';

export function OptionalPage() {
  const [recommendText, setRecommendText] = useState('');

  return (
    <>
      <Spacing size={24} />
      <RecommendSection recommendText={recommendText} onRecommendTextChange={setRecommendText} />
      <Spacing size={48} />
      <ImageSection />
      <CTA onCTAClick={() => {}} />
    </>
  );
}

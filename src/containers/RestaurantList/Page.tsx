'use client';

import { Spacing } from '@/components/Spacing';
import { Header } from './components/Header/Header';
import { Filter } from './components/Filter/Filter';
import { restaurantList } from './dummy';
import { Card } from './components/Card/Card';
import { CSSProperties } from 'react';

export function RestaurantList() {
  return (
    <>
      <Header />
      <Spacing size={8} />
      <Filter />
      <Spacing size={28} />
      <div style={cardListStyle}>
        {restaurantList.map((restaurant) => (
          <Card key={restaurant.name} {...restaurant} />
        ))}
      </div>
    </>
  );
}

const cardListStyle: CSSProperties = {
  padding: '0 20px',
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
};

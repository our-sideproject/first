import { CSSProperties } from 'react';
import { RestaurantMetaType } from '../../type';
import { DistanceIcon } from '../Icons/DistanceIcon';
import { Spacing } from '@/components/Spacing';

interface Props extends RestaurantMetaType {}

export function Card({ name, distance, menu, prices, recommends, imageSrcs, comments }: Props) {
  return (
    <div style={containerStyle}>
      <div style={topStyle}>
        <div style={topLeftStyle}>
          <span style={nameStyle}>{name}</span>
          <span style={menuStyle}>{menu}</span>
        </div>
        <div style={topRightStyle}>
          <DistanceIcon />
          <span style={distanceStyle}>{distance}m</span>
        </div>
      </div>
      <Spacing size={12} />
      <ul style={tagListStyle}>
        {prices.map((price) => (
          <li key={price} style={priceTagStyle}>
            {price}
          </li>
        ))}
        {recommends.map((recommend) => (
          <li key={recommend} style={recommendTagStyle}>
            {recommend}
          </li>
        ))}
      </ul>
    </div>
  );
}

const containerStyle: CSSProperties = {
  width: '100%',
  paddingBottom: 20,
  borderBottom: '1px solid #EAEBEE',
};

const topStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
};

const topLeftStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
};

const topRightStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 2,
};

const nameStyle: CSSProperties = {
  fontSize: 18,
  fontWeight: 700,
};

const menuStyle: CSSProperties = {
  fontSize: 16,
  fontWeight: 500,
  color: '#868B94',
};

const distanceStyle: CSSProperties = {
  fontSize: 14,
  fontWeight: 400,
  color: '#868B94',
};

const tagListStyle: CSSProperties = {
  gap: 4,
  display: 'flex',
  flexWrap: 'wrap',
  borderRadius: 6,
};

const priceTagStyle: CSSProperties = {
  padding: '4px 8px',
  borderRadius: 6,
  fontWeight: 700,
  fontSize: 12,
  color: '#4D5159',
  backgroundColor: '#F2F3F6',
};

const recommendTagStyle: CSSProperties = {
  padding: '4px 8px',
  borderRadius: 6,
  fontWeight: 700,
  fontSize: 12,
  color: '#FE6F0F',
  backgroundColor: '#FFF5F0',
};

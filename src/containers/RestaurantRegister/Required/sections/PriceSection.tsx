import { CSSProperties } from 'react';
import { Spacing } from '@/components/Spacing';

const PRICE_LIST = ['만원 이하', '1만원대', '2만원대', '3만원 이상'];

interface Props {
  selectedPrice?: string;
  onPriceClick: (price: string) => void;
}

export function PriceSection({ selectedPrice, onPriceClick }: Props) {
  return (
    <div style={ContainerStyle}>
      <div style={TitleContainerStyle}>
        <span style={TitleStyle}>이런 상황에서 이 식당을 찾아요</span>
        <span style={RequiredStyle}>필수</span>
      </div>
      <Spacing size={16} />
      <div style={PriceContainerStyle}>
        {PRICE_LIST.map((price) => (
          <div
            key={price}
            style={{
              ...PriceStyle,
              ...(selectedPrice === price ? SelectedPriceStyle : UnselectedPriceStyle),
            }}
            onClick={() => onPriceClick(price)}>
            {price}
          </div>
        ))}
      </div>
    </div>
  );
}

const ContainerStyle: CSSProperties = {
  margin: '0 20px',
};

const TitleContainerStyle: CSSProperties = {
  display: 'flex',
  gap: 8,
  alignItems: 'center',
};

const TitleStyle: CSSProperties = {
  fontWeight: 700,
  fontSize: 18,
  color: '#212124',
};

const RequiredStyle: CSSProperties = {
  fontWeight: 700,
  fontSize: 13,
  color: '#FE6F0F',
};

const PriceContainerStyle: CSSProperties = {
  display: 'flex',
  gap: 8,
  flexWrap: 'wrap',
};

const PriceStyle: CSSProperties = {
  padding: '10px 14px',
  borderRadius: 50,
  whiteSpace: 'pre-wrap',
};

const UnselectedPriceStyle: CSSProperties = {
  color: '#212124',
  border: '1px solid #DCDEE2',
};

const SelectedPriceStyle: CSSProperties = {
  color: 'white',
  border: '1px solid #212124',
  backgroundColor: '#212124',
};

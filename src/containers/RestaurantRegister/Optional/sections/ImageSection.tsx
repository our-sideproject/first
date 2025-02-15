import { Spacing } from '@/components/Spacing';
import { CSSProperties } from 'react';

export function ImageSection() {
  return (
    <div style={ContainerStyle}>
      <div style={TitleContainerStyle}>
        <span style={TitleStyle}>이 식당을 추천하는 이유를 알려주세요</span>
        <span style={OptionalStyle}>선택</span>
      </div>
      <Spacing size={16} />
      <div style={PlaceholderStyle} />
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

const OptionalStyle: CSSProperties = {
  fontWeight: 700,
  fontSize: 13,
  color: '#ADB1BA',
};

const PlaceholderStyle: CSSProperties = {
  width: 100,
  height: 100,
  backgroundColor: '#F2F3F6',
  borderRadius: 12,
};

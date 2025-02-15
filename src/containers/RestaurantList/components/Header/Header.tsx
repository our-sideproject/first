import { CSSProperties } from 'react';
import { ArrowDownIcon } from '../Icons/ArrowDownIcon';
import { ProfileIcon } from '../Icons/ProfileIcon';

export function Header() {
  return (
    <header style={containerStyle}>
      <div style={rightStyle}>
        <h1 style={titleStyle}>역삼역 직장인</h1>
        <ArrowDownIcon />
      </div>
      <ProfileIcon />
    </header>
  );
}

const containerStyle: CSSProperties = {
  position: 'sticky',
  top: 0,
  left: 0,
  width: '100vw',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '20px 20px 16px 20px',
  backgroundColor: 'white',
};

const titleStyle: CSSProperties = {
  fontWeight: 700,
  fontSize: 20,
};

const rightStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 4,
};

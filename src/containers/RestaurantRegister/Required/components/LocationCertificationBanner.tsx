import { CSSProperties } from 'react';

export function LocationCertificationBanner() {
  return (
    <div style={ContainerStyle}>
      <button style={CertificationButton}>위치 인증하기</button>
    </div>
  );
}

const ContainerStyle: CSSProperties = {
  margin: '0 20px',
  padding: 24,
};

const CertificationButton: CSSProperties = {
  padding: '15px 0',
  backgroundColor: 'black',
  borderRadius: 8,
  color: 'white',
  width: '100%',
};

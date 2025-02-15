import { CSSProperties, useState } from 'react';

interface Props {
  onCTAClick: () => void;
}

// TODO: 공통 컴포넌트화
export function CTA({ onCTAClick }: Props) {
  const [ctaHeight, setCTAHeight] = useState(0);

  return (
    <>
      <div style={{ height: ctaHeight }} />
      <div
        style={ButtonContainerStyle}
        ref={(el) => {
          if (el != null) {
            setCTAHeight(el.clientHeight);
          }
        }}>
        <button style={ButtonStyle} onClick={onCTAClick}>
          등록하기
        </button>
      </div>
    </>
  );
}

const ButtonContainerStyle: CSSProperties = {
  bottom: 0,
  position: 'fixed',
  width: '100%',
  padding: '10px 20px',
};

const ButtonStyle: CSSProperties = {
  backgroundColor: '#FE6F0F',
  borderRadius: 8,
  padding: '15px 0',
  border: 'none',
  outline: 'none',
  width: '100%',
  color: '#ffffff',
  fontSize: 16,
  fontWeight: 500,
};

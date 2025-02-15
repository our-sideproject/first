import { CSSProperties } from 'react';
import { Spacing } from '@/components/Spacing';

interface Props {
  recommendText: string;
  onRecommendTextChange: (text: string) => void;
}

const MAX_LENGTH = 100;

export function RecommendSection({ recommendText, onRecommendTextChange }: Props) {
  return (
    <div style={ContainerStyle}>
      <div style={TitleContainerStyle}>
        <span style={TitleStyle}>이 식당을 추천하는 이유를 알려주세요</span>
        <span style={OptionalStyle}>선택</span>
      </div>
      <Spacing size={16} />
      <textarea
        style={TextAreaStyle}
        placeholder="예) 메뉴가 빨리 나와요"
        maxLength={MAX_LENGTH}
        value={recommendText}
        onChange={(e) => onRecommendTextChange(e.target.value)}
      />
      <Spacing size={8} />
      <span style={TextLimitStyle}>
        {recommendText.length}/{MAX_LENGTH}
      </span>
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

const TextAreaStyle: CSSProperties = {
  backgroundColor: '#F2F3F6',
  borderRadius: 12,
  padding: 16,
  width: '100%',
  fontSize: 14,
  height: 120,
  outline: 'none',
};

const TextLimitStyle: CSSProperties = {
  color: '#868B94',
  fontSize: 12,
  float: 'right',
  marginRight: 4,
};

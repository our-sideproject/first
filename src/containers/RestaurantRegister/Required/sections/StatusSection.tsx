import { Spacing } from '@/components/Spacing';
import { CSSProperties } from 'react';
import { DUMMY_CHOICE } from '@/containers/dummy';

interface Props {
  selectedStatuses: string[];
  onStatusClick: (status: string) => void;
}

export function StatusSection({ selectedStatuses, onStatusClick }: Props) {
  return (
    <div style={ContainerStyle}>
      <div style={TitleContainerStyle}>
        <span style={TitleStyle}>이런 상황에서 이 식당을 찾아요</span>
        <span style={RequiredStyle}>필수</span>
      </div>
      <Spacing size={16} />
      <div style={ChoiceContainerStyle}>
        {DUMMY_CHOICE.map((choice) => (
          <div
            key={choice}
            style={{
              ...ChoiceStyle,
              ...(selectedStatuses.includes(choice) ? SelectedStatusStyle : UnselectedStatusStyle),
            }}
            onClick={() => onStatusClick(choice)}>
            {choice}
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

const ChoiceContainerStyle: CSSProperties = {
  display: 'flex',
  gap: 8,
  flexWrap: 'wrap',
};

const ChoiceStyle: CSSProperties = {
  padding: '10px 14px',
  borderRadius: 50,
  whiteSpace: 'pre-wrap',
};

const UnselectedStatusStyle: CSSProperties = {
  color: '#212124',
  border: '1px solid #DCDEE2',
};

const SelectedStatusStyle: CSSProperties = {
  color: 'white',
  border: '1px solid #212124',
  backgroundColor: '#212124',
};

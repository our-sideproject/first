import { CSSProperties, PropsWithChildren } from 'react';
import { ChevronDownIcon } from '../Icons/ChevronDownIcon';

interface Props {
  name: string;
  onItemClick: () => void;
}

export function FilterItem({ name, onItemClick }: PropsWithChildren<Props>) {
  return (
    <li style={itemStyle} onClick={onItemClick}>
      {name}
      <ChevronDownIcon />
    </li>
  );
}

const itemStyle: CSSProperties = {
  padding: '8px 10px 8px 14px',
  gap: 4,
  display: 'flex',
  alignItems: 'center',
  border: '1px solid #DCDEE2',
  borderRadius: 30,
};

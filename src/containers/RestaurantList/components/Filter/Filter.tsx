import { CSSProperties } from 'react';
import { FilterItem } from './FilterItem';

const FILTER_LIST = ['메뉴', '가격대', '이럴 때 가요'];

export function Filter() {
  return (
    <ul style={containerStyle}>
      {FILTER_LIST.map((item) => (
        <FilterItem key={item} name={item} onItemClick={() => {}}>
          {item}
        </FilterItem>
      ))}
    </ul>
  );
}

const containerStyle: CSSProperties = {
  margin: 0,
  width: '100vw',
  padding: '0 20px',

  display: 'flex',
  gap: 8,
};

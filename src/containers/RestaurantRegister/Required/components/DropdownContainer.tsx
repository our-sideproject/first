import { CSSProperties, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

export function DropdownContainer({ children }: Props) {
  return <div style={ContainerStyle}>{children}</div>;
}

const ContainerStyle: CSSProperties = {
  position: 'absolute',
  top: '100%',
  width: 'calc(100% - 80px)',

  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  borderRadius: 12,
  border: '1px solid #DCDEE2',
  padding: '12px 20px',
  margin: '8px 20px 0 20px',
  backgroundColor: 'white',
};

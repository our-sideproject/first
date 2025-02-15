import { CSSProperties, ComponentProps } from 'react';

interface Props extends ComponentProps<'div'> {
  title: string;
  location: string;
  distance: number;
}

export function DropdownItem({ title, location, distance, ...restProps }: Props) {
  return (
    <div style={ContainerStyle} {...restProps}>
      <span style={TitleStyle}>{title}</span>
      <div style={BottomContainer}>
        {location}
        <span style={Distance}>{distance}m</span>
      </div>
    </div>
  );
}

const ContainerStyle: CSSProperties = {};

const TitleStyle: CSSProperties = {
  color: '#212124',
  fontWeight: 700,
  fontSize: 16,
};

const BottomContainer: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  color: '#868B94',
  fontSize: 13,
};

const Distance: CSSProperties = {};

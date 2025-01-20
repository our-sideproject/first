import { CSSProperties } from 'react';
import { Logins } from './components/Logins';

export function Splash() {
  return (
    <div>
      <h1 style={headingStyle}>
        강남 직장인들은
        <br />
        점심시간에 뭘 먹을까?
      </h1>
      <Logins />
    </div>
  );
}

const headingStyle: CSSProperties = {
  fontSize: '24px',
  marginBottom: '32px',
};

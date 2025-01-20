'use client';

import { CSSProperties } from 'react';
import { SocialIconButton } from './SocialIconButton';
import { signIn } from 'next-auth/react';

export function Logins() {
  return (
    <div style={loginsStyle}>
      <SocialIconButton socialType="kakao" onClick={() => signIn('kakao')} />
    </div>
  );
}

const loginsStyle: CSSProperties = {
  display: 'flex',
  gap: '30px',
  justifyContent: 'center',
};

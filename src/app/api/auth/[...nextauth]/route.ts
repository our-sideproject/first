import { http } from '@/apis/http';
import NextAuth from 'next-auth';
import { NextAuthOptions, CallbacksOptions } from 'next-auth';
import kakaoProvider from 'next-auth/providers/kakao';

/**
 * @returns 로그인에 성공한 경우 true, 실패한 경우 false를 반환합니다.
 */
const socialLogin: CallbacksOptions['signIn'] = async ({ account }) => {
  const accessToken = account?.access_token;
  const provider = account?.provider;

  if (accessToken == null || provider == null) {
    return false
  }

  try {
    const { data, headers } = await http.post(
      `/v1/auth/oauth/social-login?provider=${provider}`,
      {},
      { headers: { social_access_token: accessToken } },
    );
    /**
     * @TODO
     * 정보 관리하는 방식 논의 후 처리하기.
     */
    console.log('@@ success --> ', { data, accessToken: headers.authorization, refreshToken: headers.refreshtoken });
    return true;
  } catch (error) {
    /**
     * @TODO
     * 로그인 실패 시 처리하기. 지금은 next-auth에서 지정해놓은 에러 리다이렉트 페이지로 가고 있음.
     */
    console.error(error);
    return false;
  }
};

const authOptions: NextAuthOptions = {
  providers: [
    kakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID as string,
      clientSecret: process.env.KAKAO_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    signIn: socialLogin,
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

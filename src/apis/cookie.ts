import { cookies } from 'next/headers';

const isProduction = process.env.NODE_ENV === 'production';
const ACCESS_TOKEN = 'access_token';

export class CookieManager {
  private cookieStore: ReturnType<typeof cookies>;

  constructor() {
    this.cookieStore = cookies();
  }

  getAccessToken() {
    return this.cookieStore.get(ACCESS_TOKEN)?.value;
  }

  setAccessToken(token: string) {
    this.cookieStore.set({
      name: ACCESS_TOKEN,
      value: token,
      httpOnly: true,
      secure: isProduction,
      sameSite: 'lax',
    });
  }
}

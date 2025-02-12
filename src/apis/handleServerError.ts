import { AxiosError } from 'axios';
import { NextResponse } from 'next/server';

/**
 * Route Handlers에서 예외처리 시 error 객체 처리를 위한 함수입니다.
 * - unknown으로 추론되는 error 객체 타입 가드
 * - status와 body 전달
 */
export const handleServerError = (error: unknown) => {
  if (isAxiosError(error)) {
    return NextResponse.json(
      {
        data: error.response?.data,
      },
      { status: error.response?.status },
    );
  }
  return NextResponse.json({ message: '알 수 없는 오류 발생' }, { status: 500 });
};

// AxiosError 타입 가드 함수
const isAxiosError = (error: unknown): error is AxiosError => {
  return (error as AxiosError)?.isAxiosError === true;
};

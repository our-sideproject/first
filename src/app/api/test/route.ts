import { handleServerError } from '@/apis/handleServerError';
import { http } from '@/apis/http';
import { NextResponse } from 'next/server';

export const GET = async () => {
  try {
    const response = await http.get('/v1/restaurants/1');
    return NextResponse.json(response);
  } catch (error) {
    return handleServerError(error);
  }
};

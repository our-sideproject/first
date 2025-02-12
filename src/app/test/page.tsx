'use client';

import axios from 'axios';
import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('/api/test');
        console.log('@@@ response, ', response);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return null;
}

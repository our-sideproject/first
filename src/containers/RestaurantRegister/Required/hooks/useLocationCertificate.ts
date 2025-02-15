import { useEffect, useState } from 'react';

export function useLocationCertificate() {
  const [certificated, setCertificated] = useState<boolean>();

  useEffect(() => {
    if ('geolocation' in navigator) {
      console.log('이 브라우저는 위치 정보 제공을 지원합니다.');

      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude, accuracy } = position.coords;
          console.log(`위도: ${latitude}, 경도: ${longitude}, 정확도: ${accuracy}미터`);
        },
        (error) => {
          setCertificated(false);
        },
        {
          enableHighAccuracy: true, // 정확도 우선 모드
          timeout: 10000, // 10초 이내에 응답 없으면 에러 발생
          maximumAge: 0, // 항상 최신 위치 정보 수집
        },
      );
    } else {
      setCertificated(false);
    }
  }, []);

  return { certificated };
}

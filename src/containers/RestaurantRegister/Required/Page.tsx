'use client';

import type { CSSProperties } from 'react';
import { useEffect, useState } from 'react';
import { Spacing } from '../../../components/Spacing';
import { DropdownContainer } from './components/DropdownContainer';
import { DUMMY_LIST } from '../../dummy';
import { DropdownItem } from './components/DropdownItem';
import { StatusSection } from './sections/StatusSection';
import { PriceSection } from '@/containers/RestaurantRegister/Required/sections/PriceSection';
import { CTA } from './components/CTA';
import { useRouter } from 'next/navigation';

export function RequiredPage() {
  const router = useRouter();
  const [focused, setFocused] = useState(false);
  const [name, setName] = useState<string>();
  const [selectedPrice, setSelectedPrice] = useState<string>();
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);

  return (
    <>
      {focused ? null : (
        <>
          <Spacing size={12} />
          <div style={TitleStyle}>{`??역 직장인\n닉네임님의 추천 맛집은..`}</div>
          <Spacing size={8} />
          <div style={SubtitleStyle}>회사 주변 Nm이내의 식당만 추천할 수 있어요</div>
        </>
      )}
      <Spacing size={76} />
      <div style={TextFieldContainerStyle}>
        <input
          value={name}
          style={TextFieldStyle}
          placeholder="추천하는 식당을 검색해주세요"
          onChange={(e) => setName(e.target.value)}
          onFocus={() => setFocused(true)}
        />
        {focused ? (
          <DropdownContainer>
            {DUMMY_LIST.map((item, index) => (
              <DropdownItem
                key={index}
                {...item}
                onClick={() => {
                  setFocused(false);
                  setName(item.title);
                }}
              />
            ))}
          </DropdownContainer>
        ) : null}
      </div>
      {name != null && name !== '' ? (
        <>
          <Spacing size={48} />
          <StatusSection
            selectedStatuses={selectedStatuses}
            onStatusClick={(status) => {
              if (selectedStatuses.includes(status)) {
                setSelectedStatuses((statuses) => statuses.filter((s) => status !== s));
              } else {
                setSelectedStatuses((statuses) => [...statuses, status]);
              }
            }}
          />
          <Spacing size={48} />
          <PriceSection selectedPrice={selectedPrice} onPriceClick={setSelectedPrice} />
          <CTA onCTAClick={() => router.push('/restaurant-register/optional')} />
        </>
      ) : null}
    </>
  );
}

const TitleStyle: CSSProperties = {
  margin: '0 20px',
  fontSize: 24,
  fontWeight: 700,
  whiteSpace: 'pre',
  lineHeight: '32.4px',
};

const SubtitleStyle: CSSProperties = {
  margin: '0 20px',
  fontSize: 14,
  color: '#868B94',
  lineHeight: '19.6px',
};

const TextFieldContainerStyle: CSSProperties = {
  position: 'relative',
};

const TextFieldStyle: CSSProperties = {
  fontSize: 16,
  display: 'block',
  padding: '20px',
  borderRadius: 12,
  backgroundColor: '#F2F3F6',
  border: 'none',
  margin: '0 20px',
  width: 'calc(100% - 40px)',
  outline: 'none',
};

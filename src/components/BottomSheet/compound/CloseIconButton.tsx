import { ButtonHTMLAttributes } from 'react';

export type BottomSheetCloseIconButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
export function BottomSheetCloseIconButton(props: BottomSheetCloseIconButtonProps) {
  return (
    <button {...props}>
      <CloseIcon />
    </button>
  );
}

// TODO: Icon 컴포넌트 공통화 필요
function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.75 5.25L5.25 18.75"
        stroke="#212124"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.75 18.75L5.25 5.25"
        stroke="#212124"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

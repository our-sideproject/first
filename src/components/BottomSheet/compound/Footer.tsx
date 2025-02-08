import clsx from 'clsx';
import { HTMLAttributes } from 'react';

export type BottomSheetFooterProps = HTMLAttributes<HTMLDivElement>;
export function BottomSheetFooter({ className, ...props }: BottomSheetFooterProps) {
  return (
    <footer
      className={clsx('fixed bottom-0 left-0 right-0 px-[20px] flex bg-white gap-[8px] pt-[12px] pb-[33px]', className)}
      {...props}
    />
  );
}

import clsx from 'clsx';
import { HTMLAttributes } from 'react';

export function BottomSheetHandleBar({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      aria-hidden
      className={clsx(
        'absolute w-[49px] h-[4px] rounded-[8px] bg-gray-300 top-[10px] left-1/2 transform -translate-x-1/2',
        className,
      )}
      {...props}
    />
  );
}

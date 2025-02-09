import clsx from 'clsx';
import { HTMLAttributes } from 'react';

export type BottomSheetBodyProps = HTMLAttributes<HTMLDivElement>;
export function BottomSheetBody({ className, ...props }: BottomSheetBodyProps) {
  return <div className={clsx('overflow-y-auto', className)} {...props} />;
}

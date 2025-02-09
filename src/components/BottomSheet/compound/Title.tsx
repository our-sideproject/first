import clsx from 'clsx';
import { HTMLAttributes } from 'react';
import { Drawer } from 'vaul';

export type BottomSheetTitleProps = HTMLAttributes<HTMLHeadingElement>;
export function BottomSheetTitle({ className, ...props }: BottomSheetTitleProps) {
  /**
   * @TODO 시맨틱 토큰 정의 후 갈아끼기
   */
  return <Drawer.Title className={clsx('text-[20px]/[28px] font-bold', className)} {...props} />;
}

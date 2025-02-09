'use client';

import { Drawer, DialogProps as RootProps } from 'vaul';
import { BottomSheetContent } from './compound/Content';
import { BottomSheetFooter, BottomSheetFooterProps } from './compound/Footer';
import { BottomSheetBody, BottomSheetBodyProps } from './compound/Body';
import { BottomSheetTitle, BottomSheetTitleProps } from './compound/Title';
import { BottomSheetTrigger, BottomSheetTriggerProps } from './compound/Trigger';

type BottomSheetRootProps = RootProps;
function BottomSheet({
  /**
   * open 상태가 되었을 때, Overlay에 `aria-hidden="true"`가 되지만 focus가 남아있어 에러가 발생합니다.
   * open 상태가 되었을 때 자동으로 focus를 받을 수 있도록 autoFocus를 기본적으로 true로 설정합니다.
   * https://github.com/emilkowalski/vaul/issues/517#issuecomment-2571619213
   */
  autoFocus = true,
  ...props
}: BottomSheetRootProps) {
  return <Drawer.Root autoFocus={autoFocus} {...props} />;
}
const BottomSheetClose = Drawer.Close;

export {
  BottomSheet,
  BottomSheetTrigger,
  BottomSheetContent,
  BottomSheetBody,
  BottomSheetFooter,
  BottomSheetTitle,
  BottomSheetClose,
};
export type {
  BottomSheetRootProps,
  BottomSheetTriggerProps,
  BottomSheetBodyProps,
  BottomSheetFooterProps,
  BottomSheetTitleProps,
};

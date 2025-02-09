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
   * open 상태가 되었을 때, Content 외 나머지 DOM을 hidden 처리합니다. (https://github.com/radix-ui/primitives/blob/main/packages/react/dialog/src/dialog.tsx#L262-L266)
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

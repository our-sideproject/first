'use client';

import { Drawer, DialogProps as RootProps } from 'vaul';
import { BottomSheetContent } from './compound/Content';
import { BottomSheetFooter, BottomSheetFooterProps } from './compound/Footer';
import { BottomSheetBody, BottomSheetBodyProps } from './compound/Body';
import { BottomSheetTitle, BottomSheetTitleProps } from './compound/Title';
import { BottomSheetTrigger, BottomSheetTriggerProps } from './compound/Trigger';

type BottomSheetRootProps = RootProps;
function BottomSheet({ autoFocus = true, ...props }: BottomSheetRootProps) {
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

import { Drawer, DialogProps as RootProps } from 'vaul';
import { BottomSheetContent } from './compound/Content';
import { BottomSheetBody, BottomSheetBodyProps } from './compound/Body';
import { BottomSheetFooter, BottomSheetFooterProps } from './compound/Footer';

type BottomSheetRootProps = RootProps;
const BottomSheet = Drawer.Root;

const BottomSheetTrigger = Drawer.Trigger;

export { BottomSheet, BottomSheetTrigger, BottomSheetContent, BottomSheetBody, BottomSheetFooter };
export type { BottomSheetRootProps, BottomSheetBodyProps, BottomSheetFooterProps };

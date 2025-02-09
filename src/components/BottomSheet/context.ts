import { buildContext } from '@toss/react';

interface BottomSheetContext {
  setOpen: (open: boolean) => void;
}
export const [BottomSheetContextProvider, useBottomSheetContext] = buildContext<BottomSheetContext>('BottomSheet');

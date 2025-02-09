import { Drawer, DialogProps as RootProps } from 'vaul';
import { BottomSheetContent } from './compound/Content';
import { BottomSheetFooter, BottomSheetFooterProps } from './compound/Footer';
import { useControllableState } from '@radix-ui/react-use-controllable-state';
import { BottomSheetContextProvider } from './context';
import { BottomSheetBody, BottomSheetBodyProps } from './compound/Body';

type BottomSheetRootProps = RootProps;
function BottomSheet({ open: openFromProps, defaultOpen, onOpenChange, ...props }: BottomSheetRootProps) {
  const [open, setOpen] = useControllableState({
    prop: openFromProps,
    defaultProp: defaultOpen,
    onChange: onOpenChange,
  });

  return (
    <BottomSheetContextProvider setOpen={setOpen}>
      <Drawer.Root open={open} onOpenChange={setOpen} {...props} />
    </BottomSheetContextProvider>
  );
}

const BottomSheetTrigger = Drawer.Trigger;

export { BottomSheet, BottomSheetTrigger, BottomSheetContent, BottomSheetBody, BottomSheetFooter };
export type { BottomSheetRootProps, BottomSheetBodyProps, BottomSheetFooterProps };

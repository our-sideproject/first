import clsx from 'clsx';
import { ContentProps, Drawer } from 'vaul';
import { BottomSheetHandleBar } from './HandleBar';
import { BottomSheetCloseIconButton } from './CloseIconButton';
import { ReactNode } from 'react';

export interface BottomSheetContentProps extends ContentProps {
  handleBar?: boolean;
  handleClose?: boolean | ReactNode;
}

export function BottomSheetContent({
  className,
  handleBar = true,
  handleClose = false,
  children,
  ...props
}: BottomSheetContentProps) {
  const isDefualtCloseButton = handleClose === true;

  return (
    <Drawer.Portal>
      <Drawer.Overlay className="fixed inset-0 bg-black/40" />
      <Drawer.Content
        className={clsx(
          'flex flex-col fixed bottom-0 left-0 right-0 bg-white rounded-t-[24px] pt-[38px] px-[20px] max-h-[calc(100vh-10%)]',
          className,
        )}
        {...props}>
        {handleBar && <BottomSheetHandleBar />}
        {handleClose && (
          <span className="absolute top-[24px] right-[24px] cursor-pointer">
            <Drawer.Close>{isDefualtCloseButton ? <BottomSheetCloseIconButton /> : handleClose}</Drawer.Close>
          </span>
        )}
        {children}
      </Drawer.Content>
    </Drawer.Portal>
  );
}

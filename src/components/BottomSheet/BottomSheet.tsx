import { Drawer, DialogProps as RootProps, ContentProps } from 'vaul';
import clsx from 'clsx';
import { HTMLAttributes } from 'react';

export type BottomSheetRootProps = RootProps;

export type BottomSheetContentProps = ContentProps;
function BottomSheetContent({ className, children, ...props }: BottomSheetContentProps) {
  return (
    <Drawer.Portal>
      <Drawer.Overlay className="fixed inset-0 bg-black/40" />
      <Drawer.Content
        className={clsx(
          'flex flex-col fixed bottom-0 left-0 right-0 bg-white rounded-t-[24px] pt-[38px] px-[20px] max-h-[calc(100vh-10%)]',
          className,
        )}
        {...props}>
        <div
          aria-hidden
          className="absolute w-[49px] h-[4px] rounded-[8px] bg-gray-300 top-[10px] left-1/2 transform -translate-x-1/2"
        />
        {children}
      </Drawer.Content>
    </Drawer.Portal>
  );
}

export type BottomSheetBodyProps = HTMLAttributes<HTMLDivElement>;
function BottomSheetBody({ className, ...props }: BottomSheetBodyProps) {
  return <div className={clsx('overflow-y-auto', className)} {...props} />;
}

export type BottomSheetFooterProps = HTMLAttributes<HTMLDivElement>;
function BottomSheetFooter({ className, ...props }: BottomSheetFooterProps) {
  return (
    <footer
      className={clsx('fixed bottom-0 left-0 right-0 px-[20px] flex bg-white gap-[8px] pt-[12px] pb-[33px]', className)}
      {...props}
    />
  );
}

export const BottomSheet = {
  Root: Drawer.Root,
  Trigger: Drawer.Trigger,
  Content: BottomSheetContent,
  Body: BottomSheetBody,
  Footer: BottomSheetFooter,
};

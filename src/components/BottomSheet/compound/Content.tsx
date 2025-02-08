import clsx from 'clsx';
import { ContentProps, Drawer } from 'vaul';

export type BottomSheetContentProps = ContentProps;
export function BottomSheetContent({ className, children, ...props }: BottomSheetContentProps) {
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

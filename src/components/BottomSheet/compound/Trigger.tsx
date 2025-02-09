import { ComponentPropsWithoutRef } from 'react';
import { Drawer } from 'vaul';

export type BottomSheetTriggerProps = ComponentPropsWithoutRef<typeof Drawer.Trigger>;
export function BottomSheetTrigger({ asChild = true, ...props }: BottomSheetTriggerProps) {
  return <Drawer.Trigger asChild={asChild} {...props} />;
}

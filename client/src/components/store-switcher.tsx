"use client";

import { Store } from "@prisma/client";

import { PopoverTrigger } from "./ui/popover";

type PopoverTriggerProps = React.ComponentPropsWithoutRef<
  typeof PopoverTrigger
>;

interface StoreSwitcherProps extends PopoverTriggerProps {
  items: Store[];
}

export default function StoreSwticher({
  className,
  items = [],
}: StoreSwitcherProps) {
  return (
    <div>
      <div>Store Switcher!</div>
    </div>
  );
}

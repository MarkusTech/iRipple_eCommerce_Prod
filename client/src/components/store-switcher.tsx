"use client";

import { Store } from "@prisma/client";
import { useParams, useRouter } from "next/navigation";

import { PopoverTrigger } from "./ui/popover";
import { useStoreModal } from "../../hooks/use-store-modal";

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
  const storeModal = useStoreModal();
  const params = useParams();
  const router = useRouter();

  const formattedItems = items.map((item) => ({
    label: item.name,
    value: item.id,
  }));

  return (
    <div>
      <div>Store Switcher!</div>
    </div>
  );
}

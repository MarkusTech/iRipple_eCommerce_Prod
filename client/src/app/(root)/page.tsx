"use clien";

import { Modal } from "@/components/ui/modal";
import { UserButton } from "@clerk/nextjs";

const SetupPage = () => {
  return (
    <div className="p-4">
      <UserButton />
      Root Page
    </div>
  );
};

export default SetupPage;

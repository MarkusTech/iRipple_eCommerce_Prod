import { UserButton } from "@clerk/nextjs";

import { MainNav } from "./main-nav";
import StoreSwticher from "./store-switcher";

const Navbar = () => {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <StoreSwticher />
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4 ">
          <UserButton
            afterSignOutUrl="/client
          "
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

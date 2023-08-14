import { Button } from "@/design-system";
import { MobileSidebar } from "./navbar-mobile";

const Navbar = async () => {
  return (
    <div className="flex items-center p-4">
      <MobileSidebar />
      <div className="flex w-full justify-end">
        <Button variant={"outline"}>Logout</Button>
      </div>
    </div>
  );
};

export default Navbar;

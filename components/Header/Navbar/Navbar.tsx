import Logo from "../Logo/Logo";
import NavbarCTA from "./NavbarCTA";
import NavbarLinks from "./NavbarLinks";

export default function Navbar() {
  return (
    <div className="flex flex-row justify-center items-center w-full py-6">
      <div className="max-w-[1024px] w-full">
        <div className="flex flex-row justify-center items-center">
          <Logo size="h-[60px] w-[60px]" withText />
        </div>
      </div>
    </div>
  );
}

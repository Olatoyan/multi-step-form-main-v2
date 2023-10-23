import SiderbarList from "./SiderbarList";

function Sidebar() {
  return (
    <nav className=" flex flex-col gap-12 bg-[url(/bg-sidebar-desktop.svg)] py-16 px-14 h-[56.8rem] mid:bg-[url(/bg-sidebar-mobile.svg)] mid:flex-row mid:justify-center mid:h-[17.2rem] mid:bg-center mid:bg-no-repeat sma:py-12 sma:items-baseline">
      <SiderbarList num={1} text="your info" />
      <SiderbarList num={2} text="select plan" />
      <SiderbarList num={3} text="add-ons" />
      <SiderbarList num={4} text="summary" />
    </nav>
  );
}

export default Sidebar;

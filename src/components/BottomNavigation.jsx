import { useLocation } from 'react-router-dom';
import NavLink from "./NavLink";
import HomeIcon from "../assets/House.svg";
import HomeIconBold from "../assets/HouseBold.svg";
import ProgramsIcon from "../assets/Dumbbell.svg";
import ProgramsIconBold from "../assets/DumbbellBold.svg";
import ProfileIcon from "../assets/Profile.svg";
import ProfileIconBold from "../assets/ProfileBold.svg";

function BottomNavigation() {
  const location = useLocation();

  return (
    <nav className="h-16 bg-black rounded-t-3xl flex justify-around fixed bottom-0 w-full items-center">
      <NavLink to="/">
        <img src={location.pathname === '/' ? HomeIconBold : HomeIcon} alt="" />
      </NavLink>
      <NavLink to="/programs">
        <img src={location.pathname === '/programs' ? ProgramsIconBold : ProgramsIcon} alt="" />
      </NavLink>
      <NavLink to="/profil">
        <img src={location.pathname === '/profil' ? ProfileIconBold : ProfileIcon} alt="" />
      </NavLink>
    </nav>
  );
}

export default BottomNavigation;

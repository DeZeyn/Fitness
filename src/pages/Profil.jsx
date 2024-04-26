import { users } from "../pages/Home";
import { useLocation } from "react-router-dom";

import { useQuery, gql } from "@apollo/client";
import BottomNavigation from "../components/BottomNavigation";

function Profil() {
  return (
    <div>
      <div>
        <h1>Profil</h1>
        <h2>{users[0].name}</h2>
      </div>
      <BottomNavigation />
    </div>
  );
}

export default Profil;

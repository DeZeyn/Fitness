import users from "../helpers/Users";
import { useLocation } from "react-router-dom";

import { useQuery, gql } from "@apollo/client";
import BottomNavigation from "../components/BottomNavigation";

function Profil() {
  return (
    <div>
      <div>
        <h2 className="text-lg font-bold">{users[0].name}</h2>
      </div>
      <BottomNavigation />
    </div>
  );
}

export default Profil;

import { useLocation, useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

import NavLink from "../components/NavLink";
import BottomNavigation from "../components/BottomNavigation";
import { GET_PROGRAM } from "../helpers/GraphqlOperations";

function Program() {
  const location = useLocation();
  const params = useParams();

  const programId = params.id;

  const { loading, error, data } = useQuery(GET_PROGRAM, {
    variables: { id: programId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  console.log(data);

  const { program } = data;

  return (
    <>
      <div className="App">
        <div>{program.name}</div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/programs">Programs</NavLink>
      </div>
      <BottomNavigation />
    </>
  );
}

export default Program;

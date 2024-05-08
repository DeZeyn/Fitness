import { useQuery, gql } from "@apollo/client";

import NavLink from "../components/NavLink";
import BottomNavigation from "../components/BottomNavigation";

import Box from "../components/Box";
import { GET_PROGRAMS } from "../helpers/GraphqlOperations";

function Programs() {
  const { loading, error, data } = useQuery(GET_PROGRAMS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  console.log(data);

  const { programs } = data;

  return (
    <>
      <div className="App">
        <h2>Browse</h2>
        {programs.map((program) => (
          <Box key={program.id}>
            <a href={`/program/${program.id}`}>{program.name}</a>
          </Box>
        ))}
      </div>
      <BottomNavigation />
    </>
  );
}

export default Programs;

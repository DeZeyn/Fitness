import { useQuery, gql } from "@apollo/client";

import NavLink from "../components/NavLink";
import BottomNavigation from "../components/BottomNavigation";

const GET_PROGRAMS = gql`
  query GetPrograms {
    programs {
      id
      name
      duration
      workoutsWithDay {
        day
        workout {
          name
        }
      }
    }
  }
`;

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
          <div key={program.id}>
            <a href={`/program/${program.id}`}>{program.name}</a>
          </div>
        ))}

      </div>
      <BottomNavigation />
    </>
  );
}

export default Programs;

import { useEffect, useRef } from "react";

import "../App.css";
import { useQuery } from "@apollo/client";

import Hallo from "../components/Hallo";
import woman from "../assets/Homelogo.svg";
import Box from "../components/Box";

import BottomNavigation from "../components/BottomNavigation";
import users from "../helpers/Users";
import { GET_FIRST_PROGRAM } from "../helpers/GraphqlOperations";

function Home() {
  const imgRef = useRef(null);
  const { loading, error, data } = useQuery(GET_FIRST_PROGRAM);

  useEffect(() => {
    console.log(imgRef?.current?.offsetLeft);
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { programs } = data;
  const firstProgram = programs[0];

  return (
    <>
      <Hallo name={users[0].name} />
      <div>
        <img
          className="flex justify-center my-7 w-72 h-60 mx-auto"
          src={woman}
          alt=""
        />
      </div>
      <h2 className="ml-5 mt-8 font-bold text-lg">Dein Workout heute</h2>

      <Box>
        <a href={`/program/${firstProgram.id}`}>{firstProgram.name}</a>
      </Box>

      <BottomNavigation />
    </>
  );
}

export default Home;

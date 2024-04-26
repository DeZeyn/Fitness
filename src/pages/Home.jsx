import { useEffect, useRef, useState, useContext } from "react";
import NavLink from "../components/NavLink";
import logo from "../logo.svg";
import "../App.css";
import Button from "../components/Button";
import { ThemeContext } from "../main";
import Header from "../components/Header";
import Hallo from "../components/Hallo";
import woman from "../assets/Homelogo.svg";
import Box from "../components/Box";
import HomeIcon from "../assets/House.svg";
import ProgramsIcon from "../assets/Dumbbell.svg";
import ProfileIcon from "../assets/Profile.svg";
import { useQuery, gql } from "@apollo/client";
import BottomNavigation from "../components/BottomNavigation";

const GET_FIRST_PROGRAM = gql`
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

export const users = [
  {
    id: 0,
    name: "Phillip",
  },
];


function App() {
  const [count, setCount] = useState(0);
  // const countState = useState(0);
  // const count = countState[0];
  // const setCount = countState[1];
  const imgRef = useRef(null);

  const { loading, error, data } = useQuery(GET_FIRST_PROGRAM);

  useEffect(() => {
    console.log(imgRef?.current?.offsetLeft);
  }, []);

  const theme = useContext(ThemeContext);

  console.log(theme);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const { programs } = data;
  const firstProgram = programs[0];

  // if (count > 5) {
  //   return <div>Count is too high</div>;
  // }

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
      <h2 className="ml-5 mt-8 font-bold text-2xl">Dein Workout heute</h2>

      <Box className="bg-blue-500 text-white">
        <a href={`/program/${firstProgram.id}`}>{firstProgram.name}</a>
      </Box>

      <BottomNavigation />

      {/* <Button /> */}

      {/* <p className="text-fitness-color-dark">
        Edit <code>Home.jsx</code> and save to test HMR updates.
      </p>
      {products.map((product, i) => (
        <div key={`product-${i}`}>{product.productName}</div>
      ))} */}
    </>
  );
}

export default App;

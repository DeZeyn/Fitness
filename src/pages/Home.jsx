import { useEffect, useRef, useState, useContext } from "react";
import NavLink from "../components/NavLink";
import logo from "../logo.svg";
import "../App.css";
import Button from "../components/Button";
import { ThemeContext } from "../main";
import Header from "../components/Header";
import Hallo from "../components/Hallo";
import woman from "../assets/Homelogo.svg";

const users = [
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

  useEffect(() => {
    console.log(imgRef?.current?.offsetLeft);
  }, []);

  const theme = useContext(ThemeContext);

  console.log(theme);

  // if (count > 5) {
  //   return <div>Count is too high</div>;
  // }

  return (
    <>
      <h1 className="ml-5 mt-8 font-bold text-4xl ">Hi Phillip!</h1>
      <div>
        <img
          className="flex justify-center my-7 w-72 h-60 mx-auto"
          src={woman}
          alt=""
        />
      </div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/programs">Programs</NavLink>
      <NavLink to="/profil">Profil</NavLink>

      <Button />

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

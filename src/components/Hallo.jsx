import React from "react";

function Hallo({ name }) {
  return <h1 className="ml-5 mt-8 font-bold text-4xl ">Hi {name}!</h1>;
}

export default Hallo;
// class Hallo extends React.Component {
//   render() {
//     return (
//       <h1 className="ml-5 mt-8 font-bold text-4xl ">Hi {this.props.name}!</h1>
//     );
//   }
// }

// Hallo.defaultProps = {
//   name: "Name",
// };

// export default Hallo;

// // import React from 'react'
// // import Counter from './counter'
// // import Home from './home'
// // import Data from './data'
// // import Hero from './Hero'
// // import Conditional from './Conditional'
// // import Events from './Events'
// // import Cards from './cards'
// // import ProductList from './lifecyclemethods'
// // import ProductLists2 from './UseEffect'
// // import Components from './controllerAndUncontrolled'
// // import ControlledComponent from './ControlledComponent'
// // import Child from './Child'
// // import Parent2 from './Parent2'
// // import Parent from './Parent'
// // import Hooks from './hooks'
// // import MemoCallbackExample from './Optimization'
// // import Routing from './Routing'

// import { Link } from "react-router-dom";
// import Routing from "./Routing";

// // const App = () => {
// //   return (
// //     <>
// //       {/* <Counter /> */}
// //       {/* {Counter()} */}
// //        {/* <Home/> */}
// //          {/* <Data/> */}
// //          {/* <Hero name = "arham"/> */}
// //          {/* <Conditional name = "arham"/> */}
// //           {/* <Events/> */}
// //           {/* <Cards/> */}
// //           {/* <ProductList/> */}
// //           {/* <ProductLists2/> */}
// //           {/* <Components/> */}
// //           {/* <ControlledComponent/> */}
// //           {/* <Child/> */}
// //           {/* <Parent2/> */}
// //            {/* <Parent  name = "syed samad ali"/> */}
// //            {/* <Child/> */}
// //            {/* <Hooks/> */}
// //            {/* <MemoCallbackExample/> */}
// //              <Routing/>

// //     </>
// //   )

//  export default App  






// import { Link } from "react-router-dom";
// import Routing from "./Routing";

// const App = () => {
//   return (
//     <>
//       <nav style={{ padding: "1rem", background: "#f5f5f5" }}>
//         <ul style={{ display: "flex", listStyle: "none", gap: "1rem", padding: 0, margin: 0 }}>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/contact">Contact</Link></li>
//           <li><Link to="/users">Users</Link></li>
//         </ul>
//       </nav>

//       <Routing />
//     </>
//   );
// };

// export default App;


import { NavLink } from "react-router-dom";
import Routing from "./Routing";

const App = () => {
  return (
    <>
      <nav style={{ padding: "1rem", background: "#f1f1f1" }}>
        <ul style={{ display: "flex", listStyle: "none", gap: "1rem", padding: 0, margin: 0 }}>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                textDecoration: "none",
                padding: "0.5rem 1rem",
                color: isActive ? "white" : "#333",
                backgroundColor: isActive ? "#007bff" : "transparent",
                borderRadius: "5px",
              })}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              style={({ isActive }) => ({
                textDecoration: "none",
                padding: "0.5rem 1rem",
                color: isActive ? "white" : "#333",
                backgroundColor: isActive ? "#007bff" : "transparent",
                borderRadius: "5px",
              })}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              style={({ isActive }) => ({
                textDecoration: "none",
                padding: "0.5rem 1rem",
                color: isActive ? "white" : "#333",
                backgroundColor: isActive ? "#007bff" : "transparent",
                borderRadius: "5px",
              })}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/users"
              style={({ isActive }) => ({
                textDecoration: "none",
                padding: "0.5rem 1rem",
                color: isActive ? "white" : "#333",
                backgroundColor: isActive ? "#007bff" : "transparent",
                borderRadius: "5px",
              })}
            >
              Users
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routing />
    </>
  );
};

export default App;

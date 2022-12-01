// import React from "react";
// import Name from "./components/Name";

// function App() {
//   let name = "Sourabh";
//   let age = 24;
//   let methodtochild = (data) => {
//     console.log(data);
//   };
// // // if else-->
//   // if (age >= 24) {
//   //   return <Name name={name} age={age} methodFromParent={methodtochild} />;
//   // } else {
//   //   return <h1>not eligible</h1>;
//   // }

//   return (
//     <div>
// {/* ternary--> */}
//      {age>=24? <Name name={name} age={age} methodFromParent={methodtochild} />:<h1>not eligible</h1>}

//      {/* logical--> */}
//      {/* {age>=24 && <Name name={name} age={age} methodFromParent={methodtochild} />} */}
//     </div>
//   );
// }

// export default App;

//   let students = [
//     {
//       name: "sourabh",
//       age: 24,
//     },
//     {
//       name: "sourabh",
//       age: 24,
//     },
//     {
//       name: "sourabh",
//       age: 24,
//     },
//     {
//       name: "sourabh",
//       age: 24,
//     }
//   ];
//   return <div>
/////{/* <State/> */}
//     {students.map((std,index)=>{
//       return <Students key={index} std={std}/>
//     })}

//   </div>;
// }

//-------------------
// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
// import Tooltip from 'react-bootstrap/Tooltip';
// import Button from 'react-bootstrap/Button';
// import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

// export default function App() {
//   return (
//     <div style={{ display: 'block', width: 700, padding: 30 }}>
//       <h4>React-Bootstrap Tooltip Component</h4>
//       <OverlayTrigger
//         delay={{ hide: 450, show: 300 }}
//         overlay={(props) => (
//           <Tooltip {...props}>
//             Hii, I am a simple tooltip information!!!
//           </Tooltip>
//         )}
//         placement="bottom"
//       ><Button variant="warning">Tooltip Button</Button>
//       </OverlayTrigger>,
//     </div>
//   );
// }
//--------------------------------------------------
// import React from "react";
// import { createContext } from "react";
// import CompA from "./components/CompA";
// // import State from './components/State'
// export let createName = createContext();
// export let createAge = createContext();

// function App() {
//   return (
//     <div>
//       <createName.Provider value={"sourabh"}>
//         <createAge.Provider value={24}>
//           <CompA />
//         </createAge.Provider>
//       </createName.Provider>
//     </div>
//   );
// }

// export default App;
//--------------------------------------------------

// import React, { Component } from 'react'
// import ControlledComponents from './components/ControlledComponents'

// export default class App extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {

//     }
//   }
//   render() {
//     return (
//       <div>
//         <ControlledComponents/>

//       </div>
//     )
//   }
// }
//--------------------------------------------------

// import React from "react";
// import { Route, Routes, useNavigate } from "react-router-dom";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Help from "./components/Help";
// import Home from "./components/Home";
// import Jeans from "./components/Jeans";
// import Navbar from "./components/Navbar";
// import PageNotFound from "./components/PageNotFound";
// import Products from "./components/Products";
// import Shirts from "./components/Shirts";
// import Users from "./components/Users";
// import UserWithId from "./UserWithId";
// import File from "./components/File";
// function App() {
//   let nevigation = useNavigate();
//   let navigationHandler = () => {
//     nevigation("/about");
//   };
//   let navigationTo = (url) => {
//     nevigation(url);
//   };

//   let conditionalNavigation = () => {
//     let url = "about";
//     url === "about" ? nevigation("/about") : nevigation("/");
//   };
//   let goBack = () => {
//     nevigation(-1);
//   };
//   return (
//     <div>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/products" element={<Products />}>
//           <Route index element={<Shirts />} />
//           <Route path="shirts" element={<Shirts />} />
//           <Route path="jeans" element={<Jeans />} />
//         </Route>
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/help" element={<Help />} />
//         <Route path="/users" element={<Users />}>
//           <Route path=":id" element={<UserWithId />} />
//           <Route path="file" element={<File/>} />
//         </Route>

//         <Route path="*" element={<PageNotFound />} />
//       </Routes>
//       <button onClick={() => nevigation("/help")}>Help</button>
//       <button onClick={() => navigationHandler()}>About</button>
//       <button onClick={() => navigationTo("/contact")}>Contact</button>
//       <button onClick={() => navigationTo("/")}>Home</button>
//       <button onClick={() => conditionalNavigation()}>Conditional</button>
//       <button onClick={() => goBack()}>Back</button>
//     </div>
//   );
// }

// export default App;
//--------------------------------------------------
// import React, { Component } from 'react'
// import { createRef } from "react";

// export default class App extends Component {
//   constructor(props) {
//     super(props)
//   this.myRef=createRef()
//   }
//   componentDidMount(){
//     console.log(this.myRef.current)
//   }
//   clickHandler=()=>{
//     this.myRef.current.hidden=true

//   }
//   render() {
//     return (
//       <div>
//         <h1 ref={this.myRef}>Hello referance</h1>
//         <button onClick={this.clickHandler}>align</button>
//       </div>
//     )
//   }
// }

// //--------------------------------------------------
// import React from 'react'

// function App() {
//   return (
//     <div>
//       <img src={"images/rock.png"}/>
//     </div>
//   )
// }

// export default App
// //--------------------------------------------------
// import React from 'react'
// import Validation from "./components/Validation";

// function App() {
//   return (
//     <div>
//       <Validation/>
//     </div>
//   )
// }

// export default App
//--------------------------------------------------
// import React from 'react'
// // import FormikForm from './components/FormikForm';
// import FormikFormComponent from './components/FormikFormComponent';

// function App() {
//   return (
//     <div>
//       {/* <FormikForm /> */}
//       <FormikFormComponent/>
//     </div>
//   )
// }

// export default App
//--------------------------------------------------------

// import React from 'react'
// import TableWithSearch from './TableWithSearch'

// function App() {
//   return (
//     <div>
//       <TableWithSearch/>
//     </div>
//   )
// }

// export default App

//----------------------------------------------------
// import React, { useReducer } from "react";

// // Defining the initial state and the reducer
// const initialState = 0;
// const reducer = (state, action) => {
// switch (action) {
// 	case "add":
// 	return state + 1;
// 	case "subtract":
// 	return state - 1;
// 	case "reset":
// 	return 0;
// 	default:
// 	throw new Error("Unexpected action");
// }
// };

// const App = () => {
// 	// Initialising useReducer hook
// const [count, dispatch] = useReducer(reducer, initialState);
// return (
// 	<div>
// 	<h2>{count}</h2>
// 	<button onClick={() => dispatch("add")}>
// 		add
// 	</button>
// 	<button onClick={() => dispatch("subtract")}>
// 		subtract
// 	</button>
// 	<button onClick={() => dispatch("reset")}>
// 		reset
// 	</button>
// 	</div>
// );
// };

// export default App;
//----------------------------------------------------
// import React, { useEffect, useState } from "react";

// const App = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch("http://localhost:8000/api/property");
//       const newData = await response.json();
//       setData(newData);
//     };

//     fetchData();
//   }, []);
//   console.log(data);
//   return <div>Hello world</div>;
// };

// export default App;
//-----------------------------------------------------------------
// import React from 'react'
// // import BasicExample from './BasicExample'
// // import "./App.css"
// // import Edit from './realEstate/Edit'
// import Form from './realEstate/Form'

// function App() {
//   return (
//     <div>
//       <Form />
   

//     </div>
//   )
// }
// export default App

//-------------------------------------------------------------------------------------
// import React, { useEffect, useState } from 'react'

// function App() {
//   const [user, setUser]=useState([])
//   useEffect(() => { // Pass in a callback function!
//     fetch('/api/property')
//       .then(results => results.json())
//       .then(data => {
//         setUser(data);
//     });
//   }, [])
//   console.log(user)
//   return (
//     <div>
//       <h1>fetch Api</h1>
//     </div>
//   )
// }

// export default App


import React from 'react'
import MainPage from './realEstate/MainPage'

function App() {
  return (
    <div>
      <MainPage/>
    </div>
  )
}

export default App

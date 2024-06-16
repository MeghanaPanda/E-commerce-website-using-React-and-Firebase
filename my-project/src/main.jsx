// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import Eventpage from './container/Eventpage/Eventpagecomp.jsx'
// import Updates from './container/Updates/updates.jsx'
// import UpdatesRow from './container/Updates/UpdatesRow.jsx'
// import Formdonate from './container/Donationpage/Formdonate.jsx'
// import Chatbot from './container/Chatbot/Chatbot.jsx'


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//   <Formdonate/>
//   </React.StrictMode>,
// )

// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import "./index.css";

// import { ThemeProvider } from "@material-tailwind/react";
// import { store } from "./redux/store";
// import { Provider } from "react-redux";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <ThemeProvider>
//         <App />
//       </ThemeProvider>
//     </Provider>
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { ThemeProvider } from "@material-tailwind/react";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import MyState from "./context/myState"; // Import MyState context provider

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <MyState> {/* Wrap the App with MyState */}
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </MyState>
    </Provider>
  </React.StrictMode>
);

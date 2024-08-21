import React, { useLayoutEffect, useState } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const Base_Url = process.env.REACT_APP_BASE_URL;
  const [data, setData] = useState([]);
  const getTexts = async () => {
    try {
      const response = await axios.get(`${Base_Url}/api/texts`);
      setData(response.data.selectedTexts);
    } catch (error) {
      console.log(error);
    }
  };
  useLayoutEffect(() => {
    getTexts();
  }, []);
  return (
    <div className="container">
      <header className="">Selected texts</header>
      <body>
        {data.length > 0 ? (
          data.map((item, index) => (
            <div key={index}>
              {index + 1}. {item.text}
            </div>
          ))
        ) : (
          <div>No Data Available</div>
        )}
      </body>
    </div>
  );
}

export default App;

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Menu from "./components/Menu/Menu";
import { useContext } from "react";
import { DataCenter } from "./DataFile";
import User from "./components/User/User";
import DateUser from "./DateUser";

function App() {
  const { counter } = useContext(DataCenter);

  return (
    <div className="App">
      {counter ? (
        <Menu />
      ) : (
        <DateUser>
          <User />
        </DateUser>
      )}
    </div>
  );
}

export default App;

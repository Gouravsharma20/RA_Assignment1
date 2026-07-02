import "./styles.css";

import Counter from "./Counter";
import ToggleSwitch from "./Toggle";
import UserList from "./UserList.jsx";
import LoggerComponent from "./LoggerComponent.jsx";
import LocalStorageComponent from "./LocalStorageComponent.jsx";

export default function App() {
  return (
    <div className="App">
      <Counter />
      <ToggleSwitch />
      <UserList />
      <LoggerComponent />
      <LocalStorageComponent />
    </div>
  );
}

import "./App.css";
import Dropdown from "./components/Dropdown";

const items = [
  { text: "Profile Information", link: "#" },
  { text: "Change Password", link: "#" },
  { text: "Become PRO", link: "#" },
  { text: "Help", link: "#" },
  { text: "Log Out", link: "#" },
];

function App() {
  return <Dropdown text="Account Settings" items={items} />;
}

export default App;

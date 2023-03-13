import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { TextForm } from "./components/TextForm/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About" />
      <TextForm />
    </>
  );
}

export default App;

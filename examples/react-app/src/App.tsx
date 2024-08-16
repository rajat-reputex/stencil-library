import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ReputexWidget } from "reputex-react-widget";

// defineCustomElements();

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <ReputexWidget
        visibility
        userAddress="0x570999eEa85adF6957f68125eF77967c208A1095"
        apiAccessKey="019c383a-9ad6-4b68-8226-44d01cd0ff20"
        apiSecretKey="b2bb63b277b5485e927b0d5538f6bd52871522f8162fa71bfd18de54d83e620e"
        mode
      ></ReputexWidget>
    </>
  );
}

export default App;

import Search from "./component/Search";
import "./app.scss";
import Button from "./component/Button";

function App() {
  return (
    <div className="App">
      Snap Shot
      <Search type="text" placeholder={" Search... "} />
      <Button />
    </div>
  );
}

export default App;

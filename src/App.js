import Search from "./component/Search";
import "./app.scss";
import Button from "./component/Button";
import Photos from "./component/Photos";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [clientId, setClientId] = useState("vdMCMy81m5Q2qYIl2mnIVOVT-EUf2fQprJaowdA4mS4");
  const [search, setSearch]=useState(""); 
  const url = "https://api.unsplash.com/search/photos?page=1&query="+search+"&client_id="+clientId;
  const [listPhoto, setListPhoto] = useState([]);


  const getDAta = async () => {
    const res = await axios.get(url);
    setListPhoto(res.data.results);
  };

  useEffect(() =>{
    getDAta();
  }, [search]);
 
  const searchButon = (item) =>{
    setSearch(item);
  };

  const buttonItem = (item) => {
    setSearch(item);
  };

  return (
    <div className="App">
      Snap Shot
      <Search type="text" placeholder={" Search... "}  searchButon={searchButon}/>
      <Button selection={buttonItem} />
      <Photos list={listPhoto} />
    </div>
  );
}

export default App;

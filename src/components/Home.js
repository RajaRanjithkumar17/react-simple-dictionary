import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [useapi, setapi] = useState([]);
  const [useap, setap] = useState("");
  const navigate = useNavigate;



  const fetchapi = async () => {

   
    const options =  {
      method: "POST",
      url: "https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary",
      params: { word: useap},
      headers: {
        "X-RapidAPI-Key": "25bc195a52mshba1dfba3efada84p16d526jsn59e664998ced",
        "X-RapidAPI-Host": "dictionary-by-api-ninjas.p.rapidapi.com",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setapi(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchapi();
  },[]);


  const handelsearch = (val)=>{
    if(val.target.name==="searc"){
        setap(val.target.value)
    }
    fetchapi();
  }

  console.log(useapi,useap);


  const navigatetoredux = ()=>{
    navigate("reduxpractice")
  }



  return (
  <div>

    <button onChange={navigatetoredux}>Redux</button>
    <input value={useap} name="searc" onChange={handelsearch} type={"text"}/>

   
            <div>
                <p>{useapi.word}</p>
                <p>{useapi.definition}</p>
            </div>
      
   
  </div>
)
  
};

export default Home;

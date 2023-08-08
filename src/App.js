
import Carousal from "./Components/Carousal/Carousal";
import FirstSection from "./Components/FirstSection/FirstSection";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import "./app.scss"
import data from "./Data.js"
import { useState } from "react";
import ThreeBlockBanner from "./Components/ThreeBlockBanner/ThreeBlockBanner";

function App() {

  const[filteredData,setFilteredData]=useState(data[0].products);

  function featuredFilter()
  {
     data.map((item,ind)=>{

          if(item.type=="featured")
          {
              setFilteredData(item.products)
          }
     })


  }

  function latestFilter()
  {
    data.map((item,ind)=>{

      if(item.type=="Latest")
      {
          setFilteredData(item.products)
      }
 })
  }

  function bestSellerFilter()
  {
    data.map((item,ind)=>{

      if(item.type=="bestseller")
      {
          setFilteredData(item.products)
      }
 })
  }

  console.log(filteredData)


  return (
    <div className="App">
       <Header></Header>
       
          <Navbar></Navbar>
          <FirstSection></FirstSection> 
          <div className="filternames">
                <div className="menu" onClick={()=>{featuredFilter()}}>
                  FEATURED 
                </div>
                <div>
                  |
                </div>
                <div  className="menu" onClick={()=>{latestFilter()}}>
                  LATEST
                </div>
                <div>
                  |
                </div>
                <div  className="menu" onClick={()=>{bestSellerFilter()}}>
                  BEST SELLER
                </div>
              </div>

            <div className="carousalContainer">
             
            <Carousal data={filteredData}></Carousal>
            </div>

            <div>
              <ThreeBlockBanner></ThreeBlockBanner>
            </div>
        
        
      
    </div>
  );
}

export default App;

import React from "react";
import Section1 from "./component/section1/Section1";

const App = () => {

  const users =[
    {
      img:"https://i.pinimg.com/736x/d3/fc/ce/d3fcce3e5468a815cfcbf2d22f5622d1.jpg",
      info:"",
      tag:"Satisfied",
      color:'#DC2626' 
    },
    {
      img:"https://i.pinimg.com/736x/6f/5f/ca/6f5fcadcd71503ee270e9a4de3b35377.jpg",
      info:"",
      tag:"Underserved",
      color:'#2563EB' 
    },
    {
      img:"https://i.pinimg.com/1200x/80/d0/ba/80d0bad22d6035e079648f7890874edb.jpg",
      info:"",
      tag:"Emerging",
      color:'#7C3AED' 
    },
    {
      img:"https://i.pinimg.com/736x/42/e9/80/42e98055dbf0249636c6879c77122d48.jpg",
      info:"",
      tag:"Marginalized",
      color:'#DB2777' 
    },
    {
      img:"https://i.pinimg.com/736x/51/fe/49/51fe4985b301e6667b5dbc455d278147.jpg",
      info:"",
      tag:"Accommodated",
      color:'#4B5563'
    }
    
  ]
  return (
    <div>
      <Section1 users={users}/>
    </div>
  );
};

export default App;

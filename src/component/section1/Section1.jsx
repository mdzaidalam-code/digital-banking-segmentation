import React from "react";
import Navigation from "./Navigation";
import PageContent from "./PageContent";

const Section1 = (props) => {
  console.log(props)
  return (
    <div className="flex flex-col w-full min-h-screen lg:h-screen overflow-x-hidden lg:overflow-hidden">
      <Navigation />
      <PageContent
      users={props.users}/>
      
    </div>
  );
};

export default Section1;

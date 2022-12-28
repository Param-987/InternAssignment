import { useState } from "react";
import Bottom from "../Bottom/Bottom";
import Middle from "../Middle/Middle";
import Top from "../Top/Top";
import "./body.scss";



const Body = () => {

  const [id,setId] = useState("2")
  const [toggle,setToggle] = useState(false)
  return (
    <div className="body">
        <Top id={id} toggle={toggle}/>
        <Middle id={id} setId = {setId} toggle = {toggle} setToggle={setToggle}/>
        <Bottom/>
    </div>
  );
};

export default Body;

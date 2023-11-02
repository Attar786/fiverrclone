// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Navbar.scss";

const Navbar = () => {
    const [active, setActive] = useState(true);
const isActive = ()=>
{
  window.scrollY > 0 ? setActive(true) : setActive(false)
}

useEffect(()=>{
  window.addEventListener("scroll", isActive);


return ()=>
{
  window.removeEventListener("scroll", isActive);
};

},[]);


const currrentUSer = {
  id:1,
  username :"Ali",
  isSellter : true,
}
  return (
  <>
    <div className={active ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          {/* <Link to="/"> */}
          <span className="logo">fiverr</span>
          {/* </Link>                 */}
          <span className="dot">.</span>
        </div>
        <div className="menu">
          <div className="menu">
            <span>Bussiness</span>
            <span>Bussiness</span>
            <span>Gwoth</span>
            <span>Eglish</span>
            {!currrentUSer?.isSellter && <span>Become a Seller</span> }
          {
            currrentUSer && 
            <div className="user">
<img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fa7%2FReact-icon.svg%2F1200px-React-icon.svg.png&tbnid=HD3eXsrstv-_cM&vet=12ahUKEwj75cWn9KWCAxUkkScCHVb8BcMQMygAegQIARBu..i&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FReact_(software)&docid=Fiz1iGC5gm0AcM&w=1200&h=1043&q=react%20image&ved=https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png" alt="" />
<span>{currrentUSer?.username}</span>
        <div className="option">
          {
            currrentUSer?.isSellter && (
<>
<span>Gigs</span>
<span>Gigs</span>
</>
)
}

<span>Gigs</span>
<span>Gigs</span>
<span>Gigs</span>
        </div>
        
            </div>
        
            
          }
          
          </div>
          {!currrentUSer && <button>Join</button>}
        </div>
      </div>
      <hr />

      {
        active && (
      
      <div className="mainmenu">
        <span>Business</span>
        <span>Business</span>
        <span>Business</span>
        <span>Business</span>
        <span>Business</span>
        <span>Business</span>
      </div>
      )}
    </div>
    
  </>
  );
};

export default Navbar;

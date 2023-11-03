// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Navbar.scss";

const Navbar = () => {
    const [active, setActive] = useState(true);
    const [open , setopen] =useState(false);

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
            <div className="user"  onClick={()=> setopen(!open)}>
<img  className="imageuser" src="OIP.jpeg" alt="(img)" />
<span>{currrentUSer?.username}</span>
   {  open &&   <div className="option" >
          {
            currrentUSer?.isSellter && (
<>
<span className="optionunder">Gigs</span>
<span className="optionunder">order</span>
</>
)
}
<span className="optionunder">message</span>
<span className="optionunder">Logout</span> 
<span className="optionunder">prof ile</span>
        </div>}
        
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

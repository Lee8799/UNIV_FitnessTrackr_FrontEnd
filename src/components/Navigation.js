import { Link } from "react-router-dom";


/* we will have to add location descriptors to each link */ 
const Navigation = ({user}) => {
  return (
     
    <div className='user-profile'>
        <nav className="nav-bar">
          <Link to='/'> Home{" "}</Link>  
          <Link to='/'>{" "} Routines</Link> 
          <Link to='/'> My Routines{" "}</Link>
          <Link to='/'> Activities{" "}</Link>
          <Link to='/'>{" "} Login/Register</Link> 
          <Link to={`/${user}`}> {" "} Profile/User </Link>
        </nav>
    </div>

  )
}


export default Navigation;
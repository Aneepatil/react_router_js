import React from 'react'
import { Link, NavLink} from 'react-router-dom';
// Link:- It helps us to navigate to the perticular without refreshing page
// Navlink:- It also does as same as Link tag but it adds a active class to the tag.
const Navbar= () => {

  // Code for redirecting to home page dynamically

  // const navigate=useNavigate();


  // useEffect(() => {
  //   setTimeout(()=>{
  //     navigate('/contact')
  //   },2000)
  // });
  

  return (
    <nav className='ui raised very padded text segment' style={{marginTop:'5px'}}>
        <a className='ui teal inverted segment' href='/'>Gloria</a>
        <div className='ui right floated header'>
            <button className='ui button'><Link to="/">Home</Link></button>
            <button className='ui button'><NavLink to="/about">About</NavLink></button>
            <button className='ui button'><NavLink to="/contact">Contact</NavLink></button>
        </div>
    </nav>
  )
}

export default Navbar;

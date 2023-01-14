import './Nav.css'
import { AiOutlineUser ,AiOutlineSearch,AiOutlineGlobal} from "react-icons/ai";


const Nav = () => {

return (
    <nav>
        <section>
            <div className='nav_left'>
            <img className='nav_logo' alt='logo'
                src='https://img01.products.bt.co.uk/content/dam/bt/portal/images/logos/tv/Amazon-Prime-logo-FULL-white.png'>
                </img>
               <div className='nav_links'>
                <a href="/">Home</a>
                <a href="/">Store</a>
                <a href="/">Channels</a>
                <a href="/">Categories</a>
                <a href="/">MyStuff</a>
                </div> 
             <div className='Try_free'>
                <button className='Try_free_button'>Try for free</button>
             </div>
             <div className='nav_right'>
             
             <AiOutlineSearch className='search_button'/>
             <AiOutlineGlobal className='Language_button' /><a className='EN_logo'>EN</a>
             <AiOutlineUser className='user_button'/>
             </div>
                
            </div>
        </section>


    </nav>


);

}; 

export default Nav ;
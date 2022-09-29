import './header.css'
import logo from '../img/logo512.png'

export default function Header(){
    return(
        <header className="main-header">
           <div className='header-left-elements'>
            <img className='site-logo' src={logo}/>
            <div>
                <h1 className='site-title'>Coisas Rodando</h1>
                <div className='borderBottom'>&zwnj;</div>
            </div>
            
                
      
           </div>
           
           
            
           
           
        </header>
    )
}
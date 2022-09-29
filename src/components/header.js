import './header.css'
import insta from '../img/instagram.png'

export default function Header(){
    return(
        <header className="main-header">
           <div className='header-left-elements'>
           <h1 className='site-title'>Coisas Rodando</h1>
                
      
           </div>
           
           
            
            <div className='header-right-elements'>
                
                <div className='header-item'>
                <a href='https://www.instagram.com/thallesdomonza/' target="_blank">     
                    <img className='insta-logo' src={insta}/>  
                </a>
                    
                </div>
              
                
            </div>
            
           
        </header>
    )
}
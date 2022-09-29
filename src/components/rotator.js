import './rotator.css'


export default function Rotator(props){
    return(
        <div>
            <div className="palco">&zwnj; 
            {props.image===''?
                <p className='no-image'>Sua imagem rodando aqui</p>
                :
                <img className='rotating-image' src={props.image} alt=''/>}
            </div>
        </div>
    )
}
import { useState } from "react"
import Rotator from "../components/rotator"
import Uploader from "../components/uploader"
import './home.css'

export default function Home(){
    const [image, setImage] = useState('')
    const [className, setClassName] = useState('visible')

    const uploadHandler = (img)=>{
        setImage(img)
        console.log(image)
        console.log('upload handler executado')
    }
    const closeHandler =()=>{
        setClassName('hidden')
    }

    return(
        <div className="home-page">
            <h2 className="site-subtitle">Suas fotos rodando horizontalmente!</h2>
            <div className="fix"/>
            <div className="other-wrapper">
                <div className="rotator-wrapper">
                    <Rotator image={image}/>
                </div>
                <Uploader imageSetter={uploadHandler}/>
            </div>
            <div className="fix"/>

            <div className={`user-info ${className}`}>
            <span >
                Seus dados são apenas armazendos no cache do navegador, não há nenhum servidor de arquivos sendo usado para armazenar suas imagens. Assim que você recarregar a pagina o arquivo que você enviou desaparecerá.
            </span>
            <div onClick={closeHandler} className="close-user-info">fechar</div>
            </div>
            
        </div>
    )
}
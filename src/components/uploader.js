import './uploader.css'

export default function Uploader(props){
    
    const changeHandler = (e)=>{
        let img = URL.createObjectURL(e.target.files[0])
        console.log('mudei!', e.target.files[0])
        props.imageSetter(img)
        
        
    }
    
    return(
        <div>
            <label class="custom-file-upload upload-button">
            <input onChange={changeHandler} type="file"/>
                Enviar Imagem
            </label>
            
        </div>
    )
    
}
// useState es un hook de react que nos permite guardar datos 
import { useState} from 'react'

// Componente reutilizable que muestra un perfil 
// Recibe 3 props 
function TarjetaPerfil({nombre, profesion, ciudad}){
    // Estado local de un componente (likes)

    const [likes, setLikes] = useState(0)

    // likes = valor actual
    //setLikes = funcion para cambiarlo

    function agregarLike(){
        //sumar 1 al contador 
        setLikes(likes + 1)
    }


    return(
        <article className="tarjeta">
            <h2>{nombre}</h2>
            <p>{profesion}</p>
            <p>{ciudad}</p>

            <button onClick={agregarLike}> 
                Me gusta ❤️ {likes}
            </button>
        </article>
    )
}

export default TarjetaPerfil
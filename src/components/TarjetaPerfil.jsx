export default function TarjetaPerfil({nombre, profesion, ciudad}){
    return(
        <article>
            <h2>{nombre}</h2>
            <p>{profesion}</p>
            <p>{ciudad}</p>
        </article>
    )
}
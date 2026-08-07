export default function Producto ({ nombre, precio}){
    return(
        <div>
            <h2>{nombre}</h2>
            <p>${precio}</p>
        </div>
    );
}
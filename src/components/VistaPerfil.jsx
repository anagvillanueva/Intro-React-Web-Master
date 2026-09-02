import React from 'react';
import { useParams } from 'react-router-dom';
import { Tarjeta } from './Tarjeta';
import { EstadoSesion} from './EstadoSesion'
import { UsuarioSaludo} from './UsuarioSaludo'

export function VistaPerfil(){
    //Extraer el parametro dinamico enviado en la URL 
    const {username} = useParams();

    return(
        <Tarjeta titulo="Perfil del Usuario">
            <EstadoSesion estado="autenticado"/>
            <UsuarioSaludo
                estadoLogeado={true}
                username={username}
                mensajeNoLeido={3}
                />
        </Tarjeta>
    )
}
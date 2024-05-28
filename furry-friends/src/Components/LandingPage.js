import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../CSS Globlal/css.css';

export default function LandingPage() {
    const [colorPets, setColorPets] = useState();
    const [caninos, setCaninos] = useState([]);
    const [felinos, setFelinos] = useState([]);

    useEffect(() => {
        axios.get('https://adopcion-alpha.vercel.app/perros')
            .then((response) => {
                console.log("Los Datos Caninos han sido recibidos correctamente");
                setCaninos(response.data);
            })
            .catch((error) => {
                console.error("Error al recibir los datos caninos:", error);
            });
    }, []);

    useEffect(() => {
        axios.get('https://adopcion-alpha.vercel.app/gatos')
            .then((response) => {
                console.log("Los datos Felinos han sido recibidos correctamente");
                setFelinos(response.data);
            })
            .catch((error) => {
                console.error("Error al recibir los datos felinos:", error);
            });
    }, []);

    const handleOcolorPetsTrue = (event) => {
        event.preventDefault();
        setColorPets(true);
    };

    const handleOcolorPetsFalse = (event) => {
        event.preventDefault();
        setColorPets(false);
    };

    return (
        <div className="content-general">
            <div className="content_msg_1">
                <p className="msg_1">Adopta una adorable mascota</p>
            </div>
            <div className="content_msg_2" onClick={handleOcolorPetsFalse}>
                <p className="msg_2">Categorías de mascotas</p>
            </div>
            <div className="content_cuadros">
                <div className={colorPets ? "content_perros active" : "content_perros"} onClick={handleOcolorPetsTrue}>
                    <img src="https://res.cloudinary.com/dbwgsrqgm/image/upload/v1702604464/Adopcion/gatos/Ellipse_8_pzg5km.png" alt="" className="background_img" />
                    <img className="logo_gato" src="https://res.cloudinary.com/dbwgsrqgm/image/upload/v1702604543/Adopcion/perros/perros_oetwuw.png" alt="" />
                    <p className="nombre_g_p">Perros</p>
                </div>
                <div className={colorPets ? "content_gatos" : "content_gatos active"} onClick={handleOcolorPetsFalse}>
                    <img src="https://res.cloudinary.com/dbwgsrqgm/image/upload/v1702604464/Adopcion/gatos/Ellipse_8_pzg5km.png" alt="" className="background_img" />
                    <img className="logo_gato" src="https://res.cloudinary.com/dbwgsrqgm/image/upload/v1702604475/Adopcion/gatos/gatos_lgx2mu.png" alt="" />
                    <p className="nombre_g_p">Gatos</p>
                </div>
           
            </div>
            <div className='content-pets'>
                    {colorPets && (
                        <div className='caninos-content'>
                            {caninos.map((revisecanine , index) => (
                                <div key={index}>
                                    <img src={revisecanine.url} alt={`Imagen del Canino ${revisecanine.nombre}`} />
                                    <p>Nombre: {revisecanine.nombre}</p>
                                    <p>Raza: {revisecanine.raza}</p>
                                </div>
                            ))}
                        </div>
                    )}
                    {!colorPets && (
                        <div className='felinos-content'>
                            {felinos.map((revisefelines , index) => (
                                <div key={index}>
                                    <img src={revisefelines.url} alt={`Imagen del Felino ${revisefelines.nombre}`} />
                                    <p>Nombre: {revisefelines.nombre}</p>
                                    <p>Edad: {revisefelines.edad}</p>
                                    <p>Raza: {revisefelines.raza}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
        </div>
    );
}

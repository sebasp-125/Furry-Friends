import React, { useState } from 'react';
import '../CSS Globlal/css.css';

export default function LandingPage() {
    const [colorPets, set_ColorPets] = useState(false);

    const handleOcolorPetsTrue = (event) => {
        event.preventDefault();
        set_ColorPets(true);
    };

    const handleOcolorPetsFalse = (event) => {
        event.preventDefault();
        set_ColorPets(false);
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
        </div>
    );
}

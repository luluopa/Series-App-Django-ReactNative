import React from 'react';

const colors_package = {
    "Roxo_escuro":"#9C49DD",
    "Roxo_claro":"#9964AB",
    "Azul_claro":"#4047E7",
    "Azul_escuro":"#000BFC"
}

export default class Colors_services extends React.Component{
    
    static Get_ColorsPack(){
        return colors_package;
    }
}
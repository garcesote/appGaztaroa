import React, { Component } from 'react'; 
import Calendario from './CalendarioComponent.js'; 
import { EXCURSIONES } from '../comun/excursiones'; 

class Campobase extends Component { 
    constructor(props) { 
        super(props); 
        this.state = { excursiones: EXCURSIONES }; 
    } 
    render() { 
        return ( <Calendario excursiones={this.state.excursiones} /> ); 
    } 
} 
    
export default Campobase;
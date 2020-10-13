import React from 'react'
import mapMarker from '../images/map-marker.svg';
import {Link} from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import '../styles/pages/orphanages-map.css';
import {Map, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function OphanagesMap(){
    return(
    <div id="page-map">
        <aside>
            <header>
                <img src={mapMarker} alt=""/>
                <h2>Escolha um orfanato no mapa</h2>
                <p>Muitas crianças estão esperando a sua visita</p>
            </header>
            <footer>
                <strong> Aracaju </strong>
                <span>Sergipe</span>
            </footer>
        </aside>
        <Map center={[-10.9971907,-37.1907521]} zoom={11} style={{width:'100%', height: '100%'}}> 
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        </Map>
        
        <Link to="" className="create-orphanage"> <FiPlus size={32} color="#FFF"/></Link>
   
    </div>
    )
}
export default OphanagesMap;
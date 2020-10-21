import React,{ useEffect, useState } from 'react'
import mapMarker from '../images/map-marker.svg';
import {Link} from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import '../styles/pages/orphanages-map.css';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';

import mapIcon from '../utils/mapIcon';
import api from '../services/api';

interface Orphanage{
    id: number,
    latitude: number,
    longitude: number
    name: string,
}

function OphanagesMap(){
    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);
    useEffect(()=> {
        api.get('orphanages').then(response => {setOrphanages(response.data)})
    }, [])
    
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

            {orphanages.map(orphanages => {
                return(
                    <Marker
                    icon={mapIcon}
                    position={[orphanages.latitude,orphanages.longitude]}
                    key={orphanages.id}
                    >
                    
                    <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                        {orphanages.name}
                        <Link to={`/orphanages/${orphanages.id}`}>
                            <FiArrowRight size={20} color="#FFF"/>
                        </Link>
                    </Popup>
            
                    </Marker>
                )
            })}
        </Map>
        
        <Link to="/orphanages/create" className="create-orphanage"> <FiPlus size={32} color="#FFF"/></Link>
   
    </div>
    )
}
export default OphanagesMap;
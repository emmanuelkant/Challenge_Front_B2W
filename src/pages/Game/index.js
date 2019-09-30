import React, { useState, useEffect} from 'react';
import './Game.scss';

import Button from '../../components/Button';
import Loading from '../../components/Loading';

import Planet from '../../assets/ringed-planet.svg';
import Person from '../../assets/person.svg';
import Field from '../../assets/peaks.svg';
import Climate from '../../assets/sun-cloud.svg';
import Film from '../../assets/film-projector.svg';

import api from '../../services';


export default function Game({ history }) {

  const [planet, setPlanet] = useState(null);

  useEffect(() => {
    
    async function getPlanet() {
      const randNumber = Math.ceil(Math.random() * 61)

      const response = await api.get(`/${randNumber}`);
      setPlanet(response.data);
    }

    getPlanet();

  }, []);

  return (
    <section className="game"> 
      <div className="container">
        <h1>What is that Planet?</h1>
        {
          planet ? (
            <div className="box">
              <div className="title">
                <img src={Planet} alt="planet"/>
                <h2>{planet.name}</h2>
              </div>
              <div className="content">
                
                <div className="row">
                  <img src={Person} alt="person"/>
                  <p>Population: {planet.population}</p>
                </div>
                <div className="row">
                  <img src={Climate} alt="climate"/>
                  <p>Climate: {planet.climate}</p>
                </div>
                <div className="row">
                  <img src={Field} alt="field"/>
                  <p>Terrain: {planet.terrain}</p>
                </div>
                <div className="row">
                  <img src={Film} alt="film"/>
                  <p>Looked like in {planet.films.length} films</p>
                </div>
              </div>
            </div>
          ) : (
            <Loading />
          )
        }
        <Button 
          path="/game"
          label="Next"
        />
        <Button 
          path="/"
          label="Back to Home"
        />
      </div>
    </section>
  );
}

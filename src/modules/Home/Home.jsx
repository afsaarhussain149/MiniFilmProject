import React from 'react'
import Person from './modules/Home/Person';
import VoterPerson from './modules/Home/VoterPerson';
import MapItems from './modules/Home/MapItems';
import Map2 from './modules/Home/Map2';
import MapusingState from './modules/Home/MapusingState';

const Home = () => {
  return (
    <>
      <Person />
      <Person name = 'Anwar Hussain' designation = 'Business Man' age = {59}/>
      <Person name = 'Ansar Hussain' designation = 'Lawyer' age = {27} />
      <Person name = 'Sarwar Hussain' age = {30}/>
      <VoterPerson name='Afsar Hussain' age={22}/>
      <MapItems />
      <Map2 /> 
      <MapusingState />
    </>
  )
}

export default Home

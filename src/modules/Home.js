import React from 'react'
import Person from './Home/Person'
import VoterPerson from './Home/VoterPerson'
import MapItems from './Home/MapItems'
import Map2 from './Home/Map2';
import MapusingState from './Home/MapusingState';

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
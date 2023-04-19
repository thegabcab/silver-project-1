import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import ListGroup from "./components/ListGroup";
import Alert from "/components/Alert";

function App() {
  let items = [
    'District 1A', 'District',
  'March 6, 2023 31st BOARD OF REPRESENTATIVES - COMMITTEE LIST',
  'STEERING COMMITTEE (9 for quorum) PERSONNEL COMMITTEE (5 for quorum) (9)',
  'Jeff Curtis , Chair (D) Anabel Figueroa, Chair (D)',
  'Nina Sherwood, Vice Chair (D) Mary Lisa Fedeli, Vice-Chair (R)',
  'Megan Cottrell, Clerk (D) Terry Adams (D)',
  'Virgil de la Cruz, Deputy Majority Leader (D) Phil Berns (D)',
  'Eric Morson, Deputy Majority Leader (D) Amiel Goldberg (D)',
  'Mary Fedeli, Minority Leader (R) Francise Jean-Louis (D)',
  'Bradley Bewkes, Deputy Minority Leader (R) Don Mays (D)',
  'Phil Berns (D) Denis Patterson (D)',
  'Sean Boeger (D) Bobby Pavia (D)',
  'Anabel Figueroa (D)',
  'Jennifer Matheny Lindsey Miller (D) (D)',
  'LAND USE/URBAN REDEVELOPMENT COMMITTEE (6 for quorum) (11)',
  'Mavina Moore (D) Bradley Bewkes, Chair (D)',
  'Susan Nabel (D) Nina Sherwood, Vice-Chair (D)',
  'Denis W. Patterson (D) Terry Adams (D)',
  'Fred Pierre-Louis (D) Bonnie Kim Campbell (D)',
  'Robert Roqueta (D) Virgil de la Cruz (D)',
  'Jeffrey Stella (D) Stephen Garst (R)',
  'David Watkins (R) James Grunberger (D)',
  'Jennifer Matheny (D)',
  'APPOINTMENTS COMMITTEE (5 for quorum) (9) Don Mays (D)',
  'Denis W. Patterson, Chair (D) Annie M. Summerville (D)',
  'Ramya Shaw, Vice-Chair (D) Carmine Tomas (D)',
  'Bradley Bewkes (R)',
  'Megan Cottrell (D) OPERATIONS COMMITTEE (5 for quorum) (9)',
  'Anabel Figueroa (D) Virgil de la Cruz, Chair (D)',
  'James Grunberger (D) Sean Boeger, Vice-Chair (D)',
  'Bobby Pavia (D) Melinda Baxter (D)',
  'Annie Summerville (D) Elise Coleman (D)',
  'Kindrea Walston (D) Ashley Ley (D)',
  'Nina Sherwood (D)',
  'FISCAL COMMITTEE (6 for quorum) (11) Jeffrey Stella (D)',
  'Sean Boeger , Co-Chair (D) Carmine Tomas (D)',
  'Lindsey Miller, Co-Chair (D) David Watkins (R)',
  'Elise Coleman (D)',
  'Mary L. Fedeli (R) PUBLIC SAFETY & HEALTH (5 for quorum) (9)',
  'Anabel Figueroa (D) Jeffrey Stella, Chair (D)',
  'Stephen Garst (R) Eric Morson, Vice Chair (D)',
  'Eric Morson (D) Phil Berns (D)',
  'Susan Nabel (D) Bonnie Kim Campbell (D)',
  'Fred Pierre-Louis (D) Elise Coleman (D)',
  'Ramya Shaw (D) Stephen Garst (R)',
  'Carmine Tomas'];
  const handleSelectItem = (item: string){}
  
  return ( 
    <div>
      <Button> My Button </Button>
      <ListGroup items={items} heading="Representative Name" onSelectItem={
    console.log(item);
  } /></div>
          );

  const [count, setCount] = useState(0)

  return (
    <div> <ListGroup />
    </div>);
}
export default App;

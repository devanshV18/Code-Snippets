import RedirectButton from './components/RedirectButton'

import './App.css'
import ObjectDisplay from './components/ObjectDisplay'
import Checkbox from './components/Checkbox'

function App() {
 const vercel = "https://portfolio-xi-woad-85.vercel.app/"

 //ObjectDisplay

 const myObject = {
  name: 'john',
  age:30,
  city:'New York'
 }

  return (
    <>
     <h1>Component Testing Only</h1>
     <RedirectButton url={vercel} name="Portfolio"/>

     <h1>Object Data</h1>
     <ObjectDisplay data={myObject}/>

     <Checkbox/>
    </>

   
  )
}

export default App

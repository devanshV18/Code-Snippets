import RedirectButton from './components/RedirectButton'

import './App.css'

function App() {
 const vercel = "https://portfolio-xi-woad-85.vercel.app/"

  return (
    <>
     <h1>Component Testing Only</h1>
     <RedirectButton url={vercel} name="Portfolio"/>
    </>
  )
}

export default App


import { Suspense } from 'react'
import './App.css'
import DaisyNav from './Components/DaisyNav/DaisyNav'
import Navbar from './Components/Navbar/Navbar'
import PricingOptions from './Components/PricingOptions/PricingOptions'



const PricingPeomise = fetch('pricingData.json') .then(res => res.json())
function App() {
  

  return (
    <>
    <header>
    <Navbar></Navbar>
    {/* <DaisyNav></DaisyNav> */}
    </header>
    <main>
    <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
      <PricingOptions PricingPeomise={PricingPeomise}></PricingOptions>
    </Suspense>
    </main>
     
  
         
    </>
  )
}

export default App

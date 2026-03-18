
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './Components/DaisyNav/DaisyNav'
import Navbar from './Components/Navbar/Navbar'
import PricingOptions from './Components/PricingOptions/PricingOptions'
import ResultsChart from './Components/ResultsChart/ResultsChart'
import axios from 'axios'
import MarksChart from './Components/MarksChart/MarksChart'





const PricingPeomise = fetch('pricingData.json') .then(res => res.json());
const marksPromise = axios.get('marksData.json');
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
    <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
      <MarksChart marksPromise={marksPromise}></MarksChart>
    </Suspense>
    
    <ResultsChart>
      
    </ResultsChart>
    </main>
     
  
         
    </>
  )
}

export default App

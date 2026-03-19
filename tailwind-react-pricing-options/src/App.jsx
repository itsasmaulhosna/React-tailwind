
import { Suspense } from 'react'
import './App.css'
// import Daisyui from './components/DaisyNav/Daisyui' 
import Navbar from './components/DaisyNav/Navbar/Navbar'
import Pricing from './components/DaisyNav/PricingOptions/pricing'
const pricingPromise=fetch('pricingData.json').then(res=>res.json())
function App() {


  return (
    <>

      <header>
        <Navbar></Navbar>
 {/* <Daisyui></Daisyui>  */}
      </header>
      <main>
        <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
<Pricing pricingPromise={pricingPromise}></Pricing>
        </Suspense>
      </main>
    </>
  )
}

export default App

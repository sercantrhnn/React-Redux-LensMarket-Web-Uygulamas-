import { useState, useEffect } from 'react'
import './App.css'
import Header from './componenets/Header'
import Carousel from './componenets/Carousel'
import CardSayfa from './componenets/CardSayfa'
import axios from 'axios'
import CardVeri from './componenets/CardVeri'
import { Route, Routes } from 'react-router-dom'
import SaydamLens from './componenets/SaydamLens'
import deneme from './componenets/Home'
import Home from './componenets/Home'
import GünlükLens from './componenets/GünlükLens'
import RenkliLens from './componenets/RenkliLens'
import Solüsyon from './componenets/Solüsyon'
import Sepet from './componenets/Sepet'
import { useSelector,useDispatch } from 'react-redux'
import { totalFiyat } from './control/sepetSlice'



function App() {
  const [urun, setUrun]= useState([]);
  const carts = useSelector((state)=> state.cart.carts)
  const dispatch = useDispatch()
 

    const fetchUrun = async ()=>{
    const response = await axios.get('http://localhost:3000/urunler')
    setUrun(response.data)
    }

    useEffect(()=>{
    fetchUrun();
    dispatch(totalFiyat())
    },[carts])

   
// console.log(urun);
  return (
    <div className='app'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/saydam' element={<SaydamLens veri={urun}/>}/>
        <Route path='/gunluk' element={<GünlükLens veri={urun}/>}/>
        <Route path='/renkli' element= {<RenkliLens veri={urun}/>} />
        <Route path='/solusyon' element= {<Solüsyon veri={urun}/>} />
        <Route path='/sepet' element= {<Sepet/>} />
      </Routes>
      
      
     
     
    </div>
  )
}

export default App

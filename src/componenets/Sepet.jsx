import React from 'react'
import { useSelector } from 'react-redux'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch } from 'react-redux';
import { artir,azalt, removeCart } from '../control/sepetSlice';
import DeleteIcon from '@mui/icons-material/Delete';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


function Sepet() {
  const dispatch = useDispatch()
 
  const toplam = useSelector((state)=> state.cart.toplamTutar)
  const items = useSelector((state)=> state.cart.carts)
  return (
     //console.log(title),
    <>
    <div style={{position:"fixed", right:"80px", backgroundColor:"white", top:"230px", width:"350px",  border: "1px solid  white", borderRadius: "12px" }}>
    <h4 style={{textAlign:"center", padding:5}}>SEPET BİLGİSİ</h4>
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
      <p  style={{ padding: 8, margin: 0 }}>Kargo Ücreti </p>
      </div>
    <div>
    <h6  style={{ padding: 8, margin: 0 }}>0,00 TL</h6>
    </div>
    
    </div>

    <div style={{ display: "flex", justifyContent: "space-between" }}>
    <div>
        <h5 style={{ padding: 8, margin: 0 }}>Genel Toplam</h5>
    </div>
    <div>
        <h5 style={{ padding: 8, margin: 0, color:"#F2762A",fontWeight:"bold" }}>{toplam} TL</h5>
    </div>
</div>
<div style={{textAlign:"center", padding:8}}>
  <button style={{width:"250px",height:"50px",color:"white",backgroundColor:"#F2762A",  border: "1px solid  white", borderRadius: "10px" }}>
     <AddShoppingCartIcon/> SATIN AL
    </button>
</div>
    
    
</div>


    <div style={{ marginTop: "200px",marginLeft:"200px", display: "flex", flexDirection: "column" }}>
        {items.map((veri, index) => (
          <div key={index} style={{ marginTop: "30px", backgroundColor: "white", width: "850px", display: "flex", flexDirection: "row", alignItems: "center",  border: "1px solid  white", borderRadius: "10px"  }}>
            <img src={veri.img} style={{ width: "200px", margin:"5px" }} />
              <div style={{ marginLeft: "20px", textAlign: "left" }}>
                <h5 style={{color:"#0a569e"}}>{veri.title}</h5>
                  
                  {/* <p>Fiyat: {veri.fiyat} TL</p> */}
                  <div style={{ display: "flex",  marginTop: "10px" }}>
                  <button onClick={()=> dispatch(azalt(veri.id))} style={{ backgroundColor: "white", border: "1px solid #F2762A", borderRadius: "10px" }}><RemoveIcon/></button>
                  <p style={{ margin: "0", padding: "8px" }}>{veri.birimAdet}</p>
                  <button onClick={()=> dispatch(artir(veri.id))} style={{ backgroundColor: "white", border: "1px solid #F2762A", borderRadius: "10px" }}><AddIcon /></button>
                
                  </div>
              </div>
              <div style={{marginRight:"25px",marginLeft: 'auto'}}>
                    <button onClick={()=>dispatch(removeCart(veri.id))} style={{border:"none", backgroundColor:"white"}}><DeleteIcon color='error' fontSize='large'/></button>
                  </div>
          </div>
  ))}
    </div>





         {/* <div style={{marginTop:"200px"}}>
         {items.map((veri,index)=>{
          //console.log(veri.image);
            return(
              <div style={{marginTop:"20px",marginLeft:"250px", backgroundColor:"white",width:"750px"}}>
               <div key={index} style={{margin:"10px 20px"}}>
               <SepetList
               image = {veri.image}
               title = {veri.title}
               toplam = {toplam}
               />
                </div>
              </div>
              
            )

        })}
    </div> */}
    </>
    
  )
}

export default Sepet
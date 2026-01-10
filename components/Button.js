import React from 'react'; 

export default function Button({label, color, onclick}){
   
  const styles= {
    backgroundColor: color, 
    color:"black",
    padding:"5%",
    border:"gray",
    borderWidth:4,
    borderRadius:5,
    margin:"5%",
  }

  return(
    <button style={styles} onclick={onclick}>
    {label}
    </button>
  )

}


import React, { useEffect, useState } from "react";

const Example = () => {
  const [favoriteColor, setFavoriteColor] = useState("red");
  const [number,setNumber]= useState(0)
  
  useEffect(() => {
    setTimeout(() => {
      setFavoriteColor("yellow");
    }, 3000);
    console.log("se ha montado el componente")
  }, []); //cuando cargue la página (componente)

  //se ejecuta con cualquier cambio del componente
  useEffect(()=>{
    console.log("se ha actualizado el componente")
  })

  //este se ejecuta solamente cuando cambia favoriteColor
  useEffect(()=>{
    console.log("favoriteColor ha cambiado")
  },[favoriteColor])

  return <div>{favoriteColor}
  <button onClick={()=>setNumber(number +1)}>{number}</button>
  </div>;
};

export default Example;

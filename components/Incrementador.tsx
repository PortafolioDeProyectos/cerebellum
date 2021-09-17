import React,  { useState } from "react";
import { Formulario, InputSubmit } from "../components/ui/Formulario";
export const Contador = () => {
  const [valor, setValor] = useState(0);
  const incrementar=(numero:number=1):void=>{
      setValor(valor+numero);
  }
  
  return( 
  <>
    <Formulario>
        <span>Valor:{valor}</span>
        <InputSubmit value="incrementar en 1" onClick={()=>incrementar()}></InputSubmit>
        <InputSubmit value="incrementar en 2" onClick={()=>incrementar(2)}></InputSubmit>
        <InputSubmit value="Reset" onClick={()=>setValor(0)}></InputSubmit>
    </Formulario>
  </>
  )
};

import { useState } from "react"

export default function App(){
    
    const [numero, setNumero] = useState (0)
    
function zero(){
    setNumero(0)

}

    function aumentar(){
        setNumero(numero + 1 )
    }
    
function diminuir(){
      setNumero(numero - 1 )
}


    return <div>
        <h1>Contador</h1>
        <p>{numero}</p>
        <button onClick={diminuir}>menos</button>
        <button onClick={zero}>reset</button>
        <button onClick={aumentar}>mais</button>
    </div>
}
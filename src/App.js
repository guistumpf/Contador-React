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




return <body className="body">

   
   <div className="div">
        <h1>Contador</h1>
        <p className="p">{numero}</p>
        <button onClick={diminuir} className="button">menos</button>
        <button onClick={zero} className="button">reset</button>
        <button onClick={aumentar} className="button">mais</button>
    </div>
    
</body>
}
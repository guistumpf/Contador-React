import { useState } from "react"

export default function App(){
    
    let textColor
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

if(numero > 0){
    textColor ="green" 
} else if(numero < 0 ){
    textColor = "red"
} else {
    textColor = "white"
}


return ( 
<body className="body">
 
   <div className="div">
    <title>Contador</title>
        <h1>Contador</h1>
        <p className="p" style={{ color: textColor }}>
            {numero}
            </p>
        <button onClick={diminuir} className="button">menos</button>
        <button onClick={zero} className="button">reset</button>
        <button onClick={aumentar} className="button">mais</button>
    </div>
        
</body> 
)

}
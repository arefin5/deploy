import React, { useEffect, useRef } from 'react'

const Timer = ({min,seceond,setMin,setSeceond,index,setIndex,questions}) => {
    var timer = useRef(null)
    useEffect(()=>{
        let timerId = setInterval(()=>{
            setSeceond(seceond+1)
            if(seceond === 59){
                setMin(min+1)
            }
            if(min === 1){
                
                setIndex((oldIndex)=>{
                    const index = oldIndex + 1
                    if(index > questions.length - 1){
                        
                        return 0
                    }
                    return index
                })
               
                setSeceond(0)
                setMin(0)
            }
            
        },1000); 
        timer.current = timerId
        
        return ()=>{ if(timer.current) clearInterval(timer.current)}
    });
  return (
    <div>
        <h3>{min > 9 ? min : "0"+min} : {seceond > 0 ? seceond : "0"+seceond}</h3>
    </div>
  )
}

export default Timer;
import React,{useRef, useEffect} from 'react';

const RefDom = () => {
  const inputRef = useRef()
  console.log(inputRef)

  useEffect(() =>{
    inputRef.current.focus()
    inputRef.current.value ='Hola Mundo'
  },[])

  return (
    <div>
      <input ref={inputRef} type='text'/>
    </div>
  )
}

export default RefDom
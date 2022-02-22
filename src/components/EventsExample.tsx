import React, { FC, useRef, useState } from 'react'

const EventsExample: FC = () => {
  const [value, setvalue] = useState<string>('');
  const [isDrag, seIsDrag] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null)

  const changehandler = (e: React.ChangeEvent<HTMLInputElement>) => (
    setvalue(e.target.value)
  )

  const clickhandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(value)
    console.log(inputRef.current?.value)
  }

  const dragHandler = (e: React.DragEvent<HTMLDivElement>) => (
    console.log('DRAG')
  )

  const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    seIsDrag(true)
  }

  const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    seIsDrag(false)
  }

  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    seIsDrag(true)
    console.log('DROP')
  }

  return (
    <div>
      <input value={value} onChange={changehandler} type='text' placeholder='управляемый'/>
      <input ref={inputRef} type='text' placeholder='неуправляемый'/>
      <button onClick={clickhandler}>Button</button>
      <div onDrag={dragHandler} draggable style={{width: '200px', height: '200px', background: 'red'}}></div>
      <div
        onDrop={dropHandler}
        onDragLeave={leaveHandler}
        onDragOver={dragWithPreventHandler}
        style={{width: '200px', height: '200px', background: isDrag? 'blue' : 'red', marginTop: 15}}></div>
    </div>
  )
}

export default EventsExample
import React from 'react';
import classes from './light.module.css'

function Light({isTurnedOn, onSelect}: {isTurnedOn:boolean, onSelect: ()=>void}) {

  return (
    <>
        <button className={` ${classes.tile} ${isTurnedOn && classes.on} `} onClick={()=>onSelect()}></button>
    </>
  )
}
export default Light
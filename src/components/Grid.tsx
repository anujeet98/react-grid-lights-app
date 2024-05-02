import React, { useState } from 'react'
import classes from './grid.module.css';
import Light from './Light';

const Grid = () => {

    const [stack, setStack] = useState([]);
    const turnOnLight = (index: number) => {

      if(stack.length!==9){
        stack.push({});
        setLightState(prev=>{
            const updated = [...prev];
            updated[row][col]=1;
            return updated;
        });
      }

      console.log(stack);
    }

	const lights = [];
	for(let i=0; i<9; i++){
		lights.push(<Light key={i} isTurnedOn={stack.includes(i)} onSelect={()=>turnOnLight(i)} />)
	}
    return (
        <div className={classes.grid}>
			{lights}
        </div>
    )
}

export default Grid;
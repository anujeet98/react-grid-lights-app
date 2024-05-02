import React, { useEffect, useState } from 'react'
import classes from './grid.module.css';
import Light from './Light';

const Grid = () => {
    const [stack, setStack] = useState(Array<Number>);
    const turnOnLight = (index: number) => {
		if(stack.includes(index)) return;
		if(stack.length!==9){
			setStack((oldStack)=>{
				const updatedStack = [...oldStack];
				updatedStack.push(index);
				return updatedStack;
			});
		}
    }


	useEffect(()=>{
		let count=9;
		function popFromStack(){
			if(count-- > 0){
				setStack(prevStack => prevStack.slice(0, -1));
			}
			else{
				clearInterval(intervalid);
			}
		}
		let intervalid = stack.length===9 ? setInterval(popFromStack, 300) : 0;
	}, [stack]);

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
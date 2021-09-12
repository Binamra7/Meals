import React,{useState} from 'react';
import Input from '../../UI/Input';
import classes from "./MealItemForm.module.css"

const MealItemForm = props => {

    const [number, setNumber] = useState('1');

    const clickHanlder = (event) => {
        event.preventDefault();
        setNumber(number + 1);
    }

    return <form className={classes.form}>
        <Input label="Amount" input={{
            id: 'amount',
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: number
        }}/>
        <button className={classes.button} onClick={clickHanlder}>+ Add</button>
    </form>
}

export default MealItemForm;
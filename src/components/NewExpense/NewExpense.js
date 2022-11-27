import ExpenseForm from './ExpenseForm';
import { useState } from 'react';
import './NewExpense.css';
const NewExpense=(props)=>{
    const [isEditing, setIsEditing] = useState(false);


    const saveExpenseHandler=(expenseData)=>{
        const Data={
            id: Math.floor(Math.random()*100).toString(),
            ...expenseData
        };
        props.onAddExpense(Data);
        setIsEditing(false);
    }

    const startEditingHandler=()=>{
        setIsEditing(true);
    }
    const stopEditingHandaler=()=>{
        setIsEditing(false);
    }

    return(
        <div className='new-expense'>
            {!isEditing && (<button onClick={startEditingHandler}>Add New Expense</button>)}
            {isEditing && (<ExpenseForm 
                onSaveExpenseData={saveExpenseHandler}
                onCancle ={stopEditingHandaler}
            />)}
        </div>
    );
};

export default NewExpense;
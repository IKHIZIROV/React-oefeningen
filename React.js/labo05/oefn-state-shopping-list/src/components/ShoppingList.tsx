import { useState } from "react";

interface Item {
    name: string;
    amount: number;
}


const ShoppingList = () => {

    const [ShoppingList, setShoppingList] = useState<Item[]>([])
    const [name, setName] = useState<string>("");
    const [amount, setAmount] = useState<number>(0);

    const [succesMessage, setSuccesMessage] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const addItem = () => {
        if (amount < 1) {
            setErrorMessage("Amount should be higher than 0!")
            setSuccesMessage("")
        } else {
            let newItem : Item = {name: name, amount: amount}
            setShoppingList([...ShoppingList, newItem])
            setSuccesMessage("New item added!")
            setErrorMessage("")
        }
    }

    const removeItem = (index: number) => {
        let shoppingListCopy = ShoppingList.filter((_, i) => i !== index ) 
        setShoppingList(shoppingListCopy)
        setErrorMessage("Item removed")
        setSuccesMessage("")
    }

    return(
        <>
            {succesMessage && <div style={{color: "white", backgroundColor: "green", border: "1px solid black"}} >{succesMessage}</div>}
            {errorMessage && <div style={{color: "white", backgroundColor: "red", border: "1px solid black"}} >{errorMessage}</div>}

            <label>Name</label>
            <input type="text" value={name} onChange={(event) => setName(event?.target.value)}/>

            <label>Quantity</label>
            <input type="number" value={amount} onChange={(event) => setAmount(parseInt(event.target.value))} />

            <button onClick={addItem}>Add</button>
            
            <table style={{border: "solid black 1px", padding: "5px", margin: "2px"}} >
                <thead>
                    <tr>
                        <th style={{border: "solid black 1px", padding: "5px", margin: "2px"}} >Name</th>
                        <th style={{border: "solid black 1px", padding: "5px", margin: "2px"}} >Amount</th>
                    </tr>
                </thead>
                <tbody>
            {ShoppingList.map((item, index) => {
                return(
                <tr>
                    <td style={{border: "solid black 1px", padding: "5px", margin: "2px"}} >{item.name}</td>
                    <td style={{border: "solid black 1px", padding: "5px", margin: "2px"}} >{item.amount}</td>
                    <td>
                    <button onClick={() => {removeItem(index)}} style={{padding: "5px", margin: "2px", backgroundColor: "Red"}} >
                        Remove</button>
                    </td>
                </tr>)
            })}
            </tbody>
            </table>
        </>
    )
}

export default ShoppingList
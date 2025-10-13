import { useState } from "react";

interface Item {
    name: string;
    amount: number;
}


const ShoppingList = () => {

    const [ShoppingList, setShoppingList] = useState<Item[]>([])

    const addItem = (name: string, amount: number) => {
        let newItem : Item = {name: name, amount: amount}
        setShoppingList([...ShoppingList, newItem])
    }

    return(
        <>
            <input type="text" />
            <input type="text" />
        </>
    )
}

export default ShoppingList
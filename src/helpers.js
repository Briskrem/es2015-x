const choice = (items)=>{
    const rdm = Math.floor(Math.random()*items.length)
    return items[rdm]
}

const remove = (items, item) =>{
    const element = items.find(x => x == item)
    const arr = items.filter(x => x != item)
    console.log(element)
    console.log(arr)
    return [element, arr]
}

export {choice, remove}
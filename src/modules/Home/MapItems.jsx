import React from 'react'

const MapItems = () => {
    let items =[
        {id: 1, item1: 'Milk', item2: 'Egg', item3: 'Water'},
        {id: 2, item1: 'Meat', item2: 'Suger', item3: 'Water'},
        {id: 3, item1: 'Dhahi', item2: 'Wheat', item3: 'Water'},
    ];
  return (
    <>
        {items.map((item)=>(
            <div key={item.id}>
                <h5>{item.id}, {item.item1}, {item.item2}, {item.item3}</h5>
            </div>
        ))}
    </>
  )
}

export default MapItems

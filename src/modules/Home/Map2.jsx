import React from 'react'

const Map2 = () => {
    let products = [
      'Food', 'Car', 'Table',
    ];

    let products2 =[{
      product1:'Apple', product2:'PineApple', product3:'Banana', product4:'Papaya'
    }]

    const Persons =[{
      id:1,
      name:'Afsar Hussain',
      desigation:'Software developer',
      gender:'Male',
      age:22,
      status:true,
      email:'afsarlogicsoft@gmail.com',
      phone_no:9355217186,
      address:'delhi',
    }]

  return (
    <>
      <div className='text-center'>
        {Persons.map((person)=>(
          <h6 key={person.id}>{person.id}, {person.name}, {person.desigation}, {person.gender}, {person.age}, {person.status}, {person.email}, {person.phone_no}</h6>
        ))}
      </div>
       {products.map((items, index)=> (<h5 key={index}>{items}</h5>))}
       <br></br>
       {products2.map((product, index)=>(
        <h5 key={index}>{product.product1}, {product.product2}, {product.product3}, {product.product4}</h5>
       ))}
    </>
  )
}

export default Map2

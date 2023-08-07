import React from 'react'
import Expense from './Expense'



const App = () => {
  const data =[
{
  id:'a1',
  item:'Travel',
  price: 200

},
{
  id:'a2',
  item:'Food',
  price: 400

},
{
  id:'a3',
  item:'Gas',
  price: 300

}
  ]
  //function we use when receive data from child
  return (
    <div>
    <Expense keyData={data}/>

    </div>
  )
}

export default App

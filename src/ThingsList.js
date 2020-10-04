import React from 'react'
import ThingItem from './ThingItem'
function handleSubmit(e,addItem) {
  e.preventDefault()
  // alert(e.target)
  const newItem = (e.target.newItem.value)
  addItem(newItem)
  e.target.newItem.value = ''
}
export default (props) => {
  const things = props.things
  return <> <ul>

    {things.map(thing => {
      return <ThingItem name={thing.name} />
    })}
  </ul>
    <form onSubmit={(event) => handleSubmit(event,props.addItem)}><input name='newItem' type='text' /></form>
  </>
}
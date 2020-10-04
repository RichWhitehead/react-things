import React from 'react'
import ThingsList from './ThingsList'
export default (props) =>{
  return <>
  <li>{props.name}
  <p>{ThingsList.name}</p> 
  {/* <button onClick={()=> props.onDelete(props.name)}>Delete</button> */}
  </li> 
  </>
}
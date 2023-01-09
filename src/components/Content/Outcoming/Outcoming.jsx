import "./outcoming.css"

import { DataCenter } from "../../../DataFile"
import { useContext } from "react"





const Outcoming = () => {
  const {counter, sumOfChange}=useContext(DataCenter)
  return (
 <div className='outcoming'> {
 `${sumOfChange.toFixed( 2)} Euro is The Total outcoming from The Cash Box ${counter[1]}`

 } </div>
  )
}

export default Outcoming
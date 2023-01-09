import "./erned.css"
import { DataCenter } from "../../../DataFile"
import { useContext } from "react"


const Erned = () => {
  const {counter, sumOfPrice}=useContext(DataCenter)
  return (
    <div className='erned'>{`${counter[0]} had earned ${sumOfPrice.toFixed(2)} Euro`} </div>
  )
}

export default Erned
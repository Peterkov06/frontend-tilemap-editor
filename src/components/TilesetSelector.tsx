import { useContext, useEffect } from "react"
import { TilesetContext } from "../context/TilesetContext"

const TilesetSelector = () => {
  const {jsonData, changeTileset} = useContext(TilesetContext)
  
  useEffect(()=>{
    if(jsonData.length > 0)
        changeTileset(0)
  },[jsonData])

  return (
    <select onChange={(e) => {changeTileset(Number(e.target.value))}}>
        {jsonData.map((tileset, idx) => <option value={idx}>{tileset.name}</option>)}
    </select>
  )
}

export default TilesetSelector
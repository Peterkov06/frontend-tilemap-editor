import { useContext } from 'react'
import { TilesetContext } from '../context/TilesetContext'

const TilesetSelector = () => {
  const {jsonData} = useContext(TilesetContext)
  return (
    <select name="" id="">
      {jsonData.map( tileset => <option>{tileset.name}</option>)}
    </select>
  )
}

export default TilesetSelector
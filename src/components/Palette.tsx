import { useContext, useEffect, useState } from "react"
import { TilesetContext } from "../context/TilesetContext"

const Palette = () => {
  const {selectedTileset} = useContext(TilesetContext)
    
  const [tileNumber, setTileNumber] = useState<number|undefined>()

  useEffect(()=>{
    if(selectedTileset)
        setTileNumber((selectedTileset.size.x / 16) * (selectedTileset.size.y / 16))
  },[selectedTileset])
  
  return (
    <div className="palette"
        style={{ gridTemplateColumns: `repeat(${selectedTileset ? (selectedTileset.size.x / 16) : 0}, 1fr)` }}
    >
        {tileNumber && selectedTileset && Array(tileNumber).fill("").map((_, idx) => 
        <div
            style={{ 
                backgroundImage: `url(${selectedTileset.image})`,
                backgroundSize: selectedTileset.size.x * 100 + "%"
            }}
        >{idx}</div>)}
    </div>
  )
}
export default Palette
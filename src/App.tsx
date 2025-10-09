import Palette from "./components/Palette"
import TilesetSelector from "./components/TilesetSelector"
import { TilesetProvider } from "./context/TilesetContext"

const App = () => {
  return (
    <div>
      <TilesetProvider>
        <TilesetSelector/>
        <Palette/>
      </TilesetProvider>
    </div>
  )
}

export default App
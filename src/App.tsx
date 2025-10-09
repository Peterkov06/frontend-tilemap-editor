import TilesetSelector from "./components/TilesetSelector"
import { TilesetProvider } from "./context/TilesetContext"

const App = () => {
  return (
    <div>
      <TilesetProvider>
        <TilesetSelector></TilesetSelector>
      </TilesetProvider>
    </div>
  )
}

export default App
import { useState, createContext, type ReactNode, useEffect } from "react"


export type TilesetType = 
{
  "name":  string,
  "image": string,
  "size": {x: number, y: number}
}

export const TilesetContext = createContext<{jsonData: TilesetType[]}>({jsonData: []});

export const TilesetProvider = (props:{ children: ReactNode}) => 
{
  const [jsonData, setJsonData] = useState<TilesetType[]>([]);

  useEffect(() => {
    fetch("/tilesets.json")
    .then(res => res.json())
    .then(data => setJsonData(data));
    
  }, [])
  

  return(
    <>
    <TilesetContext.Provider value={{jsonData: jsonData}}>
      {props.children}
    </TilesetContext.Provider>
    </>
  )
}
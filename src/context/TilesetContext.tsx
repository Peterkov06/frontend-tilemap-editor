import { createContext, useEffect, useState, type ReactNode } from "react"

type TilesetContextType = {
    jsonData: TilesetType[],
    selectedTileset: TilesetType | undefined,
    changeTileset: (idx: number) => void
}

export const TilesetContext = createContext<TilesetContextType>(
    {
    jsonData: [],
    selectedTileset: undefined,
    changeTileset: () => {}
    }
)

export type TilesetType = {
    name: string,
    image: string,
    size: { x: number, y: number }
}

export const TilesetProvider = (props: {children: ReactNode}) => {
    const [jsonData, setJsonData] = useState<TilesetType[]>([])
    const [selected, setSelected] = useState<TilesetType>()

    const change = (idx: number) => {
        if(jsonData[idx])
            setSelected(jsonData[idx])
    }

    useEffect(()=>{
        fetch("/tilesets.json")
        .then(res => res.json())
        .then(data => setJsonData(data))
    },[])

    return <TilesetContext.Provider 
    value={{jsonData: jsonData, selectedTileset: selected, changeTileset: change}}>
    {props.children}
    </TilesetContext.Provider>
}
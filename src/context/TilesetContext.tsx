import { createContext, useEffect, useState, type ReactNode } from "react"

type TilesetContextType = {
    jsonData: TilesetType[]
}

export const TilesetContext = createContext<TilesetContextType>({jsonData: []})

export type TilesetType = {
    name: string,
    image: string,
    size: { x: number, y: number }
}

export const TilesetProvider = (props: {children: ReactNode}) => {
    const [jsonData, setJsonData] = useState<TilesetType[]>([])

    useEffect(()=>{
        fetch("/tilesets.json")
        .then(res => res.json())
        .then(data => setJsonData(data))
    },[])

    return <TilesetContext.Provider value={{jsonData: jsonData}}>
    {props.children}
    </TilesetContext.Provider>
}
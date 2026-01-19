import  { useRef, useState } from 'react'
import type { Gif } from '../interfaces/gif.interface';
import { getGifsByQuery } from '../actions/get-gifs-by-query.actions';

export const useGifs = () => {
    const [previousTerms, setPreviousTerms] = useState<string[]>([]);
    const [gifList, setGifList] = useState<Gif[]>([])

    const gifsCache = useRef<Record<string, Gif[]>>({});
    
   const handleSearch = async(query: string) => {
       const buscar = query.toLowerCase().trim();
       if (buscar.length === 0 || previousTerms.includes(buscar)) return;
   
       setPreviousTerms(prev => {
         const nuevos = [buscar, ...prev];
   
         return nuevos.slice(0, 8)
       })
       
       if ( previousTerms.length > 8) previousTerms.pop();
       const gif = await getGifsByQuery(query);
       setGifList(gif)

       gifsCache.current[query] = gif;
       console.log(gifsCache)
    }

    const handleTermClicked = async(terms: string) => {
        if (gifsCache.current[terms]) {
            setGifList(gifsCache.current[terms]);
            return;
        }
        
        const gif = await getGifsByQuery(terms);
        setGifList(gif)
    }

  return {
    //
    previousTerms,
    gifList,
    //metodos
    handleSearch,
    handleTermClicked,
  }
}

import { CustomHeader } from './shared/components/CustomHeader'
import { SearchBar } from './shared/components/SearchBar'
import { PreviousSearches } from './gifs/components/PreviousSearches'
import { GifList } from './gifs/components/GifList'

import { useGifs } from './gifs/hooks/useGifs'

export const GiftsApp = () => {
  const { gifList, previousTerms, handleSearch, handleTermClicked } = useGifs()

  return (
    <>
    {/* { Header } */}
    <CustomHeader title='Buscador de Gifs' description='Descubre y comparte el Gifs'/>
    {/* { Search} */}
    <SearchBar placeholder='Buscar gif' onQuery={handleSearch}/>

    {/* { Busquedas previas} */}
   <PreviousSearches searches={previousTerms} onLabelClicked={handleTermClicked}/>

    {/* { Gifs } */}
    <GifList gifs={gifList}/>

    </>
  )
}

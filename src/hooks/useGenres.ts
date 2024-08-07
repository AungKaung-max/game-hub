import genres from "../data/generes"



export interface Genre {
  id: number;
  name: string;
  image_background : string;
}

const useGenres = () => ({data:genres,loading:false,error:null})

export default useGenres;

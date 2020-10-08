
import { getGifs } from '../helpers/getGifs';
import {useState, useEffect} from 'react'

export const useFetchGifs = ( category ) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs( category )
      .then( imgs => {
        setState({
          data: imgs,
          loading: false,
        })
      })
  }, [category]);  

  // useEffect( () => {
  //   getGifs( category )
  //     .then(setImages);
  // }, [ category ] );


  return state; //{ data: [], loading: true }
}


import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';
import GifGridItem from './GifGridItem';

export default function GifGrid({ category }) {


  const {data:images, loading } = useFetchGifs( category );
  
  // useEffect( () => {
  //   getGifs( category )
  //     .then(setImages);
  // }, [ category ] );


  return (
    <> 

      <h3 className="animate__animated animate__fadeInLeft">{category}</h3>

      {loading && <div className="loader"></div> }

      <div className="card-grid">
        {
          images.map( img => (
            <GifGridItem 
              key={ img.id }
              { ...img }
            />
          ) )
        }
      </div>
    </>
  )
}

import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import GifGrid from './components/GifGrid';


export const GifExpertApp = () => {

  // const categories = ['One Punch', 'Samurai X', 'Dragon Ball']

  const [categories, setCategories] = useState(['shingeki no kyojin'])

  // const handleAdd = () => {
  //   setCategories([...categories, 'Shingeki No Kiojy']);
  //   setCategories( cats => [...cats, 'HunterXHunter']);
  // }


  return(    
    <div className='container'>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={ setCategories }/>
      <hr></hr>

      <ol>
        {
          categories.map( category =>(  
            <GifGrid 
              key={category}
              category={category} 
            />
           ))
        }
      </ol>

    </div>)

}
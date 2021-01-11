import React, { useState } from 'react';
import { CategoryAdd } from './components/CategoryAdd';
import GifGrid from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(  ['CyberPunk'] );


    // const handleAdd = () => {

    //     let newCategory = 'ScrapPunk';

    //     setCategories( oldCategories => [...oldCategories, newCategory]);

    // }
    
    return (
        <>
            <h2>GifExpertApp</h2>
            <CategoryAdd setCategories={ setCategories } />
            <hr/>
           

            <ol>
              {
                  categories.map( (category) => (
                    <GifGrid 
                      category={category}
                      key={category}
                     />
                  ))
              }
            </ol>
        </>
    )
}

import { useEffect, useState } from "react"
import { AddCategory, GifGrid } from "./components"
import { CategoryTagList } from "./components/CategoryTagList"

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState([])

    console.log(categories);
    
    const onAddCategory = ( newCategory ) => {
        if( categories.includes(newCategory)) return;
        setCategories([ newCategory, ...categories ]);
    }
    
    const handleDeleteCategory = (category) => {
        console.log("Category in base", category)
        const newCategories = categories.filter((categoryItem) => categoryItem !== category)
        setCategories(newCategories)
    }

    useEffect(() => {
        console.log("categories change")
    }, [categories])

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory onAddCategory = { onAddCategory } />
            <CategoryTagList 
                categories={ categories } 
                onDeleteCategory={ handleDeleteCategory }
            />
            {
                categories.length > 0 ?
                    categories.map( category => (
                        <GifGrid 
                            key={category} 
                            category={category}
                        />
                    )):
                    <>
                        <h2>No tienes un listado de GIF's</h2>
                        <p>Te invitamos a buscar cualquier temática que desees</p>
                    </>
            }
        </>
    )
}

//ApiKey: QN69E9FfEQ5Q7cfsupp5LMghvSY3dWe2
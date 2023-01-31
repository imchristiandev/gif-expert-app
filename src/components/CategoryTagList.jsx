import { CategoryTag } from "./CategoryTag";

export const CategoryTagList = ({categories, onDeleteCategory}) => {

  console.log("Categories in tag", categories);

  const handleDeleteCategory = (category) => {
    onDeleteCategory(category)
    
  }
  return (
    <div className="tag">
      {
        categories.map((category) => 
          <CategoryTag 
            key={category} 
            name={category}
            onDeleteCategory={handleDeleteCategory}
          />
        )
      }
    </div>
  )
}

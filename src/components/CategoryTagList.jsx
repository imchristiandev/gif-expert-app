import { CategoryTag } from "./CategoryTag";

export const CategoryTagList = ({categories, onDeleteCategory}) => {

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

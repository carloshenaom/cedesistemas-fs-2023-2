import { styled } from "styled-components"
import { Category } from "../Category"
import { IoMusicalNote, IoColorPalette, IoFastFood, IoLaptop } from "react-icons/io5";
import { useState } from "react";

const CategoriesContainer = styled.section`
  display:flex;
  margin: 0 15px;
  justify-content:center;

`

const CATEGORY_LIST = [
  {
    id: 1,
    name:"Arte",
    icon: <IoColorPalette />,
    Color: "yellow"
  },
  {
    id:2,
    name:"Gastronómico",
    icon: <IoFastFood />,
    Color: "orange"
  },
  {
    id:3,
    name:"Música",
    icon: <IoMusicalNote />,
    Color: "blue"
  },
  {
    id:4,
    name:"Geek",
    icon: <IoLaptop />,
    Color: "green"
  },
]

const ALL_CATEGORIES = 0

export const Categories = () =>{

  const [categorySelected, setCategorySelected] = useState(ALL_CATEGORIES)

  const onChangeCategory = (newCategoryId)=>{
    setCategorySelected(categorySelected === newCategoryId ? ALL_CATEGORIES : newCategoryId)
  }

  return(
    <CategoriesContainer>
      {
        //CATEGORY_LIST.map(item => <Category id={item.id} name={item.name} color={item.color} icon={item.icon} />)
        CATEGORY_LIST.map(item => <Category
          isActive={categorySelected === item.id}
          {...item}
          onChangeCategory = {onChangeCategory} />) //spring operator
      }
    </CategoriesContainer>
  )
}

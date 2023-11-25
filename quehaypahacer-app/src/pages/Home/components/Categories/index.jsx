import { styled } from "styled-components"
import { Category } from "../Category"
import { IoMusicalNote, IoColorPalette, IoFastFood, IoLaptop } from "react-icons/io5";
import { useContext, useState } from "react";
import { CategoryContext } from "../../../../context/CategoryContext";

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

export const Categories = () =>{

  const { categoryState,  onChangeCategory: onChangeCategoryContext} = useContext(CategoryContext)

  const onChangeCategory = (newCategoryId)=>{
    onChangeCategoryContext(newCategoryId)
  }

  return(
    <CategoriesContainer>
      {
        CATEGORY_LIST.map((item,key) => <Category
        key={key}
          isActive={categoryState.categorySelected === item.id}
          {...item}
          onChangeCategory = {onChangeCategory} />) //spring operator
      }
    </CategoriesContainer>
  )
}

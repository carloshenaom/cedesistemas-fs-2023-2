import { styled } from "styled-components"
import { Category } from "../Category"
import { IoMusicalNote, IoColorPalette, IoFastFood, IoLaptop } from "react-icons/io5";

const CategoriesContainer = styled.section`
  display:flex;
  margin: 0 15px;
  justify-content:center;

`

const CATEGORY_LIST = [
  {
    name:"Arte",
    icon: <IoColorPalette />,
    Color: "yellow"
  },
  {
    name:"Gastronómico",
    icon: <IoFastFood />,
    Color: "orange"
  },
  {
    name:"Música",
    icon: <IoMusicalNote />,
    Color: "blue"
  },
  {
    name:"Geek",
    icon: <IoLaptop />,
    Color: "green"
  },
]

export const Categories = () =>{

  return(
    <CategoriesContainer>
      {
        CATEGORY_LIST.map(item => <Category name={item.name} color={item.color} icon={item.icon} />)
      }
    </CategoriesContainer>
  )
}

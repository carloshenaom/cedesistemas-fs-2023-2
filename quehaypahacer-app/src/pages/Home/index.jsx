import { useEffect } from "react"
import { Layout } from "../../components/Layout"
import { CategoryContextStore } from "../../context/CategoryContext"
import { Categories } from "./components/Categories"
import { TopEvents } from "./components/TopEvents"
import { useCurrentPosition } from "../../hooks/useCurrentPosition"

export const Home = () => {

  const [latitude, longitude] = useCurrentPosition()


  return (
    <Layout>
      <CategoryContextStore>
        <Categories />
        <TopEvents latitude={latitude} longitude={longitude} />
      </CategoryContextStore>
    </Layout>
  )
}

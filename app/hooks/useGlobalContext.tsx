import { GlobalContext } from "../contexts/GlobalContext"
import { useContext } from "react"

export const useGlobalContext = () => {
  const context = useContext(GlobalContext)

  if(!context) {
    throw Error('useAuthContext must be used inside an global')
  }

  return context
}
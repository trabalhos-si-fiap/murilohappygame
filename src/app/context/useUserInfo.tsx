import { useContext } from "react"
import { UserInfo } from "./userContext"

export const useUserInfo = () => {
  const context = useContext(UserInfo)
  return context
}
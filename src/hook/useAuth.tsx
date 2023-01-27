import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react"
import { toast } from 'react-toastify'

import { produce } from "immer"

import { IProducts } from "../pages/Home"
import { api } from "../services/api"

interface ICartItems extends IProducts {
  userId: string
  quantity: number
  createdAt: Date
}

interface IUser {
  id?: string
  name?: string
  email: string
  password: string
  requests?: string[]
  role?: "USER" | "ADMIN"
}

interface IData {
  user: IUser
  token: string
}

interface AuthContextType {
  user: IUser
  signIn: ({ email, password }: IUser) => Promise<void>
  signOut: () => void
  cartQuantity: number
  addProductToCart: (product: ICartItems) => void
  search: string
  setSearch: Dispatch<SetStateAction<string>>
  cartItemsTotalPrice: number
  filteredCartOfUser: ICartItems[]
  removeProductCard: (cartItemId: string) => void
  cleanCartItems: () => void
  cartItems: ICartItems[]
  loading: boolean
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

interface AuthProviderProps {
  children: ReactNode
}

function AuthProvider({ children }: AuthProviderProps) {
  const [data, setData] = useState<IData>({} as IData)
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(false)
  const [cartItems, setCartItems] = useState<ICartItems[]>(() => {
    const storedCartItems = localStorage.getItem("@foodexplorer:cartItems")
    if (storedCartItems) {
      const usersCart: ICartItems[] = JSON.parse(storedCartItems)

      return usersCart;
    }

    return []
  })

  const filteredCartOfUser = cartItems.filter(
    cartItem => cartItem.userId === data.user?.id
  )

  const cartQuantity = filteredCartOfUser.length

  const cartItemsTotalPrice = filteredCartOfUser.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity
  }, 0)

  function addProductToCart(product: ICartItems) {
    const filteredCartOfUser = cartItems.filter(
      cartItem => cartItem.userId === data.user?.id
    )

    const productAlreadyExistsOnCart = filteredCartOfUser.findIndex(
      cartItem => cartItem.id === product.id
    )

    const newProductOnCart = produce(filteredCartOfUser, (draft) => {
      if (productAlreadyExistsOnCart < 0) {
        draft.push(product)
      } else {
        draft[productAlreadyExistsOnCart].quantity += product.quantity
      }
    })

    const cartFilteredWithoutCurrentUser = cartItems.filter(
      cartItem => cartItem.userId !== data.user?.id
    )

    cartFilteredWithoutCurrentUser.push(...newProductOnCart)

    setCartItems(cartFilteredWithoutCurrentUser)
  }

  function removeProductCard(cartItemId: string) {
    const filteredCartOfUser = cartItems.filter(
      cartItem => cartItem.userId === data.user?.id
    )

    const removedProductOnList = filteredCartOfUser.filter(
      cartItem => cartItem.id !== cartItemId
    )

    const newCart = cartItems.filter(
      cartItem => cartItem.userId !== data.user?.id
    )
    
    newCart.push(...removedProductOnList)

    setCartItems(newCart)
  }

  function cleanCartItems() {
    const cleanedCartUser = cartItems.filter(
      cartItems => cartItems.userId !== data.user?.id
    )

    setCartItems(cleanedCartUser)
  }

  async function signIn({ email, password }: IUser) {
    try {
      setLoading(true)
      const response = await api.post("/authenticate", { email, password })
      const { user, token } = response.data as IData

      localStorage.setItem("@foodexplorer:user", JSON.stringify(user))
      localStorage.setItem("@foodexplorer:token", token)

      setData({ user, token })
    } catch (error: any) {
      if (error.message) {
        toast.error(error.response.data.message)
      } else {
        toast.error("Não foi possível logar com o usuário.")
      }
    } finally {
      setLoading(false)
    }
  }

  function signOut() {
    localStorage.removeItem("@foodexplorer:user")
    localStorage.removeItem("@foodexplorer:token")

    setData({} as IData)
  }

  useEffect(() => {
    localStorage.setItem("@foodexplorer:cartItems", JSON.stringify(cartItems))

  }, [cartItems])

  useEffect(() => {
    const token = localStorage.getItem("@foodexplorer:token")
    const user = localStorage.getItem("@foodexplorer:user")

    if (token && user) {
      api.defaults.headers.common["authorization"] = `bearer ${token}`

      setData({
        token,
        user: JSON.parse(user)
      })
    }
  }, [])

  return (
    <AuthContext.Provider value={{
      signOut,
      signIn,
      user: data.user,
      cartQuantity,
      addProductToCart,
      search,
      setSearch,
      cartItemsTotalPrice,
      filteredCartOfUser,
      removeProductCard,
      cleanCartItems,
      cartItems,
      loading
    }}>{children}</AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }

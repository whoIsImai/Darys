import { useCart } from './useCart'

type cartItem = {
    id : string
    name : string
    img : string
    price : number
}

export const addCart = (item : cartItem)=> {

    const addToCart = useCart(state => state.addToCart)

    addToCart({
        id: item.id,
      name: item.name,
      img: item.img,
      price: item.price
    })
}

export const removeFrmCart = (item: cartItem)=> {
    const removeFromCart = useCart(state => state.removeFromCart)

    removeFromCart(item.id)
}
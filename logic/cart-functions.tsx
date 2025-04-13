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

export const increment = (item : cartItem)=> {
    const increaseQuantity = useCart(state => state.increaseQuantity)

    increaseQuantity(item.id)
}

export const decrement = (item : cartItem)=> {
    const decrementQuantity = useCart(state => state.decrementQuantity)

    decrementQuantity(item.id)
}
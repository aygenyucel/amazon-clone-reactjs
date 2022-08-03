export const initialState = {
    cart: [],
    user: null,
    
}

// Selector
export const getCartTotal = (cart) =>
    cart?.reduce( (amount,item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {

        case 'ADD_TO_CART': 
            return {
                ...state, //means whatever stage originally was,
                cart: [...state.cart, action.item],
                
            };

        case 'EMPTY_CART':
            return {
                ...state,
                cart: [],
            };

        case 'REMOVE_FROM_CART':

        //there are may be more than one item with same IDs.
        //but we want to delete only the item that we click
        //so, first we need to find the index of the item in cart
        //and then if we find the index, we just delete the item on that index(splice)
            const index = state.cart.findIndex(
                (cartItem) => cartItem.id === action.id
            );

            let newCart = [...state.cart];

            if (index >= 0) {
                newCart.splice(index, 1);

            } else {
                console.warn(
                    `Can't remove product (id: ${action.id}) as it's not in cart!`
                )
            }

            return {
                ...state,
                cart: newCart
            }

        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }

        default:
            return state;
            
    }
};
export default reducer;
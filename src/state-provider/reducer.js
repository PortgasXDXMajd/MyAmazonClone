export const initialState = {
    basket: []
}

//Selector
export const getTotalBasket = (basket) =>
    basket?.reduce((amount, item) => item.prise + amount, 0);


export const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        default:
            return state;
    }

}
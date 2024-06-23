import { createStore } from 'vuex';
import axios from 'axios';


function updateLocalStorage(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

const store = createStore({
    state: {
        products: [],
        selectedProduct: {},
        cart: []
    },
    getters: {
    
        productQuantity: state => product => {
            const item = state.cart.find(i => i.id === product.id);
            if (item) return item.quantity;
            else return null;
        },
      
        cartItems: state => {
            return state.cart;
        },
        
        cartTotal: state => {
            return state.cart.reduce((total, item) => total + item.quantity * item.product_price, 0);
        }
    },
    actions: {
        async fetchProducts({ commit }) {
            try {
                const response = await axios.get('https://alvahtek.com/projects/ota/group1/get-products.php');
                commit('setProducts', response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        },
        async fetchProductById({ commit }, id) {
            try {
                const response = await axios.get(`https://alvahtek.com/projects/ota/group1/get-products.php?id=${id}`);
                commit('setSelectedProduct', response.data);
            } catch (error) {
                console.error('Error fetching product by ID:', error);
            }
        }
    },
    mutations: {
        setProducts(state, products) {
            state.products = products;
        },
        setSelectedProduct(state, product) {
            state.selectedProduct = product;
        },
        addToCart(state, product) {
            let item = state.cart.find(i => i.id === product.id);
            if (item) {
                item.quantity++;
            } else {
                state.cart.push({ ...product, quantity: 1 });
            }
            updateLocalStorage(state.cart);
        },
        removeFromCart(state, product) {
            let item = state.cart.find(i => i.id === product.id);
            if (item) {
                if (item.quantity > 1) {
                    item.quantity--;
                } else {
                    state.cart = state.cart.filter(i => i.id !== product.id); 
                }
            }
            updateLocalStorage(state.cart);
        },
        deleteFromCart(state, product) {
            state.cart = state.cart.filter(i => i.id !== product.id); 
            updateLocalStorage(state.cart);
        },
        updateCartFromLocalStorage(state) {
            const cart = localStorage.getItem('cart');
            if (cart) {
                state.cart = JSON.parse(cart);
            }
        }
    }
});

export default store;

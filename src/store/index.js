import {createStore}  from 'vuex';
import axios from 'axios'
const store = createStore({
    state:{
        products:[],
    },
    getters:{

    },
    actions:{
        async fetchProducts({commit}){
            const response = await axios.get('http://localhost/PRODUCTSDATA/get-products.php')
            commit('setProducts' ,response.data)
        },
        
    },
    mutations:{
        setProducts(state , products){
          state.products = products  
        }
    }
})
export default store
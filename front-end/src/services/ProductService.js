import React from 'react';
import axios from 'axios';

export class ProductService extends React.Component {



     
    async getProdutos() {
        try {
            const res = await axios.get('http://localhost:3000/produtos');
            console.log(res)
            return await res
            
        } catch (error) {
            throw error;
        }
    }


  
}

export default new ProductService();
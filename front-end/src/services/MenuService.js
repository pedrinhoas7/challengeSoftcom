import React from 'react';
import axios from 'axios';

export class MenuService extends React.Component {



     
    async getEmpresa() {
        try {
            const res = await axios.get('http://localhost:3000/empresa/1');
            return await res.data
            
        } catch (error) {
            throw error;
        }
    }

  
}

export default new MenuService();
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductsList from './productsList';

export default function Profile({token, user}) {
    const [list, setList] = useState();
    useEffect(() => {
        if (token) {
            fetchData(token);
        }
    }, [token]);
    const fetchData = async (token) => {
        try {
            // await axios.get(
            //     'http://localhost:5000/api/v1/products/qUoLDRN0BimrKnDhajkW',
            //     {
            //         headers: {
            //             'Authorization': `Bearer ${token}`
            //         }
            //     }
            // );
            const res = await axios.get(
                'http://localhost:5000/api/v1/users/recentlyViewed',
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            );
            setList(res.data.viewedProducts);
        } catch (error) {
            console.log(error);
        }

    };

    return (
        <div>
            <h1>Profile</h1>
            <h3>{user.name} | {user.email}</h3>
            <div>----------------- Recently Viewed products -----------------</div>
            {list ? <ProductsList list={list}/> :<div></div>}
        </div>
    )
}
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

import React, {useState, useEffect} from 'react'
import './OrderPage.css'
import { db } from '../firebase';
import { useStateValue } from '../state-provider/StateProvider';
import Order from './Order'

function OrderPage() {
    const [orders, setOrders] = useState([]);
    const [{basket ,user},dispatch] = useStateValue();

    useEffect(() => {
        if(user){
            console.log('here')
            db.collection('users')
            .doc(user?.uid)
            .collection('orders')
            .orderBy('created','desc')
            .onSnapshot( snapshot => (
                setOrders(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            ));
            console.log('you order is >>>>> ',orders);
        }else{
            setOrders([]);
        }
        
    }, user)



    return (
        <div className="orderPage">
            <h1>Hello {user?.email.substring(0, user.email.indexOf('@')).toUpperCase()}</h1>
            <h2>Your Order History</h2>
            <div className="orderPage_orders">
                {orders?.map((order => (
                    <Order order={order} />
                )))}
            </div>
        </div>
    )
}

export default OrderPage

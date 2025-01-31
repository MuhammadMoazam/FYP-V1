import { useContext } from "react";
import { ApiContext } from "./APIContext";

const useApi = () => {
    const context = useContext(ApiContext);
    if (!context) {
        throw new Error('useApi must be used within an ApiProvider');
    }

    // Order related API calls
    const getOrders = async () => {
        try {
            const response = await fetch(`${context.API_URL}/orders/my-orders`, {
                method: 'GET',
                headers: {
                    'Authorization': context.Cookies.get('session'),
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            
            if (response.ok) {
                return { success: true, data };
            } else {
                return { success: false, message: data.message };
            }
        } catch (error) {
            console.error('Error fetching orders:', error);
            return { success: false, message: 'Failed to fetch orders' };
        }
    };

    const getOrderById = async (orderId) => {
        try {
            const response = await fetch(`${context.API_URL}/orders/${orderId}`, {
                method: 'GET',
                headers: {
                    'Authorization': context.Cookies.get('session'),
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            
            if (response.ok) {
                return { success: true, data };
            } else {
                return { success: false, message: data.message };
            }
        } catch (error) {
            console.error('Error fetching order:', error);
            return { success: false, message: 'Failed to fetch order details' };
        }
    };

    const createOrder = async (orderData) => {
        try {
            const response = await fetch(`${context.API_URL}/orders`, {
                method: 'POST',
                headers: {
                    'Authorization': context.Cookies.get('session'),
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(orderData)
            });
            const data = await response.json();
            
            if (response.ok) {
                return { success: true, data };
            } else {
                return { success: false, message: data.message };
            }
        } catch (error) {
            console.error('Error creating order:', error);
            return { success: false, message: 'Failed to create order' };
        }
    };

    const cancelOrder = async (orderId) => {
        try {
            const response = await fetch(`${context.API_URL}/orders/${orderId}/cancel`, {
                method: 'PATCH',
                headers: {
                    'Authorization': context.Cookies.get('session'),
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            
            if (response.ok) {
                return { success: true, data };
            } else {
                return { success: false, message: data.message };
            }
        } catch (error) {
            console.error('Error cancelling order:', error);
            return { success: false, message: 'Failed to cancel order' };
        }
    };

    return { ...context, getOrders, getOrderById, createOrder, cancelOrder };
};

export default useApi
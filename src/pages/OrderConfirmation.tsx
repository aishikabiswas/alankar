
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const OrderConfirmation = () => {
  // Generate a random order number
  const orderNumber = `AL-${Math.floor(100000 + Math.random() * 900000)}`;
  
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-8 text-center">
        <div className="mb-6">
          <CheckCircle className="h-16 w-16 mx-auto text-green-500" />
        </div>
        <h1 className="text-3xl font-bold mb-4">Order Confirmed!</h1>
        <p className="text-gray-600 mb-6">
          Thank you for your purchase. Your order has been received and is now being processed.
        </p>
        
        <div className="mb-8 p-4 bg-gray-50 rounded-md">
          <h2 className="font-semibold mb-2">Order Details</h2>
          <p className="text-gray-600">Order Number: <span className="font-semibold">{orderNumber}</span></p>
        </div>
        
        <p className="text-gray-600 mb-6">
          You will receive a confirmation email with your order details shortly.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link to="/">
            <Button variant="outline">Continue Shopping</Button>
          </Link>
          <Button className="bg-purple hover:bg-purple-dark">Track Order</Button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;

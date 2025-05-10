
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

const CheckoutPage = () => {
  const { items, total, clearCart } = useCart();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    paymentMethod: 'card' as 'card' | 'upi' | 'cod'
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // In a real app, this would submit to a payment gateway or backend
    setTimeout(() => {
      toast({
        title: "Order placed successfully!",
        description: "Thank you for your purchase. You will receive a confirmation email shortly."
      });
      clearCart();
      navigate('/order-confirmation');
      setIsLoading(false);
    }, 2000);
  };
  
  const shippingCost = total > 1500 ? 0 : 100;
  const totalWithShipping = total + shippingCost;
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input 
                    id="firstName" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input 
                    id="lastName" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input 
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">Shipping Address</h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="address">Street Address</Label>
                  <Input 
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input 
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="state">State</Label>
                    <Select 
                      onValueChange={(value) => handleSelectChange('state', value)}
                      defaultValue={formData.state}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select state" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="delhi">Delhi</SelectItem>
                        <SelectItem value="maharashtra">Maharashtra</SelectItem>
                        <SelectItem value="karnataka">Karnataka</SelectItem>
                        <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                        <SelectItem value="uttar-pradesh">Uttar Pradesh</SelectItem>
                        <SelectItem value="kerala">Kerala</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="postalCode">Postal Code</Label>
                    <Input 
                      id="postalCode"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">Payment Method</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <input 
                    type="radio"
                    id="card"
                    name="paymentMethod"
                    value="card"
                    checked={formData.paymentMethod === 'card'}
                    onChange={() => handleSelectChange('paymentMethod', 'card')}
                    className="h-4 w-4 text-purple"
                  />
                  <Label htmlFor="card" className="cursor-pointer">Credit / Debit Card</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input 
                    type="radio"
                    id="upi"
                    name="paymentMethod"
                    value="upi"
                    checked={formData.paymentMethod === 'upi'}
                    onChange={() => handleSelectChange('paymentMethod', 'upi')}
                    className="h-4 w-4 text-purple"
                  />
                  <Label htmlFor="upi" className="cursor-pointer">UPI Payment</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input 
                    type="radio"
                    id="cod"
                    name="paymentMethod"
                    value="cod"
                    checked={formData.paymentMethod === 'cod'}
                    onChange={() => handleSelectChange('paymentMethod', 'cod')}
                    className="h-4 w-4 text-purple"
                  />
                  <Label htmlFor="cod" className="cursor-pointer">Cash on Delivery</Label>
                </div>
              </div>
            </div>
            
            <div className="lg:hidden">
              <OrderSummary
                items={items}
                total={total}
                shippingCost={shippingCost}
                totalWithShipping={totalWithShipping}
              />
            </div>
            
            <div className="flex justify-end">
              <Button 
                type="submit"
                className="w-full md:w-auto bg-purple hover:bg-purple-dark"
                disabled={isLoading}
              >
                {isLoading ? 'Processing...' : 'Place Order'}
              </Button>
            </div>
          </form>
        </div>
        
        <div className="hidden lg:block lg:w-1/3">
          <OrderSummary
            items={items}
            total={total}
            shippingCost={shippingCost}
            totalWithShipping={totalWithShipping}
          />
        </div>
      </div>
    </div>
  );
};

interface OrderSummaryProps {
  items: {
    product: {
      id: string;
      name: string;
      price: number;
      images: string[];
    };
    quantity: number;
  }[];
  total: number;
  shippingCost: number;
  totalWithShipping: number;
}

const OrderSummary = ({ items, total, shippingCost, totalWithShipping }: OrderSummaryProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
      <h2 className="text-xl font-bold mb-4">Order Summary</h2>
      
      <div className="space-y-4 mb-4">
        {items.map((item) => (
          <div key={item.product.id} className="flex justify-between">
            <div className="flex">
              <img 
                src={item.product.images[0]} 
                alt={item.product.name} 
                className="w-12 h-12 rounded object-cover"
              />
              <div className="ml-3">
                <p className="font-medium">{item.product.name}</p>
                <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
              </div>
            </div>
            <div className="font-medium">
              {formatPrice(item.product.price * item.quantity)}
            </div>
          </div>
        ))}
      </div>
      
      <div className="border-t border-gray-200 pt-4 space-y-3">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal</span>
          <span>{formatPrice(total)}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Shipping</span>
          <span>{shippingCost === 0 ? 'Free' : formatPrice(shippingCost)}</span>
        </div>
        <div className="border-t border-gray-200 pt-3 flex justify-between font-bold">
          <span>Total</span>
          <span>{formatPrice(totalWithShipping)}</span>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Trash2, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Elegant Black Dress",
      price: 299,
      quantity: 1,
      size: "M",
      color: "Black",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663564546189/WpnnoNX7avyJd7EhmAFAFj/9H72CUGX2V1b_926e9ff3.jpg",
    },
    {
      id: 2,
      name: "Luxury Fashion Jacket",
      price: 399,
      quantity: 1,
      size: "L",
      color: "Navy",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663564546189/WpnnoNX7avyJd7EhmAFAFj/XOwqFkwvPsh2_e6e24fc9.jpg",
    },
  ]);

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = Math.round(subtotal * 0.1 * 100) / 100;
  const shipping = subtotal > 100 ? 0 : 15;
  const total = subtotal + tax + shipping;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Header */}
        <section className="border-b border-border/30 py-8">
          <div className="container">
            <h1 className="text-3xl md:text-4xl font-bold">Shopping Cart</h1>
          </div>
        </section>

        {/* Cart Content */}
        <section className="py-12">
          <div className="container">
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-6">
                  Your cart is empty
                </p>
                <Link href="/products">
                  <Button className="px-6 py-3 bg-foreground text-background font-medium rounded-sm hover:shadow-lg transition-all duration-300 ease-in-out">
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-6">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-6 border border-border/30 rounded-sm p-6"
                    >
                      {/* Image */}
                      <div className="w-24 h-24 bg-muted rounded-sm overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Details */}
                      <div className="flex-1 space-y-2">
                        <Link href={`/product/${item.id}`}>
                          <h3 className="font-semibold hover:text-muted-foreground transition-colors cursor-pointer">
                            {item.name}
                          </h3>
                        </Link>
                        <div className="text-sm text-muted-foreground space-y-1">
                          <p>Size: {item.size}</p>
                          <p>Color: {item.color}</p>
                        </div>
                      </div>

                      {/* Quantity & Price */}
                      <div className="flex flex-col items-end justify-between">
                        <p className="font-semibold">${item.price}</p>
                        <div className="flex items-center border border-border/50 rounded-sm">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="px-3 py-1 hover:bg-muted transition-colors"
                          >
                            −
                          </button>
                          <span className="px-4 py-1 border-l border-r border-border/50">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="px-3 py-1 hover:bg-muted transition-colors"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  ))}

                  {/* Continue Shopping */}
                  <Link href="/products">
                    <Button
                      variant="outline"
                      className="w-full gap-2"
                    >
                      Continue Shopping <ChevronRight size={20} />
                    </Button>
                  </Link>
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                  <div className="border border-border/30 rounded-sm p-6 space-y-6 sticky top-20">
                    <h2 className="text-xl font-bold">Order Summary</h2>

                    <div className="space-y-3 border-b border-border/30 pb-6">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Tax (10%)</span>
                        <span>${tax.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Shipping</span>
                        <span>
                          {shipping === 0 ? (
                            <span className="text-green-600">Free</span>
                          ) : (
                            `$${shipping.toFixed(2)}`
                          )}
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>

                    {shipping > 0 && (
                      <p className="text-xs text-muted-foreground">
                        Free shipping on orders over $100
                      </p>
                    )}

                    <Link href="/checkout">
                      <Button className="w-full px-6 py-3 bg-foreground text-background font-medium rounded-sm hover:shadow-lg transition-all duration-300 ease-in-out">
                        Proceed to Checkout
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

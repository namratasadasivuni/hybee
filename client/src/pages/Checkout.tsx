import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";

export default function Checkout() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    paymentMethod: "card",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePaymentMethodChange = (method: string) => {
    setFormData((prev) => ({ ...prev, paymentMethod: method }));
  };

  const subtotal = 698;
  const tax = 69.8;
  const shipping = 0;
  const total = subtotal + tax + shipping;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Header */}
        <section className="border-b border-border/30 py-8">
          <div className="container">
            <Link href="/cart">
              <span className="text-sm text-muted-foreground hover:text-foreground cursor-pointer flex items-center gap-2 mb-4">
                <ChevronLeft size={16} /> Back to Cart
              </span>
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold">Checkout</h1>
          </div>
        </section>

        {/* Checkout Content */}
        <section className="py-12">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Form */}
              <div className="lg:col-span-2">
                {/* Step Indicator */}
                <div className="flex gap-4 mb-12">
                  {[1, 2, 3].map((s) => (
                    <div
                      key={s}
                      className={`flex-1 h-1 rounded-full ${
                        s <= step ? "bg-foreground" : "bg-muted"
                      }`}
                    />
                  ))}
                </div>

                {/* Step 1: Shipping Address */}
                {step === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold mb-6">Shipping Address</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="John"
                          className="w-full px-4 py-2 border border-border/50 rounded-sm bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-all duration-300 ease-in-out"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Doe"
                          className="w-full px-4 py-2 border border-border/50 rounded-sm bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-all duration-300 ease-in-out"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-2 border border-border/50 rounded-sm bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-all duration-300 ease-in-out"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 123-4567"
                        className="w-full px-4 py-2 border border-border/50 rounded-sm bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-all duration-300 ease-in-out"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Address *
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="123 Main Street"
                        className="w-full px-4 py-2 border border-border/50 rounded-sm bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-all duration-300 ease-in-out"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          City *
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          placeholder="New York"
                          className="w-full px-4 py-2 border border-border/50 rounded-sm bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-all duration-300 ease-in-out"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          State/Province *
                        </label>
                        <input
                          type="text"
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          placeholder="NY"
                          className="w-full px-4 py-2 border border-border/50 rounded-sm bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-all duration-300 ease-in-out"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          ZIP Code *
                        </label>
                        <input
                          type="text"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleInputChange}
                          placeholder="10001"
                          className="w-full px-4 py-2 border border-border/50 rounded-sm bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-all duration-300 ease-in-out"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Country *
                        </label>
                        <input
                          type="text"
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          placeholder="United States"
                          className="w-full px-4 py-2 border border-border/50 rounded-sm bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-all duration-300 ease-in-out"
                        />
                      </div>
                    </div>

                    <Button
                      onClick={() => setStep(2)}
                      className="w-full px-6 py-3 bg-foreground text-background font-medium rounded-sm hover:shadow-lg transition-all duration-300 ease-in-out"
                    >
                      Continue to Payment
                    </Button>
                  </div>
                )}

                {/* Step 2: Payment Method */}
                {step === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold mb-6">Payment Method</h2>

                    <div className="space-y-3">
                      {[
                        { id: "card", label: "Credit/Debit Card" },
                        { id: "upi", label: "UPI" },
                        { id: "cod", label: "Cash on Delivery" },
                      ].map((method) => (
                        <button
                          key={method.id}
                          onClick={() => handlePaymentMethodChange(method.id)}
                          className={`w-full p-4 border-2 rounded-sm text-left transition-all ${
                            formData.paymentMethod === method.id
                              ? "border-foreground bg-muted/50"
                              : "border-border/30 hover:border-border"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                                formData.paymentMethod === method.id
                                  ? "border-foreground"
                                  : "border-border/50"
                              }`}
                            >
                              {formData.paymentMethod === method.id && (
                                <div className="w-3 h-3 bg-foreground rounded-full" />
                              )}
                            </div>
                            <span className="font-medium">{method.label}</span>
                          </div>
                        </button>
                      ))}
                    </div>

                    {formData.paymentMethod === "card" && (
                      <div className="space-y-4 border border-border/30 rounded-sm p-6">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Card Number
                          </label>
                          <input
                            type="text"
                            placeholder="1234 5678 9012 3456"
                            className="w-full px-4 py-2 border border-border/50 rounded-sm bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-all duration-300 ease-in-out"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-2">
                              Expiry Date
                            </label>
                            <input
                              type="text"
                              placeholder="MM/YY"
                              className="w-full px-4 py-2 border border-border/50 rounded-sm bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-all duration-300 ease-in-out"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2">
                              CVV
                            </label>
                            <input
                              type="text"
                              placeholder="123"
                              className="w-full px-4 py-2 border border-border/50 rounded-sm bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-all duration-300 ease-in-out"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        onClick={() => setStep(1)}
                        className="flex-1"
                      >
                        Back
                      </Button>
                      <Button
                        onClick={() => setStep(3)}
                        className="flex-1 px-6 py-3 bg-foreground text-background font-medium rounded-sm hover:shadow-lg transition-all duration-300 ease-in-out"
                      >
                        Review Order
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 3: Order Review */}
                {step === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold mb-6">Order Review</h2>

                    <div className="border border-border/30 rounded-sm p-6 space-y-4">
                      <h3 className="font-semibold">Shipping Address</h3>
                      <p className="text-sm text-muted-foreground">
                        {formData.firstName} {formData.lastName}
                        <br />
                        {formData.address}
                        <br />
                        {formData.city}, {formData.state} {formData.zipCode}
                        <br />
                        {formData.country}
                      </p>
                    </div>

                    <div className="border border-border/30 rounded-sm p-6 space-y-4">
                      <h3 className="font-semibold">Payment Method</h3>
                      <p className="text-sm text-muted-foreground capitalize">
                        {formData.paymentMethod === "card"
                          ? "Credit/Debit Card"
                          : formData.paymentMethod === "upi"
                          ? "UPI"
                          : "Cash on Delivery"}
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        onClick={() => setStep(2)}
                        className="flex-1"
                      >
                        Back
                      </Button>
                      <Button
                        onClick={() => alert("Order placed successfully!")}
                        className="flex-1 px-6 py-3 bg-foreground text-background font-medium rounded-sm hover:shadow-lg transition-all duration-300 ease-in-out"
                      >
                        Place Order
                      </Button>
                    </div>
                  </div>
                )}
              </div>

              {/* Order Summary Sidebar */}
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
                      <span className="text-green-600">Free</span>
                    </div>
                  </div>

                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

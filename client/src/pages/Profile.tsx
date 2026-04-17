import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/_core/hooks/useAuth";
import { useState } from "react";
import { Package, Settings, LogOut } from "lucide-react";

export default function Profile() {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState("orders");
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: "",
  });

  const orders = [
    {
      id: "ORD-001",
      date: "2024-03-15",
      total: 698,
      status: "Delivered",
      items: 2,
    },
    {
      id: "ORD-002",
      date: "2024-02-28",
      total: 349,
      status: "Delivered",
      items: 1,
    },
    {
      id: "ORD-003",
      date: "2024-02-10",
      total: 1047,
      status: "Processing",
      items: 3,
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Header */}
        <section className="border-b border-border/30 py-8">
          <div className="container">
            <h1 className="text-3xl md:text-4xl font-bold">My Account</h1>
            <p className="text-muted-foreground mt-2">
              Welcome back, {user?.name || "Guest"}
            </p>
          </div>
        </section>

        {/* Profile Content */}
        <section className="py-12">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Sidebar Navigation */}
              <div className="md:col-span-1">
                <div className="space-y-2">
                  <button
                    onClick={() => setActiveTab("orders")}
                    className={`w-full text-left px-4 py-3 rounded-sm transition-colors flex items-center gap-2 ${
                      activeTab === "orders"
                        ? "bg-muted text-foreground font-semibold"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Package size={20} /> Orders
                  </button>
                  <button
                    onClick={() => setActiveTab("settings")}
                    className={`w-full text-left px-4 py-3 rounded-sm transition-colors flex items-center gap-2 ${
                      activeTab === "settings"
                        ? "bg-muted text-foreground font-semibold"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Settings size={20} /> Settings
                  </button>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-3 rounded-sm transition-colors text-muted-foreground hover:text-foreground flex items-center gap-2"
                  >
                    <LogOut size={20} /> Logout
                  </button>
                </div>
              </div>

              {/* Main Content */}
              <div className="md:col-span-3">
                {/* Orders Tab */}
                {activeTab === "orders" && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold mb-6">Order History</h2>

                    {orders.length === 0 ? (
                      <div className="text-center py-12">
                        <p className="text-muted-foreground">
                          You haven't placed any orders yet.
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {orders.map((order) => (
                          <div
                            key={order.id}
                            className="border border-border/30 rounded-sm p-6 hover:shadow-md transition-shadow"
                          >
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                              <div>
                                <p className="text-sm text-muted-foreground mb-1">
                                  Order ID
                                </p>
                                <p className="font-semibold">{order.id}</p>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground mb-1">
                                  Date
                                </p>
                                <p className="font-semibold">
                                  {new Date(order.date).toLocaleDateString()}
                                </p>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground mb-1">
                                  Total
                                </p>
                                <p className="font-semibold">
                                  ${order.total.toFixed(2)}
                                </p>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground mb-1">
                                  Status
                                </p>
                                <p
                                  className={`font-semibold ${
                                    order.status === "Delivered"
                                      ? "text-green-600"
                                      : "text-blue-600"
                                  }`}
                                >
                                  {order.status}
                                </p>
                              </div>
                            </div>
                            <div className="mt-4 pt-4 border-t border-border/30">
                              <p className="text-sm text-muted-foreground">
                                {order.items} item{order.items > 1 ? "s" : ""}
                              </p>
                              <Button
                                variant="outline"
                                size="sm"
                                className="mt-2"
                              >
                                View Details
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Settings Tab */}
                {activeTab === "settings" && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold mb-6">Account Settings</h2>

                    <div className="border border-border/30 rounded-sm p-6 space-y-6">
                      <div>
                        <h3 className="font-semibold mb-4">Personal Information</h3>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium mb-2">
                              Full Name
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              className="w-full px-4 py-2 border border-border/50 rounded-sm bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-all duration-300 ease-in-out"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2">
                              Email
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              className="w-full px-4 py-2 border border-border/50 rounded-sm bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-all duration-300 ease-in-out"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2">
                              Phone Number
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
                        </div>
                      </div>

                      <div className="border-t border-border/30 pt-6">
                        <h3 className="font-semibold mb-4">Preferences</h3>
                        <div className="space-y-3">
                          <label className="flex items-center gap-3">
                            <input
                              type="checkbox"
                              defaultChecked
                              className="w-4 h-4"
                            />
                            <span className="text-sm">
                              Receive promotional emails
                            </span>
                          </label>
                          <label className="flex items-center gap-3">
                            <input
                              type="checkbox"
                              defaultChecked
                              className="w-4 h-4"
                            />
                            <span className="text-sm">
                              Receive order updates
                            </span>
                          </label>
                          <label className="flex items-center gap-3">
                            <input type="checkbox" className="w-4 h-4" />
                            <span className="text-sm">
                              Subscribe to newsletter
                            </span>
                          </label>
                        </div>
                      </div>

                      <div className="border-t border-border/30 pt-6">
                        <Button className="px-6 py-3 bg-foreground text-background font-medium rounded-sm hover:shadow-lg transition-all duration-300 ease-in-out">
                          Save Changes
                        </Button>
                      </div>
                    </div>

                    <div className="border border-border/30 rounded-sm p-6">
                      <h3 className="font-semibold mb-4">Danger Zone</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Once you delete your account, there is no going back.
                        Please be certain.
                      </p>
                      <Button
                        variant="outline"
                        className="border-red-600 text-red-600 hover:bg-red-50"
                      >
                        Delete Account
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

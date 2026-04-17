import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { ChevronDown, X } from "lucide-react";
import { useState } from "react";

export default function Products() {
  const [location] = useLocation();
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [sortBy, setSortBy] = useState("newest");

  const products = [
    {
      id: 1,
      name: "Noir Leather Jacket",
      price: 2999,
      category: "women",
      image:
        "https://i.ibb.co/s9QcwVkn/Damen-Schwarze-Lange-rmel-Rei-verschluss-Kragen-PU-Leder-L-ssig-Jacke-Herbst.jpg",
      rating: 4.8,
      reviews: 124,
    },
    {
      id: 2,
      name: "Cotton Comfort Inner Tee",
      price: 3999,
      category: "men",
      image:
        "https://i.ibb.co/20SDZZ2J/ORTC-Men-s-Henderson-Box-Fit-T-Shirt-Charcoal.jpg",
      rating: 4.9,
      reviews: 89,
    },
    {
      id: 3,
      name: "Ribbed Knit Inner Top",
      price: 3499,
      category: "women",
      image:
        "https://i.ibb.co/nq1h2FcX/Y2-K-Ribbed-Knit-Lace-up-Tank-Top-and-Pants-Set-Retro-90s-Fashion-Outfit-Camel-M-Camel-M.jpg",
      rating: 4.7,
      reviews: 156,
    },
    {
      id: 4,
      name: "Lounge Set",
      price: 4499,
      category: "men",
      image:
        "https://i.ibb.co/VYdyHhTQ/download-12.jpg",
      rating: 4.6,
      reviews: 203,
    },
    {
      id: 5,
      name: "Minimalist Co-ord Set",
      price: 1999,
      category: "women",
      image:
        "https://i.ibb.co/0Rjs4VRG/download-13.jpg",
      rating: 4.5,
      reviews: 78,
    },
    {
      id: 6,
      name: "Premium Casual Jacket",
      price: 2799,
      category: "men",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663564546189/WpnnoNX7avyJd7EhmAFAFj/Rytup4oVagEm_5112378e.jpg",
      rating: 4.7,
      reviews: 92,
    },
    {
      id: 7,
      name: "Daily Accessories",
      price: 3599,
      category: "accessories",
      image:
        "https://i.ibb.co/Y7L8s73F/My-must-have-summer-essentials-in-rotation.jpg",
      rating: 4.8,
      reviews: 145,
    },
    {
      id: 8,
      name: "Baggy Pants",
      price: 2299,
      category: "women",
      image:
        "https://i.ibb.co/RpdPTwXY/84ee90679c6ccff94ae9902db40d48d0.jpg",
      rating: 4.6,
      reviews: 167,
    },
  ];

  const categories = [
    { value: "all", label: "All Products" },
    { value: "women", label: "Women" },
    { value: "men", label: "Men" },
    { value: "accessories", label: "Accessories" },
  ];

  const filteredProducts = products
    .filter(
      (p) =>
        (selectedCategory === "all" || p.category === selectedCategory) &&
        p.price >= priceRange[0] &&
        p.price <= priceRange[1]
    )
    .sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Header */}
        <section className="border-b border-border/30 py-8">
          <div className="container">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Our Collection</h1>
            <p className="text-muted-foreground">
              Discover our curated selection of premium fashion items
            </p>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-12">
          <div className="container">
            <div className="flex gap-8">
              {/* Sidebar Filters - Desktop */}
              <aside className="hidden lg:block w-64 flex-shrink-0">
                <div className="space-y-8">
                  {/* Category Filter */}
                  <div>
                    <h3 className="font-semibold mb-4">Category</h3>
                    <div className="space-y-2">
                      {categories.map((cat) => (
                        <label
                          key={cat.value}
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="category"
                            value={cat.value}
                            checked={selectedCategory === cat.value}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="w-4 h-4"
                          />
                          <span className="text-sm">{cat.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Price Filter */}
                  <div>
                    <h3 className="font-semibold mb-4">Price Range</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm text-muted-foreground">
                          Min: ₹{priceRange[0]}
                        </label>
                        <input
                          type="range"
                          min="0"
                          max="5000"
                          value={priceRange[0]}
                          onChange={(e) =>
                            setPriceRange([
                              parseInt(e.target.value),
                              priceRange[1],
                            ])
                          }
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground">
                          Max: ₹{priceRange[1]}
                        </label>
                        <input
                          type="range"
                          min="0"
                          max="5000"
                          value={priceRange[1]}
                          onChange={(e) =>
                            setPriceRange([
                              priceRange[0],
                              parseInt(e.target.value),
                            ])
                          }
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Sort */}
                  <div>
                    <h3 className="font-semibold mb-4">Sort By</h3>
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="w-full px-4 py-2 border border-border/50 rounded-sm bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-all duration-300 ease-in-out text-sm"
                      >
                      <option value="newest">Newest</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="rating">Highest Rated</option>
                    </select>
                  </div>
                </div>
              </aside>

              {/* Mobile Filter Toggle */}
              <div className="lg:hidden mb-6 w-full">
                <Button
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className="w-full gap-2"
                >
                  {showFilters ? <X size={20} /> : <ChevronDown size={20} />}
                  {showFilters ? "Hide Filters" : "Show Filters"}
                </Button>

                {showFilters && (
                  <div className="mt-4 p-4 border border-border/30 rounded-sm space-y-6">
                    {/* Mobile Filters */}
                    <div>
                      <h3 className="font-semibold mb-3">Category</h3>
                      <div className="space-y-2">
                        {categories.map((cat) => (
                          <label
                            key={cat.value}
                            className="flex items-center gap-2 cursor-pointer"
                          >
                            <input
                              type="radio"
                              name="category"
                              value={cat.value}
                              checked={selectedCategory === cat.value}
                              onChange={(e) =>
                                setSelectedCategory(e.target.value)
                              }
                              className="w-4 h-4"
                            />
                            <span className="text-sm">{cat.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3">Price Range</h3>
                      <div className="space-y-3">
                      <div>
                        <label className="text-sm text-muted-foreground">
                          Min: ₹{priceRange[0]}
                        </label>
                        <input
                          type="range"
                          min="0"
                          max="5000"
                          value={priceRange[0]}
                          onChange={(e) =>
                            setPriceRange([
                              parseInt(e.target.value),
                              priceRange[1],
                            ])
                          }
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground">
                          Max: ₹{priceRange[1]}
                        </label>
                        <input
                          type="range"
                          min="0"
                          max="5000"
                            value={priceRange[1]}
                            onChange={(e) =>
                              setPriceRange([
                                priceRange[0],
                                parseInt(e.target.value),
                              ])
                            }
                            className="w-full"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3">Sort By</h3>
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="w-full px-4 py-2 border border-border/50 rounded-sm bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-all duration-300 ease-in-out text-sm"
                      >
                        <option value="newest">Newest</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="rating">Highest Rated</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>

              {/* Products Grid */}
              <div className="flex-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <Link key={product.id} href={`/product/${product.id}`}>
                      <div className="group cursor-pointer">
                        <div className="aspect-square bg-muted rounded-sm mb-4 overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-semibold text-sm md:text-base">
                            {product.name}
                          </h3>
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium">
                              ₹{product.price}
                            </p>
                            <div className="flex items-center gap-1">
                              <span className="text-xs font-medium">
                                {product.rating}
                              </span>
                              <span className="text-xs text-muted-foreground">
                                ({product.reviews})
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {filteredProducts.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground mb-4">
                      No products found matching your filters.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setSelectedCategory("all");
                        setPriceRange([0, 5000]);
                      }}
                    >
                      Reset Filters
                    </Button>
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

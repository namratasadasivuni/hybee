import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link, useRoute } from "wouter";
import { ChevronLeft, Heart, Share2, Star } from "lucide-react";
import { useState } from "react";

export default function ProductDetail() {
  const [, params] = useRoute("/product/:id");
  const productId = params?.id;

  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("black");
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Mock product data
  const product = {
    id: productId,
    name: "Elegant Black Dress",
    price: 299,
    rating: 4.8,
    reviews: 124,
    description:
      "An exquisite black dress crafted from premium materials. Perfect for any occasion, this elegant piece features a timeless silhouette and impeccable tailoring. The dress is designed to flatter all body types and provides ultimate comfort.",
    images: [
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663564546189/WpnnoNX7avyJd7EhmAFAFj/9H72CUGX2V1b_926e9ff3.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663564546189/WpnnoNX7avyJd7EhmAFAFj/XOwqFkwvPsh2_e6e24fc9.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663564546189/WpnnoNX7avyJd7EhmAFAFj/kloUiXzNRzab_a4b4c804.jpg",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "black", label: "Black" },
      { name: "white", label: "White" },
      { name: "navy", label: "Navy" },
    ],
    inStock: true,
    sku: "HYB-BLK-DRESS-001",
  };

  const reviews = [
    {
      id: 1,
      author: "Sarah Johnson",
      rating: 5,
      title: "Absolutely Perfect!",
      comment:
        "This dress is everything I hoped for. The quality is exceptional and it fits beautifully. Highly recommend!",
      date: "2 weeks ago",
    },
    {
      id: 2,
      author: "Emma Davis",
      rating: 4,
      title: "Great Quality",
      comment:
        "Very well made. The fabric is luxurious and comfortable. Shipping was fast too.",
      date: "1 month ago",
    },
    {
      id: 3,
      author: "Jessica Miller",
      rating: 5,
      title: "Premium Feel",
      comment:
        "Feels like a designer piece. The attention to detail is remarkable. Worth every penny.",
      date: "1 month ago",
    },
  ];

  const [mainImage, setMainImage] = useState(product.images[0]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="border-b border-border/30">
          <div className="container py-4">
            <Link href="/products">
              <span className="text-sm text-muted-foreground hover:text-foreground cursor-pointer flex items-center gap-2">
                <ChevronLeft size={16} /> Back to Products
              </span>
            </Link>
          </div>
        </div>

        {/* Product Section */}
        <section className="py-12">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Image Gallery */}
              <div>
                <div className="aspect-square bg-muted rounded-sm mb-4 overflow-hidden">
                  <img
                    src={mainImage}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {product.images.map((image, idx) => (
                    <button
                      key={idx}
                      onClick={() => setMainImage(image)}
                      className={`aspect-square rounded-sm overflow-hidden border-2 transition-all ${
                        mainImage === image
                          ? "border-foreground"
                          : "border-border/30"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Product ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-8">
                {/* Header */}
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h1 className="text-3xl md:text-4xl font-bold mb-2">
                        {product.name}
                      </h1>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              className={
                                i < Math.floor(product.rating)
                                  ? "fill-foreground"
                                  : "fill-muted"
                              }
                            />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {product.rating} ({product.reviews} reviews)
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => setIsWishlisted(!isWishlisted)}
                      className="p-2 hover:bg-muted rounded-sm transition-colors"
                    >
                      <Heart
                        size={24}
                        className={
                          isWishlisted ? "fill-foreground" : "fill-none"
                        }
                      />
                    </button>
                  </div>
                  <p className="text-4xl font-bold mb-4">${product.price}</p>
                  <p className="text-muted-foreground">{product.description}</p>
                </div>

                {/* Size Selector */}
                <div>
                  <label className="block text-sm font-semibold mb-3">
                    Size
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`w-12 h-12 border rounded-sm font-medium transition-all ${
                          selectedSize === size
                            ? "border-foreground bg-foreground text-background"
                            : "border-border/50 hover:border-foreground"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Color Selector */}
                <div>
                  <label className="block text-sm font-semibold mb-3">
                    Color
                  </label>
                  <div className="flex gap-3">
                    {product.colors.map((color) => (
                      <button
                        key={color.name}
                        onClick={() => setSelectedColor(color.name)}
                        className={`px-4 py-2 border rounded-sm transition-all ${
                          selectedColor === color.name
                            ? "border-foreground bg-foreground text-background"
                            : "border-border/50 hover:border-foreground"
                        }`}
                      >
                        {color.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity & Add to Cart */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold mb-3">
                      Quantity
                    </label>
                    <div className="flex items-center border border-border/50 rounded-sm w-fit">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-4 py-2 hover:bg-muted transition-colors"
                      >
                        −
                      </button>
                      <span className="px-6 py-2 border-l border-r border-border/50">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="px-4 py-2 hover:bg-muted transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 px-6 py-3 bg-foreground text-background font-medium rounded-sm hover:shadow-lg transition-all duration-300 ease-in-out">
                      Add to Cart
                    </button>
                    <button className="px-6 py-3 border border-border/50 rounded-sm hover:bg-muted transition-colors">
                      <Share2 size={20} />
                    </button>
                  </div>
                </div>

                {/* Product Details */}
                <div className="border-t border-border/30 pt-6 space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">SKU</span>
                    <span className="font-medium">{product.sku}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Availability</span>
                    <span className="font-medium">
                      {product.inStock ? "In Stock" : "Out of Stock"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-medium">Free worldwide shipping</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="border-t border-border/30 py-12 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">Customer Reviews</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Review Summary */}
              <div className="space-y-6">
                <div className="flex items-end gap-4">
                  <div className="text-5xl font-bold">{product.rating}</div>
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={
                            i < Math.floor(product.rating)
                              ? "fill-foreground"
                              : "fill-muted"
                          }
                        />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Based on {product.reviews} reviews
                    </p>
                  </div>
                </div>

                <Button className="w-full px-6 py-3 bg-foreground text-background font-medium rounded-sm hover:shadow-lg transition-all duration-300 ease-in-out">
                  Write a Review
                </Button>
              </div>

              {/* Reviews List */}
              <div className="space-y-6">
                {reviews.map((review) => (
                  <div
                    key={review.id}
                    className="border border-border/30 rounded-sm p-6"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold">{review.author}</h4>
                        <p className="text-xs text-muted-foreground">
                          {review.date}
                        </p>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className={
                              i < review.rating
                                ? "fill-foreground"
                                : "fill-muted"
                            }
                          />
                        ))}
                      </div>
                    </div>
                    <h5 className="font-medium mb-2">{review.title}</h5>
                    <p className="text-sm text-muted-foreground">
                      {review.comment}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

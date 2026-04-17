import { useState, useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface DraggableClothing {
  id: string;
  name: string;
  image: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

export default function StyleMirror() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [useCamera, setUseCamera] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [draggedClothing, setDraggedClothing] = useState<DraggableClothing[]>([]);
  const [selectedClothingId, setSelectedClothingId] = useState<string | null>(null);

  const clothingItems = [
    {
      id: "dress1",
      name: "Black Elegant Dress",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663564546189/WpnnoNX7avyJd7EhmAFAFj/9H72CUGX2V1b_926e9ff3.jpg",
      price: "₹2,999",
    },
    {
      id: "jacket1",
      name: "Luxury Jacket",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663564546189/WpnnoNX7avyJd7EhmAFAFj/XOwqFkwvPsh2_e6e24fc9.jpg",
      price: "₹3,999",
    },
    {
      id: "outfit1",
      name: "Green Premium Outfit",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663564546189/WpnnoNX7avyJd7EhmAFAFj/kloUiXzNRzab_a4b4c804.jpg",
      price: "₹3,499",
    },
    {
      id: "collection1",
      name: "Luxury Collection",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663564546189/WpnnoNX7avyJd7EhmAFAFj/U0TB1fRtgBit_50a54265.jpg",
      price: "₹4,499",
    },
  ];

  // Start camera
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" },
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setUseCamera(true);
      }
    } catch (error) {
      alert("Unable to access camera. Please check permissions.");
    }
  };

  // Capture from camera
  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) {
        canvasRef.current.width = videoRef.current.videoWidth;
        canvasRef.current.height = videoRef.current.videoHeight;
        ctx.drawImage(videoRef.current, 0, 0);
        const imageData = canvasRef.current.toDataURL("image/jpeg");
        setUploadedImage(imageData);
        stopCamera();
      }
    }
  };

  // Stop camera
  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
      tracks.forEach((track) => track.stop());
      setUseCamera(false);
    }
  };

  // Handle image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Add clothing to canvas
  const addClothing = (item: (typeof clothingItems)[0]) => {
    const newClothing: DraggableClothing = {
      id: `${item.id}-${Date.now()}`,
      name: item.name,
      image: item.image,
      x: 50,
      y: 50,
      width: 120,
      height: 160,
    };
    setDraggedClothing([...draggedClothing, newClothing]);
  };

  // Remove clothing
  const removeClothing = (id: string) => {
    setDraggedClothing(draggedClothing.filter((item) => item.id !== id));
  };

  // Handle drag
  const handleMouseDown = (id: string) => {
    setSelectedClothingId(id);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!selectedClothingId || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setDraggedClothing(
      draggedClothing.map((item) =>
        item.id === selectedClothingId
          ? {
              ...item,
              x: Math.max(0, Math.min(x - 60, rect.width - 120)),
              y: Math.max(0, Math.min(y - 80, rect.height - 160)),
            }
          : item
      )
    );
  };

  const handleMouseUp = () => {
    setSelectedClothingId(null);
  };

  // Clear all
  const clearAll = () => {
    setUploadedImage(null);
    setDraggedClothing([]);
    if (useCamera) stopCamera();
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1 py-8 md:py-12">
        <div className="container max-w-6xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Style Mirror</h1>
            <p className="text-muted-foreground">
              Upload a photo and drag clothing items to try them on
            </p>
          </div>

          {/* Main Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Left Sidebar */}
            <div className="lg:col-span-1 space-y-4">
              {/* Upload Card */}
              <Card className="p-4">
                <h3 className="font-semibold text-sm mb-3">Step 1: Photo</h3>
                <div className="space-y-2">
                  <Button
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full text-sm"
                  >
                    Upload Image
                  </Button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />

                  <Button
                    onClick={startCamera}
                    disabled={useCamera}
                    variant="outline"
                    className="w-full text-sm"
                  >
                    {useCamera ? "Camera On" : "Use Camera"}
                  </Button>

                  {useCamera && (
                    <div className="space-y-2">
                      <Button
                        onClick={capturePhoto}
                        className="w-full text-sm bg-green-600 hover:bg-green-700"
                      >
                        Capture
                      </Button>
                      <Button
                        onClick={stopCamera}
                        variant="outline"
                        className="w-full text-sm"
                      >
                        Cancel
                      </Button>
                    </div>
                  )}
                </div>
              </Card>

              {/* Clothing Items Card */}
              <Card className="p-4">
                <h3 className="font-semibold text-sm mb-3">Step 2: Clothing</h3>
                <div className="space-y-2">
                  {clothingItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => addClothing(item)}
                      className="w-full text-left p-2 text-sm border rounded hover:bg-muted transition-colors"
                    >
                      <div className="font-medium truncate">{item.name}</div>
                      <div className="text-xs text-primary">{item.price}</div>
                    </button>
                  ))}
                </div>
              </Card>

              {/* Clear Button */}
              {uploadedImage && (
                <Button
                  onClick={clearAll}
                  variant="outline"
                  className="w-full text-sm"
                >
                  Clear All
                </Button>
              )}
            </div>

            {/* Right Canvas Area */}
            <div className="lg:col-span-3">
              {!uploadedImage && !useCamera && (
                <Card className="p-12 text-center bg-muted/30 aspect-video flex flex-col items-center justify-center">
                  <p className="text-muted-foreground mb-2">
                    Start by uploading a photo or using your camera
                  </p>
                  <div className="text-4xl">📸</div>
                </Card>
              )}

              {useCamera && (
                <Card className="overflow-hidden">
                  <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    className="w-full aspect-video object-cover"
                  />
                </Card>
              )}

              {uploadedImage && (
                <div
                  ref={containerRef}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                  className="relative bg-muted/30 rounded border-2 border-dashed border-border overflow-hidden cursor-move"
                  style={{ aspectRatio: "4/5" }}
                >
                  {/* Background Image */}
                  <img
                    src={uploadedImage}
                    alt="Your photo"
                    className="w-full h-full object-cover"
                  />

                  {/* Draggable Items */}
                  {draggedClothing.map((clothing) => (
                    <div
                      key={clothing.id}
                      onMouseDown={() => handleMouseDown(clothing.id)}
                      className="absolute cursor-grab active:cursor-grabbing group"
                      style={{
                        left: `${clothing.x}px`,
                        top: `${clothing.y}px`,
                        width: `${clothing.width}px`,
                        height: `${clothing.height}px`,
                      }}
                    >
                      <img
                        src={clothing.image}
                        alt={clothing.name}
                        className="w-full h-full object-cover rounded opacity-90 hover:opacity-100 transition-opacity"
                      />
                      <button
                        onClick={() => removeClothing(clothing.id)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        ✕
                      </button>
                    </div>
                  ))}

                  {/* Empty State */}
                  {draggedClothing.length === 0 && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <p className="text-muted-foreground text-sm">
                        Drag clothing items here
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Hidden Canvas */}
          <canvas ref={canvasRef} className="hidden" />
        </div>
      </main>

      <Footer />
    </div>
  );
}

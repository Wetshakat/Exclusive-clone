import React, { useEffect, useState } from "react";
import { Heart, Eye, Star, X } from "lucide-react";

const Fcart = ({ handleAddToCart }) => {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [likedItems, setLikedItems] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data.slice(0, 5));
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  const getDiscount = () => {
    const discounts = [40, 35, 30, 28, 25];
    return discounts[Math.floor(Math.random() * discounts.length)];
  };

  const handleViewAll = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);
    setAllProducts(true);
  };

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  const handleToggleLike = (productId) => {
    setLikedItems((prevLikedItems) => {
      if (prevLikedItems.includes(productId)) {
        return prevLikedItems.filter((id) => id !== productId);
      } else {
        return [...prevLikedItems, productId];
      }
    });
  };

  return (
    <div className="px-[5%] py-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 items-end">
        {products.map((product) => {
          const discount = getDiscount();
          const discountedPrice = (
            product.price -
            product.price * (discount / 100)
          ).toFixed(2);

          return (
            <div
              key={product.id}
              className="bg-white w-[250px] justify-between p-3 rounded-md shadow hover:shadow-lg transition relative"
            >
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-0.5 rounded">
                -{discount}%
              </span>
              <div className="absolute top-2 right-2 flex flex-col gap-1">
                <Heart
                  size={16}
                  onClick={() => handleToggleLike(product.id)}
                  className={`cursor-pointer ${
                    likedItems.includes(product.id)
                      ? "text-red-500"
                      : "text-gray-500"
                  } hover:text-red-500`}
                />

                <Eye
                  size={16}
                  className="text-gray-500 hover:text-blue-500 cursor-pointer"
                  onClick={() => handleOpenModal(product)} // 👈 open modal
                />
              </div>

              <img
                src={product.image}
                alt={product.title}
                className="h-32 mx-auto object-contain"
              />

              <div className="mt-3 space-y-1">
                <h3 className="text-sm font-semibold line-clamp-2">
                  {product.title}
                </h3>
                <div className="flex gap-2 items-center text-sm">
                  <span className="text-red-600 font-semibold">
                    ${discountedPrice}
                  </span>
                  <span className="line-through text-gray-400">
                    ${product.price}
                  </span>
                </div>
                <div className="flex items-center text-yellow-400 text-xs">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      fill={
                        i < Math.round(product.rating.rate) ? "#FBBF24" : "none"
                      }
                    />
                  ))}
                  <span className="ml-1 text-gray-500">
                    ({product.rating.count})
                  </span>
                </div>
              </div>

              <button
                onClick={() => handleAddToCart(product)}
                className="w-full mt-3 py-1 bg-black text-white text-sm rounded hover:bg-gray-800"
              >
                Add To Cart
              </button>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center mt-6">
        <button
          onClick={handleViewAll}
          className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          View All Products
        </button>
      </div>

      {/* Modal */}
      {showModal && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-[90%] max-w-md relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
            >
              <X size={24} />
            </button>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.title}
              className="h-40 mx-auto object-contain"
            />
            <h2 className="text-lg font-bold mt-4 text-center">
              {selectedProduct.title}
            </h2>
            <p className="text-gray-600 text-sm mt-2 text-center">
              {selectedProduct.description}
            </p>
            <div className="text-center mt-4">
              <span className="text-red-600 font-bold text-lg">
                ${selectedProduct.price}
              </span>
            </div>
            <button
              onClick={() => {
                handleAddToCart(selectedProduct);
                handleCloseModal();
              }}
              className="mt-6 w-full py-2 bg-black text-white rounded hover:bg-gray-800"
            >
              Add To Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Fcart;

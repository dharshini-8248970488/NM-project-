var app = angular.module("productApp", []);

app.controller("ProductController", function($scope) {
  // Categories
  $scope.categories = ["Electronics", "Fashion", "Home Appliances", "Smart Devices", "Watches"];

  // Products
  $scope.products = [
    { name: "Smartphone", price: 15000, category: "Electronics", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80", description: "Latest smartphone with high-quality camera." },
    { name: "Laptop", price: 45000, category: "Electronics", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80", description: "High performance laptop for work & gaming." },
    { name: "Shoes", price: 2500, category: "Fashion", image: "https://images.unsplash.com/photo-1528701800484-0f4a5306e48b?auto=format&fit=crop&w=400&q=80", description: "Comfortable running shoes." },
    { name: "Watch", price: 5000, category: "Watches", image: "https://images.unsplash.com/photo-1518544881552-ef03a29d8f58?auto=format&fit=crop&w=400&q=80", description: "Stylish analog watch." },
    { name: "Headphones", price: 2000, category: "Smart Devices", image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80", description: "Noise-cancelling headphones." },
    { name: "Backpack", price: 1500, category: "Fashion", image: "https://images.unsplash.com/photo-1516205651411-aef33a44f50f?auto=format&fit=crop&w=400&q=80", description: "Durable backpack for everyday use." },
    { name: "Tablet", price: 30000, category: "Electronics", image: "https://images.unsplash.com/photo-1580910051071-6c7b60375851?auto=format&fit=crop&w=400&q=80", description: "High-resolution display tablet." },
    { name: "Camera", price: 25000, category: "Electronics", image: "https://images.unsplash.com/photo-1519183071298-a2962ed12ad7?auto=format&fit=crop&w=400&q=80", description: "DSLR camera with 4K video recording." },
    { name: "Smartwatch", price: 10000, category: "Smart Devices", image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=400&q=80", description: "Fitness tracking smartwatch." }
  ];

  // Modal
  $scope.selectedProduct = null;
  $scope.openModal = function(product) { $scope.selectedProduct = product; }
  $scope.closeModal = function() { $scope.selectedProduct = null; }
});

import React, { useState, useEffect } from "react";
import { Carousel, CarouselResponsiveOption } from "primereact/carousel";
import "./tabSection.css";

interface Product {
  id: string;
  code: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
  quantity: number;
  inventoryStatus: string;
  rating: number;
}

const ProductService = {
  getProductsSmall: () => {
    return Promise.resolve([
      {
        id: "1000",
        code: "f230fh0g3",
        name: "Bamboo Watch",
        description: "Product Description",
        image: "Asserts/cutpaste laminate door .webp",
        price: 65,
        category: "Accessories",
        quantity: 24,
        inventoryStatus: "INSTOCK",
        rating: 5,
      },
      {
        id: "1001",
        code: "nvklal433",
        name: "Black Watch",
        description: "Product Description",
        image: "Asserts/prime coated door.webp",
        price: 72,
        category: "Accessories",
        quantity: 61,
        inventoryStatus: "INSTOCK",
        rating: 4,
      },
      {
        id: "1002",
        code: "zz21cz3c1",
        name: "Blue Band",
        description: "Product Description",
        image: "Asserts/prime coated door.webp",
        price: 79,
        category: "Fitness",
        quantity: 2,
        inventoryStatus: "LOWSTOCK",
        rating: 3,
      },
      {
        id: "1003",
        code: "244wgerg2",
        name: "Game Controller",
        description: "Product Description",
        image: "Asserts/Frames.webp",
        price: 99,
        category: "Electronics",
        quantity: 63,
        inventoryStatus: "INSTOCK",
        rating: 4,
      },
    ]);
  },
};

export default function OurWorktab() {
  const [products, setProducts] = useState<Product[]>([]);

  const responsiveOptions: CarouselResponsiveOption[] = [
    {
      breakpoint: "1400px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  useEffect(() => {
    ProductService.getProductsSmall().then((data) =>
      setProducts(data.slice(0, 9))
    );
  }, []);

  const productTemplate = (product: Product) => {
    return (
      <div
        key={product.id}
        className="border-1 surface-border border-round m-2 text-center py-5 px-3"
      >
        <div className="mb-3">
          <img
            src={process.env.PUBLIC_URL + "/" + product.image}
            alt={product.name}
            className="smallCarImage"
          />
        </div>
      </div>
    );
  };

  return (
    <div className="card">
      <Carousel
        value={products}
        numVisible={2}
        numScroll={2}
        responsiveOptions={responsiveOptions}
        itemTemplate={productTemplate}
      />
    </div>
  );
}

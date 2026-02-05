import axios from "axios"
import { useState } from "react"

const sampleData = [
  {
    productID: "COS001",
    name: "Matte Liquid Lipstick",
    altNames: ["Matte Lip Color", "Long Lasting Lipstick"],
    description: "Highly pigmented matte liquid lipstick with a smooth finish and all-day wear.",
    images: [
      "https://example.com/images/lipstick1.jpg",
      "https://example.com/images/lipstick2.jpg"
    ],
    price: 1800,
    labelledPrice: 2200,
    category: "Lips"
  },
  {
    productID: "COS002",
    name: "Vitamin C Face Serum",
    altNames: ["Brightening Serum", "Glow Serum"],
    description: "Lightweight vitamin C serum that brightens skin tone and reduces dark spots.",
    images: [
      "https://example.com/images/serum1.jpg"
    ],
    price: 3200,
    labelledPrice: 3800,
    category: "Skincare"
  },
  {
    productID: "COS003",
    name: "Hydrating Face Moisturizer",
    altNames: ["Daily Moisturizer", "Face Cream"],
    description: "Deeply hydrating moisturizer suitable for all skin types, leaving skin soft and fresh.",
    images: [
      "https://example.com/images/moisturizer1.jpg"
    ],
    price: 2500,
    labelledPrice: 3000,
    category: "Skincare"
  },
  {
    productID: "COS004",
    name: "Waterproof Mascara",
    altNames: ["Volume Mascara", "Long Lash Mascara"],
    description: "Smudge-proof and waterproof mascara that adds volume and length to lashes.",
    images: [
      "https://example.com/images/mascara1.jpg",
      "https://example.com/images/mascara2.jpg"
    ],
    price: 1600,
    labelledPrice: 2000,
    category: "Eyes"
  },
  {
    productID: "COS005",
    name: "Herbal Face Cleanser",
    altNames: ["Gentle Cleanser", "Face Wash"],
    description: "Mild herbal face cleanser that removes dirt and excess oil without drying the skin.",
    images: [
      "https://example.com/images/cleanser1.jpg"
    ],
    price: 1400,
    labelledPrice: 1800,
    category: "Skincare"
  }
];





export default function AdminProductPage() {
  const [products, setProducts] = useState(sampleData)

  // axios.get(import.meta.env.VITE_API_URL + "/api/products/").then(
  //     (response) => {
  // console.log(response.data);
  // setProducts(response.data);
  //     }
  // )
  console.log(products);

  return (
    <div className="w-full h-full p-[10px]">

      <table className="border w-full text-center">
        <thead>
          <tr>
            <th>Image</th>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Labelled Price</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {
        products.map(
          (item) => {
            return ( <tr>
            <td>
              <img src={item.images[0]} className="w-16 h-16 object-cover" />
            </td>
            <td>{item.productID}</td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.labelledPrice}</td>
            <td>{item.category}</td>
          </tr>

            )
          })
      }
        </tbody>
      </table>
    </div>
  )
}
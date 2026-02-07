import axios from "axios"
import { useState, useEffect } from "react"
import { FaRegTrashCan } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";



export default function AdminProductPage() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_API_URL + "/api/products/")
      .then((response) => {
        setProducts(response.data);
      });
  }, [])

  return (
    <div className="w-full h-full p-6 bg-primary rounded-xl shadow-sm">
      <Link to="/admin/add-product" className="fixed right-[50px] bottom-[50px] text-5xl hover:text-accent" >
        <CiCirclePlus />
      </Link>
      <h1 className="text-2xl font-semibold text-secondary mb-4">
        Product Management
      </h1>

      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="w-full text-sm text-center border-collapse">
          <thead className="bg-secondary text-white">
            <tr>
              <th className="py-3 px-2">Image</th>
              <th className="py-3 px-2">Product ID</th>
              <th className="py-3 px-2">Name</th>
              <th className="py-3 px-2">Price</th>
              <th className="py-3 px-2">Labelled</th>
              <th className="py-3 px-2">Category</th>
              <th className="py-3 px-2">Action</th>
            </tr>
          </thead>

          <tbody>
            {products.map((item) => (
              <tr
                key={item.productID}
                className="border-b hover:bg-white transition"
              >
                <td className="py-3">
                  <img
                    src={item.images[0]}
                    className="w-14 h-14 mx-auto rounded-lg object-cover border"
                  />
                </td>

                <td className="font-medium text-secondary">
                  {item.productID}
                </td>

                <td className="text-gray-700">
                  {item.name}
                </td>

                <td className="text-gray-700 font-semibold">
                  Rs. {item.price}
                </td>

                <td className="text-gray-500 line-through">
                  Rs. {item.labelledPrice}
                </td>

                <td className="capitalize text-gray-600">
                  {item.category}
                </td>

                <td>
                  <div className="flex gap-3 justify-center items-center">
                    <button className="p-2 rounded-full hover:bg-red-100 transition">
                      <FaRegTrashCan className="text-gray-500 hover:text-red-600" />
                    </button>

                    <button className="p-2 rounded-full hover:bg-accent/20 transition">
                      <FaRegEdit className="text-gray-500 hover:text-green-500" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  )
}

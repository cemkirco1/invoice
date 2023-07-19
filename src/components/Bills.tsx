import React, { useState } from "react";
import BillsListItem from "./BilsListItem";

interface ListItem {
  id: number;
  companyName: string;
  price: number;
  status: string;
}

const Paid = () => {
  const [filter, setFilter] = useState<string>("all");
  const [list, setList] = useState<ListItem[]>([
    { id: 1, companyName: "Company A", price: 100, status: "Paid" },
    { id: 2, companyName: "Company B", price: 200, status: "Waiting" },
    { id: 3, companyName: "Company C", price: 300, status: "Paid" },
    { id: 4, companyName: "Company D", price: 400, status: "Delayed" },
  ]);

  const filteredList = list.filter((item) => {
    if (filter === "all") {
      return true;
    }
    return item.status === filter;
  });

  return (
    <div className="flex flex-col items-center justify-center mt-16">
      <div className="flex space-x-4 mb-4">
        <button
          className={`${
            filter === "all"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          } px-4 py-2 rounded`}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={`${
            filter === "Paid"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          } px-4 py-2 rounded`}
          onClick={() => setFilter("Paid")}
        >
          Paid
        </button>
        <button
          className={`${
            filter === "Waiting"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          } px-4 py-2 rounded`}
          onClick={() => setFilter("Waiting")}
        >
          Waiting
        </button>
        <button
          className={`${
            filter === "Delayed"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          } px-4 py-2 rounded`}
          onClick={() => setFilter("Delayed")}
        >
          Delayed
        </button>
      </div>
      <div className="sm:w-[80rem]">
        <ul className="border border-gray-200 rounded-md shadow">
          <li className="bg-gray-200 text-gray-700 px-4 py-2 flex space-x-4 pr-14">
            <strong className="flex-1">ID</strong>
            <span className="flex-1">Company Name</span>
            <span className="flex-1 pl-">Price</span>

            <span className="flex-1 text-right">Status</span>
          </li>
          {filteredList.map((item) => (
            <BillsListItem
              item={{
                id: item.id,
                companyName: item.companyName,
                price: item.price,
                status: item.status,
              }}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Paid;

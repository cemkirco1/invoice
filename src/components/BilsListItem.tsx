import React, { useState } from "react";

interface BillsListItem {
  item: {
    id: number;
    companyName: string;
    price: number;
    status: string;
    statusName: string;
  };
}

const BillsListItem = ({ item }: BillsListItem) => {
  let statusColor = "";
  if (item.status === "Paid") {
    statusColor = "bg-green-500";
  } else if (item.status === "Waiting") {
    statusColor = "bg-yellow-500";
  } else if (item.status === "Delayed") {
    statusColor = "bg-red-500";
  }
  return (
    <li
      key={item.id}
      className="border-t border-gray-200 px-4 py-2 flex space-x-4 hover:bg-gray-100"
    >
      <span className="flex-1"># {item.id}</span>
      <span className="flex-1">{item.companyName}</span>
      <span className="flex-1">{item.price}</span>
      <div className="flex-1 text-end flex justify-end">
        <span
          className={` rounded-full px-2 w-28 text-center text-white 
                  ${statusColor}`}
        >
          {item.statusName}
        </span>
      </div>
    </li>
  );
};

export default BillsListItem;

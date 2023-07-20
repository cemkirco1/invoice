import React, { useState } from "react";
import BillsListItem from "./BilsListItem";
import InvoiceAlert from "./InvoiceAlert";
import { useTranslation } from "react-i18next";

interface ListItem {
  id: number;
  companyName: string;
  price: number;
  status: string;
  statusName: string;
}

const Paid = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<string>("all");
  const [list, setList] = useState<ListItem[]>([
    {
      id: 1,
      companyName: "Company A",
      price: 100,
      status: "Paid",
      statusName: t("paid.paid"),
    },
    {
      id: 2,
      companyName: "Company B",
      price: 200,
      status: "Waiting",
      statusName: t("paid.waiting"),
    },
    {
      id: 3,
      companyName: "Company C",
      price: 300,
      status: "Paid",
      statusName: t("paid.paid"),
    },
    {
      id: 4,
      companyName: "Company D",
      price: 400,
      status: "Delayed",
      statusName: t("paid.delayed"),
    },
  ]);

  const filteredList = list.filter((item) => {
    if (filter === "all") {
      return true;
    }
    return item.status === filter;
  });

  const handleInvoiceAlertClick = () => {
    setFilter("Delayed");
  };

  const unpaidCount = 1;

  return (
    <div className="flex flex-col items-center justify-center mt-2">
      <InvoiceAlert
        unpaidCount={unpaidCount}
        onClick={handleInvoiceAlertClick}
      />

      <div className="flex space-x-4 mb-4 mt-12">
        <button
          className={`${
            filter === "all"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          } px-4 py-2 rounded`}
          onClick={() => setFilter("all")}
        >
          {t("paid.all")}
        </button>
        <button
          className={`${
            filter === "Paid"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          } px-4 py-2 rounded`}
          onClick={() => setFilter("Paid")}
        >
          {t("paid.paid")}
        </button>
        <button
          className={`${
            filter === "Waiting"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          } px-4 py-2 rounded`}
          onClick={() => setFilter("Waiting")}
        >
          {t("paid.waiting")}
        </button>
        <button
          className={`${
            filter === "Delayed"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          } px-4 py-2 rounded`}
          onClick={() => setFilter("Delayed")}
        >
          {t("paid.delayed")}
        </button>
      </div>
      <div className="sm:w-[80rem]">
        <ul className="border border-gray-200 rounded-md shadow">
          <li className="bg-gray-200 text-gray-700 px-4 py-2 flex space-x-4 pr-14">
            <strong className="flex-1">{t("paid.id")}</strong>
            <span className="flex-1">{t("paid.companyName")}</span>
            <span className="flex-1 pl-">{t("paid.price")}</span>

            <span className="flex-1 text-right">{t("paid.status")}</span>
          </li>
          {filteredList.map((item) => (
            <BillsListItem
              item={{
                id: item.id,
                companyName: item.companyName,
                price: item.price,
                status: item.status,
                statusName: item.statusName,
              }}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Paid;

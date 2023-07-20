import React from "react";
import { FaExclamationCircle } from "react-icons/fa";

interface InvoiceAlertProps {
  unpaidCount: number;
  onClick: () => void;
}

const InvoiceAlert: React.FC<InvoiceAlertProps> = ({
  unpaidCount,
  onClick,
}) => {
  return (
    <div className="invoice-alert-container flex justify-center items-center">
      <div
        className="invoice-alert bg-red-500 text-white p-4 flex items-center space-x-2 rounded-lg mt-5 shadow-red cursor-pointer"
        onClick={onClick}
      >
        <FaExclamationCircle className="text-xl" />
        <div>
          {unpaidCount > 0 ? (
            <p>Ödenmemiş {unpaidCount} fatura bulunmaktadır.</p>
          ) : (
            <p>Tüm faturalar ödenmiştir.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default InvoiceAlert;

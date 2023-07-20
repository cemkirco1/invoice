import React, { useState } from "react";

interface InvoiceItem {
  description: string;
  quantity: number;
  unitPrice: number;
}

interface Invoice {
  invoiceName: string;
  recipientType: string;
  firstName: string;
  lastName: string;
  companyName: string;
  taxNumber: string;
  phone: string;
  email: string;
  currency: string;
  language: string;
  date: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  country: string;
  showAddress: boolean;
  lineItems: InvoiceItem[];
  notes: string;
}

const NewInvoice = () => {
  const [invoice, setInvoice] = useState<Invoice>({
    invoiceName: "",
    recipientType: "person",
    firstName: "",
    lastName: "",
    companyName: "",
    taxNumber: "",
    phone: "",
    email: "",
    currency: "",
    language: "",
    date: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    country: "",
    showAddress: true,
    lineItems: [],
    notes: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInvoice((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInvoice((prevState) => ({
      ...prevState,
      recipientType: value,
      companyName: value === "person" ? "" : prevState.companyName,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setInvoice((prevState) => ({
      ...prevState,
      showAddress: checked,
    }));
  };

  const handleAddItem = () => {
    setInvoice((prevState) => ({
      ...prevState,
      lineItems: [
        ...prevState.lineItems,
        {
          description: "",
          quantity: 0,
          unitPrice: 0,
        },
      ],
    }));
  };

  const handleItemChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    setInvoice((prevState) => ({
      ...prevState,
      lineItems: prevState.lineItems.map((item, i) =>
        i === index ? { ...item, [name]: value } : item
      ),
    }));
  };

  const handleDeleteItem = (index: number) => {
    setInvoice((prevState) => ({
      ...prevState,
      lineItems: prevState.lineItems.filter((item, i) => i !== index),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Fatura gönderme işlemleri burada yapılabilir
    console.log(invoice);
    // Fatura gönderildikten sonra formu sıfırla
    setInvoice({
      invoiceName: "",
      recipientType: "person",
      firstName: "",
      lastName: "",
      companyName: "",
      taxNumber: "",
      phone: "",
      email: "",
      currency: "",
      language: "",
      date: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      country: "",
      showAddress: true,
      lineItems: [],
      notes: "",
    });
  };

  return (
    <div className="container mx-auto mt-8 bg-gray-100 p-8 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">New Invoice</h2>
      <form onSubmit={handleSubmit} className="flex justify-between">
        <div className="flex-1 mr-5">
          <label className="block mb-2">
            Invoice Name:
            <input
              type="text"
              name="invoiceName"
              value={invoice.invoiceName}
              onChange={handleInputChange}
              className="border-gray-300 border rounded-md px-4 py-2 w-full mt-1"
            />
          </label>
          <div className="flex">
            <div className="flex items-center mb-2 mr-10">
              <input
                type="radio"
                name="recipientType"
                value="person"
                checked={invoice.recipientType === "person"}
                onChange={handleRadioChange}
                className="mr-2"
              />
              <span>Person</span>
            </div>
            <div className="flex items-center mb-2">
              <input
                type="radio"
                name="recipientType"
                value="company"
                checked={invoice.recipientType === "company"}
                onChange={handleRadioChange}
                className="mr-2"
              />
              <span>Company</span>
            </div>
          </div>
          <div className="flex justify-between">
            <label className="block mb-2 mr-5">
              First Name:
              <input
                type="text"
                name="firstName"
                value={invoice.firstName}
                onChange={handleInputChange}
                className="border-gray-300 border rounded-md px-4 py-2 w-full mt-1"
              />
            </label>

            <label className="block mb-2">
              Last Name:
              <input
                type="text"
                name="lastName"
                value={invoice.lastName}
                onChange={handleInputChange}
                className="border-gray-300 border rounded-md px-4 py-2 w-full mt-1"
              />
            </label>
          </div>
          {invoice.recipientType === "company" && (
            <div>
              <label className="block mb-2">
                Company Name:
                <input
                  type="text"
                  name="companyName"
                  value={invoice.companyName}
                  onChange={handleInputChange}
                  className="border-gray-300 border rounded-md px-4 py-2 w-full mt-1"
                />
              </label>
              <label className="block mb-2">
                Tax Number:
                <input
                  type="text"
                  name="taxNumber"
                  value={invoice.taxNumber}
                  onChange={handleInputChange}
                  className="border-gray-300 border rounded-md px-4 py-2 w-full mt-1"
                />
              </label>
            </div>
          )}
          <label className="block mb-2">
            Phone:
            <input
              type="text"
              name="phone"
              value={invoice.phone}
              onChange={handleInputChange}
              className="border-gray-300 border rounded-md px-4 py-2 w-full mt-1"
            />
          </label>
          <label className="block mb-2">
            Email:
            <input
              type="text"
              name="email"
              value={invoice.email}
              onChange={handleInputChange}
              className="border-gray-300 border rounded-md px-4 py-2 w-full mt-1"
            />
          </label>
          <label className="block mb-2">
            Currency:
            <input
              type="text"
              name="currency"
              value={invoice.currency}
              onChange={handleInputChange}
              className="border-gray-300 border rounded-md px-4 py-2 w-full mt-1"
            />
          </label>
          <label className="block mb-2">
            Language:
            <input
              type="text"
              name="language"
              value={invoice.language}
              onChange={handleInputChange}
              className="border-gray-300 border rounded-md px-4 py-2 w-full mt-1"
            />
          </label>
          <label className="block mb-2">
            Date:
            <input
              type="text"
              name="date"
              value={invoice.date}
              onChange={handleInputChange}
              className="border-gray-300 border rounded-md px-4 py-2 w-full mt-1"
            />
          </label>
          <label className="block mb-2">
            Address Line 1:
            <input
              type="text"
              name="addressLine1"
              value={invoice.addressLine1}
              onChange={handleInputChange}
              className="border-gray-300 border rounded-md px-4 py-2 w-full mt-1"
            />
          </label>
          <label className="block mb-2">
            Address Line 2:
            <input
              type="text"
              name="addressLine2"
              value={invoice.addressLine2}
              onChange={handleInputChange}
              className="border-gray-300 border rounded-md px-4 py-2 w-full mt-1"
            />
          </label>
          <label className="block mb-2">
            City:
            <input
              type="text"
              name="city"
              value={invoice.city}
              onChange={handleInputChange}
              className="border-gray-300 border rounded-md px-4 py-2 w-full mt-1"
            />
          </label>
          <label className="block mb-2">
            Country:
            <input
              type="text"
              name="country"
              value={invoice.country}
              onChange={handleInputChange}
              className="border-gray-300 border rounded-md px-4 py-2 w-full mt-1"
            />
          </label>
          <label className="block mb-4">
            <input
              type="checkbox"
              name="showAddress"
              checked={invoice.showAddress}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            Same as Invoice Address
          </label>
          {!invoice.showAddress && (
            <div className="mb-4">
              <label className="block mb-2">
                Invoice Address Line 1:
                <input
                  type="text"
                  name="addressLine1"
                  value={invoice.addressLine1}
                  onChange={handleInputChange}
                  className="border-gray-300 border rounded-md px-4 py-2 w-full mt-1"
                />
              </label>
              <label className="block mb-2">
                Invoice Address Line 2:
                <input
                  type="text"
                  name="addressLine2"
                  value={invoice.addressLine2}
                  onChange={handleInputChange}
                  className="border-gray-300 border rounded-md px-4 py-2 w-full mt-1"
                />
              </label>
              <label className="block mb-2">
                Invoice City:
                <input
                  type="text"
                  name="city"
                  value={invoice.city}
                  onChange={handleInputChange}
                  className="border-gray-300 border rounded-md px-4 py-2 w-full mt-1"
                />
              </label>
              <label className="block mb-2">
                Invoice Country:
                <input
                  type="text"
                  name="country"
                  value={invoice.country}
                  onChange={handleInputChange}
                  className="border-gray-300 border rounded-md px-4 py-2 w-full mt-1"
                />
              </label>
            </div>
          )}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold mt-6 mb-4">Line Items</h3>
          {invoice.lineItems.map((item, index) => (
            <div key={index} className="mb-4">
              <label className="block mb-2">
                Description:
                <input
                  type="text"
                  name="description"
                  value={item.description}
                  onChange={(e) => handleItemChange(e, index)}
                  className="border-gray-300 border rounded-md px-4 py-2 w-full mt-1"
                />
              </label>
              <label className="block mb-2">
                Quantity:
                <input
                  type="number"
                  name="quantity"
                  value={item.quantity}
                  onChange={(e) => handleItemChange(e, index)}
                  className="border-gray-300 border rounded-md px-4 py-2 w-full mt-1"
                />
              </label>
              <label className="block mb-2">
                Unit Price:
                <input
                  type="number"
                  name="unitPrice"
                  value={item.unitPrice}
                  onChange={(e) => handleItemChange(e, index)}
                  className="border-gray-300 border rounded-md px-4 py-2 w-full mt-1"
                />
              </label>
              <button
                type="button"
                onClick={() => handleDeleteItem(index)}
                className="text-red-500 hover:text-red-700 mt-2"
              >
                Delete
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddItem}
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
          >
            Add Item
          </button>
          <label className="block mt-6">
            Notes:
            <textarea
              name="notes"
              value={invoice.notes}
              onChange={handleInputChange}
              className="border-gray-300 border rounded-md px-4 py-2 w-full mt-1"
            />
          </label>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded mt-4"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewInvoice;

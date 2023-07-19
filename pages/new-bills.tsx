import Link from "next/link";
import Header from "../src/components/Header";
import Paid from "../src/components/Bills";
import NewInvoice from "../src/components/NewInvoice";

const IndexPage = () => (
  <div>
    <Header />
    <NewInvoice />
  </div>
);

export default IndexPage;

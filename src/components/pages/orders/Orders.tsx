import { useState } from "react";
import { Link } from "react-router-dom";
import { TableDataType } from "../../../@types/interfaces/order.types";
import { columnHeadings } from "../../../constants/tableHeadings";
import TableHOC from "../../shared/admin/TableHOC";

const Orders = () => {
  const [rows, setRows] = useState<TableDataType[]>([
    {
      _id: "asdas",
      amount: 3000,

      quantity: 2,
      discount: 150,

      status: <span className="red">process</span>,
      action: <Link to={`/orders/asdas`}>view</Link>,
    },
  ]);

  const Table = TableHOC<TableDataType>(
    columnHeadings,
    rows,
    "dashboard-product-box",
    "Orders",
    rows.length > 6
  )();
  return (
    <div className="container">
      <h1>My Orders</h1>
      {/* {isLoading ? <Skeleton length={20} /> : Table} */}
      {Table}
    </div>
  );
};

export default Orders;

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { TCustomError } from "../../../@types/api/api.types";
import { TableDataType } from "../../../@types/interfaces/order.types";
import { columnHeadings } from "../../../constants/tableHeadings";
import { useMyOrdersQuery } from "../../../redux/api/orderApi";
import { RootState } from "../../../redux/store";
import TableHOC from "../../shared/admin/TableHOC";
import { Skeleton } from "../../shared/loader/Loader";

const Orders = () => {
  const { user } = useSelector((state: RootState) => state.userReducer);

  const { isLoading, data, isError, error } = useMyOrdersQuery(user?._id!);

  const [rows, setRows] = useState<TableDataType[]>([]);

  if (isError) {
    const err = error as TCustomError;
    toast.error(err.data.message);
  }

  const Table = TableHOC<TableDataType>(
    columnHeadings,
    rows,
    "dashboard-product-box",
    "Orders",
    rows.length > 6
  )();

  useEffect(() => {
    if (data)
      setRows(
        data.orders.map((i) => ({
          _id: i._id,
          amount: i.total,
          discount: i.discount,
          quantity: i.orderItems.length,
          status: (
            <span
              className={
                i.status === "Processing"
                  ? "red"
                  : i.status === "Shipped"
                  ? "green"
                  : "purple"
              }
            >
              {i.status}
            </span>
          ),
          action: <Link to={`/admin/transaction/${i._id}`}>Manage</Link>,
        }))
      );
  }, [data]);

  return (
    <div className="container">
      <h1>My Orders</h1>
      {isLoading ? <Skeleton length={20} /> : Table}
    </div>
  );
};

export default Orders;

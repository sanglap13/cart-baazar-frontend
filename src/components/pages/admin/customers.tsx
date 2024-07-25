import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { ICustomerTableDataType } from "../../../@types/interfaces/admin.types";
import AdminSidebar from "../../../components/shared/admin/AdminSidebar";
import TableHOC from "../../../components/shared/admin/TableHOC";
import { customerColumns } from "../../../constants/tableHeadings";
import {
  useAllUsersQuery,
  useDeleteUserMutation,
} from "../../../redux/api/userApi";
import { RootState } from "../../../redux/store";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { TCustomError } from "../../../@types/api/api.types";
import { responseToast } from "../../../utils/commonFunctions/responseToast";
import { Skeleton } from "../../shared/loader/Loader";

const Customers = () => {
  const { user } = useSelector((state: RootState) => state.userReducer);

  const { isLoading, data, isError, error } = useAllUsersQuery(user?._id!);

  const [rows, setRows] = useState<ICustomerTableDataType[]>([]);

  const [deleteUser] = useDeleteUserMutation();

  const handleCustomerDelete = async (userId: string) => {
    const res = await deleteUser({ userId, adminUserId: user?._id! });
    responseToast(res, null, "");
  };

  if (isError) {
    const err = error as TCustomError;
    toast.error(err.data.message);
  }

  const Table = TableHOC<ICustomerTableDataType>(
    customerColumns,
    rows,
    "dashboard-product-box",
    "Customers",
    rows.length > 6
  )();

  useEffect(() => {
    if (data)
      setRows(
        data.users.map((i) => ({
          avatar: (
            <img
              style={{
                borderRadius: "50%",
              }}
              src={i.photo}
              alt={i.name}
            />
          ),
          name: i.name,
          email: i.email,
          gender: i.gender,
          role: i.role,
          action: (
            <button onClick={() => handleCustomerDelete(i._id)}>
              <FaTrash />
            </button>
          ),
        }))
      );
  }, [data]);

  return (
    <div className="admin-container">
      <AdminSidebar />
      <main>{isLoading ? <Skeleton length={20} /> : Table}</main>
    </div>
  );
};

export default Customers;

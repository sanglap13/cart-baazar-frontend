import { signOut } from "firebase/auth";
import React, { useState } from "react";
import {
  FaSearch,
  FaShoppingBag,
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const user = {
  _id: "assa",
  role: "ads",
};

const Header = () => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const handleLogout = async () => {
    setIsDialogOpen(false);
    // try {
    //   await signOut(auth);
    //   toast.success("Sign Out Successfully");
    //   setIsOpen(false);
    // } catch (error) {
    //   toast.error("Sign Out Fail");
    // }
  };

  return (
    <nav className="header">
      {" "}
      <Link onClick={() => setIsDialogOpen(false)} to={"/"}>
        HOME
      </Link>
      <Link onClick={() => setIsDialogOpen(false)} to={"/search"}>
        <FaSearch />
      </Link>
      <Link onClick={() => setIsDialogOpen(false)} to={"/cart"}>
        <FaShoppingBag />
      </Link>
      {user._id ? (
        <>
          <button onClick={() => setIsDialogOpen((prev) => !prev)}>
            <FaUser />
          </button>
          <dialog open={isDialogOpen}>
            <div>
              {user.role === "admin" && (
                <Link
                  onClick={() => setIsDialogOpen(false)}
                  to="/admin/dashboard"
                >
                  Admin
                </Link>
              )}

              <Link onClick={() => setIsDialogOpen(false)} to="/orders">
                Orders
              </Link>
              <button onClick={handleLogout}>
                <FaSignOutAlt />
              </button>
            </div>
          </dialog>
        </>
      ) : (
        <Link onClick={() => setIsDialogOpen(false)} to={"/login"}>
          <FaSignInAlt />
        </Link>
      )}
    </nav>
  );
};

export default Header;

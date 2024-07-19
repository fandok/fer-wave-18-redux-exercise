import "bootstrap/dist/css/bootstrap.min.css";

import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCms } from "../redux/cms/cmsSlice";
import { Table } from "react-bootstrap";
import dayjs from "dayjs";

const AdminTable = () => {
  const dispatch = useDispatch();
  const tableData = useSelector((state) => state.cms.data);

  useEffect(() => {
    dispatch(fetchCms());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.dashboard}>Dashboard</div>
      <div className={styles.listOrder}>List Order</div>
      <Table striped>
        <thead>
          <tr>
            <th className={styles.tableHeader}>No</th>
            <th className={styles.tableHeader}>User Email</th>
            <th className={styles.tableHeader}>Car</th>
            <th className={styles.tableHeader}>Start Rent</th>
            <th className={styles.tableHeader}>Finish Rent</th>
            <th className={styles.tableHeader}>Price</th>
            <th className={styles.tableHeader}>Category</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={data.id}>
              <td className={styles.tableRow}>{index + 1}</td>
              <td className={styles.tableRow}>{data.User.email}</td>
              <td className={styles.tableRow}>{data.Car?.name || "N/A"}</td>
              <td className={styles.tableRow}>
                {dayjs(data.start_rent_at).format("DD-MM-YYYY")}
              </td>
              <td className={styles.tableRow}>
                {dayjs(data.finish_rent_at).format("DD-MM-YYYY")}
              </td>
              <td className={styles.tableRow}>
                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                }).format(data.total_price)}
              </td>
              <td className={styles.tableRow}>{data.Car?.category || "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AdminTable;

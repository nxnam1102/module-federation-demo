import { DataGrid } from "devextreme-react";
import styles from "./index.module.scss";

const dataSource = [
  { code: "1", name: "one" },
  { code: "2", name: "two" },
  { code: "3", name: "three" },
];
const BPManagement = () => {
  return (
    <div className={styles.container}>
      {/* <img
        src={require("../../assets/image/bp.png")}
        className={styles.image}
        alt="bp"
      ></img> */}
      <DataGrid
        dataSource={dataSource}
        columns={[{ dataField: "code" }, { dataField: "name" }]}
      ></DataGrid>
    </div>
  );
};
export default BPManagement;

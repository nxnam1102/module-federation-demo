import { FC, useEffect, useState } from "react";
import styles from "./index.module.scss";

const EmployeeManagement = ({ title, data, onDataChange }: any) => {
  const [dataSource, setDataSource] = useState<any[]>([]);
  useEffect(() => {
    setDataSource(data);
  }, [data]);

  // console.log(dataSource);
  return (
    <div className={styles.container}>
      <div>{title}</div>
      <div
        onClick={() => {
          let clone = [...dataSource];
          clone.push(1);
          onDataChange?.(clone);
        }}
      >
        Add employee
      </div>
      <div>
        {dataSource.map((x: any, index: any) => {
          return <div>{`employee ${index}`}</div>;
        })}
      </div>
    </div>
  );
};
export default EmployeeManagement;

import React, { Suspense, lazy, useState } from "react";
import logo from "./logo.svg";
import styles from "./index.module.scss";
import "bp/theme";
import BPSecond from "bp/namnx";
import Employee from "employee/employee";
import BP from "bp/bp";

// const Employee = lazy(() => import("employee/employee"));
// const BP = lazy(() => import("bp/bp"));
// const BPSecond = lazy(() => import("bp/namnx"));
export const PageType = {
  Employee: "employee",
  BusinessPartner: "bp",
  SaleOrder: "so",
};
function App() {
  const [currentPage, setCurrentPage] = useState<any>(PageType.Employee);
  const [employeeData, setEmployeeData] = useState<any[]>([]);
  const checkSelected = (param: string) => {
    let result = "";
    if (currentPage === param) {
      result = "selected";
    }
    return result;
  };
  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <div
          className={`${styles.buttonHeader} ${
            checkSelected(PageType.Employee) &&
            styles[checkSelected(PageType.Employee)]
          } ${styles[PageType.Employee]}`}
          onClick={() => {
            setCurrentPage(PageType.Employee);
          }}
        >
          {`Employee${
            employeeData.length > 0 ? ` (${employeeData.length})` : ""
          }`}
        </div>
        <div
          className={`${styles.buttonHeader} ${
            checkSelected(PageType.BusinessPartner) &&
            styles[checkSelected(PageType.BusinessPartner)]
          } ${styles[PageType.BusinessPartner]}`}
          onClick={() => {
            setCurrentPage(PageType.BusinessPartner);
          }}
        >
          Business Partner
        </div>
        <div
          className={`${styles.buttonHeader} ${
            checkSelected(PageType.SaleOrder) &&
            styles[checkSelected(PageType.SaleOrder)]
          } ${styles[PageType.SaleOrder]}`}
          onClick={() => {
            setCurrentPage(PageType.SaleOrder);
          }}
        >
          Sale Orders
        </div>
      </div>
      <Suspense fallback={"Đang tải..."}>
        <div className={styles.content}>
          {currentPage === PageType.Employee ? (
            <Employee
              data={employeeData}
              title={""}
              onDataChange={(data: any[]) => {
                console.log(data);
                setEmployeeData(data);
              }}
            ></Employee>
          ) : currentPage === PageType.BusinessPartner ? (
            <BP></BP>
          ) : (
            <BPSecond></BPSecond>
          )}
        </div>
      </Suspense>
    </div>
  );
}

export default App;

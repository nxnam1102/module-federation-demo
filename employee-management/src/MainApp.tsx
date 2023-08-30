import EmployeeManagement from "./components/main";

const App = ({ onClickTest }: any) => {
  return (
    <div>
      <div onClick={onClickTest}>Module Employee</div>
      <EmployeeManagement
        data={[1, 2, 3, 4, 5]}
        title={"test main"}
      ></EmployeeManagement>
    </div>
  );
};
export default App;

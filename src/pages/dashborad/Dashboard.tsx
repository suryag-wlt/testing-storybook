import WltInput from "../../commponet/atoms/input/Input";
import WltLabel from "../../commponet/atoms/label/Label";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <>
      <div className="container">
        <div className="mb-3">
          <WltLabel title="User Name" htmlFor="username" />
          <WltInput
            name="username"
            type="text"
            placeholdder="Enter User Name"
          />
          
        </div>
        <div className="mb-3">
          <WltLabel title="Password" htmlFor="password" />
          <WltInput
            name="password"
            type="password"
            placeholdder="Enter password "
          />

        </div>
      </div>
    </>
  );
};

export default Dashboard;

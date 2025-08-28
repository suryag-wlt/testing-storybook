import WltButton from "../../commponent/atoms/button/Button";
import WltInput from "../../commponent/atoms/input/Input";
import WltLabel from "../../commponent/atoms/label/Label";
import "./Dashboard.css";

const Dashboard = () => {
  const SendData = () => {
    alert("Data Sent Successfully");
  };
  console.log("Dashboard Rendered");

  return (
    <>
      <div className="container">
        <form action="get" className="p-4">
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
          <WltButton
            type="submit"
            buttonText="Send"
            onClick={() => SendData()}
          />
          <WltButton
            type="reset"
            buttonText="Reset"
            className="secondary ms-3"
          />
        </form>
      </div>
    </>
  );
};

export default Dashboard;

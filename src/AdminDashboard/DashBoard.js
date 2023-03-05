import PieChart from "./PieChart";
import LineChart from "./LineChart";

function DashBoard() {
  return (
    <div className="grid mx-auto   md:grid-cols-2 md:gap-10 gap-4 grid-cols-1">
      <div className="md:h-[500px]  ">
        <PieChart />
      </div>
      <div className="md:h-[500px]  ">
        <LineChart />
      </div>
    </div>
  );
}

export default DashBoard;

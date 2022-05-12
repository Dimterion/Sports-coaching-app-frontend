import { useParams } from "react-router-dom";
import { useFetch } from "../../utils/fetch";
import Header from "../../components/Header/Header";
import BarChart from "../../components/BarChart/BarChar";
import AreaChart from "../../components/AreaChart/AreaChart";
import RadarChart from "../../components/RadarChart/RadarChart";
import Card from "../../components/Card/Card";
import PieChart from "../../components/PieChart/PieChart";
import Loader from "../../components/Loader/Loader";
import Error from "../Error/Error";
import "./user.css";

function User() {
  const { id } = useParams();
  const {
    data: user,
    loading,
    error,
  } = useFetch(`http://localhost:3000/user/${id}`);

  if (error) {
    return <Error />;
  }

  return loading ? (
    <Loader />
  ) : (
    <div>
      <Header firstName={user.data.userInfos.firstName} />
      <div className="statistics-container">
        <div className="charts-container">
          <BarChart />
          <AreaChart />
          <RadarChart />
          <PieChart />
        </div>
        <Card
          firstItemQuantity={user.data.keyData.calorieCount}
          secondItemQuantity={user.data.keyData.proteinCount}
          thirdItemQuantity={user.data.keyData.carbohydrateCount}
          fourthItemQuantity={user.data.keyData.lipidCount}
        />
      </div>
    </div>
  );
}

export default User;

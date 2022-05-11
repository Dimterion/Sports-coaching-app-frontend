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
      <BarChart />
      <AreaChart />
      <RadarChart />
      <PieChart />
    </div>
  );
}

export default User;

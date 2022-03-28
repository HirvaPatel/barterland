import "./home.css";
import FeaturedInfo from '../components/featuredInfo/FeaturedInfo'
import Chart from "../components/charts/Chart";
import {data} from "../dummyData"
import Widgetssm from "../components/widgetsSm/Widgetssm";
import Widgetslg from "../components/widgetsLg/Widgetslg";
import Sidebar from "../components/Sidebar/Sidebar";
// import TitleSection from '../../home/js/TitleSection';
import Titlebar from "../components/TitleBar/Titlebar";
import FooterSection from '../../home/js/FooterSection';


export default function Home() {
  
  return (
    <div>
      <Titlebar />
     

          <Sidebar/>
    <div className="home">
      <FeaturedInfo/>
      <Chart data={data} title="User Analytics" grid dataKey="ActiveUser"/>
      <div className="widgets">
      <Widgetssm/>
      <Widgetslg/>
      </div>
      </div>
      <FooterSection />
      </div>
      
  )
}

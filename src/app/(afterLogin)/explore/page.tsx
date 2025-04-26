import style from "./explore.module.css";
import SearchForm from "@/app/(afterLogin)/_components/SearchForm";
import Trend from "@/app/(afterLogin)/_components/Trend";

const ExplorePage = () => {
  return (
    <main className={style.main}>
      <div className={style.formZone}>
        <SearchForm />
      </div>
      <div className={style.trend}>
        <h3>나를 위한 트렌드</h3>
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
      </div>
    </main>
  );
};

export default ExplorePage;

import { Outlet } from "react-router-dom";
import MyHeader from "../MyHeader";
import Loader from "../components/Loader";
import { useDefaultContext } from "../contexts/DefaultContext";

export default function DefaultLayout() {
  const { isLoading } = useDefaultContext();
  return (
    <>
      <MyHeader />
      <main>
        <Outlet />
      </main>
      {isLoading && <Loader />}
    </>
  );
}

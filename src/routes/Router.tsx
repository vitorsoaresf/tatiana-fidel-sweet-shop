import { Routes, Route } from "@libs/reactRouterDom";
import { Home } from "@pages/Home";

export const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
};

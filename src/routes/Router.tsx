import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Tracks } from "../pages/Tracks";
import { Default } from "../layouts/default";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Default />}>
        <Route path={'/'} element={<Tracks />} />
        <Route path={'/home/:cod'} element={<Home />} />
        {/* <Route path={'*'} element={} /> */}
      </Route>
    </Routes>
  )
}
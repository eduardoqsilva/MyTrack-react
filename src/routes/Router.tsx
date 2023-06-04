import { Route, Routes } from "react-router-dom";
import { Default } from "../layouts/default";
import { Home } from "../pages/Home";
import { Track } from "../pages/Track";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Default />}>
        <Route path={'/'} element={<Home />} />
        <Route path={'/track/:cod'} element={<Track />} />
        {/* <Route path={'*'} element={} /> */}
      </Route>
    </Routes>
  )
}
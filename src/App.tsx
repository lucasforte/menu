import { Route, Routes } from "react-router";
import { MainFrame } from "./Components";
import { Catalog } from "./Pages";

export function App() {
  // create a template object por the items
  // with url, name, description, img
  return (
    <MainFrame>
      <Routes>
        <Route
          path="/"
          element={
            <div className="h-full w-full flex justify-center items-center bg-red-200">
              <Catalog />
            </div>
          }
        />
      </Routes>
    </MainFrame>
  );
}

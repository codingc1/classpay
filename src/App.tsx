import React, { Suspense } from "react";
import "./App.css";
import MaxPageCircelLoading from "./components/common/loading/pageMaxLoading";
import AppRoutes from "./routers/routes";
import "./styles/styles.css";
import "./styles/animation/loading/circel.css"

export default function App() {
  return (
    <Suspense fallback={<MaxPageCircelLoading />}>
      <AppRoutes />
    </Suspense>
  );
}
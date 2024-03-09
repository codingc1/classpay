import React, { Suspense } from "react";
import "./App.css";
import MaxPageCircelLoading from "./components/common/loading/pageMaxLoading";
import AppRoutes from "./routers/routes";
import './styles/tailwind.css'
import "./styles/styles.css";
import "./styles/animation/loading/circel.css"
import "./styles/width/width-media-query.css"

export default function App() {
  return (
    <Suspense fallback={<MaxPageCircelLoading />}>
      <AppRoutes />
    </Suspense>
  );
}
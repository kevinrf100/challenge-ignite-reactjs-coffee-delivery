import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home";
import { DefaultLayout } from "./layout/DefaultLayout";
import CheckoutPage from "./pages/checkout";
import SuccessPage from "./pages/success";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/success" element={<SuccessPage />} />
      </Route>
    </Routes>
  );
}

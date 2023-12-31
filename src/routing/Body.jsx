import { Route, Routes, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";

export const Body = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<Home/>}/>
      </Routes>
    </>
  );
};

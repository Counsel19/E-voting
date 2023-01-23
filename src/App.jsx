import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AddCandidate from "./pages/admin/AddCandidate";
import AllPositions from "./pages/admin/AllPositions";
import AllCandidates from "./pages/admin/AllCandidates";
import AddPosition from "./pages/admin/AddPosition";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminProtectedRoute from "./routes/AdminProtectedRoute";
import SharedLayout from "./layout/SharedLayout";
import UserProtectedRoute from "./routes/UserProtectedRoute";
import UserLayout from "./layout/UserLayout";
import Home from "./pages/students/Home";
import List from "./pages/students/List";
import VoteCandidate from "./pages/students/VoteCandidate";
import UserRedirect from "./routes/UserRedirect";
import Login from "./pages/students/Login";
import AllStudents from "./pages/admin/AllStudents";
import LoginAdmin from "./pages/students/LoginAdmin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/admin"
          element={
            <AdminProtectedRoute>
              <SharedLayout />
            </AdminProtectedRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="candidates" element={<AllCandidates />} />
          <Route path="positions" element={<AllPositions />} />
          <Route path="students" element={<AllStudents />} />
          <Route path="add-candidate" element={<AddCandidate />} />
          <Route path="add-position" element={<AddPosition />} />
        </Route>
        <Route
          path="/students"
          element={
            <UserProtectedRoute>
              <UserLayout />
            </UserProtectedRoute>
          }
        >
          <Route index element={<Home />} />
          <Route
            path="candidates"
            element={<List studentsRoute={true} advisor />}
          />
          
          <Route path="vote/:id" element={<VoteCandidate />} />
        </Route>

        <Route
          path="/"
          element={
            <UserRedirect>
              <Login />
            </UserRedirect>
          }
        />
        <Route
          path="/login-admin"
          element={
            <UserRedirect>
              <LoginAdmin />
            </UserRedirect>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

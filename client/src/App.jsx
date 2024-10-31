import { Suspense, lazy } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoadingSpinner from "./components/LoadingSpinner";
import MainLayout from "./layouts/MainLayout";

const HomePage = lazy(() => import("./pages/Home/HomePage"));
const AboutPage = lazy(() => import("./pages/About/AboutPage"));
const BlogPage = lazy(() => import("./pages/Blog/BlogPage"));
const PrivacyPage = lazy(() => import("./pages/PrivacyTerm/PrivacyPage"));
const TermsPage = lazy(() => import("./pages/PrivacyTerm/TermsPage"));
const FaqPage = lazy(() => import("./pages/Faq/FaqPage"));
const ContactPage = lazy(() => import("./pages/Contact/ContactPage"));
const LoginPage = lazy(() => import("./pages/Auth/LoginPage"));
const RegisterPage = lazy(() => import("./pages/Auth/RegisterPage"));
const ForgotPasswordPage = lazy(() =>
  import("./pages/Auth/ForgotPasswordPage")
);
const NotFoundPage = lazy(() => import("./pages/NotFound/NotFoundPage"));
const BlogDetailPage = lazy(() => import("./pages/Blog/BlogDetailPage"));
const BillardPage = lazy(() => import("./pages/Billard/BillardPage.jsx"));
const BillardDetailPage = lazy(() =>
  import("./pages/Billard/BillardDetailPage")
);
function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/blog/:slug" element={<BlogDetailPage />} />
            <Route path="/billard" element={<BillardPage />} />
            <Route path="/billard/:slug" element={<BillardDetailPage />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;

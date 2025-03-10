import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './home/Home';
import Courses from './courses/Courses';
import CourseDetail from './component/CourseDetail';
import Signup from './component/Signup';
import { useAuth } from './context/AuthProvider';
import ContactUs from './component/ContactUs';
import AboutUs from './component/AboutUs';
import Payment from './component/Payment';
import TermsAndConditions from './component/TermsAndConditions';
import Teachers from './page/Teachers';
// for reset password
import ForgotPassword from "./component/ForgotPassword";
import ResetPassword from "./component/ResetPassword";
import WhatsAppButton from './component/WhatsAppButton';
import PrivacyPolicy from './page/PrivacyPolicy';
import ScrollToTop from './component/ScrollToTop';
import SearchPage from './page/SearchPage';
import EarlyEducation from './page/EarlyEducation';
import UpdateSection from './component/UpdateSection';
import PrimaryEducation from './page/PrimaryEducation';


function App() {
    const [authUser] = useAuth();

    return (
        <div className='dark:bg-slate-900 dark:text-white'>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/course" element={authUser ? <Courses /> : <Navigate to="/signup" />} />
                <Route path="/course/:id" element={<CourseDetail />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password" element={<ResetPassword />} />
                    
                <Route path="/payment" element={authUser ? <Payment /> : <Navigate to="/signup" />} />
                <Route path="/termsandconditions" element={<TermsAndConditions />} />
                <Route path="/teachers" element={<Teachers />} />
                <Route path="/privacypolicy" element={<PrivacyPolicy />} />
                <Route path='/early-education' element={<EarlyEducation />} />
                <Route path='/primary-education' element={<PrimaryEducation />} />
                <Route path='/update' element={<UpdateSection />} />
                
            </Routes>
            <WhatsAppButton />
        </div>
    );
}

export default App;

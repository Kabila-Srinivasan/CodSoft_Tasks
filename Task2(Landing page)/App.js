import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css'
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';

import PrivacyPolicy from './Pages/Privacy';
import Aboutus from './Pages/Aboutus';
import Contactus from './Pages/Contactus';
import FeedbackForm from './Pages/form';
import Submission from './Pages/submission';
import Feedbacks from './Pages/Feedbacks';
import Login from './Pages/Login';
import AdminLogin from './Pages/AdminLogin';
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RigtSide/RightSide';
import Sidebar from './components/Sidebar';
import OurServices from './Pages/OurServices';
import Follow from './Pages/Follow';
import Testimonials from './Testimonials';
import LandingPage from './Pages/LandingPage';
import ProductList from './Pages/ProductList';
import GetData from './Pages/GetData';
import EditData from './Pages/EditData';
import FAQ from './Pages/Faq';
import AddCart from './Pages/AddCart';
import Cart from './Pages/Cart';





function App() {
  return (
    <div className="App">
    <BrowserRouter>
   <Navbar/>
   <Routes>
   <Route path='/' element={<LandingPage/>}></Route>
   <Route path='/log' element={<Login/>}></Route>
   <Route path='/admin' element={<AdminLogin/>}></Route>
    <Route path='/faq' element={<FAQ/>}></Route>
    <Route path='/terms' element={<TermsAndConditions/>}></Route>
    <Route path='/privacy' element={<PrivacyPolicy/>}></Route>
    <Route path='/about' element={<Aboutus/>}></Route>
    <Route path='/contact' element={<Contactus/>}></Route>
    <Route path='/feed' element={<FeedbackForm/>}></Route>
    <Route path='/feedb' element={<Feedbacks/>}></Route>
    <Route path='/test' element={<Testimonials/>}></Route>
    <Route path='/main' element={<MainDash/>}></Route>
    <Route path='/right' element={<RightSide/>}></Route>
    <Route path='/service' element={<OurServices/>}></Route>
    <Route path='/foll' element={<Follow/>}></Route>
    <Route path='/home' element={<ProductList/>}></Route>
    <Route path='/cart' element={<Cart/>}></Route>
    <Route path='/dis' element={<AddCart/>}></Route>
      <Route path='/get' element={<GetData/>}></Route>
    <Route path='/add' element={<EditData/>}></Route>
    <Route path='/update/:id' element={<EditData/>}></Route>
    <Route path="/submissions" element={<Submission />} />
    <Route path="/submission/:id" element={<Submission />} />
    
           
   </Routes>
      <Footer/>
   </BrowserRouter>
    </div>
  );
}

export default App;

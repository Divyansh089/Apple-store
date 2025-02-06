import { Route, Routes } from 'react-router-dom';
import PrivatRoute from '../PrivateRouting';
import Address from '../components/Address/Address';
import Airpods from '../components/Airpods';
import Apple from '../components/Apple';
import Cartpage from '../components/CartPage/Cart';
import Login from '../components/Login';
import Payment from '../components/Payment';
import Signup from '../components/Signup';
import Watch from '../components/Watch';
import Phone10 from '../components/phone/Phone10';
import Phone11 from '../components/phone/Phone11';
import Phone13 from '../components/phone/Phone13';
import Phone14 from '../components/phone/Phone14';
import Phone15 from '../components/phone/Phone15';
import Phone15PreOrder from '../components/phone/Phone15PreOrder';
import PhoneSe from '../components/phone/PhoneSe';



const AppRoutes = () => {
  return (
    <div>
      <Routes>
     
        <Route path="/signup" element={<Signup />} />
        <Route path= "/login" element = {<Login/>}></Route>
        <Route path= "/" element = {<Apple/>}></Route>
        <Route path= "/iphone14" element = {<Phone14/>}></Route>
        <Route path= "/iphone15" element = {<Phone15/>}></Route>
        <Route path= "/iphone15preorder" element = {<Phone15PreOrder/>}></Route>

    

    <Route path ="/address" element={<PrivatRoute><Address/></PrivatRoute> }></Route>


        <Route path= "/cart" element = {<Cartpage/>}></Route>
        <Route path= "/iphone10" element = {<Phone10/>}></Route>
        <Route path= "/iphone11" element = {<Phone11/>}></Route>
        <Route path= "/iphone13" element = {<Phone13/>}></Route>
        <Route path= "/iphonese" element = {<PhoneSe/>}></Route>
        <Route path= "/airpods" element = {<Airpods/>}></Route>
        <Route path= "/watch" element = {<Watch/>}></Route>
        <Route path= "/payment" element = {<Payment/>}></Route>
        
      </Routes>
    </div>
  );
};

export default AppRoutes;
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Footer2 from '../Components/Common/Footer/Footer2'
import Navebar3 from '../Components/Common/Navbar/Navebar3'
import StickyMenu from '../Components/Common/Navbar/StickyMenu'
import Banner from '../Components/HomeScreenDetails/Banner/Banner'
import Banner2 from '../Components/HomeScreenDetails/Banner/Banner2'
import Booking from '../Components/HomeScreenDetails/Booking/Booking'
import Booking2 from '../Components/HomeScreenDetails/Booking/Booking2'
import Services2 from '../Components/HomeScreenDetails/Services/Services2'
import TaskBar from '../Components/HomeScreenDetails/TaskBar/TaskBar'
import Testimonial from '../Components/HomeScreenDetails/Testimonial/Testimonial'
import Testimonial2 from '../Components/HomeScreenDetails/Testimonial/Testimonial2'
import SubCategory from '../Components/SubCategory/SubCategory'
import SubCategory2 from '../Components/SubCategory/SubCategory2'


const SubCategoryScreen = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const [taskBarData, setTaskBarData] = useState([]);
  const [updateLocation , setUpdateLocation] = useState(false);
  const [subCatePack,setSubCatePack]=useState([]);
  const location=useLocation();
  // const subCategoryPack=location.state.subcatData;
  // const subCategPackId=subCategoryPack.id;
  // const subCatePackName=subCategoryPack.name;

  const {subCategory_name , subCategory_id} = useParams();

useEffect(()=>{

  const api=`https://admin.experienceit.in/api/getPackageBySubCategory?package_subcat_id=${subCategory_id}`;

  axios
  .get(api)
  .then((res)=>{
      console.log(res,'Sub Category Api  All Packages');
   if (res.data.status===true){
    const val=res.data.body;
    
    setSubCatePack(val);
   }
  })
  .catch((err)=>{
    console.log(err ,"Sub Category Package Data Not Found")  
  });
},[subCategory_id])

  return (
    <>
    <div className="SubCategory_Screens">
     
      <Navebar3 updateLocation={updateLocation} setUpdateLocation={setUpdateLocation}
       showSideBar={showSideBar}
       setShowSideBar={setShowSideBar}
       taskBarData={taskBarData}
      />
      <TaskBar updateLocation={updateLocation}  setTaskBarData={setTaskBarData}/>
     
      <Booking2 updateLocation={updateLocation}/>
      {/* <SubCategory subCatePack={subCatePack} subCatePackName={subCategory_name} subCategory_id = {subCategory_id}/> */}
      <SubCategory2  subCatePack={subCatePack} subCatePackName={subCategory_name} subCategory_id = {subCategory_id}/>
      <Banner2/>
     
      <Testimonial2/>
      <Services2/>
      <Footer2/>
      </div>
      <StickyMenu/>
    </>
  )
}

export default SubCategoryScreen;

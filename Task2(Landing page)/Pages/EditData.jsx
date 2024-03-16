import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import './EditData.css';
import HomeListService from '../Service/HomeListService';
const EditData=()=> {
  const nav=useNavigate();
  const[name,setName]=useState('');
  const[mobileNo,setMobileNo]=useState('');
  const[emailId,setEmailId]=useState('');
  const[serviceType,setServiceType]=useState('');
  const[applianceType,setApplianceType]=useState('');
  const[model,setModel]=useState('');
  const[address,setAddress]=useState('');
  const[city,setCity]=useState('');
  const[state,setState]=useState('');
  const[pincode,setPincode]=useState('');
  const {id} = useParams();
  const saveOrUpdateHome = (e) => {
    e.preventDefault()
    const ProductList={id,name,mobileNo,emailId,serviceType,applianceType,model,address,city,state,pincode}
    if(id.length===0||name.length===0||mobileNo.length===0||emailId.length===0||serviceType.length===0||applianceType===0||model===0||address===0||city===0||state===0||pincode.length===0){
      alert("Enter All fields")
    }
      else{
        e.preventDefault()
          const homelist = {name,mobileNo,emailId,serviceType,applianceType,model,address,city,state,pincode}
          if(id){
              HomeListService.updateHomelist(id, homelist).then((response) => {
                  nav('/get')
              }).catch(error => {
                  console.log(error)
              })  
          }
        }
      }   
      useEffect(() => {
          HomeListService.getHomelistById(id).then((response) =>{
              setName(response.data.name)
              setMobileNo(response.data.mobileNo)
              setEmailId(response.data.emailId)
              setServiceType(response.data.serviceType)
              setApplianceType(response.data.applianceType)
              setModel(response.data.model)
              setAddress(response.data.address)
              setCity(response.data.city)
              setState(response.data.state)
              setPincode(response.data.pincode)
          }).catch(error => {
              console.log(error)
          })
      },[id])
  return (
    <div id="body">
    <div className="signup-form">
    <div className="container">
      <div className="header">
        <p id='update'>Update Details</p>
      </div>
      <form>
      <div className="input">
        <i className="fa-solid fa-user"></i>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name" />
      </div>
      <div className="input">
        <i className="fa-solid fa-user"></i>
        <input type="number" value={mobileNo} onChange={(e)=>setMobileNo(e.target.value)} placeholder="Mobile" />
      </div>
      <div className="input">
        <i className="fa-solid fa-envelope"></i>
        <input type="email" value={emailId} onChange={(e)=>setEmailId(e.target.value)} placeholder="Email Id" />
      </div>
      <div className="input">
        <i className="fa-solid fa-envelope"></i>
        <input type="text"   value={serviceType} onChange={(e)=>setServiceType(e.target.value)} placeholder="Service Type" />
      </div>
      <div className="input">
        <i className="fa-solid fa-envelope"></i>
        <input type="text"   value={applianceType} onChange={(e)=>setApplianceType(e.target.value)} placeholder="Appliance Type" />
      </div>
      <div className="input">
        <i className="fa-solid fa-envelope"></i>
        <input type="text"   value={model} onChange={(e)=>setModel(e.target.value)} placeholder="Model" />
      </div>
      <div className="input">
        <i className="fa-solid fa-envelope"></i>
        <input type="text"   value={address} onChange={(e)=>setAddress(e.target.value)} placeholder="Address" />
      </div>
      <div className="input">
        <i className="fa-solid fa-envelope"></i>
        <input type="text"   value={city} onChange={(e)=>setCity(e.target.value)} placeholder="City" />
      </div>
      <div className="input">
        <i className="fa-solid fa-envelope"></i>
        <input type="text"   value={state} onChange={(e)=>setState(e.target.value)} placeholder="State" />
      </div>
      <div className="input">
        <i className="fa-solid fa-envelope"></i>
        <input type="number"   value={pincode} onChange={(e)=>setPincode(e.target.value)} placeholder="Pincode" />
      </div>
        <input onClick={saveOrUpdateHome} className="e-signup-btn" type="submit" value="Submit" />
      <Link to="/get">  <button className="e-cancel-btn" >Cancel </button></Link>
        </form>
    </div>
  </div>
    </div>
  )
}
export default EditData
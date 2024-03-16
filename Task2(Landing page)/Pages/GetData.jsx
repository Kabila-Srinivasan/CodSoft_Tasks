import React, { useEffect, useState } from 'react'
import './GetData.css'
import { Link } from 'react-router-dom';
import HomeListService from '../Service/HomeListService';
const GetData=()=> {
  const [homelists, sethomelists] = useState([])
  useEffect(() => {
      getAllHomelist();
  }, [])
  const getAllHomelist = () => {
      HomeListService.getAllHomelist().then((response) => {
          sethomelists(response.data)
          console.log(response.data);
      }).catch(error =>{
          console.log(error);
      })
  }
  const deleteHomelist = (HomelistId) => {
     HomeListService.deleteHomelist(HomelistId).then((response) =>{
      getAllHomelist();
     
     }).catch(error =>{
         console.log(error);
     })
  }
  return (
    <div>
    <p id='order'>Service Request Details</p>
    <table id='gettable'>            
                <tr>
                  <th>Request Id</th>
                  <th>Name</th>
                  <th>MobileNo</th>
                  <th>EmailId</th>
                  <th>ServiceType</th>
                  <th>ApplianceType</th>
                  <th>Model</th>
                  <th>Address</th>
                  <th>City</th>
                  <th>State</th>
                  <th>Pincode</th>
                  <th>Actions</th>
                </tr>         
              {
                homelists?.map(
                    homelist => (
      <tr>
             <th> {homelist?.requestId}</th>
             <th> {homelist?.name}</th>
             <th> {homelist?.mobileNO}</th>
             <th> {homelist?.emailId}</th>
             <th> {homelist?.serviceType}</th>
             <th> {homelist?.applianceType}</th>
             <th> {homelist?.model}</th>
             <th> {homelist?.address}</th>
             <th> {homelist?.city}</th>
             <th> {homelist?.state}</th>
             <th> {homelist?.pincode}</th>
             
             <th><Link to={`/update/${homelist.requestId}`}><button id="actions">Update</button></Link>
             <button id="actions"  onClick = {() => deleteHomelist(homelist.requestId)}> Delete!</button>
             <Link to="/home"><button id='actions'>New</button></Link></th>         
      </tr>
    ))}    
            </table>
            </div>
  )
}
export default GetData;
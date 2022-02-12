import React,{useState} from 'react'
import "./Myform"
import "./Mytable.css"
import data from "./mock-data.json"
// import { useState } from 'react'


export default function Mytable() {
  const [contacts,setContacts]=useState(data) 
  const [addFormData, setAddFormData] = useState({
    country: "",
    contient: "",
    isdNumber: "",
    capitalCity: "",
  });
  const [editFormData, setEditFormData] = useState({
    country: "",
    contient: "",
    isdNumber: "",
    capitalCity: "",
    
  });
  const [editContactId, setEditContactId] = useState(null);
 
  return (
    
    <div>
      <div className="table-container">
      <table>
        <thead>
          <td align='center'>Country Name</td>
          <td align='center'>Continent</td>
          <td align='center'>Isd code</td>
          <td align='center'>Capital City</td>  
        </thead>

        <tbody>{contacts.map((contact)=>(
         <tr>
           <td align='center'>{contact.countryName}</td>
           <td align='center'>{contact.continent}</td>
           <td align='center'>{contact.isdNumber}</td>
           <td align='center'>{contact.capitalcity}</td>
         </tr>
        ))}
        </tbody>
      </table>
      </div>
    </div>
  )
}

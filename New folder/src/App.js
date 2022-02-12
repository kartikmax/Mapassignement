import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./hello.css";
import data from "./mock-data.json";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow.js";
import Navbar from './components/Navbar'

const App = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    countyName: "",
    contient: "",
    isdNumber: "",
    capitalcity: "",
  });

  const [editFormData, setEditFormData] = useState({
    countyName: "",
    contient: "",
    isdNumber: "",
    capitalcity: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addFormData.countryName,
      address: addFormData.contient,
      phoneNumber: addFormData.isdNumber,
      email: addFormData.capitalcity,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      countryName: editFormData.countryName,
      continent: editFormData.contient,
      isdNumber: editFormData.isdNumber,
      capitalcity: editFormData.capitalcity,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      countryName: contact.countryName,
      contient: contact.continent,
      isdNumber: contact.isdNumber,
      capitalcity: contact.capitalcity,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    
    <div className="app-container">
      <Navbar/>
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Country</th>
              <th>Continent</th>
              <th>ISD Code</th>
              <th>Capital city</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2>Add a Country</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="countryName"
          required="required"
          placeholder="Enter a country name..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="continent"
          required="required"
          placeholder="Enter an continent..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="isdNumber"
          required="required"
          placeholder="Enter a isd number..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="capitalcity"
          required="required"
          placeholder="Enter an capital..."
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default App;
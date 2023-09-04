import React, { useState } from "react";
import AdminNavbar from "./AdminNavBar";

const AddCenter = ({ onCardAdd }) => {
  const [formData, setFormData] = useState({
    name: "",
    imageUrl: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddCard = () => {
    // Basic validation: Check if required fields are filled
    if (!formData.name || !formData.imageUrl || !formData.description) {
      alert("Please fill in all required fields.");
      return;
    }

    // Create a card object from the form data
    const card = {
      name: formData.name,
      imageUrl: formData.imageUrl,
      description: formData.description,
    };

    // Add the card to the parent component (AdminHomePage)
    onCardAdd(card);

    // Reset the form
    setFormData({
      name: "",
      imageUrl: "",
      description: "",
    });
  };

  return (
    <div>
        <AdminNavbar />
        <div>
      <h2>Add Center</h2>
      <form>
        <div>
          <label>Enter Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Enter Image URL:</label>
          <input
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <button type="button" onClick={handleAddCard}>
          Add
        </button>
      </form>
      </div>
    </div>
  );
};

export default AddCenter;

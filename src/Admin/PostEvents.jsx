import React, { useState } from "react";
import { createEvent } from "../../../hotel-backend/api/eventAPIs";

const PostEvents = () => {
  const [title, setTitle] = useState('');
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);
  const [flashMessage, setFlashMessage] = useState('');
  const [imageError, setImageError] = useState(''); 

  // Image validation function
  const validateImages = (files) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg']; 
    const maxSize = 5 * 1024 * 1024; // 5MB

    for (let file of files) {
      if (!allowedTypes.includes(file.type)) {
        setImageError("Invalid file type. Only JPG, JPEG, and PNG are allowed.");
        return false;
      }
      if (file.size > maxSize) {
        setImageError("File size exceeds the 5MB limit.");
        return false;
      }
    }

    // Clear error if validation passes
    setImageError('');
    return true;
  };

  const handleEventSubmit = async (e) => {
    e.preventDefault();

    // Validate images before submitting the form
    if (!validateImages(images)) {
      return; // Stop form submission if validation fails
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("time", time);
    formData.append("description", description);
    Array.from(images).forEach((file) => formData.append("images", file));

    try {
      const response = await createEvent(formData);
      setFlashMessage(`Event created successfully: ${response.message}`);

      setTimeout(() => {
        setFlashMessage('');
      }, 3000);
    } catch (error) {
      console.error(error.message);
      setFlashMessage(`Error posting event: ${error.message}`);
      setTimeout(() => {
        setFlashMessage('');
      }, 3000);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">Add New Event</h1>

      {flashMessage && (
        <div className="mb-4 p-2 text-center text-white bg-green-500 rounded-md">
          {flashMessage}
        </div>
      )}

      {/* Display image error message */}
      {imageError && (
        <div className="mb-4 p-2 text-center text-white bg-red-500 rounded-md">
          {imageError}
        </div>
      )}

      <form onSubmit={handleEventSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Event Title</label>
          <input
            type="text"
            placeholder="Event Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Event Time</label>
          <input
            type="datetime-local"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Event Description</label>
          <textarea
            placeholder="Event Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Upload Images</label>
          <input
            type="file"
            multiple
            name="images"
            onChange={(e) => setImages(e.target.files)}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 focus:ring focus:ring-blue-300 focus:outline-none"
        >
          Add Event
        </button>
      </form>
    </div>
  );
};

export default PostEvents;

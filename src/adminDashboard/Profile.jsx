import React, { useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "Admin User",
    email: "admin@example.com",
    role: "Administrator",
  });

  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({ ...profile });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, name: value });
  };

  const handleSave = () => {
    setProfile(formData);
    setEditMode(false);
  };

  return (
    <div className="p-6 bg-white shadow rounded-lg">
      {/* Profile Header */}
      <div className="flex items-center space-x-4 mb-6">
        <img
          src="/path-to-profile-picture.jpg" // Update this to dynamic image URL
          alt="Profile"
          className="w-20 h-20 rounded-full border"
        />
        <div>
          <h2 className="text-xl font-bold">{profile.name}</h2>
          <p className="text-green-900">{profile.email}</p>
          <p className="text-green-900">{profile.role}</p>
        </div>
      </div>

      {/* Edit Profile */}
      {editMode ? (
        <div>
          <label className="block text-sm font-medium text-green-900 mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg mb-4"
          />
          <label className="block text-sm font-medium text-green-900 mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg mb-4"
          />
          <button
            onClick={handleSave}
            className="bg-green-700 hover:bg-green-500 text-white px-4 py-2 rounded-lg cursor-pointer"
          >
            Save
          </button>
          <button
            onClick={() => setEditMode(false)}
            className="ml-2 bg-green-700 text-white px-4 py-2 rounded-lg cursor-pointer"
          >
            Cancel
          </button>
        </div>
      ) : (
        <button
          onClick={() => setEditMode(true)}
          className="bg-green-700 hover:bg-green-500 text-white px-4 py-2 rounded-lg cursor-pointer"
        >
          Edit Profile
        </button>
      )}

      {/* Change Password */}
      <div className="mt-8">
        <h3 className="text-lg font-bold text-green-900 mb-4">Change Password</h3>
        <form>
          <label className="block text-sm font-medium text-green-900 mb-2">
            Current Password
          </label>
          <input
            type="password"
            name="currentPassword"
            className="w-full px-4 py-2 border rounded-lg mb-4"
          />
          <label className="block text-sm font-medium text-green-900 mb-2">
            New Password
          </label>
          <input
            type="password"
            name="newPassword"
            className="w-full px-4 py-2 border rounded-lg mb-4"
          />
          <label className="block text-sm font-medium text-green-900 mb-2">
            Confirm New Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            className="w-full px-4 py-2 border rounded-lg mb-4"
          />
          <button
            type="submit"
            className="bg-green-700 hover:bg-green-500 text-white px-4 py-2 rounded-lg cursor-pointer"
          >
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;

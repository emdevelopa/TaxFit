import React from 'react';

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Settings</h1>

        <div className="max-w-2xl space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Notifications</h2>
            <div className="space-y-3">
              <label className="flex items-center justify-between">
                <span className="text-gray-700">Email Notifications</span>
                <input type="checkbox" defaultChecked className="w-5 h-5 text-primary-500 rounded" />
              </label>
              <label className="flex items-center justify-between">
                <span className="text-gray-700">SMS Notifications</span>
                <input type="checkbox" className="w-5 h-5 text-primary-500 rounded" />
              </label>
              <label className="flex items-center justify-between">
                <span className="text-gray-700">Push Notifications</span>
                <input type="checkbox" defaultChecked className="w-5 h-5 text-primary-500 rounded" />
              </label>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Security</h2>
            <div className="space-y-3">
              <button className="w-full text-left px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                Change Password
              </button>
              <button className="w-full text-left px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                Two-Factor Authentication
              </button>
              <button className="w-full text-left px-4 py-3 border border-red-300 text-red-600 rounded-lg hover:bg-red-50">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
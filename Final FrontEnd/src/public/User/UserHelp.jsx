import React from 'react';
import { Info, User, Clock, Bell, Settings, HelpCircle, Key, BookOpen, Shield } from 'lucide-react';
import { FaTasks, FaQq } from 'react-icons/fa';

const UserHelp = () => {
  return (
    <div className="flex flex-col p-6 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-4xl font-extrabold mb-8 text-gray-800 dark:text-gray-100">Help Center</h1>

      <div className="space-y-8">
        {/* Existing Sections */}

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
          <div className="flex items-center mb-4">
            <Info className="h-6 w-6 text-blue-500 dark:text-blue-300 mr-2" />
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Dashboard Overview</h2>
          </div>
          <p className="text-gray-700 dark:text-gray-300">Your dashboard provides an overview of your tasks and projects. It offers quick access to ongoing tasks, recent activities, and project progress.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
          <div className="flex items-center mb-4">
            <FaTasks className="h-6 w-6 text-green-500 dark:text-green-300 mr-2" />
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">View Tasks</h2>
          </div>
          <p className="text-gray-700 dark:text-gray-300">You can view all your tasks from the task list. Use filters to sort by priority, status, or due date. Click on a task to see more details and track its progress.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
          <div className="flex items-center mb-4">
            <Clock className="h-6 w-6 text-orange-500 dark:text-orange-300 mr-2" />
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Update Tasks</h2>
          </div>
          <p className="text-gray-700 dark:text-gray-300">To update tasks, select a task from your task list. You can modify its status, priority, and due date. Make sure to save changes to keep your task list up to date.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
          <div className="flex items-center mb-4">
            <Bell className="h-6 w-6 text-red-500 dark:text-red-300 mr-2" />
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Notifications and Alerts</h2>
          </div>
          <p className="text-gray-700 dark:text-gray-300">Notifications keep you updated on task changes, deadlines, and other important events. Check notifications regularly to stay informed.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
          <div className="flex items-center mb-4">
            <User className="h-6 w-6 text-indigo-500 dark:text-indigo-300 mr-2" />
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">User Profile Management</h2>
          </div>
          <p className="text-gray-700 dark:text-gray-300">Access and manage your profile by clicking on your name or avatar. Update personal details, change your password, and adjust account settings as needed.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
          <div className="flex items-center mb-4">
            <Settings className="h-6 w-6 text-gray-600 dark:text-gray-400 mr-2" />
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Settings and Preferences</h2>
          </div>
          <p className="text-gray-700 dark:text-gray-300">Customize your experience by adjusting settings such as theme, notifications, and display preferences according to your preferences.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
          <div className="flex items-center mb-4">
            <HelpCircle className="h-6 w-6 text-pink-500 dark:text-pink-300 mr-2" />
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Help and Support</h2>
          </div>
          <p className="text-gray-700 dark:text-gray-300">For assistance, visit our Help Center or contact support. We're here to help with any issues or questions you may have.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
          <div className="flex items-center mb-4">
            <Key className="h-6 w-6 text-yellow-500 dark:text-yellow-300 mr-2" />
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Keyboard Shortcuts</h2>
          </div>
          <p className="text-gray-700 dark:text-gray-300">Leverage keyboard shortcuts to navigate the application more efficiently. This can improve productivity and streamline your workflow.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
          <div className="flex items-center mb-4">
            <FaQq className="h-6 w-6 text-purple-500 dark:text-purple-300 mr-2" />
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">FAQs</h2>
          </div>
          <p className="text-gray-700 dark:text-gray-300">Explore the FAQ section for answers to common questions. This area provides solutions to frequently encountered issues and inquiries.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
          <div className="flex items-center mb-4">
            <BookOpen className="h-6 w-6 text-teal-500 dark:text-teal-300 mr-2" />
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">User Guides and Tutorials</h2>
          </div>
          <p className="text-gray-700 dark:text-gray-300">Access detailed guides and tutorials to get the most out of the application. These resources provide step-by-step instructions and tips.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
          <div className="flex items-center mb-4">
            <Shield className="h-6 w-6 text-gray-700 dark:text-gray-400 mr-2" />
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Security and Privacy</h2>
          </div>
          <p className="text-gray-700 dark:text-gray-300">Learn about our security measures and privacy policies. We prioritize your data protection and ensure a safe experience on our platform.</p>
        </div>
      </div>
    </div>
  );
};

export default UserHelp;

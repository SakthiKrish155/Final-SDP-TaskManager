import React from 'react';
import { Info, Projector, User, Clock, Bell, Settings, Search, HelpCircle, Key, BookOpen, Shield } from 'lucide-react';
import { FaQq, FaTasks } from 'react-icons/fa';

const ManagerHelp = () => {
  return (
    <div className="flex flex-col p-6 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-4xl font-extrabold mb-8 text-gray-800 dark:text-gray-100">Help Center</h1>

      <div className="space-y-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
          <div className="flex items-center mb-4">
            <Info className="h-6 w-6 text-blue-500 dark:text-blue-300 mr-2" />
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Dashboard Overview</h2>
          </div>
          <p className="text-gray-700 dark:text-gray-300">Your dashboard gives you an overview of your tasks and projects. You can quickly access ongoing tasks, recent activity, and overall project progress.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
          <div className="flex items-center mb-4">
            <FaTasks className="h-6 w-6 text-green-500 dark:text-green-300 mr-2" />
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Task Management</h2>
          </div>
          <p className="text-gray-700 dark:text-gray-300">Click on 'Add Task' to create a new task. You can view, edit, and delete tasks as needed. Use filters to sort tasks by status, priority, or due date.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
          <div className="flex items-center mb-4">
            <Projector className="h-6 w-6 text-purple-500 dark:text-purple-300 mr-2" />
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Project Management</h2>
          </div>
          <p className="text-gray-700 dark:text-gray-300">Click on 'New Project' to start a new project. You can track project milestones, manage team members, and review progress on the project dashboard.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
          <div className="flex items-center mb-4">
            <User className="h-6 w-6 text-teal-500 dark:text-teal-300 mr-2" />
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Task Assignment</h2>
          </div>
          <p className="text-gray-700 dark:text-gray-300">To assign a task, select the task from the list and use the 'Assign' button. You can choose team members and set deadlines for the assigned tasks.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
          <div className="flex items-center mb-4">
            <Clock className="h-6 w-6 text-orange-500 dark:text-orange-300 mr-2" />
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Time Tracking</h2>
          </div>
          <p className="text-gray-700 dark:text-gray-300">Use the 'Log Time' feature to record the hours worked on a task. This helps in tracking progress and managing time effectively for each project.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
          <div className="flex items-center mb-4">
            <Bell className="h-6 w-6 text-red-500 dark:text-red-300 mr-2" />
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Notifications and Alerts</h2>
          </div>
          <p className="text-gray-700 dark:text-gray-300">Notifications keep you informed about task updates, deadlines, and other important events. Check your notifications regularly to stay updated.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
          <div className="flex items-center mb-4">
            <User className="h-6 w-6 text-indigo-500 dark:text-indigo-300 mr-2" />
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">User Profile Management</h2>
          </div>
          <p className="text-gray-700 dark:text-gray-300">Access your profile by clicking on your name or avatar. You can update your personal details, change your password, and manage your account settings.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
          <div className="flex items-center mb-4">
            <Settings className="h-6 w-6 text-gray-600 dark:text-gray-400 mr-2" />
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Settings and Preferences</h2>
          </div>
          <p className="text-gray-700 dark:text-gray-300">Customize your application experience by adjusting settings such as theme, notifications, and display preferences according to your needs.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
          <div className="flex items-center mb-4">
            <Search className="h-6 w-6 text-teal-600 dark:text-teal-400 mr-2" />
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Search and Filters</h2>
          </div>
          <p className="text-gray-700 dark:text-gray-300">Use the search bar to quickly locate tasks or projects. Apply filters to refine your search results and find specific items more easily.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
          <div className="flex items-center mb-4">
            <HelpCircle className="h-6 w-6 text-pink-500 dark:text-pink-300 mr-2" />
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Help and Support</h2>
          </div>
          <p className="text-gray-700 dark:text-gray-300">If you need assistance, visit our Help Center or contact support. We are here to help you with any issues or questions you may have.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
          <div className="flex items-center mb-4">
            <Key className="h-6 w-6 text-yellow-500 dark:text-yellow-300 mr-2" />
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Keyboard Shortcuts</h2>
          </div>
          <p className="text-gray-700 dark:text-gray-300">Use keyboard shortcuts to navigate the application more quickly. This can enhance your productivity and streamline your workflow.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
          <div className="flex items-center mb-4">
            <FaQq className="h-6 w-6 text-purple-500 dark:text-purple-300 mr-2" />
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">FAQs</h2>
          </div>
          <p className="text-gray-700 dark:text-gray-300">Check out our FAQ section for answers to common questions. This section covers frequently asked questions and provides solutions to common issues.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
          <div className="flex items-center mb-4">
            <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2" />
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Tutorials and Onboarding</h2>
          </div>
          <p className="text-gray-700 dark:text-gray-300">Follow the onboarding guide to get acquainted with the application's features. Tutorials are available to help you understand how to use various functions.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
          <div className="flex items-center mb-4">
            <Shield className="h-6 w-6 text-green-600 dark:text-green-400 mr-2" />
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Security and Privacy</h2>
          </div>
          <p className="text-gray-700 dark:text-gray-300">Learn about our security measures and how to manage your privacy settings. We ensure that your data is protected and your privacy is respected.</p>
        </div>
      </div>
    </div>
  );
};

export default ManagerHelp;

"use client";
import React, { useState } from 'react';
import { Home, Package, Inbox, FileText, User, Check, X } from 'lucide-react';
import Sidebar from "../../producer/components/common/sidebar";

const ApplicationsPage = () => {
  const [activeTab, setActiveTab] = useState('received');
  const [applications, setApplications] = useState({
    today: [
      { id: 1, name: 'Fresh Foods Co.', role: 'Distributor', color: 'bg-emerald-700', initials: 'FF' },
      { id: 2, name: 'Green Grocer Inc.', role: 'Distributor', color: 'bg-teal-800', initials: 'GG' }
    ],
    yesterday: [
      { id: 3, name: 'Organic Harvest Ltd.', role: 'Distributor', color: 'bg-emerald-800', initials: 'OH' },
      { id: 4, name: 'Local Market Supply', role: 'Distributor', color: 'bg-stone-200', initials: 'LM', textColor: 'text-stone-700' }
    ]
  });

  const handleAccept = (id) => {
    console.log(`Accepted application ${id}`);
  };

  const handleReject = (id) => {
    console.log(`Rejected application ${id}`);
  };

  const ApplicationCard = ({ app }) => (
    <div className="flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors rounded-lg border border-gray-100">
      <div className="flex items-center gap-4">
        <div
          className={`w-14 h-14 rounded-full ${app.color} flex items-center justify-center ${
            app.textColor || 'text-white'
          } font-semibold text-sm`}
        >
          {app.initials}
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 text-base">{app.name}</h3>
          <p className="text-sm text-gray-500 mt-0.5">{app.role}</p>
        </div>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => handleAccept(app.id)}
          className="px-6 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors font-medium text-sm"
        >
          Accept
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
     <Sidebar activeMenu="Products" />

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="max-w-5xl">
          {/* Header */}
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Applications</h1>

          {/* Tabs */}
          <div className="flex gap-8 border-b border-gray-200 mb-8">
            <button
              onClick={() => setActiveTab('received')}
              className={`pb-3 px-1 font-medium transition-colors relative ${
                activeTab === 'received'
                  ? 'text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Received
              {activeTab === 'received' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></div>
              )}
            </button>
            <button
              onClick={() => setActiveTab('sent')}
              className={`pb-3 px-1 font-medium transition-colors relative ${
                activeTab === 'sent'
                  ? 'text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Sent
              {activeTab === 'sent' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></div>
              )}
            </button>
            <button
              onClick={() => setActiveTab('archived')}
              className={`pb-3 px-1 font-medium transition-colors relative ${
                activeTab === 'archived'
                  ? 'text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Archived
              {activeTab === 'archived' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></div>
              )}
            </button>
          </div>

          {/* Applications List */}
          {activeTab === 'received' && (
            <div className="space-y-8">
              {/* Today Section */}
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Today</h2>
                <div className="space-y-3">
                  {applications.today.map((app) => (
                    <ApplicationCard key={app.id} app={app} />
                  ))}
                </div>
              </div>

              {/* Yesterday Section */}
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Yesterday</h2>
                <div className="space-y-3">
                  {applications.yesterday.map((app) => (
                    <ApplicationCard key={app.id} app={app} />
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'sent' && (
            <div className="text-center py-12 text-gray-500">
              <FileText size={48} className="mx-auto mb-4 opacity-30" />
              <p>No sent applications</p>
            </div>
          )}

          {activeTab === 'archived' && (
            <div className="text-center py-12 text-gray-500">
              <FileText size={48} className="mx-auto mb-4 opacity-30" />
              <p>No archived applications</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ApplicationsPage;
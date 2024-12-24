import React from 'react'
import RiverMonitoring from './components/Dashboard/RiverMonitoring'


console.log('App component loaded');  // Add this line

function App() {
  console.log('App component rendered');  // Add this line
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">UK River Monitoring Dashboard</h1>
        <RiverMonitoring />
      </div>
    </div>
  )
}

export default App
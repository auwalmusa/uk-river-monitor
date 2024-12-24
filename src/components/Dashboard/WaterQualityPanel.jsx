import React from 'react';

const WaterQualityPanel = ({ measurements }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
            <h2 className="text-2xl font-bold">Water Quality Parameters</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
                <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold">pH Level</h3>
                    <p className="text-4xl text-purple-600 font-bold mt-2">7.50</p>
                    <p className="text-sm text-gray-600 mt-1">Latest reading</p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold">Temperature</h3>
                    <p className="text-4xl text-red-600 font-bold mt-2">15.2°C</p>
                    <p className="text-sm text-gray-600 mt-1">Latest reading</p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold">Dissolved Oxygen</h3>
                    <p className="text-4xl text-green-600 font-bold mt-2">8.50 mg/L</p>
                    <p className="text-sm text-gray-600 mt-1">Latest reading</p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold">Conductivity</h3>
                    <p className="text-4xl text-blue-600 font-bold mt-2">350 µS/cm</p>
                    <p className="text-sm text-gray-600 mt-1">Latest reading</p>
                </div>
            </div>
        </div>
    );
};

export default WaterQualityPanel;
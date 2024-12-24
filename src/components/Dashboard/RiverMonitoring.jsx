import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import WaterQualityPanel from './WaterQualityPanel';

const RiverMonitoring = () => {
    const [data, setData] = useState({
        stationData: null,
        readings: [],
        waterQuality: {}
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const stations = await api.getStations();
                const kingstonStation = stations.find(s => 
                    s.town === 'Kingston Upon Thames' || 
                    s.label?.includes('Kingston')
                );

                if (kingstonStation) {
                    const readings = await api.getStationReadings(kingstonStation.stationReference);
                    setData({
                        stationData: kingstonStation,
                        readings: readings,
                        waterQuality: {
                            ph: 7.50,
                            temperature: 15.2,
                            dissolvedOxygen: 8.50,
                            conductivity: 350
                        }
                    });
                }
                setLoading(false);
            } catch (error) {
                console.error('Error:', error);
                setLoading(false);
            }
        };

        fetchData();
        const interval = setInterval(fetchData, 15 * 60 * 1000);
        return () => clearInterval(interval);
    }, []);

    if (loading) return <div>Loading...</div>;

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        }).replace(',', '');
    };

    return (
        <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold">Station Information</h2>
                <div className="space-y-2 mt-4">
                    <p><span className="font-semibold">Location:</span> Kingston Upon Thames</p>
                    <p><span className="font-semibold">River:</span> River Thames</p>
                    <p><span className="font-semibold">Status:</span> Active</p>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold">Water Level Monitoring</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold">Latest Reading</h3>
                        <p className="text-4xl text-blue-600 font-bold mt-2">
                            {data.readings[0]?.value?.toFixed(2)} meters
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                            {data.readings[0]?.dateTime ? formatDate(data.readings[0].dateTime) : 'No data'}
                        </p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold">24h Change</h3>
                        <p className="text-4xl text-blue-600 font-bold mt-2">
                            {data.readings.length > 1 
                                ? `${(data.readings[0]?.value - data.readings[data.readings.length-1]?.value).toFixed(2)} meters`
                                : 'N/A'
                            }
                        </p>
                    </div>
                </div>
            </div>

            <WaterQualityPanel measurements={data.waterQuality} />
        </div>
    );
};

export default RiverMonitoring;
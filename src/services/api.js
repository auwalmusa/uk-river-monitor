const BASE_URL_FLOOD = 'https://environment.data.gov.uk/flood-monitoring';
const BASE_URL_QUALITY = 'https://environment.data.gov.uk/water-quality';

const api = {
    // Existing flood monitoring endpoints
    async getStations() {
        try {
            const response = await fetch(`${BASE_URL_FLOOD}/id/stations`);
            const data = await response.json();
            return data.items;
        } catch (error) {
            console.error('Error fetching stations:', error);
            throw error;
        }
    },

    async getStationReadings(stationId) {
        try {
            const response = await fetch(
                `${BASE_URL_FLOOD}/id/stations/${stationId}/readings?_sorted&_limit=2000`
            );
            const data = await response.json();
            return data.items;
        } catch (error) {
            console.error('Error fetching station readings:', error);
            throw error;
        }
    },

    // New water quality endpoints
    async getWaterQualitySamples(samplingPointId) {
        try {
            const response = await fetch(
                `${BASE_URL_QUALITY}/data/sample?samplingPoint=${samplingPointId}&_limit=100`
            );
            const data = await response.json();
            return data.items;
        } catch (error) {
            console.error('Error fetching water quality samples:', error);
            throw error;
        }
    },

    async getWaterQualityMeasurements(samplingPointId) {
        try {
            const response = await fetch(
                `${BASE_URL_QUALITY}/id/sampling-point/${samplingPointId}/measurements?_view=full&_sorted`
            );
            const data = await response.json();
            return data.items;
        } catch (error) {
            console.error('Error fetching water quality measurements:', error);
            throw error;
        }
    }
};

export default api;
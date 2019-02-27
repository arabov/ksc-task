
const convertLogs = (logs) => Object.keys(logs).map((key) => ({ event: logs[key], date: +key }));

const convertData = (data) => Object.keys(data).map((key) => JSON.parse(data[key]));

export default {
    convertLogs,
    convertData
}

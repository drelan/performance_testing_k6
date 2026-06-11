import http from 'k6/http';
import { sleep } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export default function () {
    http.get('https://test.k6.io');
    sleep(1)      //adding sleep to mimic real world scenario for now/temporarily
}

export function handleSummary(data) {
    return {
        "report.html": htmlReport(data),
    }
}
import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
    http.get('https://test.k6.io');
    sleep(1)      //adding sleep to mimic real world scenario for now/temporarily
}

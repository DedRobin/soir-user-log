import { VisitorFormInput } from '../../components/VisitorForm';
import Endpoint from './endpoints';

const BASE_URL = import.meta.env.VITE_SERVER_URL || 'http://127.0.0.1:3000';

export async function sendRequest(
  endpoint: Endpoint,
  method: 'GET' | 'POST',
  formData: { [key: string]: string } | VisitorFormInput
): Promise<Response> {
  const url = BASE_URL + endpoint;
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  const body = JSON.stringify({ ...formData });

  const options: RequestInit = {
    method,
    headers,
    body,
    mode: 'cors',
  };

  const request = new Request(url, options);

  return await fetch(request);
}

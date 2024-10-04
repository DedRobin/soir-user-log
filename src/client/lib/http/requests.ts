import { VisitorFormInput } from '@/client/components/VisitorForm';

export async function sendRequest(
  url: string,
  method: 'GET' | 'POST',
  formData: { [key: string]: string } | VisitorFormInput
): Promise<Response> {
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

const API_URL = 'http://localhost:5000';

type Props<T> = {
    method: 'POST' | 'GET' | 'PUT' | 'DELETE';
    url: string;
    data?: T;
    headers?: HeadersInit;
};
export const apiClient = async <T>({ method, url, data, headers }: Props<T>) => {
    return await fetch(`${API_URL}${url}`, {
        method,
        headers: headers,
        body: JSON.stringify(data),
    })
}
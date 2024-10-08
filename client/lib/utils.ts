const baseUrl = process.env.NEXTAUTH_URL || 'http://localhost:3000';


export async function fetchApi(url: string, options: RequestInit = {}) {
  const res = await fetch(baseUrl + url, {
    credentials: 'include',
    ...options,
    });

  return res;
}
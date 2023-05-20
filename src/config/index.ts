let baseUrl: string;

if (process.env.NODE_ENV === 'production') {
  baseUrl = String(process.env.NEXT_PUBLIC_BASE_URL) || '';
} else {
  baseUrl = 'http://localhost:8000';
}

export { baseUrl };

export async function submitQuote(values) {
  const base = (import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000').replace(/\/$/,'');
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 60000);
  try {
    const response = await fetch(`${base}/api/quotes`, {
      method:'POST', headers:{'Content-Type':'application/json'},
      body:JSON.stringify(values), signal:controller.signal,
    });
    const data = await response.json();
    if (!response.ok || data.success !== true) {
      const error = new Error(data.message || 'We couldn’t confirm your request. Please try again shortly.');
      error.fieldErrors = data.errors || {};
      error.isApiError = true;
      throw error;
    }
    return data;
  } catch (error) {
    if (error.isApiError) throw error;
    throw new Error('We couldn’t confirm whether your request was sent. Please try again shortly or contact us directly.');
  } finally { clearTimeout(timer); }
}

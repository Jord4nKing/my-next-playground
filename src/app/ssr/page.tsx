export default async function SSRPage() {
    // Simulate server-side delay
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    const time = new Date().toISOString();

    console.log('🍺🍺', time)
  
    return (
      <div>
        <h1>Server-Side Rendering (SSR)</h1>
        <p>Rendered on the server at: {time}</p>
      </div>
    );
  }
  
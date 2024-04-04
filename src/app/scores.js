import Script from 'next/script';
import { useEffect, useState } from 'react';

function YourPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Access the global items variable after the script has loaded
    setItems(window.items);
  }, []);

  return (
    <div>
      {items.map((item) => (
        <div key={item}>{item}</div>
      ))}
      <Script src="/weeklyRanking.js" />
    </div>
  );
}

export default YourPage;
import React, { useState } from 'react';
import UrlInput from './components/UrlInput';
import ShortenedUrlDisplay from './components/ShortenedUrlDisplay';

const App: React.FC = () => {
  const [shortenedUrls, setShortenedUrls] = useState<ShortenedUrl[]>([]);

  const handleUrlSubmit = (newUrl: string) => {
    // Assuming you have a function to generate short URLs
    const shortUrl = generateShortUrl(newUrl);

    setShortenedUrls((prevUrls) => [
      ...prevUrls,
      { originalUrl: newUrl, shortUrl },
    ]);
  };

  return (
    <div>
      <h1>URL Shortener</h1>
      <UrlInput onUrlSubmit={handleUrlSubmit} />
      <ShortenedUrlDisplay shortenedUrls={shortenedUrls} />
    </div>
  );
};

export default App;
function generateShortUrl(newUrl: string) {
    throw new Error('Function not implemented.');
}


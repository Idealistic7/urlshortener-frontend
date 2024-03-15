import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


interface ShortenedUrl {
  originalUrl: string;
  shortUrl: string;
}

interface ShortenedUrlDisplayProps {
  shortenedUrls: ShortenedUrl[];
}

const ShortenedUrlDisplay: React.FC<ShortenedUrlDisplayProps> = ({ shortenedUrls }) => {
  return (
    <div>
      <h2>Shortened URLs:</h2>
      <List>
        {shortenedUrls.map((url, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={`Original URL: ${url.originalUrl}`}
              secondary={`Short URL: ${url.shortUrl}`}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ShortenedUrlDisplay;

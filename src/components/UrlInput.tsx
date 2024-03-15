import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios'; // Import Axios
import styled from 'styled-components';

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;

interface UrlInputProps {
  onUrlSubmit: (url: string) => void;
}

const UrlInput: React.FC<UrlInputProps> = ({ onUrlSubmit }) => {
  const [inputUrl, setInputUrl] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputUrl(e.target.value);
  };

  const handleSubmit = async () => {
    if (inputUrl.trim()) {
      try {
        // Make an API call to your backend
        const response = await axios.post('/api/shorten', { originalUrl: inputUrl });
        const shortUrl = response.data.shortUrl;
        onUrlSubmit(shortUrl);
        setInputUrl('');
      } catch (error) {
        console.error('Error generating short URL:', error.message);
      }
    }
  };


  return (
    <div>
      <TextField
        label="Enter a long URL"
        variant="outlined"
        fullWidth
        value={inputUrl}
        onChange={handleInputChange}
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Shorten
      </Button>
    </div>
  );
};

export default UrlInput;

import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Button, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h3" component="h1" gutterBottom sx={{ color: '#ffffff' }}>
            Contact Me
          </Typography>
          <Paper
            elevation={0}
            sx={{
              p: 4,
              background: 'rgba(0, 0, 0, 0.2)',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 8px 32px 0 rgba(0, 184, 148, 0.1)',
              border: '1px solid rgba(0, 184, 148, 0.1)',
              borderRadius: '20px',
            }}
          >
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                margin="normal"
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: '#ffffff',
                    '& fieldset': {
                      borderColor: 'rgba(0, 184, 148, 0.3)',
                    },
                    '&:hover fieldset': {
                      borderColor: '#00b894',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#00b894',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: '#b2bec3',
                    '&.Mui-focused': {
                      color: '#00b894',
                    },
                  },
                }}
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                margin="normal"
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: '#ffffff',
                    '& fieldset': {
                      borderColor: 'rgba(0, 184, 148, 0.3)',
                    },
                    '&:hover fieldset': {
                      borderColor: '#00b894',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#00b894',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: '#b2bec3',
                    '&.Mui-focused': {
                      color: '#00b894',
                    },
                  },
                }}
              />
              <TextField
                fullWidth
                label="Message"
                name="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                margin="normal"
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: '#ffffff',
                    '& fieldset': {
                      borderColor: 'rgba(0, 184, 148, 0.3)',
                    },
                    '&:hover fieldset': {
                      borderColor: '#00b894',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#00b894',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: '#b2bec3',
                    '&.Mui-focused': {
                      color: '#00b894',
                    },
                  },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                sx={{
                  mt: 2,
                  background: '#00b894',
                  '&:hover': {
                    background: '#00a187',
                  },
                }}
              >
                Send Message
              </Button>
            </form>
          </Paper>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Contact; 
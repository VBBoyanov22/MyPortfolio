import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h3" component="h1" gutterBottom sx={{ color: '#ffffff' }}>
            About Me
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  background: 'rgba(0, 0, 0, 0.2)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 8px 32px 0 rgba(0, 184, 148, 0.1)',
                  border: '1px solid rgba(0, 184, 148, 0.1)',
                  borderRadius: '20px',
                }}
              >
                <Typography variant="h5" gutterBottom sx={{ color: '#00b894' }}>
                  My Journey
                </Typography>
                <Typography paragraph sx={{ color: '#b2bec3' }}>
                  [Add your professional journey and experience here]
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  background: 'rgba(0, 0, 0, 0.2)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 8px 32px 0 rgba(0, 184, 148, 0.1)',
                  border: '1px solid rgba(0, 184, 148, 0.1)',
                  borderRadius: '20px',
                }}
              >
                <Typography variant="h5" gutterBottom sx={{ color: '#00b894' }}>
                  Skills
                </Typography>
                <Typography paragraph sx={{ color: '#b2bec3' }}>
                  • React & TypeScript
                </Typography>
                <Typography paragraph sx={{ color: '#b2bec3' }}>
                  • Node.js & Express
                </Typography>
                <Typography paragraph sx={{ color: '#b2bec3' }}>
                  • MongoDB & SQL
                </Typography>
                <Typography paragraph sx={{ color: '#b2bec3' }}>
                  • Git & GitHub
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </motion.div>
      </Box>
    </Container>
  );
};

export default About; 
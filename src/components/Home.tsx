import React from 'react';
import { Box, Typography, Container, Paper, Grid, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from 'react-router-dom';
import pfp from '../assets/pfp.jpg';
import typescriptIcon from '../assets/typescript.png';
import reactIcon from '../assets/react.png';
import nodeIcon from '../assets/node.js.png';
import firebaseIcon from '../assets/firebase.png';
import cIcon from '../assets/c++.png';
import nextJsIcon from '../assets/nextjs.png';
import sqlIcon from '../assets/sql.png';
import tailwindIcon from '../assets/tailwind.png';
import gitIcon from '../assets/git.png';

const skillsData = {
  frontend: [
    {
      name: 'TypeScript',
      icon: <img src={typescriptIcon} alt="TypeScript" style={{ width: '32px', height: '32px', objectFit: 'contain' }} />,
    },
    {
      name: 'React',
      icon: <img src={reactIcon} alt="React" style={{ width: '32px', height: '32px', objectFit: 'contain' }} />,
    },
    {
      name: 'Tailwind',
      icon: <img src={tailwindIcon} alt="Tailwind.css" style={{ width: '32px', height: '32px', objectFit: 'contain' }} />,
    },
  ],
  backend: [
    {
      name: 'Node.js',
      icon: <img src={nodeIcon} alt="Node.js" style={{ width: '32px', height: '32px', objectFit: 'contain' }} />,
    },
    {
      name: 'C/C++',
      icon: <img src={cIcon} alt="C/C++" style={{ width: '32px', height: '32px', objectFit: 'contain' }} />,
    },
    {
      name: 'SQL',
      icon: <img src={sqlIcon} alt="SQL" style={{ width: '32px', height: '32px', objectFit: 'contain' }} />,
    },
  ],
  frameworks: [
    {
      name: 'Next.js',
      icon: <img src={nextJsIcon} alt="Next.js" style={{ width: '32px', height: '32px', objectFit: 'contain' }} />,
    },
    {
      name: 'Firebase',
      icon: <img src={firebaseIcon} alt="Firebase" style={{ width: '32px', height: '32px', objectFit: 'contain' }} />,
    },
    {
      name: 'Git',
      icon: <img src={gitIcon} alt="Git" style={{ width: '32px', height: '32px', objectFit: 'contain' }} />,
    },
  ],
};

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container 
      maxWidth={false} 
      sx={{
        bgcolor: 'rgb(12, 12, 12)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        p: { xs: 2, md: 4 },
        position: 'relative',
      }}
    >
      {/* Top Navigation */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: 3,
          mb: 4,
          pt: 2,
        }}
      >
        <Typography
          sx={{
            color: 'rgba(255, 255, 255, 0.7)',
            cursor: 'pointer',
            fontSize: '0.9rem',
            fontWeight: 500,
            '&:hover': { color: '#00b894' },
          }}
          onClick={() => navigate('/')}
        >
          Home
        </Typography>
        <Typography
          sx={{
            color: 'rgba(255, 255, 255, 0.7)',
            cursor: 'pointer',
            fontSize: '0.9rem',
            fontWeight: 500,
            '&:hover': { color: '#00b894' },
          }}
          onClick={() => navigate('/projects')}
        >
          Projects
        </Typography>
        <Typography
          sx={{
            color: 'rgba(255, 255, 255, 0.7)',
            cursor: 'pointer',
            fontSize: '0.9rem',
            fontWeight: 500,
            '&:hover': { color: '#00b894' },
          }}
          onClick={() => navigate('/posts')}
        >
          Posts
        </Typography>
        <Typography
          sx={{
            color: 'rgba(255, 255, 255, 0.7)',
            cursor: 'pointer',
            fontSize: '0.9rem',
            fontWeight: 500,
            '&:hover': { color: '#00b894' },
          }}
          onClick={() => navigate('/components')}
        >
          Components
        </Typography>
      </Box>

      {/* Main Content */}
      <Box
        sx={{
          maxWidth: '1200px',
          width: '100%',
          mx: 'auto',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
        }}
      >
        {/* Hero Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: { xs: 4, md: 8 },
            mb: 6,
          }}
        >
          {/* Left Side - Text */}
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            <Typography 
              variant="h1" 
              sx={{ 
                color: '#ffffff',
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 700,
                lineHeight: 1.2,
              }}
            >
              Veselin Boyanov
            </Typography>
            <Box sx={{ height: '40px' }}>
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'App builder',
                  2000,
                  'Problem Solver',
                  2000,
                ]}
                wrapper="div"
                speed={50}
                style={{ 
                  fontSize: '1.5rem',
                  color: '#00b894',
                  fontWeight: '500',
                }}
                repeat={Infinity}
                cursor={true}
              />
            </Box>
            <Typography 
              sx={{ 
                color: '#b2bec3',
                fontSize: '1.1rem',
                maxWidth: '600px',
                lineHeight: 1.6,
                mt: 2,
              }}
            >
              I'm a developer located in Burgas, Bulgaria experienced in building full-stack, cross-platform applications. I'm still a student in 10th grade in VSCPI/Burgas.
            </Typography>
            
            {/* Contact and Social Links */}
            <Box sx={{ 
              display: 'flex', 
              gap: 2, 
              mt: 4,
              flexWrap: 'wrap'
            }}>
              <Paper
                component="a"
                href="mailto:vbboyanov22@codingburgas.bg"
                elevation={0}
                sx={{
                  p: 2,
                  px: 4,
                  background: '#00b894',
                  color: '#ffffff',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    opacity: 0.9,
                  },
                }}
              >
                <Typography sx={{ fontWeight: 500 }}>
                  Contact Me
                </Typography>
              </Paper>

              <Paper
                component="a"
                href="https://github.com/vbboyanov22"
                target="_blank"
                elevation={0}
                sx={{
                  p: 2,
                  px: 4,
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    background: 'rgba(255, 255, 255, 0.15)',
                  },
                }}
              >
                <Typography sx={{ color: '#ffffff', fontWeight: 500 }}>
                  GitHub
                </Typography>
              </Paper>

              <Paper
                component="a"
                href="https://www.linkedin.com/in/veselin-boyanov-252073358/"
                target="_blank"
                elevation={0}
                sx={{
                  p: 2,
                  px: 4,
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    background: 'rgba(255, 255, 255, 0.15)',
                  },
                }}
              >
                <Typography sx={{ color: '#ffffff', fontWeight: 500 }}>
                  LinkedIn
                </Typography>
              </Paper>
            </Box>
          </Box>

          {/* Right Side - Image */}
          <Box
            sx={{
              flex: '0 0 auto',
              position: 'relative',
              mr: { xs: 10, md: 10 },
            }}
          >
            <Avatar
              src={pfp}
              alt="Veselin Boyanov"
              sx={{
                width: { xs: 250, md: 300 },
                height: { xs: 250, md: 300 },
                border: '4px solid #00b894',
              }}
            />
          </Box>
        </Box>

        {/* Skills Section */}
        <Box sx={{ mt: 8, mb: 12 }}>
          <Typography
            variant="h2"
            sx={{
              color: '#ffffff',
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
              mb: 4,
            }}
          >
            Skills & Technologies
          </Typography>
          <Grid container spacing={3}>
            {Object.entries(skillsData).map(([category, skills]) => (
              <Grid item xs={12} md={4} key={category}>
                <Typography
                  variant="h6"
                  sx={{
                    color: '#00b894',
                    mb: 2,
                    textTransform: 'capitalize',
                    fontWeight: 600,
                  }}
                >
                  {category}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {skills.map((skill) => (
                    <Paper
                      key={skill.name}
                      elevation={0}
                      sx={{
                        p: 2,
                        background: 'rgba(255, 255, 255, 0.05)',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          background: 'rgba(255, 255, 255, 0.08)',
                        },
                      }}
                    >
                      <Box sx={{ 
                        fontSize: '1.75rem',
                        width: '32px',
                        height: '32px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        {skill.icon}
                      </Box>
                      <Typography sx={{ color: '#ffffff', fontWeight: 500 }}>
                        {skill.name}
                      </Typography>
                    </Paper>
                  ))}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          width: '100%',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          py: 4,
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          bgcolor: 'rgb(12, 12, 12)',
        }}
      >
        <Typography
          sx={{
            color: 'rgba(255, 255, 255, 0.5)',
            fontSize: '0.875rem',
          }}
        >
          © 2025 Veselin Boyanov. All rights reserved.
        </Typography>
        <Typography
          component="a"
          href="mailto:vbboyanov22@codingburgas.bg"
          sx={{
            color: 'rgba(255, 255, 255, 0.5)',
            fontSize: '0.875rem',
            textDecoration: 'none',
            '&:hover': {
              color: '#00b894',
            },
          }}
        >
          vbboyanov22@codingburgas.bg
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;
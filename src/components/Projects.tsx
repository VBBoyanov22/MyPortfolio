import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Chip,
  Paper,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Mongate',
    description: 'A MERN Stack template for web applications with user authentication, profile customization, and other essential features.',
    image: '/images/mongate.png',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    link: 'https://github.com/yourusername/mongate',
  },
  {
    id: 2,
    title: 'Guessr',
    description: 'A fun number guessing game with global leaderboard and user stats. Challenge yourself and compete globally!',
    image: '/images/guessr.png',
    technologies: ['TypeScript', 'React', 'Firebase'],
    link: 'https://github.com/yourusername/guessr',
  },
  {
    id: 3,
    title: 'DevNotes',
    description: 'A blog platform where developers can create, edit, and share posts. It includes rich Markdown support and community features.',
    image: '/images/devnotes.png',
    technologies: ['Next.js', 'TypeScript', 'Tailwind', 'Prisma'],
    link: 'https://github.com/yourusername/devnotes',
  },
  {
    id: 4,
    title: 'Fast Food App',
    description: 'Browse a menu, and add items to your cart.',
    image: '/images/fastfood.png',
    technologies: ['React', 'TypeScript', 'Tailwind'],
    link: 'https://github.com/yourusername/fastfood',
  },
  {
    id: 5,
    title: 'Music Portfolio',
    description: 'A personal music portfolio showcasing the music I compose as a hobby.',
    image: '/images/music.png',
    technologies: ['React', 'Node.js', 'Web Audio API'],
    link: 'https://github.com/yourusername/music-portfolio',
  },
];

const Projects: React.FC = () => {
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
            color: '#00b894',
            cursor: 'pointer',
            fontSize: '0.9rem',
            fontWeight: 500,
          }}
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
        {/* Header */}
        <Box sx={{ mb: 4 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography 
              variant="h1" 
              sx={{ 
                color: '#ffffff',
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 700,
                lineHeight: 1.2,
                mb: 2,
              }}
            >
              Projects
            </Typography>
            <Typography 
              sx={{ 
                color: '#b2bec3',
                fontSize: '1.1rem',
                maxWidth: '600px',
                lineHeight: 1.6,
              }}
            >
              A collection of my projects and applications I've built.
            </Typography>
          </motion.div>
        </Box>

        {/* Projects Grid */}
        <Grid container spacing={3}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={project.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    height: '100%',
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      background: 'rgba(255, 255, 255, 0.07)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                    sx={{
                      objectFit: 'cover',
                      borderTopLeftRadius: '20px',
                      borderTopRightRadius: '20px',
                    }}
                  />
                  <CardContent sx={{ p: 3 }}>
                    <Typography 
                      variant="h5" 
                      component="h2" 
                      sx={{ 
                        color: '#ffffff',
                        fontWeight: 600,
                        mb: 1,
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography 
                      sx={{ 
                        color: '#b2bec3',
                        fontSize: '1rem',
                        mb: 2,
                        lineHeight: 1.6,
                      }}
                    >
                      {project.description}
                    </Typography>
                    <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                      {project.technologies.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          sx={{
                            bgcolor: 'rgba(0, 184, 148, 0.1)',
                            color: '#00b894',
                            borderRadius: '8px',
                            fontSize: '0.85rem',
                            fontWeight: 500,
                            '&:hover': {
                              bgcolor: 'rgba(0, 184, 148, 0.2)',
                            },
                          }}
                        />
                      ))}
                    </Stack>
                  </CardContent>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Projects; 
import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, CardActions, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
}

const projects: Project[] = [
  {
    title: 'Project 1',
    description: 'Description of the first project',
    image: 'https://via.placeholder.com/300x200',
    technologies: ['React', 'TypeScript', 'Node.js'],
    link: '#'
  },
  {
    title: 'Project 2',
    description: 'Description of the second project',
    image: 'https://via.placeholder.com/300x200',
    technologies: ['React', 'MongoDB', 'Express'],
    link: '#'
  },
  // Добавете повече проекти тук
];

const Projects: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h3" component="h1" gutterBottom sx={{ color: '#ffffff' }}>
            My Projects
          </Typography>
          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    background: 'rgba(0, 0, 0, 0.2)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 8px 32px 0 rgba(0, 184, 148, 0.1)',
                    border: '1px solid rgba(0, 184, 148, 0.1)',
                    borderRadius: '20px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                    sx={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="div" sx={{ color: '#ffffff' }}>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" paragraph sx={{ color: '#b2bec3' }}>
                      {project.description}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#b2bec3' }}>
                      Technologies: {project.technologies.join(', ')}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" href={project.link} target="_blank" sx={{ color: '#00b894' }}>
                      View Project
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Projects; 
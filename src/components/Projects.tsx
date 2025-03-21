import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  CardContent,
  CardMedia,
  Stack,
  Chip,
  IconButton,
  LinearProgress,
  Button,
  Modal,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CloseIcon from '@mui/icons-material/Close';

interface Project {
  id: number;
  title: string;
  description: string;
  features: string[];
  images: string[];
  technologies: string[];
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'FitMix',
    description: 'A mobile fitness application that helps users track their workouts, nutrition, and progress.',
    features: [
      'Personalized workout plans based on user goals',
      'Real-time progress tracking and analytics',
      'Nutrition planning and meal suggestions',
      'Exercise library with video demonstrations',
      'Community features for motivation and support',
      'Integration with health devices and apps'
    ],
    images: [
      '/images/login.png',
      '/images/register.png',
      '/images/home.png'
    ],
    technologies: ['TypeScript', 'React', 'FireBase', 'Tailwind', 'Expo'],
    link: '',
  },
];

const Projects: React.FC = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = React.useState<{ [key: number]: number }>({});
  const [isLoading, setIsLoading] = React.useState<{ [key: string]: boolean }>({});
  const [openModal, setOpenModal] = React.useState<number | null>(null);

  const handleImageLoad = (imageId: string) => {
    setIsLoading(prev => ({ ...prev, [imageId]: false }));
  };

  const handleImageError = (imageId: string) => {
    setIsLoading(prev => ({ ...prev, [imageId]: false }));
  };

  const handleNextImage = (projectId: number, imagesLength: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % imagesLength
    }));
    setIsLoading(prev => ({ ...prev, [`${projectId}-${currentImageIndex[projectId] || 0}`]: true }));
  };

  const handlePrevImage = (projectId: number, imagesLength: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + imagesLength) % imagesLength
    }));
    setIsLoading(prev => ({ ...prev, [`${projectId}-${currentImageIndex[projectId] || 0}`]: true }));
  };

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
        <Box sx={{ mb: 6 }}>
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
            <Grid item xs={12} sm={6} md={4} key={project.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    bgcolor: 'rgba(255, 255, 255, 0.03)',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s ease',
                    height: '100%',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      bgcolor: 'rgba(255, 255, 255, 0.05)',
                      boxShadow: '0 8px 40px rgba(0, 0, 0, 0.2)',
                    },
                  }}
                >
                  <Box 
                    sx={{ 
                      position: 'relative',
                      height: '200px',
                      bgcolor: '#000',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentImageIndex[project.id] || 0}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                      >
                        {isLoading[`${project.id}-${currentImageIndex[project.id] || 0}`] && (
                          <Box sx={{ position: 'absolute', width: '100%', top: 0 }}>
                            <LinearProgress sx={{ bgcolor: 'rgba(0, 184, 148, 0.1)', '& .MuiLinearProgress-bar': { bgcolor: '#00b894' } }} />
                          </Box>
                        )}
                        <CardMedia
                          component="img"
                          image={project.images[currentImageIndex[project.id] || 0]}
                          alt={project.title}
                          onLoad={() => handleImageLoad(`${project.id}-${currentImageIndex[project.id] || 0}`)}
                          onError={() => handleImageError(`${project.id}-${currentImageIndex[project.id] || 0}`)}
                          sx={{
                            height: '180px',
                            width: 'auto',
                            objectFit: 'contain',
                            filter: 'drop-shadow(0 4px 20px rgba(0, 0, 0, 0.2))',
                          }}
                        />
                      </motion.div>
                    </AnimatePresence>
                    {project.images.length > 1 && (
                      <>
                        <IconButton
                          size="small"
                          onClick={() => handlePrevImage(project.id, project.images.length)}
                          sx={{
                            position: 'absolute',
                            left: 8,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            bgcolor: 'rgba(0, 184, 148, 0.1)',
                            color: '#00b894',
                            backdropFilter: 'blur(4px)',
                            '&:hover': {
                              bgcolor: 'rgba(0, 184, 148, 0.2)',
                            },
                          }}
                        >
                          <ArrowBackIosNewIcon sx={{ fontSize: '1rem' }} />
                        </IconButton>
                        <IconButton
                          size="small"
                          onClick={() => handleNextImage(project.id, project.images.length)}
                          sx={{
                            position: 'absolute',
                            right: 8,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            bgcolor: 'rgba(0, 184, 148, 0.1)',
                            color: '#00b894',
                            backdropFilter: 'blur(4px)',
                            '&:hover': {
                              bgcolor: 'rgba(0, 184, 148, 0.2)',
                            },
                          }}
                        >
                          <ArrowForwardIosIcon sx={{ fontSize: '1rem' }} />
                        </IconButton>
                      </>
                    )}
                  </Box>
                  <CardContent sx={{ p: 2 }}>
                    <Typography 
                      variant="h6" 
                      component="h2" 
                      sx={{ 
                        color: '#ffffff',
                        fontWeight: 600,
                        mb: 1,
                        fontSize: '1.1rem',
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography 
                      sx={{ 
                        color: '#b2bec3',
                        fontSize: '0.9rem',
                        mb: 2,
                        lineHeight: 1.5,
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {project.description}
                    </Typography>
                    <Stack 
                      direction="row" 
                      spacing={0.5} 
                      sx={{
                        flexWrap: 'nowrap',
                        overflowX: 'auto',
                        mb: 2,
                        pb: 1,
                        '&::-webkit-scrollbar': {
                          height: '4px',
                        },
                        '&::-webkit-scrollbar-track': {
                          background: 'rgba(255, 255, 255, 0.1)',
                          borderRadius: '2px',
                        },
                        '&::-webkit-scrollbar-thumb': {
                          background: '#00b894',
                          borderRadius: '2px',
                        },
                      }}
                    >
                      {project.technologies.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{
                            bgcolor: 'rgba(0, 184, 148, 0.1)',
                            color: '#00b894',
                            borderRadius: '8px',
                            fontSize: '0.75rem',
                            fontWeight: 500,
                            backdropFilter: 'blur(4px)',
                            whiteSpace: 'nowrap',
                            height: '24px',
                            '&:hover': {
                              bgcolor: 'rgba(0, 184, 148, 0.2)',
                            },
                          }}
                        />
                      ))}
                    </Stack>
                    <Button
                      variant="outlined"
                      fullWidth
                      onClick={() => setOpenModal(project.id)}
                      sx={{
                        color: '#00b894',
                        borderColor: 'rgba(0, 184, 148, 0.5)',
                        fontSize: '0.85rem',
                        py: 0.5,
                        '&:hover': {
                          borderColor: '#00b894',
                          bgcolor: 'rgba(0, 184, 148, 0.1)',
                        },
                      }}
                    >
                      View More
                    </Button>
                  </CardContent>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Project Details Modal */}
      {projects.map((project) => (
        <Modal
          key={project.id}
          open={openModal === project.id}
          onClose={() => setOpenModal(null)}
          aria-labelledby={`modal-${project.id}-title`}
          aria-describedby={`modal-${project.id}-description`}
        >
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: { xs: '90%', sm: '500px' },
              bgcolor: 'rgba(18, 18, 18, 0.95)',
              borderRadius: '16px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
              p: 3,
              outline: 'none',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 2 }}>
              <Typography
                variant="h6"
                component="h2"
                sx={{
                  color: '#ffffff',
                  fontWeight: 600,
                }}
              >
                {project.title} Features
              </Typography>
              <IconButton
                onClick={() => setOpenModal(null)}
                sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
              >
                <CloseIcon />
              </IconButton>
            </Stack>
            <List sx={{ py: 0 }}>
              {project.features.map((feature, index) => (
                <ListItem key={index} sx={{ px: 0, py: 1 }}>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <CheckCircleOutlineIcon sx={{ color: '#00b894' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={feature}
                    sx={{
                      '& .MuiListItemText-primary': {
                        color: '#b2bec3',
                        fontSize: '0.95rem',
                      },
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Modal>
      ))}
    </Container>
  );
};

export default Projects; 
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Box,
  Button,
  Stack,
} from '@mui/material';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import StatusChip from './StatusChip';

export default function AnimalCard({ animal }) {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 4,
        overflow: 'hidden',
        border: '1px solid rgba(27, 67, 50, 0.08)',
        boxShadow: '0 4px 18px rgba(27, 67, 50, 0.05)',
        transition: 'all 0.25s ease-in-out',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 12px 28px rgba(27, 67, 50, 0.12)',
          '& .animal-card-media': {
            transform: 'scale(1.05)',
          },
        },
      }}
    >
      <Box sx={{ position: 'relative', overflow: 'hidden', paddingTop: '65%' }}>
        <CardMedia
          component="img"
          image={animal.image}
          alt={animal.name}
          className="animal-card-media"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.4s ease',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 12,
            right: 12,
            zIndex: 1,
          }}
        >
          <StatusChip status={animal.adoptionStatus} />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '40%',
            background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 100%)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: 10,
            left: 14,
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
          }}
        >
          <Typography variant="caption" sx={{ fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', opacity: 0.9 }}>
            {animal.type} • {animal.weight}
          </Typography>
        </Box>
      </Box>

      <CardContent sx={{ flexGrow: 1, p: 2.5, pb: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
          <Typography variant="h5" sx={{ fontWeight: 700, color: 'text.primary' }}>
            {animal.name}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              color: animal.gender === 'Male' ? '#0284C7' : '#E11D48',
              backgroundColor: animal.gender === 'Male' ? '#E0F2FE' : '#FFE4E6',
              px: 1,
              py: 0.25,
              borderRadius: 2,
            }}
          >
            {animal.gender === 'Male' ? (
              <MaleIcon sx={{ fontSize: 18 }} />
            ) : (
              <FemaleIcon sx={{ fontSize: 18 }} />
            )}
            <Typography variant="caption" sx={{ fontWeight: 700, ml: 0.2 }}>
              {animal.gender}
            </Typography>
          </Box>
        </Box>

        <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600, mb: 1.5 }}>
          {animal.breed}
        </Typography>

        <Stack direction="row" spacing={1} sx={{ mb: 1.5 }}>
          <Box
            sx={{
              fontSize: '0.75rem',
              fontWeight: 600,
              color: '#2D6A4F',
              backgroundColor: '#E8F5E9',
              px: 1.2,
              py: 0.4,
              borderRadius: 1.5,
            }}
          >
            Age: {animal.age}
          </Box>
          <Box
            sx={{
              fontSize: '0.75rem',
              fontWeight: 600,
              color: '#52665B',
              backgroundColor: '#F3EFE6',
              px: 1.2,
              py: 0.4,
              borderRadius: 1.5,
            }}
          >
            {animal.healthCondition}
          </Box>
        </Stack>

        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary',
            fontSize: '0.85rem',
            lineHeight: 1.5,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {animal.description}
        </Typography>
      </CardContent>

      <CardActions sx={{ p: 2, pt: 1, gap: 1 }}>
        <Button
          fullWidth
          variant="contained"
          size="small"
          startIcon={<VisibilityOutlinedIcon />}
          onClick={() => navigate(`/animals/${animal.id}`)}
          sx={{
            py: 0.8,
            fontSize: '0.82rem',
            fontWeight: 600,
          }}
        >
          View Details
        </Button>
        <Button
          variant="outlined"
          size="small"
          startIcon={<EditOutlinedIcon />}
          onClick={() => navigate(`/animals/edit/${animal.id}`)}
          sx={{
            py: 0.8,
            px: 1.8,
            minWidth: 'auto',
            color: '#2D6A4F',
            borderColor: 'rgba(45, 106, 79, 0.3)',
            fontSize: '0.82rem',
            fontWeight: 600,
            '&:hover': {
              borderColor: '#2D6A4F',
              backgroundColor: 'rgba(45, 106, 79, 0.05)',
            },
          }}
        >
          Edit
        </Button>
      </CardActions>
    </Card>
  );
}

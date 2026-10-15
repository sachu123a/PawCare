import React from 'react';
import { Card, CardContent, Box, Typography, Avatar } from '@mui/material';

export default function DashboardCard({
  title,
  value,
  change,
  icon: Icon,
  gradient = 'linear-gradient(135deg, #1B4332 0%, #2D6A4F 100%)',
  iconBg = 'rgba(27, 67, 50, 0.1)',
  iconColor = '#1B4332',
  isHighlight = false,
}) {
  return (
    <Card
      sx={{
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
        background: isHighlight ? gradient : '#FFFFFF',
        color: isHighlight ? '#FFFFFF' : 'inherit',
        border: isHighlight ? 'none' : '1px solid rgba(27, 67, 50, 0.08)',
        boxShadow: isHighlight
          ? '0 10px 25px -5px rgba(27, 67, 50, 0.3)'
          : '0 4px 20px rgba(27, 67, 50, 0.04)',
        transition: 'all 0.25s ease-in-out',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: isHighlight
            ? '0 16px 32px -4px rgba(27, 67, 50, 0.4)'
            : '0 12px 28px rgba(27, 67, 50, 0.09)',
        },
      }}
    >
      <CardContent sx={{ p: 3, '&:last-child': { pb: 3 } }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
          <Box>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 600,
                color: isHighlight ? 'rgba(255, 255, 255, 0.85)' : 'text.secondary',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                fontSize: '0.75rem',
                mb: 0.5,
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                color: isHighlight ? '#FFFFFF' : 'text.primary',
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
              }}
            >
              {value}
            </Typography>
          </Box>
          <Avatar
            variant="rounded"
            sx={{
              width: 52,
              height: 52,
              borderRadius: 3,
              backgroundColor: isHighlight ? 'rgba(255, 255, 255, 0.2)' : iconBg,
              color: isHighlight ? '#FFFFFF' : iconColor,
              backdropFilter: isHighlight ? 'blur(4px)' : 'none',
            }}
          >
            {Icon && <Icon sx={{ fontSize: 28 }} />}
          </Avatar>
        </Box>

        {change && (
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
            <Typography
              variant="caption"
              sx={{
                fontWeight: 600,
                color: isHighlight ? 'rgba(255, 255, 255, 0.9)' : 'primary.light',
                backgroundColor: isHighlight ? 'rgba(255, 255, 255, 0.15)' : 'rgba(45, 106, 79, 0.08)',
                px: 1.2,
                py: 0.4,
                borderRadius: 2,
                display: 'inline-block',
                fontSize: '0.75rem',
              }}
            >
              {change}
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}

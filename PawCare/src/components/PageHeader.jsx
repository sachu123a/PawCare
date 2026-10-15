import React from 'react';
import { Box, Typography, Stack } from '@mui/material';

export default function PageHeader({
  title,
  subtitle,
  action,
  badge,
}) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: 'space-between',
        alignItems: { xs: 'flex-start', sm: 'center' },
        gap: 2,
        mb: 3.5,
      }}
    >
      <Box>
        <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 0.5 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              color: 'text.primary',
              letterSpacing: '-0.02em',
            }}
          >
            {title}
          </Typography>
          {badge && (
            <Box
              sx={{
                fontSize: '0.75rem',
                fontWeight: 700,
                color: '#1B4332',
                backgroundColor: '#D8F3DC',
                px: 1.2,
                py: 0.3,
                borderRadius: 2,
              }}
            >
              {badge}
            </Box>
          )}
        </Stack>
        {subtitle && (
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              maxWidth: 720,
              fontSize: '0.95rem',
            }}
          >
            {subtitle}
          </Typography>
        )}
      </Box>

      {action && <Box sx={{ flexShrink: 0 }}>{action}</Box>}
    </Box>
  );
}

import React from 'react';
import { Chip } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';

const statusConfig = {
  Available: {
    bg: '#E8F5E9',
    color: '#1B5E20',
    border: '#A5D6A7',
  },
  Pending: {
    bg: '#FFF8E1',
    color: '#B78103',
    border: '#FFE082',
  },
  'Pending Review': {
    bg: '#FFF8E1',
    color: '#B78103',
    border: '#FFE082',
  },
  Adopted: {
    bg: '#E0F2FE',
    color: '#0369A1',
    border: '#BAE6FD',
  },
  Approved: {
    bg: '#E8F5E9',
    color: '#1B5E20',
    border: '#81C784',
  },
  Verified: {
    bg: '#E8F5E9',
    color: '#1B5E20',
    border: '#81C784',
  },
  Completed: {
    bg: '#EDE9FE',
    color: '#6D28D9',
    border: '#DDD6FE',
  },
  Rejected: {
    bg: '#FEE2E2',
    color: '#B91C1C',
    border: '#FCA5A5',
  },
  Inactive: {
    bg: '#F1F5F9',
    color: '#64748B',
    border: '#CBD5E1',
  },
  Healthy: {
    bg: '#E8F5E9',
    color: '#1B5E20',
    border: '#A5D6A7',
  },
  'Under Treatment': {
    bg: '#FFF1F2',
    color: '#BE123C',
    border: '#FECDD3',
  },
  'Fully Vaccinated': {
    bg: '#E8F5E9',
    color: '#1B5E20',
    border: '#A5D6A7',
  },
  'Partially Vaccinated': {
    bg: '#FFF8E1',
    color: '#B78103',
    border: '#FFE082',
  },
};

export default function StatusChip({ status, size = 'small' }) {
  const config = statusConfig[status] || {
    bg: '#F1F5F9',
    color: '#475569',
    border: '#E2E8F0',
  };

  return (
    <Chip
      size={size}
      icon={
        <CircleIcon
          sx={{
            fontSize: '8px !important',
            color: `${config.color} !important`,
            ml: 0.5,
          }}
        />
      }
      label={status}
      sx={{
        backgroundColor: config.bg,
        color: config.color,
        border: `1px solid ${config.border}`,
        fontWeight: 600,
        fontSize: size === 'small' ? '0.75rem' : '0.85rem',
        height: size === 'small' ? 24 : 30,
        px: 0.5,
      }}
    />
  );
}

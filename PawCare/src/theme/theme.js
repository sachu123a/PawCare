import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1B4332',      // Deep forest green
      light: '#2D6A4F',     // Rich pine green
      dark: '#081C15',      // Midnight forest
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#40916C',      // Vibrant leaf green
      light: '#52B788',     // Fresh mint green
      dark: '#2D6A4F',
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#2D6A4F',
      light: '#D8F3DC',
      contrastText: '#081C15',
    },
    warning: {
      main: '#D48B28',      // Warm amber
      light: '#FEF3C7',
      contrastText: '#78350F',
    },
    info: {
      main: '#2A9D8F',      // Teal cyan
      light: '#E0F2FE',
      contrastText: '#0369A1',
    },
    error: {
      main: '#E76F51',      // Coral terracotta
      light: '#FEE2E2',
      contrastText: '#991B1B',
    },
    background: {
      default: '#F8F6F1',   // Soft warm cream
      paper: '#FFFFFF',
    },
    text: {
      primary: '#182820',   // Deep slate emerald
      secondary: '#596E63', // Soft sage gray
    },
    divider: 'rgba(27, 67, 50, 0.08)',
  },
  typography: {
    fontFamily: '"Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    h1: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.015em',
    },
    h3: {
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    h4: {
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    subtitle1: {
      fontWeight: 500,
    },
    subtitle2: {
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      borderRadius: 10,
    },
  },
  shape: {
    borderRadius: 14,
  },
  shadows: [
    'none',
    '0 1px 3px rgba(27, 67, 50, 0.05), 0 1px 2px rgba(27, 67, 50, 0.03)',
    '0 4px 6px -1px rgba(27, 67, 50, 0.07), 0 2px 4px -1px rgba(27, 67, 50, 0.04)',
    '0 10px 15px -3px rgba(27, 67, 50, 0.07), 0 4px 6px -2px rgba(27, 67, 50, 0.03)',
    '0 14px 28px -5px rgba(27, 67, 50, 0.09), 0 8px 10px -6px rgba(27, 67, 50, 0.04)',
    '0 20px 25px -5px rgba(27, 67, 50, 0.1), 0 10px 10px -5px rgba(27, 67, 50, 0.04)',
    ...Array(19).fill('0 10px 25px -3px rgba(27, 67, 50, 0.08)'),
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          padding: '8px 20px',
          boxShadow: 'none',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(27, 67, 50, 0.2)',
            transform: 'translateY(-1px)',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #1B4332 0%, #2D6A4F 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #143527 0%, #245741 100%)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          border: '1px solid rgba(27, 67, 50, 0.07)',
          boxShadow: '0 4px 20px rgba(27, 67, 50, 0.04)',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: 16,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          borderRadius: 8,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          backgroundColor: '#F3EFE6',
          color: '#1B4332',
          fontWeight: 700,
          fontSize: '0.85rem',
          letterSpacing: '0.02em',
          textTransform: 'uppercase',
          borderBottom: '1px solid rgba(27, 67, 50, 0.1)',
        },
        body: {
          fontSize: '0.9rem',
          borderBottom: '1px solid rgba(27, 67, 50, 0.06)',
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          transition: 'background-color 0.15s ease',
          '&:hover': {
            backgroundColor: 'rgba(45, 106, 79, 0.03)',
          },
        },
      },
    },
  },
});

export default theme;

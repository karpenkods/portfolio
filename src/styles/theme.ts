'use client'
import { Montserrat } from 'next/font/google'
import { createTheme } from '@mui/material/styles'

const montserrat = Montserrat({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin', 'cyrillic'],
  display: 'swap'
})

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1440
    }
  },
  typography: {
    fontFamily: montserrat.style.fontFamily,
    h1: {
      fontSize: 48,
      color: 'silver'
    },
    h2: {
      fontSize: 24,
      color: 'silver'
    }
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          '::-webkit-scrollbar': {
            display: 'none'
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          maxWidth: 'fit-content',
          textTransform: 'none',
          padding: '16px',
          fontSize: '16px',
          borderRadius: '100%',
          backgroundColor: 'transparent',
          backdropFilter: 'blur(5px)',
          boxShadow: 'rgba(0, 0, 0, 0.56) 0px 20px 60px 3px',
          color: 'silver',
          zIndex: 99,
          transition: 'all 0.4s ease-in-out',
          '@media (min-width:600px)': {
            fontSize: '18px',
            '&:hover': {
              boxShadow: 'rgba(192, 192, 192, 0.56) 0px 20px 50px 4px'
            }
          }
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          maxWidth: 'fit-content',
          padding: '8px',
          backgroundColor: 'transparent',
          backdropFilter: 'blur(5px)',
          border: '2px solid rgba(192, 192, 192, 0.56)',
          color: 'silver',
          transition: 'all 0.4s ease-in-out',
          zIndex: 99,
          '@media (min-width:600px)': {
            padding: '12px',
            '&:hover': {
              backgroundColor: 'transparent',
              boxShadow: 'rgba(192, 192, 192, 0.56) 0px 20px 50px 4px'
            }
          }
        }
      }
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: 'transparent',
          backdropFilter: 'blur(5px)',
          boxShadow: 'none',
          borderRadius: '12px',
          border: '1px solid rgba(192, 192, 192, 0.2)',
          '@media (max-width:600px)': {
            margin: '16px'
          }
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& label.Mui-focused': {
            color: 'silver'
          },
          '& .MuiInputLabel-root': {
            fontSize: 18,
            color: 'silver'
          },
          '& .MuiOutlinedInput-root': {
            width: '500px',
            padding: '8px',
            fontWeight: 400,
            fontSize: 18,
            color: 'silver',
            backdropFilter: 'blur(5px)',
            '@media (max-width: 600px)': {
              width: '100%'
            },
            '& fieldset': {
              borderRadius: '12px',
              borderColor: 'silver'
            },
            '&:hover fieldset': {
              transition: '0.3s',
              borderColor: 'silver',
              boxShadow: 'rgba(192, 192, 192, 0.56) 0px 5px 30px 3px'
            },
            '&.Mui-focused fieldset': {
              borderColor: 'silver',
              boxShadow: 'rgba(192, 192, 192, 0.56) 0px 5px 30px 3px'
            }
          }
        }
      }
    }
  }
})

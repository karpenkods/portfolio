'use client'
import { FC } from 'react'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

import { Container, Stack, Typography } from '@mui/material'

import { useListProjects, useMediaQueryDown } from '@/common'
import { Project } from './Project'
import { Link } from '@/navigation'

export const Projects: FC = () => {
  const t = useTranslations('projects')
  const Projects = useListProjects()
  const MotionStack = motion(Stack)
  const isMobile = useMediaQueryDown('md')

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5
      }
    }
  }

  return (
    <Container
      maxWidth="xl"
      sx={{
        mb: '40px',
        mt: isMobile ? '154px' : '112px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '32px',
        overflow: 'auto'
      }}
    >
      <Stack
        position="fixed"
        top={0}
        left={0}
        width="100%"
        height={isMobile ? '212px' : '96px'}
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h1" fontWeight={500} color={isMobile ? 'goldenrod' : 'silver'}>
          {t('title')}
        </Typography>
      </Stack>
      <MotionStack
        variants={container}
        initial="hidden"
        animate="show"
        gap="24px"
        alignItems="center"
      >
        {Projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </MotionStack>
      <Link
        href="https://github.com/karpenkods?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none' }}
      >
        <Typography
          fontSize={20}
          fontWeight={500}
          sx={{
            color: 'greenyellow',
            cursor: 'pointer',
            transition: '0.3s',
            '&:hover': {
              transform: 'scale(1.05)'
            }
          }}
        >
          {t('git')}
        </Typography>
      </Link>
    </Container>
  )
}

'use client'
import { FC, Fragment, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import 'dayjs/locale/ru'
import 'dayjs/locale/en'

import { IconButton, Stack, Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import BallotIcon from '@mui/icons-material/Ballot'
import CloseIcon from '@mui/icons-material/Close'

import { IProject, useMediaQueryDown } from '@/common'
import Image from 'next/image'
import { Link } from '@/navigation'

interface IProjectProps {
  project: IProject
}

export const Project: FC<IProjectProps> = ({ project }) => {
  const [show, setShow] = useState(false)
  const [animate, setAnimate] = useState(true)
  const t = useTranslations('projects')
  const MotionStack = motion(Stack as any)

  const isMobile = useMediaQueryDown('md')
  const isMobileSmall = useMediaQueryDown('sm')

  const item = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 }
  }

  useEffect(() => {
    setTimeout(() => setAnimate(false), 2000)
  }, [])

  const link = () => {
    return (
      <Stack direction="row" gap={isMobileSmall ? '32px' : '16px'} alignItems="center">
        {project.link === 'not-link' ? (
          <Typography color="green">{t('official')}</Typography>
        ) : project.link ? (
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <Typography
              sx={{
                color: 'goldenrod',
                cursor: 'pointer',
                transition: '0.3s',
                '&:hover': {
                  transform: 'scale(1.05)'
                }
              }}
            >
              {t('goto')}
            </Typography>
          </Link>
        ) : null}
        {project.code && (
          <Link
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <Typography
              fontSize={15}
              sx={{
                color: 'gold',
                cursor: 'pointer',
                transition: '0.3s',
                '&:hover': {
                  transform: 'scale(1.05)'
                }
              }}
            >
              {t('code')}
            </Typography>
          </Link>
        )}
      </Stack>
    )
  }

  return (
    <MotionStack
      variants={animate ? item : undefined}
      gap="8px"
      width={isMobile ? '100%' : '800px'}
      padding="8px 16px"
      border="2px solid rgba(192, 192, 192, 0.56)"
      borderRadius="8px"
      sx={{ backdropFilter: 'blur(8px)' }}
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack direction="row" alignItems="center" gap="16px">
          {project.code ? (
            <GitHubIcon style={{ fill: 'silver', width: 24, height: 24 }} />
          ) : project.icon ? (
            <Image
              alt=""
              src={project.icon}
              width={project.bigImage ? 64 : 24}
              height={project.bigImage ? 36 : 24}
            />
          ) : null}
          <Typography variant="h2">{project.title}</Typography>
        </Stack>
        {isMobileSmall ? (
          <IconButton
            onClick={() => setShow((prev) => !prev)}
            sx={{ padding: 0, border: 'none', zIndex: 999 }}
          >
            {show ? (
              <CloseIcon sx={{ width: '28px', height: '28px' }} />
            ) : (
              <BallotIcon sx={{ width: '28px', height: '28px' }} />
            )}
          </IconButton>
        ) : (
          <>
            {!project.code ? (
              <Typography color="green" fontSize={14}>
                {t('com')}
              </Typography>
            ) : (
              <Typography color="green" fontSize={14}>
                {t('education')}
              </Typography>
            )}
            {link()}
          </>
        )}
      </Stack>
      {isMobileSmall && show && link()}
      <Typography fontSize={14} color="silver">
        {project.description}
      </Typography>
    </MotionStack>
  )
}

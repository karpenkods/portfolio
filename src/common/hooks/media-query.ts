'use client'
import { Breakpoint, Theme, useMediaQuery } from '@mui/material'

export function useMediaQueryUp(breakpoint: number | Breakpoint) {
  return useMediaQuery((theme: Theme) => theme.breakpoints.up(breakpoint))
}

export function useMediaQueryDown(breakpoint: number | Breakpoint) {
  return useMediaQuery((theme: Theme) => theme.breakpoints.down(breakpoint))
}

export function useMediaQueryBetween(
  breakpointStart: number | Breakpoint,
  breakpointFinish: number | Breakpoint
) {
  return useMediaQuery((theme: Theme) =>
    theme.breakpoints.between(breakpointStart, breakpointFinish)
  )
}

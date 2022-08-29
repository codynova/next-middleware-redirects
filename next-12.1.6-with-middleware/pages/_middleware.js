import { NextResponse } from 'next/server'

export function middleware(request) {
  console.log('Next 12.1.6 middleware hit')
  return NextResponse.next()
}
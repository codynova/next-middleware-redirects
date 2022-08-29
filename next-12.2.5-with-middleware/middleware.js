import { NextResponse } from 'next/server'

export function middleware(request) {
  console.log('Next 12.2.5 middleware hit')
  return NextResponse.next()
}
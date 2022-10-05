import { NextResponse } from 'next/server'

export function middleware(request) {
  console.log('Next 12.3.1 middleware hit')
  return NextResponse.next()
}
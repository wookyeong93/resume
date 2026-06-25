import type { Metadata } from 'next'
import './globals.css'
import TopBar from './TopBar'

export const metadata: Metadata = {
    title: '권우경 · Portfolio',
    description: '6년차 풀스택 개발자 포트폴리오',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="ko">
            <body>
                <div className="mx-auto max-w-[1040px] px-4 pt-6">
                    <TopBar />
                </div>
                <div className="flex-1">
                    {children}
                </div>
                <footer className="mx-auto mt-20 max-w-[1040px] px-4 py-8">
                    <p className="text-center font-mono text-[11.5px] text-ink-footer">
                        © 2026 권우경 · Built with Next.js
                    </p>
                </footer>
            </body>
        </html>
    )
}
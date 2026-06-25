'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function TopBar() {
    const pathname = usePathname()
    // 현재 경로가 /work로 시작하면 Portfolio 탭 활성
    const isWork = pathname.startsWith('/work')

    return (
        <div className="mb-[22px] flex flex-wrap items-center justify-between gap-3 px-1">
            {/* 좌측 브랜드 */}
            <Link href="/" className="flex items-center gap-2 font-mono text-sm font-semibold">
                <span
                    className="h-2 w-2 rounded-full bg-accent"
                    style={{ boxShadow: '0 0 10px #3b82f6' }}
                />
                권우경
            </Link>

            {/* 우측 탭 + GitHub */}
            <div className="flex items-center gap-2">
                <div className="flex gap-1 rounded-[11px] border border-line bg-card p-1">
                    <Link
                        href="/"
                        className={`rounded-lg px-4 py-1.5 font-mono text-[13px] transition ${
                            !isWork ? 'bg-accent text-white' : 'text-ink-mute hover:text-ink'
                        }`}
                    >
                        Resume
                    </Link>
                    <Link
                        href="/work"
                        className={`rounded-lg px-4 py-1.5 font-mono text-[13px] transition ${
                            isWork ? 'bg-accent text-white' : 'text-ink-mute hover:text-ink'
                        }`}
                    >
                        Portfolio
                    </Link>
                </div>
                <a
                    href="https://github.com/wookyeong93"
                    target="_blank"
                    className="inline-flex items-center gap-1.5 rounded-[9px] border px-3.5 py-2 font-mono text-[12.5px] text-ink transition hover:border-[#3f3f47]"
                    style={{ borderColor: '#2a2a30' }}
                >
                    GitHub ↗
                </a>
            </div>
        </div>
    )
}
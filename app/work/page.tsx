import Link from 'next/link'
import { projects } from '@/data/projects'

export default function WorkPage() {
    return (
        <main className="mx-auto max-w-[1040px] px-4 py-6">
            <div className="mb-9">
                <p className="font-mono text-[13px] tracking-wide text-accent">// Selected Work</p>
                <h1 className="mt-3.5 font-display text-[34px] font-semibold leading-tight tracking-[-2px] md:text-[52px]">
                    포트폴리오
                </h1>
                <p className="mt-4 max-w-[56ch] text-base font-light leading-relaxed text-ink-mute">
                    참여한 SI 프로젝트들입니다. 카드를 누르면 프로젝트 상세 화면으로 이동합니다.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {projects.map((p) => (
                    <Link
                        key={p.slug}
                        href={`/work/${p.slug}`}
                        className="flex flex-col overflow-hidden rounded-2xl border border-line bg-sheet transition hover:-translate-y-1 hover:border-line-hover"
                    >
                        <div
                            className="relative flex h-40 items-end overflow-hidden p-[18px]"
                            style={{ background: p.gradient }}
                        >
                            <div
                                className="pointer-events-none absolute inset-0"
                                style={{
                                    backgroundImage:
                                        'linear-gradient(rgba(255,255,255,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.06) 1px,transparent 1px)',
                                    backgroundSize: '26px 26px',
                                }}
                            />
                            <span className="relative rounded-md bg-black/35 px-2.5 py-1.5 font-mono text-[13px] text-white/95 backdrop-blur-sm">
                                {p.field}
                            </span>
                        </div>
                        <div className="flex flex-1 flex-col p-6">
                            <div className="flex items-baseline justify-between gap-3">
                                <h3 className="font-display text-xl font-semibold tracking-[-0.5px]">
                                    {p.name}
                                </h3>
                                <span className="font-mono text-xs text-ink-faint">{p.year}</span>
                            </div>
                            <p className="mt-1.5 font-mono text-[13px] text-accent-soft">{p.tagline}</p>
                            <p className="mt-2.5 flex-1 text-[14.5px] font-light leading-relaxed text-ink-mute">
                                {p.summary}
                            </p>
                            <div className="mt-4 flex items-center justify-between">
                                <div className="flex flex-wrap gap-1.5">
                                    {p.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-md border border-line-tag px-2.5 py-1 font-mono text-[11px] text-ink-mute"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <span className="whitespace-nowrap font-mono text-[12.5px] text-accent">
                                    자세히 →
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    )
}

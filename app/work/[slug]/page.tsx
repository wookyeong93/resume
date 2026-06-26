import Link from 'next/link'
import { notFound } from 'next/navigation'
import { projects } from '@/data/projects'

export async function generateStaticParams() {
    return projects.map((p) => ({ slug: p.slug }))
}

export default async function ProjectDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const idx = projects.findIndex((p) => p.slug === slug)
    if (idx === -1) notFound()

    const project = projects[idx]
    const prev = projects[(idx - 1 + projects.length) % projects.length]
    const next = projects[(idx + 1) % projects.length]

    return (
        <main className="mx-auto max-w-[1040px] px-4 py-6">
            <Link
                href="/work"
                className="mb-6 inline-flex items-center gap-2 rounded-[9px] border border-line bg-card px-4 py-2.5 font-mono text-[12.5px] text-ink-mute transition hover:border-border-strong-hover hover:text-ink"
            >
                ← 포트폴리오 목록
            </Link>

            <div className="overflow-hidden rounded-[18px] border border-line bg-sheet shadow-sheet">
                {/* ===== 히어로 ===== */}
                <div
                    className="relative flex h-[180px] items-end overflow-hidden p-8 md:h-[240px] md:p-12"
                    style={{ background: project.gradient }}
                >
                    <div
                        className="pointer-events-none absolute inset-0"
                        style={{
                            backgroundImage:
                                'linear-gradient(rgba(255,255,255,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.07) 1px,transparent 1px)',
                            backgroundSize: '30px 30px',
                        }}
                    />
                    <div className="relative">
                        <span className="rounded-md bg-black/30 px-2.5 py-1.5 font-mono text-[12.5px] text-white/85 backdrop-blur-sm">
                            {project.field} · {project.year}
                        </span>
                        <h1 className="mt-4 font-display text-[34px] font-semibold leading-tight tracking-[-1.8px] text-white md:text-[52px]">
                            {project.name}
                        </h1>
                        <p className="mt-2 font-mono text-sm text-white/90">{project.tagline}</p>
                    </div>
                </div>

                {/* ===== 메타 스트립 ===== */}
                <div className="grid grid-cols-2 border-b border-line-soft md:grid-cols-4">
                    {project.meta.map((m) => (
                        <div key={m.k} className="border-r border-line-soft px-6 py-5">
                            <div className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">
                                {m.k}
                            </div>
                            <div className="mt-1.5 text-[14.5px] text-ink">{m.v}</div>
                        </div>
                    ))}
                </div>

                {/* ===== 본문 ===== */}
                <div className="p-8 md:p-10">
                    <section>
                        <h2 className="mb-3.5 font-display text-xl font-semibold tracking-[-0.5px]">
                            프로젝트 개요
                        </h2>
                        <p className="max-w-[68ch] text-[15.5px] font-light leading-loose text-ink-soft">
                            {project.overview}
                        </p>
                    </section>

                    <section className="mt-10">
                        <h2 className="mb-4.5 font-display text-xl font-semibold tracking-[-0.5px]">
                            주요 기여
                        </h2>
                        <div className="flex flex-col gap-3.5">
                            {project.contributions.map((c) => (
                                <div key={c.n} className="flex items-start gap-3.5">
                                    <span className="shrink-0 pt-0.5 font-mono text-[13px] text-accent">
                                        {c.n}
                                    </span>
                                    <p className="text-[15px] font-light leading-relaxed text-ink-soft">
                                        {c.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="mt-10">
                        <h2 className="mb-4.5 font-display text-xl font-semibold tracking-[-0.5px]">
                            성과
                        </h2>
                        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                            {project.results.map((r) => (
                                <div
                                    key={r.label}
                                    className="rounded-xl border border-line bg-card p-[22px]"
                                >
                                    <div className="font-display text-[30px] font-semibold tracking-[-1px] text-accent">
                                        {r.value}
                                    </div>
                                    <div className="mt-2 text-[13.5px] font-light leading-snug text-ink-mute">
                                        {r.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="mt-10">
                        <h2 className="mb-4 font-display text-xl font-semibold tracking-[-0.5px]">
                            사용 기술
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-lg border border-line-tag bg-card px-3.5 py-1.5 font-mono text-[12.5px] text-ink-soft"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </section>

                    {/* ===== 이전 / 다음 ===== */}
                    <div className="mt-12 flex justify-between gap-3 border-t border-line-soft pt-7">
                        <Link
                            href={`/work/${prev.slug}`}
                            className="inline-flex items-center gap-2 rounded-[10px] border border-line bg-card px-4.5 py-3 text-[13.5px] text-ink transition hover:border-border-strong-hover"
                        >
                            ← {prev.name}
                        </Link>
                        <Link
                            href={`/work/${next.slug}`}
                            className="inline-flex items-center gap-2 rounded-[10px] border border-line bg-card px-4.5 py-3 text-[13.5px] text-ink transition hover:border-border-strong-hover"
                        >
                            {next.name} →
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}

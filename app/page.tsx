import { profile } from '@/data/profile'
import { experiences, education, certs, sideProject } from '@/data/experience'

export default function Home() {
    return (
        <main className="mx-auto max-w-[1040px] px-4 py-6">
            <div className="overflow-hidden rounded-[18px] border border-line bg-sheet shadow-sheet">
                {/* ===== 헤더 ===== */}
                <div className="relative overflow-hidden border-b border-line-soft p-8 md:p-12">
                    {/* 격자 패턴 배경 */}
                    <div
                        className="pointer-events-none absolute inset-0"
                        style={{
                            backgroundImage:
                                'linear-gradient(var(--color-grid-line) 1px,transparent 1px),linear-gradient(90deg,var(--color-grid-line) 1px,transparent 1px)',
                            backgroundSize: '36px 36px',
                            maskImage:
                                'radial-gradient(ellipse 70% 120% at 85% 0%,#000 10%,transparent 70%)',
                            WebkitMaskImage:
                                'radial-gradient(ellipse 70% 120% at 85% 0%,#000 10%,transparent 70%)',
                        }}
                    />
                    <div className="relative flex flex-wrap items-start justify-between gap-7">
                        {/* 좌측: 상태 + 이름 + 직함 + 요약 */}
                        <div className="min-w-[260px] flex-1">
                            <div
                                className="mb-5 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-xs text-accent-soft"
                                style={{ borderColor: 'var(--color-accent-border)', background: 'var(--color-accent-bg)' }}
                            >
                                <span
                                    className="h-1.5 w-1.5 rounded-full"
                                    style={{ background: '#22c55e', boxShadow: '0 0 8px #22c55e' }}
                                />
                                {profile.status}
                            </div>
                            <h1 className="font-display text-[34px] font-semibold leading-none tracking-[-2px] md:text-[52px]">
                                {profile.name}
                            </h1>
                            <p className="mt-3.5 font-mono text-[15px] text-accent">{profile.title}</p>
                            <p className="mt-4 max-w-[52ch] text-base font-light leading-relaxed text-ink-mute">
                                {profile.summary}
                            </p>
                        </div>

                        {/* 우측: 연락처 카드 */}
                        <div className="flex w-full min-w-[200px] flex-col gap-2 md:w-auto">
                            {profile.contacts.map((c) => (
                                <a
                                    key={c.label}
                                    href={c.href}
                                    target="_blank"
                                    className="flex items-center justify-between gap-3.5 rounded-[9px] border border-line bg-card px-3.5 py-2.5 transition hover:border-line-hover"
                                >
                                    <span className="font-mono text-[11px] text-ink-faint">{c.label}</span>
                                    <span className="text-[13px] text-ink">{c.value}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* 통계 */}
                    <div className="relative mt-8 flex flex-wrap gap-9">
                        {profile.heroStats.map((s) => (
                            <div key={s.label}>
                                <div className="font-display text-[28px] font-semibold tracking-[-1px]">
                                    {s.value}
                                </div>
                                <div className="mt-0.5 font-mono text-[11.5px] text-ink-faint">
                                    {s.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ===== 본문: 스킬 사이드바 + 메인 ===== */}
                <div className="grid grid-cols-1 md:grid-cols-[268px_1fr]">
                    {/* 스킬 사이드바 */}
                    <aside className="border-b border-line p-8 md:border-b-0 md:border-r">
                        <p className="mb-[18px] font-mono text-[11px] uppercase tracking-wider text-ink-faint">
                            기술 스택
                        </p>
                        <div className="flex flex-col gap-[22px]">
                            {profile.skills.map((g) => (
                                <div key={g.label}>
                                    <div className="mb-2.5 flex items-center gap-2">
                                        <span
                                            className="h-1.5 w-1.5 bg-accent"
                                            style={{ borderRadius: '1px', transform: 'rotate(45deg)' }}
                                        />
                                        <span className="font-mono text-xs text-ink">{g.label}</span>
                                    </div>
                                    <div className="flex flex-wrap gap-1.5">
                                        {g.items.map((t) => (
                                            <span
                                                key={t}
                                                className="rounded-[7px] border border-line-tag bg-card px-2.5 py-[5px] text-[12.5px] text-ink-soft"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <p className="mt-2.5 text-xs font-light leading-relaxed text-ink-faint">
                                        {g.note}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </aside>

                    {/* 메인 (경력 등 — 다음 단계에서 추가) */}
                    <main className="p-8 md:p-10">
                      {/* ===== 경력 ===== */}
                      <section>
                          <p className="mb-1.5 font-mono text-[11px] uppercase tracking-wider text-ink-faint">
                              경력
                          </p>
                          <h2 className="mb-6 font-display text-2xl font-semibold tracking-[-0.8px]">
                              Experience
                          </h2>
                          <div className="relative border-l border-line pl-[22px]">
                              {experiences.map((job) => (
                                  <div key={job.company} className="relative pb-8">
                                      {/* 타임라인 점 */}
                                      <span className="absolute -left-[27px] top-1.5 h-[9px] w-[9px] rounded-full border-2 border-accent bg-sheet" />
                                      {/* 회사 + 기간 */}
                                      <div className="flex flex-wrap items-baseline justify-between gap-3.5">
                                          <h3 className="font-display text-[19px] font-semibold tracking-[-0.3px]">
                                              {job.company}
                                          </h3>
                                          <span className="whitespace-nowrap font-mono text-xs text-ink-faint">
                                              {job.period}
                                          </span>
                                      </div>
                                      {/* 역할 · 팀 · 형태 · 위치 */}
                                      <div className="mt-1.5 flex flex-wrap items-center gap-2.5">
                                          <span className="font-mono text-[13px] text-accent">{job.role}</span>
                                          {job.team && (
                                              <>
                                                  <span className="text-[12.5px] text-dot">·</span>
                                                  <span className="text-[12.5px] text-ink-mute">{job.team}</span>
                                              </>
                                          )}
                                          <span className="rounded-md border border-line-tag bg-card px-2.5 py-[3px] font-mono text-[11px] text-ink-mute">
                                              {job.type}
                                          </span>
                                          <span className="font-mono text-[11px] text-ink-faint">{job.location}</span>
                                      </div>
                                      {/* 회사 설명 */}
                                      <p className="mt-2.5 text-[14.5px] font-light leading-relaxed text-ink-mute">
                                          {job.desc}
                                      </p>
                                      {/* 수행 프로젝트 */}
                                      <div className="mt-4 flex flex-col gap-2">
                                          <p className="font-mono text-[10.5px] uppercase tracking-wider text-ink-faint">
                                              수행 프로젝트
                                          </p>
                                          {job.projects.map((pr) => (
                                              <div
                                                  key={pr.name}
                                                  className="rounded-[10px] border border-line bg-card px-[15px] py-[13px]"
                                              >
                                                  <div className="flex flex-wrap items-baseline justify-between gap-2.5">
                                                      <span className="text-sm font-medium text-ink">{pr.name}</span>
                                                      <span className="whitespace-nowrap font-mono text-[10.5px] text-ink-faint">
                                                          {pr.period}
                                                      </span>
                                                  </div>
                                                  <div className="mt-2 flex items-baseline gap-2">
                                                      <span
                                                          className="whitespace-nowrap rounded-[5px] border px-[7px] py-0.5 font-mono text-[10.5px] text-accent-soft"
                                                          style={{ borderColor: 'var(--color-accent-border)', background: 'var(--color-accent-bg)' }}
                                                      >
                                                          {pr.role}
                                                      </span>
                                                      <span className="text-[13px] font-light leading-snug text-ink-mute">
                                                          {pr.desc}
                                                      </span>
                                                  </div>
                                                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                                                      {pr.stack.map((s) => (
                                                          <span
                                                              key={s}
                                                              className="rounded-[5px] border border-line-tag px-2 py-[3px] font-mono text-[10.5px] text-ink-mute"
                                                          >
                                                              {s}
                                                          </span>
                                                      ))}
                                                  </div>
                                              </div>
                                          ))}
                                      </div>
                                  </div>
                              ))}
                          </div>
                      </section>

                      {/* ===== 학력 ===== */}
                      <section className="mt-10 border-t border-line-soft pt-8">
                          <p className="mb-1.5 font-mono text-[11px] uppercase tracking-wider text-ink-faint">
                              학력 · 교육
                          </p>
                          <h2 className="mb-5 font-display text-2xl font-semibold tracking-[-0.8px]">
                              Education
                          </h2>
                          <div className="flex flex-col gap-3">
                              {education.map((e) => (
                                  <div
                                      key={e.school}
                                      className="grid grid-cols-[130px_1fr] items-baseline gap-[18px]"
                                  >
                                      <span className="whitespace-nowrap font-mono text-xs text-ink-faint">
                                          {e.period}
                                      </span>
                                      <div>
                                          <div className="text-[15.5px] font-medium text-ink">
                                              {e.school}
                                              {e.degree && (
                                                  <span className="font-normal text-accent"> · {e.degree}</span>
                                              )}
                                          </div>
                                          <div className="mt-0.5 text-[13px] font-light text-ink-mute">
                                              {e.major}
                                              {e.status && ` · ${e.status}`}
                                              {e.gpa && ` · ${e.gpa}`}
                                          </div>
                                      </div>
                                  </div>
                              ))}
                          </div>
                      </section>

                      {/* ===== 자격증 ===== */}
                      <section className="mt-10 border-t border-line-soft pt-8">
                          <p className="mb-1.5 font-mono text-[11px] uppercase tracking-wider text-ink-faint">
                              자격증
                          </p>
                          <h2 className="mb-5 font-display text-2xl font-semibold tracking-[-0.8px]">
                              Certifications
                          </h2>
                          <div className="flex flex-col gap-2.5">
                              {certs.map((c) => (
                                  <div
                                      key={c.name}
                                      className="flex items-center justify-between gap-3.5 rounded-[11px] border border-line bg-card px-4 py-3.5"
                                  >
                                      <div className="flex flex-wrap items-baseline gap-3">
                                          <span className="text-[15px] font-medium text-ink">{c.name}</span>
                                          <span className="text-[12.5px] font-light text-ink-mute">{c.issuer}</span>
                                      </div>
                                      <span className="whitespace-nowrap font-mono text-xs text-accent-soft">
                                          {c.year}
                                      </span>
                                  </div>
                              ))}
                          </div>
                      </section>

                      {/* ===== 토이 프로젝트 ===== */}
                      <section className="mt-10 border-t border-line-soft pt-8">
                          <p className="mb-1.5 font-mono text-[11px] uppercase tracking-wider text-ink-faint">
                              토이 프로젝트
                          </p>
                          <h2 className="mb-5 font-display text-2xl font-semibold tracking-[-0.8px]">
                              Side Projects
                          </h2>
                          <div className="flex flex-col gap-3">
                              {sideProject.map((t) => (
                                  <div
                                      key={t.name}
                                      className="rounded-xl border border-line bg-card px-5 py-[18px]"
                                  >
                                      <div className="flex flex-wrap items-baseline justify-between gap-3">
                                          <h3 className="font-display text-[17px] font-semibold tracking-[-0.3px]">
                                              {t.name}
                                          </h3>
                                          <a
                                              href={t.link}
                                              target="_blank"
                                              className="font-mono text-[11.5px] text-ink-faint hover:text-accent-soft"
                                          >
                                              {t.link}
                                          </a>
                                      </div>
                                      <p className="mt-2 text-sm font-light leading-relaxed text-ink-mute">
                                          {t.desc}
                                      </p>
                                      <div className="mt-3 flex flex-wrap gap-1.5">
                                          {t.stack.map((s) => (
                                              <span
                                                  key={s}
                                                  className="rounded-md border border-line-tag px-2 py-1 font-mono text-[11px] text-ink-mute"
                                              >
                                                  {s}
                                              </span>
                                          ))}
                                      </div>
                                  </div>
                              ))}
                          </div>
                      </section>
                  </main>
                </div>
            </div>
        </main>
    )
}
export default async function ProjectDetail(
    { params,} : {
        params: Promise<{ slug: string }>
    }) {
        const { slug } = await params
        return (
            <main className="p-10">
            <h1 className="font-display text-4xl text-ink">프로젝트 상세</h1>
            <p className="font-mono text-accent mt-2">slug: {slug}</p>
            </main>
        )
    }
import { SectionTitle } from '@/components/section-title'
import clsx from 'clsx'
import { ArrowLeft, Plus } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
    return (
        <main
            className={clsx(
                "relative h-screen flex flex-col justify-center",
                "before:absolute before:pointer-events-none before:-z-1 before:left-1/2 before:w-full before:inset-y-0 before:max-w-7xl before:border-x before:border-dashed before:border-border before:-translate-x-1/2",
                "after:absolute after:pointer-events-none after:-z-1 after:border-x after:inset-y-0 after:w-full after:max-w-6xl after:-translate-x-1/2 after:left-1/2 after:border-border",
            )}
        >
            <SectionTitle title="There's nothing here..." />
            <div className='py-24 flex flex-col items-start justify-center'>
                <div className='mx-auto'>
                    <h1 className='text-4xl font-bold mb-4'>404</h1>
                    <h2 className='text-2xl font-bold mb-2'>Not Found!</h2>
                    <p className='text-muted-foreground'>Couldn't find it?... Don't worry, we've all felt lost sometimes.</p>
                    <Link href="/"
                        className='relative border py-8 w-full mt-4 flex items-center gap-1 justify-center group text-foreground/80 hover:text-foreground hover:bg-accent/20 transition-all duration-300'>
                        <ArrowLeft className='w-0 group-hover:w-10 transition-all duration-300 size-5' />
                        Return Home
                        <Plus className="absolute -top-3 -left-3 text-neutral-600" />
                        <Plus className="absolute -bottom-3 -right-3 text-neutral-600" />
                    </Link>
                </div>
            </div>
            <SectionTitle title="" />
        </main>
    )
}
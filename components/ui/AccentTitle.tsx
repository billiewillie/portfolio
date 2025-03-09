import {Sparkle} from 'lucide-react'

type AccentTitleProps = {
    title: string
}

export default function AccentTitle({title}: AccentTitleProps) {
    return (
        <div className={'flex flex-col'}>
            <div className="flex w-fit items-center gap-2 text-accent">
                <Sparkle size={18}/>
                <span
                    className="shimmer word-spacing font-clashDisplay text-sm uppercase leading-none text-highlight-primary">
				{title}
			</span>
            </div>
        </div>
    )
}
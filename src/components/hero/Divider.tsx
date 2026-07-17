interface DividerProps {
    text?: string;
}

export default function Divider({
    text,
}: DividerProps) {
    return (
        <div className="my-10 flex items-center gap-4">

            <div className="h-px flex-1 bg-zinc-800" />

            {text && (
                <span className="text-xs uppercase tracking-widest text-zinc-500">
                    {text}
                </span>
            )}

            <div className="h-px flex-1 bg-zinc-800" />

        </div>
    );
}
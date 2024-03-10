
export default function ErrorIcon({ size }: { size: { width: number, height: number } }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size.width} height={size.height} fill="none"><circle cx="12" cy="12" r="10" stroke="red" stroke-width="2" /><path stroke="red" stroke-width="2" d="m8 8 8 8M8 16l8-8" /></svg>
    )
}

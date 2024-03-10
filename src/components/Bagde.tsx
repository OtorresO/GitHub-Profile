
export default function Bagde({ value,label}: { value: (string | number),label:string }) {
    return (
        <div className="p-[14px] bg-primary  flex gap-3 rounded-xl w-fit"><span className="text-[#4A5567]">{label}</span><span>|</span><span>{value}</span></div>
    )


}

export default function Input({ label, teaxtarea, ...props }) {
    const classes = "w-full p-1 border-p-2 rounded-md border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
    return (
        <p className="flex flex-col gap-1 my-4">
            <label className="text-sm font-bold uppercase text-stone-500">{label}</label>
            {teaxtarea ?
                <textarea className={classes} {...props} />
                :
                <input className={classes} {...props} />}
        </p>
    )
}
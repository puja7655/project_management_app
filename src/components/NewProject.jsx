import Input from "./Input"
import { useRef } from "react"
import Model from '../components/Model'

export default function NewProject({ onAdd, onCancel }) {
    const model = useRef()
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value

        if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === '') {
            model.current.open()
            return
        }
        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate

        })
    }
    return (
        <>
            <Model ref={model} buttonCaption="okey">
                <h2 className="text-xl font-bold text-stone-500 my-4">Inavalid Input</h2>
                <p className="text-stone-700 mb-4">oops...looks like you forgot to enter a value</p>
                <p className="text-stone-700 mb-4">please make sure you provide a valid value to every input field </p>
            </Model>
            <div className="w-[36rem] mt-16">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <button
                        className="text-stone-800 hover:text-stone-950"
                        onClick={onCancel}>
                        Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        className="px-4 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950 ">Save</button>
                </menu>
                <div>
                    <Input type="text " ref={title} label="Title"></Input>
                    <Input ref={description} label="Description" teaxtarea></Input>
                    <Input type="date" ref={dueDate} label="Due Date"></Input>
                </div>
            </div>
        </>
    )
}
import { createPortal } from "react-dom"
import { forwardRef, useImperativeHandle, useRef } from 'react'
import Button from '../components/Button'

const Model = forwardRef(function Model({ children, buttonCaption }, ref) {
    const dialog = useRef()
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal()
            }
        }
    })
    return createPortal(
        <dialog className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md" ref={dialog}>{children}
            <form method="dialog" className="mt-2 px-2 text-right">
                <Button >{buttonCaption}</Button>
            </form>
        </dialog>,
        document.getElementById('modal-root'))
})

export default Model
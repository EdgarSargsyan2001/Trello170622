
import './Modal.css'

function Modal(){

    return(
        <div className="modal">
            <form>
                <input type='text' placeholder='title' />
                <input type='text' placeholder='de' />
                <button>Add</button>
            </form>
        </div>
    )

}



export default Modal
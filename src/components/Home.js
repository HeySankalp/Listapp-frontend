import { useRef, useState, useContext } from 'react';
import noteContext from "../context/notes/noteContext"
import Addnote from './Addnote';
import Note from './Note';

const Home = (props) => {
  const { showAlert } = props
  const context = useContext(noteContext);
  const { editNote } = context;


  const [enote, seteNote] = useState({ id: "", etitle: "", edescription: "" })

  const updateNote = (currentNote,) => {
    const currentUser = localStorage.getItem('loggedInUser');
    if (currentUser !== currentNote.user) {
      props.showAlert("danger", "Sorry!, You are not the owner of this note");
    } else {
      ref.current.click();
      seteNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description });
    }
  }

  const ref = useRef(null)

  const handleClick = (e) => {
    e.preventDefault();
    editNote(enote.etitle, enote.edescription, enote.id);
    ref.current.click();
    props.showAlert("primary", "Note updated successfully");


  }



  const onChange = (e) => {
    seteNote({ ...enote, [e.target.name]: e.target.value })
  }

  return (
    <div>
      <div style={{ color: '#686868' }} className='d-flex justify-content-center my-5'>
        <h1 style={{ fontSize: '2.5rem' }}><span className="badge bg-secondary">Welcome to NoteList</span></h1>
      </div>
      <Addnote showAlert={showAlert} />
      <hr />


      <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>


      <div className="modal fade py-3 px-3" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">



              <form className=" my-3">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Title</label>
                  <input  type="text" className="form-control clear" id="etitle" aria-describedby="emailHelp" name="etitle" value={enote.etitle} onChange={onChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label" >Description</label>
                  <input minLength={5} required type="text" className="form-control clear" id="edescription" name="edescription" value={enote.edescription} onChange={onChange} />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
              <button disabled={ enote.edescription.length < 5} type="button" className="btn btn-secondary" onClick={handleClick}>Update Note</button>
            </div>
          </div>
        </div>
      </div>

      <Note updateNote={updateNote} showAlert={showAlert} />
    </div>
  )
};

export default Home;

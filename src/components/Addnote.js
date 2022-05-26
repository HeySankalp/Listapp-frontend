import React, { useContext, useState} from 'react';
import noteContext from "../context/notes/noteContext"

const Addnote = (props) => {
    
    const context = useContext(noteContext);
    const {addNote} = context;

    const [note, setNote] = useState({title:"", description:""})

     
    const onChange = (e)=>{
      setNote({...note, [e.target.name]:e.target.value})
    }
    
    const handleSubmit = (e)=>{
      e.preventDefault();
    addNote(note.title, note.description)
    props.showAlert("primary","Note added successfully");
    let blankIt1 = document.querySelector("#exampleInputEmail1");
    let blankIt2 = document.querySelector("#exampleInputPassword1");
    setNote({title:"", description:""});
    blankIt1.value = "";
    blankIt2.value = "";

    }

 return <>
    <div className="container my-4">
        <h2>Add<span style={{ color: '#f17126' }}>Your</span>Note</h2>

        <form className=" my-3">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input placeholder='Enter your title (Optional)' required type="text" className="form-control clear" id="exampleInputEmail1" aria-describedby="emailHelp" name="title" onChange={onChange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label" >Description </label>
            <input placeholder='Enter your description (Minimum 5 Char.)' minLength={5} required type="text" className="form-control clear" id="exampleInputPassword1" name="description"onChange={onChange}/>
          </div>
          <button disabled={note.description.length<5} type="submit" className="btn btn-secondary" onClick={handleSubmit}>Add note</button>
        </form>
      </div>
  </>;
};

export default Addnote;

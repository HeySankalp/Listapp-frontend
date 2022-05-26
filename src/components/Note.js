import React, { useContext, useEffect } from 'react';
import noteContext from "../context/notes/noteContext"
import Noteitem from './Noteitem';
import { useNavigate } from 'react-router-dom';

const Note = (props) => {

    const navigate = useNavigate();
    const context = useContext(noteContext);
    const { notes, getNotes } = context;
    const { updateNote,showAlert } = props;

    useEffect(() => {
        if(localStorage.getItem('token')){
            getNotes();
        }
        else{
            navigate('/login');
        }
        // eslint-disable-next-line
    }, [])

    return <div className="row my-4">
        <h2>The<span style={{color:'#f17126'}}>Notes</span>List</h2>
       
            <strong style={{height:'10vh'}} className="container">
           { notes.length===0 && 'Oops! We have no notes to display'}
           </strong>
            {notes.map((note) => {
                return <Noteitem updateNote={updateNote} showAlert={showAlert} note={note} key={note._id} />
            })
        }
    </div>;
};


export default Note;

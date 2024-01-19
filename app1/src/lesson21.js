import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
function Post(props) {
    // create state variables 
    let [like,setLike] = useState(0);
    //create function 
    let updateLike = function()
    {
        setLike(like + 1);
    }

    return (<div className='col-lg-4'>
        <div className='card'>
            <img className='card-img-top' src={props.photo} />
            <div className='card-body'>
                <h3>{props.title}</h3>
                <p>The moonlight danced on the tranquil lake, casting ethereal reflections. Whispers of the wind carried tales of forgotten dreams, awakening the night's silent symphony.</p>
            </div>
            <div className='card-footer d-flex justify-content-between'>
                <span className='h3'>{like}</span>
                <img onClick={() => updateLike()} className='img-fluid' src='like.png' />
            </div>
        </div>
    </div>);
}
function SocialMedia() {
    return (<div className='container'>
        <div className='row'>
            <div className='col-12'>
                <h1>useState in Reactjs</h1>
            </div>
        </div>
        <div className='row mt-3'>
            <Post title='My first post' photo='https://picsum.photos/300?random=1' />
            <Post title='My second post' photo='https://picsum.photos/300?random=2' />
            <Post title='My third post' photo='https://picsum.photos/300?random=3'/>

        </div>
    </div>);
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SocialMedia />);
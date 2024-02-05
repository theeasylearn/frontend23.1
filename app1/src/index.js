import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
function Post(props) {
    let {id,title,body} = props;
    return (<div className="col-lg-4">
        <div className="card shadow">
            <div className="card-header">
                <h6>{id}) {title}</h6>
            </div>
            <div className="card-body">
               {body}
            </div>
        </div>
    </div>)
}
function Page() {
    useEffect(() => {
        //call api
        
    });
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>Api calling</h1>
                </div>
            </div>
            <div className="row mt-1">
                <Post id='1' title='post title' body='its post body' />
                <Post id='2' title='another post title' body='its post body' />
            </div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Page />);

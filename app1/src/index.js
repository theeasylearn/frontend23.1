import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
function Post(props) {
    let { userId,id, title, body } = props;
    return (<tr>
        <td>{id}</td>
        <td>{userId}</td>
        <td>{title}</td>
        <td>{body}</td>
    </tr>)
}
function Page() {
    //create state list (empty)
    var [data, setData] = useState([])
    useEffect(() => {
        if (data.length == 0) {
            //call api
            var apiAddress = "https://jsonplaceholder.typicode.com/posts";
            fetch(apiAddress)
                .then((response) => response.json())
                .then((result) => {
                    console.log(result);
                    setData(result);
                })
                .catch((error) => console.log(error));
        }
    });
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>Api calling</h1>
                </div>
            </div>
            <div className="row mt-1">
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>UserId</th>
                            <th>title</th>
                            <th>body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => <Post id={item.id} title={item.title} body={item.body} userId={item.userId} />)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Page />);

import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";

function ViewPost(props) {
    const location = useLocation();
    const {post} = location.state;
    const navigate = useNavigate();
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-10 mx-auto">
                    <h4 className="mt-4 mb-4">{post.title}</h4>
                    <p>{post.content}</p>
                    <button className="btn btn-secondary mt-2" onClick={() => navigate("/posts")}>
                        Back to Posts
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ViewPost;
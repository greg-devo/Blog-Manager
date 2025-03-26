import React, {useEffect, useState} from 'react';
import {Navigate, useNavigate} from "react-router-dom";

function BlogList(props) {
    const navigate = useNavigate();
    const url = "http://localhost:3000/posts";
    const [posts, setPosts] = useState([]);
    const [numPosts, setNumPosts] = useState(5);
    const getPreparedPosts = () => {
        return posts.slice().reverse().slice(0, numPosts);
    }
    useEffect(() => {
        refreshPosts();
    }, [])
    const handleDelete = (id) => {
        fetch(`http://localhost:3000/posts/${id}`, {
            method: "DELETE"
        })
            .then(response => {
                if(!response.ok){
                    throw Error(`Could not delete. ID: ${id}`);
                }
                refreshPosts();
            }).catch(error => {
                console.log(error);
        })
    }
    const refreshPosts = () => {
        fetch(url)
        .then(response => {
            if (!response.ok) {
                throw Error(`Could not fetch data. URL: ${url}`);
            }
            return response.json();
        }).then(data => {
            setPosts(data);
        }).catch(error => {
            console.log(error);
        })
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-10 mx-auto">
                    <h3 className="mt-4">Blog List</h3>
                    <label htmlFor="numberInput" className="form-label">Number of posts to display:</label>
                    <input type="number" className="form-control mb-2" value={numPosts} onChange={(e) => setNumPosts(e.target.value)}/>
                    {getPreparedPosts().map((post) => (
                        <div className="p-2 border d-flex justify-content-between align-items-center">
                            <div>
                                {post.title}
                            </div>
                            <div>
                                <button className="btn btn-primary me-2" onClick={() => navigate(`/post/${post.id}`, {state: {post}})}>
                                    Show Details
                                </button>
                                <button className="btn btn-danger" onClick={() => handleDelete(post.id)}>
                                    Delete
                                </button>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BlogList;
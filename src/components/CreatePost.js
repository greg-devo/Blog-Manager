import React, {useState} from 'react';
import {resolvePath, useNavigate} from "react-router-dom";

function CreatePost(props) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({title: "", content: ""});
    const [errors, setErrors] = useState({title: "", content: ""});
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
        setErrors({...errors, [name]: ""});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!formData.name) newErrors.name = "Name is required.";
        if (!formData.email) newErrors.email = "Email is required.";
        if (newErrors) return;
        fetch(`http://localhost:3300/posts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        }).then(response => {
            if (!response.ok) {
                throw Error("Could not post.");
            }
            navigate("/posts");
        })
    };

    return (
        <div className="container mt-4">
            <h2>Create New Post</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                        Title
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        onChange={handleChange}
                        placeholder="Enter title..."
                    />
                    {errors.title && (
                        <div className="invalid-feedback">{errors.title}</div>
                    )}
                </div>
                <div className="mb-3">
                    <label htmlFor="content" className="form-label">
                        Content
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="content"
                        name="content"
                        onChange={handleChange}
                        placeholder="Enter content..."
                    />
                    {errors.content && (
                        <div className="invalid-feedback">{errors.content}</div>
                    )}
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default CreatePost;
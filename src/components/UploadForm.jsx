import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { uploadFile } from "../features/fileSlice";


const UploadForm = () => {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        name: "",
        title: "",
        category: "",
        description: "",
        file: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        if (name === "file") {
            setFormData({ ...formData, file: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.file) {
            alert("Please upload a file");
            return;
        }

        dispatch(uploadFile(formData.file));

        const newData = {
            name: formData.name,
            title: formData.title,
            category: formData.category,
            description: formData.description,
            fileName: formData.file.name,
            date: new Date().toLocaleString(),
        };

        let existingData = localStorage.getItem("documents");
        existingData = existingData ? JSON.parse(existingData) : [];
        existingData.push(newData);

        localStorage.setItem("documents", JSON.stringify(existingData));
        window.dispatchEvent(new Event("storage"));

        setFormData({
            name: "",
            title: "",
            category: "",
            description: "",
            file: null,
        });
    };

    return (
        <div className="upload-container">
            <div className="upload-card">
                <h2>Upload Document</h2>

                <form onSubmit={handleSubmit} className="upload-form">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        name="title"
                        placeholder="Document Title"
                        value={formData.title}
                        onChange={handleChange}
                    />

                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                    >
                        <option value="">Select Category</option>
                        <option value="Personal">Personal</option>
                        <option value="Academic">Academic</option>
                        <option value="Office">Office</option>
                        <option value="Certificates">Certificates</option>
                    </select>

                    <textarea
                        name="description"
                        placeholder="Description"
                        value={formData.description}
                        onChange={handleChange}
                        rows="3"
                    />

                    <input type="file" name="file" onChange={handleChange} />

                    <button type="submit">Submit & Upload</button>
                </form>
            </div>
        </div>
    );
};

export default UploadForm;
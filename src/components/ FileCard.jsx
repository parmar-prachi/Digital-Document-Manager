import React, { useState } from "react";


const FileCard = ({ file, onDelete, onUpdate }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editData, setEditData] = useState(file);

    const handleChange = (e) => {
        setEditData({ ...editData, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        onUpdate(editData);
        setIsEditing(false);
    };

    return (
        <div className="file-card">
            {isEditing ? (
                <div className="edit-form">
                    <input name="name" value={editData.name} onChange={handleChange} />
                    <input name="title" value={editData.title} onChange={handleChange} />
                    <input name="category" value={editData.category} onChange={handleChange} />
                    <textarea
                        name="description"
                        value={editData.description}
                        onChange={handleChange}
                    />

                    <button className="save-btn" onClick={handleSave}>
                        Save
                    </button>
                </div>
            ) : (
                <div className="card-content">
                    <h3>{file.title}</h3>

                    <p><strong>Name:</strong> {file.name}</p>
                    <p><strong>Category:</strong> {file.category}</p>
                    <p><strong>Description:</strong> {file.description}</p>
                    <p><strong>File:</strong> {file.fileName}</p>

                    <div className="card-actions">
                        <button className="edit-btn" onClick={() => setIsEditing(true)}>
                            Edit
                        </button>
                        <button className="delete-btn" onClick={onDelete}>
                            Delete
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FileCard;
import React, { useEffect, useState } from "react";
import FileCard from "../components/ FileCard";


const Dashboard = () => {
    const [documents, setDocuments] = useState([]);

    const loadData = () => {
        const data = JSON.parse(localStorage.getItem("documents")) || [];
        setDocuments(data);
    };

    useEffect(() => {
        loadData();
    }, []);

    const handleDelete = (index) => {
        const updated = [...documents];
        updated.splice(index, 1);

        localStorage.setItem("documents", JSON.stringify(updated));
        setDocuments(updated);
    };

    const handleUpdate = (index, updatedData) => {
        const updated = [...documents];
        updated[index] = updatedData;

        localStorage.setItem("documents", JSON.stringify(updated));
        setDocuments(updated);
    };

    return (
        <div className="dashboard-container ">
            <h2 className="dashboard-title">📁 Dashboard</h2>

            {documents.length === 0 ? (
                <p className="no-data">No data found</p>
            ) : (
                <div className="dashboard-grid">
                    {documents.map((doc, index) => (
                        <FileCard
                            key={index}
                            file={doc}
                            onDelete={() => handleDelete(index)}
                            onUpdate={(data) => handleUpdate(index, data)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dashboard;
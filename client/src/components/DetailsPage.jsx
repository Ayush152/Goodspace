// DetailsPage.jsx

import React, { useState } from 'react';
import './DetailsPage.css';

export default function DetailsPage() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [primarySymptom, setPrimarySymptom] = useState('');
    const [activeMedication, setActiveMedication] = useState('');
    const [questions, setQuestions] = useState([]);

    const handleAskQuestions = async () => {
        try {
            const response = await fetch('http://localhost:5002/api/prompt/questions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    age,
                    primarySymptom,
                    activeMedication,
                }),
            });

            let data = await response.json();
            if(data.questions === undefined) {
            }
            else{
                console.log(JSON.stringify(data));
                data = data.questions
            }
            console.log('Received data:', data);
            localStorage.setItem('questions', data);
            setQuestions(data.questions);
        } catch (error) {
            console.error('Error asking questions:', error);
        }
    };

    return (
        <div className="centered-form">
            <form>
                <label className="form-label">
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-input" />
                </label>
                <br />
                <label className="form-label">
                    Age:
                    <input type="text" value={age} onChange={(e) => setAge(e.target.value)} className="form-input" />
                </label>
                <br />
                <label className="form-label">
                    Primary Symptom:
                    <input type="text" value={primarySymptom} onChange={(e) => setPrimarySymptom(e.target.value)} className="form-input" />
                </label>
                <br />
                <label className="form-label">
                    Active Medication:
                    <input type="text" value={activeMedication} onChange={(e) => setActiveMedication(e.target.value)} className="form-input" />
                </label>
                <br />
                <button type="button" onClick={handleAskQuestions} className="form-button">
                    Ask Questions
                </button>
            </form>
            <br />
        </div>
    );
}

import React from "react";

const LessonsPage = () => { 
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Deutsch Sprach Hilfe - Lektionen</h1>
            <p className="mb-4">Hier finden Sie alle Lektionen, die Sie benötigen, um Ihre Deutschkenntnisse zu verbessern.</p>
            <h2 className="text-2xl font-semibold mb-2">Unsere Lektionen</h2>
            <ul className="list-disc list-inside mb-4">
                <li>Einführung in die deutsche Sprache</li>
                <li>Deutsch für Anfänger</li>
                <li>Deutsch für Fortgeschrittene</li>
                <li>Business Deutsch</li>
            </ul>
        </div>
    );
}
export default LessonsPage;
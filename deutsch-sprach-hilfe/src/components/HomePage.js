import React from 'react';


const HomePage = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Willkommen bei Deutsch Sprach Hilfe!</h1>
            <p className="mb-4">Hier finden Sie alle Ressourcen, die Sie benötigen, um Ihre Deutschkenntnisse zu verbessern.</p>
            <h2 className="text-2xl font-semibold mb-2">Unsere Kurse</h2>
            <ul className="list-disc list-inside mb-4">
                <li>Deutsch für Anfänger</li>
                <li>Deutsch für Fortgeschrittene</li>
                <li>Business Deutsch</li>
            </ul>
            <h2 className="text-2xl font-semibold mb-2">Ressourcen</h2>
            <ul className="list-disc list-inside mb-4">
                <li><a href="/resources/exercises" className="text-blue-500 hover:underline">Übungen</a></li>
                <li><a href="/resources/grammar" className="text-blue-500 hover:underline">Grammatik</a></li>
                <li><a href="/resources/vocabulary" className="text-blue-500 hover:underline">Wortschatz</a></li>
            </ul>
        </div>
    );
}
export default HomePage;
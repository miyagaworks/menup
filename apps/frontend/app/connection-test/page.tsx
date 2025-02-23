// apps/frontend/app/connection-test/page.tsx
'use client';

import { useState, useEffect } from 'react';

interface TestResponse {
    message: string;
    timestamp: number;
}

export default function ConnectionTest() {
    const [testData, setTestData] = useState<TestResponse | null>(null);
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const testConnection = async () => {
            try {
                const response = await fetch('http://localhost:3001/test');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setTestData(data);
                setError('');
            } catch (err) {
                setError('Failed to connect to backend: ' + (err instanceof Error ? err.message : String(err)));
            } finally {
                setLoading(false);
            }
        };

        testConnection();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-lg">Loading...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-red-500 text-lg">{error}</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold mb-4">Connection Test</h1>
                {testData && (
                    <div className="space-y-2">
                        <p className="text-green-600">{testData.message}</p>
                        <p className="text-gray-600">
                            Timestamp: {new Date(testData.timestamp).toLocaleString()}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
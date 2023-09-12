import React, { useState } from 'react'
import { Card, Button, Alert } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function Dashboard() {

    const { currentUser, logout } = useAuth()
    const [error, setError] = useState('')
    const history = useHistory()

    async function handleLogout() {
        setError('')

        try {
            await logout()
            history.push('/login')
        } catch {
            setError('Logout failure')
        }
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Profil</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <strong>Email :</strong>{currentUser.email}
                    <Link to="/update-profile" className="btn btn-primary w-100 mt-3">Edit my profile</Link>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Button variant="link" onClick={handleLogout}>Log out</Button>
            </div>
        </>
    )
}

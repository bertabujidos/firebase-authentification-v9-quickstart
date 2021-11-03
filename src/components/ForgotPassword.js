import React, {useRef, useState} from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'

export default function ForgotPassword() {
    const emailRef = useRef()
    const { login } = useAuth()
    const [ error, setError ] = useState('')
    const [ loading, setLoading ] = useState(false)
    const history = useHistory()


    async function handleSubmit (e){
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            /* await login(emailRef.current.value, passwordRef.current.value) */
            history.push('/')
        }   catch{
            setError('Mot de passe incorret')
        }
        setLoading('false')

    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Réinitialisation du mot de passe</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required/>
                        </Form.Group>
                        <Button disable={loading} className="w-100 mb-3" type="Submit">Réinitialiser mot de passe</Button>
                    </Form>
                    <div className="w-100 text-center mt-3">
                        <Link to="/login">Se connecter</Link>
                    </div>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Pas encore de compte ? <Link to="/signup">S'inscire</Link>
            </div>
        </>
    )
}
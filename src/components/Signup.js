import React, {useRef, useState} from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [ error, setError ] = useState('')
    const [ loading, setLoading ] = useState(false)
    const history = useHistory()


    async function handleSubmit (e){
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Les mots de passe ne correspondent pas')
        }
        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push('/')
        }   catch{
            setError('Échec lors de la création du compte ')
        }
        setLoading('false')

    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Inscription</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required/>
                        </Form.Group>
                        <Form.Group className="mb-3" id="password">
                            <Form.Label>Mot de passe</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required/>
                        </Form.Group>
                        <Form.Group className="mb-3" id="password-confirm">
                            <Form.Label>Confirmation du mot de passe</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} required/>
                        </Form.Group>
                        <Button disable={loading} className="w-100 mb-3" type="Submit"> S'inscire</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Vous avez déjà un compte ? <Link to="/login">Se connecter</Link>
            </div>
        </>
    )
}
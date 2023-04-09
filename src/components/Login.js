import React, {useRef, useState} from 'react'
import { Form, Button, Card, Alert, FloatingLabel } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [ error, setError ] = useState('')
    const [ loading, setLoading ] = useState(false)
    const history = useHistory()


    async function handleSubmit (e){
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
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
                    <h2 className="text-center mb-4">Connexion</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
                            <Form.Control type="email" placeholder="Email" ref={emailRef} required/>
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                            <Form.Control type="password" placeholder="Password" ref={passwordRef} required/>
                        </FloatingLabel>
                        <Button disable={loading} className="w-100 mb-3" type="Submit">Se connecter</Button>
                    </Form>
                    <div className="w-100 text-center mt-3">
                        <Link to="/forgot-password">Mot de passe oublié ?</Link>
                    </div>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Pas encore de compte ? <Link to="/signup">S'inscire</Link>
            </div>
        </>
    )
}
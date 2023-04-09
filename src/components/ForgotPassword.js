import React, {useRef, useState} from 'react'
import { Form, Button, Card, Alert, FloatingLabel } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'

export default function ForgotPassword() {
    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [ error, setError ] = useState('')
    const [ message, setMessage ] = useState('')
    const [ loading, setLoading ] = useState(false)


    async function handleSubmit (e){
        e.preventDefault()

        try {
            setMessage('')
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Vérifier votre boîte mail et suivez les instructions')
        }   catch{
            setError('Échec lors de la réinitialisation')
        }
        setLoading('false')

    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Réinitialisation du mot de passe</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {message && <Alert variant="success">{message}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <FloatingLabel controlId="floatinginput" label="Email" className="mb-3">
                            <Form.Control type="email" placeholder="Email" ref={emailRef} required/>
                        </FloatingLabel>
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
import React, {useRef, useState} from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'

export default function UpdateProfile() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { currentUser, setEmail, setPassword  } = useAuth()
    const [ error, setError ] = useState('')
    const [ loading, setLoading ] = useState(false)
    const history = useHistory()


    function handleSubmit (e){
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Les mots de passe ne correspondent pas')
        }

        const promises = []
        setLoading(true)
        setError('')

        if (emailRef.current.value !== currentUser.email) {
            promises.push(setEmail(emailRef.current.value))
        }

        if (passwordRef.current.value) {
            promises.push(setPassword(passwordRef.current.value))
        }

        Promise.all(promises).then(() => {
            history.push('/')
        }).catch(() =>{
            setError('Erreur lors de la mise à jour du profil')
        }).finally(() => {
             setLoading(false)
        })

    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Modifier mon profil</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required defaultValue={currentUser.email} />
                        </Form.Group>
                        <Form.Group className="mb-3" id="password">
                            <Form.Label>Mot de passe</Form.Label>
                            <Form.Control type="password" ref={passwordRef} placeholder="Laisser vide pour garder le même"/>
                        </Form.Group>
                        <Form.Group className="mb-3" id="password-confirm">
                            <Form.Label>Confirmation du mot de passe</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} placeholder="Laisser vide pour garder le même"/>
                        </Form.Group>
                        <Button disable={loading} className="w-100 mb-3" type="Submit">Mettre à jour</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Link to="/">Annuler</Link>
            </div>
        </>
    )
}
import React, {useRef} from 'react'
import { Form, Button, Card } from 'react-bootstrap'

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Inscription</h2>
                    <Form>
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
                        <Button className="w-100 mb-3" type="Submit"> S'inscire</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Vous avez déjà un compte ? Se connecter
            </div>
        </>
    )
}
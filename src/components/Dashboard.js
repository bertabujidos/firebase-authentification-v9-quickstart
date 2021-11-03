import React from 'react'
import { Card, Button} from 'react-bootstrap'

export default function Dashboard() {

    function handleLogout() {

    }
    return (
        <>
            <Card>
                <Card.Body>
                    
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>
                <Button variant='link' onClick='handleLogout'>Déconnexion</Button>
            </div>
        </>
    )
}

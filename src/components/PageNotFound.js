import React from 'react'
import { Redirect } from 'react-router'

export default function PageNotFound() {
    return (
        <Redirect path="/" />
    )
}

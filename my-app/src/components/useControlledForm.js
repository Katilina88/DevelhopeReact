import React, { useState } from 'react'

export default function useControlledForm() {

    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    
   const handleChange = (e) => {
        setUsername(e.target.value)
        setPassword(e.target.value)
    }

  return {
    username,
    password,
    handleChange,
  }
}
import { useState , useEffect } from 'react'
import { supabase } from './lib/supabase'
import Landing from './pages/Landing'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Main from './pages/Main'

import type { Page } from './types'

export default function App() {
  const [page , setPage] = useState<Page>('landing')
  const [loading , setLoading] = useState(true)

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) setPage('main')
      setLoading(false)
    })
  } , [])

  if (loading) return (
    <div style={{
      height: '100vh' , display: 'flex' , alignItems: 'center' ,
      justifyContent: 'center' , color: 'var(--text2)' ,
      fontFamily: 'var(--font-sans)' , fontSize: 11 ,
      letterSpacing: '-0.04em' , textTransform: 'uppercase'
    }}>
      loading
    </div>
  )

  return (
    <>
      {page === 'landing' && <Landing setPage={setPage} />}
      {page === 'signup' && <Signup setPage={setPage} />}
      {page === 'signin' && <Signin setPage={setPage} />}
      {page === 'main' && <Main setPage={setPage} />}
    </>
  )
}
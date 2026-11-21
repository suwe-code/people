import { Page } from '../types'

export default function Landing({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <div style={{
      minHeight: '100vh' , background: 'var(--bg)' ,
      display: 'flex' , flexDirection: 'column' ,
      alignItems: 'center' , justifyContent: 'center' ,
      padding: '0 16px'
    }}>
      <div style={{ width: '100%' , maxWidth: 400 }}>

        <div style={{
          border: '1px solid var(--border)' ,
          padding: '4px 12px' ,
          display: 'inline-block' ,
          marginBottom: 32
        }}>
          <span style={{
            fontFamily: 'var(--font-mono)' ,
            fontSize: 20 , fontWeight: 500 ,
            letterSpacing: '-0.02em' ,
            color: 'var(--text2)'
          }}>
            SPEC-OPS
          </span>
        </div>

        <div style={{
          color: 'var(--text2)' , fontSize: 11 ,
          letterSpacing: '-0.04em' , textTransform: 'uppercase' ,
          marginBottom: 48
        }}>
          field ops management · v1.0
        </div>

        <div style={{ display: 'flex' , flexDirection: 'column' , gap: 8 }}>
          <button
            onClick={() => setPage('signin')}
            style={{
              width: '100%' , padding: '12px 16px' ,
              background: 'var(--invertBg)' , color: 'var(--invertText)' ,
              border: '1px solid var(--invertBg)' ,
              fontSize: 12 , fontWeight: 500 ,
              letterSpacing: '-0.04em' , textTransform: 'uppercase' ,
              cursor: 'pointer'
            }}
          >
            sign in
          </button>

          <button
            onClick={() => setPage('signup')}
            style={{
              width: '100%' , padding: '12px 16px' ,
              background: 'transparent' , color: 'var(--text)' ,
              border: '1px solid var(--border)' ,
              fontSize: 12 , fontWeight: 500 ,
              letterSpacing: '-0.04em' , textTransform: 'uppercase' ,
              cursor: 'pointer'
            }}
          >
           create account
          </button>
        </div>

        <div style={{
          marginTop: 48 , paddingTop: 24 ,
          borderTop: '1px solid var(--divider)' ,
          color: 'var(--textMuted)' , fontSize: 11 ,
          letterSpacing: '-0.02em'
        }}>
          attendance · events · field ops
        </div>

      </div>
    </div>
  )
}

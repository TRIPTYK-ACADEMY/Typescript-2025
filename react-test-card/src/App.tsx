import './App.css'

type User = {
  email?: string,
  name: string
}

const Card = ({user}: {user: User}) => {
  return <div>
    <p>{user.name}</p>
    {user.email ?? 'No email'}
    <hr></hr>
  </div>
}

function App() {
  const user: User = {
    name: 'Amaury'
  };
  const chirac: User = {
    name: 'Chirac',
    email: 'chirac@gov.fr'
  };
  const undefMan: User = {
    name: 'Macron Explosion',
    email: undefined
  }
  return (
    <>
      <Card user={user} />
      <Card user={chirac} />
      <Card user={undefMan} />
    </>
  )
}

export default App

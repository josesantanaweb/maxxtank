import { Button } from '@/components'

function App() {
  return (
    <div className="max-w-2xl p-5 mx-auto">
      <Button color="red" size="lg" icon="user" iconPosition="right">
        Button
      </Button>
      <Button color="red" variant="outline">
        Outline
      </Button>
    </div>
  )
}

export default App

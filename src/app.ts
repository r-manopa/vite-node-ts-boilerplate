import express from 'express'

export function runApp() {
  const PORT = process.env.PORT || 3000
  const app = express()

  app.get('/', (req, res) => res.send('hello vite'))

  app.listen(PORT, () => console.log(`app start at http://localhost:${PORT}`))
}
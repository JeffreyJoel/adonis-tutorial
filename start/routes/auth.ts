import Route from '@ioc:Adonis/Core/Route'

// Auth Routes
Route.on('/register').render('auth/signup')

Route.on('/login').render('auth/login');

Route.post('/register', async (req) => {
  return req
})

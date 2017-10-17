export default function ({ store, error, route, redirect }) {
  if (!store.state.authUser) {
    redirect('/login')
  }
}

import SignupSaga from './signup/sagas'
import { loginWatcher as LoginSaga, logoutWatcher as LogoutSaga } from './login/sagas'
import { eventsWatcher as EventsSaga } from './events/sagas'

export default function* IndexSaga () {
  yield [
    SignupSaga(),
    LoginSaga(),
    LogoutSaga(),
    EventsSaga(),
  ]
}
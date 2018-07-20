import { reactotronRedux } from 'reactotron-redux'
import Reactotron from 'reactotron-react-native'

Reactotron.configure({ name: 'portfolio1' , host: '192.168.1.191' })
  .useReactNative()
  .use(reactotronRedux())
  .connect()
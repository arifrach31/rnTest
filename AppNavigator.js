import { StackNavigator } from 'react-navigation'
import Task1 from './app/containers/Task1'
import Task2 from './app/containers/Task2'

const AppNavigator = StackNavigator(
    {
        Task1: { screen: Task1 },
        Task2: { screen: Task2 },
    }, {
        initialRouteName: 'Task1',
        headerMode: 'none'
    }
)

export default AppNavigator
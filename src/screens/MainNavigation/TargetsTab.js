import { StackNavigator } from 'react-navigation';
import TargetsScreen from '../TargetsScreen';

const TargetsTab = StackNavigator({
  Targets: {
    screen: TargetsScreen,
  },
});

export default TargetsTab;

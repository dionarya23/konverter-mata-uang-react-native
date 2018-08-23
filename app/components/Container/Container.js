import Reacct, {PropsTypes} from 'react';

import { View } from 'react-native';

import styles from './styles';
const Container = ({children}) => (
    <View style={styles.container}>
        {children}
    </View>
)

Container.propTypes = {
    children: PropTypes.element,
}

export default Container;
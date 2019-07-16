import { StyleSheet } from 'react-native';
import { APP_COLORS } from '../../styles/colors';

export const style = StyleSheet.create({
	button: {
		justifyContent: 'center',
		backgroundColor: APP_COLORS.primaryAction
	},

	modal: {
		backgroundColor: 'white',
		height: 200,
		justifyContent: 'space-around'
	},

	textView: {
		justifyContent: 'center',
		alignItems: 'center'
	}
});

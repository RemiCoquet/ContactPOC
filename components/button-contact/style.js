import { StyleSheet } from 'react-native';
import { APP_COLORS } from '../../styles/colors';

export const style = StyleSheet.create({
	icon: {
		color: APP_COLORS.white,
		fontSize: 20,
		marginEnd: 10
	},

	button: {
		height: 40,
		marginTop: 10,
		marginBottom: 10,
		backgroundColor: APP_COLORS.primaryAction
	}
});

import { StyleSheet } from 'react-native';
import { APP_COLORS } from './colors';

export const style = StyleSheet.create({
	header: {
		backgroundColor: APP_COLORS.primary,
		height: 50,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		shadowColor: APP_COLORS.shadow,
		shadowOpacity: 0.2,
		shadowOffset: { height: 10 }
	},

	text: {
		color: APP_COLORS.white,
		fontSize: 20
	},

	container: {
		marginTop: 10,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

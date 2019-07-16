import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import Modal from 'react-native-modal';
import { style } from './style';

const animDuration = 1000;

const ModalContact = ({ isVisible, text, onDisappearCallback }) => (
	<Modal
		isVisible={isVisible}
		animationIn={'zoomInDown'}
		animationOut={'zoomOutUp'}
		animationInTiming={animDuration}
		animationOutTiming={animDuration}
		backdropTransitionInTiming={animDuration}
		backdropTransitionOutTiming={animDuration}
		onBackdropPress={() => onDisappearCallback()}
		children={
			<View style={style.modal}>
				<View style={style.textView}>
					<Text>{text}</Text>
				</View>
				<Button title="OK" onPress={() => onDisappearCallback()} buttonStyle={style.button} />
			</View>
		}
	/>
);

export default ModalContact;

import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Button } from 'react-native-elements';
import { style } from './style';

const ButtonContact = ({ title, icon, onPress }) => (
	<Button icon={<Icon name={icon} style={style.icon} />} title={title} buttonStyle={style.button} onPress={onPress} />
);

export default ButtonContact;

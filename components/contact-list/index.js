import React from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

const ContactList = ({ contactlist, onPressCallBack }) => (
	<FlatList
		data={contactlist}
		renderItem={({ item }) => (
			<ListItem
				title={item.familyName}
				subtitle={item.givenName}
				leftAvatar={{ source: { uri: item.thumbnailPath } }}
				chevron
				onPress={() => onPressCallBack(item)}
			/>
		)}
	/>
);

export default ContactList;

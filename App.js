/**
 * POC AkaBi Contact
 * 
 *
 * @format
 * @flow
 */

import React from 'react';
import { Text, View, ScrollView, ActivityIndicator } from 'react-native';
import ButtonContact from './components/button-contact';
import ModalContact from './components/modal-contact';
import ContactList from './components/contact-list';
import { style } from './styles/style';
// import AsyncStorage from '@react-native-community/async-storage';
import Contacts from 'react-native-contacts';
import { PermissionsAndroid } from 'react-native';

const storageKey = 'idContact';
const lastname = 'AkaBiNom';
const name = 'Anna';
const phoneNumber = '+33 1 00 00 00 00';
const phoneNumberUpdate = '+33 1 23 45 67 89';
const nbMaxContact = 3;

export default class App extends React.Component {
	// Init State
	constructor(props) {
		super(props);
		this.state = {
			isModalContactVisible: false,
			cptGenerator: 0,
			contactlist: [],
			textModal: '',
			isLoading: true
		};
	}

	// Load data from device memory
	componentDidMount() {
		// this.getStateCptGenerator();
		this.requestContactPermission();
		console.disableYellowBox = true;
	}

	// Save counter contact in device memory
	// saveStateCptGenerator = async () => {
	// 	try {
	// 		await AsyncStorage.setItem(storageKey, this.state.cptGenerator.toString());
	// 	} catch (e) {}
	// };

	// Get counter contact from device memory
	// getStateCptGenerator = async () => {
	// 	try {
	// 		const value = await AsyncStorage.getItem(storageKey);
	// 		if (value !== null) {
	// 			this.setState({ cptGenerator: parseInt(value) });
	// 		}
	// 	} catch (e) {}
	// };

	// Function Modal appear/ disappear
	toogleModalContactVisibility = () => {
		this.setState({
			isModalContactVisible: !this.state.isModalContactVisible
		});
	};

	// Function clic on 'Add Contact'
	onPressButtonAddContact = () => {
		if (this.state.cptGenerator < nbMaxContact) {
			this.setState({
				cptGenerator: ++this.state.cptGenerator,
				textModal:
					'Contact ajouté \nNom : ' +
					lastname +
					' ' +
					this.state.cptGenerator +
					'\nPrénom: ' +
					name +
					'\nTéléphone: ' +
					phoneNumber
			});
			// this.saveStateCptGenerator();
			this.addNewContact();
			this.getAllContacts();
		} else {
			this.setState({
				textModal: 'Le contact' + lastname + ' ' + this.state.cptGenerator + ' a déjà été créé'
			});
		}
		this.toogleModalContactVisibility();
	};

	// Function clic on 'Update Contact'
	onPressListUpdateContact = (contact) => {
		if (contact !== undefined) {
			contact.phoneNumbers.push({
				label: 'mobile',
				number: phoneNumberUpdate
			});

			Contacts.updateContact(contact, (err) => {
				if (err) {
				} else {
					this.setState({
						textModal:
							'Contact ' +
							contact.givenName +
							' ' +
							contact.familyName +
							' a été mis à jour!\nAjout du num: ' +
							phoneNumberUpdate
					});
				}
			});

			this.getAllContacts();
			this.toogleModalContactVisibility();
		}
	};

	// Function Add a new Contact
	addNewContact = () => {
		// Creation of a new Contact
		var newPerson = {
			familyName: lastname + ' ' + this.state.cptGenerator,
			givenName: name,
			phoneNumbers: [
				{
					label: 'mobile',
					number: phoneNumber
				}
			],
			hasThumbnail: true,
			thumbnailPath: 'content://com.android.contacts/display_photo/1'
		};

		Contacts.addContact(newPerson, (err) => {
			if (err) throw err;
		});
	};

	// Refresh Contact List
	getAllContacts = () => {
		Contacts.getAll((err, contacts) => {
			if (err) {
				throw err;
			} else {
				this.setState({ contactlist: contacts, isLoading: false });
			}
		});
	};

	// Display Loading
	displayLoading = () => {
		if (this.state.isLoading) {
			return (
				<View>
					<ActivityIndicator size="large" />
				</View>
			);
		}
	};

	// Function render (main page)
	render() {
		return (
			<View style={{ flex: 1 }}>
				{/* Header */}
				<View style={style.header}>
					<Text style={style.text}>POC Contact AkaBi</Text>
				</View>

				{/* Modal: Display infos */}
				<ModalContact
					isVisible={this.state.isModalContactVisible}
					text={this.state.textModal}
					onDisappearCallback={this.toogleModalContactVisibility}
				/>

				{/* Buttons 'Add Contact' and 'Modify Contact' */}
				<View style={style.container}>
					<ButtonContact title="Ajouter un contact" icon="user-plus" onPress={this.onPressButtonAddContact} />
				</View>

				{this.displayLoading()}

				{/* Contact List */}
				<ScrollView>
					<ContactList contactlist={this.state.contactlist} onPressCallBack={this.onPressListUpdateContact} />
				</ScrollView>
			</View>
		);
	}

	// Permission Management Android READ-CONTACTS - WRITE_CONTACTS
	requestContactPermission = async () => {
		if (Platform.OS === 'android') {
			PermissionsAndroid.requestMultiple([
				PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
				PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS
			]).then((result) => {
				if (
					result['android.permission.READ_CONTACTS'] &&
					result['android.permission.WRITE_CONTACTS'] === 'granted'
				) {
					this.getAllContacts();
				}
			});
		}
	};
}

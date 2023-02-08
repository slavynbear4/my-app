import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../common/Forms controls/Forms controls";





const Dialogs = (props) => {


	let DialogsElements = props.messagePage.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

	let MessagesElements = props.messagePage.messages.map(m => <Message message={m.message} />);





	let AddNewMassage = (values) => {
		//alert(values.newMessageBody)
		props.sendMessage(values.newMessageBody);
	}


	return (
		<div className={s.dialogs}>
			<div className={s.dialogs_items}>
				{DialogsElements}
			</div>
			<div className={s.messages}>
				<div>{MessagesElements}</div>
				<AddMessageFormRedux onSubmit={AddNewMassage}/>
			</div>
		</div>
	)
}
const maxLength30 = maxLengthCreator(30);

const AddMessageForm = (props) => {


	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field component={Textarea} name="newMessageBody" validate={[required, maxLength30 ]} placeholder="Enter your messages"/>
			</div>
			<div>
				<button>отправить</button>
			</div>
		</form>
	)
}

const AddMessageFormRedux = reduxForm({

	form: 'dialogAddMessageForm'
})(AddMessageForm)

export default Dialogs
import React from 'react';
import {updateMessageBodyActiveCreator, sendMessageActiveCreator} from './../../redux/dialogs_reducer'
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/withAuthRiderect";
import {compose} from "redux";






let mapStateToProps = (state) => {
	return {
		messagePage: state.messagePage,
		newMessageBody: state.messagePage.newMessageBody,


	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		sendMessage: (newMessageBody) => {
			dispatch(sendMessageActiveCreator(newMessageBody))
		},
	}
}
let AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent) ;


export default  compose(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect,
)(Dialogs)
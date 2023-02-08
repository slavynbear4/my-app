import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../src/utils/validators/validators";
import {Textarea} from "../../common/Forms controls/Forms controls";







const MyPosts = (props) => {

	let PostsElements = props.posts.map(p => <Post message={p.message} value={p.value} />);

	let AddNewPost = (values) => {
		//alert(values.NewPostElement);
		props.addPost(values.NewPostElement);
	}

	return (
		<div>
			<h3>Myy posts</h3>
			<AddPostRedux onSubmit={AddNewPost} />
			<div className={s.Posts}>
				{PostsElements}
			</div>
		</div>
	)
}
const maxLength30 = maxLengthCreator(30);

const AddPost = (props) => {



	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field component={Textarea} name="NewPostElement" validate={[required, maxLength30 ]} placeholder="печааатай уже быстрее давай"/>
			</div>
			<div>
				<button>отправить</button>
			</div>
		</form>
	)
}


const AddPostRedux = reduxForm({

	form: 'profileAddPostForm'
})(AddPost)


export default MyPosts;
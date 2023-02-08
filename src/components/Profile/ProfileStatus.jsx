import React from 'react';


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activeteEditMode = () => {
        this.setState({
            editMode: true,
        })
    }
    deactiveteEditMode = () => {
        this.setState({
            editMode: false,
        })
        this.props.updateUserStatus(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if ( prevProps.status !== this.props.status ) {
            this.setState({
                status: this.props.status
            })
        }
    }


    render() {



        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onClick={this.activeteEditMode}>{this.props.status || "---------"}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} value={this.state.status} onBlur={this.deactiveteEditMode} autoFocus={true}/>
                    </div>
                }

            </div>
        )
    }
}

export default ProfileStatus;
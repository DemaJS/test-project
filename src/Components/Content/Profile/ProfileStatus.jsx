import React from 'react'

class Status extends React.Component {

    state = {
        editMode: true,
        status:this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode: false
        })
    }
    deActivateEditMode = () => {
        this.setState({
            editMode: true
        })
        this.props.updateStatusThunk(this.state.status)
    }
    onChangeStatus = (event) => {
        this.setState({
            status:event.currentTarget.value
        })
    }

    render() {
        console.log('re')
        return (
            <>
                {this.state.editMode
                    ?
                    <div>
                        <span onClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                    :
                    <div>
                        <input onChange={this.onChangeStatus} onBlur={this.deActivateEditMode} value={this.state.status}/>
                    </div>
                }
            </>
        )
    }
}



export default Status
export default class extends React.Component {
    state = {
        myMessage: ''
    }

    onChangeHandler = (e) => {
        this.setState({myMessage: e.target.value})
    }

    onClickHandler = () => {
        this.props.sendMessage(this.state.myMessage);
        this.setState({myMessage: ''});
    }

    render() {
        return (
            <div>
                <input className="message"
                       type="text"
                       placeholder="message"
                       value={this.state.myMessage}
                       onChange={this.onChangeHandler}
                />
                <button onClick={this.onClickHandler}>Send</button>

                <style>{`
                    .message {
                        width: 50%;
                    }
                `}
                </style>
            </div>
        )
    }
}
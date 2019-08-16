import fetch from 'isomorphic-unfetch'
import Message from '../components/my-message'


export default class extends React.Component {
    state = {
        messages: [],
    }

    getMessages = () => {
        fetch(`http://127.0.0.1:8000/api/chat/`, {
            method: 'GET',
            headers: {
                'Authorization': 'Token ' + sessionStorage.getItem('auth_token')
            }
        })
        .then((res) => res.json())
        .then((messages) => {
            this.setState({ messages })
        })
        .catch(error => console.error('Error:', error))
    }

    sendMessage = (text) => {
        fetch(`http://127.0.0.1:8000/api/chat/`, {
            method: 'POST',
            body: JSON.stringify({'text': text}),
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + sessionStorage.getItem('auth_token')
            }
        })
        .then(res => res.json())
        .then(response => {
            console.log('Success:', JSON.stringify(response))
        })
        .catch(error => console.error('Error:', error))
        
    }

    componentDidMount() {
        const regularMessageFetching = () => {
            this.getMessages();
            setTimeout(regularMessageFetching, 1000);
        }
        regularMessageFetching();
    }

    render() {
        let messagesList = null

        messagesList = this.state.messages.map(({text, id}) => (
            <div className="row" key={id}>
                {text}
            </div>
        ))

        return (
            <div>
                <div className="list">
                    {messagesList}
                </div>
                
                <div>
                    <Message sendMessage={this.sendMessage} />
                </div>

                <style>{`
                    .list{
                        background: #fsff;
                        padding: 10px;
                        margin: 5px;
                        height: 250px;
                        width: 70%;
                        overflow-y: scroll;
                        overflow-x: hidden;
                    }
                `}
                </style>
            </div>
        )
    }
}
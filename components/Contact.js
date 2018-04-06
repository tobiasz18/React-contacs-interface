var Contact = React.createClass({
    propTypes: {
        contact: React.PropTypes.object.isRequired
    },
    render: function() {
        return(
            React.createElement('div', {className: 'singleContact'},
                React.createElement('img',{
                    className: 'image',
                    src:'./image/photo.png'
                }),
                React.createElement('div',{className: 'contactDate'},
                    React.createElement('p', {className: 'contactElem'}, 'Imię: ' + this.props.contact.firstName),
                    React.createElement('p', {className: 'contactElem'}, 'Nazwisko: ' + this.props.contact.lastName),
                    React.createElement('a', {className: 'contactElem', href: 'mailto: ' + this.props.contact.email},this.props.contact.email)
                )
            )
        )
    }
})

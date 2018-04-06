var Contact = React.createClass({
    propTypes: {
        contact: React.PropTypes.object.isRequired
    },
    render: function() {
        return(
            React.createElement('div', {},
                React.createElement('img',{
                    className: 'image',
                    src:'./image/photo.png'
                }),
                React.createElement('p', {className: 'contactElem'}, 'imię ' + this.props.contact.firstName),
                React.createElement('p', {className: 'contactElem'}, 'Nazwisko ' + this.props.contact.lastName),
                React.createElement('p', {className: 'contactElem', href: 'mailto: ' + this.props.contact.email},this.props.contact.email)
            )
        )
    }
})

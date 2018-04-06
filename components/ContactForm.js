var ContactForm = React.createClass({
    propTypes: {
        contact: React.PropTypes.object.isRequired
    },

    render: function() {
        return (
            React.createElement('div', {className: 'contactForm'},
                React.createElement('input', {
                    type: 'text',
                    placeholder: 'Imię',
                    value: this.props.contact.firstName
                }),
                React.createElement('input', {
                    type: 'text',
                    placeholder: 'Nazwisko',
                    value: this.props.contact.lastName
                }),
                React.createElement('input', {
                    type: 'text',
                    placeholder: 'e-mail',
                    value: this.props.contact.email
                }),
                React.createElement('button', {
                    type: 'Submit'
                }, 'Dodaj kontakt')
            )
        )
    }
})

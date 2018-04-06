var Contacts = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired
    },

    render: function () {
        var contact = this.props.item.map(function(contacts) {
            return React.createElement(Contact, {contact: contacts})
        })

        return (
            React.createElement('div', {}, contact)
            )
    }
})

var Contacts = React.createClass({
    propTypes: {
        item: React.PropTypes.array.isRequired
    },

    render: function () {
        var contact = this.props.item.map(function(contacts) {
            return React.createElement(Contact, {contact: contacts, key: contacts.id});
        });

        return (
            React.createElement('div', {className: 'contactsList'}, contact)
        );
    }
});

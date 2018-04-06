var contacts = [
    {
        id: 1,
        firstName: 'Tomek',
        lastName: 'Kot',
        email: 'kot@example.pl'
    },
    {
        id: 2,
        firstName: 'Karol',
        lastName: 'Koń',
        email: 'koń@example.pl'
    },
    {
        id: 3,
        firstName: 'Krystian',
        lastName: 'Mirror',
        email: 'mirror@example.pl'
    },
    {
        id: 4,
        firstName: 'Arnold',
        lastName: 'Książek',
        email: 'księga@example.pl'
    }
];

var contactForm = {
    firstName: '',
    lastName: '',
    email: ''
}

var App = React.createClass({
    render: function() {
        return (
            React.createElement('div', {},
                React.createElement(ContactForm,{contact: contactForm}),
                React.createElement(Contacts, {item: contacts})
            )
        );
    }
});

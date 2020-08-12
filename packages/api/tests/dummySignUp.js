const dummySignUp = {
    passwordInvalidUser: {
        email : 'test123signup@usertest.com',
        password : 'TESTpassword',
        user_metadata : {'first_name': 'Test', 'last_name' :'InvalidEmail'},
        app_metadata: { emailInvite: true },
        connection: 'Username-Password-Authentication',
    },
    passwordBlankUser: {
        email : 'test123signup@usertest.com',
        password : '',
        user_metadata : {'first_name': 'Test', 'last_name' :'BlankEmail'},
        app_metadata: { emailInvite: true },
        connection: 'Username-Password-Authentication',
    },
    emailInvalidUser: {
        email : 'testmail.com',
        password : 'TEST123password?',
        user_metadata : {'first_name': 'Test', 'last_name' :'InvalidEmail'},
        app_metadata: { emailInvite: true },
        connection: 'Username-Password-Authentication',
    },
    emailBlankUser: {
        email : '',
        password : 'TEST123password?',
        user_metadata : {'first_name': 'Test', 'last_name' :'BlankEmail'},
        app_metadata: { emailInvite: true },
        connection: 'Username-Password-Authentication',
    },
    validSignupUser : {
        email : 'test123signup@usertest.com',
        password : 'TEST123password?',
        user_metadata : {'first_name': 'Aloo', 'last_name' :'Moh'},
        app_metadata: { emailInvite: true },
        connection: 'Username-Password-Authentication',
    }
    // validSignupUser : {
    //     email : 'testmail1234@gmail.com',
    //     password : 'TEST123password?',
    //     user_metadata : {'first_name': 'Test', 'last_name' :'Moh'},
    //     app_metadata: { emailInvite: true },
    //     connection: 'Username-Password-Authentication',
    // },
}

module.exports = dummySignUp;

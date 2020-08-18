const dummySignUp = {
    passwordInvalidUserNoLowercaseUppercase: {
        email : 'signuptest123@usertest.com',
        password : '1234+?4321!',
        user_metadata : {'first_name': 'Test', 'last_name' :'PasswordNoLetters'},
        app_metadata: { emailInvite: true },
        connection: 'Username-Password-Authentication',
    },
    passwordInvalidUserNoSpecialCharactersOrNumbers: {
        email : 'signuptest456@usertest.com',
        password : 'TESTpassword',
        user_metadata : {'first_name': 'Test', 'last_name' :'PasswordNoSpecialChar'},
        app_metadata: { emailInvite: true },
        connection: 'Username-Password-Authentication',
    },
    passwordBlankUser: {
        email : 'test123signup@usertest.com',
        password : '',
        user_metadata : {'first_name': 'Test', 'last_name' :'BlankPassword'},
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
    blankFirstNameUser :{
        email : 'blankFNametest1234signup@usertest.com',
        password : 'TEST123password?',
        user_metadata : {'last_name' :'TestLastName'},
        app_metadata: { emailInvite: true },
        connection: 'Username-Password-Authentication',
    },
    blankLastNameUser : {
        email : 'blankLNametest1234signup@usertest.com',
        password : 'TEST123password?',
        user_metadata : {'first_name': 'TestFirstName', 'last_name' :''},
        app_metadata: { emailInvite: true },
        connection: 'Username-Password-Authentication',
    },
    validSignupUser : {
        email : 'test1234_signup@usertest.com',
        password : 'TEST123password?',
        user_metadata : {'first_name': 'Test', 'last_name' :'ValidUser'},
        app_metadata: { emailInvite: true },
        connection: 'Username-Password-Authentication',
    },
    validUserAdd : {
        email: "test1234_signup@usertest.com",
        first_name: "Test",
        last_name: "ValidUser",
        profile_picture: "https://cdn.auth0.com/avatars/tv.png",
    },
}

module.exports = dummySignUp;

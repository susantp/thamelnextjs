import React from 'react'
const MyContext = React.createContext({ displayName: "Susant" });
MyContext.displayName = 'MyDisplayName';
const ThemeContext = React.createContext('light');
const UserContext = React.createContext({
    name: 'Guest'
});

module.exports = {
    ThemeContext,
    UserContext,
    MyContext
};

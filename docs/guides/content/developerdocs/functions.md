# JavaScript Functions

## Register Chat Command Function

The register chat command function is used at the end of a file in javascript to register the commands or subcommands to the command event. It also sets the default privilege of the command.

If a comand is not registered as a chat command it will not trigger the command event that is used to trigger the function. 

### Syntax

`$.registerChatCommand('file location', 'command name', groupID);`
`$.registerChatSubcommand('file location', 'command name', 'subcommand', groupID);`

### Group ID Values

The group ID sets the default permissions in chat for the command usage.

- Caster = 0
- Administrator = 1
- Moderator = 2
- Subscriber = 3
- Donator = 4
- VIP = 5
- Regular = 6
- Viewer = 7

If no group ID is given the command permission will default to 7 (viewer).

### Example

`$.registerChatCommand('./handlers/raidHandler.js', 'raid', 1);`

Registers command 'raid' from raidHandler.js to the event bus and gives administrators and higher permission to use it.

## Sanitize Funciton

The sanitize function is used to remove spaces and symbols from a string. In PhantomBot it is commonly used to ensure usernames used within the code have any @ or ' ' it may have been input with removed. 

### Syntax
`$.user.sanitize(string);`

### Example
`$.user.sanitize(username);`

If the variable username was `@TwitchUserName `, sanitize would output `twitchusername`.

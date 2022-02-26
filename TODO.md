User:
id: number
username: string
avatar: string
groups: Group[]

useCases:
find: (id) => User.model

.................

Group:
id: number
name: string
owner: User
admin: User[]

useCases:
create
addAmin
removeAdmin
joinGroup
unjoinGroup
banUser
invite

...................

Chat:
messages: Message[]
groupId: number
useCases:
findMessages: () => Message[]

....................

Message:
user: User
type: "text"
content: string
chat: Chat

useCases:
addMessage
removeMessage
editMessage

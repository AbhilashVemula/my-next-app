
// http://localhost:3000/api/users

export async function GET(params: any) {

    //  handle get req for /api/users

    // handle to get db data
    const users = [
        {
            id: 1, name: 'user1'
        },
        {
            id: 2, name: 'user2'
        },
        {
            id: 3, name: 'user3'
        }
    ]

    // returns response
    return new Response(JSON.stringify(users))
}
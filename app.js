console.log(`you're all hooked up`)

// Fetch info from api
async function getTwelveRandomUsers() {
    const response = await fetch(`https://randomuser.me/api/?nat=us&results=12`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            return data
        })

    return response.results
}


async function main() {
    const users = await getTwelveRandomUsers()

    // NEXT: Simplify and flatten the users ( and maybe add keys for the missing values ).


}

main()


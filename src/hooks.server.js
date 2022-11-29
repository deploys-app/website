export const handleFetch = async ({ request, fetch }) => {
    request.headers.set('origin', 'localhost')
    return fetch(request)
}

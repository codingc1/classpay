function onRequestOptions() {
    return new Response(null, {
        status: 204,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Methods': 'GET, OPTIONS',
            'Access-Control-Max-Age': '86400',
            'Access-Control-Expose-Headers': '*',
        },
    });
}

// Set CORS to all /api responses
function onRequest(context) {
    return context.next().then(function (response) {
        response.headers.set('Access-Control-Allow-Origin', '*');
        response.headers.set('Access-Control-Max-Age', '86400');
        return response;
    });
}
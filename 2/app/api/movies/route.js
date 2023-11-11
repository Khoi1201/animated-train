const DB_ENDPOINT = process.env.DB_ENDPOINT
const API_KEY = process.env.API_KEY

var data = JSON.stringify({
  collection: 'movies',
  database: 'sample_mflix',
  dataSource: 'Cluster0',
  limit:10
})

export async function GET() {
  const res = await fetch(DB_ENDPOINT + '/action/find', {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': API_KEY,
    },
    body: data,
    method: 'POST',
  })
  const movies = await res.json()

  return Response.json({ movies })
}

export default function handler(req, res) {
  // 1. Get data from the request (Query parameters)
  const { name = 'World' } = req.query;

  // 2. Set the response header to JSON
  res.setHeader('Content-Type', 'application/json');

  // 3. Send back a structured response
  res.status(200).json({
    message: `Hello, ${name}!`,
    timestamp: new Date().toISOString(),
    status: "Success"
  });
}

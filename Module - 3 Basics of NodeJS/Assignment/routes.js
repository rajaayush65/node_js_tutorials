const routeHandler = (req, res) => {
  const url = req.url;
  const method = req.method
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Welcome</title><head>");
    res.write("<body><h1>Hello Welcome to Assignment</h1>");
    res.write(
      "<form action='/create-user' method='POST'><input type='text' name='username' /><button type='submit'>Submit</button> "
    );
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }
  if (url === "/users") {
    res.write("<html>");
    res.write("<head><title>User List</title><head>");
    res.write("<body><ul><li>User 1</li><li>User 2</li></ul></body>");
    res.write("</html>");
    return res.end();
  }
  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      console.log(message);
    });
    res.status = 302;
    res.setHeader("Location", "/");
    res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Oops!</title><head>");
  res.write("<body><h1>Wrong Route</h1></body>");
  res.write("</html>");
  res.end();
};

module.exports = routeHandler;

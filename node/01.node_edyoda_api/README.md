To build a simple Node.js API that connects to MongoDB Compass and retrieves data from a database named "edyoda" and a collection named "details," you can use the `mongodb` driver for Node.js. Make sure you have Node.js installed on your system. 

Here's a step-by-step guide:

1. **Initialize a Node.js Project**:

   Open your terminal and create a new directory for your project. Inside the project directory, run the following command to initialize a new Node.js project:

   ```bash
   npm init -y
   ```

   This will create a `package.json` file for your project.

2. **Install Required Dependencies**:

   Install the `express` and `mongodb` packages, which we'll use for building the API and connecting to MongoDB:

   ```bash
   npm install express mongodb
   ```

3. **Create an Express.js Server**:

   Create an `index.js` file and set up an Express.js server. In this example, we'll create a simple API route that connects to MongoDB and retrieves data.

4. **Replace the MongoDB Connection URI**:

   Replace the `MONGODB_URI` variable value with your MongoDB connection string. Make sure your MongoDB server is running.

5. **Run the Node.js Server**:

   In your terminal, run the Node.js server:

   ```bash
   node index.js
   ```

   Your server should start and listen on port 8000.

6. **Access the API**:

   Open your web browser or use a tool like `curl` or `Postman` to access the API endpoint:

   ```
   http://localhost:8000/details
   ```

   You should receive a JSON response with the data from your MongoDB collection.
# Photo Gallery
Simple photo gallery created with Nodejs, MongoDB and S3 Bucket.

<img src="https://github.com/gnwx/photo-gallery/assets/77449139/41b73f1d-a4b7-49cd-b319-f92603e1f412" height="500px" />


## Development
To set up and run the development environment, follow these steps:

1- Clone the repository:

```bash
git clone https://github.com/gnwx/photo-gallery.git
```

2- Navigate to the project directory and install dependencies:


`cd photo-gallery && npm install`

3- Edit the .env files in the client and server folders. Provide the necessary configuration values:


client/.env example:

`VITE_BASE_URL="http://localhost:4000/api/"`


server/.env example:

```
PORT=4000
MONGODB_URI="mongodb+srv://<username>:<password>@<projectName>/?retryWrites=true&w=majority"
JWT_SECRET="<yourSecret>"


AWS_ACCESS_KEY_ID="<yourAccessKey>"
AWS_ACCESS_KEY_SECRET="<yourSecretKey>"
AWS_BUCKET_NAME="<yourS3BucketName>"
AWS_REGION="<yourRegion>"
 ```
Replace `username`, `password`, `projectName`, `yourSecret`, `yourAccessKey`, `yourSecretKey`, `yourS3BucketName`, and `yourRegion` with the appropriate values.

4- Once the .env files are configured, run the following command in separate terminals to start the client and server:

```bash
// In the client directory
npm run dev

// In the server directory
npm run dev
```

# Image Upload to MinIO using Multer

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)

## Introduction
This project demonstrates how to upload images to MinIO using Multer in an Express.js application. MinIO is a high-performance, S3-compatible object storage. Multer is a middleware for handling `multipart/form-data`, which is primarily used for uploading files.

## Features
- Upload images to MinIO.
- Retrieve images from MinIO. **In Upcoming Release**
- Uses Multer for handling file uploads.

## Prerequisites
Before you begin, ensure you have met the following requirements:
- Node.js (v16 or v18 preferred)
- MinIO server (running and accessible)
- npm (Node Package Manager)

## Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/yash-k2001/minio-image-uploading.git
    cd yourproject
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add your MinIO configuration:
    ```env
    MINIO_END_POINT=host
    MINIO_PORT=9000
    MINIO_ACCESS_KEY=youraccesskey
    MINIO_SECRET_KEY=yoursecretkey
    MINIO_BUCKET_NAME=yourbucketname
    ```

## Usage
1. Start the server:
    ```sh
    npm start
    ```

2. Use an API client (like Postman) to test the endpoints.

## Project Structure
```plaintext
yourproject
│   .env
│   .gitignore
│   package.json
│   README.md
│
└───src
    │   app.js
    │   server.js
    │
    ├───config
    │       minioClient.js
    │
    ├───controllers
    │       uploadController.js
    │
    ├───routes
    │       uploadRoutes.js
    │
    └───middlewares
            multerConfig.js

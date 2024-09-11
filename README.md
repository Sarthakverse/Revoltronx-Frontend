
# Unified Search App


The Unified Search App is a web application that allows users to search for content across different platforms. The app provides a simple, user-friendly interface where users can input search queries and filter the results based on the type of content (like videos or articles). The results include data such as titles, descriptions, URLs, thumbnails, views, and likes, and are fetched from a backend API.

# Features
- **`Search Functionality:`** Users can enter a search query and specify - how many results they want to display.
- **`Filter Results:`** Results can be filtered to show all results, videos (from YouTube), or articles (other sources).
- **`Display Results:`** Results are displayed with key details like:

```http
   Title
   Snippet (short description)
   Link to the content
   Thumbnail (if available)
   Views and Likes (if available)
```

# Technologies Used
- **`React.js:`** JavaScript library for building the user interface.
- **`Axios:`** For making HTTP requests to the backend API to fetch search results.
- **`Tailwind CSS:`** For styling and making the UI responsive.

# How to Run the Project Locally
- Clone the repository:
```http
git clone https://github.com/Sarthakverse/Revoltronx-Frontend.git
cd Revoltronx-Frontend
```
- Install dependencies:
```http
npm install
```
- Start the frontend:
```http
npm start
```
The app will be running on http://localhost:3000. Make sure the backend API is running on http://localhost:8080.





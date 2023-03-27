# Everything You Need to Start Using Firebase Authentication V9

This project was inspired by Web Dev Simplified on YouTube, which made a tutorial about Firebase V8. So I updated it for Firebase V9 and added some cool features like auto-redirect when a user is logged in and trying to access the login page.

Perfect to quickstart any new project which needs user authentication!

## Features

- User authentication with Firebase V9
- Auto-redirect when a user is logged in and trying to access the login page
- Easy setup with just a `.env.local` file for Firebase credentials

## How to Use

The only thing you have to do is create a `.env.local` file with your Firebase credentials in your project directory.

1. Clone the repository to your local machine.
2. Create a new Firebase project on the Firebase console.
3. Go to the project settings and copy the Firebase configuration.
4. Create a `.env.local` file in the root of the project directory.
5. Paste the Firebase configuration into the `.env.local` file and save it. It should look something like this:

```bash
REACT_APP_FIREBASE_API_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
REACT_APP_FIREBASE_AUTH_DOMAIN=your-app-name.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your-app-name
REACT_APP_FIREBASE_STORAGE_BUCKET=your-app-name.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=xxxxxxxxxxxx
REACT_APP_FIREBASE_APP_ID=1:xxxxxxxxxxxx:web:xxxxxxxxxxxxxxxx
```

6. Install the dependencies by running `npm install`.
7. Run the app with `npm start`.

That's it! You should now have a fully functioning Firebase Authentication V9 system in your app.

## Contributing

If you find any issues with the code or have any suggestions for improvements, feel free to submit a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

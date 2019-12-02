import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp(functions.config().firebase);

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const updateLikesCount = functions.https.onRequest((request,response)=>{
    const body = request.body;
    console.log(body);
    const postId = body.postId;
    const userId = body.user.Id;
    const action = body.action;

    
})
export const helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});

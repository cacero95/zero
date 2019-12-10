import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp(functions.config().firebase);
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const updateDataDba = functions.https.onRequest((request,response)=>{
    const body = request.body;
    const push_data = {
        name:body.name,
        description:body.description,
        url:body.url
    };
    admin.database().ref("imagenes").update(push_data).then((output)=>{
        console.log('salida ok')
        console.log(output);
        response.status(200).send('Done');
    }).catch((err)=>{
        console.log('salida err');
        console.log(err);
        response.status(400).send();
    })
});
export const helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});

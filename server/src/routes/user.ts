import * as admin from "firebase-admin";


interface IUser {
  username: string;
  email: string;
}

const userRoutes = (app) => {
  app.get("/user/new", (req, res) => {


admin
  .auth()
  .createUser({
    email: "dalthage@monigle.com",
    emailVerified: false,
    phoneNumber: "+13019109739",
    password: "secretPassword",
    displayName: "Drew Althage",
    photoURL: "https://ca.slack-edge.com/TAKHU9TS5-UAMCBH2NS-57c61973c234-512",
    disabled: false,
  })
  .then(function (userRecord) {
    // See the UserRecord reference doc for the contents of userRecord.
    console.log("Successfully created new user:", userRecord.uid);
    res.status(200).send({ newUser: userRecord.uid });
  })
  .catch(function (error) {
    console.log("Error creating new user:", error);
  });


    // db.collection("users")
    //   .get()
    //   .then((snapshot) => {
    //     let result: Array<IWildfire> = [];
    //     snapshot.forEach((doc) => {
    //       console.log(doc.id, "=>");

    //       const input = doc.data();

    //       result.push({
    //         title: input.title,
    //         location: input.location,
    //       });
    //     });
    //     res.status(200).send({ wildfire: result });
    //   })
    //   .catch((err) => {
    //     console.log("Error getting documents", err);
    //     res.status(500).send("something went wrong");
    //   });
  });
};

module.exports = userRoutes;

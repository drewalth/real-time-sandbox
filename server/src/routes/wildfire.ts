interface IWildfire {
  title: string;
  location: string;
}

const wildfireRoutes = (app, db) => {
  app.get("/wildfire", (req, res) => {
    db.collection("wildfire")
      .get()
      .then((snapshot) => {
        let result: Array<IWildfire> = [];
        snapshot.forEach((doc) => {
          console.log(doc.id, "=>");

          const input = doc.data();

          result.push({
            title: input.title,
            location: input.location,
          });
        });
        res.status(200).send({ wildfire: result });
      })
      .catch((err) => {
        console.log("Error getting documents", err);
        res.status(500).send("something went wrong");
      });
  });
};

module.exports = wildfireRoutes;

import PouchDb from "pouchdb";

const db = new PouchDb("mypouchdb");

db.info().then((info) => {
  // eslint-disable-next-line no-console
  console.log("Show me ", info);
});

export async function insertToDB(data) {
  try {
    const response = await db.post(data);
    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
  return null;
}

export function getToDB() {
  const val = db
    .allDocs({ include_docs: true, descending: true }, (err, doc) => doc.rows)
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.error(err);
    });
  return val;
}

export async function removeToDB(id) {
  try {
    const doc = await db.get(id);
    db.remove(doc);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
}

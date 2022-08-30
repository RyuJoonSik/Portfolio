import {
  DocumentData,
  getFirestore,
  query,
  Query,
  QueryConstraint,
  QueryDocumentSnapshot,
} from "firebase/firestore";

import firebaseApp from "./initFirebase";

export const dailyLifePostPath = "dailyLifePosts";

export function getDocsData(docs: QueryDocumentSnapshot[]) {
  return docs.map((doc) => ({ ...doc.data(), id: doc.id }));
}

export function queryWithUndefined(
  queryBase: Query<DocumentData>,
  ...queryConstraints: (QueryConstraint | undefined)[]
) {
  const filteredArgs = queryConstraints.filter(
    (queryConstraint) => queryConstraint
  ) as QueryConstraint[];

  return query(queryBase, ...filteredArgs);
}

const fireStore = getFirestore(firebaseApp);

export default fireStore;

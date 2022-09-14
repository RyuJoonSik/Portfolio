import {
  collection,
  DocumentData,
  DocumentSnapshot,
  getFirestore,
  limit,
  orderBy,
  OrderByDirection,
  query,
  Query,
  QueryConstraint,
  QueryDocumentSnapshot,
  startAfter,
} from "firebase/firestore";

import firebaseApp from "./initFirebase";

export const dailyLifePostPath = "dailyLifePosts";

export function getDocsData<T>(docs: QueryDocumentSnapshot[]) {
  return docs.map((doc) => ({ ...(doc.data() as T), id: doc.id }));
}

export function queryWithNull(
  baseQuery: Query<DocumentData>,
  ...queryConstraints: (QueryConstraint | null)[]
) {
  const filteredArgs = queryConstraints.filter(
    (queryConstraint) => queryConstraint
  ) as QueryConstraint[];

  return query(baseQuery, ...filteredArgs);
}

export function createDailyLifePostQuery(
  orderDirection: OrderByDirection,
  lastSnapshot: DocumentSnapshot | null,
  offset = 5
) {
  return queryWithNull(
    collection(fireStore, dailyLifePostPath),
    orderBy("requestedAt", orderDirection),
    lastSnapshot ? startAfter(lastSnapshot) : null,
    limit(offset)
  );
}

const fireStore = getFirestore(firebaseApp);

export default fireStore;

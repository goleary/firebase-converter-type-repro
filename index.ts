import { FirestoreDataConverter } from "firebase/firestore";

import firebase from "firebase/compat/app";

import "firebase/compat/firestore";

type Thingy = {
  name: string;
};

let converter1: FirestoreDataConverter<Thingy> = {
  fromFirestore: (snapshot) => ({
    name: snapshot.get("name") ?? "noname",
  }),
  toFirestore: (model) => model,
};

const converter2: firebase.firestore.FirestoreDataConverter<Thingy> = {
  fromFirestore: (snapshot) => ({
    name: snapshot.get("name") ?? "noname",
  }),
  toFirestore: (model) => model,
};

converter1 = converter2;

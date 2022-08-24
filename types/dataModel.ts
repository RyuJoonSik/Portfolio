import { Timestamp } from "firebase/firestore";

export interface DailyLifePostDocument {
  id: string;
  title: string;
  content: string;
  downloadURL: string;
  requestedAt: Timestamp;
}

export interface DailyLifePostItem {
  title: string;
  content: string;
  downloadURL?: string;
}

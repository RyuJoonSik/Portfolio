import { Timestamp } from "firebase/firestore";

export interface DailyLifePost {
  id: string;
  title: string;
  content: string;
  downloadURL: string;
  requestedAt: Timestamp;
}

export interface DailyLifePostInput {
  title: string;
  content: string;
  downloadURL?: string;
}

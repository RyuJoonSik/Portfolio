import { Timestamp } from "firebase/firestore";

export interface DailyLifePost {
  id: string;
  title: string;
  content: string;
  downloadURL: string | null;
  requestedAt: Timestamp;
}

export type DailyLifePostInput = {
  title: string;
  content: string;
  downloadURL?: string;
};

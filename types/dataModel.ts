import { Timestamp } from "firebase/firestore";

export interface DailyLifePost {
  id: string;
  title: string;
  content: string;
  imageURL: string | null;
  imagePath: string | null;
  requestedAt: Timestamp;
}

export type DailyLifePostInput = {
  title: string;
  content: string;
  imageURL?: string | null;
  imagePath?: string | null;
};

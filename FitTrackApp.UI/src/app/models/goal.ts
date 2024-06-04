
export interface Goal {
  id: number;
  activityId: number;
  userId: number;
  measureUnit: string;
  durationUnit: string;
  duration?: number;
  frequency?: number;
  createdDate?: Date;
  updatedDate?: Date;
  activity: string;
  user: string;
}
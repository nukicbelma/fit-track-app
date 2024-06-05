
export interface Goal {
  id: number;
  activityId: number;
  durationUnit: string;
  duration?: number;
  frequency?: number;
  createdDate?: Date;
  updatedDate?: Date;
}
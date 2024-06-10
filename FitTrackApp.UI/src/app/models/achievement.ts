export interface Achievement {
  id: number;
  goalId: number;
  date: Date;
  achievedTime?: number;
  achievedFrequency?: number;
  achieved: boolean;
}

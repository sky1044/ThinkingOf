export interface Person {
  id: string;
  name: string;
  nickname?: string;
  tags: string[];
  notes?: string;
  createdAt: Date;
}

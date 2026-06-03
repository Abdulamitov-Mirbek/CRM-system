export interface Pipeline {
  id: string;
  name: string;
  stages: Stage[];
}

export interface Stage {
  id: string;
  name: string;
  order: number;
}

export interface Deal {
  id: string;
  title: string;
  description?: string;
  value: number;
  contactId: string;
  contactName: string;
  stageId: string;
  stageName: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateDealDto {
  title: string;
  description?: string;
  value: number;
  contactId: string;
  stageId: string;
}

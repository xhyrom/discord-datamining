export interface Section {
  id: number;
  description: string;
  created_at: string;
  updated_at: string;
  sorting: string;
}

export interface Experiment {
  data: {
    hash: number;
    kind: string;
  };
  rollout: any;
}

export {};

import { ITask } from "./task";

export interface IJourney {
    id: number; 
    name: string;
    description: string;
    duration: string;
    imgUrl: string;
    currentTask: ITask;
    tasks: ITask[];
    totalTasks: number;
    completedTasks: number;
    completionPercentage: number;
}

export interface IUserJourneys {
    username: string;
    journeys: IJourney[];
}
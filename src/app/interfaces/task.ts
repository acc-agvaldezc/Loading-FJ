import { IYelpBusiness, IYelpReview } from "../interfaces/yelp";

export interface ITask {
    name: string;
    completed: boolean;
    taskData: IYelpBusiness;
    isCurrentTask: boolean;
}
import { IJourney } from "../interfaces/journeys";

const baseAmericanJourney: IJourney = {
    id: 1,
    name: 'American',
    description: 'One Characteristic of American cooking is the fusion of multiple ethnic or regional approaches into completely new cooking styles.',
    duration: '3 Weeks',
    imgUrl: '../assets/Icons/American.png',
    currentTask: null,
    totalTasks: 10,
    completedTasks: 0,
    completionPercentage: 0,
    tasks: null
}

const baseItalianJourney: IJourney = {
    id: 2,
    name: 'Italian',
    description: 'An Italian meal is famous for its structure into several sections: the appetiser, pasta or rice dish, a meat course and dolce dessert.',
    duration: '1 Weeks',
    imgUrl: '../assets/Icons/Italian.png',
    currentTask: null,
    totalTasks: 10,
    completedTasks: 0,
    completionPercentage: 0,
    tasks: null
}

const baseMexicanJourney: IJourney = {
    id: 3,
    name: 'Mexican',
    description: 'Known for its varied flavours and spices, the food of Mexico is a result of the Spanish conquistadores interaction with the Aztec culture.',
    duration: '2 Weeks',
    imgUrl: '../assets/Icons/Mexican.png',
    currentTask: null,
    totalTasks: 10,
    completedTasks: 0,
    completionPercentage: 0,
    tasks: null
}

const baseJapaneseJourney: IJourney = {
    id: 4,
    name: 'Japanese',
    description: 'In 2014, 14 restaurants in Tokyo and Shonan maintain a Michelin three-stars rating, the ultimate international recognition in the culinary world.',
    duration: '3 Weeks',
    imgUrl: '../assets/Icons/Japanese.png',
    currentTask: null,
    totalTasks: 10,
    completedTasks: 0,
    completionPercentage: 0,
    tasks: null
}

const baseKoreanJourney: IJourney = {
    id: 5,
    name: 'Korean',
    description: 'Korean cuisine has evolved through centuries of social and political change. Originating from ancient agricultural and nomadic traditions.',
    duration: '2 Weeks',
    imgUrl: '../assets/Icons/Korean.png',
    currentTask: null,
    totalTasks: 10,
    completedTasks: 0,
    completionPercentage: 0,
    tasks: null
}

export interface IBaseJourneys {
    American: IJourney,
    Italian: IJourney,
    Mexican: IJourney,
    Japanese: IJourney,
    Korean: IJourney
}

export const newJourneys: IBaseJourneys = {
    'American': baseAmericanJourney,
    'Italian': baseItalianJourney,
    'Mexican': baseMexicanJourney,
    'Japanese': baseJapaneseJourney,
    'Korean': baseKoreanJourney
}
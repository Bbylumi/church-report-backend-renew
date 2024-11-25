export interface PercentageDTO{
    level: String;
    amount: Number;
}


export interface createMonetaryDTO{
    name: String;
    date: String;
    percentages: PercentageDTO[];
}

export interface updateMonetaryDTO{
    name?: String;
    date?: String;
    percentages: PercentageDTO[];
}
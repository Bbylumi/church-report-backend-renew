export interface PercentageDTO{
    level: String;
    amount: Number;
}


export interface CreateMonetaryDTO{
    name: String;
    date: String;
    percentages: PercentageDTO[];
}

export interface UpdateMonetaryDTO{
    name?: String;
    date?: String;
    percentages: PercentageDTO[];
}
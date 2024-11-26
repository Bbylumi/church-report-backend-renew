export interface createMonetaryContributionDTO{
    type: String;
    levels: {
        percentage: number;
        amount: number;
    }[];
}


export interface updateMonetaryContributionDTO{
    type?: String;
    levels?: {
        percentage: number;
        amount: number;
    }
}
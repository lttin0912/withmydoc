export interface AlertRule {
    id: string;
    patient_name: string;
    type: string;
    severity: string;
    threshold_crossed: string;
    date_time: string;
    parameter: string;
    parameterLabel: string; MIN_VAL: number;
    MAX_VAL: number;
};
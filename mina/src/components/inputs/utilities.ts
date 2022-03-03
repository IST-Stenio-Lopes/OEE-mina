export interface NormalInputI {
    title: string;
    size: number;
    pValue?: string; //É o valor em sí do campo
    dValue?: string | number; //É o valor inicial preenchido no campo
    selfCode?: string;
    outCode?: string;
    msgErro?: string;
    error?: boolean;
    getValueInput?: (e: string) => void; //pegar o valor que está no campo digitado
    setValueInput?: (e: any) => void; //colocar um valor no campo digitado
}

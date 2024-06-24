export interface RadioOptions{
    name: string;
    value: string;
    id:string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
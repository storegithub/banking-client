import { SelectItem } from './helper.keyvalue';

export class TransacionReport
{
    public dateStart!: string;
    public dateEnd!: string;
    public type!: string;

    public typeOptions: SelectItem<string, string>[] = [];
}
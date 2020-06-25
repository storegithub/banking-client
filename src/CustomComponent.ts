import { Vue, Component, Prop } from 'vue-property-decorator';

export class CustomComponent extends Vue
{

    public prepareModel(item: any): string 
    { 
        let json: string = JSON.stringify(item);
        return json;
    }

    public bindName(name: string, id: number) : string
    {
        let test: string = `app-${name}-component-randed-${id}`;

        return test;
    }
}
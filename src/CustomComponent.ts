import { Vue, Component, Prop } from 'vue-property-decorator';

export class CustomComponent extends Vue
{

    public prepareModel = (item: any): string => JSON.stringify(item);

    public bindName = (name: string, id: number) : string => `app-${name}-component-randed-${id}`
}
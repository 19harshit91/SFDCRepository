import { LightningElement } from 'lwc';

export default class DemoComponent extends LightningElement {
    connectedCallback(){
        console.log('Connected callback method');
    }
}
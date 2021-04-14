import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class PageComponent extends Component {

    @service backend

    @tracked boxes = []

    constructor() {
        super(...arguments)
        this.load()
    }

    async load() {
        this.boxes = await this.backend.getCurrentPageElements()
        this.setTypes(this.boxes)
    }

    setTypes(boxes) {
        boxes.forEach(element => {
            if (element.type === "mittari") element.component = "boxes/gauge"
            if (element.type === "kytkin") element.component = "boxes/button"
        });
    }

}

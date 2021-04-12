import Component from '@glimmer/component';
import { action } from '@ember/object'
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class NavbarComponent extends Component {

    @service router
    @service backend

    @tracked showMenu = false
    @tracked menus = []

    constructor() {
        super(...arguments)
        this.load()
    }

    async load() {
        this.menus = await this.backend.getMenus()
    }

    @action
    toggleMenu() {
        this.showMenu = !this.showMenu
    }
}

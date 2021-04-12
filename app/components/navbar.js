import Component from '@glimmer/component';
import { action } from '@ember/object'
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class NavbarComponent extends Component {

    @service router

    @tracked showMenu = false

    @action
    toggleMenu() {
        this.showMenu = !this.showMenu
    }
}

import Component from '@glimmer/component';
import { action } from '@ember/object'
import { tracked } from '@glimmer/tracking';

export default class NavbarComponent extends Component {

    @tracked showMenu = false

    @action
    toggleMenu() {
        console.log("toggle", this.showMenu)
        this.showMenu = !this.showMenu
    }
}

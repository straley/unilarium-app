import { Component, Prop, State, Listen } from '@stencil/core';

enum NavState {
  Default = "",
  ShowNav = "show-nav",
  HideNav = "hide-nav"
}

@Component({
  tag: 'papercraft-layout',
  styleUrl: 'papercraft-layout.scss'
})
export class PapercraftLayout {
  @Prop() class?: string;
  @State() navState: NavState;

  @Listen('body:keydown.escape')
  handleEscape = () => {
    this.hideNav();
  }

  componentWillLoad() {
    this.navState = NavState.Default;
  }

  showNav = () => {
    if (this.navState === NavState.Default || this.navState === NavState.HideNav) {
      this.navState = NavState.ShowNav;
    }
  }

  hideNav = () => {
    if (this.navState === NavState.ShowNav) {
      this.navState = NavState.HideNav;
    }
  }

  render() {
    return (
      <slot/>
    );
  }
}

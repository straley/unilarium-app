import { Component, Prop, State, Listen } from '@stencil/core';

enum NavState {
  Default = "",
  ShowNav = "show-nav",
  HideNav = "hide-nav"
}

@Component({
  tag: 'papercraft-navigation',
  styleUrl: 'papercraft-navigation.scss'
})
export class PapercraftNavigation {
  @Prop() class?: string;
  @Prop() title?: string;
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
      <div id="wrapper">
        <div id="nav" class={this.navState}>
          hello
        </div>
        <div id="header">
          <papercraft-icon-button icon="menu" onClick={this.showNav.bind(this)}/>
        </div>
        <h2>{this.title}</h2>
        <div id="toolbar">
          <slot name="toolbar"/>
        </div>
      </div>
    );
  }
}

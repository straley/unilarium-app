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
  @State() enableOutlines: boolean;
  @Prop() caption?: string;
  @State() navState: NavState;

  // close the menu on escape
  @Listen('body:keydown.escape')
  handleEscape = () => {
    this.hideNav();
  }

  // if the user used the tab key, turn on accessibility outlines
  @Listen('body:keydown.tab')
  _enableOutline = () => {
    this.enableOutlines = true;
  }

  // if they click, turn off the outlines
  @Listen('body:click')
  _disableOutline = () => {
    this.enableOutlines = false;
  }

  // set the default navState
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

  render = () => (
    <div class={this.enableOutlines ? "" : "disable-outlines"}>
      <div id="modal-mask" class={this.navState}/>
      <div id="nav" class={this.navState}>
        <slot name="nav"/>
      </div>
      <div id="header">
        <papercraft-icon-button icon="menu" onSelect={this.showNav} denyTabFocus={this.navState === NavState.ShowNav} />
        <h2>{this.caption}</h2>
      </div>
      <div id="toolbar">
        <slot name="toolbar"/>
      </div>
      <div id="contents">
        <slot/>
      </div>
    </div>
  );
}

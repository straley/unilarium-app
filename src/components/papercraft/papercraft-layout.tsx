import { Component, Prop, State, Listen } from '@stencil/core';

@Component({
  tag: 'papercraft-layout',
  styleUrl: 'papercraft-layout.scss'
})
export class PapercraftLayout {
  @Prop() class?: string;
  @State() enableOutlines: boolean;

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

  render = () =>
    <div class={this.enableOutlines ? "" : "disable-outlines"}>
      <slot/>
    </div>;
}

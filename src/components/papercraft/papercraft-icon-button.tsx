import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'papercraft-icon-button',
  styleUrl: 'papercraft-icon-button.scss'
})
export class PapercraftIconButton {
  @Prop() class?: string;
  @Prop() icon?: string;

  render() {
    return this.icon ?
      (
        <papercraft-material-icon icon={this.icon}><slot></slot></papercraft-material-icon>
      ) :
      (
        <slot></slot>
      );
  }
}

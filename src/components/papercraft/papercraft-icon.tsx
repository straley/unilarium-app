import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'papercraft-icon',
  styleUrl: 'papercraft-icon.scss'
})
export class PapercraftIcon {
  @Prop() class?: string;
  @Prop() src?: string;

  render() {
    return (
      <slot></slot>
    );
  }
}

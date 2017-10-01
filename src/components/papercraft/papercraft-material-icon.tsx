import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'papercraft-material-icon',
  styleUrl: 'papercraft-material-icon.scss'
})
export class PapercraftMaterialIcon {
  @Prop() class: string;
  @Prop() icon: string;

  render() {
    return (
      <papercraft-icon><i class="material-icons">{this.icon}</i></papercraft-icon>
    );
  }
}

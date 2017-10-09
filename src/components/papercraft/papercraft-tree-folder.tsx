import { Component, Prop, Listen } from '@stencil/core';

@Component({
  tag: 'papercraft-tree-folder',
  styleUrl: 'papercraft-tree-folder.scss'
})
export class PapercraftDirectoryTree {
  @Prop() class?: string;
  @Prop() onSelect?: Function;

  render() {
    return (
      <ul>
        <li>

        </li>
      </ul>
    );
  }
}

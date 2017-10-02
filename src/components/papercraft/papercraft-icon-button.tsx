import { Component, Prop, Listen } from '@stencil/core';

@Component({
  tag: 'papercraft-icon-button',
  styleUrl: 'papercraft-icon-button.scss'
})
export class PapercraftIconButton {
  @Prop() class?: string;
  @Prop() icon?: string;            // google material-icon icon name
  @Prop() denyTabFocus?: boolean;   // show we prevent tab-focusing to this
  @Prop() onSelect?: Function;      // when a button is clicked, or the enter or tab key are pressed when outlined

  @Listen('keydown')
  _handleKeyPress = (event) => (typeof this.onSelect === "function" && (event.code === "Enter" || event.code === "Space")) && this.onSelect();


  @Listen('click')
  _handleClick = () => (typeof this.onSelect === "function") && this.onSelect();

  render() {
    const contents = this.icon ? <papercraft-material-icon icon={this.icon}><slot></slot></papercraft-material-icon> : <slot/>;

    // it doesn't appear that tabindex can be set with a {variable}, so we need to do this conditional
    return this.denyTabFocus ? <div role="button">{contents}</div> : <div role="button" tabindex="0">{contents}</div>;
  }
}

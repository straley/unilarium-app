import { Component, Prop, State } from '@stencil/core';

enum PanelState {
  Default = "",
  ShowPanel = "show-panel",
  HidePanel = "hide-panel"
}

@Component({
  tag: 'papercraft-expansion-panel',
  styleUrl: 'papercraft-expansion-panel.scss'
})
export class PapercraftExpansionPanel {
  @Prop() class?: string;
  @Prop() primary?: string;
  @Prop() secondary?: string;
  @Prop() value?: string;
  @Prop() open: boolean;

  @State() panelState: PanelState;

  // transfer open prop to state
  componentWillLoad() {
    this.panelState = this.open === true ? PanelState.ShowPanel : PanelState.Default;
  }

  toggle = () => {
    console.log(this.panelState);
    this.panelState = (this.panelState === PanelState.ShowPanel) ? PanelState.HidePanel : PanelState.ShowPanel;
    console.log(this.panelState);
  }

  render = () => (
    <div class={this.panelState} >
      <div class="header">
        <div class="label">
          <div class="primary">{this.primary}</div>
          <div class="secondary">{this.secondary}</div>
        </div>
        <div class="value">{this.value}</div>
        <papercraft-icon-button icon={
          this.panelState === PanelState.ShowPanel ?
          "keyboard_arrow_up" :
          "keyboard_arrow_down"
        } onSelect={this.toggle} />
      </div>
      <div class="contents">
        <slot/>
      </div>
    </div>
  );
}

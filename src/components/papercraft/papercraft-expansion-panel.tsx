import { Component, Prop, State, Listen, Element } from '@stencil/core';
import { getAssignedStyles } from '../../lib/style';

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
  @Prop() openable?: boolean;
  @Prop() open: boolean;
  @Prop() hideHeader: boolean;
  @Prop() height?: string|number;
  @Prop() backgroundColor?: string;

  @State() panelState: PanelState;

  @Element() element: HTMLElement;

  // close the panel on escape
  @Listen('keydown.escape')
  close = () => {
    this.panelState = PanelState.HidePanel;
  }

  // toggle the panel on enter or space
  @Listen('keydown.enter,keydown.space')
  toggle = () => {
    this.panelState = (this.panelState === PanelState.ShowPanel) ? PanelState.HidePanel : PanelState.ShowPanel;
  }

  // transfer open prop to state
  componentWillLoad() {
    this.panelState = this.open === true ? PanelState.ShowPanel : PanelState.Default;
  }

  render = () => {
    const style:any = getAssignedStyles(this.element);

    return(
      <div class={`${this.panelState}`} tabindex="0" style={{
        ...(style.backgroundColor && {backgroundColor: style.backgroundColor}),
        ...(style.height && {minHeight: style.height}),
      }}>
        {
          (!this.hideHeader) && (
            <div class="header">
              <div class="label">

                <div class="primary">{this.primary}</div>
                <div class="secondary">{this.secondary}</div>
              </div>
              <div class="value">{this.value}</div>
              {
                this.openable && (
                  <papercraft-icon-button denyTabFocus icon={
                    this.panelState === PanelState.ShowPanel ?
                    "keyboard_arrow_up" :
                    "keyboard_arrow_down"
                  } onSelect={this.toggle} />
                )
              }
            </div>
          )
        }
        <div class="contents">
          <slot/>
        </div>
      </div>
    );
  }
}

import { Component, Prop, State, Listen, Element } from '@stencil/core';

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

  componentDidLoad() {
    //console.log();
  }

  _getComputedStyle = (sourceStyleName:string, exclude?:string[], targetStyleName?:string):any => {
    const dashedStyleName:string = sourceStyleName.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`);
    //console.log(sourceStyleName, "to", targetStyleName);
    if (!window || !this.element) {
      return null;
    }

    console.log("HERE", this.element.nodeName, this.getStyleRuleValue(dashedStyleName, this.element.nodeName));

    const style = window.getComputedStyle(this.element).getPropertyValue(dashedStyleName);
    console.log("css", JSON.stringify(this.element.className));
    //const style = this.element.runtimeStyle;
    //console.log(style, "in", exclude, "?");
    if (!style || (exclude && exclude.includes(style))) {
      return null;
    }

    console.log({[targetStyleName || sourceStyleName]: style});
    return {[targetStyleName || sourceStyleName]: style};
  }

  getStyleRuleValue = (style:string, selector:string, sheet?:any) => {
    var sheets = typeof sheet !== 'undefined' ? [sheet] : document.styleSheets;
    for (var i = 0, l = sheets.length; i < l; i++) {
      var sheet = sheets[i];
      if( !sheet.cssRules ) { continue; }
      for (var j = 0, k = sheet.cssRules.length; j < k; j++) {
        var rule = sheet.cssRules[j];
        if (rule.selectorText && rule.selectorText.split(',').indexOf(selector) !== -1) {
          return rule.style[style];
        }
      }
    }
    return null;
  }

  render = () => (
    <div class={`${this.panelState}`} tabindex="0" style={{
        ...(this._getComputedStyle("backgroundColor", ["rgba(0, 0, 0, 0)"])),
        /* ...(this._getComputedStyle("height", ["auto"])), */
      }}>
      {
        (!this.hideHeader) && (
          <div class="header" style={{
          }}>
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

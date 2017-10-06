import { Component } from '@stencil/core';

@Component({
  tag: 'unilarium-app',
  styleUrl: 'unilarium-app.scss'
})

export class App {
  render = () => (
    <papercraft-layout caption="Unilarium">
      <papercraft-icon-button slot="toolbar" icon="account_circle"/>
      <papercraft-icon-button slot="toolbar" icon="code"/>
      <papercraft-icon-button slot="toolbar" icon="grade"/>
      <papercraft-expansion-panel slot="nav" hideHeader class="nav-header">
        <unilarium-brand class="unilarium-brand" color="#fff"/>
      </papercraft-expansion-panel>
      <papercraft-expansion-panel slot="nav" primary="Hello" value="there" openable>X</papercraft-expansion-panel>
      <papercraft-expansion-panel slot="nav" primary="Project" value="another-app" openable>
        <papercraft-tree-folder open ready>
          mainfolder
          <papercraft-tree-folder onOpen={()=>{console.log(this);}}/>
          <papercraft-tree-file hidden>.gitignore</papercraft-tree-file>
          <papercraft-tree-file>something.js</papercraft-tree-file>
        </papercraft-tree-folder>
      </papercraft-expansion-panel>

      <div>TEST</div>
      <div>TEST</div>
      <div>TEST</div>
      <div>TEST</div>
      <div>TEST</div>
      <div>TEST</div>
      <div>TEST</div>
      <div>TEST</div>
      <div>TEST</div>
      <div>TEST</div>
      <div>TEST</div>
      <div>TEST</div>
      <div>TEST</div>
      <div>TEST</div>
      <div>TEST</div>
      <div>TEST</div>
      <div>TEST</div>
    </papercraft-layout>
  );
}

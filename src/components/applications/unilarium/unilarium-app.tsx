import { Component } from '@stencil/core';

@Component({
  tag: 'unilarium-app',
  styleUrl: 'unilarium-app.scss'
})

export class App {
  render = () => (
    <papercraft-layout title="Unilarium">
      <papercraft-icon-button slot="toolbar" icon="account_circle"/>
      <papercraft-icon-button slot="toolbar" icon="code"/>
      <papercraft-icon-button slot="toolbar" icon="grade"/>
      <papercraft-expansion-panel slot="nav" primary="Project" secondary="1,240 files" value="unilarium-app">
        <div>BLAH</div> <div>BLAH</div>
      </papercraft-expansion-panel>
      <papercraft-expansion-panel slot="nav" primary="Project" value="another-app">
        <div>BLAH</div> <div>BLAH</div> <div>BLAH</div> <div>BLAH</div> <div>BLAH</div> <div>BLAH</div>
        <div>BLAH</div> <div>BLAH</div> <div>BLAH</div> <div>BLAH</div> <div>BLAH</div> <div>BLAH</div>
        <div>BLAH</div> <div>BLAH</div> <div>BLAH</div> <div>BLAH</div> <div>BLAH</div> <div>BLAH</div>
        <div>BLAH</div> <div>BLAH</div> <div>BLAH</div> <div>BLAH</div> <div>BLAH</div> <div>BLAH</div>
        <div>BLAH</div> <div>BLAH</div>
      </papercraft-expansion-panel>
      <papercraft-expansion-panel slot="nav" primary="Project" secondary="41 files" value="freds-app">
        <div>BLAH</div> <div>BLAH</div>
      </papercraft-expansion-panel>
      <papercraft-expansion-panel slot="nav" primary="Project" value="nobodys-app">
        <div>BLAH</div> <div>BLAH</div> <div>BLAH</div> <div>BLAH</div> <div>BLAH</div> <div>BLAH</div>
        <div>BLAH</div> <div>BLAH</div> <div>BLAH</div> <div>BLAH</div> <div>BLAH</div> <div>BLAH</div>
        <div>BLAH</div> <div>BLAH</div> <div>BLAH</div> <div>BLAH</div> <div>BLAH</div> <div>BLAH</div>
        <div>BLAH</div> <div>BLAH</div> <div>BLAH</div> <div>BLAH</div> <div>BLAH</div> <div>BLAH</div>
        <div>BLAH</div> <div>BLAH</div>
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

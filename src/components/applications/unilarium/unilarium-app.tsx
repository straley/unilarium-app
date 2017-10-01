import { Component } from '@stencil/core';

@Component({
  tag: 'unilarium-app',
  styleUrl: 'unilarium-app.scss'
})

export class App {
  render = () =>
    <div class="app">
    <papercraft-layout>
      <papercraft-navigation title="Unilarium">
        <papercraft-icon-button slot="toolbar" icon="account_circle"/>
        <papercraft-icon-button slot="toolbar" icon="code"/>
        <papercraft-icon-button slot="toolbar" icon="grade"/>
      </papercraft-navigation>
      <p>hello</p>
    </papercraft-layout>
  </div>;
}

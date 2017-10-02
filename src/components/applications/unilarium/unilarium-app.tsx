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

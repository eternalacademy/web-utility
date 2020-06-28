import { Component, Prop, h, Host } from '@stencil/core';
import { MessageHelper } from '../../utils/helpers/message.helper';

@Component({
  tag: 'eawu-iframe-root-link',
  styleUrl: 'iframe-root-link.css',
  shadow: true
})
export class IframeRootLink {

  @Prop() public url: string;

  render() {
    return (
    <Host onClick={this.buttonClickHandler}>
      <slot />
    </Host>
    );
  }

  private buttonClickHandler() {
    console.log('Button Clicked');
    if (this.url) {
      MessageHelper.sendToParent('iframe-link', { url: this.url });
    }
  }
}

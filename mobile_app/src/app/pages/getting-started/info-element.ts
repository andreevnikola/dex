import { Component, Input } from '@angular/core';
@Component({
  selector: 'info-element',
  template: `
    <div class="flex flex-col text-center mt-[3.5vw] z-20">
      <p
        class="font-black font-sans text-[10.5vw] text-purplish font-rubik tracking-wide leading-6"
        style="-webkit-text-stroke: 1px black"
      >
        {{ main_text }}
      </p>
      <p
        class="font-bold text-[#ffffff] text-[8.1vw] font-rubik tracking-tight"
        style="-webkit-text-stroke: 1px black"
      >
        {{ secondary_text }}
      </p>
    </div>
    <img
      class="absolute left-0 h-[85%] object-cover -mt-10 -z-10"
      style="object-position: 38% 0"
      [src]="image_url"
    />
  `,
  styles: [],
})
export class InfoElementComponent {
  @Input() main_text: string = '';
  @Input() secondary_text: string = '';
  @Input() image_url: string = '';
  constructor() {}
}

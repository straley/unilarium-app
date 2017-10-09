import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'unilarium-brand'
})

export class UnilariumBrand {
  @Prop() height?: string|number;
  @Prop() width?: string|number;
  @Prop() color?: string;
  @Prop() class?: string;

  render = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0" y="0" width={this.width} height={this.height}
      viewBox="0 0 270 65"
      class={this.class}
    >
      <g transform="matrix(1 0 0 1 135 32.5)" selected="true">
        <path d="M 311.585 521.428 L 306.48499999999996 521.428 C 305.645 521.428 305.22499999999997 521.008 305.22499999999997 520.168 L 305.22499999999997 492.088 C 305.22499999999997 491.24800000000005 305.645 490.82800000000003 306.48499999999996 490.82800000000003 L 311.585 490.82800000000003 C 312.42499999999995 490.82800000000003 312.84499999999997 491.24800000000005 312.84499999999997 492.088 L 312.84499999999997 494.06800000000004 L 313.085 494.06800000000004 C 313.565 493.10800000000006 314.375 492.32800000000003 315.515 491.72800000000007 C 316.655 491.12800000000004 317.965 490.8280000000001 319.445 490.8280000000001 L 321.125 490.8280000000001 C 324.605 490.8280000000001 327.105 492.10800000000006 328.625 494.66800000000006 C 329.985 492.10800000000006 332.325 490.8280000000001 335.645 490.8280000000001 L 337.385 490.8280000000001 C 340.465 490.8280000000001 342.795 491.66800000000006 344.375 493.34800000000007 C 345.955 495.0280000000001 346.745 497.4480000000001 346.745 500.60800000000006 L 346.745 520.168 C 346.745 521.008 346.325 521.428 345.485 521.428 L 340.385 521.428 C 339.545 521.428 339.125 521.008 339.125 520.168 L 339.125 500.968 C 339.125 499.68800000000005 338.865 498.778 338.345 498.238 C 337.82500000000005 497.698 336.925 497.428 335.64500000000004 497.428 L 334.14500000000004 497.428 C 331.38500000000005 497.428 330.00500000000005 498.968 330.00500000000005 502.048 L 330.00500000000005 520.168 C 330.00500000000005 521.008 329.56500000000005 521.428 328.68500000000006 521.428 L 323.64500000000004 521.428 C 322.80500000000006 521.428 322.38500000000005 521.008 322.38500000000005 520.168 L 322.38500000000005 500.968 C 322.38500000000005 499.68800000000005 322.11500000000007 498.778 321.57500000000005 498.238 C 321.035 497.698 320.12500000000006 497.428 318.845 497.428 L 316.985 497.428 C 314.225 497.428 312.845 498.948 312.845 501.988 L 312.845 520.168 C 312.845 521.008 312.425 521.428 311.58500000000004 521.428 Z M 216.305 521.428 C 213.145 521.428 210.705 520.588 208.985 518.908 C 207.26500000000001 517.2280000000001 206.405 514.808 206.405 511.648 L 206.405 500.608 C 206.405 497.448 207.26500000000001 495.028 208.985 493.348 C 210.705 491.668 213.145 490.82800000000003 216.305 490.82800000000003 L 230.16500000000002 490.82800000000003 C 231.04500000000002 490.82800000000003 231.485 491.24800000000005 231.485 492.088 L 231.485 520.168 C 231.485 521.008 231.04500000000002 521.428 230.16500000000002 521.428 L 225.12500000000003 521.428 C 224.28500000000003 521.428 223.86500000000004 521.008 223.86500000000004 520.168 L 223.86500000000004 518.188 L 223.62500000000003 518.188 C 223.18500000000003 519.268 222.40500000000003 520.078 221.28500000000003 520.6179999999999 C 220.16500000000002 521.1579999999999 218.985 521.4279999999999 217.74500000000003 521.4279999999999 Z M 284.885 521.428 L 282.905 521.428 C 279.825 521.428 277.49499999999995 520.588 275.91499999999996 518.908 C 274.335 517.2280000000001 273.54499999999996 514.808 273.54499999999996 511.648 L 273.54499999999996 492.088 C 273.54499999999996 491.24800000000005 273.965 490.82800000000003 274.80499999999995 490.82800000000003 L 279.905 490.82800000000003 C 280.74499999999995 490.82800000000003 281.16499999999996 491.24800000000005 281.16499999999996 492.088 L 281.16499999999996 511.288 C 281.16499999999996 512.568 281.43499999999995 513.4780000000001 281.97499999999997 514.018 C 282.515 514.558 283.405 514.828 284.645 514.828 L 286.865 514.828 C 289.625 514.828 291.005 513.308 291.005 510.268 L 291.005 492.08799999999997 C 291.005 491.248 291.425 490.828 292.265 490.828 L 297.305 490.828 C 298.185 490.828 298.625 491.248 298.625 492.08799999999997 L 298.625 520.168 C 298.625 521.008 298.185 521.428 297.305 521.428 L 292.265 521.428 C 291.425 521.428 291.005 521.008 291.005 520.168 L 291.005 518.188 L 290.765 518.188 C 290.325 519.268 289.54499999999996 520.078 288.425 520.6179999999999 C 287.305 521.1579999999999 286.125 521.4279999999999 284.885 521.4279999999999 Z M 152.345 521.428 L 147.245 521.428 C 146.405 521.428 145.985 521.008 145.985 520.168 L 145.985 497.01161 C 148.43535000000003 495.00932 150.56656 492.92896 152.32739 490.82800000000003 L 152.345 490.82800000000003 C 153.185 490.82800000000003 153.605 491.24800000000005 153.605 492.088 L 153.605 494.06800000000004 L 153.845 494.06800000000004 C 154.725 491.908 156.685 490.82800000000003 159.725 490.82800000000003 L 161.64499999999998 490.82800000000003 C 167.92499999999998 490.82800000000003 171.06499999999997 494.088 171.06499999999997 500.608 L 171.06499999999997 520.168 C 171.06499999999997 521.008 170.62499999999997 521.428 169.74499999999998 521.428 L 164.70499999999998 521.428 C 163.86499999999998 521.428 163.445 521.008 163.445 520.168 L 163.445 500.968 C 163.445 499.68800000000005 163.17499999999998 498.778 162.635 498.238 C 162.095 497.698 161.185 497.428 159.905 497.428 L 157.745 497.428 C 154.985 497.428 153.60500000000002 498.948 153.60500000000002 501.988 L 153.60500000000002 520.168 C 153.60500000000002 521.008 153.18500000000003 521.428 152.34500000000003 521.428 Z M 244.445 521.428 L 239.345 521.428 C 238.505 521.428 238.085 521.008 238.085 520.168 L 238.085 492.088 C 238.085 491.24800000000005 238.505 490.82800000000003 239.345 490.82800000000003 L 244.445 490.82800000000003 C 245.285 490.82800000000003 245.70499999999998 491.24800000000005 245.70499999999998 492.088 L 245.70499999999998 494.12800000000004 L 245.945 494.12800000000004 C 246.385 493.04800000000006 247.165 492.22800000000007 248.285 491.66800000000006 C 249.405 491.10800000000006 250.585 490.8280000000001 251.825 490.8280000000001 L 253.98499999999999 490.8280000000001 C 254.785 490.8280000000001 255.18499999999997 491.2480000000001 255.18499999999997 492.0880000000001 L 255.18499999999997 496.22800000000007 C 255.18499999999997 496.7080000000001 255.09499999999997 497.03800000000007 254.91499999999996 497.2180000000001 C 254.73499999999996 497.3980000000001 254.42499999999995 497.4680000000001 253.98499999999996 497.42800000000005 L 249.84499999999997 497.42800000000005 C 247.08499999999998 497.42800000000005 245.70499999999998 498.98800000000006 245.70499999999998 502.10800000000006 L 245.70499999999998 520.168 C 245.70499999999998 521.008 245.285 521.428 244.445 521.428 Z M 198.845 521.428 L 193.745 521.428 C 192.905 521.428 192.485 521.008 192.485 520.168 L 192.485 480.50800000000004 C 192.485 479.66800000000006 192.905 479.24800000000005 193.745 479.24800000000005 L 198.845 479.24800000000005 C 199.685 479.24800000000005 200.105 479.66800000000006 200.105 480.50800000000004 L 200.105 520.168 C 200.105 521.008 199.685 521.428 198.845 521.428 Z M 259.325 520.168 L 259.325 492.088 C 259.325 491.24800000000005 259.72499999999997 490.82800000000003 260.525 490.82800000000003 L 265.685 490.82800000000003 C 266.525 490.82800000000003 266.945 491.24800000000005 266.945 492.088 L 266.945 520.168 C 266.945 520.688 266.855 521.028 266.675 521.188 C 266.495 521.348 266.185 521.428 265.745 521.428 L 260.585 521.428 C 259.745 521.428 259.325 521.008 259.325 520.168 Z M 177.665 520.168 L 177.665 492.088 C 177.665 491.24800000000005 178.065 490.82800000000003 178.86499999999998 490.82800000000003 L 184.02499999999998 490.82800000000003 C 184.86499999999998 490.82800000000003 185.28499999999997 491.24800000000005 185.28499999999997 492.088 L 185.28499999999997 520.168 C 185.28499999999997 520.688 185.19499999999996 521.028 185.01499999999996 521.188 C 184.83499999999995 521.348 184.52499999999995 521.428 184.08499999999995 521.428 L 178.92499999999995 521.428 C 178.08499999999995 521.428 177.66499999999996 521.008 177.66499999999996 520.168 Z M 223.865 510.268 L 223.865 498.08799999999997 C 223.865 497.64799999999997 223.625 497.42799999999994 223.145 497.42799999999994 L 217.50500000000002 497.42799999999994 C 216.22500000000002 497.42799999999994 215.32500000000002 497.6979999999999 214.80500000000004 498.23799999999994 C 214.28500000000003 498.77799999999996 214.02500000000003 499.68799999999993 214.02500000000003 500.96799999999996 L 214.02500000000003 511.28799999999995 C 214.02500000000003 512.568 214.28500000000003 513.478 214.80500000000004 514.0179999999999 C 215.32500000000005 514.5579999999999 216.22500000000002 514.8279999999999 217.50500000000002 514.8279999999999 L 219.72500000000002 514.8279999999999 C 222.485 514.8279999999999 223.865 513.3079999999999 223.865 510.26799999999986 Z M 177.665 480.448 C 177.665 479.64799999999997 178.065 479.248 178.86499999999998 479.248 L 184.08499999999998 479.248 C 184.885 479.248 185.28499999999997 479.628 185.28499999999997 480.388 L 185.28499999999997 485.66799999999995 C 185.28499999999997 486.46799999999996 184.88499999999996 486.86799999999994 184.08499999999998 486.86799999999994 L 178.86499999999998 486.86799999999994 C 178.06499999999997 486.86799999999994 177.665 486.46799999999996 177.665 485.66799999999995 Z M 259.325 480.448 C 259.325 479.64799999999997 259.72499999999997 479.248 260.525 479.248 L 265.745 479.248 C 266.545 479.248 266.945 479.628 266.945 480.388 L 266.945 485.66799999999995 C 266.945 486.46799999999996 266.545 486.86799999999994 265.745 486.86799999999994 L 260.525 486.86799999999994 C 259.72499999999997 486.86799999999994 259.325 486.46799999999996 259.325 485.66799999999995 Z" fill={this.color || "#000"} fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal" transform="matrix(1 0 0 1 -217.607 -494.248)" />
        <g transform="matrix(1 0 0 1 -94.4011 -0.0346985)" fill={this.color || "#000"} stroke="none" class="" fill-opacity="1">
          <g transform="matrix(1 0 0 1 -0.000289917 0)">
            <g transform="matrix(1 0 0 1 0 0)">
              <g transform="matrix(1 0 0 1 0.000144958 0)">
                <g transform="matrix(1 0 0 1 0 0)">
                  <path d="M 70.67753601074219 111.78988647460938 C 67.18265533447266 112.75094604492188 63.38636016845703 114.12295532226562 59.513031005859375 115.88067626953125 C 57.92156219482422 116.6029052734375 56.387664794921875 117.35821533203125 54.92292022705078 118.13604736328125 L 54.92292022705078 112.07162475585938 C 55.69584655761719 111.69290161132812 56.481788635253906 111.32199096679688 57.2799072265625 110.95980834960938 C 61.870391845703125 108.87661743164062 66.4122314453125 107.28646850585938 70.67753601074219 106.19894409179688 Z" fill={this.color || "#000"} fill-rule="nonzero" stroke="none" stroke-width="0.3377420396645192" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal" transform="matrix(1 0 0 1 -63.8154 -125.874)" fill-opacity="1" />
                  <path d="M 82.35540008544922 104.40032958984375 C 88.9217758178711 104.21920776367188 93.73963165283203 105.83212280273438 95.31436920166016 109.30218505859375 C 98.55182647705078 116.43621826171875 86.85584259033203 128.71820068359375 69.19064331054688 136.73477172851562 C 51.52543640136719 144.75137329101562 34.580482482910156 145.466796875 31.343017578125 138.33279418945312 L 31.343017578125 138.33279418945312 C 29.078575134277344 133.3428955078125 34.1199951171875 125.83450317382812 43.399803161621094 119.02874755859375 L 43.399803161621094 126.02651977539062 C 39.580345153808594 129.50613403320312 37.71916198730469 132.76815795898438 38.72431182861328 134.98309326171875 C 40.72846221923828 139.3994140625 53.36890411376953 137.98049926757812 66.95751190185547 131.81390380859375 C 80.54613494873047 125.64730834960938 89.93721771240234 117.06817626953125 87.93305206298828 112.65185546875 C 87.23323822021484 111.1097412109375 85.23653411865234 110.27911376953125 82.35540008544922 110.11370849609375 Z" fill={this.color || "#000"} fill-rule="nonzero" stroke="none" stroke-width="0.5319470898920143" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal" transform="matrix(1 0 0 1 -63.8154 -125.874)" fill-opacity="1" />
                  <path d="M 73.92835235595703 98.72842407226562 L 79.2477798461914 98.72842407226562 C 80.2610092163086 98.72842407226562 80.76763153076172 99.17874145507812 80.76763153076172 100.07937622070312 L 80.76763153076172 121.5997314453125 C 78.63114166259766 123.47390747070312 75.8036117553711 125.443115234375 72.49295043945312 127.325927734375 L 72.49295043945312 100.163818359375 C 72.49295043945312 99.20687866210938 72.9714126586914 98.72842407226562 73.92835235595703 98.72842407226562 Z M 80.76763153076172 132.65304565429688 L 80.76763153076172 139.93292236328125 C 80.76763153076172 144.0421142578125 79.59960174560547 147.25067138671875 77.26355743408203 149.55859375 C 74.92750549316406 151.86651611328125 71.70488739013672 153.02047729492188 67.59568786621094 153.02047729492188 L 58.223350524902344 153.02047729492188 C 54.11415100097656 153.02047729492188 50.905601501464844 151.86651611328125 48.59770202636719 149.55859375 C 47.41277313232422 148.3736572265625 46.53204345703125 146.95135498046875 45.955482482910156 145.29159545898438 C 48.619239807128906 145.041015625 51.47990417480469 144.55673217773438 54.470703125 143.84112548828125 C 55.466217041015625 145.17599487304688 57.11113739013672 145.84341430664062 59.40544891357422 145.84341430664062 L 66.32915496826172 145.84341430664062 C 70.4383544921875 145.84341430664062 72.4929428100586 143.76071166992188 72.4929428100586 139.59518432617188 L 72.4929428100586 137.2607421875 C 75.43697357177734 135.8184814453125 78.20780181884766 134.26913452148438 80.76763153076172 132.65304565429688 Z M 45.135841369628906 135.58316040039062 L 45.135841369628906 100.163818359375 C 45.135841369628906 99.20687866210938 45.61431884765625 98.72842407226562 46.571250915527344 98.72842407226562 L 51.89068603515625 98.72842407226562 C 52.847625732421875 98.72842407226562 53.326087951660156 99.20687866210938 53.326087951660156 100.163818359375 L 53.326087951660156 134.9208984375 C 50.01615905761719 135.64572143554688 47.18064880371094 135.8807373046875 45.135841369628906 135.58316040039062 Z" fill={this.color || "#000"} fill-rule="nonzero" stroke="none" stroke-width="0.3377420396645192" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal" transform="matrix(1 0 0 1 -63.8154 -125.874)" fill-opacity="1" />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
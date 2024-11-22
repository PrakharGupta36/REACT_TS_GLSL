precision mediump float;

uniform sampler2D u_texture;

varying vec2 vUv;
varying float vElevation;

void main(){
  vec4 textureColor = texture2D(u_texture,vUv);
  textureColor.rgb *= vElevation * 1.1 + 0.5;
  gl_FragColor = textureColor;
}
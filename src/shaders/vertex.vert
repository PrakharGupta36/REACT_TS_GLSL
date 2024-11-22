uniform float u_time;

varying vec2 vUv;
varying float vElevation;

void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.00);

  float elevation = cos(modelPosition.x * 2.0 + u_time * 2.0) * .1;

  elevation += cos(modelPosition.x * 2.0 + u_time * 2.0) * .1;

  modelPosition.z += elevation;

  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;

  // Varyings

  vUv = uv;
  vElevation = elevation;
}

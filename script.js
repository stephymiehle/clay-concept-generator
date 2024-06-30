const variables = {
  methods: {
    label: 'method',
    values: [
      'hand-built',
      'slab-built',
      'wheel-thrown',
    ],
  },
  forms: {
    label: 'form',
    values: [
      'abstract form',
      'bottle',
      'bowl',
      'cup',
      'figure',
      'jar',
      'jug',
      'mug',
      'pitcher',
      'plate',
      'teapot',
      'trinket dish',
      'vase',
      'wall piece',
    ],
  },
  inspirations: {
    label: 'inspiration',
    values: [
      'a place',
      'a memory',
      'a season',
      'an emotion',
      'abstract shapes',
      'an art movement',
      'animals',
      'architecture',
      'fashion',
      'geometric shapes',
      'nature',
    ],
  },
  deco_techniques: {
    label: 'decoration technique',
    values: [
      'a single color',
      'colored slip',
      'metallic luster',
      'sandblasting',
      'screen printing',
      'sgraffito',
      'slip trailing',
      'slip transfer',
      'stamping',
      'stencils',
      'wax resist',
    ],
  },
  atmospheres: {
    label: 'atmosphere',
    values: [
      'Cone 6 oxidation',
      'Cone 10 oxidation',
      'Cone 10 reduction',
      'the raku kiln',
    ],
  },
};

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRotation() {
  return `${Math.floor(Math.random() * 6) - 3}deg`;
}

function wrap(attr) {
  return `<span class="variable variable--${attr.label}" style="--rotation:${getRotation()}">${getRandom(attr.values)}</span>`;
}

function generateProduct() {
  const method = wrap(variables.methods);
  const form = wrap(variables.forms);
  const inspiration = wrap(variables.inspirations);
  const deco_technique = wrap(variables.deco_techniques);
  const atmosphere = wrap(variables.atmospheres);

  return `<p>Create a ${method} ${form} inspired by ${inspiration}.</p><p>Use ${deco_technique} to decorate your piece.</p><p>Fire in ${atmosphere}.</p>`;
}

function cycleFooterColor() {
  const footer = document.querySelector('footer');
  const currentClass = footer.getAttribute('class');
  let newClass;

  if (currentClass === 'theme-red') {
    newClass = 'theme-yellow';
  } else if (currentClass === 'theme-yellow') {
    newClass = 'theme-green';
  } else if (currentClass === 'theme-green') {
    newClass = 'theme-blue';
  } else if (currentClass === 'theme-blue') {
    newClass = 'theme-purple';
  } else {
    newClass = 'theme-red';
  }

  footer.setAttribute('class', newClass);
}

document.getElementById('prompt').innerHTML = generateProduct();

document.getElementById('reload').addEventListener('click', () => {
  document.getElementById('prompt').innerHTML = generateProduct();
  cycleFooterColor();
});
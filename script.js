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
      'planter',
      'teapot',
      'trinket dish',
      'vase',
      'wall piece',
    ],
  },
  inspirations: {
    label: 'inspiration',
    values: [
      // Art, Media, & Special Interests
      'a book',
      'a hobby',
      'a movie',
      'architecture',
      'famous artwork',
      'fashion',
      'patterns',

      // Concepts
      'a memory',
      'an emotion',

      // Creatures
      'a face',
      'animals',
      'birds',
      'cats',
      'dogs',
      'fish',
      'insects',
      'mythical creatures',
      'ocean life',
      'the human form',

      // History
      'an art movement',
      'an era',
      'mythology',

      // Locations
      'a landscape',
      'a place',
      'outer space',
      'the beach',
      'the desert',
      'the forest',
      'the jungle',
      'the moon',
      'the mountains',
      'the ocean',
      'the sky',
      'the sun',

      // Nature
      'cacti',
      'flowers',
      'fruit',
      'mushrooms',
      'plants',
      'trees',
      'water',
      'weather',

      // Time
      'a season',
      'nighttime',
      'the sunrise',
      'the sunset',

      // Shapes
      'abstract shapes',
      'geometric shapes',
      'organic shapes',
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
